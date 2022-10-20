import CommonNullView from '@/components/Layout/CommonNullView.vue';

const routes = { // 基本设置
  path: '/transformer',
  component: CommonNullView,
  name: 'transformer',
  meta: {
    title: '信息转换',
    requiresAuth: true,
    icon: 'el-icon-s-help',
  },
  children: [
    /*  转换设置
    ------------------------------------------ */
    {
      path: '/transformerList',
      name: 'transformerList',
      meta: {
        title: '转换设置',
        icon: 'el-icon-s-help',
        pageName: 'TransformerListPage',
        // PermissionInfo: ['PermissionManageStaffBase', 'HavePomission'],
        requiresAuth: true,
      },
      component: () => import('@/views/transformer/TransformerListPage.vue'),
    },
    {
      path: '/mapAssist',
      name: 'mapAssist',
      meta: {
        title: '辅助文件映射',
        hideMenu: true,
        pageName: 'assistMapPage',
        // PermissionInfo: ['PermissionManageStaffBase', 'HavePomission'],
        requiresAuth: true,
      },
      component: () => import('@/views/transformer/commonSetupPages/assistMapPage.vue'),
    },
  ],
};

const routeTree = {
  name: 'transformer',
  isModuleRoot: true,
  children: [
    /*  转换设置
    ------------------------------------------ */
    {
      name: 'transformerList',
      children: [
        { name: 'mapAssist', children: [] },
      ],
    },
  ],
};

export default {
  routes,
  routeTree,
};
