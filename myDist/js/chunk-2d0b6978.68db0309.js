(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0b6978"],{"1e8f":function(t,a,u){"use strict";u.r(a);var r=(u("99af"),u("7db0"),u("b0c0"),u("ac1f"),u("5319"),u("5530")),o=u("2f62"),e={name:"ProductFormulaSetPage",data:function(){return{ProductID:"",PartID:"",ProductName:"",moduleIndex:"",titleType:"",showFormulaName:"",formulaTarget:"-- 公式目标：产品"}},components:{FormulaPanelComp:u("7961").a},computed:Object(r.a)({},Object(o.e)("productManage",["ProductManageList","ProductModuleKeyIDList","curEditFormulaData","curEditSubFormulaData","curSubFormulaAddProperty"]),{curProduct:function(){var t=this;return this.ProductID?this.ProductManageList.find((function(a){return a.ID===t.ProductID})):null},curPart:function(){var t=this;return this.PartID&&this.curProduct?this.curProduct.PartList.find((function(a){return a.ID===t.PartID})):null}}),methods:{getPositionID:function(){var t=this.$route.params,a=t.ProductID,u=t.PartID,r=t.name,o=t.type,e=t.moduleIndex,c=t.isSubFormula;if(this.ProductID=a,this.PartID="null"!==u?u:"",this.ProductName=r,this.titleType=o,this.moduleIndex=+e,c&&"false"!==c){if(!0===c||"true"===c){var i=this.curEditSubFormulaData?this.curEditSubFormulaData.Name:"新加子公式";this.showFormulaName="子公式：".concat(i),this.curSubFormulaAddProperty?this.formulaTarget="-- 子公式目标：".concat(this.curSubFormulaAddProperty.DisplayContent.replace(/\[|\]/g,"")):this.curEditSubFormulaData&&(this.formulaTarget="-- 子公式目标：".concat(this.curEditSubFormulaData.Target||"未知目标"))}}else{var n=this.curEditFormulaData?this.curEditFormulaData.Name:"新加公式";this.showFormulaName="公式：".concat(n)}},onGoBackClick:function(){var t="/ProductFormulaList/".concat(this.ProductID,"/").concat(this.PartID?this.PartID:"null","/").concat(this.ProductName,"/").concat(this.titleType,"/").concat(Date.now());this.$router.push(t)},onSuccessSubmit:function(){}},mounted:function(){this.getPositionID()}},c=u("2877"),i=Object(c.a)(e,(function(){var t=this,a=t.$createElement,u=t._self._c||a;return t.ProductID&&(t.moduleIndex||0===t.moduleIndex)?u("FormulaPanelComp",{staticClass:"mp-erp-product-module-formula-set-page-wrap",attrs:{PositionID:t.ProductID,PositionType:"ProductID",moduleIndex:t.moduleIndex,NowEditFormulaData:t.curEditFormulaData,curEditSubFormulaData:t.curEditSubFormulaData,curSubFormulaAddProperty:t.curSubFormulaAddProperty,pageTitle:t.ProductName,pageLabel:"当前"+t.titleType},on:{goback:t.onGoBackClick,successSubmit:t.onSuccessSubmit},scopedSlots:t._u([{key:"title",fn:function(){return[t.formulaTarget?u("span",{staticClass:"name"},[t._v(t._s(t.formulaTarget))]):t._e(),u("span",{staticClass:"name"},[t._v(t._s(t.showFormulaName))])]},proxy:!0}],null,!1,3313042956)}):t._e()}),[],!1,null,null,null);a.default=i.exports}}]);