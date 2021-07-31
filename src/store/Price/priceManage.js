import api from '@/api/index';
import messageBox from '@/assets/js/utils/message';
import CommonClassType from '@/store/CommonClassType';
import PropertyClass from '@/assets/js/TypeClass/PropertyClass';
import { getIDFromListByNames } from '@/assets/js/utils/util';

const initConditon = {
  ProductClass: {
    First: '',
    Second: '',
    Third: '',
  },
  Page: 1,
  PageSize: 24,
  KeyWords: '',
  FieldType: 4,
  NoPrice: false,
};

export default {
  namespaced: true,
  state: {
    /** 请求列表数据的对象
     ---------------------------------------- */
    condition4PriceManageList: JSON.parse(JSON.stringify(initConditon)),
    PriceManageList: [], // 价格产品列表
    PriceManageListNumber: 0,
    isPriceDataLoading: false,
    ApplyRangeTemplateList: [], // 适用范围数据列表
    ApplyRangeTemplateListFetched: false,
    MakeupControlTypeList: [
      { Name: '尺寸数量', ID: 0 },
      { Name: '拼版幅面', ID: 1 },
      { Name: '拼版规则', ID: 2 },
      { Name: '拼版算法', ID: 3 },
      { Name: '印刷次数', ID: 4 },
      { Name: '物料损耗', ID: 5 },
    ],
    /** 拼版控制相关
     ---------------------------------------- */
    MakeupCtrlBeginPropList: [], // 拼版控制左侧弹窗条件属性
    ProductFormulaPropertyList: [],
    curMakeupItemEditData: null,
    CuttingRuleList: [
      { Name: '最大数量', ID: 0 },
      { Name: '考虑通刀', ID: 1 },
      { Name: '方向一致', ID: 2 },
    ],
    PrintTimesRuleList: [
      { Name: '两倍纸张数量', ID: 0 },
      { Name: '纸张数量', ID: 1 },
    ],
    WastageRuleList: [
      { Name: '物料损耗设为', ID: 0 },
      { Name: '物料损耗增加', ID: 1 },
    ],
    WastageUnitTypeList: [
      { Name: '展开物料数量', ID: 1 },
      { Name: '印刷幅面物料数量', ID: 2 },
    ],
    WastageUnitList: [
      { Name: '%', ID: 0 },
      { Name: '张', ID: 1 },
    ],
    /** 子条件
    ----------------------------------------- */
    ChildConditionPropertyList: [],
    curChildConditionEditData: null,
    /**
     * 计算公式与子公式相关
     */
    curEditFormulaData: null,
    curEditSubFormulaData: null,
    curSubFormulaAddProperty: null,
    /** 单条价格条目相关
    ----------------------------------------- */
    curPriceItem: null,
    ProductCraftDataObj: null, // 工艺费产品及部件工艺数据汇总对象
    curCraftPriceItemData: null, // 正在设置工艺费用的单个工艺数据信息
    curQuotationSchemeData: null, // 当前正在编辑的报价方案数据
    curQuotationResultData: null, // 报价结果
    curSolutionItem: null, // 设置费用表用到的当前费用方案条目数据
    curEditPriceItemData: null, // 当前正在编辑的费用表数据信息
    PriceItemPropertyList: [], // 价格表 X Y轴属性选择列表数据
  },
  getters: {
  },
  mutations: {
    /** 设置请求列表数据的对象信息
     ---------------------------------------- */
    setCondition4PriceManageList(state, [[key1, key2], value]) {
      if (!key2) state.condition4PriceManageList[key1] = value;
      else state.condition4PriceManageList[key1][key2] = value;
    },
    /** 设置请求列表数据 及 条目数量
     ---------------------------------------- */
    setPriceManageList(state, [list, count]) {
      state.PriceManageList = list;
      if (!count && count !== 0) return;
      state.PriceManageListNumber = count;
    },
    /** 设置列表数据是否正在加载中
     ---------------------------------------- */
    setIsPriceDataLoading(state, bool) {
      state.isPriceDataLoading = bool;
    },
    /** 清除列表数据请求信息
     ---------------------------------------- */
    clearCondition4PriceManageList(state) {
      state.condition4PriceManageList = JSON.parse(JSON.stringify(initConditon));
    },
    setApplyRangeTemplateList(state, [list, bool = true]) { // 设置适用范围列表
      state.ApplyRangeTemplateList = list;
      state.ApplyRangeTemplateListFetched = bool;
    },
    /** 添加 | 编辑 产品价格
     ---------------------------------------- */
    setPriceItemSave(state, [data, type]) {
      const t = state.PriceManageList.find(it => it.ID === data.ProductID);
      if (!t) return;
      if (type === 'edit') {
        const i = t.PriceList.findIndex(it => it.ID === data.ID);
        if (i > -1) t.PriceList.splice(i, 1, data);
      }
      if (type === 'add') {
        t.PriceList.unshift(data);
      }
    },
    setPriceItemRemove(state, [ProductID, ID]) {
      const t = state.PriceManageList.find(it => it.ID === ProductID);
      if (t) {
        t.PriceList = t.PriceList.filter(it => it.ID !== ID);
      }
    },
    setPriceModeSetup(state, data) { // 设置报价方式
      if (!data) return;
      // eslint-disable-next-line no-unused-vars
      const { ID, ProductID, IsOwnPrice, BasePriceID, ReferencePriceList } = data;
      const t = state.PriceManageList.find(it => it.ID === ProductID);
      if (t) {
        const targetPrice = t.PriceList.find(it => it.ID === ID);
        if (targetPrice) {
          targetPrice.IsOwnPrice = IsOwnPrice;
          if (!IsOwnPrice) {
            // console.log(BasePriceID, ReferencePriceList);
            // 按比例计算  尚未写 ReferencePriceList
            // eslint-disable-next-line no-alert
            alert('按比例计算  该情况有前置模块未完成 尚未写完');
          }
        }
      }
    },
    /** 拼版控制相关
    ----------------------------------------- */
    setMakeupPropertyList(state, [MakeupCtrlBeginPropList, MakeupCtrlAfterPropList, ProductFormulaList]) {
      state.MakeupCtrlBeginPropList = Array.isArray(MakeupCtrlBeginPropList) ? MakeupCtrlBeginPropList : [];
      state.MakeupCtrlAfterPropList = Array.isArray(MakeupCtrlAfterPropList) ? MakeupCtrlAfterPropList : [];
      state.ProductFormulaPropertyList = Array.isArray(ProductFormulaList) ? ProductFormulaList : [];
    },
    setCurMakeupItemEditData(state, data) {
      state.curMakeupItemEditData = data;
    },
    /** 子条件
    ----------------------------------------- */
    setChildConditionPropertyList(state, list) {
      state.ChildConditionPropertyList = list;
    },
    setCurChildConditionEditData(state, data) {
      state.curChildConditionEditData = data;
    },
    /**
     * 计算公式与子公式相关
     */
    setCurEditFormulaData(state, data) {
      state.curEditFormulaData = data;
    },
    setCurEditSubFormulaData(state, data) {
      state.curEditSubFormulaData = data;
    },
    setCurSubFormulaAddProperty(state, data) { // 添加子公式选中的属性
      state.curSubFormulaAddProperty = data;
    },
    /** 单条价格条目相关
    ----------------------------------------- */
    setCurPriceItem(state, data) {
      state.curPriceItem = data;
    },
    setPriceItemMakeupSolutionChange(state, [ProductID, PriceID, Type, SolutionID]) { // 设置拼版方案选择
      const t = state.PriceManageList.find(it => it.ID === ProductID);
      if (t) {
        const targetPrice = t.PriceList.find(it => it.ID === PriceID);
        if (targetPrice) {
          const targetType = targetPrice.MakeupList.find(it => it.Type === Type);
          if (targetType) targetType.Solution = { ID: SolutionID };
        }
      }
    },
    setProductCraftDataObj(state, itemData) {
      if (!itemData) return;
      const { ID } = itemData;
      if (!state.ProductCraftDataObj) state.ProductCraftDataObj = {};
      state.ProductCraftDataObj[ID] = itemData;
    },
    setCurCraftPriceItemData(state, data) {
      state.curCraftPriceItemData = data;
    },
    setCurQuotationSchemeData(state, data) {
      state.curQuotationSchemeData = data;
    },
    setCurQuotationResultData(state, data) {
      state.curQuotationResultData = data;
    },
    setPriceItemSolutionListChange(state, [ProductID, PriceID, isEdit, data, itemID]) { // 报价方案添加编辑后的处理函数，用于同步修改列表数据
      const t = state.PriceManageList.find(it => it.ID === ProductID); // 目标产品
      if (t) {
        const t2 = t.PriceList.find(it => it.ID === PriceID); // 目标价格条目
        if (t2) {
          if (!isEdit) {
            t2.SolutionList.unshift({ ...data, ID: itemID });
            return;
          }
          const i = t2.SolutionList.findIndex(it => it.ID === itemID); // 目标方案索引
          if (i > -1) {
            t2.SolutionList.splice(i, 1, data);
          }
        }
      }
    },
    setPriceItemSolutionListRemove(state, [ProductID, PriceID, itemID]) { // 报价方案删除
      const t = state.PriceManageList.find(it => it.ID === ProductID); // 目标产品
      if (t) {
        const t2 = t.PriceList.find(it => it.ID === PriceID); // 目标价格条目
        if (t2) {
          t2.SolutionList = t2.SolutionList.filter(it => it.ID !== itemID);
        }
      }
    },
    setPriceItemSolutionItemRemove(state, [ProductID, PriceID, itemID, isQuotationPage, CraftPriceID]) { // 工艺费 - 价格表 顶部价格方案删除
      const t = state.PriceManageList.find(it => it.ID === ProductID); // 目标产品
      if (t) {
        const t2 = t.PriceList.find(it => it.ID === PriceID); // 目标价格条目
        if (t2) {
          if (isQuotationPage) {
            t2.PriceTableList = t2.PriceTableList.filter(it => it.ID !== itemID);
          } else {
            const t3 = t2.CraftPriceList.find(it => it.ID === CraftPriceID);
            if (t3) {
              t3.PriceTableList = t3.PriceTableList.filter(it => it.ID !== itemID);
            }
          }
        }
      }
    },
    setPriceItemSolutionItemChange(state, [ProductID, PriceID, itemData, itemID, isQuotationPage, CraftPriceID]) { // 工艺费 - 价格表 顶部价格方案编辑和添加
      const t = state.PriceManageList.find(it => it.ID === ProductID); // 目标产品
      if (t) {
        const t2 = t.PriceList.find(it => it.ID === PriceID); // 目标价格条目
        if (t2) {
          const setFunc = list => {
            if (!itemData.ID) { // 添加
              list.push({ ...itemData, ID: itemID });
            } else { // 编辑
              const i = list.findIndex(it => it.ID === itemData.ID);
              if (i > -1) list.splice(i, 1, itemData);
            }
          };
          if (isQuotationPage) {
            if (Array.isArray(t2.PriceTableList)) setFunc(t2.PriceTableList);
            else t2.PriceTableList = [{ ...itemData, ID: itemID }];
          } else {
            const t3 = t2.CraftPriceList.find(it => it.ID === CraftPriceID);
            if (t3) {
              if (Array.isArray(t3.PriceTableList)) setFunc(t3.PriceTableList);
              else t3.PriceTableList = [{ ...itemData, ID: itemID }];
            }
          }
        }
      }
    },
    setCurSolutionItem(state, data) {
      state.curSolutionItem = data;
    },
    setCurEditPriceItemData(state, data) {
      state.curEditPriceItemData = data;
    },
    setPriceItemPropertyList(state, list) {
      state.PriceItemPropertyList = list;
    },
  },
  actions: {
    async getPriceManageList({ state, commit }, page = 1) { // 获取产品列表数据
      commit('setCondition4PriceManageList', [['Page', ''], page]);
      commit('setPriceManageList', [[], undefined]);
      const _obj = CommonClassType.filter(state.condition4PriceManageList);
      commit('setIsPriceDataLoading', true);
      let key = true;
      const res = await api.getManageProductLists(_obj).catch(() => { key = false; });
      commit('setIsPriceDataLoading', false);
      if (key && res && res.status === 200 && res.data.Status === 1000) {
        commit('setPriceManageList', [res.data.Data, res.data.DataNumber]);
      }
    },
    async getPriceItemRemove({ commit }, { ProductID, ID }) { // 价格删除
      const resp = await api.getProductPriceRemove(ID).catch(() => {});
      if (resp && resp.data.Status === 1000) {
        const cb = () => {
          commit('setPriceItemRemove', [ProductID, ID]);
        };
        messageBox.successSingle('删除成功', cb, cb);
      }
    },
    async getApplyRangeTemplateList({ commit, state }) { // 获取范围模板列表
      if (state.ApplyRangeTemplateListFetched) return;
      const resp = await api.getApplyRangeTemplateList().catch(() => {});
      if (resp && resp.data.Status === 1000) {
        commit('setApplyRangeTemplateList', [resp.data.Data]);
      }
    },
    async getPriceModeSetup({ commit }, [data, callback]) { // 设置报价方式
      const temp = { ...data };
      if (temp.IsOwnPrice) {
        delete temp.BasePriceID;
        delete temp.ReferencePriceList;
      }
      const resp = await api.getPriceModeSetup(temp).catch(() => {});
      if (resp && resp.data.Status === 1000) {
        const cb = () => {
          commit('setPriceModeSetup', temp);
          if (callback) callback();
        };
        messageBox.successSingle('保存成功', cb, cb);
      }
    },
    async getMakeupPropertyList({ commit }, ProductID) { // 获取拼版控制左侧弹窗属性列表数据
      commit('setMakeupPropertyList', []);
      const [MakeupCtrlBeginPropList, MakeupCtrlAfterPropList, ProductFormulaResp] = await Promise.all([
        PropertyClass.getPropertyList({ UseModule: 12, ProductID }),
        PropertyClass.getPropertyList({ UseModule: 30, ProductID }),
        api.getProductFormulasList(ProductID).catch(() => {}), // 设置尺寸数量
      ]);
      const ProductFormulaList = ProductFormulaResp && ProductFormulaResp.data.Status === 1000 ? ProductFormulaResp.data.Data : [];
      if (MakeupCtrlBeginPropList && MakeupCtrlAfterPropList && ProductFormulaResp && ProductFormulaResp.data.Status === 1000) {
        commit('setMakeupPropertyList', [MakeupCtrlBeginPropList, MakeupCtrlAfterPropList, ProductFormulaList]);
        return true;
      }
      commit('setMakeupPropertyList', [MakeupCtrlBeginPropList || [], MakeupCtrlAfterPropList || [], ProductFormulaList]);
      return false;
    },
    async getChildConditionPropertyList({ commit }, PartIDs) {
      commit('setChildConditionPropertyList', []);
      const respList = await Promise.all(PartIDs.map(PartIDObj => PropertyClass.getPropertyList({ UseModule: 27, ...PartIDObj })));
      if (respList) {
        commit('setChildConditionPropertyList', respList);
      }
    },
    async getProductCraftData({ state, commit, rootState }, ProductID) { // 获取产品及部件工艺信息
      if (state.ProductCraftDataObj && state.ProductCraftDataObj[ProductID]) {
        return state.ProductCraftDataObj[ProductID];
      }
      const dataType = ['Craft', 'Part'];
      const List = getIDFromListByNames(dataType, rootState.productManage.ProductModuleKeyIDList);
      const _temp = { ID: ProductID, List };
      const resp = await api.getProductModuleData(_temp).catch(() => {});
      if (resp && resp.data && resp.data.Status === 1000) {
        commit('setProductCraftDataObj', resp.data.Data);
        return resp.data.Data;
      }
      return null;
    },
    async getPriceTablePropertyList({ commit }, ProductID) { // 获取价格表X Y轴选择属性列表数据
      commit('setPriceItemPropertyList', []);
      const list = await PropertyClass.getPropertyList({ UseModule: 30, ProductID });
      if (list) {
        commit('setPriceItemPropertyList', list);
      }
    },
  },
};
