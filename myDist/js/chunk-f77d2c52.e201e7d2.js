(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f77d2c52"],{"20da":function(t,e,s){"use strict";s.r(e);var i=(s("4de4"),s("7db0"),s("c740"),s("4160"),s("a434"),s("ac1f"),s("5319"),s("159b"),s("5530")),a=s("2f62"),n=s("6e84"),o=s("7775"),l={name:"ProductDataSavePage",data:function(){return{title:"",productData:null,hideClassTypes:[]}},components:{LRWidthDragAutoChangeComp:n.a},computed:Object(i.a)({},Object(a.e)("productManage",["curEditData"]),{},Object(a.e)("common",["ProductClassifyIDList"]),{},Object(a.c)("common",["twoLevelsMultipleProductClassifyList4Sort"])),methods:{getInitData:function(){if(this.curEditData){this.title="编辑产品";var t=this.curEditData,e=t.ID,s=t.Name,i=t.ShowName,a=t.IsSpacial,n=t.ClassifyList;this.productData={ID:e,Name:s,ShowName:i,IsSpacial:a,ClassifyList:JSON.parse(JSON.stringify(n))},this.hideClassTypes=[]}else this.curEditData?this.goback():(this.title="添加产品",this.productData={ID:"",Name:"",ShowName:"",IsSpacial:!1,ClassifyList:[]},this.hideClassTypes=[])},getClassifyTypeName:function(t){var e=this.ProductClassifyIDList.find((function(e){return e.Type===t}));return e?"".concat(e.Name,"分类"):""},getCheckValue:function(t,e,s){return!!(this.productData&&this.productData.ClassifyList&&Array.isArray(this.productData.ClassifyList)&&0!==this.productData.ClassifyList.length)&&!!this.productData.ClassifyList.find((function(i){return i.Type===t&&i.FirstLevel.ID===e&&i.SecondLevel.ID===s}))},onCheckBoxChange:function(t,e,s,i,a){if(this.productData){this.productData.ClassifyList&&Array.isArray(this.productData.ClassifyList)||(this.productData.ClassifyList=[]);var n=this.productData.ClassifyList.findIndex((function(i){return i.Type===t&&i.FirstLevel.ID===e&&i.SecondLevel.ID===s}));if(n>-1)this.productData.ClassifyList.splice(n,1);else{var o={Type:t,FirstLevel:{ID:e,Name:i},SecondLevel:{ID:s,Name:a}};this.productData.ClassifyList.push(o)}}},onHideClick:function(t){this.hideClassTypes.push(t)},onShowClick:function(t){this.hideClassTypes=this.hideClassTypes.filter((function(e){return e!==t}))},submit:function(){if(this.productData){var t=this.productData,e=t.Name,s=t.ShowName,i=t.ClassifyList;if(e)if(s)if(i&&0!==i.length){i.find((function(t){return 1===t.Type}))?o.f.test(e)&&o.f.test(s)?this.$store.dispatch("productManage/getProductBaseInfoSave",[this.productData,this.goback]):this.messageBox.failSingleError("保存失败","名称仅支持中文、英文(全角/半角)、+-_(全角/半角)、数字等"):this.messageBox.failSingleError("保存失败","应至少选择一个代客下单分类类别")}else this.messageBox.failSingleError("保存失败","请选择所属产品分类");else this.messageBox.failSingleError("保存失败","请输入显示名称");else this.messageBox.failSingleError("保存失败","请输入内部名称")}},goback:function(){this.$router.replace("/ProductManageList")}},mounted:function(){var t=this;this.getInitData(),this.ProductClassifyIDList.forEach((function(e){var s=e.ID;t.$store.dispatch("common/getProductClassifyData",{key:s})}))},activated:function(){}},c=(s("4b16"),s("2877")),r=Object(c.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.productData?s("section",{staticClass:"mp-erp-product-manage-module-product-save-page-wrap"},[s("header",[s("span",{staticClass:"mp-common-title-wrap"},[t._v(t._s(t.title))])]),s("LRWidthDragAutoChangeComp",{attrs:{leftWidth:"450px"},scopedSlots:t._u([{key:"left",fn:function(){return[s("ul",{staticClass:"left-content"},[s("li",[s("p",[t._v("内部名称：")]),s("el-input",{attrs:{size:"small",maxlength:"10","show-word-limit":""},model:{value:t.productData.Name,callback:function(e){t.$set(t.productData,"Name","string"==typeof e?e.trim():e)},expression:"productData.Name"}}),s("span",{staticClass:"tip"},[t._v("内部名称不能重复，仅内部可见")])],1),s("li",[s("p",[t._v("显示名称：")]),s("el-input",{attrs:{size:"small",maxlength:"10","show-word-limit":""},model:{value:t.productData.ShowName,callback:function(e){t.$set(t.productData,"ShowName","string"==typeof e?e.trim():e)},expression:"productData.ShowName"}}),s("span",{staticClass:"tip"},[t._v("显示名称可重复，用于下单界面展示")])],1),s("li",[s("p",[t._v("是否标准化产品：")]),s("el-checkbox",{model:{value:t.productData.IsSpacial,callback:function(e){t.$set(t.productData,"IsSpacial",e)},expression:"productData.IsSpacial"}},[t._v("非标准化产品")]),s("span",{staticClass:"tip"},[t._v("（ 非标准化产品允许修改价格，允许编写订单备注 ）")])],1)])]},proxy:!0},{key:"right",fn:function(){return[s("div",{staticClass:"right-content"},[s("p",[t._v("所属产品分类：")]),t._l(t.twoLevelsMultipleProductClassifyList4Sort,(function(e){return s("div",{key:"ProductSaveClassifyType"+e.ID},[s("p",[s("span",{staticClass:"title",attrs:{title:t.getClassifyTypeName(e.Type)}},[t._v(t._s(t.getClassifyTypeName(e.Type))+"：")]),t.hideClassTypes.includes(e.Type)?s("span",{staticClass:"hide-box",on:{click:function(s){return t.onShowClick(e.Type)}}},[t._v("展开 "),s("i",{staticClass:"el-icon-arrow-right"})]):s("span",{staticClass:"hide-box",on:{click:function(s){return t.onHideClick(e.Type)}}},[t._v("隐藏 "),s("i",{staticClass:"el-icon-arrow-up"})])]),s("ul",{directives:[{name:"show",rawName:"v-show",value:!t.hideClassTypes.includes(e.Type),expression:"!hideClassTypes.includes(it.Type)"}],staticClass:"classify-list-wrap"},t._l(e.List,(function(i){return s("li",{key:i.ClassName+"--"+i.ID},[s("span",{staticClass:"title sub",attrs:{title:i.ClassName}},[s("i",[t._v(t._s(i.ClassName))]),t._v("：")]),i.children&&i.children.length>0?s("div",t._l(i.children,(function(a){return s("el-checkbox",{key:a.ClassName+"--"+a.ID,attrs:{value:t.getCheckValue(e.Type,i.ID,a.ID)},on:{change:function(s){return t.onCheckBoxChange(e.Type,i.ID,a.ID,i.ClassName,a.ClassName)}}},[t._v(t._s(a.ClassName))])})),1):s("div",{staticClass:"none-lv2-box"},[t._v("空")])])})),0)])}))],2)]},proxy:!0}],null,!1,4066164338)}),s("footer",[s("el-button",{staticClass:"blue-full-color-btn-styles is-blue-button ",attrs:{type:"primary"},on:{click:t.submit}},[t._v("保存")]),s("el-button",{staticClass:"goback",on:{click:t.goback}},[s("i",{staticClass:"el-icon-d-arrow-left"}),t._v(" 返回")])],1)],1):t._e()}),[],!1,null,null,null);e.default=r.exports},"4b16":function(t,e,s){"use strict";var i=s("5eff");s.n(i).a},"5eff":function(t,e,s){},6173:function(t,e,s){"use strict";var i=s("e5ca");s.n(i).a},"6e84":function(t,e,s){"use strict";var i={props:{leftWidth:{type:String,default:"49%"},single:{type:Boolean,default:!1}},data:function(){return{leftW:"48%",offsetWidth:0,oLeft:null,moving:!1,distance:7,initPageX:0}},methods:{onLineDown:function(t){!this.oLeft&&this.$refs.oLeft&&(this.oLeft=this.$refs.oLeft),this.oLeft&&(this.offsetWidth=this.oLeft.offsetWidth,document.addEventListener("mousemove",this.onLineMove),document.addEventListener("mouseup",this.onLineUp),this.moving=!0,this.distance=t.offsetX,this.initPageX=t.pageX),t.preventDefault()},onLineMove:function(t){this.leftW="".concat(t.pageX-this.initPageX-this.distance+this.offsetWidth,"px")},onLineUp:function(){document.removeEventListener("mousemove",this.onLineMove),document.removeEventListener("mouseup",this.onLineUp),this.moving=!1}},created:function(){this.leftW=this.leftWidth}},a=(s("6173"),s("2877")),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{ref:"oWrap",staticClass:"mp-erp-common-comps-left-and-right-width-drap-auto-change-comp-wrap"},[s("div",{ref:"oLeft",staticClass:"left mp-scroll-wrap",style:"width:"+t.leftW},[t._t("left")],2),t.single?t._e():s("span",{staticClass:"vertical-line",class:t.moving?"moving":"",on:{mousedown:t.onLineDown}},[s("i")]),s("div",{staticClass:"right mp-scroll-wrap"},[t._t("right")],2)])}),[],!1,null,null,null);e.a=n.exports},e5ca:function(t,e,s){}}]);