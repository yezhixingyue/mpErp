(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ecc9be34"],{"047a":function(e,t,n){"use strict";var a=n("578e");n.n(a).a},"09f8":function(e,t,n){"use strict";var a={props:{title:{type:String,default:"关闭"},disabled:{type:Boolean,default:!1}}},i=(n("3f2b"),n("2877")),o=Object(i.a)(a,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"normal-full-btn",class:e.disabled?"is-disabled":"",attrs:{disabled:e.disabled}},[e._v(e._s(e.title))])}),[],!1,null,null,null);t.a=o.exports},"12c7":function(e,t,n){},"19f1":function(e,t,n){"use strict";n.r(t);var a=(n("ac1f"),n("5319"),n("96cf"),n("1da1")),i=n("5530"),o=n("09f8"),s=n("edeb"),l=(n("4de4"),n("7db0"),n("d81d"),n("64dc")),c=n("d06f"),r=(n("99af"),n("fb6a"),n("1276"),n("afbe")),u={props:{title:{type:String,default:"开始时间"},isDisabled:{default:!1,type:Boolean},DateValue:{type:String},handleFunc:{type:Function},isLineStyle:{default:!1,type:Boolean},showCheck:{default:!1,type:Boolean},StartNow:{default:!1,type:Boolean},setStartNowFunc:{type:Function}},data:function(){return{localTimeDisabled:!1}},computed:{firstTime:{get:function(){return this.DateValue?this.DateValue.split("T")[0]:""},set:function(e){if(this.handleFunc){var t;t=this.DateValue?"".concat(e,"T").concat(this.DateValue.split("T")[1]):"".concat(e,"T00:00:00.000Z"),this.handleFunc(t)}}},secondTime:{get:function(){return this.DateValue?this.DateValue.split("T")[1].split(".")[0].substring(0,5):""},set:function(e){if(this.handleFunc){var t=this.DateValue.split("T")[0],n="00.000Z";"结束时间"===this.title&&(n="59.997Z");var a="".concat(t,"T").concat(e,":").concat(n);this.handleFunc(a)}}},isStartNow:{get:function(){return this.StartNow},set:function(e){if(this.localTimeDisabled=e,this.setStartNowFunc(e),e){var t=Object(r.a)(new Date),n="0".concat((new Date).getHours()).slice(-2),a="0".concat((new Date).getMinutes()).slice(-2),i="0".concat((new Date).getSeconds()).slice(-2),o="".concat(t,"T").concat(n,":").concat(a,":").concat(i,".000Z");this.handleFunc(o)}}}}},d=(n("6347"),n("2877")),p=Object(d.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mp-common-comps-disconnect-type-date-picker-wrap",class:e.isLineStyle?"isLineStyle":""},[n("span",[e._v(e._s(e.title)+"：")]),n("el-date-picker",{staticClass:"comp-date",attrs:{clearable:!1,format:"yyyy-MM-dd",disabled:e.isDisabled||e.localTimeDisabled,"value-format":"yyyy-MM-dd",type:"date",placeholder:"年 / 月 / 日"},model:{value:e.firstTime,callback:function(t){e.firstTime=t},expression:"firstTime"}}),n("el-time-picker",{staticClass:"comp-time",attrs:{disabled:e.isDisabled||e.localTimeDisabled,"default-time":"00:00","value-format":"HH:mm","picker-options":{format:"HH:mm"},format:"HH:mm",clearable:!1},model:{value:e.secondTime,callback:function(t){e.secondTime=t},expression:"secondTime"}}),e.showCheck?n("span",{staticClass:"check-box"},[n("el-checkbox",{attrs:{disabled:e.isDisabled},model:{value:e.isStartNow,callback:function(t){e.isStartNow=t},expression:"isStartNow"}},[n("em",[e._v("立即生效")])])],1):e._e()],1)}),[],!1,null,null,null).exports,f=n("b1b8"),h=n("2f62"),m={components:{SingleBottomLineInputComp:c.a,DisconnectTypeDatePickerComp:p,StaffSelector:f.a,TreeComp:l.a},computed:Object(i.a)({},Object(h.c)("common",["allProductClassify"]),{},Object(h.e)("couponStore",["condition2CouponSave","addPageCurStaff"]),{watchValue4Tree:function(){return this.watchValue},defaultCheckedKeys:function(){return this.condition2CouponSave.ProductList.map((function(e){return e.ProductID}))},couponAmount:{get:function(){return this.condition2CouponSave.Data.Amount},set:function(e){this.setCondition2CouponSave([["Data","Amount"],e])}},minPayAmount:{get:function(){return this.condition2CouponSave.Data.MinPayAmount},set:function(e){this.setCondition2CouponSave([["Data","MinPayAmount"],e])}},totalNumber:{get:function(){return this.condition2CouponSave.Data.TotalNumber},set:function(e){this.setCondition2CouponSave([["Data","TotalNumber"],e])}}}),methods:Object(i.a)({},Object(h.d)("couponStore",["setCondition2CouponSave"]),{},Object(h.b)("common",["getProductList","getAllProductNames"]),{handleChangeFunc:function(e){var t=e.filter((function(e){return e.ShowName})).map((function(e){var t=e.ClassifyList.find((function(e){return 1===e.Type}));return t?{FirstLevelID:t.FirstLevel.ID,SecondLevelID:t.SecondLevel.ID,ProductID:e.ID,ProductName:e.Name}:null})).filter((function(e){return e}));this.setCondition2CouponSave([["ProductList",""],t])}}),mounted:function(){this.getProductList(),this.getAllProductNames()}},C=(n("8c1e"),Object(d.a)(m,(function(){var e=this,t=this,n=t.$createElement,a=t._self._c||n;return a("section",{staticClass:"mp-coupon-add-page-left-comp-wrap"},[a("header",[a("single-bottom-line-input-comp",{model:{value:t.couponAmount,callback:function(e){t.couponAmount=e},expression:"couponAmount"}}),t._v(" "),a("single-bottom-line-input-comp",{attrs:{title:"满多少可用"},model:{value:t.minPayAmount,callback:function(e){t.minPayAmount=e},expression:"minPayAmount"}}),a("single-bottom-line-input-comp",{attrs:{title:"发放数量",remark:"张"},model:{value:t.totalNumber,callback:function(e){t.totalNumber=e},expression:"totalNumber"}})],1),a("div",{staticClass:"content"},[a("disconnect-type-date-picker-comp",{attrs:{isLineStyle:"",title:"开始领取时间",DateValue:t.condition2CouponSave.ProvideStartTime,handleFunc:function(t){return e.setCondition2CouponSave([["ProvideStartTime",""],t])},showCheck:"",StartNow:t.condition2CouponSave.ProvideNow,setStartNowFunc:function(t){return e.setCondition2CouponSave([["ProvideNow",""],t])}}}),a("disconnect-type-date-picker-comp",{attrs:{isLineStyle:"",title:"结束领取时间",DateValue:t.condition2CouponSave.ProvideEndTime,handleFunc:function(t){return e.setCondition2CouponSave([["ProvideEndTime",""],t])}}}),a("disconnect-type-date-picker-comp",{attrs:{isLineStyle:"",title:"有效期开始",DateValue:t.condition2CouponSave.ValidStartTime,handleFunc:function(t){return e.setCondition2CouponSave([["ValidStartTime",""],t])},showCheck:"",StartNow:t.condition2CouponSave.StartNow,setStartNowFunc:function(t){return e.setCondition2CouponSave([["StartNow",""],t])}}}),a("disconnect-type-date-picker-comp",{attrs:{isLineStyle:"",title:"有效期结束",DateValue:t.condition2CouponSave.ValidEndTime,handleFunc:function(t){return e.setCondition2CouponSave([["ValidEndTime",""],t])}}}),a("staff-selector",{attrs:{isLineStyle:"",changePropsFunc:t.setCondition2CouponSave,typeList:[["ApplyUser","StaffID"]],watchValue:t.addPageCurStaff,value:t.condition2CouponSave.ApplyUser.StaffID,title:"申请人"}})],1),a("footer",[a("tree-comp",{attrs:{title:"选择产品",isProduct:"",treeList:t.allProductClassify,defaultCheckedKeys:t.defaultCheckedKeys,handleChangeFunc:t.handleChangeFunc,checkAllTitle:"所有产品"}})],1)])}),[],!1,null,null,null)).exports,y={components:{CheckboxGroupComp:n("2e4d").a,TreeComp:l.a},computed:Object(i.a)({},Object(h.e)("couponStore",["condition2CouponSave"]),{},Object(h.e)("common",["orderCreateTypeList","userTypeList","userRankList"]),{},Object(h.c)("common",["allAreaTreeList"]),{orderTypeList:function(){return this.orderCreateTypeList?this.orderCreateTypeList.filter((function(e){return!!e.ID})):[]},filterUserTypeList:function(){return this.userTypeList?this.userTypeList.filter((function(e){return e.CategoryID})):[]},filterUserRankList:function(){return this.userRankList?this.userRankList.filter((function(e){return!!e.CategoryID})):[]},selectOrderTypeList:function(){return this.condition2CouponSave.OrderTypeList},selectUserTypeList:function(){return this.condition2CouponSave.CustomerTypeList.map((function(e){return{CategoryID:e.ID}}))},selectUserRankList:function(){return this.condition2CouponSave.CustomerGradeList.map((function(e){return{CategoryID:e.ID}}))},defaultCheckedKeys:function(){return this.condition2CouponSave.SellAreaArray.map((function(e){return e.CountyID}))}}),methods:Object(i.a)({},Object(h.d)("couponStore",["setCondition2CouponSave"]),{},Object(h.b)("common",["getUserClassify","getAreaList"]),{onOrderTypeListChange:function(e){this.setCondition2CouponSave([["OrderTypeList",""],e])},onUserTypeListChange:function(e){var t=e.map((function(e){return{ID:e.CategoryID}}));this.setCondition2CouponSave([["CustomerTypeList",""],t])},onUserRankListChange:function(e){var t=e.map((function(e){return{ID:e.CategoryID}}));this.setCondition2CouponSave([["CustomerGradeList",""],t])},handleChangeFunc:function(e){var t=e.filter((function(e){return 3===e.Level})).map((function(e){return{CountyID:e.ID}}));this.setCondition2CouponSave([["SellAreaArray",""],t])}}),mounted:function(){this.getUserClassify(),this.getAreaList()}},b=(n("4434"),Object(d.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"mp-coupon-add-page-right-comp-wrap"},[n("checkbox-group-comp",{attrs:{itemList:e.orderTypeList,selectList:e.selectOrderTypeList,defaultProps:{label:"name",value:"ID"}},on:{change:e.onOrderTypeListChange}}),n("checkbox-group-comp",{attrs:{title:"客户类型",itemList:e.filterUserTypeList,selectList:e.selectUserTypeList},on:{change:e.onUserTypeListChange}}),n("checkbox-group-comp",{attrs:{title:"客户等级",itemList:e.filterUserRankList,selectList:e.selectUserRankList},on:{change:e.onUserRankListChange}}),n("tree-comp",{attrs:{title:"销售区域",treeList:e.allAreaTreeList,defaultCheckedKeys:e.defaultCheckedKeys,handleChangeFunc:e.handleChangeFunc,checkAllTitle:"所有地区"}})],1)}),[],!1,null,null,null)).exports,v={name:"CouponAddPage",components:{normalBtn:s.a,normalBtnFull:o.a,CouponAddPageLeftComp:C,CouponAddPageRightComp:b},data:function(){return{pageTitle:"添加优惠券"}},computed:Object(i.a)({},Object(h.e)("common",["Permission"])),methods:Object(i.a)({},Object(h.b)("couponStore",["submitOrEditCoupon"]),{onSubmitClick:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.submitOrEditCoupon();case 2:t.sent&&(n=e.$route.params.type,a="add"===n?"添加成功":"edit"===n?"修改成功":"",e.messageBox.successSingle(a,(function(){e.onReturnClick(),e.$store.dispatch("couponStore/getCouponList")})));case 4:case"end":return t.stop()}}),t)})))()},onReturnClick:function(){this.$store.commit("couponStore/clearCondition2CouponSave"),this.$router.replace("/couponList")}}),mounted:function(){var e=this.$route.params.type,t=this.$store.state.couponStore.condition2CouponSave.CouponID;"edit"!==e||t?("add"===e&&(this.pageTitle="添加优惠券"),"edit"===e&&(this.pageTitle="编辑优惠券")):this.onReturnClick()}},g=(n("8d12"),Object(d.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mp-coupon-add-page-wrap"},[n("header",[n("span",{staticClass:"mp-common-title-wrap"},[e._v(e._s(e.pageTitle))])]),n("div",{staticClass:"content"},[n("div",{staticClass:"left"},[n("coupon-add-page-left-comp",{staticClass:"mp-scroll-wrap"})],1),n("div",{staticClass:"right"},[n("coupon-add-page-right-comp",{staticClass:"mp-scroll-wrap"})],1)]),n("footer",[e.Permission.PermissionList.PermissionCoupon.Obj.Setup?n("normal-btn-full",{attrs:{title:"保存"},nativeOn:{click:function(t){return e.onSubmitClick(t)}}}):e._e(),n("normal-btn",{attrs:{title:"返回"},nativeOn:{click:function(t){return e.onReturnClick(t)}}})],1)])}),[],!1,null,null,null));t.default=g.exports},"1d08":function(e,t,n){"use strict";var a=n("56c7");n.n(a).a},"24de":function(e,t,n){},"2e4d":function(e,t,n){"use strict";var a=(n("4de4"),n("7db0"),n("d81d"),n("ade3")),i={model:{prop:"selectList",event:"change"},props:{title:{type:String,default:"下单渠道"},itemList:{type:Array,default:function(){return[]}},selectList:{type:Array,default:function(){return[]}},defaultProps:{type:Object,default:function(){return{label:"CategoryName",value:"CategoryID"}}},isDisabled:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!0},useLabel:{type:Boolean,default:!0}},computed:{checkList:{get:function(){var e=this;return this.selectList.map((function(t){var n=e.itemList.find((function(n){return n[e.defaultProps.value]===t[e.defaultProps.value]}));return n?e.useLabel?n[e.defaultProps.label]:n[e.defaultProps.value]:null})).filter((function(e){return!!e}))},set:function(e){var t=this,n=e.map((function(e){return t.itemList.find((function(n){return n[t.useLabel?t.defaultProps.label:t.defaultProps.value]===e}))}));n=n.map((function(e){return Object(a.a)({},t.defaultProps.value,e[t.defaultProps.value])})),this.$emit("change",n)}}}},o=(n("9ffe"),n("2877")),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mp-common-comps-checkbox-group-comp-wrap"},[e.showTitle?n("span",[e._v(e._s(e.title)+"：")]):e._e(),n("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.itemList,(function(t,a){return n("el-checkbox",{key:t[e.defaultProps.value]+"-"+t[e.defaultProps.label]+a,attrs:{label:e.useLabel?t[e.defaultProps.label]:t[e.defaultProps.value],disabled:e.isDisabled}},[n("el-tooltip",{attrs:{"popper-class":"checkbox-tip","visible-arrow":!1,transition:"none",content:t[e.defaultProps.label],placement:"bottom",enterable:!1}},[n("span",[e._v(e._s(t[e.defaultProps.label]))])])],1)})),1)],1)}),[],!1,null,null,null);t.a=s.exports},"3f2b":function(e,t,n){"use strict";var a=n("436f");n.n(a).a},"436f":function(e,t,n){},4434:function(e,t,n){"use strict";var a=n("49d1");n.n(a).a},"49d1":function(e,t,n){},"56c7":function(e,t,n){},"578e":function(e,t,n){},6347:function(e,t,n){"use strict";var a=n("9bb0");n.n(a).a},"64dc":function(e,t,n){"use strict";var a=(n("4160"),n("caad"),n("2532"),n("159b"),n("2909")),i={props:{title:{type:String,default:"销售区域"},treeList:{type:Array,default:function(){return[]}},defaultProps:{type:Object,default:function(){return{children:"children",label:"ClassName"}}},defaultNodeKey:{type:String,default:"ID"},defaultCheckedKeys:{type:Array,default:function(){return[]}},handleChangeFunc:{type:Function,default:function(){}},watchValue:{},shouldDisabledList:{type:Array,default:function(){return[]}},showDisabled:{type:Boolean,default:!1},checkAllTitle:{type:String,default:"所有地区"},isDisabled:{type:Boolean,default:!1},isProduct:{type:Boolean,default:!1}},computed:{defaultExpandedKeys:function(){if(0===this.treeList.length||!this.treeList)return[];var e=[];return this.treeList.forEach((function(t){t.children.forEach((function(t){e.push(t.ID)}))})),e},treeListHasDisabled:function(){var e=this,t=JSON.parse(JSON.stringify(Object(a.a)(this.treeList))),n=this.watchValue;return t.forEach((function(t){var a=0;t.children.forEach((function(i){var o=0;i.children.forEach((function(a){e.shouldDisabledList.includes(a[e.defaultNodeKey])&&(Array.isArray(n)&&n.includes(a[e.defaultNodeKey])?(a.disabled=!1,i.disabled&&(i.disabled=!1),t.disabled&&(t.disabled=!1),e.localDisabled2CheckAll=!1):(a.disabled=!0,o+=1))})),i.children.length===o&&(i.disabled=!0,a+=1)})),t.children.length===a&&(t.disabled=!0)})),t},treeData:function(){return this.showDisabled?this.treeListHasDisabled:this.treeList},checkAllIndeterminate:function(){return this.defaultCheckedKeys.length>0&&this.defaultCheckedKeys.length<this.threeLevelKeys.length},AllKeys:function(){var e=[];return this.treeData.forEach((function(t){e.push(t.ID),t.children.forEach((function(t){e.push(t.ID),t.children.forEach((function(t){e.push(t.ID)}))}))})),e},threeLevelKeys:function(){var e=[];return this.treeData.forEach((function(t){t.children.forEach((function(t){t.children.forEach((function(t){e.push(t.ID)}))}))})),e},isCheckAllDisabled:function(){var e=[];return this.treeData.forEach((function(t){t.children.forEach((function(t){t.children.forEach((function(t){e.push(t.ID)}))}))})),(this.isDisabled||e.length===this.shouldDisabledList.length)&&this.localDisabled2CheckAll},checkAllComputed:{get:function(){return this.defaultCheckedKeys.length===this.threeLevelKeys.length},set:function(e){!e&&this.canFalse?this.checkAll=!1:this.checkAllIndeterminate?(this.checkAll=!1,this.canFalse=!1):(this.checkAll=!0,this.canFalse=!0)}}},methods:{check:function(e,t){var n=t.checkedNodes,a=t.checkedKeys;this.handleChangeFunc(n,a),this.setCheckAllListAndStatus(a)},renderContent:function(e,t){var n=this,a=t.node,i=t.data;if(a.level>1)return a.label.length>5?e("el-tooltip",{class:"el-tree-node__label",attrs:{effect:"dark",content:a.label,placement:"top-start"}},[e("span",[a.label])]):e("span",{class:"el-tree-node__label"},[a.label]);var o=a.expanded?"收起":"展开",s=a.expanded?"close el-icon-caret-bottom":"el-icon-caret-bottom";return e("span",{class:"el-tree-node__label"},[e("span",{class:"title"},[a.label]),e("em",{class:"mp-el-tree-node-collapse-btn",on:{click:function(e){return n.expandLevel1(a,i,o,e)}}},[o]),e("span",{class:"icon-box",on:{click:function(e){return e.stopPropagation()}}},[e("em",{on:{click:function(e){return n.expandLevel1(a,i,o,e)}}},[e("i",{class:s})])])])},expandLevel1:function(e,t,n,a){a.stopPropagation(),e.expanded=!e.expanded},handleCheckAllChange:function(){if(this.checkAll){this.$refs.treeComp.setCheckedNodes(this.treeData),this.selectKeys=this.AllKeys;var e=this.$refs.treeComp.getCheckedNodes(),t=this.$refs.treeComp.getCheckedKeys();this.handleChangeFunc(e,t)}else this.$refs.treeComp.setCheckedKeys([]),this.selectKeys=[],this.handleChangeFunc([],[])},setCheckAllListAndStatus:function(e){this.selectKeys=e,this.selectKeys.length===this.AllKeys.length?this.checkAll=!0:!0===this.checkAll&&(this.checkAll=!1)},clearTreeData:function(){this.$refs.treeComp.setCheckedKeys([]),this.selectKeys=[]}},data:function(){return{checkAll:!1,selectKeys:[],localDisabled2CheckAll:!0,canFalse:!0}},watch:{watchValue:{handler:function(e){var t=this;this.localDisabled2CheckAll=!0,this.$nextTick((function(){if("number"==typeof e)t.$refs.treeComp.setCheckedKeys([]),t.selectKeys=[],t.checkAll=!1;else if(Array.isArray(e)){t.$refs.treeComp.setCheckedKeys(e);var n=t.$refs.treeComp.getCheckedKeys();t.setCheckAllListAndStatus(n);var a=t.$refs.treeComp.getCheckedNodes();t.handleChangeFunc(a,n)}}))},immediate:!0},defaultCheckedKeys:function(e){e&&Array.isArray(e)&&0===e.length&&this.selectKeys.length>0?(this.$refs.treeComp.setCheckedKeys([]),this.selectKeys=[],this.checkAll=!1):!this.watchValue&&e&&Array.isArray(e)&&e.length>0&&e.length!==this.selectKeys.length&&(this.$refs.treeComp.setCheckedKeys(e),this.selectKeys=e)}}},o=(n("047a"),n("2877")),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"mp-common-comps-tree-comp-wrap",class:e.isProduct?"isProduct":""},[n("header",[e._v(" "+e._s(e.title)),e.title?n("span",[e._v("：")]):e._e()]),n("div",{staticClass:"content mp-scroll-wrap"},[n("el-checkbox",{attrs:{disabled:e.isCheckAllDisabled,indeterminate:e.checkAllIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAllComputed,callback:function(t){e.checkAllComputed=t},expression:"checkAllComputed"}},[e._v(" "+e._s(e.checkAllTitle)+" ")]),n("el-tree",{ref:"treeComp",staticClass:"mp-scroll-wrap",attrs:{data:e.treeData,"show-checkbox":"","icon-class":"","node-key":e.defaultNodeKey,"default-expanded-keys":e.defaultExpandedKeys,"default-checked-keys":e.defaultCheckedKeys,props:e.defaultProps,"auto-expand-parent":!1,"expand-on-click-node":!1,"check-on-click-node":!0,"render-content":e.renderContent},on:{check:e.check}})],1)])}),[],!1,null,null,null);t.a=s.exports},8994:function(e,t,n){},"8c1e":function(e,t,n){"use strict";var a=n("12c7");n.n(a).a},"8d12":function(e,t,n){"use strict";var a=n("de99");n.n(a).a},9899:function(e,t,n){"use strict";var a=n("8994");n.n(a).a},"9bb0":function(e,t,n){},"9ffe":function(e,t,n){"use strict";var a=n("e548");n.n(a).a},b1b8:function(e,t,n){"use strict";var a=(n("498a"),n("96cf"),n("1da1")),i=n("5530"),o=n("2f62"),s=(n("99af"),n("ade3")),l=n("2909"),c={props:{value:{default:"不限"},defaultProps:{type:Object,default:function(){return{label:"label",value:"value"}}},mini:{type:Boolean,default:!1},requestListFunc:{type:Function,default:function(){},required:!0},placeholder:{type:String,default:"请输入姓名"},watchValue:{},isDisabled:{type:Boolean,default:!1},needlimit:{type:Boolean,default:!1},remote:{type:Boolean,default:!0},staffList:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,options:[],key:2021}},computed:{watchValue1:function(){return this.watchValue},optionList:function(){return this.remote?this.options:this.staffList}},watch:{watchValue1:{handler:function(e){e&&(this.options=[e],this.key+=1)}}},methods:{onChange:function(e){this.$emit("handleChange",e)},onClearClick:function(){this.$emit("handleChange","")},remoteMethod:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:""!==e?(t.loading=!0,t.requestListFunc(e).then((function(e){var n;t.loading=!1,1e3===e.data.Status&&(t.needlimit?t.options=[(n={},Object(s.a)(n,t.defaultProps.label,"不限"),Object(s.a)(n,t.defaultProps.value,""),n)].concat(Object(l.a)(e.data.Data)):t.options=e.data.Data)})).catch((function(){t.loading=!1}))):t.options=[];case 1:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.watchValue1&&(this.options=[this.watchValue1])}},r=(n("9899"),n("2877")),u=Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mp-common-remote-select-comp-wrapper"},[n("el-select",{key:e.key,staticClass:"mp-common-remote-select-comp-wrap",class:e.mini?"font-12":"",attrs:{value:e.value,filterable:"",clearable:"",remote:e.remote,disabled:e.isDisabled,placeholder:e.placeholder,"remote-method":e.remoteMethod,loading:e.loading},on:{change:e.onChange}},e._l(e.optionList,(function(t){return n("el-option",{key:t.value,attrs:{label:t[e.defaultProps.label],value:t[e.defaultProps.value]}})})),1),n("i",{directives:[{name:"show",rawName:"v-show",value:""!==e.value&&!e.isDisabled,expression:"value !== '' && !isDisabled"}],staticClass:"el-icon-error",on:{click:e.onClearClick}})],1)}),[],!1,null,null,null).exports,d={props:{title:{type:String,default:"申请人"},changePropsFunc:{type:Function,default:function(){}},typeList:{type:Array,default:function(){return[]}},value:{default:""},requestFunc:{type:Function,default:function(){}},watchValue:{},isDisabled:{type:Boolean,default:!1},needlimit:{type:Boolean,default:!1},isLineStyle:{default:!1,type:Boolean},showArrow:{default:!1,type:Boolean},remote:{type:Boolean,default:!0}},components:{RemoteSelectComp:u},data:function(){return{defaultProps:{label:"StaffName",value:"StaffID"}}},computed:Object(i.a)({},Object(o.e)("common",["staffList"])),methods:{handleChange:function(e){this.changePropsFunc([this.typeList[0],e]),this.requestFunc&&this.requestFunc()},requestListFunc:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.api.getStaffList({FieldType:1,Page:1,PageSize:20,KeyWords:e.trim()});case 2:return a=n.sent,n.abrupt("return",a);case 4:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.remote||this.$store.dispatch("common/getStaffList")}},p=(n("e9dd"),Object(r.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"mp-common-comps-staff-selector-wrap",class:e.isLineStyle?"isLineStyle":""},[n("header",[e._v(e._s(e.title)+"：")]),n("main",[n("remote-select-comp",{class:e.showArrow?"mp-common-select-comp-wrap":"",attrs:{mini:"",value:e.value,isDisabled:e.isDisabled,defaultProps:e.defaultProps,requestListFunc:e.requestListFunc,watchValue:e.watchValue,remote:e.remote,needlimit:e.needlimit,staffList:e.staffList},on:{handleChange:e.handleChange}})],1)])}),[],!1,null,null,null));t.a=p.exports},d06f:function(e,t,n){"use strict";var a={props:{title:{type:String,default:"金额"},remark:{type:String,default:"元"},value:{},isNum:{type:Boolean,default:!1}},model:{prop:"value",event:"change"},computed:{inpVal:{get:function(){return this.value},set:function(e){var t=e;this.isNum&&(t=this.$utils.filterNumber(t)),this.$emit("change",t)}}}},i=(n("1d08"),n("2877")),o=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mp-common-comp-single-bottom-line-input-wrap"},[n("span",{staticClass:"title"},[e._v(e._s(e.title)+"：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inpVal,expression:"inpVal"}],attrs:{type:"text"},domProps:{value:e.inpVal},on:{input:function(t){t.target.composing||(e.inpVal=t.target.value)}}}),n("span",{staticClass:"remark is-gray"},[e._v(e._s(e.remark))])])}),[],!1,null,null,null);t.a=o.exports},de99:function(e,t,n){},e548:function(e,t,n){},e668:function(e,t,n){"use strict";var a=n("24de");n.n(a).a},e852:function(e,t,n){},e9dd:function(e,t,n){"use strict";var a=n("e852");n.n(a).a},edeb:function(e,t,n){"use strict";var a={props:{title:{type:String,default:"关闭"}}},i=(n("e668"),n("2877")),o=Object(i.a)(a,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"normal-btn"},[e._v(e._s(e.title))])}),[],!1,null,null,null);t.a=o.exports}}]);