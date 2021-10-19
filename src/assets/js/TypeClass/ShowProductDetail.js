import store from '@/store';


// ------------------------------------------- ↓ 下面为通过详情数据获取到产品详细信息
const getElementValueContentFromDetail = (target, giveUpUnit) => {
  let Content = '';
  if (Array.isArray(target.CustomerInputValues) && target.CustomerInputValues.length > 0) {
    if (target.CustomerInputValues.length > 1) {
      Content = target.CustomerInputValues.map(it => it.Name).join('、');
    } else if (target.Attributes.Type === 3 && !target.CustomerInputValues[0].IsOpen) {
      Content = '';
    } else {
      Content = target.CustomerInputValues[0].Name;
      if (target.Attributes.Unit && !giveUpUnit) Content += target.Attributes.Unit;
    }
  }
  const Label = target.Attributes.Name;
  return { Label, Content };
};

const getDisplayContentByElementFromDetailData = (ElementList, item, giveUpUnit) => {
  if (item && item.Property && Array.isArray(ElementList) && ElementList.length > 0) {
    const target = ElementList.find(it => it.ElementID === item.Property.ID);
    if (target) {
      const { Label, Content } = getElementValueContentFromDetail(target, giveUpUnit);
      if (Label && Content) {
        return { Label, Content };
      }
    }
  }
  return null;
};

const getDisplayContentByGroupFromDetailData = (GroupList, item, isStringify) => {
  if (Array.isArray(GroupList) && GroupList.length > 0 && item) {
    const target = GroupList.find(it => it.GroupID === item.Property.ID);
    if (target && target.List.length > 0) {
      let _list = [];
      target.List.forEach(valList => {
        const groupItemContent = valList.List
          .map(_it => {
            const t = getDisplayContentByElementFromDetailData(valList.List, { Property: { ID: _it.ElementID } });
            return t;
          })
          .filter(_it => _it && _it.Label && _it.Content)
          .map(({ Label, Content }) => `${Label}：${Content}`);
        if (groupItemContent) {
          _list.push(groupItemContent);
        }
      });
      if (_list.length > 0) {
        _list = _list.map((Content, i) => {
          const Label = _list.length > 1 ? `${target.Attributes.Name}-${i + 1}` : target.Attributes.Name;
          return { Label, Content };
        });
        if (!isStringify) return _list;

        let str = '';
        _list.forEach(_it => {
          const { Label, Content } = _it;
          str += `，${Label}：${Content}`;
        });
        return str;
      }
    }
  }
  return null;
};

const getCraftItemContentNameFromDetailData = (Craft, isStringify) => {
  if (!Craft) return { Name: '工艺' };
  const { ElementList, GroupList } = Craft;
  if (
    (!Array.isArray(ElementList) || ElementList.length === 0)
      && (!Array.isArray(GroupList) || GroupList.length === 0)
  ) return { Name: Craft.Attributes.DisplayName };
  const ElContent = [];
  const GroupContent = [];
  const hasElementList = Array.isArray(ElementList) && ElementList.length > 0;
  const hasGroupList = Array.isArray(GroupList) && GroupList.length > 0;
  const hiddenGroupName = !hasElementList && hasGroupList && GroupList.length === 1;
  if (hasElementList) {
    ElementList.forEach((it) => {
      const _data = getElementValueContentFromDetail(it);
      if (_data) {
        const { Label, Content } = _data;
        if (Label && Content) {
          ElContent.push(`${Label}：${Content}`);
        }
      }
    });
  }
  if (hasGroupList) {
    GroupList.forEach((it) => {
      if (it.List.length === 0) return;
      if (it.List.length > 1) {
        const _data = getDisplayContentByGroupFromDetailData(GroupList, { Property: { ID: it.GroupID } }, isStringify);
        if (_data && _data.length > 0) {
          _data.forEach((_it) => {
            const { Label, Content } = _it;
            if (Label && Content) {
              if (hiddenGroupName) GroupContent.push(`${Content.join('，')}`);
              else GroupContent.push(`${Label}：[ ${Content.join('，')} ]`);
            }
          });
        }
        // GroupContent.push(`${hiddenGroupName ? '' : it.Attributes.Name}${it.List.length}处`);
        return;
      }
      const _data = getDisplayContentByGroupFromDetailData(GroupList, { Property: { ID: it.GroupID } });
      if (_data.length > 0) {
        const [{ Label, Content }] = _data;
        if (Label && Content) {
          if (hiddenGroupName) GroupContent.push(`${Content.join('，')}`);
          else GroupContent.push(`${Label}：[ ${Content.join('，')} ]`);
        }
      }
    });
  }
  if (ElContent.length > 0 || GroupContent.length > 0) {
    const temp = {
      Name: Craft.Attributes.DisplayName,
      Content: `${ElContent.join('，')}${ElContent.length > 0 ? '；' : ''}${GroupContent.join('，')}`,
    };
    if (!isStringify) return temp;
    return `，${temp.Name}：${temp.Content}`;
  }
  if (!isStringify) return { Name: Craft.Attributes.DisplayName };
  return `，${Craft.Attributes.DisplayName}`;
};

