(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-686b29a9"],{"568a":function(t,e,i){"use strict";i.r(e);var n=(i("4de4"),i("7db0"),i("c740"),i("d81d"),i("a434"),i("b0c0"),i("96cf"),i("1da1")),r=i("5530"),c=i("2f62"),s={name:"ProductFileSetPage",data:function(){return{ProductID:"",PartID:"",ProductName:"",titleType:"",checkedFileList:[]}},components:{ContionCommonComp:i("9477").a},computed:Object(r.a)({},Object(c.e)("productManage",["ProductManageList","ProductFilePropertyList","curEditFileData"]),{},Object(c.e)("common",["FileDataList"]),{curProduct:function(){var t=this;return this.ProductID?this.ProductManageList.find((function(e){return e.ID===t.ProductID})):null},curPart:function(){var t=this;return this.PartID&&this.curProduct?this.curProduct.PartList.find((function(e){return e.ID===t.PartID})):null},checkedFileIDs:function(){return Array.isArray(this.checkedFileList)&&0!==this.checkedFileList.length?this.checkedFileList.map((function(t){return t.File.ID})):[]}}),methods:{getPositionID:function(){if(this.$route.params){var t=this.$route.params,e=t.ProductID,i=t.PartID,n=t.name,r=t.type;e&&i&&n&&r?(this.ProductID=e,this.PartID="null"!==i?i:"",this.ProductName=n,this.titleType=r):this.onGoBackClick()}else this.onGoBackClick()},selectChange:function(t){var e=this.checkedFileList.findIndex((function(e){return e.File.ID===t.ID}));e>-1?this.checkedFileList.splice(e,1):t.IsPrintFile?(this.checkedFileList=this.checkedFileList.filter((function(t){return!t.File.IsPrintFile})),this.checkedFileList.push({File:t,IsRequired:!1})):this.checkedFileList.push({File:t,IsRequired:!1})},getIsRequiredByID:function(t){var e=this.checkedFileList.find((function(e){return e.File.ID===t}));return!!e&&e.IsRequired},requiredChange:function(t){var e=this.checkedFileList.find((function(e){return e.File.ID===t}));e&&(e.IsRequired=!e.IsRequired)},onGoBackClick:function(){this.$goback()},onSubmitClick:function(){var t=this.$refs.oLeftCondition.getConditonResult();if(t)if(this.checkedFileList&&0!==this.checkedFileList.length){var e=t.ID,i=t.Priority,n=t.Constraint,r=this.checkedFileList;if(r){var c={ID:e,Priority:i,Constraint:n,FileList:r,ProductID:this.ProductID};this.ProductFileSubmitHandler(c)}}else this.messageBox.failSingleError("保存失败","请勾选想要设置的文件类目")},ProductFileSubmitHandler:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function i(){var n,c,s,a;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.api.getProductFileSave(t).catch((function(){}));case 2:(n=i.sent)&&n.data&&1e3===n.data.Status&&(c=t.ID||0===t.ID,s=function(){e.$store.commit("productManage/setProductFileSave",[Object(r.a)({},t,{ID:n.data.Data}),c]),e.onGoBackClick()},a=c?"编辑成功":"添加成功",e.messageBox.successSingle(a,s,s));case 4:case"end":return i.stop()}}),i)})))()}},mounted:function(){if(this.getPositionID(),this.$store.dispatch("common/getFileInfoList"),this.curEditFileData){var t=this.curEditFileData.FileList;Array.isArray(t)&&0!==t.length&&(this.checkedFileList=JSON.parse(JSON.stringify(t)))}}},a=(i("59bd"),i("2877")),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mp-erp-product-list-page-product-file-set-page-wrap"},[i("header",[i("span",[t._v("当前"+t._s(t.titleType)+"：")]),i("span",[t._v(t._s(t.ProductName))])]),i("main",[i("ContionCommonComp",{ref:"oLeftCondition",attrs:{PropertyList:t.ProductFilePropertyList,curEditData:t.curEditFileData}},[i("span",[t._v("文件类目：")]),i("ul",{staticClass:"file-list"},t._l(t.FileDataList,(function(e){return i("li",{key:e.ID},[i("el-checkbox",{attrs:{value:t.checkedFileIDs.includes(e.ID)},on:{change:function(i){return t.selectChange(e)}}},[t._v(t._s(e.Name)+t._s(e.IsPrintFile?"（印刷文件）":""))]),t.checkedFileIDs.includes(e.ID)?i("el-checkbox",{attrs:{value:t.getIsRequiredByID(e.ID)},on:{change:function(i){return t.requiredChange(e.ID)}}},[t._v("必须上传")]):t._e()],1)})),0)])],1),i("footer",[i("el-button",{attrs:{type:"primary"},on:{click:t.onSubmitClick}},[t._v("保存")]),i("el-button",{on:{click:t.onGoBackClick}},[i("i",{staticClass:"el-icon-d-arrow-left"}),t._v(" 返回")])],1)])}),[],!1,null,null,null);e.default=o.exports},"59bd":function(t,e,i){"use strict";var n=i("e7ca");i.n(n).a},e7ca:function(t,e,i){}}]);