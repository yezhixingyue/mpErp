(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7c05c0cf"],{"0bc7":function(e,t,i){"use strict";i.r(t);var n=(i("96cf"),i("1da1")),a=i("5530"),r=i("2f62"),o=i("9477"),l=(i("7db0"),i("a9e4")),s=(i("ac1f"),i("5319"),i("498a"),{props:{value:{type:Object,default:function(){return{}}}},model:{prop:"value",event:"change"},render:function(){var e=this,t=arguments[0],i=this.value.Property&&255!==this.value.Property.Type?this.value.Property.DisplayContent.replace(/\[|\]/g,""):"",n=function(t){e.$emit("change",Object(a.a)({},e.value,{Value:t.trim()}))},r=function(){e.$emit("select",e.value.key)},o=!this.value.Property||this.value.Property&&255===this.value.Property.Type,l=o?"showInput value":"value";return t("li",[t("span",{class:"label"},[this.value.label,"："]),t("span",{class:l},[i]),o&&t("el-input",{attrs:{size:"small",maxlength:"9",value:this.value.Value},on:{input:n}}),t("span",{class:"blue-span",on:{click:r}},["设置"])])}}),u=i("2877"),c=Object(u.a)(s,void 0,void 0,!1,null,null,null).exports,m={props:{drawerVisible:{type:Boolean,default:!1},SizeNumberPropertyList:{type:Array,default:function(){return[]}},initData:{type:Object,default:null},Name:{type:String,default:""}},components:{FormulaPanelElementSelectDialog:l.a,FieldItem:c},computed:{drawer:{get:function(){return this.drawerVisible},set:function(e){this.$emit("update:drawerVisible",e)}},selectedElementIDs:function(){return this.selectType&&this[this.selectType].Property?[this[this.selectType].Property.StoredContent]:[]}},data:function(){return{LengthFormula:{FormulaID:"",Type:"",Value:"",Property:null,label:"展开尺寸长度",key:"LengthFormula"},WidthFormula:{FormulaID:"",Type:"",Value:"",Property:null,label:"展开尺寸宽度",key:"WidthFormula"},DifferentContentFormula:{FormulaID:"",Type:"",Value:"",Property:null,label:"内容不同的展开物料数量",key:"DifferentContentFormula"},PrintNumberFormula:{FormulaID:"",Type:"",Value:"",Property:null,label:"共需要印刷多少份",key:"PrintNumberFormula"},visible:!1,selectType:""}},methods:{onSelectClick:function(e){this.selectType=e,this.visible=!0},onPropertySelected:function(e){this[this.selectType].Property=e},getFormatItem:function(e){if(!e)return e;var t=e.Property,i=e.Value,n={FormulaID:""};return i?n.Value=i:t&&255!==t.Type&&t.Formula&&(n.FormulaID=t.Formula.ID,n.Type=t.FixedType),n},getSubmitInfo:function(){return this.getCheckResult()?{LengthFormula:this.getFormatItem(this.LengthFormula),WidthFormula:this.getFormatItem(this.WidthFormula),DifferentContentFormula:this.getFormatItem(this.DifferentContentFormula),PrintNumberFormula:this.getFormatItem(this.PrintNumberFormula)}:null},fieldItemChecker:function(e,t){var i=e.Property,n=e.Value,a=e.label;return!((!i||255===i.Type)&&(n||0===n?(!this.$utils.getValueIsOrNotNumber(n,t)||n<=0)&&(this.messageBox.failSingleError("保存失败","".concat(a,"输入数值不正确")),1):(this.messageBox.failSingleError("保存失败","".concat(a,"未设置")),1)))},getCheckResult:function(){return this.fieldItemChecker(this.LengthFormula)&&this.fieldItemChecker(this.WidthFormula)&&this.fieldItemChecker(this.DifferentContentFormula,!0)&&this.fieldItemChecker(this.PrintNumberFormula,!0)},getValueOrPropertyFromInitDataItem:function(e){var t={Property:null,Value:""};if(!e)return t;var i=e.FormulaID,n=e.Type,a=e.Value;if(i){var r=this.SizeNumberPropertyList.find((function(e){return e.Formula&&e.Formula.ID===i&&e.FixedType===n}));r&&(t.Property=r)}return(a||0===a)&&(t.Value=a),t}},mounted:function(){if(this.initData){var e=this.initData,t=e.LengthFormula,i=e.WidthFormula,n=e.DifferentContentFormula,r=e.PrintNumberFormula,o=this.getValueOrPropertyFromInitDataItem(t),l=this.getValueOrPropertyFromInitDataItem(i),s=this.getValueOrPropertyFromInitDataItem(n),u=this.getValueOrPropertyFromInitDataItem(r);this.LengthFormula=Object(a.a)({},this.LengthFormula,{},o),this.WidthFormula=Object(a.a)({},this.WidthFormula,{},l),this.DifferentContentFormula=Object(a.a)({},this.DifferentContentFormula,{},s),this.PrintNumberFormula=Object(a.a)({},this.PrintNumberFormula,{},u)}}},d=(i("9a0c"),Object(u.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"mp-erp-price-module-makeup-ctrl-size-number-panel-container"},[n("p",{staticClass:"title"},[e._v(e._s(e.Name)+"：")]),n("ul",[n("FieldItem",{on:{select:e.onSelectClick},model:{value:e.LengthFormula,callback:function(t){e.LengthFormula=t},expression:"LengthFormula"}}),n("FieldItem",{on:{select:e.onSelectClick},model:{value:e.WidthFormula,callback:function(t){e.WidthFormula=t},expression:"WidthFormula"}}),n("FieldItem",{on:{select:e.onSelectClick},model:{value:e.DifferentContentFormula,callback:function(t){e.DifferentContentFormula=t},expression:"DifferentContentFormula"}}),n("FieldItem",{on:{select:e.onSelectClick},model:{value:e.PrintNumberFormula,callback:function(t){e.PrintNumberFormula=t},expression:"PrintNumberFormula"}})],1),n("FormulaPanelElementSelectDialog",{attrs:{visible:e.visible,list:e.SizeNumberPropertyList,selectedElementIDs:e.selectedElementIDs},on:{"update:visible":function(t){e.visible=t},submit:e.onPropertySelected}}),n("el-drawer",{attrs:{visible:e.drawer,size:"470px","show-close":!1},on:{"update:visible":function(t){e.drawer=t}}},[n("template",{slot:"title"},[n("span",{staticClass:"drawer-title",on:{click:function(t){e.drawer=!1}}},[n("i",{staticClass:"el-icon-arrow-right"}),e._v(" 说明")])]),n("div",{staticClass:"drawer-content"},[n("p",[e._v("注意：拼版时会使用此处设置的长度、宽度、数量进行拼版，并印刷指定份数。此处尺寸指的是展开尺寸，物料数量指的是每份不同印刷内容的物料数量。")]),n("p",{staticClass:"is-pink"},[e._v("特别注意：物料数量是以此展开尺寸为基础的此尺寸物料数量，且印刷内容不同。")]),n("div",[n("p",[e._v("例如：")]),n("ul",[n("li",[e._v(" 锁线胶装画册 1000本，封面 4P，则宽度为成品宽度 *2+书脊厚度+勒口宽度*2，长度为成品长，物料数量则为 1，共需印刷 1000份。 ")]),n("li",[e._v(" 锁线胶装画册 1000本，内文64P，双面印，内容不同，则长度为成品长*2，宽度为成品宽，物料数量则为 16，共需印刷 1000份。 ")]),n("li",[e._v(" 锁线胶装画册 1000本，内文64P，双面印，内容相同1P循环，则长度为成品长*2，宽度为成品宽，物料数量则为 1，共需印刷 16000份。 ")]),n("li",[e._v(" 锁线胶装画册 1000本，内文64P，双面印，内容相同8P循环，则长度为成品长*2，宽度为成品宽，物料数量则为 2，共需印刷 8000份。 ")])]),n("p",[n("img",{attrs:{src:i("298b"),alt:""}}),n("span",{staticClass:"is-gray"},[e._v("其他应用请自己思考")])])])])],2)],1)}),[],!1,null,null,null)).exports,p=(i("d3b7"),i("3ca3"),i("ddb0"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("CommonDialogComp",{staticClass:"mp-erp-comps-price-module-price-item-breadth-select-dialog-comp-wrap",attrs:{width:"800px",top:"8vh",title:"选择幅面",visible:e.visible},on:{"update:visible":function(t){e.visible=t},submit:e.onSubmit,cancle:e.onCancle,open:e.onOpen,closed:e.onClosed}},[i("el-checkbox",{staticClass:"check-all",attrs:{indeterminate:e.isIndeterminateAll},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._l(e.BreadthTreeList,(function(e){return i("CheckItem",{key:e.ID,attrs:{data:e}})}))],2)}),f=i("ad32"),h=(i("4de4"),i("caad"),i("d81d"),i("2532"),i("f7ec")),b={props:{data:{type:Object,default:function(){return{}}}},data:function(){return{isOpen:!0,checkList:[]}},computed:{checkItemAll:{get:function(){return!1},set:function(e){}},isIndeterminate:function(){return!1}},methods:{getModeList:function(e){var t=e.map((function(e){return e.Mode}));return h.a.filter((function(e){return t.includes(e.ID)}))}}},v=Object(u.a)(b,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"mp-erp-price-module-breadth-select-check-item-container"},[i("header",[i("el-checkbox",{staticClass:"item-title",attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkItemAll,callback:function(t){e.checkItemAll=t},expression:"checkItemAll"}},[e._v(e._s(e.data.Name))]),i("span",{staticClass:"collapse",class:{open:e.isOpen},on:{click:function(t){e.isOpen=!e.isOpen}}},[e._v(e._s(e.isOpen?"收起":"展开")+" "),i("i",{staticClass:"el-icon-arrow-down"})])],1),i("main",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}]},e._l(e.data.list,(function(t){return i("div",{key:t.ID},[i("label",[e._v(e._s(t.Name))]),i("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.getModeList(t.ModeList),(function(t){return i("el-checkbox",{key:t.ID,attrs:{label:"复选框 A"}},[e._v(e._s(t.Name))])})),1)],1)})),0)])}),[],!1,null,null,null).exports,I={props:{visible:{type:Boolean,default:!1},saveData:{type:Object,default:null},BreadthTreeList:{type:Array,default:function(){return[]}}},components:{CommonDialogComp:f.a,CheckItem:v},computed:{checkAll:{get:function(){return!1},set:function(e){}},isIndeterminateAll:function(){return!1}},data:function(){return{}},methods:{onSubmit:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},onCancle:function(){this.$emit("update:visible",!1)},onOpen:function(){this.$nextTick(this.initEditData)},onClosed:function(){},initEditData:function(){}}},g={components:{BreadthSelectDialog:(i("24fc"),Object(u.a)(I,p,[],!1,null,null,null)).exports},computed:Object(a.a)({},Object(r.e)("basicSet",["BreadthList"]),{},Object(r.c)("basicSet",["BreadthTreeList"])),data:function(){return{visible:!1,saveData:null,loading:!0}},methods:{onSelectClick:function(){this.visible=!0},getBreadthInfo:function(){var e=this;return Promise.all([0===e.BreadthList.length?e.$store.dispatch("basicSet/getBreadthList"):null,e.$store.dispatch("basicSet/getBreadthClassList")])}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getBreadthInfo();case 2:e.loading=!1;case 3:case"end":return t.stop()}}),t)})))()}},k=(i("c0ed"),Object(u.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"mp-erp-price-module-makeup-set-breadth-panel-container"},[n("header",[n("span",{staticClass:"blue-span",class:{disabled:!e.loading&&0===e.BreadthList.length},on:{click:e.onSelectClick}},[e._v("选择幅面")]),e._m(0)]),n("main",[n("BreadthSelectDialog",{attrs:{visible:e.visible,saveData:e.saveData,BreadthTreeList:e.BreadthTreeList},on:{"update:visible":function(t){e.visible=t}}}),e.loading||0!==e.BreadthList.length?e._e():n("div",{staticClass:"is-empty"},[n("img",{attrs:{src:i("5731"),alt:""}}),n("p",{staticClass:"tips-box is-pink"},[e._v("未获取到印刷幅面信息，请到印刷幅面模块中进行相关设置！")])])],1)])}),[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"tips-box"},[i("i",{staticClass:"el-icon-warning"}),e._v(" 注：多个幅面可用时，系统自动选择产品总价格最低的幅面！")])}],!1,null,null,null)).exports,y={name:"MakeupCtrlConditionSet",data:function(){return{drawer:!1,visible:!1}},components:{ContionCommonComp:o.a,SizeNumberPanel:d,MakeupBreadthPaneL:k},computed:Object(a.a)({},Object(r.e)("priceManage",["MakeupLeftPropertyList","MakeupRightPropertyList","SizeNumberPropertyList","curMakeupItemEditData"]),{rightTitle:function(){return this.routeInfo.isMixin?"则允许混拼":"1"===this.routeInfo.setType?"使用以下幅面":"则"},routeInfo:function(){var e=this.$route.params,t=e.ProductID,i=e.PartID,n=e.ProductName,a=e.PartName,r=e.SolutionName,o=e.SolutionID,l=e.setType;return{ProductID:t,PartID:"null"===i?"":i,ProductName:n,PartName:"null"===a?"":a,SolutionName:r,SolutionID:o,isMixin:e.isMixin,setType:l}}}),methods:{onGoBackClick:function(){this.$goback()},onSubmitClick:function(){var e,t=this.$refs.oLeftComp.getConditonResult();if(t&&("0"!==this.routeInfo.setType||this.routeInfo.isMixin?this.routeInfo.isMixin&&(e={}):e=this.$refs.oSizeNumberPanel.getSubmitInfo(),e)){var i=this.routeInfo,n=i.SolutionID,r=i.ProductID,o=i.PartID,l=Object(a.a)({},t,{},e,{SolutionID:n,ProductID:r,PartID:o});this.handleSubmit(l)}},handleSubmit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function i(){var n,a,r;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=t.api.getMakeupSolutionItemSave,t.routeInfo.isMixin&&(n=t.api.getMixtureMakeupItemSave),i.next=4,n(e).catch((function(){}));case 4:(a=i.sent)&&1e3===a.data.Status&&(r=function(){t.onGoBackClick()},t.messageBox.successSingle("保存成功",r,r));case 6:case"end":return i.stop()}}),i)})))()}},mounted:function(){}},P=(i("a313"),Object(u.a)(y,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"mp-erp-price-manage-makeup-ctrl-condition-set-page-wrap"},[i("header",[i("span",[e._v("当前产品："+e._s(e.routeInfo.ProductName))]),i("span",[e._v("设置方案："+e._s(e.routeInfo.SolutionName))]),e.routeInfo.PartName?i("span",[e._v("设置部件："+e._s(e.routeInfo.PartName)+" "+e._s(e.routeInfo.isMixin&&"混拼条件"))]):e._e()]),i("main",[i("ContionCommonComp",{ref:"oLeftComp",attrs:{ComparePropertyList:e.MakeupRightPropertyList,PropertyList:e.MakeupLeftPropertyList,leftWidth:"40%",curEditData:e.curMakeupItemEditData,rightTitle:e.rightTitle}},[i("template",{slot:"title"},["0"!==e.routeInfo.setType||e.routeInfo.isMixin?e._e():[i("span",{staticClass:"intro",on:{click:function(t){e.drawer=!0}}},[i("i",[e._v("?")]),e._v(" 说明")])]],2),"0"!==e.routeInfo.setType||e.routeInfo.isMixin?e._e():i("SizeNumberPanel",{ref:"oSizeNumberPanel",attrs:{Name:e.routeInfo.PartName||"产品",initData:e.curMakeupItemEditData,drawerVisible:e.drawer,SizeNumberPropertyList:e.SizeNumberPropertyList},on:{"update:drawerVisible":function(t){e.drawer=t},"update:drawer-visible":function(t){e.drawer=t}}}),"1"===e.routeInfo.setType?i("MakeupBreadthPaneL"):e._e()],2)],1),i("footer",[i("el-button",{attrs:{type:"primary"},on:{click:e.onSubmitClick}},[e._v("保存")]),i("el-button",{on:{click:e.onGoBackClick}},[i("i",{staticClass:"el-icon-d-arrow-left"}),e._v(" 返回")])],1)])}),[],!1,null,null,null));t.default=P.exports},"1dfd":function(e,t,i){},"1f6b":function(e,t,i){},2307:function(e,t,i){},"24fc":function(e,t,i){"use strict";var n=i("2307");i.n(n).a},"298b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAADZ0lEQVQ4T42UX2gcVRTGv+/OzL2b3UlsGiTiS+IfBFuV1FoQ/yAqpUir1KqR0kxKLL7YBxUfWkUwgogPVbGgUmubZGfTYqgV00IxohS0WKptaQpK0STgQ5CqTdKd3e5Mdu+R3XaXGgl23ubMOb9zv2++GWKRKxr2uqTCtSCWK9AXyBzAcRcYTQXxuYVjXFiIhvRdQu4kcBOIA7By2pJzSuxSOmqVCJ6C4CfX4YupTaXJ+vy/QFGoNwI1yOsnJuI9D/ejvHCR7ITJt+qXlPAVKPT4PfFYtacBKuScxyDuHinLGr8vObuY5Hq9uM99wFacg8radenN8ydqIBnAkoJrflG28kx6c/n7/4PUn+dz+mkK387MxHfWQPlQv0Ggww+S56r3UdasIeUtAff7QfxefVD6oYq3mI8ssEwSPN+yJT4XheYIaQ/WQIXQ/ArYZzPB/CkBWAjN74BsF+H7HnFfKoh/q/YVh/UGsdgOwaiQ9/pBvK4QmrUCbGO0G+0w+me/N2mrnW4vrqdnjvlBfFs+NLsdylfpnuTA5YW6n8ILTal4qBCbcT+IO6Z3IX1dWv/F2UFvpevwEz9IVjYkjMBhNypVKeyHvVoa+iEERK701KwIzTQLQ94KUdzrB8mKazX5P9kLzR+c+xRLldFT/kTSevX2a4VKDi1F0dM1s6NQjzuwW5uC8neNV5tNPeJPlo4uhEc591G/p/xNI0+h7rbglsugrHmZlAczQbKh3hCF+iTBNzNBPNqoDXhdcNRYpjdur/p0JTo/QPBBDXT+Q/jpZnMWxBcilcPNveVvL2XdhypUnwM4QsGkJW8k5Ekhtjb3JJ9dzJrHSTxByKrMRHJ3XdoggGUkxqxwI4GP/SDeEY3gBil56xXZTvICbXy4qRdTUWjeBbBaREapuB5WDnFmINXpuXI8U4472YfSzAA6PVefLqvk5iWbMLPQ9EvD6KiIPjM/n3S29mH24hDaqPQU84N6uXL4ZSaIb60O/Z1DixHzJyBFER5VlFNWOAdImyLvsZD7Kaj8OJm0V/8OsgteIa3Ps/ZJZPVxAc8IcEgRL0Bk2rrJNreiV1eAO0j6IjIHi/H5UvK1Tpv9gMxay32OI71WaGoeVbPkaO81UN1OyLG0SXawG8liWZIR+FGsXyXYJZCTfjF55x8ALYRGDvPYzAAAAABJRU5ErkJggg=="},"7f28":function(e,t,i){},"9a0c":function(e,t,i){"use strict";var n=i("7f28");i.n(n).a},a313:function(e,t,i){"use strict";var n=i("1dfd");i.n(n).a},c0ed:function(e,t,i){"use strict";var n=i("1f6b");i.n(n).a},f7ec:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return s})),i("4de4"),i("7db0"),i("4160"),i("d81d"),i("d3b7"),i("25f0"),i("159b");var n=i("d4ec"),a=i("bee2"),r=i("ade3"),o=[{ID:0,Name:"正翻版",key:"zhengFan"},{ID:1,Name:"自翻版",key:"ziFan"},{ID:2,Name:"天地翻",key:"tianDiFan"}],l=function(){return o.map((function(e){return{checked:!1,Mode:e.ID,WhiteEdge:{Length:"",Width:""},key:e.key,Name:e.Name}}))},s=function(){function e(t){var i=this;if(Object(n.a)(this,e),Object(r.a)(this,"ID",""),Object(r.a)(this,"Name",""),Object(r.a)(this,"MinMaterialSize",{Length:"",Width:""}),Object(r.a)(this,"MaxMaterialSize",{Length:"",Width:""}),Object(r.a)(this,"Class",""),Object(r.a)(this,"ModeList",l()),t&&"[object Object]"===Object.prototype.toString.call(t)){var a=JSON.parse(JSON.stringify(t)),o=a.ID,s=a.Name,u=a.MinMaterialSize,c=a.MaxMaterialSize,m=a.Class,d=a.ModeList;o&&(this.ID=o),s&&(this.Name=s),u&&(this.MinMaterialSize=u),c&&(this.MaxMaterialSize=c),m&&(this.Class=m),d&&d.length>0&&d.forEach((function(e){var t=i.ModeList.find((function(t){return e.Mode===t.Mode}));t&&(t.checked=!0,t.WhiteEdge=e.WhiteEdge)}))}}return Object(a.a)(e,null,[{key:"formatSubmit",value:function(e){var t=JSON.parse(JSON.stringify(e));return t.ModeList=t.ModeList.filter((function(e){return e.checked})).map((function(e){return{Mode:e.Mode,WhiteEdge:e.WhiteEdge}})),t}}]),e}()}}]);