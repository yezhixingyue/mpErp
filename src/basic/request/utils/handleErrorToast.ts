import { MpMessage } from '@/assets/js/utils/MpMessage';
import { Message } from 'element-ui';
import type { IMpzjResponse, IResponseType } from '../request-lib/core/types';

const getErrorTitle = (response: IResponseType<IMpzjResponse>) => { // 后续补充513错误
  let msg = '';

  switch (response?.status) {
    case 401:
      msg = '401 | 请重新登录';
      break;
    case 403:
      msg = '403 | 无权限';
      break;
    case 404:
      msg = '404 | 资源未找到';
      break;
    case 413:
      msg = '413 | 文件导出数据过大，请尝试缩小导出时间区间或精确筛选条件';
      break;
    case 500:
      msg = '500 | 服务器内部错误';
      break;
    case 501:
      msg = '501 | 服务器无法识别请求';
      break;
    case 502:
      msg = '502 | 网关错误';
      break;
    case 503:
      msg = '503 | 服务不可用';
      break;
    case 504:
      msg = '504 | 网关超时';
      break;
    case 505:
      msg = '505 | HTTP 版本不受支持';
      break;
    default:
      msg = response?.data?.Message || '系统暂无响应，请重试';
      break;
  }

  return msg;
};

export const handleErrorToast = (response: IResponseType<IMpzjResponse>, clearAndBackLogin: () => void) => {
  const msg = getErrorTitle(response);

  if ([401, 403].includes(response?.status)) {
    Message({ showClose: true, message: msg, type: 'error' });
    clearAndBackLogin();
    return;
  }

  const cb = () => {
    if ([401, 403].includes(response?.status)) { // 清除状态 | 退出登录 -- 方法由外部传入
      clearAndBackLogin();
    }
  };

  MpMessage.error({
    title: '操作失败',
    msg: `[ ${msg} ]`,
    onCancel: cb,
    onOk: cb,
  });
};
