(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-686b29a9"],{"568a":function(e,t,i){"use strict";i.r(t);var n=(i("4de4"),i("7db0"),i("c740"),i("d81d"),i("a434"),i("b0c0"),i("96cf"),i("1da1")),r=i("5530"),s=i("2f62"),c={name:"ProductFileSetPage",data:function(){return{ProductID:"",PartID:"",ProductName:"",titleType:"",checkedFileList:[],loadingFileList:!0}},components:{ContionCommonComp:i("9477").a},computed:Object(r.a)({},Object(s.e)("productManage",["ProductManageList","ProductFilePropertyList","curEditFileData"]),{},Object(s.e)("common",["FileDataList"]),{curProduct:function(){var e=this;return this.ProductID?this.ProductManageList.find((function(t){return t.ID===e.ProductID})):null},curPart:function(){var e=this;return this.PartID&&this.curProduct?this.curProduct.PartList.find((function(t){return t.ID===e.PartID})):null},checkedFileIDs:function(){return Array.isArray(this.checkedFileList)&&0!==this.checkedFileList.length?this.checkedFileList.map((function(e){return e.File.ID})):[]}}),methods:{getPositionID:function(){if(this.$route.params){var e=this.$route.params,t=e.ProductID,i=e.PartID,n=e.name,r=e.type;t&&i&&n&&r?(this.ProductID=t,this.PartID="null"!==i?i:"",this.ProductName=n,this.titleType=r):this.onGoBackClick()}else this.onGoBackClick()},selectChange:function(e){var t=this.checkedFileList.findIndex((function(t){return t.File.ID===e.ID}));t>-1?this.checkedFileList.splice(t,1):e.IsPrintFile?(this.checkedFileList=this.checkedFileList.filter((function(e){return!e.File.IsPrintFile})),this.checkedFileList.push({File:e,IsRequired:!1,MaxSize:""})):this.checkedFileList.push({File:e,IsRequired:!1,MaxSize:""})},getIsRequiredByID:function(e){var t=this.checkedFileList.find((function(t){return t.File.ID===e}));return!!t&&t.IsRequired},requiredChange:function(e){var t=this.checkedFileList.find((function(t){return t.File.ID===e}));t&&(t.IsRequired=!t.IsRequired)},getMaxSizeValByID:function(e){var t=this.checkedFileList.find((function(t){return t.File.ID===e}));return t?t.MaxSize:""},onMaxSizeChange:function(e,t){var i=this.checkedFileList.find((function(e){return e.File.ID===t}));i&&(i.MaxSize=e)},onGoBackClick:function(){this.$goback()},onSubmitClick:function(){var e=this,t=this.$refs.oLeftCondition.getConditonResult();if(t)if(this.checkedFileList&&0!==this.checkedFileList.length){if(this.checkedFileList.find((function(t){return!t.MaxSize||!e.$utils.getValueIsOrNotNumber(t.MaxSize,!0)||t.MaxSize<1||t.MaxSize>3e3})))this.messageBox.failSingleError("保存失败","最大总尺寸限制不正确，必填，且应为1 - 3000整数类型");else{var i={ID:t.ID,Priority:t.Priority,Constraint:t.Constraint,FileList:this.checkedFileList,ProductID:this.ProductID};this.ProductFileSubmitHandler(i)}}else this.messageBox.failSingleError("保存失败","请勾选想要设置的文件类目")},ProductFileSubmitHandler:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function i(){var n,s,c,a;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.api.getProductFileSave(e).catch((function(){}));case 2:(n=i.sent)&&n.data&&1e3===n.data.Status&&(s=e.ID||0===e.ID,c=function(){t.$store.commit("productManage/setProductFileSave",[Object(r.a)({},e,{ID:n.data.Data}),s]),t.onGoBackClick()},a=s?"编辑成功":"添加成功",t.messageBox.successSingle(a,c,c));case 4:case"end":return i.stop()}}),i)})))()},getFileInfoList:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("common/getFileInfoList");case 2:e.loadingFileList=!1;case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){if(this.getPositionID(),this.getFileInfoList(),this.curEditFileData){var e=this.curEditFileData.FileList;Array.isArray(e)&&0!==e.length&&(this.checkedFileList=JSON.parse(JSON.stringify(e)))}}},a=(i("59bd"),i("2877")),o=Object(a.a)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"mp-erp-product-list-page-product-file-set-page-wrap"},[i("header",[i("span",[e._v("当前"+e._s(e.titleType)+"：")]),i("span",[e._v(e._s(e.ProductName))])]),i("main",[i("ContionCommonComp",{ref:"oLeftCondition",attrs:{PropertyList:e.ProductFilePropertyList,curEditData:e.curEditFileData}},[i("span",[e._v("文件类目：")]),i("ul",{staticClass:"file-list"},[e._l(e.FileDataList,(function(t){return i("li",{key:t.ID},[i("el-checkbox",{attrs:{value:e.checkedFileIDs.includes(t.ID)},on:{change:function(i){return e.selectChange(t)}}},[e._v(e._s(t.Name)+e._s(t.IsPrintFile?"（印刷文件）":""))]),e.checkedFileIDs.includes(t.ID)?i("el-checkbox",{attrs:{value:e.getIsRequiredByID(t.ID)},on:{change:function(i){return e.requiredChange(t.ID)}}},[e._v("必须上传")]):e._e(),e.checkedFileIDs.includes(t.ID)?i("div",{staticClass:"max-size-box"},[i("span",[e._v("最大总尺寸限制：")]),i("el-input",{attrs:{placeholder:"1 - 3000",size:"mini",maxlength:"4",value:e.getMaxSizeValByID(t.ID)},on:{input:function(i){return e.onMaxSizeChange(i,t.ID)}}}),i("span",[e._v("M")])],1):e._e()],1)})),e.loadingFileList||0!==e.FileDataList.length?e._e():i("li",[i("span",{staticClass:"is-gray is-font-size-12",staticStyle:{"line-height":"16px"}},[e._v("暂无文件类目列表，请到文件类目中添加")])])],2)])],1),i("footer",[i("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitClick}},[e._v("保存")]),i("el-button",{on:{click:e.onGoBackClick}},[i("i",{staticClass:"el-icon-d-arrow-left"}),e._v(" 返回")])],1)])}),[],!1,null,null,null);t.default=o.exports},"59bd":function(e,t,i){"use strict";var n=i("e7ca");i.n(n).a},e7ca:function(e,t,i){}}]);