(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-066ca5d3"],{1012:function(t,e,a){"use strict";var n=a("fc0a");a.n(n).a},"3ad1":function(t,e,a){"use strict";a.r(e);var n=(a("99af"),a("7db0"),a("b0c0"),a("ac1f"),a("5319"),a("5530")),o=a("2f62"),r=a("c9b2"),i=(a("4de4"),a("d81d"),a("a9e3"),a("ade3")),s=(a("96cf"),a("1da1")),l=a("3835"),c=a("3eca"),u=a("67d9"),p={props:{PositionID:{type:String,default:""},formulaH:{type:Number,default:560},PositionType:{type:String,default:""}},components:{SubFormulaAddAndSelectDialog:u.a},data:function(){return{localTableData:[],loading:!1,PropertyList:null,visible:!1,ComparePropertyList:[]}},computed:{tableDataList:function(){var t=this;return this.localTableData&&0!==this.localTableData.length?this.ComparePropertyList&&0!==this.ComparePropertyList.length?this.localTableData.map((function(e){if(!e.Constraint)return Object(n.a)({},e,{conditionText:"无"});var a=c.c.getConstraintAndTextByImperfectConstraint(e.Constraint,t.ComparePropertyList),o=Object(l.a)(a,2),r=o[0],i=o[1];return Object(n.a)({},e,{Constraint:r,conditionText:i})})):this.localTableData:[]}},methods:{onSetupClick:function(t){this.$emit("setup",t)},onFilterClick:function(t){this.$emit("filter",Object(n.a)({},t,{ComparePropertyList:this.ComparePropertyList}))},onRemoveClick:function(t){var e=this;return Object(s.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t&&t.ID){a.next=2;break}return a.abrupt("return");case 2:e.messageBox.warnCancelBox("确定删除该公式吗","公式名称：[ ".concat(t.Name," ]"),(function(){e.handleRemove(t)}));case 3:case"end":return a.stop()}}),a)})))()},handleRemove:function(t){var e=this;return Object(s.a)(regeneratorRuntime.mark((function a(){var n,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.api.getFormulaRemove(t.ID).catch((function(){}));case 2:(n=a.sent)&&200===n.status&&1e3===n.data.Status&&(o=function(){e.setDataListRemove(t.ID)},e.messageBox.successSingle("删除成功",o,o));case 4:case"end":return a.stop()}}),a)})))()},setDataListRemove:function(t){this.localTableData=this.localTableData.filter((function(e){return e.ID!==t}))},getFormulaList:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.PositionID&&!t.loading){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.next=5,t.api.getFormulaList((a={},Object(i.a)(a,t.PositionType,t.PositionID),Object(i.a)(a,"UseModule",2),a)).catch((function(){}));case 5:n=e.sent,t.loading=!1,n&&200===n.status&&1e3===n.data.Status&&(t.localTableData=n.data.Data);case 8:case"end":return e.stop()}}),e)})))()},onSubFormulaAddClick:function(){this.visible=!0,this.getPropertyList()},getPropertyList:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.PropertyList&&Array.isArray(t.PropertyList)&&t.PropertyList.length>0)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.api.getSubformulaUseableProperty(t.PositionID).catch((function(){}));case 4:(a=e.sent)&&1e3===a.data.Status&&(t.PropertyList=a.data.Data);case 6:case"end":return e.stop()}}),e)})))()},getComparePropertyList:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.c.getPropertyList((a={},Object(i.a)(a,t.PositionType,t.PositionID),Object(i.a)(a,"UseModule",16),a));case 2:(n=e.sent)&&(t.ComparePropertyList=n);case 4:case"end":return e.stop()}}),e)})))()},onSelectCompleted:function(t){t&&(this.$emit("add",t),this.visible=!1)}},mounted:function(){this.getFormulaList(),this.getComparePropertyList();var t=document.querySelector(".mp-erp-material-type-page-sub-formula-set-comp-wrap .mp-erp-common-sub-formula-table-comp-wrap .el-table__body-wrapper");t&&(t.style.minHeight="".concat(this.formulaH,"px"))}},m=(a("1012"),a("2877")),d=Object(m.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mp-erp-material-type-page-sub-formula-set-comp-wrap"},[a("header",[a("span",{staticClass:"title"},[t._v("子公式列表")]),a("span",{staticClass:"blue-span",on:{click:t.onSubFormulaAddClick}},[t._v("+添加子公式")])]),a("main",[a("el-table",{key:"mp-erp-common-sub-formula-table-comp-wrap",staticClass:"mp-erp-common-sub-formula-table-comp-wrap",staticStyle:{width:"100%"},attrs:{stripe:"",border:"",data:t.tableDataList,fit:""}},[a("el-table-column",{attrs:{prop:"Name",label:"名称",width:"220"}}),a("el-table-column",{attrs:{prop:"Content",label:"数据筛选","min-width":"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"light","popper-class":"common-property-condition-text-tips-box"}},[a("div",{attrs:{slot:"content"},slot:"content"},t._l(e.row.conditionText,(function(n,o){return a("p",{key:n.name+"tips"+o},[o>0?a("span",{staticClass:"type"},[t._v(t._s(1===e.row.Constraint.FilterType?"且":"或"))]):t._e(),a("span",{staticClass:"name"},[t._v(t._s(n.name))]),a("span",{staticClass:"is-origin"},[t._v(t._s(n.operator))]),a("span",{staticClass:"val"},[t._v(t._s(n.val))]),o===e.row.conditionText.length-1?a("span",{staticStyle:{"margin-left":"2px"}},[t._v(" 。")]):a("span",{staticStyle:{"margin-left":"2px"}},[t._v("；")])])})),0),a("div",{staticClass:"common-property-condition-text-content-box"},t._l(e.row.conditionText,(function(n,o){return a("p",{key:n.name+"content"+o},[o>0?a("span",{staticClass:"type"},[t._v(t._s(1===e.row.Constraint.FilterType?"且":"或"))]):t._e(),a("span",[t._v(t._s(n.name))]),a("span",{staticClass:"is-origin"},[t._v(t._s(n.operator))]),a("span",[t._v(t._s(n.val))])])})),0)])]}}])}),a("el-table-column",{attrs:{prop:"Content",label:"公式","min-width":"240","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"Target",label:"子公式目标",width:"220","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"Unit",label:"单位",width:"80","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"UseTimes",label:"使用次数",width:"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"240","class-name":"menu-column"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticClass:"menu-list"},[a("span",{staticClass:"icon-span",on:{click:function(a){return t.onFilterClick(e.row)}}},[a("i"),t._v("数据筛选")]),a("span",{staticClass:"icon-span",on:{click:function(a){return t.onSetupClick(e.row)}}},[a("i"),t._v("编辑")]),a("span",{staticClass:"icon-span",on:{click:function(a){return t.onRemoveClick(e.row)}}},[a("i"),t._v("删除")])])}}])}),a("div",{attrs:{slot:"empty"},slot:"empty"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("暂无公式")])])],1),a("SubFormulaAddAndSelectDialog",{attrs:{visible:t.visible,PropertyList:t.PropertyList,warnTitle:"子公式"},on:{"update:visible":function(e){t.visible=e},submit:t.onSelectCompleted}})],1)])}),[],!1,null,null,null).exports,f={name:"ProductFormulaListPage",data:function(){return{ProductID:"",PartID:"",ProductName:"",titleType:"",FormulaList:[]}},components:{FormulaTableCrtlComp:r.a,SubFormulaTableCrtlComp:d},computed:Object(n.a)({},Object(o.e)("productManage",["ProductManageList","ProductModuleKeyIDList"]),{curProduct:function(){var t=this;return this.ProductID?this.ProductManageList.find((function(e){return e.ID===t.ProductID})):null},curPart:function(){var t=this;return this.PartID&&this.curProduct?this.curProduct.PartList.find((function(e){return e.ID===t.PartID})):null}}),methods:{getPositionID:function(){if(this.$route.params){var t=this.$route.params,e=t.ProductID,a=t.PartID,n=t.name,o=t.type;e&&a&&n&&o?(this.ProductID=e,this.PartID="null"!==a?a:"",this.ProductName=n,this.titleType=o):this.onGoBackClick()}else this.onGoBackClick()},onFormulaSaveClick:function(t){this.$store.commit("productManage/setCurEditFormulaData",t);var e="/ProductFormulaSet/".concat(this.ProductID,"/").concat(this.PartID?this.PartID:"null","/").concat(this.ProductName,"/").concat(this.titleType,"/1/").concat(Date.now());this.$router.push(e)},onSubFormulaFilterClick:function(t){this.$store.commit("productManage/setCurSubFormulaAddProperty",null),this.$store.commit("productManage/setCurEditSubFormulaData",t);var e="/ProductFormulaFilter/".concat(this.ProductID,"/").concat(this.PartID?this.PartID:"null","/").concat(this.ProductName,"/").concat(this.titleType,"/15/").concat(Date.now());this.$router.push(e)},onSubFormulaSaveClick:function(t){this.$store.commit("productManage/setCurSubFormulaAddProperty",null),this.$store.commit("productManage/setCurEditSubFormulaData",t);var e="/ProductFormulaSet/".concat(this.ProductID,"/").concat(this.PartID?this.PartID:"null","/").concat(this.ProductName,"/").concat(this.titleType,"/2/").concat(Date.now());this.$router.push(e)},onSubFormulaAddClick:function(t){this.$store.commit("productManage/setCurEditSubFormulaData",null),this.$store.commit("productManage/setCurSubFormulaAddProperty",t);var e="/ProductFormulaSet/".concat(this.ProductID,"/").concat(this.PartID?this.PartID:"null","/").concat(this.ProductName,"/").concat(this.titleType,"/2/").concat(Date.now());this.$router.push(e)},onGoBackClick:function(){this.$router.replace("/ProductManageList")}},mounted:function(){this.getPositionID()}},b=(a("66fd"),Object(m.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mp-erp-product-list-page-product-formula-list-page-wrap"},[a("header",[a("span",[t._v("当前"+t._s(t.titleType)+"：")]),a("span",[t._v(t._s(t.ProductName))])]),a("main",[t.ProductID?a("FormulaTableCrtlComp",{attrs:{UseModule:1,formulaH:222,PositionID:t.ProductID,PositionType:"ProductID"},on:{setup:t.onFormulaSaveClick}}):t._e(),t.ProductID?a("SubFormulaTableCrtlComp",{attrs:{formulaH:222,PositionID:t.ProductID,PositionType:"ProductID"},on:{filter:t.onSubFormulaFilterClick,setup:t.onSubFormulaSaveClick,add:t.onSubFormulaAddClick}}):t._e()],1),a("footer",[a("el-button",{on:{click:t.onGoBackClick}},[a("i",{staticClass:"el-icon-d-arrow-left"}),t._v(" 返回")])],1)])}),[],!1,null,null,null));e.default=b.exports},"468e":function(t,e,a){"use strict";var n=a("4aae");a.n(n).a},"4aae":function(t,e,a){},"50cd":function(t,e,a){},"59aa":function(t,e,a){},"629b":function(t,e,a){},"66fd":function(t,e,a){"use strict";var n=a("629b");a.n(n).a},"67d9":function(t,e,a){"use strict";var n=(a("7db0"),a("4160"),a("159b"),a("96cf"),a("1da1")),o=a("5530"),r=a("ad32"),i={props:{visible:{type:Boolean,default:!1},PropertyList:{type:Array,default:null},warnTitle:{type:String,default:""},title:{type:String,default:"添加子公式"},initDataStr:{type:String,default:""}},components:{CommonDialogComp:r.a},computed:{selectDataList:function(){if(!this.PropertyList||!Array.isArray(this.PropertyList)||0===this.PropertyList.length)return[];var t=[];return this.PropertyList.forEach((function(e){var a=e.Product,n=e.Part,r=e.Group,i=e.Craft;if(a){var s=n?n.ID:a.ID,l=n?n.Name:"产品",c=t.find((function(t){return t.ID===s}));if(c||(c={ID:s,Name:l,Part:null,GroupList:[],CraftList:[]},t.push(c)),i&&r){var u=c.CraftList.find((function(t){return t.ID===i.ID}));u?u.GroupList.push(e):c.CraftList.push(Object(o.a)({},i,{GroupList:[e]}))}!i&&r&&c.GroupList.push(e),i||r||!n||(c.Part=e)}})),t}},data:function(){return{selectValue:""}},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("submit",t.selectValue);case 1:case"end":return e.stop()}}),e)})))()},onCancle:function(){this.$emit("update:visible",!1)},onOpen:function(){this.$nextTick(this.initEditData)},onClosed:function(){},initEditData:function(){var t=this;if(this.initDataStr){var e=this.PropertyList.find((function(e){return JSON.stringify(e)===t.initDataStr}));this.selectValue=e||""}else this.selectValue=""}}},s=(a("e83a"),a("2877")),l=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CommonDialogComp",{staticClass:"mp-erp-comps-common-sub-formula-add-and-select-dialog-comp-wrap",attrs:{width:"750px",top:"12vh",title:t.title,visible:t.visible,disabled:!t.selectValue},on:{"update:visible":function(e){t.visible=e},submit:t.onSubmit,cancle:t.onCancle,open:t.onOpen,closed:t.onClosed}},[t._l(t.selectDataList,(function(e){return a("div",{key:e.ID,staticClass:"item"},[a("p",[e.Part?a("el-radio",{attrs:{label:e.Part},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},[t._v(t._s(e.Name))]):a("span",[t._v(t._s(e.Name))])],1),a("div",t._l(e.GroupList,(function(e){return a("el-radio",{key:e.Group.ID,attrs:{label:e},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},[t._v(t._s(e.Group.Name))])})),1),a("ul",t._l(e.CraftList,(function(e){return a("li",{key:e.ID},[a("span",[t._v(t._s(e.Name)+"：")]),t._l(e.GroupList,(function(e){return a("el-radio",{key:e.Group.ID,attrs:{label:e},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},[t._v(t._s(e.Group.Name))])}))],2)})),0)])})),t.warnTitle?a("p",{staticClass:"tips-box is-pink"},[a("i",{staticClass:"el-icon-warning"}),t._v(" 注："+t._s(t.warnTitle)+"目标设定后不允许更改")]):t._e()],2)}),[],!1,null,null,null);e.a=l.exports},ad32:function(t,e,a){"use strict";var n={model:{prop:"value",event:"change"},props:{visible:{type:Boolean,default:!1},title:{type:String,default:"提示"},width:{default:"30%"},top:{type:String,default:"15vh"},showSubmit:{type:Boolean,default:!0},submitText:{type:String,default:"保存"},dangerText:{type:String,default:"重新生成"},cancelText:{type:String,default:"取消"},disabled:{type:Boolean,default:!1},showDanger:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{dialogVisible:{get:function(){return this.visible},set:function(t){this.$emit("update:visible",t)}}},data:function(){return{checkList:[]}},methods:{onCancleClick:function(){this.$emit("cancle")},onSubmitClick:function(t){this.dialogVisible&&("BUTTON"===t.target.nodeName?t.target.blur():"BUTTON"===t.target.parentNode.nodeName&&t.target.parentNode.blur(),this.$emit("submit"))},onDangerClick:function(){this.$emit("danger")},onOpen:function(){this.$emit("open")},onOpened:function(){this.$emit("opened")},onClose:function(){this.$emit("close")},onClosed:function(){this.$emit("closed")}}},o=(a("468e"),a("2877")),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"mp-img-style-header mp-erp-common-dialog-comp-wrap",attrs:{title:t.title,visible:t.dialogVisible,"close-on-click-modal":!1,width:t.width,top:t.top,modal:!1,"before-close":t.onCancleClick},on:{"update:visible":function(e){t.dialogVisible=e},open:t.onOpen,opened:t.onOpened,close:t.onClose,closed:t.onClosed}},[t._t("default"),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.showSubmit?a("el-button",{attrs:{type:"primary",loading:t.loading,disabled:t.disabled},on:{click:t.onSubmitClick}},[t._v(t._s(t.loading?"加载中":t.submitText))]):t._e(),t.showDanger?a("el-button",{attrs:{type:"danger"},on:{click:t.onDangerClick}},[t._v(t._s(t.dangerText))]):t._e(),a("el-button",{on:{click:t.onCancleClick}},[t._v(t._s(t.cancelText))])],1)],2)}),[],!1,null,null,null);e.a=r.exports},c9b2:function(t,e,a){"use strict";var n=(a("4de4"),a("a9e3"),a("ade3")),o=(a("96cf"),a("1da1")),r={props:{PositionID:{type:String,default:""},formulaH:{type:Number,default:560},PositionType:{type:String,default:""},UseModule:{type:Number,default:0}},data:function(){return{localTableData:[],loading:!1}},methods:{onSetupClick:function(t){this.$emit("setup",t)},onRemoveClick:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t&&t.ID){a.next=2;break}return a.abrupt("return");case 2:e.messageBox.warnCancelBox("确定删除该公式吗","公式名称：[ ".concat(t.Name," ]"),(function(){e.handleRemove(t)}));case 3:case"end":return a.stop()}}),a)})))()},handleRemove:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function a(){var n,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.api.getFormulaRemove(t.ID).catch((function(){}));case 2:(n=a.sent)&&200===n.status&&1e3===n.data.Status&&(o=function(){e.setDataListRemove(t.ID)},e.messageBox.successSingle("删除成功",o,o));case 4:case"end":return a.stop()}}),a)})))()},setDataListRemove:function(t){this.localTableData=this.localTableData.filter((function(e){return e.ID!==t}))},getFormulaList:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.PositionID&&!t.loading){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.next=5,t.api.getFormulaList((a={},Object(n.a)(a,t.PositionType,t.PositionID),Object(n.a)(a,"UseModule",t.UseModule),a)).catch((function(){}));case 5:o=e.sent,t.loading=!1,o&&200===o.status&&1e3===o.data.Status&&(t.localTableData=o.data.Data);case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getFormulaList();var t=document.querySelector(".mp-erp-common-comps-formula-table-common-comp-wrap .mp-erp-common-formula-table-comp-wrap .el-table__body-wrapper");t&&(t.style.minHeight="".concat(this.formulaH,"px"))}},i=(a("e9c5"),a("2877")),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mp-erp-common-comps-formula-table-common-comp-wrap"},[a("header",[a("span",{staticClass:"title"},[t._v("公式列表")]),a("span",{staticClass:"blue-span",on:{click:function(e){return t.onSetupClick(null)}}},[t._v("+添加公式")])]),a("main",[a("el-table",{key:"mp-erp-common-formula-table-comp-wrap",staticClass:"mp-erp-common-formula-table-comp-wrap",staticStyle:{width:"100%"},attrs:{stripe:"",border:"",data:t.localTableData,fit:""}},[a("el-table-column",{attrs:{prop:"Name",label:"名称",width:"280"}}),a("el-table-column",{attrs:{prop:"Content",label:"公式","min-width":"240","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"Unit",label:"单位",width:"120","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"UseTimes",label:"使用次数",width:"160","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"240","class-name":"menu-column"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{staticClass:"menu-list"},[a("span",{staticClass:"icon-span",on:{click:function(a){return t.onSetupClick(e.row)}}},[a("i"),t._v("编辑")]),a("span",{staticClass:"icon-span",on:{click:function(a){return t.onRemoveClick(e.row)}}},[a("i"),t._v("删除")])])}}])}),a("div",{attrs:{slot:"empty"},slot:"empty"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v("暂无公式")])])],1)],1)])}),[],!1,null,null,null);e.a=s.exports},e83a:function(t,e,a){"use strict";var n=a("59aa");a.n(n).a},e9c5:function(t,e,a){"use strict";var n=a("50cd");a.n(n).a},fc0a:function(t,e,a){}}]);