const getDisplayContentByCraftFromDetailData = (CraftList, item, isStringify) => {
  if (item && Array.isArray(CraftList) && item.Property && item.Property.ID) {
    const list = CraftList.filter(it => it.Attributes?.DisplayGroup?.ID === item.Property.ID);
    if (list.length > 0) {
      const CraftGroupLabel = list[0].Attributes.DisplayGroup.Name || '工艺';
      const temp = { Label: CraftGroupLabel, Content: [] };
      temp.Content = list.map(it => getCraftItemContentNameFromDetailData(it, isStringify)).filter(it => it);
      if (!isStringify) return temp;
      let str = `，${CraftGroupLabel}：`;
      temp.Content.forEach(_it => {
        str += _it;
      });
      return str;
    }
  }
  return null;
};

/**
 * @description: 用产品详情展示的类
 * @param {*}
 * @return {*}
 */
export default class ProductDetailTypeShowClass {
  /**
   * @description: 购物车列表获取订单详情列表展示数据
   * @param {*} partData
   * @param {*} originPartData
   * @return {*}
   */
  static getDisplayContentFromPartDataByDetailData(DisplayList, ProductParams, isStringify) {
    if (!ProductParams || !DisplayList) return [];
    const arr = [];
    let str = '';
    const { ProductDisplayPropertyTypeList } = store.state.productManage;
    if (Array.isArray(DisplayList) && DisplayList.length > 0) {
      DisplayList.forEach(itemData => {
        const t = ProductDisplayPropertyTypeList.find(it => it.ID === itemData.Type);
        if (!t) return;
        let target;
        switch (t.Name) {
          case '元素':
            target = getDisplayContentByElementFromDetailData(ProductParams.ElementList, itemData);
            if (target && target.Label && target.Content) {
              if (!isStringify) arr.push({ type: 'ElementList', Label: target.Label, Content: target.Content });
              else str += `，${target.Label}：${target.Content}`;
            }
            break;
          case '元素组':
            target = getDisplayContentByGroupFromDetailData(ProductParams.GroupList, itemData, isStringify);
            if (target && target.length > 0) {
              if (!isStringify) arr.push(...target.map(it => ({ type: 'GroupList', Label: it.Label, Content: it.Content })));
              else str += `${target}`;
            }
            break;
          case '尺寸组':
            if (ProductParams.Size?.DisplayContent) {
              const Label = ProductParams.Size.GroupName || '尺寸';
              arr.push({ type: 'Size', Label, Content: ProductParams.Size.DisplayContent });
            }
            break;
          case '物料':
            if (ProductParams.Attributes?.MaterialName) {
              arr.push({ type: 'MaterialID', Label: ProductParams.Attributes.MaterialTipsName || '物料', Content: ProductParams.Attributes.MaterialName });
            }
            break;
          case '工艺':
            target = getDisplayContentByCraftFromDetailData(ProductParams.CraftList, itemData, isStringify);
            if (target) {
              if (!isStringify) arr.push({ type: 'CraftList', Label: target.Label, Content: target.Content });
              else str += `${target}`;
            }
            break;
          case '工厂': // 工厂隐藏 不考虑
            break;
          default:
            break;
        }
      });
    }
    if (!isStringify) return arr;
    return str;
  }

  static getDisplayStringFromPartDataByDetailData(orderDetailData) {
    console.log(orderDetailData);
    if (!orderDetailData) return '';
    let str = '';
    if (orderDetailData.ProductParams?.Attributes?.DisplayOrderList && orderDetailData.ProductParams.Attributes.DisplayOrderList.length > 0) {
      str += orderDetailData.ProductParams.Attributes.DisplayName;
      str += '，';
      str += this.getDisplayContentFromPartDataByDetailData(orderDetailData.ProductParams.Attributes.DisplayOrderList, orderDetailData.ProductParams, true);
      if (orderDetailData.ProductParams.PartList && orderDetailData.ProductParams.PartList.length > 0) {
        orderDetailData.ProductParams.PartList.forEach(it => {
          if (Array.isArray(it.List)) {
            it.List.forEach((part, index) => {
              const ContentList = this.getDisplayContentFromPartDataByDetailData(it.Attributes.DisplayOrderList, part, true);
              const Name = it.List.length > 1 && index > 0 ? `${it.Attributes.Name}${index + 1}` : it.Attributes.Name;
              str += '；';
              str += Name;
              str += '，';
              str += ContentList;
            });
          }
        });
      }
    }
    console.log(str);
    return str;
  }
}