(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-29de2474"],{"09be":function(t,e,i){"use strict";var n=i("faa5");i.n(n).a},"0bc7":function(t,e,i){"use strict";i.r(e);var n=(i("96cf"),i("1da1")),a=i("5530"),r=i("2f62"),s=i("9477"),l=(i("7db0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("CommonDialogComp",{staticClass:"mp-erp-common-comps-product-formula-select-dialog-comp-wrap",attrs:{width:"700px",top:"15vh",title:t.title,visible:t.visible,showSubmit:!1},on:{"update:visible":function(e){t.visible=e},cancle:t.onCancle,open:t.onOpen,closed:t.onClosed}},[t.productData?[i("ul",{staticClass:"list mp-scroll-wrap"},[t._l(t.localRadioList,(function(e){return i("li",{key:e.ID},[i("p",{staticClass:"mp-common-title-wrap"},[t._v(t._s(e.PartName))]),i("div",t._l(e.List,(function(e){return i("span",{key:e.ID,staticClass:"blue-span",class:{disabled:t.selectedIDs.includes(e.ID)},on:{click:function(i){return t.onClick(e)}}},[t._v(t._s(e.Name))])})),0)])})),i("li",[i("p",{staticClass:"mp-common-title-wrap"},[t._v("常数")]),i("div",[i("span",{staticClass:"blue-span",on:{click:function(e){return t.onClick(null)}}},[t._v("常数")])])])],2)]:[i("p",{staticClass:"tips-box is-pink"},[i("i",{staticClass:"el-icon-warning"}),t._v(" 未获取到产品信息，请刷新重试")])]],2)}),c=(i("4160"),i("159b"),i("ad32")),o={props:{visible:{type:Boolean,default:!1},list:{type:Array,default:function(){return[]}},selectedIDs:{type:Array,default:function(){return[]}},productData:{type:Object,default:null}},components:{CommonDialogComp:c.a},computed:{localRadioList:function(){var t=this;if(!this.productData||!Array.isArray(this.list)||0===this.list.length)return[];var e=[];return this.list.forEach((function(i){if(!i.GroupID)if(i.PartID){var n=e.find((function(t){return t.ID===i.PartID}));if(n)n.List.push(i);else{var a=t.productData.PartList.find((function(t){return t.ID===i.PartID})),r=a?a.Name:"未知部件";e.push({PartName:r,List:[i],ID:i.PartID})}}else{var s=e.find((function(t){return"产品"===t.PartName}));s?s.List.push(i):e.push({PartName:"产品",List:[i],ID:"product"})}})),e}},data:function(){return{title:"设置尺寸数量",radio:""}},methods:{onClick:function(t){this.$emit("select",t),this.onCancle()},onCancle:function(){this.$emit("update:visible",!1)},onOpen:function(){this.$nextTick(this.initEditData)},onClosed:function(){},initEditData:function(){}}},u=(i("4cc7"),i("2877")),d=Object(u.a)(o,l,[],!1,null,null,null).exports,h=(i("498a"),{props:{value:{type:Object,default:function(){return{}}}},model:{prop:"value",event:"change"},render:function(){var t=this,e=arguments[0],i=this.value.Property&&255!==this.value.Property.Type?this.value.Property.Name:"",n=function(e){t.$emit("change",Object(a.a)({},t.value,{Value:e.trim()}))},r=function(){t.$emit("select",t.value.key)},s=!this.value.Property||this.value.Property&&255===this.value.Property.Type,l=s?"showInput value":"value";return e("li",[e("span",{class:"label"},[this.value.label,"："]),e("span",{class:l},[i]),s&&e("el-input",{attrs:{size:"small",maxlength:"9",value:this.value.Value},on:{input:n}}),e("span",{class:"blue-span",on:{click:r}},["设置"])])}}),m=Object(u.a)(h,void 0,void 0,!1,null,null,null).exports,p={props:{drawerVisible:{type:Boolean,default:!1},SizeNumberPropertyList:{type:Array,default:function(){return[]}},initData:{type:Object,default:null},Name:{type:String,default:""}},components:{ProductFormulasSelectDialog:d,FieldItem:m},computed:{drawer:{get:function(){return this.drawerVisible},set:function(t){this.$emit("update:drawerVisible",t)}},selectedIDs:function(){return this.selectType&&this[this.selectType].Property?[this[this.selectType].Property.ID]:[]}},data:function(){return{LengthFormula:{FormulaID:"",Value:"",Property:null,label:"展开尺寸长度",key:"LengthFormula"},WidthFormula:{FormulaID:"",Value:"",Property:null,label:"展开尺寸宽度",key:"WidthFormula"},DifferentContentFormula:{FormulaID:"",Value:"",Property:null,label:"内容不同的展开物料数量",key:"DifferentContentFormula"},PrintNumberFormula:{FormulaID:"",Value:"",Property:null,label:"共需要印刷多少份",key:"PrintNumberFormula"},visible:!1,selectType:"",productData:null}},methods:{onSelectClick:function(t){this.selectType=t,this.visible=!0},onPropertySelected:function(t){this[this.selectType].Property=t},getFormatItem:function(t){if(!t)return t;var e=t.Property,i=t.Value,n={FormulaID:""};return e?n.FormulaID=e.ID:i&&(n.Value=i),n},getSubmitInfo:function(){return this.getCheckResult()?{LengthFormula:this.getFormatItem(this.LengthFormula),WidthFormula:this.getFormatItem(this.WidthFormula),DifferentContentFormula:this.getFormatItem(this.DifferentContentFormula),PrintNumberFormula:this.getFormatItem(this.PrintNumberFormula)}:null},fieldItemChecker:function(t,e){var i=t.Property,n=t.Value,a=t.label;return!(!i&&(n||0===n?(!this.$utils.getValueIsOrNotNumber(n,e)||n<=0)&&(this.messageBox.failSingleError("保存失败","".concat(a,"输入数值不正确")),1):(this.messageBox.failSingleError("保存失败","".concat(a,"未设置")),1)))},getCheckResult:function(){return this.fieldItemChecker(this.LengthFormula)&&this.fieldItemChecker(this.WidthFormula)&&this.fieldItemChecker(this.DifferentContentFormula,!0)&&this.fieldItemChecker(this.PrintNumberFormula,!0)},getValueOrPropertyFromInitDataItem:function(t){var e={Property:null,Value:""};if(!t)return e;var i=t.FormulaID,n=t.Value;if(i){var a=this.SizeNumberPropertyList.find((function(t){return t.ID===i}));a&&(e.Property=a)}return(n||0===n)&&(e.Value=n),e},getProductData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("priceManage/getProductCraftData",t.$route.params.ProductID);case 2:(i=e.sent)&&(t.productData=i);case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){if(this.getProductData(),this.initData){var t=this.initData,e=t.LengthFormula,i=t.WidthFormula,n=t.DifferentContentFormula,r=t.PrintNumberFormula,s=this.getValueOrPropertyFromInitDataItem(e),l=this.getValueOrPropertyFromInitDataItem(i),c=this.getValueOrPropertyFromInitDataItem(n),o=this.getValueOrPropertyFromInitDataItem(r);this.LengthFormula=Object(a.a)({},this.LengthFormula,{},s),this.WidthFormula=Object(a.a)({},this.WidthFormula,{},l),this.DifferentContentFormula=Object(a.a)({},this.DifferentContentFormula,{},c),this.PrintNumberFormula=Object(a.a)({},this.PrintNumberFormula,{},o)}}},f=(i("9a0c"),Object(u.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mp-erp-price-module-makeup-ctrl-size-number-panel-container"},[n("p",{staticClass:"title"},[t._v(t._s(t.Name)+"：")]),n("ul",[n("FieldItem",{on:{select:t.onSelectClick},model:{value:t.LengthFormula,callback:function(e){t.LengthFormula=e},expression:"LengthFormula"}}),n("FieldItem",{on:{select:t.onSelectClick},model:{value:t.WidthFormula,callback:function(e){t.WidthFormula=e},expression:"WidthFormula"}}),n("FieldItem",{on:{select:t.onSelectClick},model:{value:t.DifferentContentFormula,callback:function(e){t.DifferentContentFormula=e},expression:"DifferentContentFormula"}}),n("FieldItem",{on:{select:t.onSelectClick},model:{value:t.PrintNumberFormula,callback:function(e){t.PrintNumberFormula=e},expression:"PrintNumberFormula"}})],1),n("ProductFormulasSelectDialog",{attrs:{visible:t.visible,list:t.SizeNumberPropertyList,productData:t.productData,selectedIDs:t.selectedIDs},on:{"update:visible":function(e){t.visible=e},select:t.onPropertySelected}}),n("el-drawer",{attrs:{visible:t.drawer,size:"470px","show-close":!1},on:{"update:visible":function(e){t.drawer=e}}},[n("template",{slot:"title"},[n("span",{staticClass:"drawer-title",on:{click:function(e){t.drawer=!1}}},[n("i",{staticClass:"el-icon-arrow-right"}),t._v(" 说明")])]),n("div",{staticClass:"drawer-content"},[n("p",[t._v("注意：拼版时会使用此处设置的长度、宽度、数量进行拼版，并印刷指定份数。此处尺寸指的是展开尺寸，物料数量指的是每份不同印刷内容的物料数量。")]),n("p",{staticClass:"is-pink"},[t._v("特别注意：物料数量是以此展开尺寸为基础的此尺寸物料数量，且印刷内容不同。")]),n("div",[n("p",[t._v("例如：")]),n("ul",[n("li",[t._v(" 锁线胶装画册 1000本，封面 4P，则宽度为成品宽度 *2+书脊厚度+勒口宽度*2，长度为成品长，物料数量则为 1，共需印刷 1000份。 ")]),n("li",[t._v(" 锁线胶装画册 1000本，内文64P，双面印，内容不同，则长度为成品长*2，宽度为成品宽，物料数量则为 16，共需印刷 1000份。 ")]),n("li",[t._v(" 锁线胶装画册 1000本，内文64P，双面印，内容相同1P循环，则长度为成品长*2，宽度为成品宽，物料数量则为 1，共需印刷 16000份。 ")]),n("li",[t._v(" 锁线胶装画册 1000本，内文64P，双面印，内容相同8P循环，则长度为成品长*2，宽度为成品宽，物料数量则为 2，共需印刷 8000份。 ")])]),n("p",[n("img",{attrs:{src:i("298b"),alt:""}}),n("span",{staticClass:"is-gray"},[t._v("其他应用请自己思考")])])])])],2)],1)}),[],!1,null,null,null)).exports,b=(i("99af"),i("4de4"),i("caad"),i("a15b"),i("d81d"),i("d3b7"),i("2532"),i("3ca3"),i("ddb0"),i("f7ec")),v=(i("13d5"),i("2909")),g={model:{prop:"checkedList",event:"change"},props:{itemData:{type:Object,default:function(){return{}}},checkedList:{type:Array,default:function(){return[]}}},data:function(){return{isOpen:!0,checkList:[]}},computed:{checkItemAllList:function(){return this.itemData&&Array.isArray(this.itemData.list)&&0!==this.itemData.list.length?this.itemData.list.map((function(t){return{First:{ID:t.ID},Second:t.ModeList.map((function(t){return t.Mode}))}})):[]},checkItemAllListModeList:function(){return 0===this.checkItemAllList.length?[]:this.checkItemAllList.map((function(t){return t.Second})).reduce((function(t,e){return[].concat(Object(v.a)(t),Object(v.a)(e))}))},curCheckedItemlist:function(){if(0===this.checkedList.length||0===this.checkItemAllList.length)return[];var t=this.itemData.list.map((function(t){return t.ID}));return this.checkedList.filter((function(e){return t.includes(e.First.ID)}))},checkedItemListModeList:function(){return 0===this.curCheckedItemlist.length?[]:this.curCheckedItemlist.map((function(t){return t.Second})).reduce((function(t,e){return[].concat(Object(v.a)(t),Object(v.a)(e))}))},checkItemAll:{get:function(){return this.checkedItemListModeList.length>0&&this.checkedItemListModeList.length===this.checkItemAllListModeList.length},set:function(t){var e=this.getUnCheckedList(this.itemData.list),i=t?[].concat(Object(v.a)(e),Object(v.a)(this.checkItemAllList)):Object(v.a)(e);this.$emit("change",i)}},isIndeterminate:function(){return this.checkedItemListModeList.length>0&&this.checkedItemListModeList.length<this.checkItemAllListModeList.length}},methods:{getModeList:function(t){var e=t.map((function(t){return t.Mode}));return b.a.filter((function(t){return e.includes(t.ID)}))},getUnCheckedList:function(t){var e=t.map((function(t){return t.ID}));return this.checkedList.filter((function(t){return!e.includes(t.First.ID)}))},onItemChange:function(t,e,i){var n=this.itemData.list.filter((function(t){return t.ID===e})),a=this.getUnCheckedList(n),r=this.curCheckedItemlist.find((function(t){return t.First.ID===e}));if(r){var s=Object(v.a)(r.Second);t?s.push(i):s=s.filter((function(t){return t!==i})),0===s.length?this.$emit("change",a):this.$emit("change",[].concat(Object(v.a)(a),[{First:{ID:e},Second:s}]))}else t&&this.$emit("change",[].concat(Object(v.a)(a),[{First:{ID:e},Second:[i]}]))},getItemValueList:function(t){var e=this.curCheckedItemlist.find((function(e){return e.First.ID===t}));return e?e.Second:[]},obLabelClick:function(t){var e=this.curCheckedItemlist.find((function(e){return e.First.ID===t})),i=this.checkItemAllList.find((function(e){return e.First.ID===t}));if(i){var n=this.itemData.list.filter((function(e){return e.ID===t})),a=this.getUnCheckedList(n);e&&e.Second.length===i.Second.length?this.$emit("change",a):this.$emit("change",[].concat(Object(v.a)(a),[{First:{ID:t},Second:Object(v.a)(i.Second)}]))}}}},I=(i("b61b"),Object(u.a)(g,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mp-erp-price-module-breadth-select-check-item-container"},[i("header",[i("el-checkbox",{staticClass:"item-title",attrs:{indeterminate:t.isIndeterminate},model:{value:t.checkItemAll,callback:function(e){t.checkItemAll=e},expression:"checkItemAll"}},[t._v(t._s(t.itemData.Name))]),i("span",{staticClass:"collapse",class:{open:t.isOpen},on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v(t._s(t.isOpen?"收起":"展开")+" "),i("i",{staticClass:"el-icon-arrow-down"})])],1),i("main",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}]},t._l(t.itemData.list,(function(e){return i("div",{key:e.ID},[i("span",{staticClass:"label",on:{click:function(i){return t.obLabelClick(e.ID)}}},[t._v(t._s(e.Name))]),t._l(t.getModeList(e.ModeList),(function(n){return i("el-checkbox",{key:n.ID,attrs:{value:t.getItemValueList(e.ID).includes(n.ID),label:n.ID},on:{change:function(i){return t.onItemChange(i,e.ID,n.ID)}}},[t._v(t._s(n.Name))])}))],2)})),0)])}),[],!1,null,null,null)).exports,k={props:{visible:{type:Boolean,default:!1},saveData:{type:Array,default:function(){return[]}},BreadthTreeList:{type:Array,default:function(){return[]}}},components:{CommonDialogComp:c.a,CheckItem:I},computed:{checkAllList:function(){return Array.isArray(this.BreadthTreeList)&&0!==this.BreadthTreeList.length?this.BreadthTreeList.map((function(t){return t.list.map((function(t){return{First:{ID:t.ID},Second:t.ModeList.map((function(t){return t.Mode}))}}))})).reduce((function(t,e){return[].concat(Object(v.a)(t),Object(v.a)(e))})):[]},checkAllListModeList:function(){return 0===this.checkAllList.length?[]:this.checkAllList.map((function(t){return t.Second})).reduce((function(t,e){return[].concat(Object(v.a)(t),Object(v.a)(e))}))},checkedListModeList:function(){return 0===this.checkedList.length?[]:this.checkedList.map((function(t){return t.Second})).reduce((function(t,e){return[].concat(Object(v.a)(t),Object(v.a)(e))}))},checkAll:{get:function(){return this.checkedListModeList.length>0&&this.checkedListModeList.length===this.checkAllListModeList.length},set:function(t){this.checkedList=t?this.checkAllList:[]}},isIndeterminateAll:function(){return this.checkedListModeList.length>0&&this.checkedListModeList.length<this.checkAllListModeList.length}},data:function(){return{checkedList:[]}},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.checkedList.length){e.next=3;break}return t.messageBox.failSingleError("选择失败","请至少勾选一种印刷幅面"),e.abrupt("return");case 3:t.$emit("select",t.checkedList);case 4:case"end":return e.stop()}}),e)})))()},onCancle:function(){this.$emit("update:visible",!1)},onOpen:function(){this.$nextTick(this.initEditData)},onClosed:function(){},initEditData:function(){Array.isArray(this.saveData)?this.checkedList=this.saveData:this.checkedList=[]}}},D=(i("24fc"),Object(u.a)(k,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("CommonDialogComp",{staticClass:"mp-erp-comps-price-module-price-item-breadth-select-dialog-comp-wrap",attrs:{width:"800px",top:"8vh",title:"选择幅面",submitText:"确定",visible:t.visible},on:{"update:visible":function(e){t.visible=e},submit:t.onSubmit,cancle:t.onCancle,open:t.onOpen,closed:t.onClosed}},[i("el-checkbox",{staticClass:"check-all",attrs:{indeterminate:t.isIndeterminateAll},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")]),t._l(t.BreadthTreeList,(function(e){return i("CheckItem",{key:e.ID,attrs:{itemData:e},model:{value:t.checkedList,callback:function(e){t.checkedList=e},expression:"checkedList"}})}))],2)}),[],!1,null,null,null)).exports,L={props:{initData:{type:Object,default:null}},components:{BreadthSelectDialog:D},computed:Object(a.a)({},Object(r.e)("basicSet",["AllBreadthList"]),{},Object(r.c)("basicSet",["BreadthTreeList"]),{localBreadthList:function(){var t=this;return 0===this.checkedBreadthList.length||0===this.AllBreadthList.length?[]:this.checkedBreadthList.map((function(e){var i=t.AllBreadthList.find((function(t){return t.ID===e.First.ID}));return i?{ID:e.First.ID,Name:"".concat(i.Name," （").concat(t.getModeText(e.Second),"）")}:null})).filter((function(t){return t}))}}),data:function(){return{visible:!1,saveData:null,loading:!0,checkedBreadthList:[]}},methods:{onSelectClick:function(){this.saveData=this.checkedBreadthList,this.visible=!0},getBreadthInfo:function(){var t=this;return Promise.all([0===t.AllBreadthList.length?t.$store.dispatch("basicSet/getAllBreadthList"):null,t.$store.dispatch("basicSet/getBreadthClassList")])},handleSelect:function(t){this.checkedBreadthList=t,this.visible=!1},getModeText:function(t){var e=this.$utils.getNameFromListByIDs(t,b.a);return e?e.join("、"):""},getSubmitInfo:function(){return 0===this.checkedBreadthList.length?(this.messageBox.failSingleError("保存失败","请选择印刷幅面"),null):{BreadthList:this.checkedBreadthList}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBreadthInfo();case 2:if(t.loading=!1,t.initData&&Array.isArray(t.initData.BreadthList)){e.next=5;break}return e.abrupt("return");case 5:i=t.AllBreadthList.map((function(t){return t.ID})),n=t.initData.BreadthList.filter((function(t){return i.includes(t.First.ID)})).map((function(t){var e=t.First,i=t.Second;return{First:{ID:e.ID},Second:i}})),t.checkedBreadthList=n;case 8:case"end":return e.stop()}}),e)})))()}},C=(i("c0ed"),Object(u.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mp-erp-price-module-makeup-set-breadth-panel-container"},[n("header",[n("span",{staticClass:"blue-span",class:{disabled:!t.loading&&0===t.AllBreadthList.length},on:{click:t.onSelectClick}},[t._v("选择幅面")]),t._m(0)]),n("main",[n("BreadthSelectDialog",{attrs:{visible:t.visible,saveData:t.saveData,BreadthTreeList:t.BreadthTreeList},on:{"update:visible":function(e){t.visible=e},select:t.handleSelect}}),n("ul",t._l(t.localBreadthList,(function(e){return n("li",{key:e.ID,attrs:{title:e.Name}},[t._v(t._s(e.Name))])})),0),t.loading||0!==t.AllBreadthList.length?t._e():n("div",{staticClass:"is-empty"},[n("img",{attrs:{src:i("5731"),alt:""}}),n("p",{staticClass:"tips-box is-pink"},[t._v("未获取到印刷幅面信息，请到印刷幅面模块中进行相关设置！")])])],1)])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"tips-box"},[i("i",{staticClass:"el-icon-warning"}),t._v(" 注：多个幅面可用时，系统自动选择产品总价格最低的幅面！")])}],!1,null,null,null)).exports,y={model:{prop:"value",event:"change"},props:{visible:{type:Boolean,default:!1},listData:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}}},components:{CommonDialogComp:c.a},computed:{},data:function(){return{checkList:[]}},methods:{onSubmit:function(){var t=this,e=this.checkList.map((function(e){return t.listData.find((function(t){return t.ID===e}))})).filter((function(t){return t}));this.$emit("change",e),this.onCancle()},onCancle:function(){this.$emit("update:visible",!1)},onOpen:function(){this.$nextTick(this.initEditData)},onClosed:function(){},initEditData:function(){this.checkList=Array.isArray(this.value)?this.value.map((function(t){return t.ID})):[]}}},P=(i("09be"),Object(u.a)(y,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("CommonDialogComp",{staticClass:"mp-erp-comps-price-module-price-item-makeup-rule-select-dialog-comp-wrap",attrs:{width:"800px",top:"10vh",title:"选择拼版规则",submitText:"确定",visible:t.visible},on:{"update:visible":function(e){t.visible=e},submit:t.onSubmit,cancle:t.onCancle,open:t.onOpen,closed:t.onClosed}},[i("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.listData,(function(e){return i("el-checkbox",{key:e.ID,attrs:{label:e.ID,title:e.ColumnNumber+"列 X "+e.RowNumber+"行"}},[t._v(t._s(e.ColumnNumber)+"列 X "+t._s(e.RowNumber)+"行")])})),1)],1)}),[],!1,null,null,null)).exports,_={props:{initData:{type:Object,default:null}},components:{MakeupRuleSelectDialog:P},data:function(){return{loading:!0,visible:!1,selectList:[]}},computed:Object(a.a)({},Object(r.e)("basicSet",["MakeupRuleList"])),methods:{onSelectClick:function(){this.visible=!0},getSubmitInfo:function(){return{RuleList:this.selectList}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("basicSet/getMakeupRuleList");case 2:t.loading=!1,t.initData&&(i=t.initData.RuleList,Array.isArray(i)&&(t.selectList=Object(v.a)(i)));case 4:case"end":return e.stop()}}),e)})))()}},S=(i("5cec"),Object(u.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mp-erp-price-module-makeup-ctrl-page-makeup-rule-set-panel-comp-wrap"},[i("header",[i("span",{staticClass:"blue-span",class:{disabled:t.loading},on:{click:t.onSelectClick}},[t._v("选择拼版规则")]),t._m(0)]),i("main",[i("MakeupRuleSelectDialog",{attrs:{visible:t.visible,listData:t.MakeupRuleList},on:{"update:visible":function(e){t.visible=e}},model:{value:t.selectList,callback:function(e){t.selectList=e},expression:"selectList"}}),i("div",{staticClass:"list"},t._l(t.selectList,(function(e,n){return i("span",{key:e.ID},[t._v(" "+t._s(e.ColumnNumber)+"列 X "+t._s(e.RowNumber)+"行 "),n<t.selectList.length-1?[t._v("、")]:t._e()],2)})),0)],1)])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"tips-box"},[i("i",{staticClass:"el-icon-warning"}),t._v(" 不拼版则不用设置")])}],!1,null,null,null)).exports,O={props:{initData:{type:Object,default:null},partName:{type:String,default:""}},computed:Object(r.e)("priceManage",["CuttingRuleList"]),data:function(){return{radio:1}},methods:{getSubmitInfo:function(){return{CuttingRule:this.radio}},initEditData:function(){this.initData&&(this.radio=this.initData.CuttingRule||0===this.initData.CuttingRule?this.initData.CuttingRule:1)}},mounted:function(){this.initEditData()}},F=(i("6de4"),Object(u.a)(O,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mp-erp-price-module-makeup-ctrl-page-cutting-rule-panel-wrap"},[i("header",[i("span",[t._v(t._s(t.partName||"产品")+"使用算法：")]),i("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.CuttingRuleList,(function(e){return i("el-radio",{key:e.ID,attrs:{label:e.ID}},[t._v(t._s(e.Name))])})),1)],1),t._m(0)])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("div",{staticClass:"tips-box"},[i("aside",[i("i",{staticClass:"el-icon-warning"}),i("span",[t._v("注：")])]),i("ul",[i("li",[t._v("最大数量：指不考虑通刀问题，拼版时尽最大可能拼最大数量")]),i("li",[t._v("考虑通刀：指拼版时考虑通刀问题，每版可能不会拼最大数量")]),i("li",[t._v("方向一致：指拼版时按一致方向放置文件，不会颠倒方向，可能浪费较大")])])])])}],!1,null,null,null)).exports,x={props:{initData:{type:Object,default:null}},computed:Object(r.e)("priceManage",["PrintTimesRuleList"]),data:function(){return{radio:1}},methods:{getSubmitInfo:function(){return{PrintTimes:this.radio}},initEditData:function(){this.initData&&(this.radio=this.initData.PrintTimes||0===this.initData.PrintTimes?this.initData.PrintTimes:1)}},mounted:function(){this.initEditData()}},M=(i("19ef"),Object(u.a)(x,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mp-erp-price-module-makeup-ctrl-page-print-times-panel-wrap"},[i("header",[i("span",[t._v("印刷次数为：")]),i("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},t._l(t.PrintTimesRuleList,(function(e){return i("el-radio",{key:e.ID,attrs:{label:e.ID}},[t._v(t._s(e.Name))])})),1)],1)])}),[],!1,null,null,null)).exports,N={props:{initData:{type:Object,default:null},partName:{type:String,default:""}},computed:Object(r.e)("priceManage",["WastageRuleList","WastageUnitTypeList","WastageUnitList"]),data:function(){return{Rule:0,Value:"",Unit:0,UnitType:1}},methods:{getSubmitInfo:function(){var t=this.Rule,e=this.Value,i=this.Unit,n=this.UnitType;return e?this.$utils.getValueIsOrNotNumber(e,0!==i)?+e<0?(this.messageBox.failSingleError("保存失败","损耗数量不能为负"),null):{Wastage:{Rule:t,Value:e,Unit:i,UnitType:n}}:(this.messageBox.failSingleError("保存失败","损耗数量输入不正确，应为数字类型，单位为%时可使用小数"),null):(this.messageBox.failSingleError("保存失败","请设置损耗数量"),null)},initEditData:function(){if(this.initData&&this.initData.Wastage){var t=this.initData.Wastage,e=t.Rule,i=t.Value,n=t.Unit,a=t.UnitType;this.Rule=e||0===e?e:0,this.Value=i||0===i?i:0,this.Unit=n||0===n?n:0,this.UnitType=a||0===a?a:0}}},mounted:function(){this.initEditData()}},A=(i("81cc"),Object(u.a)(N,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mp-erp-price-module-makeup-ctrl-page-material-wastage-panel-wrap"},[i("header",[i("el-radio-group",{model:{value:t.Rule,callback:function(e){t.Rule=e},expression:"Rule"}},t._l(t.WastageRuleList,(function(e){return i("el-radio",{key:e.ID,attrs:{label:e.ID}},[t._v(t._s(e.Name))])})),1),i("div",[i("el-input",{attrs:{size:"mini",maxlength:"9"},model:{value:t.Value,callback:function(e){t.Value="string"==typeof e?e.trim():e},expression:"Value"}}),i("el-select",{attrs:{size:"mini"},model:{value:t.Unit,callback:function(e){t.Unit=e},expression:"Unit"}},t._l(t.WastageUnitList,(function(t){return i("el-option",{key:t.ID,attrs:{label:t.Name,value:t.ID}})})),1),i("el-select",{attrs:{size:"mini"},model:{value:t.UnitType,callback:function(e){t.UnitType=e},expression:"UnitType"}},t._l(t.WastageUnitTypeList,(function(t){return i("el-option",{key:t.ID,attrs:{label:t.Name,value:t.ID}})})),1)],1)],1),t._m(0)])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("div",{staticClass:"tips-box"},[i("aside",[i("i",{staticClass:"el-icon-warning"}),i("span",[t._v("注：")])]),i("ul",[i("li",[t._v("展开物料数量指以展开尺寸为大小的物料数量。")]),i("li",[t._v("印刷幅面物料数量指的是拼成大版后需要印刷的物料数量，如四开、对开。")]),i("li",[t._v("百分比以产品/部件实际数量不加任何损耗的情况下为基数。")])])])])}],!1,null,null,null)).exports,j={name:"MakeupCtrlConditionSet",data:function(){return{drawer:!1,visible:!1}},components:{ContionCommonComp:s.a,SizeNumberPanel:f,MakeupBreadthPaneL:C,MakeupRulePanel:S,CuttingRulePanel:F,PrintTimesPanel:M,MaterialWastagePanel:A},computed:Object(a.a)({},Object(r.e)("priceManage",["ProductFormulaPropertyList","curMakeupItemEditData","MakeupCtrlConditionSetupPropertyList"]),{rightTitle:function(){return this.routeInfo.isMixin?"则允许混拼":"1"===this.routeInfo.setType?"使用以下幅面":"则"},PropList:function(){return this.MakeupCtrlConditionSetupPropertyList},routeInfo:function(){var t=this.$route.params,e=t.ProductID,i=t.PartID,n=t.ProductName,a=t.PartName,r=t.SolutionName,s=t.SolutionID,l=t.setType;return{ProductID:e,PartID:"null"===i?"":i,ProductName:n,PartName:"null"===a?"":a,SolutionName:r,SolutionID:s,isMixin:t.isMixin,setType:l}}}),methods:{onGoBackClick:function(){this.$goback()},onSubmitClick:function(){var t,e=this.$refs.oLeftComp.getConditonResult();if(e&&("0"!==this.routeInfo.setType||this.routeInfo.isMixin?this.routeInfo.isMixin&&(t={}):t=this.$refs.oSizeNumberPanel.getSubmitInfo(),"1"===this.routeInfo.setType&&(t=this.$refs.oMakeupBreadthPaneL.getSubmitInfo()),"2"===this.routeInfo.setType&&(t=this.$refs.oMakeupRulePanel.getSubmitInfo()),"3"===this.routeInfo.setType&&(t=this.$refs.oCuttingRulePanel.getSubmitInfo()),"4"===this.routeInfo.setType&&(t=this.$refs.oPrintTimesPanel.getSubmitInfo()),"5"===this.routeInfo.setType&&(t=this.$refs.oMaterialWastagePanel.getSubmitInfo()),t)){var i=this.routeInfo,n=i.SolutionID,r=i.ProductID,s=i.PartID,l=Object(a.a)({},e,{},t,{SolutionID:n,ProductID:r,PartID:s});this.handleSubmit(l)}},handleSubmit:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function i(){var n,a,r;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.api.getMakeupSolutionItemSave,e.routeInfo.isMixin&&(n=e.api.getMixtureMakeupItemSave),i.next=4,n(t).catch((function(){}));case 4:(a=i.sent)&&1e3===a.data.Status&&(r=function(){e.onGoBackClick()},e.messageBox.successSingle("保存成功",r,r));case 6:case"end":return i.stop()}}),i)})))()}},mounted:function(){}},T=(i("a313"),Object(u.a)(j,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mp-erp-price-manage-makeup-ctrl-condition-set-page-wrap"},[i("header",[i("span",[t._v("当前产品："+t._s(t.routeInfo.ProductName))]),i("span",[t._v("设置方案："+t._s(t.routeInfo.SolutionName))]),t.routeInfo.PartName?i("span",[t._v("设置部件："+t._s(t.routeInfo.PartName)+" "+t._s(t.routeInfo.isMixin?"混拼条件":""))]):t._e()]),i("main",[i("ContionCommonComp",{ref:"oLeftComp",attrs:{ComparePropertyList:t.PropList,PropertyList:t.PropList,leftWidth:"40%",curEditData:t.curMakeupItemEditData,rightTitle:t.rightTitle}},[i("template",{slot:"title"},["0"!==t.routeInfo.setType||t.routeInfo.isMixin?t._e():[i("span",{staticClass:"intro",on:{click:function(e){t.drawer=!0}}},[i("i",[t._v("?")]),t._v(" 说明")])]],2),"0"!==t.routeInfo.setType||t.routeInfo.isMixin?t._e():i("SizeNumberPanel",{ref:"oSizeNumberPanel",attrs:{Name:t.routeInfo.PartName||"产品",initData:t.curMakeupItemEditData,drawerVisible:t.drawer,SizeNumberPropertyList:t.ProductFormulaPropertyList},on:{"update:drawerVisible":function(e){t.drawer=e},"update:drawer-visible":function(e){t.drawer=e}}}),"1"===t.routeInfo.setType?i("MakeupBreadthPaneL",{ref:"oMakeupBreadthPaneL",attrs:{initData:t.curMakeupItemEditData}}):t._e(),t._v(" "),"2"===t.routeInfo.setType?i("MakeupRulePanel",{ref:"oMakeupRulePanel",attrs:{initData:t.curMakeupItemEditData}}):t._e(),t._v(" "),"3"===t.routeInfo.setType?i("CuttingRulePanel",{ref:"oCuttingRulePanel",attrs:{initData:t.curMakeupItemEditData,partName:t.routeInfo.PartName}}):t._e(),"4"===t.routeInfo.setType?i("PrintTimesPanel",{ref:"oPrintTimesPanel",attrs:{initData:t.curMakeupItemEditData}}):t._e(),t._v(" "),"5"===t.routeInfo.setType?i("MaterialWastagePanel",{ref:"oMaterialWastagePanel",attrs:{initData:t.curMakeupItemEditData}}):t._e()],2)],1),i("footer",[i("el-button",{attrs:{type:"primary"},on:{click:t.onSubmitClick}},[t._v("保存")]),i("el-button",{on:{click:t.onGoBackClick}},[i("i",{staticClass:"el-icon-d-arrow-left"}),t._v(" 返回")])],1)])}),[],!1,null,null,null));e.default=T.exports},"19ef":function(t,e,i){"use strict";var n=i("3551");i.n(n).a},"1dfd":function(t,e,i){},"1f6b":function(t,e,i){},2307:function(t,e,i){},"24fc":function(t,e,i){"use strict";var n=i("2307");i.n(n).a},"264d":function(t,e,i){},"298b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAADZ0lEQVQ4T42UX2gcVRTGv+/OzL2b3UlsGiTiS+IfBFuV1FoQ/yAqpUir1KqR0kxKLL7YBxUfWkUwgogPVbGgUmubZGfTYqgV00IxohS0WKptaQpK0STgQ5CqTdKd3e5Mdu+R3XaXGgl23ubMOb9zv2++GWKRKxr2uqTCtSCWK9AXyBzAcRcYTQXxuYVjXFiIhvRdQu4kcBOIA7By2pJzSuxSOmqVCJ6C4CfX4YupTaXJ+vy/QFGoNwI1yOsnJuI9D/ejvHCR7ITJt+qXlPAVKPT4PfFYtacBKuScxyDuHinLGr8vObuY5Hq9uM99wFacg8radenN8ydqIBnAkoJrflG28kx6c/n7/4PUn+dz+mkK387MxHfWQPlQv0Ggww+S56r3UdasIeUtAff7QfxefVD6oYq3mI8ssEwSPN+yJT4XheYIaQ/WQIXQ/ArYZzPB/CkBWAjN74BsF+H7HnFfKoh/q/YVh/UGsdgOwaiQ9/pBvK4QmrUCbGO0G+0w+me/N2mrnW4vrqdnjvlBfFs+NLsdylfpnuTA5YW6n8ILTal4qBCbcT+IO6Z3IX1dWv/F2UFvpevwEz9IVjYkjMBhNypVKeyHvVoa+iEERK701KwIzTQLQ94KUdzrB8mKazX5P9kLzR+c+xRLldFT/kTSevX2a4VKDi1F0dM1s6NQjzuwW5uC8neNV5tNPeJPlo4uhEc591G/p/xNI0+h7rbglsugrHmZlAczQbKh3hCF+iTBNzNBPNqoDXhdcNRYpjdur/p0JTo/QPBBDXT+Q/jpZnMWxBcilcPNveVvL2XdhypUnwM4QsGkJW8k5Ekhtjb3JJ9dzJrHSTxByKrMRHJ3XdoggGUkxqxwI4GP/SDeEY3gBil56xXZTvICbXy4qRdTUWjeBbBaREapuB5WDnFmINXpuXI8U4472YfSzAA6PVefLqvk5iWbMLPQ9EvD6KiIPjM/n3S29mH24hDaqPQU84N6uXL4ZSaIb60O/Z1DixHzJyBFER5VlFNWOAdImyLvsZD7Kaj8OJm0V/8OsgteIa3Ps/ZJZPVxAc8IcEgRL0Bk2rrJNreiV1eAO0j6IjIHi/H5UvK1Tpv9gMxay32OI71WaGoeVbPkaO81UN1OyLG0SXawG8liWZIR+FGsXyXYJZCTfjF55x8ALYRGDvPYzAAAAABJRU5ErkJggg=="},3168:function(t,e,i){},3551:function(t,e,i){},"4cc7":function(t,e,i){"use strict";var n=i("686d");i.n(n).a},"4e7b":function(t,e,i){},"5cb2":function(t,e,i){},"5cec":function(t,e,i){"use strict";var n=i("4e7b");i.n(n).a},"686d":function(t,e,i){},"6de4":function(t,e,i){"use strict";var n=i("3168");i.n(n).a},"7f28":function(t,e,i){},"81cc":function(t,e,i){"use strict";var n=i("264d");i.n(n).a},"9a0c":function(t,e,i){"use strict";var n=i("7f28");i.n(n).a},a313:function(t,e,i){"use strict";var n=i("1dfd");i.n(n).a},b61b:function(t,e,i){"use strict";var n=i("5cb2");i.n(n).a},c0ed:function(t,e,i){"use strict";var n=i("1f6b");i.n(n).a},f7ec:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return c})),i("4de4"),i("7db0"),i("4160"),i("d81d"),i("d3b7"),i("25f0"),i("159b");var n=i("d4ec"),a=i("bee2"),r=i("ade3"),s=[{ID:1,Name:"正翻版",key:"zhengFan"},{ID:2,Name:"自翻版",key:"ziFan"},{ID:4,Name:"天地翻",key:"tianDiFan"}],l=function(){return s.map((function(t){return{checked:!1,Mode:t.ID,WhiteEdge:{Length:"",Width:""},key:t.key,Name:t.Name}}))},c=function(){function t(e){var i=this;if(Object(n.a)(this,t),Object(r.a)(this,"ID",""),Object(r.a)(this,"Name",""),Object(r.a)(this,"MinMaterialSize",{Length:"",Width:""}),Object(r.a)(this,"MaxMaterialSize",{Length:"",Width:""}),Object(r.a)(this,"Class",""),Object(r.a)(this,"ModeList",l()),e&&"[object Object]"===Object.prototype.toString.call(e)){var a=JSON.parse(JSON.stringify(e)),s=a.ID,c=a.Name,o=a.MinMaterialSize,u=a.MaxMaterialSize,d=a.Class,h=a.ModeList;s&&(this.ID=s),c&&(this.Name=c),o&&(this.MinMaterialSize=o),u&&(this.MaxMaterialSize=u),d&&(this.Class=d),h&&h.length>0&&h.forEach((function(t){var e=i.ModeList.find((function(e){return t.Mode===e.Mode}));e&&(e.checked=!0,e.WhiteEdge=t.WhiteEdge)}))}}return Object(a.a)(t,null,[{key:"formatSubmit",value:function(t){var e=JSON.parse(JSON.stringify(t));return e.ModeList=e.ModeList.filter((function(t){return t.checked})).map((function(t){return{Mode:t.Mode,WhiteEdge:t.WhiteEdge}})),e}}]),t}()},faa5:function(t,e,i){}}]);