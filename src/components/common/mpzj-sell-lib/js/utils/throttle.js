/*
 * @Author: your name
 * @Date: 2020-03-18 14:51:56
 * @LastEditTime: 2022-11-28 16:02:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /src/components/common/mpzj-sell-lib/js/utils/throttle.js
 */
/**
   * @desc 函数防抖 -- 在某种操作延迟一段时间后再执行，如果中间一直有操作则一直延迟
   * @param func 函数
   * @param wait 延迟执行毫秒数
   * @param immediate true 表立即执行，false 表非立即执行  --立即执行指先执行一次然后再开始防抖判断
   */
export function debounce(func, wait, immediate) {
  let timeout;

  return function a(...args) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}
/**
   * @desc 函数节流 -- 一段时间内只允许执行一次事件，防止在极短时间内触发大量事件
   * @param {*} func 函数
   * @param {*} delay 延迟多长事件后执行
   * @returns
   */
export function throttle(func, delay) {
  // let timer = null;
  let startTime = Date.now();
  return function b(...args) {
    const curTime = Date.now();
    const remaining = delay - (curTime - startTime);
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    // clearTimeout(timer);
    // timer = null;
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      // console.log(timer, 'timer');
      // timer = setTimeout(func, remaining);
    }
  };
}

export default { debounce, throttle };
