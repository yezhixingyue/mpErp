/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */


import api from '@/api/index';

import config from '@/assets/js/setup';

import { extname } from '@/assets/js/utils/util';

const sha1 = require('js-sha1');

/**
   * @description: 解析文件，获取文件唯一标识名称
   * @param {*} file
   * @return {*}
   */
export const getUniqueFileName = ({ file, Terminal, TypeID, CustomerID }) => {
  const ext = extname(file.name);
  const combineName = `${CustomerID}${Terminal}${TypeID || ''}${file.name}${file.lastModified}${file.size}`; // 按照规则进行组合
  return `${sha1(combineName)}.${ext}`;
};

const chunkSize = 1024 * 1024 * 10;

/**
 * 传入两个参数，用于获取其百分比
 *
 * @param {*} num1
 * @param {*} num2
 * @returns
 */
function _getPercentage(num1, num2, finalPercentage) {
  let res = ((num1 / num2) * 100).toFixed(2);
  if (res >= finalPercentage) res = +finalPercentage;
  return res;
}

/**
 * 设置上传百分比进度
 *
 * @param {*} e 上传的事件参数
 * @param {*} { initPercentage, lastedPercentage, onUploadProgressFunc } 分别为当次上传初始百分比、最终百分比及修改百分比的方法
 */
function _onUploadProgressFunc(e, { initPercentage, lastedPercentage, onUploadProgressFunc }) {
  const tempPer = +initPercentage + +((e.loaded / e.total) * (lastedPercentage - initPercentage)).toFixed(2);
  const willPer = (+`${tempPer.toFixed(2)}0`).toFixed(2);
  if (willPer) onUploadProgressFunc(willPer);
}
/**
 * 用于文件切片后上传
 *
 * @param {*} chunkCount 需要上传的总次数
 * @param {*} curChunkNum 当前切片上传起始位置
 * @param {*} { data, uniqueName, onUploadProgressFunc }  主函数参数
 * @returns
 */
async function uploadFile(chunkCount, curChunkNum, { data, uniqueName, onUploadProgressFunc, finalPercentage, baseURL }) {
  if (chunkCount <= 0) return;
  const beginNode = curChunkNum;
  const initPercentage = _getPercentage(beginNode, data.size); // 当次初始百分比
  onUploadProgressFunc(initPercentage);
  if (chunkCount === 1) {
    const file = data.slice(beginNode, data.size);
    const lastedPercentage = finalPercentage; // 当次最终百分比
    await api.UploadFileBreakpointResume(file, uniqueName, beginNode, data.size, data.size, (e) => _onUploadProgressFunc(e, { initPercentage, lastedPercentage, onUploadProgressFunc }), baseURL);
    return;
  }
  const file = data.slice(beginNode, beginNode + chunkSize); // 切片
  let lastedPercentage = _getPercentage(beginNode + chunkSize, data.size); // 当次最终百分比
  lastedPercentage = lastedPercentage > finalPercentage ? +finalPercentage : lastedPercentage;
  const res = await api.UploadFileBreakpointResume(file, uniqueName, beginNode, beginNode + chunkSize, data.size, (e) => _onUploadProgressFunc(e, { initPercentage, lastedPercentage, onUploadProgressFunc }), baseURL); // 上传(传入header Content-Range中所需要的信息)
  if (res.data.Status === 1000) await uploadFile(chunkCount - 1, beginNode + chunkSize, { data, uniqueName, onUploadProgressFunc, baseURL }); // 递归调用
  else throw new Error(res.data.Message);
}

/**
 *  用于检查是否已上传完成
 *
 * @param {*} data 文件总数据
 * @param {*} uniqueName 文件唯一标识
 * @returns 返回布尔值
 */
async function checkIsTrue(data, uniqueName, baseURL) {
  let key = true;
  const hasUploadedInfo = await api.getUploadedProgress(uniqueName, baseURL).catch(() => {
    key = false;
  });
  if (hasUploadedInfo.data.Status !== 1000) return false;
  if (hasUploadedInfo.data.Data < data.size) return false;
  if (!key) return false;
  return true;
}

/**
 * 断点续传主函数，接收三个参数
 *
 * @param {*} data 需要上传的文件总数据
 * @param {*} uniqueName 文件的唯一标识名称
 * @param {*} onUploadProgressFunc 回调函数，用于设置进度条的百分比
 * @returns 返回true或false，用于告知该函数上传结果: 成功 还是 失败
 */
async function breakPointUpload(data, uniqueName, onUploadProgressFunc, finalPercentage = 100) {
  let key = true;
  const domainResp = await api.getFileServer(config.Position).catch(() => {
    key = false;
  });
  if (!key) return false;
  if (!domainResp || domainResp.data.Status !== 1000) return false;
  const baseURL = domainResp.data.Data;
  // console.log(domainResp, baseURL);
  if (!baseURL) return false;
  const hasUploadedInfo = await api.getUploadedProgress(uniqueName, baseURL).catch(() => {
    key = false;
  });
  if (!key) return false;
  if (hasUploadedInfo.data.Status !== 1000) return false; // 获取已上传信息

  if (+hasUploadedInfo.data.Data < +data.size) {
    // onUploadProgressFunc(_getPercentage(hasUploadedInfo.data.Data, data.size, finalPercentage)); // 根据已上传信息设置初始已上传百分比

    const chunkCount = Math.ceil((data.size - hasUploadedInfo.data.Data) / (chunkSize)); // 计算出总共需要上传的次数
    const curChunkNum = +hasUploadedInfo.data.Data; // 获取到当前已上传的节点位置
    let key2 = true;
    await uploadFile(chunkCount, curChunkNum, {
      data, uniqueName, onUploadProgressFunc, finalPercentage, baseURL,
    }).catch(() => {
      key2 = false;
    }); // 上传
    if (!key2) return false;
    if (await checkIsTrue(data, uniqueName, baseURL)) return true;
    return false;
  }
  onUploadProgressFunc(+finalPercentage);
  return true;
}

export default breakPointUpload;
