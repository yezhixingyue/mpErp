(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-626c6dfb"],{"08cb":function(t,e,a){},"2af0":function(t,e,a){"use strict";a("4de4"),a("7db0"),a("c740"),a("caad"),a("d81d"),a("a434"),a("2532");var i=a("3835"),n=a("2909"),l=a("5530"),s=a("aa47"),o=a("c117"),r=a("2f62");e.a={data:function(){return{h:0,sortItem:null,tableKey:this.$utils.getRandomRangeId(8),notify:null,hideColLabelList:[],localShowLabelList:[]}},watch:{h:function(t){this.h=t;var e=document.getElementsByClassName("el-table")[0];e&&(e.style.maxHeight="".concat(t,"px"))},hideColLabelList:function(){var t=this;this.tableColData=this.tableColData.map((function(e){var a=Object(l.a)({},e);return t.hideColLabelList.includes(e.label)?a.show=!1:a.show=!0,a}))},isLeftCollapse:function(t){var e=this;setTimeout((function(){e.setHeightByDebounce()}),t?700:450)}},computed:Object(l.a)({},Object(r.e)("layout",["isLeftCollapse"]),{colLabels:function(){return this.tableColData?this.tableColData.map((function(t){return t.label})):[]},curShowColTableData:function(){return this.tableColData?this.tableColData.filter((function(t){return t.show})):[]}}),methods:{getHeight:function(t,e){var a=document.querySelector("#app > section > main");if(!a)return 600;var i=t?document.querySelector(t):null;return(i?a.offsetHeight-i.offsetHeight:a.offsetHeight)-e},initHeightAuto:function(){var t=this;this.$nextTick((function(){return t.setHeightByDebounce()})),window.addEventListener("resize",this.setHeightByDebounce)},removeHeightAuto:function(){window.removeEventListener("resize",this.setHeightByDebounce)},onHeaderDragend:function(t,e,a){var i=this;if(this.tableColData){var n=this.tableColData.find((function(t){return t.label===a.label}));if(n&&(n.width&&(n.width="".concat(t,"px")),n.minWidth&&(n.minWidth="".concat(t,"px"))),this.sortItem){try{this.sortItem.destroy()}catch(t){}this.$nextTick((function(){i.commonTableSortMixin()}))}}},commonTableSortMixin:function(){if(this.tableColData){var t=document.querySelector(".el-table__header thead tr"),e={onEnd:this.handleSortEnd};try{this.sortItem=s.a.create(t,e)}catch(t){}}},handleSortEnd:function(t){var e=this,a=t.oldIndex-1,l=t.newIndex-1;if(this.curShowColTableData.length<this.tableColData.length&&this.curShowColTableData[a]){var s=this.curShowColTableData[a].label,o=this.tableColData.findIndex((function(t){return t.label===s}));if(o>=0&&(a=o),l>0){var r=this.curShowColTableData[l-1].label,c=this.tableColData.findIndex((function(t){return t.label===r}));c>=0&&(l=c+1)}}var u=Object(n.a)(this.tableColData),h=u.splice(a,1),d=Object(i.a)(h,1)[0];u.splice(l,0,d),this.tableColData=u,this.tableKey=this.$utils.getRandomRangeId(8),this.$nextTick((function(){e.commonTableSortMixin()}))},handleMountedAndActivated:function(){var t=this;if(this.setHeightByDebounce=Object(o.a)(this.setHeight,30),this.initHeightAuto(),this.commonTableSortMixin(),this.tableName){var e=JSON.parse(localStorage.getItem(this.tableName));e.length>0&&(e=e.filter((function(e){return t.colLabels.includes(e)}))),this.hideColLabelList=e}},handleDestroyAndDeactivated:function(){if(this.removeHeightAuto(),this.sortItem)try{this.sortItem.destroy()}catch(t){}},onInfoClick:function(){var t=this,e=this.$createElement;if(this.tableColData){var a=160;this.$refs.oElTable&&this.$refs.oElTable.$el&&this.$refs.oElTable.$el.offsetTop&&(a=this.$refs.oElTable.$el.offsetTop-17),this.localShowLabelList=this.colLabels.filter((function(e){return!t.hideColLabelList.includes(e)}));var i=function(){t.notify&&t.notify.close()},l=function(e){var a=t.localShowLabelList.findIndex((function(t){return t===e}));a>=0?t.localShowLabelList.splice(a,1):t.localShowLabelList.push(e)},s=e("section",{class:"content-box"},[e("main",[e("el-checkbox-group",{attrs:{value:this.localShowLabelList}},[this.tableColData.map((function(t){return e("el-checkbox",{on:{change:function(){return l(t.label)}},attrs:{label:t.label},key:t.label})}))])]),e("footer",[e("el-button",{on:{click:function(){t.hideColLabelList=t.colLabels.filter((function(e){return!t.localShowLabelList.includes(e)})),t.tableName&&localStorage.setItem(t.tableName,JSON.stringify(t.hideColLabelList)),i()}},attrs:{type:"primary"}},["保存"]),e("el-button",{on:{click:i}},["关闭"]),e("span",{class:"span-title-blue",on:{click:function(){var e,a=t.colLabels.filter((function(e){return!t.localShowLabelList.includes(e)}));(e=t.localShowLabelList).push.apply(e,Object(n.a)(a))}}},["重置"]),e("p",{class:"is-gray"},[e("span",["1. 没有被选中的列将会被隐藏"]),e("span",["2. 列显示隐藏设置会缓存至本地，在不清除缓存或版本更新的情况下，下次打开会自动延续本次设置"]),e("span",["3. 中间列可左右拖动（不被缓存）"])])])]);this.notify=this.$notify({title:"设置列显示",customClass:"mp-erp-table-column-show-setup-wrap",duration:0,message:s,offset:a})}}},mounted:function(){this.handleMountedAndActivated()},beforeDestroy:function(){this.handleDestroyAndDeactivated()},activated:function(){this.handleMountedAndActivated()},deactivated:function(){this.handleDestroyAndDeactivated()}}},"4f24":function(t,e,a){"use strict";var i=a("08cb");a.n(i).a},6534:function(t,e,a){"use strict";a.r(e);var i=a("5530"),n=(a("d81d"),a("a434"),a("aa47")),l=a("2af0"),s={props:{sorting:{type:Boolean,default:!1},dataList:{type:Array,default:function(){return[]}}},mixins:[l.a],data:function(){return{tableData:[],curMoveIndex:null,sortItem:null}},computed:{sortingState:function(){return!!this.sorting&&!(!this.dataList||0===this.dataList.length)},listData:function(){return this.sorting?this.tableData:this.dataList}},methods:{setHeight:function(){var t=this.getHeight("",230);this.h=t},onInpNumFocus:function(t){t.target.select()},onKeyupEnter:function(t,e,a){e!==a.$index&&(this.onSortChange(e,a,!0),t.target.blur())},onSortChange:function(t,e){var a=e.$index,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t!==a){var n=this.tableData[a];if(this.tableData.splice([a],1),this.tableData.splice(t,0,n),this.curMoveIndex=t,this.setTableDataIndex(),i){var l=0===t?"已置顶":"已调整";this.$message({showClose:!0,message:l,type:"success",offset:"10"})}}},setTableDataIndex:function(){this.tableData&&0!==this.tableData.length&&(this.tableData=this.tableData.map((function(t,e){return Object(i.a)({},t,{index:e+1})})))},tableSort:function(){var t=this,e=document.querySelector(".el-table__body-wrapper tbody"),a={onEnd:function(e){var a=e.newIndex,i=e.oldIndex;t.onSortChange(a,{$index:i});var n=t.tableData;t.tableData=[],t.$nextTick((function(){t.tableData=n}))}};this.sortItem=n.a.create(e,a)},handleSortSubmit:function(){this.$emit("exitSorting")}},watch:{sortingState:{immediate:!1,handler:function(t){var e=this;t?(this.tableData=this.dataList,this.setTableDataIndex(),this.$nextTick((function(){e.tableSort()}))):this.sortItem&&this.sortItem.destroy()}}}},o=(a("4f24"),a("2877")),r={name:"ExpressListPage",components:{ExpressManageListTableComp:Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{ref:"singleTable",staticClass:"mp-express-list-page-table-comp-wrap",staticStyle:{width:"100%"},attrs:{"max-height":t.h,height:t.h,data:t.listData,stripe:"",border:"",fit:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t.sorting?a("el-table-column",{attrs:{width:"520",label:"排序调整"},scopedSlots:t._u([{key:"default",fn:function(e){return a("ul",{staticClass:"mp-sort-change-box",class:t.curMoveIndex===e.$index?"just-now-move":""},[a("li",{staticClass:"blue-span",class:0===e.$index?"disabled":"",on:{click:function(a){return t.onSortChange(0,e,!0)}}},[a("i",{staticClass:"el-icon-top",staticStyle:{"font-size":"17px","vertical-align":"-2px"}}),t._v("置顶")]),a("li",{staticClass:"blue-span",class:0===e.$index?"disabled":"",on:{click:function(a){return t.onSortChange(0===e.$index?e.$index:e.$index-1,e)}}},[a("i",{staticClass:"el-icon-sort-up",staticStyle:{"font-size":"15px","vertical-align":"0px"}}),t._v("上移 ")]),a("li",{staticClass:"blue-span",class:e.$index===t.tableData.length-1?"disabled":"",on:{click:function(a){return t.onSortChange(e.$index===t.tableData.length-1?e.$index:e.$index+1,e)}}},[a("i",{staticClass:"el-icon-sort-down",staticStyle:{"font-size":"15px","vertical-align":"-2px"}}),t._v("下移")]),a("li",{staticClass:"jump-box"},[a("span",{staticStyle:{color:"#888E99"}},[t._v("跳转指定位置：")]),a("el-input-number",{attrs:{min:1,max:t.tableData.length},on:{focus:t.onInpNumFocus},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:function(a){return t.onKeyupEnter(a,e.row.index-1,e)}(a)}},model:{value:e.row.index,callback:function(a){t.$set(e.row,"index",a)},expression:"scope.row.index"}}),a("span",{staticClass:"blue-span",staticStyle:{"margin-left":"10px"},on:{click:function(a){return t.onSortChange(e.row.index-1,e,!0)}}},[t._v("确定")])],1)])}}],null,!1,4068929465)}):t._e(),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",width:"1000"}})],1)}),[],!1,null,null,null).exports},data:function(){return{showDialog:!1,ruleForm:{Name:"",Classify:"",Enable:!0,ID:""},rules:{Name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:2,max:12,message:"长度在 2 到 12 个字符",trigger:"blur"}],Classify:[{required:!0,message:"请选择分类",trigger:"change"}]},sorting:!1,tableData:[{date:"2016-05-02",name:"京东物流[外]",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"中通快递[外]",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"名片之家[外]",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"顺丰快递物流[外]",address:"上海市普陀区金沙江路 1516 弄"}]}},methods:{handleAreaDialogClose:function(){this.$refs.ruleForm.resetFields(),this.showDialog=!1},onExpressDialogOpen:function(t){this.ruleForm=t?Object(i.a)({},t):{Name:"",Classify:"",Enable:!0,ID:""},this.showDialog=!0},submitForm:function(){this.showDialog&&this.$refs.ruleForm.validate((function(t){}))},onSortBtnClick:function(){this.tableData&&0!==this.tableData.length&&(this.sorting=!0)},onSubmitSortClick:function(){},setSortingClose:function(){this.sorting=!1}}},c=(a("9e7f"),Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mp-erp-express-manage-list-page-wrap"},[a("header",[a("div",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onExpressDialogOpen(null)}}},[t._v("添加物流快递")]),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"mp-img-style-header new-dialog-styles mp-erp-express-add-dialog-wrap",attrs:{title:"添加物流快递",visible:t.showDialog,modal:!1,width:"650px",top:"20vh","before-close":t.handleAreaDialogClose},on:{"update:visible":function(e){t.showDialog=e}}},[a("section",[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"名称:",prop:"Name"}},[a("el-input",{attrs:{maxlength:"12","show-word-limit":""},model:{value:t.ruleForm.Name,callback:function(e){t.$set(t.ruleForm,"Name",e)},expression:"ruleForm.Name"}})],1),a("el-form-item",{attrs:{label:"分类:",prop:"Classify"}},[a("el-radio-group",{model:{value:t.ruleForm.Classify,callback:function(e){t.$set(t.ruleForm,"Classify",e)},expression:"ruleForm.Classify"}},[a("el-radio",{attrs:{label:"自建"}}),a("el-radio",{attrs:{label:"物流"}}),a("el-radio",{attrs:{label:"快递"}})],1)],1),a("el-form-item",{attrs:{label:"是否启用:",prop:"Enable"}},[a("el-switch",{model:{value:t.ruleForm.Enable,callback:function(e){t.$set(t.ruleForm,"Enable",e)},expression:"ruleForm.Enable"}})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"is-blue-button",attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("保存")]),a("el-button",{on:{click:t.handleAreaDialogClose}},[t._v("取消")])],1)])],1)]),a("main",[a("ExpressManageListTableComp",{ref:"SortTable",attrs:{dataList:t.tableData,sorting:t.sorting},on:{exitSorting:t.setSortingClose}})],1),a("footer",[t.sorting?[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmitSortClick}},[t._v("保存")]),a("el-button",{staticClass:"cancel-blue-btn",on:{click:t.setSortingClose}},[t._v("取消")])]:[a("el-button",{staticClass:"cancel-blue-btn",on:{click:t.onSortBtnClick}},[t._v("排序")])]],2)])}),[],!1,null,null,null));e.default=c.exports},9310:function(t,e,a){},"9e7f":function(t,e,a){"use strict";var i=a("9310");a.n(i).a}}]);