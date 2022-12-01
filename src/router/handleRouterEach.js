import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import messageBox from '../assets/js/utils/message';
import store from '../store';
import TokenClass from '../assets/js/utils/tokenManage';
import { getLastRouteInfoByName } from './getLastRouteInfoByName';
import router from './index';

// if (window.location.protocol.includes('https')) {
//   window.location = window.location.href.replace('https', 'http');
// }

/*  页面进度条
------------------------------------------ */
NProgress.configure({
  trickleSpeed: 50,
  showSpinner: false,
});

/*  处理跳转报错
------------------------------------------ */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

/**
 * @description: 主要作用为在页面跳转时向vuex中加入跳转前的历史记录
 * @param {*}
 * @return {*}
 */
const NextHandler = (from, to, next) => {
  store.commit('common/setLastPagePaths', from);
  next();
};

/**
 * @description: 记录是否为首次初始化运行
 */
let isInit = true;

/**
  * 处理权限验证信息，在forEach中使用
  *
  * @param {*} to
  * @param {*} next
  * @param {*} Permission 权限信息列表
  */
function handlePermission(to, next, Permission, from) {
  let key = Permission;
  if (!to.meta.PermissionInfo) { // 如果没有设定则予以通过
    key = true;
  } else {
    try {
      if (process.env.NODE_ENV === 'development' && to.meta.PermissionInfo && to.meta.PermissionInfo[0] && to.meta.PermissionInfo[0] === 'Developing') {
        key = true;
      } else {
        to.meta.PermissionInfo.forEach(item => { // 2.5 获取到当前页面所需要的权限信息，看是否满足权限要求
          key = key[item];
        });
      }
    } catch (error) {
      messageBox.failSingleError(undefined, '[ 权限信息读取失败 ]');
    }
  }
  if (key) {
    if (isInit) { // 初始根页面跳转
      if (to.matched.length >= 2) {
        if (to.name) {
          const t = getLastRouteInfoByName(to.name, 'root');
          if (t) next({ name: t });
        }
      }
      isInit = false;
    }
    if (from.name !== to.name) NProgress.start();
    NextHandler(from, to, next); // 2.6 如果满足权限要求则允许跳转， 否则跳转提示页面
  } else next({ path: '/notauth' });
}

/**
   * @description:  用于替代系统回退的方法
   * @param {*}
   * @return {*}
   */
export const goBackLastPage = () => {
  if (!router || !router.currentRoute) return;
  const curRouteName = router.currentRoute.name;
  if (!curRouteName) return;
  // 1 首先找到其上一级的路由name名称
  const lastRouteName = getLastRouteInfoByName(curRouteName);
  if (!lastRouteName) return;
  // 2 然后根据该name名称在lastPaths中从后往前找到其上级name所对应的路径名称
  const lastPaths = store.state.common.lastPagePaths;
  if (!Array.isArray(lastPaths)) return;
  const t = lastPaths.find(it => it.name === lastRouteName);
  if (!t) return;

  // 3 完成跳转 并在缓存状态中清除掉刚已跳转离开的页面缓存信息
  router.replace(t.fullPath);
  setTimeout(() => {
    store.commit('common/setLastPagePathsFilterAfterGoback', curRouteName);
  }, 0);
};

const handleRouterEach = (_router) => {
  _router.beforeEach((to, from, next) => { // 使用全局路由导航守卫进行权限控制
    if (to.path === '/pathFromClient') {
      const { url, token } = to.query;
      if (url && token) {
        TokenClass.setToken(token);
        next({
          path: url,
          query: {},
        });
        return;
      }
    }
    const token = TokenClass.getToken();
    if (to.matched.some(record => record.meta.requiresAuth)) { // 2.2 判断要去往的页面中有无token要求，如果无则跳转否则则进入判
      if (to.name === 'login') { // 2.3 登录页面不考虑，直接跳转
        if (token) { // 如果有token 不允许跳转
          next({ name: 'home' });
        } else {
          TokenClass.removeToken();
          NextHandler(from, to, next);
        }
      } else if (token) { // 2.4 如果有token信息，获取到当前用户权限信息
        const permission = store.state.common.Permission;
        if (!permission || permission.Token !== token) {
          TokenClass.getPermission(token).then(res => {
            if (res && Object.prototype.toString.call(res) === '[object Object]' && res.Token && res.Token === token) {
              store.commit('common/setPermission', res);
              handlePermission(to, next, res.PermissionList, from);
            }
          });
        } else if (permission.Token === token) {
          handlePermission(to, next, permission.PermissionList, from);
        } else {
          TokenClass.removeToken();
          next({
            path: '/login',
          });
        }
      } else { // 如果没有token，跳转登录或提示页面
        TokenClass.removeToken();
        next({
          path: '/login', // 此处应当跳转登录页面
          // query: { redirect: to.fullPath },
        });
      }
    } else if (to.name === 'login' && token) {
      next({ name: 'home' });
    } else {
      TokenClass.removeToken();
      NextHandler(from, to, next);
    }
  });

  _router.afterEach((to) => {
    if (to.meta.title) { // 1. 根据路由元信息中title信息设置页面标题
      document.title = `${to.meta.title} - 名片之家后台管理系统`;
    }
    NProgress.done();
  });

  /**
   * @description: 阻止并替换浏览器默认回退方法
   * @param {*}
   * @return {*}
   */
  window.addEventListener('popstate', () => {
    let url = '/';
    if (_router && _router.currentRoute && _router.currentRoute.fullPath) {
      url = `#${_router.currentRoute.fullPath}`;
    }
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, null, url);
    goBackLastPage();
  });

  Vue.prototype.$goback = goBackLastPage;
};

export default handleRouterEach;
