(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c99ebc7e"],{"02ee":function(t,e,r){"use strict";var a=r("8d94");r.n(a).a},"59aa":function(t,e,r){},"67d9":function(t,e,r){"use strict";var a=(r("7db0"),r("4160"),r("159b"),r("96cf"),r("1da1")),n=r("5530"),i=r("ad32"),o={props:{visible:{type:Boolean,default:!1},PropertyList:{type:Array,default:null},warnTitle:{type:String,default:""},title:{type:String,default:"添加子公式"},initDataStr:{type:String,default:""}},components:{CommonDialogComp:i.a},computed:{selectDataList:function(){if(!this.PropertyList||!Array.isArray(this.PropertyList)||0===this.PropertyList.length)return[];var t=[];return this.PropertyList.forEach((function(e){var r=e.Product,a=e.Part,i=e.Group,o=e.Craft;if(r){var s=a?a.ID:r.ID,u=a?a.Name:"产品",c=t.find((function(t){return t.ID===s}));if(c||(c={ID:s,Name:u,Part:null,GroupList:[],CraftList:[]},t.push(c)),o&&i){var p=c.CraftList.find((function(t){return t.ID===o.ID}));p?p.GroupList.push(e):c.CraftList.push(Object(n.a)({},o,{GroupList:[e]}))}!o&&i&&c.GroupList.push(e),o||i||!a||(c.Part=e)}})),t}},data:function(){return{selectValue:""}},methods:{onSubmit:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("submit",t.selectValue);case 1:case"end":return e.stop()}}),e)})))()},onCancle:function(){this.$emit("update:visible",!1)},onOpen:function(){this.$nextTick(this.initEditData)},onClosed:function(){},initEditData:function(){var t=this;if(this.initDataStr){var e=this.PropertyList.find((function(e){return JSON.stringify(e)===t.initDataStr}));this.selectValue=e||""}else this.selectValue=""}}},s=(r("e83a"),r("2877")),u=Object(s.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("CommonDialogComp",{staticClass:"mp-erp-comps-common-sub-formula-add-and-select-dialog-comp-wrap",attrs:{width:"750px",top:"12vh",title:t.title,visible:t.visible,disabled:!t.selectValue},on:{"update:visible":function(e){t.visible=e},submit:t.onSubmit,cancle:t.onCancle,open:t.onOpen,closed:t.onClosed}},[t._l(t.selectDataList,(function(e){return r("div",{key:e.ID,staticClass:"item"},[r("p",[e.Part?r("el-radio",{attrs:{label:e.Part},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},[t._v(t._s(e.Name))]):r("span",[t._v(t._s(e.Name))])],1),r("div",t._l(e.GroupList,(function(e){return r("el-radio",{key:e.Group.ID,attrs:{label:e},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},[t._v(t._s(e.Group.Name))])})),1),r("ul",t._l(e.CraftList,(function(e){return r("li",{key:e.ID},[r("span",[t._v(t._s(e.Name)+"：")]),t._l(e.GroupList,(function(e){return r("el-radio",{key:e.Group.ID,attrs:{label:e},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},[t._v(t._s(e.Group.Name))])}))],2)})),0)])})),t.warnTitle?r("p",{staticClass:"tips-box is-pink"},[r("i",{staticClass:"el-icon-warning"}),t._v(" 注："+t._s(t.warnTitle)+"目标设定后不允许更改")]):t._e()],2)}),[],!1,null,null,null);e.a=u.exports},"867c":function(t,e,r){"use strict";r.r(e);var a=(r("99af"),r("4de4"),r("7db0"),r("d81d"),r("b0c0"),r("ac1f"),r("5319"),r("96cf"),r("1da1")),n=r("5530"),i=r("2f62"),o=r("3eca"),s=r("7046"),u=r("67d9"),c={name:"ProductInteractionList",data:function(){return{ProductID:"",PartID:"",ProductName:"",titleType:"",showTable:!1,visible:!1,setType4SubInteractionAndSubCompare:"",itemData4SubInteractionAndSubCompare:null,subDialogPropertyList:[],initDialogDataStr:""}},components:{CommonInteractionTable:s.a,SubFormulaAddAndSelectDialog:u.a},computed:Object(n.a)({},Object(i.e)("productManage",["ProductManageList","ProductModuleKeyIDList","ProductInteractionDataList","ControlTypeList","InteractionLeftPropertyList","InteractionRightPropertyList","CompareLeftPropertyList","CompareRightPropertyList"]),{curProduct:function(){var t=this;return this.ProductID?this.ProductManageList.find((function(e){return e.ID===t.ProductID})):null},curPart:function(){var t=this;return this.PartID&&this.curProduct?this.curProduct.PartList.find((function(e){return e.ID===t.PartID})):null},localInteractionDataList:function(){var t=this;return Array.isArray(this.ProductInteractionDataList)&&0!==this.ProductInteractionDataList.length?JSON.parse(JSON.stringify(this.ProductInteractionDataList)).map((function(e){var r=e.Constraint,a=e.List.map((function(e){var r=e.Property,a=e.CompareProperty;return r?(a&&r?(r=o.c.getPerfectPropertyByImperfectProperty(r,t.CompareLeftPropertyList),a=o.c.getPerfectPropertyByImperfectProperty(a,t.CompareRightPropertyList)):r&&(r=o.c.getPerfectPropertyByImperfectProperty(r,t.InteractionRightPropertyList)),Object(n.a)({},e,{Property:r,CompareProperty:a})):e})),i=[];return r&&(i=r.ItemList.map((function(e){var r=e.Property,a=e.ValueList;return Array.isArray(a)&&1===a.length&&!a[0].Value&&a[0].Property&&(a[0].Property=o.c.getPerfectPropertyByImperfectProperty(a[0].Property,t.InteractionLeftPropertyList)),Object(n.a)({},e,{Property:o.c.getPerfectPropertyByImperfectProperty(r,t.InteractionLeftPropertyList),ValueList:a})})).filter((function(t){return t.Property}))),Object(n.a)({},e,{Constraint:Object(n.a)({},r,{ItemList:i}),List:a})})):[]},RiskWarningDataList:function(){return this.getTargetDataList("risk")},InteractionDataList:function(){return this.getTargetDataList("interaction")},CompareDataList:function(){return this.getTargetDataList("compare")},subInteractionDataList:function(){return this.getTargetDataList("subInteraction")},subCompareDataList:function(){return this.getTargetDataList("subCompare")},dialogTitle:function(){return"subCompare"===this.setType4SubInteractionAndSubCompare?this.initDialogDataStr?"编辑子对比":"添加子对比":"subInteraction"===this.setType4SubInteractionAndSubCompare?this.initDialogDataStr?"编辑子交互":"添加子交互":""}}),methods:{getPositionID:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var r,a,n,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$route.params){e.next=3;break}return t.onGoBackClick(),e.abrupt("return");case 3:if(r=t.$route.params,a=r.ProductID,n=r.PartID,i=r.name,o=r.type,a&&n&&i&&o){e.next=7;break}return t.onGoBackClick(),e.abrupt("return");case 7:return t.ProductID=a,t.PartID="null"!==n?n:"",t.ProductName=i,t.titleType=o,t.getProductOrderData(),t.getPropertyList4SubInteractionAndSubCompare(),e.next=15,t.$store.dispatch("productManage/getInteractionPropertyList",t.ProductID);case 15:t.showTable=!0;case 16:case"end":return e.stop()}}),e)})))()},getProductOrderData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["Interaction"];return Object(a.a)(regeneratorRuntime.mark((function r(){var a,n,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t.PartID?t.PartID:t.ProductID,n=t.$utils.getIDFromListByNames(e,t.ProductModuleKeyIDList),i={ID:a,List:n},t.loading=!0,r.next=6,t.$store.dispatch("productManage/getProductInteractionDataList",i);case 6:t.loading=!1;case 7:case"end":return r.stop()}}),r)})))()},onGoBackClick:function(){this.$router.replace("/ProductManageList")},handleJumpToNewPage:function(t,e){this.$store.commit("productManage/setCurInteractionData",e);var r=this.ProductID,a=this.ProductName,n=this.titleType,i=this.PartID?this.PartID:"null",o="/ProductInteractionSet/".concat(r,"/").concat(i,"/").concat(a,"/").concat(n,"/").concat(t,"/").concat(Date.now());this.$router.push(o)},onSetupPageJump:function(t,e){var r=this;return Object(a.a)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("subCompare"===t||"subInteraction"===t){a.next=4;break}r.handleJumpToNewPage(t,e),a.next=8;break;case 4:return a.next=6,r.getPropertyList4SubInteractionAndSubCompare();case 6:a.sent&&(r.setType4SubInteractionAndSubCompare=t,r.itemData4SubInteractionAndSubCompare=e,e&&e.target?(n=JSON.stringify(e.target),r.initDialogDataStr="{}"!==n?n:""):r.initDialogDataStr="",r.visible=!0);case 8:case"end":return a.stop()}}),a)})))()},getTargetDataList:function(t){var e=this;if(!t||!Array.isArray(this.localInteractionDataList)||0===this.localInteractionDataList.length)return[];var r=this.$utils.getIDFromListByNames(t,this.ControlTypeList),a=this.localInteractionDataList.filter((function(t){return t.ControlType===r}));return"subCompare"!==t&&"subInteraction"!==t||(a=a.map((function(t){return Object(n.a)({},t,{target:e.getItemTarget(t,e.subDialogPropertyList)})}))),a},getItemTarget:function(t,e){var r=t.ProductID,a=t.PartID,n=t.CraftID,i=t.GroupID;return e.find((function(t){var e=t.Product,o=t.Part,s=t.Craft,u=t.Group;return!!((e&&r&&e.ID===r||!e&&!r)&&(o&&a&&o.ID===a||!o&&!a)&&(s&&n&&s.ID===n||!s&&!n)&&(u&&i&&u.ID===i||!u&&!i))}))||{}},getPropertyList4SubInteractionAndSubCompare:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.subDialogPropertyList&&Array.isArray(t.subDialogPropertyList)&&t.subDialogPropertyList.length>0)){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,t.api.getSubformulaUseableProperty(t.ProductID).catch((function(){}));case 4:if(!(r=e.sent)||1e3!==r.data.Status){e.next=8;break}return t.subDialogPropertyList=r.data.Data,e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})))()},onSelectCompleted:function(t){t&&(this.$store.commit("productManage/setSubTargetData",t),this.visible=!1,this.handleJumpToNewPage(this.setType4SubInteractionAndSubCompare,this.itemData4SubInteractionAndSubCompare))},onTableItemRemove:function(t){var e=this;if(t){var r=this.ControlTypeList.find((function(e){return e.ID===t.ControlType})),a=r?"交互类型：[ ".concat(r.label," ]"):"";this.messageBox.warnCancelBox("确定删除该条设置吗",a,(function(){e.$store.dispatch("productManage/getProductControlRemove",t.ID)}))}}},mounted:function(){this.getPositionID()}},p=(r("02ee"),r("2877")),l=Object(p.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mp-erp-product-list-page-product-interaction-list-page-wrap"},[r("header",[r("span",[t._v("当前"+t._s(t.titleType)+"：")]),r("span",[t._v(t._s(t.ProductName))])]),r("main",[t.showTable?[r("CommonInteractionTable",{attrs:{type:"interaction",dataList:t.InteractionDataList,PropertyList:t.InteractionLeftPropertyList},on:{remove:t.onTableItemRemove,setup:t.onSetupPageJump}}),r("CommonInteractionTable",{attrs:{type:"compare",dataList:t.CompareDataList,PropertyList:t.InteractionLeftPropertyList},on:{remove:t.onTableItemRemove,setup:t.onSetupPageJump}}),r("CommonInteractionTable",{attrs:{type:"risk",dataList:t.RiskWarningDataList,PropertyList:t.InteractionLeftPropertyList},on:{remove:t.onTableItemRemove,setup:t.onSetupPageJump}}),r("CommonInteractionTable",{attrs:{type:"subInteraction",dataList:t.subInteractionDataList,PropertyList:t.InteractionLeftPropertyList},on:{remove:t.onTableItemRemove,setup:t.onSetupPageJump}}),r("CommonInteractionTable",{attrs:{type:"subCompare",dataList:t.subCompareDataList,PropertyList:t.InteractionLeftPropertyList},on:{remove:t.onTableItemRemove,setup:t.onSetupPageJump}}),r("SubFormulaAddAndSelectDialog",{attrs:{visible:t.visible,PropertyList:t.subDialogPropertyList,title:t.dialogTitle,initDataStr:t.initDialogDataStr},on:{"update:visible":function(e){t.visible=e},submit:t.onSelectCompleted}})]:t._e()],2),r("footer",[r("el-button",{on:{click:t.onGoBackClick}},[r("i",{staticClass:"el-icon-d-arrow-left"}),t._v(" 返回")])],1)])}),[],!1,null,null,null);e.default=l.exports},"8d94":function(t,e,r){},e83a:function(t,e,r){"use strict";var a=r("59aa");r.n(a).a}}]);