(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6503b0c1"],{"06c2":function(t,e,a){"use strict";var n=a("b635");a.n(n).a},"0c43":function(t,e,a){},"228f":function(t,e,a){},"28e5":function(t,e,a){"use strict";var n=a("0c43");a.n(n).a},"29b6":function(t,e,a){"use strict";var n=a("c090");a.n(n).a},"537e":function(t,e,a){"use strict";var n=a("fb9e");a.n(n).a},"791f":function(t,e,a){"use strict";var n=a("228f");a.n(n).a},"7bde":function(t,e,a){"use strict";var n=a("db43");a.n(n).a},"7f5a":function(t,e,a){"use strict";a.r(e);var n=(a("7db0"),a("b0c0"),a("ac1f"),a("5319"),a("96cf"),a("1da1")),i=a("5530"),l=a("2f62"),s=a("7775"),o={props:{visible:{type:Boolean,default:!1}},data:function(){return{explain1:{value1:0,options1:[{label:"铜版纸白色",value:0},{label:"铜版纸黑色",value:1},{label:"双胶纸白色",value:2},{label:"双胶纸黑色",value:3}],value2:0,options2:[{label:"157克",value:0},{label:"200克",value:1}]},explain2:{value1:0,options1:[{label:"铜版纸",value:0},{label:"双胶纸",value:1}],value2:0,options2:[{label:"157克",value:0},{label:"200克",value:1}],value3:0,options3:[{label:"白色",value:0},{label:"黑色",value:1}]},explain3:{value1:0,options1:[{label:"铜版纸白色157克",value:0},{label:"铜版纸黑色157克",value:1},{label:"双胶纸白色157克",value:2},{label:"双胶纸白色157克",value:3},{label:"铜版纸白色200克",value:4},{label:"铜版纸黑色200克",value:5},{label:"双胶纸白色200克",value:6},{label:"双胶纸白色200克",value:7}]}}},methods:{handleClose:function(){this.$emit("update:visible",!1)}}},r=(a("537e"),a("2877")),u=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-drawer",{staticClass:"mp-erp-product-module-file-name-page-explain-drawer-comp-wrap",attrs:{visible:t.visible,"show-close":!1,"before-close":t.handleClose},on:{"update:visible":function(e){t.visible=e}}},[a("span",{staticClass:"explain-title",attrs:{slot:"title"},on:{click:t.handleClose},slot:"title"},[a("i",{staticClass:"el-icon-arrow-right"}),t._v(" 说明")]),a("ul",[a("li",[a("span",{staticClass:"title"},[t._v("分隔符： ")]),a("p",[t._v("允许多个符号，每个符号只能是单个半角或全角字符，各符号间不要留空格，空格本身也可以作为分隔符。例如：,'| /")])]),a("li",[a("span",{staticClass:"title"},[t._v("开始结束符号： ")]),a("p",[a("span",[t._v("必须成对设置，每个符号只能是单个半角或全角字符，两个符号成为一对，但不能是相同的符号，可以设置多对符号，每一对符号间使用空格分开，空格不可以作为开始结束符号。")]),a("span",{staticClass:"is-pink"},[t._v("注意：部件和元素组不能设置相同的起始符号。 ")]),a("span",[t._v("例如：【】 {} [] 《》 < > () （）")])])]),a("li",[a("span",{staticClass:"title"},[t._v("隐藏名称：")]),a("p",[a("span",{staticClass:"block"},[t._v("指允许文件名不体现产品、部件、元素、元素组名称。允许隐藏，但不是必须隐藏，所以通假字还是可以用作解析名称。")]),a("span",{staticClass:"block"},[a("i",{staticClass:"is-bold"},[t._v("注意：")]),t._v("当需要进行文件名解析时，单部件产品可以隐藏部件名称，多部件产品不能隐藏，否则会解析不成功。")]),a("span",{staticClass:"block is-pink"},[t._v("隐藏产品名称时，在下单面板需要先选中产品，后进行解析，批量下单面板操作相同。")])])]),a("li",[a("span",{staticClass:"title"},[t._v("通假字：")]),a("p",[a("span",[t._v("通假字以空格分开，可以是英文、汉字、词。如果隐藏元素名称，数值元素只能依靠单位为判断属于哪个元素，所以同部件数值元素的单位不能相同。例如：盒 合 He")]),a("i",{staticStyle:{"margin-left":"30px"}},[t._v("单面 单面印 单")])])]),a("li",[a("span",{staticClass:"title"},[t._v("尺寸连接符：")]),a("p",[a("span",[t._v("指各尺寸维度间的连接符号。允许多个符号，每个符号只能是单个半角或全角字符，各符号间不要留空格，")]),a("span",{staticClass:"is-pink"},[t._v("空格本身不能作为连接符。")]),a("span",{staticClass:"block"},[t._v("例如：+x")])])]),a("li",[a("span",{staticClass:"title"},[t._v("文件名解析：")]),a("p",[t._v("指可通过拖动文件到下单面板，解析文件名数据填充下单面板。")])]),a("li",[a("span",{staticClass:"title"},[t._v("批量上传：")]),a("p",[t._v("指通过批量下单面板进行多文件批量下单，自动验证合法证，自动计算价格。")])])])])}),[],!1,null,null,null).exports,c={model:{prop:"value",event:"change"},props:{type:{type:String,default:"Name"},value:{type:Object,default:null},optionTitle:{type:String,default:""}},computed:Object(i.a)({},Object(l.e)("productManage",["FileNameEnumList"]),{title:function(){if(this.optionTitle)return this.optionTitle;var t="";switch(this.type){case"Name":t="名称通假字";break;case"Unit":t="单位通假字"}return t},AllowNameHidden:{get:function(){return!!this.value&&this.value.AllowNameHidden},set:function(t){var e=t,a=this.value?Object(i.a)({},this.value,{AllowNameHidden:e}):{AllowNameHidden:e};this.$emit("change",a)}},InpVal:{get:function(){return this.value?this.value[this.type]:""},set:function(t){if(s.a.test(t)){var e=this.value?Object(i.a)({},this.value):{};e[this.type]=t,this.$emit("change",e)}}}}),mounted:function(){"SizeUnitPosition"===this.type&&(this.InpVal||0===this.InpVal||(this.InpVal=this.FileNameEnumList[0].ID))}},p=(a("06c2"),Object(r.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mp-erp-product-module-filename-item-content-show-single-element-item-comp-wrap"},[a("div",{staticClass:"name"},[a("span",{attrs:{title:t.title}},[t._v(t._s(t.title)+"：")]),"名称通假字"===t.title?a("el-checkbox",{model:{value:t.AllowNameHidden,callback:function(e){t.AllowNameHidden=e},expression:"AllowNameHidden"}},[t._v("允许隐藏名称")]):t._e()],1),"SizeUnitPosition"!==t.type?a("el-input",{attrs:{size:"mini",maxlength:"50"},model:{value:t.InpVal,callback:function(e){t.InpVal=e},expression:"InpVal"}}):a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:t.InpVal,callback:function(e){t.InpVal=e},expression:"InpVal"}},t._l(t.FileNameEnumList,(function(t){return a("el-option",{key:t.ID,attrs:{label:t.Name,value:t.ID}})})),1)],1)}),[],!1,null,null,null)).exports,m={props:{ElementData:{type:Object,default:null},isSizeGroup:{type:Boolean,default:!1}},components:{SingleElementItem:p},computed:{ElementDataFalseWords:{get:function(){return this.ElementData.FalseWords},set:function(t){this.$emit("change",{ElementID:this.ElementData.ID,FalseWords:t})}}},methods:{onElementOptionChange:function(t,e){this.$emit("change",{ElementID:this.ElementData.ID,FalseWords:t,OptionID:e})}}},h=(a("791f"),Object(r.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ElementData?a("section",{staticClass:"mp-erp-product-module-filename-item-content-show-single-element-comp-wrap"},[a("header",[a("span",{staticClass:"title",attrs:{title:t.ElementData.Name+(t.ElementData.Unit?"单位（"+t.ElementData.Unit+"）":"")}},[t._v(t._s(t.ElementData.Name)),t.ElementData.Unit?a("i",[t._v("：")]):t._e()]),t.ElementData.Unit?a("span",{staticClass:"unit",attrs:{title:t.ElementData.Name+(t.ElementData.Unit?"单位（"+t.ElementData.Unit+"）":"")}},[t._v("单位（"+t._s(t.ElementData.Unit)+"）")]):t._e()]),a("main",[a("SingleElementItem",{key:"every",model:{value:t.ElementDataFalseWords,callback:function(e){t.ElementDataFalseWords=e},expression:"ElementDataFalseWords"}}),t.ElementData.Unit&&1===t.ElementData.Type?a("SingleElementItem",{key:"number-unit",attrs:{type:"Unit"},model:{value:t.ElementDataFalseWords,callback:function(e){t.ElementDataFalseWords=e},expression:"ElementDataFalseWords"}}):t._e(),t.ElementData.Type&&2===t.ElementData.Type&&t.ElementData.OptionAttribute.OptionList?t._l(t.ElementData.OptionAttribute.OptionList,(function(e){return a("SingleElementItem",{key:e.ID,attrs:{optionTitle:"选项通假字("+e.Name+")",value:e.FalseWords},on:{change:function(a){return t.onElementOptionChange(a,e.ID)}}})})):t._e(),t.isSizeGroup?[a("SingleElementItem",{key:"size-join",attrs:{type:"SizeJoin",optionTitle:"尺寸连接符"},model:{value:t.ElementDataFalseWords,callback:function(e){t.ElementDataFalseWords=e},expression:"ElementDataFalseWords"}}),a("SingleElementItem",{key:"size-unit-position",attrs:{type:"SizeUnitPosition",optionTitle:"单位显示"},model:{value:t.ElementDataFalseWords,callback:function(e){t.ElementDataFalseWords=e},expression:"ElementDataFalseWords"}})]:t._e()],2)]):t._e()}),[],!1,null,null,null)).exports,d={props:{group:{type:Object,default:null},isSizeGroup:{type:Boolean,default:!1}},components:{SingleElement:h},methods:{onElementDataChange:function(t){this.$emit("change",Object(i.a)({},t,{GroupID:this.group.ID}))}}},f=(a("9ce7"),Object(r.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.group?a("div",{staticClass:"mp-erp-product-module-filename-item-content-show-single-group-comp-wrap"},[a("SingleElement",{attrs:{ElementData:t.group,isSizeGroup:t.isSizeGroup},on:{change:t.onElementDataChange}}),t._l(t.group.ElementList,(function(e){return a("SingleElement",{key:e.ID,attrs:{ElementData:e},on:{change:t.onElementDataChange}})}))],2):t._e()}),[],!1,null,null,null)).exports,D={props:{craft:{type:Object,default:null}},components:{SingleElement:h,SingleElementGroup:f},computed:{},methods:{onCraftDataChange:function(t){this.$emit("change",Object(i.a)({},t,{CraftID:this.craft.ID}))}}},v=(a("29b6"),Object(r.a)(D,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.craft?a("div",{staticClass:"mp-erp-product-module-filename-item-content-show-single-craft-comp-wrap"},[a("SingleElement",{attrs:{ElementData:t.craft},on:{change:t.onCraftDataChange}}),t._l(t.craft.ElementList,(function(e){return a("SingleElement",{key:e.ID,attrs:{ElementData:e},on:{change:t.onCraftDataChange}})})),t._l(t.craft.GroupList,(function(e){return a("SingleElementGroup",{key:e.ID,attrs:{group:e},on:{change:t.onCraftDataChange}})}))],2):t._e()}),[],!1,null,null,null)).exports,C={props:{itemData:{type:Object,default:null},isPart:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},components:{SingleElement:h,SingleElementItem:p,SingleElementGroup:f,SingleCraft:v},computed:{PartFalseWords:{get:function(){return this.itemData?this.itemData.FalseWords:null},set:function(t){var e={FalseWords:t};this.onNameDataChange(e,"self")}},MaterialFalseWords:{get:function(){return this.itemData?{Name:this.itemData.MaterialDisplayName,FalseWords:this.itemData.MaterialFalseWords,ID:""}:null}}},methods:{onNameDataChange:function(t,e){if(t){var a=Object(i.a)({},t,{position:e,isPart:this.isPart,ID:this.itemData.ID});this.$emit("change",a)}}},data:function(){return{showMain:!1}},mounted:function(){this.showMain=this.show}},g={name:"ProductFileNameSet",components:{ExplainDrawer:u,ItemContentShow:(a("28e5"),Object(r.a)(C,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.itemData?a("section",{staticClass:"mp-erp-product-module-filename-item-content-show-comp-wrap"},[a("header",[a("span",{staticClass:"mp-common-title-wrap is-black"},[t._v(t._s(t.itemData.ShowName||t.itemData.Name))]),a("span",{staticClass:"icon",class:t.showMain?"show":"",on:{click:function(e){t.showMain=!t.showMain}}},[t._v(" "+t._s(t.showMain?"收起":"展开")+" "),a("i",{staticClass:"el-icon-arrow-down"})])]),a("main",{directives:[{name:"show",rawName:"v-show",value:t.showMain,expression:"showMain"}]},[a("SingleElementItem",{model:{value:t.PartFalseWords,callback:function(e){t.PartFalseWords=e},expression:"PartFalseWords"}}),t.itemData.ElementList.length>0?a("p",{staticClass:"part-title"},[t._v("元素 --")]):t._e(),a("div",t._l(t.itemData.ElementList,(function(e){return a("SingleElement",{key:e.ID,attrs:{ElementData:e},on:{change:function(e){return t.onNameDataChange(e,"element")}}})})),1),t.itemData.GroupList.length>0?a("p",{staticClass:"part-title"},[t._v("元素组 --")]):t._e(),t._l(t.itemData.GroupList,(function(e){return a("SingleElementGroup",{key:e.ID,attrs:{group:e},on:{change:function(e){return t.onNameDataChange(e,"group")}}})})),t.itemData.CraftList.length>0?a("p",{staticClass:"part-title"},[t._v("工艺 --")]):t._e(),a("div",t._l(t.itemData.CraftList,(function(e){return a("SingleCraft",{key:e.ID,attrs:{craft:e},on:{change:function(e){return t.onNameDataChange(e,"craft")}}})})),1),t.itemData.SizeGroup?a("p",{staticClass:"part-title"},[t._v("尺寸组 --")]):t._e(),a("div",[t.itemData.SizeGroup?a("SingleElementGroup",{key:"SizeGroup",attrs:{isSizeGroup:"",group:t.itemData.SizeGroup.GroupInfo},on:{change:function(e){return t.onNameDataChange(e,"SizeGroup")}}}):t._e()],1),a("p",{staticClass:"part-title"},[t._v("物料")]),a("SingleElement",{attrs:{ElementData:t.MaterialFalseWords},on:{change:function(e){return t.onNameDataChange(e,"material")}}})],2)]):t._e()}),[],!1,null,null,null)).exports},computed:Object(i.a)({},Object(l.e)("productManage",["ProductManageList","ProductModuleKeyIDList"]),{curProduct:function(){var t=this;return this.ProductID?this.ProductManageList.find((function(e){return e.ID===t.ProductID})):null},curPart:function(){var t=this;return this.PartID&&this.curProduct?this.curProduct.PartList.find((function(e){return e.ID===t.PartID})):null},SplitChars:{get:function(){return this.productData?this.productData.SplitChars:""},set:function(t){this.productData.SplitChars=t.replace(s.e,"")}},PartSplitChars:{get:function(){return this.productData?this.productData.PartSplitChars:""},set:function(t){this.productData.PartSplitChars=t.replace(s.b,"")}},GroupSplitChars:{get:function(){return this.productData?this.productData.GroupSplitChars:""},set:function(t){this.productData.GroupSplitChars=t.replace(s.b,"")}},CraftSplitChars:{get:function(){return this.productData?this.productData.CraftSplitChars:""},set:function(t){this.productData.CraftSplitChars=t.replace(s.b,"")}}}),data:function(){return{ProductID:"",PartID:"",ProductName:"",titleType:"",productData:null,drawer:!1,showTipType:""}},methods:{getPositionID:function(){if(this.$route.params){var t=this.$route.params,e=t.ProductID,a=t.PartID,n=t.name,i=t.type;e&&a&&n&&i?(this.ProductID=e,this.PartID="null"!==a?a:"",this.ProductName=n,this.titleType=i,this.getProductOrderData()):this.onGoBackClick()}else this.onGoBackClick()},getProductOrderData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["FalseWords"];return Object(n.a)(regeneratorRuntime.mark((function a(){var n,i,l,s,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.PartID?t.PartID:t.ProductID,i=t.PartID?t.api.getPartModuleData:t.api.getProductModuleData,l=t.$utils.getIDFromListByNames(e,t.ProductModuleKeyIDList),s={ID:n,List:l},a.next=6,i(s).catch((function(){}));case 6:(o=a.sent)&&o.data&&1e3===o.data.Status&&(t.productData=o.data.Data);case 8:case"end":return a.stop()}}),a)})))()},onGoBackClick:function(){this.$router.replace("/ProductManageList")},onExplainClick:function(){this.drawer=!0},onItemDataChange:function(t){if(this.productData&&t){var e=t.isPart,a=t.ID;if(e){var n=this.productData.PartList.find((function(t){return t.ID===a}));if(!n)return;this.handleDataChange(n,t)}else this.handleDataChange(this.productData,t)}},handleDataChange:function(t,e){var a=e.position,n=e.FalseWords,i=e.GroupID,l=e.CraftID,s=e.ElementID,o=t;if("self"===a&&(o.FalseWords=n),"element"===a&&this.handleElementTypeDataChange(o,e),"group"===a&&i&&this.handleGroupTypeDataChange(o,e),"craft"===a&&l){var r=o.CraftList.find((function(t){return t.ID===l}));if(!r)return;e.ElementID&&e.ElementID===l?r.FalseWords=n:e.ElementID&&!e.GroupID?this.handleElementTypeDataChange(r,e):e.ElementID&&e.GroupID&&this.handleGroupTypeDataChange(r,e)}"SizeGroup"===a&&o.SizeGroup&&o.SizeGroup.GroupInfo&&o.SizeGroup.GroupInfo.ID===i&&(i===s?o.SizeGroup.GroupInfo.FalseWords=n:this.handleElementTypeDataChange(o.SizeGroup.GroupInfo,e)),"material"===a&&(o.MaterialFalseWords=n)},handleElementTypeDataChange:function(t,e){if(t&&e){var a=e.ElementID,n=e.OptionID,i=e.FalseWords,l=t.ElementList.find((function(t){return t.ID===a}));if(l)if(n){if(l.OptionAttribute&&l.OptionAttribute.OptionList&&l.OptionAttribute.OptionList.length>0){var s=l.OptionAttribute.OptionList.find((function(t){return t.ID===n}));s&&(s.FalseWords=i)}}else l.FalseWords=i}},handleGroupTypeDataChange:function(t,e){var a=e.GroupID,n=e.ElementID,i=e.FalseWords,l=t.GroupList.find((function(t){return t.ID===a}));l&&(l.ID===n?l.FalseWords=i:this.handleElementTypeDataChange(l,e))},onSubmitClick:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a,n,i,l,s,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.productData){e.next=2;break}return e.abrupt("return");case 2:if(a=t.productData,n=a.SplitChars,i=a.PartSplitChars,l=a.GroupSplitChars,s=a.CraftSplitChars,l&&n&&i&&s){e.next=6;break}return t.messageBox.failSingleError("保存失败","分隔符与开始结束符号必填，请输入及补充分隔符"),e.abrupt("return");case 6:return e.next=8,t.api.getProductSetFalseWords(t.productData).catch((function(){}));case 8:(o=e.sent)&&1e3===o.data.Status&&t.messageBox.successSingle("设置成功",t.onGoBackClick,t.onGoBackClick);case 10:case"end":return e.stop()}}),e)})))()},onInpFocus:function(t){this.showTipType=t},onInpBlur:function(){this.showTipType=""}},mounted:function(){this.getPositionID()}},b=(a("7bde"),Object(r.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mp-erp-product-list-page-product-file-name-set-comp-wrap"},[a("header",[a("span",[t._v("当前"+t._s(t.titleType)+"：")]),a("span",[t._v(t._s(t.ProductName))]),t.productData?a("div",[a("div",{staticClass:"left"},[a("el-checkbox",{model:{value:t.productData.AllowAnalysisName,callback:function(e){t.$set(t.productData,"AllowAnalysisName",e)},expression:"productData.AllowAnalysisName"}},[t._v("允许进行文件名解析")]),a("div",[a("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:t.productData.AllowAnalysisName,expression:"productData.AllowAnalysisName"}],model:{value:t.productData.AllowBatchUpload,callback:function(e){t.$set(t.productData,"AllowBatchUpload",e)},expression:"productData.AllowBatchUpload"}},[t._v("允许进行批量上传")])],1),a("el-checkbox",{model:{value:t.productData.IsAppendWeight,callback:function(e){t.$set(t.productData,"IsAppendWeight",e)},expression:"productData.IsAppendWeight"}},[t._v("附加重量")]),a("el-checkbox",{model:{value:t.productData.IsAppendPrice,callback:function(e){t.$set(t.productData,"IsAppendPrice",e)},expression:"productData.IsAppendPrice"}},[t._v("附加价格 （如果有的话）")])],1),a("ul",{staticClass:"right"},[a("li",[a("span",[t._v("分隔符：")]),a("el-input",{attrs:{size:"small"},on:{focus:function(e){return t.onInpFocus("SplitChars")},blur:t.onInpBlur},model:{value:t.SplitChars,callback:function(e){t.SplitChars=e},expression:"SplitChars"}}),a("div",{staticClass:"tip",class:"SplitChars"===t.showTipType?"active":""},[t._v("只可输入 , ' | / 和空格等5种符号")])],1),a("li",[a("span",[t._v("部件开始结束符号：")]),a("el-input",{attrs:{size:"small"},on:{focus:function(e){return t.onInpFocus("PartSplitChars")},blur:t.onInpBlur},model:{value:t.PartSplitChars,callback:function(e){t.PartSplitChars="string"==typeof e?e.trim():e},expression:"PartSplitChars"}}),a("div",{staticClass:"tip",class:"PartSplitChars"===t.showTipType?"active":""},[t._v("只可输入【】 {} [] 《》 < > () （）等符号，必须成对出现")])],1),a("li",[a("span",[t._v("元素组开始结束符号：")]),a("el-input",{attrs:{size:"small"},on:{focus:function(e){return t.onInpFocus("GroupSplitChars")},blur:t.onInpBlur},model:{value:t.GroupSplitChars,callback:function(e){t.GroupSplitChars="string"==typeof e?e.trim():e},expression:"GroupSplitChars"}}),a("div",{staticClass:"tip",class:"GroupSplitChars"===t.showTipType?"active":""},[t._v("只可输入【】 {} [] 《》 < > () （）等符号，必须成对出现，且不可与其它分隔符重复")])],1),a("li",[a("span",[t._v("工艺开始结束符号：")]),a("el-input",{attrs:{size:"small"},on:{focus:function(e){return t.onInpFocus("CraftSplitChars")},blur:t.onInpBlur},model:{value:t.CraftSplitChars,callback:function(e){t.CraftSplitChars="string"==typeof e?e.trim():e},expression:"CraftSplitChars"}}),a("div",{staticClass:"tip",class:"CraftSplitChars"===t.showTipType?"active":""},[t._v("只可输入【】 {} [] 《》 < > () （）等符号，必须成对出现，且不可与其它分隔符重复")])],1),a("li",{staticClass:"explain",on:{click:t.onExplainClick}},[a("i",[t._v("?")]),a("span",[t._v("说明")])])])]):t._e()]),a("main",[a("ExplainDrawer",{attrs:{visible:t.drawer},on:{"update:visible":function(e){t.drawer=e}}}),t.productData?[a("ItemContentShow",{key:"product",attrs:{itemData:t.productData,show:""},on:{change:t.onItemDataChange}}),t._l(t.productData.PartList,(function(e){return a("ItemContentShow",{key:e.ID,attrs:{isPart:"",itemData:e},on:{change:t.onItemDataChange}})}))]:t._e()],2),a("footer",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmitClick}},[t._v("保存")]),a("el-button",{on:{click:t.onGoBackClick}},[a("i",{staticClass:"el-icon-d-arrow-left"}),t._v(" 返回")])],1)])}),[],!1,null,null,null));e.default=b.exports},"9ce7":function(t,e,a){"use strict";var n=a("c950");a.n(n).a},b635:function(t,e,a){},c090:function(t,e,a){},c950:function(t,e,a){},db43:function(t,e,a){},fb9e:function(t,e,a){}}]);