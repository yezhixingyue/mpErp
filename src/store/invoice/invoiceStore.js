import CommonClassType from '@/store/CommonClassType';
import api from '../../api';
import Condition4InvoiceMakeUpList from './Condition4InvoiceMakeUpList';

export default {
  namespaced: true,
  state: {
    loading: false,
    /** 发票开具相关
     ---------------------------------------- */
    condition4InvoiceMakeUpList: new Condition4InvoiceMakeUpList(),
    InvoiceMakeUpList: [],
    InvoiceMakeUpListNumber: 0,
    InvoiceMakeUpTotalAmount: 0,
    /** 发票类别相关
     ---------------------------------------- */
    InvoiceInfoList: [],
    InvoiceInfoListNumber: 0,
    defaultItemInfo: null,
  },
  getters: {
  },
  mutations: {
    setLoading(state, bool) {
      state.loading = bool;
    },
    /** 发票开具相关
     ---------------------------------------- */
    setCondition4InvoiceMakeUpList(state, [[key1, key2], value]) {
      state.condition4InvoiceMakeUpList.setCondition([[key1, key2], value]);
    },
    clearCondition4InvoiceMakeUpList(state) {
      state.condition4InvoiceMakeUpList = new Condition4InvoiceMakeUpList();
    },
    transformCondition4InvoiceMakeUpList(state) {
      CommonClassType.setDate(state.condition4InvoiceMakeUpList, 'InvoiceApplyTime');
    },
    setInvoiceMakeUpList(state, { Data, DataNumber }) {
      state.InvoiceMakeUpList = Data;
      if (DataNumber || DataNumber === 0) state.InvoiceMakeUpListNumber = DataNumber;
    },
    setInvoiceMakeUpTotalAmount(state, AmountString) {
      state.InvoiceMakeUpTotalAmount = AmountString && Number(AmountString) > 0 ? AmountString : 0;
    },
    setItemStatusChange(state, temp) {
      const i = state.InvoiceMakeUpList.findIndex(it => it.InvoiceID === temp.InvoiceID);
      if (i > -1) {
        state.InvoiceMakeUpList.splice(i, 1, { ...state.InvoiceMakeUpList[i], ...temp });
      }
    },
    setInvoiceMakeUpListSuccess(state, { multipleSelection, info }) {
      if (multipleSelection.length === 0) return;

      const { InvoiceStatus, OperaterUserName, OperateTime } = info;

      const ids = multipleSelection.map(it => it.InvoiceID);

      state.InvoiceMakeUpList.filter(it => ids.includes(it.InvoiceID)).forEach(it => {
        const _it = it;
        _it.InvoiceStatus = InvoiceStatus;
        _it.OperateTime = OperateTime;
        _it.OperaterUserName = OperaterUserName;
      });
    },
    /** 发票类别相关
     ---------------------------------------- */
    setInvoiceInfoList(state, { Data, DataNumber }) {
      state.InvoiceInfoList = Data;
      if (DataNumber || DataNumber === 0) state.InvoiceInfoListNumber = DataNumber;
    },
    setInvoiceInfoItemChange(state, { itemData, isEdit, isRemove }) {
      if (isEdit || isRemove) { // 编辑 | 删除
        const i = state.InvoiceInfoList.findIndex(it => it.InvoiceCategoryID === itemData.InvoiceCategoryID);
        if (i > -1) {
          if (isEdit) {
            state.InvoiceInfoList.splice(i, 1, itemData);
          } else if (isRemove) {
            state.InvoiceInfoList.splice(i, 1);
            state.InvoiceInfoListNumber -= 1;
          }
        }
        return;
      }
      // 添加
      state.InvoiceInfoList.unshift(itemData);
      state.InvoiceInfoListNumber += 1;
    },
    setDefaultItemInfo(state, data) {
      state.defaultItemInfo = data || null;
    },
  },
  actions: {
    /** 发票开具相关
     ---------------------------------------- */
    async getInvoiceMakeUpList({ state, commit }, page = 1) {
      // 获取发票开具列表数据
      commit('setCondition4InvoiceMakeUpList', [['Page', ''], page]);
      commit('transformCondition4InvoiceMakeUpList');

      commit('setInvoiceMakeUpList', { Data: [], DataNumber: undefined });
      if (page === 1) {
        commit('setInvoiceMakeUpTotalAmount', 0);
      }

      const temp = CommonClassType.filter(state.condition4InvoiceMakeUpList, true);

      commit('setLoading', true);
      const resp = await api.getInvoiceManageList(temp).catch(() => null); // 需要改接口
      commit('setLoading', false);

      if (resp && resp.data.Status === 1000) {
        commit('setInvoiceMakeUpList', resp.data);

        if (page === 1) {
          commit('setInvoiceMakeUpTotalAmount', resp.data.Message);
        }
      }
    },
    /** 发票类别相关
     ---------------------------------------- */
    async getInvoiceInfoList({ commit }) {
      // 获取发票类别列表数据
      commit('setInvoiceInfoList', { Data: [], DataNumber: undefined });
      commit('setDefaultItemInfo', null);
      commit('setLoading', true);
      const resp = await api.getInvoiceCategoryList().catch(() => null); // 包含默认和非默认 分开保存
      if (resp && resp.data.Status === 1000) {
        const list = resp.data.Data || [];
        const defaultItem = list.find(it => it.IsDefault);
        const others = list.filter(it => !it.IsDefault);
        commit('setInvoiceInfoList', { Data: others, DataNumber: defaultItem ? resp.data.DataNumber - 1 : resp.data.DataNumber });
        commit('setDefaultItemInfo', defaultItem);
      }
      commit('setLoading', false);
    },
  },
};
