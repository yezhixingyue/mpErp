(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1ca10e65"],{"02ee":function(t,e,i){"use strict";var n=i("8d94");i.n(n).a},"10e2":function(t,e,i){},3877:function(t,e,i){"use strict";var n=i("d16f");i.n(n).a},"3a48":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBRURDM0JEQkI3QjExRUFCRkM4OTA5RkY4QTEzM0VFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBRURDM0JFQkI3QjExRUFCRkM4OTA5RkY4QTEzM0VFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkFFREMzQkJCQjdCMTFFQUJGQzg5MDlGRjhBMTMzRUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkFFREMzQkNCQjdCMTFFQUJGQzg5MDlGRjhBMTMzRUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4rxy6UAAAAy0lEQVR42mJgIAKwbf5pDsQPQTRMjJEITSxA6h4QywLxJyB2++XLfpKJkE1AagcQZ0E18QHxLpA4CwFNu6CKxYE4GoiXQvlLmYnQBAJiQKwHtRkkF8hIhCZksBvoPzcQg4kETW+AuBgjVInQ5AS07TJMANnG2cRqgmsE2rYfSNUD8VNiNIGdCtSkAKTvQxWlAfFkIJbGpwlmoyeULQLEs4A4F4jP4NMEAqAE4I7EB2lOAWowJZQUQRoNgHgVEG8H4p1ATc+JSfgAAQYARRBJE7ECLWIAAAAASUVORK5CYII="},"468e":function(t,e,i){"use strict";var n=i("4aae");i.n(n).a},"4aae":function(t,e,i){},"59aa":function(t,e,i){},"67d9":function(t,e,i){"use strict";var n=(i("7db0"),i("4160"),i("159b"),i("96cf"),i("1da1")),a=i("5530"),r=i("ad32"),o={props:{visible:{type:Boolean,default:!1},PropertyList:{type:Array,default:null},warnTitle:{type:String,default:""},title:{type:String,default:"添加子公式"},initDataStr:{type:String,default:""}},components:{CommonDialogComp:r.a},computed:{selectDataList:function(){if(!this.PropertyList||!Array.isArray(this.PropertyList)||0===this.PropertyList.length)return[];var t=[];return this.PropertyList.forEach((function(e){var i=e.Product,n=e.Part,r=e.Group,o=e.Craft;if(i){var s=n?n.ID:i.ID,c=n?n.Name:"产品",l=t.find((function(t){return t.ID===s}));if(l||(l={ID:s,Name:c,Part:null,GroupList:[],CraftList:[]},t.push(l)),o&&r){var u=l.CraftList.find((function(t){return t.ID===o.ID}));u?u.GroupList.push(e):l.CraftList.push(Object(a.a)({},o,{GroupList:[e]}))}!o&&r&&l.GroupList.push(e),o||r||!n||(l.Part=e)}})),t}},data:function(){return{selectValue:""}},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("submit",t.selectValue);case 1:case"end":return e.stop()}}),e)})))()},onCancle:function(){this.$emit("update:visible",!1)},onOpen:function(){this.$nextTick(this.initEditData)},onClosed:function(){},initEditData:function(){var t=this;if(this.initDataStr){var e=this.PropertyList.find((function(e){return JSON.stringify(e)===t.initDataStr}));this.selectValue=e||""}else this.selectValue=""}}},s=(i("e83a"),i("2877")),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("CommonDialogComp",{staticClass:"mp-erp-comps-common-sub-formula-add-and-select-dialog-comp-wrap",attrs:{width:"750px",top:"12vh",title:t.title,visible:t.visible,disabled:!t.selectValue},on:{"update:visible":function(e){t.visible=e},submit:t.onSubmit,cancle:t.onCancle,open:t.onOpen,closed:t.onClosed}},[t._l(t.selectDataList,(function(e){return i("div",{key:e.ID,staticClass:"item"},[i("p",[e.Part?i("el-radio",{attrs:{label:e.Part},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},[t._v(t._s(e.Name))]):i("span",[t._v(t._s(e.Name))])],1),i("div",t._l(e.GroupList,(function(e){return i("el-radio",{key:e.Group.ID,attrs:{label:e},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},[t._v(t._s(e.Group.Name))])})),1),i("ul",t._l(e.CraftList,(function(e){return i("li",{key:e.ID},[i("span",[t._v(t._s(e.Name)+"：")]),t._l(e.GroupList,(function(e){return i("el-radio",{key:e.Group.ID,attrs:{label:e},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},[t._v(t._s(e.Group.Name))])}))],2)})),0)])})),t.warnTitle?i("p",{staticClass:"tips-box is-pink"},[i("i",{staticClass:"el-icon-warning"}),t._v(" 注："+t._s(t.warnTitle)+"目标设定后不允许更改")]):t._e()],2)}),[],!1,null,null,null);e.a=c.exports},"6e30":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAYAAAAiYZ4HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY3NDlERTgxNzdEMTExRUFCREM5RjNGQzRGRkFBQ0U4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY3NDlERTgyNzdEMTExRUFCREM5RjNGQzRGRkFBQ0U4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjc0OURFN0Y3N0QxMTFFQUJEQzlGM0ZDNEZGQUFDRTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjc0OURFODA3N0QxMTFFQUJEQzlGM0ZDNEZGQUFDRTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7W2NX3AAACRUlEQVR42mxSS2tTQRQ+Z2buKze1MSWpfWB9IAUFFy5EEAT3/gH/gktBxYVb/4GK2I0WYkFw7cqtuOrChRJqMJioTXLbYtPcx9yZ45kkS4cL98zcb873OBdvdtpwCFW4FnyFTrF+65veeBBjXicASq2fXfR/Pr8afHn/Kb0BDTkCVcEU+qYBu+kmjClqMa6tSX4EtxA2e+VyK7NBeGwX4ILXBVWSXDuy8aMRLVZCzNc8sB8s4MChPTRhTkHQLs/uKLIHKfkvcbk9tiMbYygIiHUg0rQ1M/GDMGMiyKyAupwA1tr53SVx3GUmOUP9b/FNRJuRfwpv/9iNvutzTyTYCn+w3NMyQsyR05q7CA0qX5HJMzU0jYd9U3vsoUPRVAx7gJLfvtuzHE0CSr4Vol5VEwr7Vb5fw5P7LLaXgr8VYf6U0+smdvGFD+W9WGTqtz39piDVER6YgeEOVZy0YszecT05I5JXV4K9HZY4ZtDbCItt506BORA+FkMnRGJ5XaEG1ioR6DyfKUNSucROKLjsMAKpJwSYERfAGTcNuxCcrfNgXY2z0AzIBuKUYSD4cMgJQUZRoyRvPgeYA3l4bN8H3XRMHEoiAiyOXPwKymaEmcvFKjQTPi95QwJdsrDgMBJNolgvdzE8lOCSZDk+FLRvliq6kCpAjZoUjCHckFM+GKnMRm72e3+pcie1QcrywoGpff5j6pr/rbAElRY2DjnqMU/IiHX1C1bU/ms2at1suI9maulhybXUbD90ETTF4daqSOCfAAMArfYZ68CyjZgAAAAASUVORK5CYII="},"867c":function(t,e,i){"use strict";i.r(e);var n=(i("99af"),i("4de4"),i("7db0"),i("d81d"),i("b0c0"),i("ac1f"),i("5319"),i("96cf"),i("1da1")),a=i("3835"),r=i("5530"),o=i("2f62"),s=i("3eca"),c=(i("a15b"),i("bc5c")),l={props:{type:{type:String,default:"risk"},dataList:{type:Array,default:function(){return[]}},PropertyList:{type:Array,default:function(){return[]}},titleObj:{type:Object,default:null}},components:{CtrlMenus:c.a},computed:Object(r.a)({},Object(o.e)("productManage",["ControlTypeList","RiskWarningRangeList","RiskWarningTypeList"]),{localTableData:function(){var t=this;return this.dataList&&Array.isArray(this.dataList)&&0!==this.dataList.length?this.dataList.map((function(e){return Object(r.a)({},e,{FilterTypeText:1===e.Constraint.FilterType?"满足所有":"满足任一",conditionText:t.getConditionText(e.Constraint.ItemList),result:t.getShowResult(e)})})):[]},curTableType:function(){var t=this;return this.titleObj?this.titleObj:this.tableTypeList.find((function(e){return e.type===t.type}))}}),data:function(){return{tableTypeList:[{title:"界面交互",btnText:"+ 添加交互",type:"interaction"},{title:"对比验证",btnText:"+ 添加对比",type:"compare"},{title:"风险提示",btnText:"+ 添加风险提示",type:"risk"},{title:"子交互",btnText:"+ 添加子交互",type:"subInteraction"},{title:"子对比",btnText:"+ 添加子对比",type:"subCompare"},{title:"子对比",btnText:"+ 添加子对比",type:"sizeCount"}]}},methods:{onSetupClick:function(t){this.$emit("setup",this.type,t)},onRemoveClick:function(t){this.$emit("remove",t)},getConditionText:function(t){return s.d.getPropertyConditionText(t,this.PropertyList)||"空"},getShowResult:function(t){var e=this,i=t.List,n=t.ControlType,a=this.ControlTypeList.find((function(t){return t.ID===n}));if(!a)return["错误：获取控制类型失败"];if("risk"===a.Name&&Array.isArray(i)&&1===i.length){var r=i[0],o=r.FailTips,c=r.DisplayMode,l=r.AreaList,u=this.$utils.getNameFromListByIDs(l,this.RiskWarningRangeList);u=u?u.join("、"):"";var p=this.$utils.getNameFromListByIDs(c,this.RiskWarningTypeList);return["".concat(u," ").concat(p,"：").concat(o)]}return"risk"===a.Name?["未获取到风险提示内容"]:"interaction"!==a.Name&&"subInteraction"!==a.Name||!Array.isArray(i)?"compare"!==a.Name&&"subCompare"!==a.Name||!Array.isArray(i)?["其它类型，暂未生成对应结果"]:0===i.length?"空":i.map((function(t){var i=t.Property,n=t.Operator,a=t.CompareProperty,r=t.DefaultValue;if(!i||!a)return"";var o=e.$utils.getNameFromListByIDs(n,s.a);o=o||"未知关系";var c=i.DisplayContent.replace(/\[|\]/g,""),l=a.DisplayContent.replace(/\[|\]/g,"");return 255===a.FixedType&&(l=r),"".concat(c," ").concat(o," ").concat(l)})):0===i.length?"空":i.map((function(t){var i=t.Property,n=t.Operator,a=t.OptionList;if(!i)return"";var r=e.$utils.getNameFromListByIDs(n,s.a);r=r||"未知关系";var o=i.DisplayContent.replace(/\[|\]/g,""),c="";if(Array.isArray(a)&&a.length>0){var l=i.ValueType;if(i.OptionList&&i.OptionList.length>0)if(6!==l){var u=e.$utils.getNameFromListByIDs(a,i.OptionList,{label:"Second",value:"First"});Array.isArray(u)&&u.length>1&&(c=" [ ".concat(u.join("/")," ] "))}else c=(c=s.d.getMaterialListShowText(a,i.OptionList))?": ".concat(c):c}return"".concat(r," ").concat(o," ").concat(c)}))}}},u=(i("3877"),i("2877")),p={name:"ProductInteractionList",data:function(){return{ProductID:"",PartID:"",ProductName:"",titleType:"",showTable:!1,visible:!1,setType4SubInteractionAndSubCompare:"",itemData4SubInteractionAndSubCompare:null,subDialogPropertyList:[],initDialogDataStr:""}},components:{CommonInteractionTable:Object(u.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mp-erp-product-module-interaction-risk-warning-table-com-container"},[t.curTableType?i("header",[i("span",{staticClass:"mp-common-title-wrap"},[t._v(t._s(t.curTableType.title))]),i("span",{staticClass:"blue-span",on:{click:function(e){return t.onSetupClick(null)}}},[t._v(t._s(t.curTableType.btnText))])]):t._e(),i("main",t._l(t.localTableData,(function(e){return i("div",{key:e.ID},[i("div",{staticClass:"condition"},[i("el-tooltip",{attrs:{effect:"light","popper-class":"common-property-condition-text-tips-box",placement:"bottom-start","visible-arrow":!1}},[i("div",{attrs:{slot:"content"},slot:"content"},[i("p",{staticClass:"if-box"},[i("span",{staticClass:"is-origin"},[t._v("如果")]),t._v(" "+t._s(e.FilterTypeText)+"：")]),Array.isArray(e.conditionText)?t._l(e.conditionText,(function(n,a){return i("p",{key:n.name+"tips"+a},[a>0?i("span",{staticClass:"type"},[t._v(t._s(1===e.Constraint.FilterType?"且":"或"))]):t._e(),i("span",{staticClass:"name"},[t._v(t._s(n.name))]),i("span",{staticClass:"is-origin"},[t._v(t._s(n.operator))]),i("span",{staticClass:"val"},[t._v(t._s(n.val))]),a===e.conditionText.length-1?i("span",{staticStyle:{"margin-left":"2px"}},[t._v(" 。")]):i("span",{staticStyle:{"margin-left":"2px"}},[t._v("；")])])})):i("p",[t._v(t._s(e.conditionText))]),i("p",{staticClass:"if-box",staticStyle:{"margin-right":"5px"}},[i("span",{staticClass:"is-origin"},[t._v(t._s("compare"===t.type?"则必须满足":"则"))])]),t._l(e.result.filter((function(t){return t})),(function(e,n){return i("p",{key:e+n},[t._v(t._s(e))])}))],2),i("div",{staticClass:"common-property-condition-text-content-box"},[i("p",{staticClass:"if-box"},[i("span",{staticClass:"is-origin"},[t._v("如果")]),t._v(" "+t._s(e.FilterTypeText))]),Array.isArray(e.conditionText)?t._l(e.conditionText,(function(n,a){return i("p",{key:n.name+"content"+a},[a>0?i("span",{staticClass:"type"},[t._v(t._s(1===e.Constraint.FilterType?"且":"或"))]):t._e(),i("span",[t._v(t._s(n.name))]),i("span",[t._v(t._s(n.operator))]),i("span",[t._v(t._s(n.val))])])})):i("p",[t._v(t._s(e.conditionText))]),i("p",{staticClass:"if-box",staticStyle:{"margin-left":"10px","margin-right":"5px"}},[i("span",{staticClass:"is-origin"},[t._v(t._s("compare"===t.type?"则必须满足":"则"))])]),i("p",t._l(e.result.filter((function(t){return t})),(function(n,a){return i("em",{key:n+a,staticStyle:{"margin-right":"4px"}},[t._v(t._s(n)+" "),a<e.result.length-1?i("i",{staticStyle:{color:"#33BBD5","font-weight":"700","font-size":"13px"}},[t._v("；")]):t._e()])})),0)],2)])],1),e.target?i("span",{staticClass:"part-name",attrs:{title:e.target.DisplayContent?e.target.DisplayContent.replace(/\[|\]/g,""):"未知"}},[t._v(" "+t._s(e.target.DisplayContent?e.target.DisplayContent.replace(/\[|\]/g,""):"未知")+" ")]):t._e(),i("span",{staticClass:"priority-box"},[t._v("优先级："+t._s(e.Priority))]),i("CtrlMenus",{on:{edit:function(i){return t.onSetupClick(e)},remove:function(i){return t.onRemoveClick(e)}}})],1)})),0)])}),[],!1,null,null,null).exports,SubFormulaAddAndSelectDialog:i("67d9").a},computed:Object(r.a)({},Object(o.e)("productManage",["ProductManageList","ProductModuleKeyIDList","ProductInteractionDataList","ControlTypeList","InteractionLeftPropertyList","InteractionRightPropertyList","CompareLeftPropertyList","CompareRightPropertyList"]),{curProduct:function(){var t=this;return this.ProductID?this.ProductManageList.find((function(e){return e.ID===t.ProductID})):null},curPart:function(){var t=this;return this.PartID&&this.curProduct?this.curProduct.PartList.find((function(e){return e.ID===t.PartID})):null},localInteractionDataList:function(){var t=this;return Array.isArray(this.ProductInteractionDataList)&&0!==this.ProductInteractionDataList.length?JSON.parse(JSON.stringify(this.ProductInteractionDataList)).map((function(e){var i=e.Constraint,n=e.List.map((function(e){var i=e.Property,n=e.CompareProperty;return i?(n&&i?(i=s.d.getPerfectPropertyByImperfectProperty(i,t.CompareLeftPropertyList),n=s.d.getPerfectPropertyByImperfectProperty(n,t.CompareRightPropertyList)):i&&(i=s.d.getPerfectPropertyByImperfectProperty(i,t.InteractionRightPropertyList)),Object(r.a)({},e,{Property:i,CompareProperty:n})):e})),o=s.d.getConstraintAndTextByImperfectConstraint(i,t.InteractionLeftPropertyList),c=Object(a.a)(o,1)[0];return Object(r.a)({},e,{Constraint:c,List:n})})):[]},RiskWarningDataList:function(){return this.getTargetDataList("risk")},InteractionDataList:function(){return this.getTargetDataList("interaction")},CompareDataList:function(){return this.getTargetDataList("compare")},subInteractionDataList:function(){return this.getTargetDataList("subInteraction")},subCompareDataList:function(){return this.getTargetDataList("subCompare")},dialogTitle:function(){return"subCompare"===this.setType4SubInteractionAndSubCompare?this.initDialogDataStr?"编辑子对比":"添加子对比":"subInteraction"===this.setType4SubInteractionAndSubCompare?this.initDialogDataStr?"编辑子交互":"添加子交互":""}}),methods:{getPositionID:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var i,n,a,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$route.params){e.next=3;break}return t.onGoBackClick(),e.abrupt("return");case 3:if(i=t.$route.params,n=i.ProductID,a=i.PartID,r=i.name,o=i.type,n&&a&&r&&o){e.next=7;break}return t.onGoBackClick(),e.abrupt("return");case 7:return t.ProductID=n,t.PartID="null"!==a?a:"",t.ProductName=r,t.titleType=o,t.getProductOrderData(),t.getPropertyList4SubInteractionAndSubCompare(),e.next=15,t.$store.dispatch("productManage/getInteractionPropertyList",t.ProductID);case 15:t.showTable=!0;case 16:case"end":return e.stop()}}),e)})))()},getProductOrderData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["Interaction"];return Object(n.a)(regeneratorRuntime.mark((function i(){var n,a,r;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=t.PartID?t.PartID:t.ProductID,a=t.$utils.getIDFromListByNames(e,t.ProductModuleKeyIDList),r={ID:n,List:a},t.loading=!0,i.next=6,t.$store.dispatch("productManage/getProductInteractionDataList",r);case 6:t.loading=!1;case 7:case"end":return i.stop()}}),i)})))()},onGoBackClick:function(){this.$router.replace("/ProductManageList")},handleJumpToNewPage:function(t,e){this.$store.commit("productManage/setCurInteractionData",e);var i=this.ProductID,n=this.ProductName,a=this.titleType,r=this.PartID?this.PartID:"null",o="/ProductInteractionSet/".concat(i,"/").concat(r,"/").concat(n,"/").concat(a,"/").concat(t,"/").concat(Date.now());this.$router.push(o)},onSetupPageJump:function(t,e){var i=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("subCompare"===t||"subInteraction"===t){n.next=4;break}i.handleJumpToNewPage(t,e),n.next=8;break;case 4:return n.next=6,i.getPropertyList4SubInteractionAndSubCompare();case 6:n.sent&&(i.setType4SubInteractionAndSubCompare=t,i.itemData4SubInteractionAndSubCompare=e,e&&e.target?(a=JSON.stringify(e.target),i.initDialogDataStr="{}"!==a?a:""):i.initDialogDataStr="",i.visible=!0);case 8:case"end":return n.stop()}}),n)})))()},getTargetDataList:function(t){var e=this;if(!t||!Array.isArray(this.localInteractionDataList)||0===this.localInteractionDataList.length)return[];var i=this.$utils.getIDFromListByNames(t,this.ControlTypeList),n=this.localInteractionDataList.filter((function(t){return t.ControlType===i}));return"subCompare"!==t&&"subInteraction"!==t||(n=n.map((function(t){return Object(r.a)({},t,{target:e.getItemTarget(t,e.subDialogPropertyList)})}))),n},getItemTarget:function(t,e){var i=t.ProductID,n=t.PartID,a=t.CraftID,r=t.GroupID;return e.find((function(t){var e=t.Product,o=t.Part,s=t.Craft,c=t.Group;return!!((e&&i&&e.ID===i||!e&&!i)&&(o&&n&&o.ID===n||!o&&!n)&&(s&&a&&s.ID===a||!s&&!a)&&(c&&r&&c.ID===r||!c&&!r))}))||{}},getPropertyList4SubInteractionAndSubCompare:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.subDialogPropertyList&&Array.isArray(t.subDialogPropertyList)&&t.subDialogPropertyList.length>0)){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,t.api.getSubformulaUseableProperty(t.ProductID).catch((function(){}));case 4:if(!(i=e.sent)||1e3!==i.data.Status){e.next=8;break}return t.subDialogPropertyList=i.data.Data,e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})))()},onSelectCompleted:function(t){t&&(this.$store.commit("productManage/setSubTargetData",t),this.visible=!1,this.handleJumpToNewPage(this.setType4SubInteractionAndSubCompare,this.itemData4SubInteractionAndSubCompare))},onTableItemRemove:function(t){var e=this;if(t){var i=this.ControlTypeList.find((function(e){return e.ID===t.ControlType})),n=i?"交互类型：[ ".concat(i.label," ]"):"";this.messageBox.warnCancelBox("确定删除该条设置吗",n,(function(){e.$store.dispatch("productManage/getProductControlRemove",t.ID)}))}}},mounted:function(){this.getPositionID()}},m=(i("02ee"),Object(u.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"mp-erp-product-list-page-product-interaction-list-page-wrap"},[i("header",[i("span",[t._v("当前"+t._s(t.titleType)+"：")]),i("span",[t._v(t._s(t.ProductName))])]),i("main",[t.showTable?[i("CommonInteractionTable",{attrs:{type:"interaction",dataList:t.InteractionDataList,PropertyList:t.InteractionLeftPropertyList},on:{remove:t.onTableItemRemove,setup:t.onSetupPageJump}}),i("CommonInteractionTable",{attrs:{type:"compare",dataList:t.CompareDataList,PropertyList:t.InteractionLeftPropertyList},on:{remove:t.onTableItemRemove,setup:t.onSetupPageJump}}),i("CommonInteractionTable",{attrs:{type:"risk",dataList:t.RiskWarningDataList,PropertyList:t.InteractionLeftPropertyList},on:{remove:t.onTableItemRemove,setup:t.onSetupPageJump}}),i("CommonInteractionTable",{attrs:{type:"subInteraction",dataList:t.subInteractionDataList,PropertyList:t.InteractionLeftPropertyList},on:{remove:t.onTableItemRemove,setup:t.onSetupPageJump}}),i("CommonInteractionTable",{attrs:{type:"subCompare",dataList:t.subCompareDataList,PropertyList:t.InteractionLeftPropertyList},on:{remove:t.onTableItemRemove,setup:t.onSetupPageJump}}),i("SubFormulaAddAndSelectDialog",{attrs:{visible:t.visible,PropertyList:t.subDialogPropertyList,title:t.dialogTitle,initDataStr:t.initDialogDataStr},on:{"update:visible":function(e){t.visible=e},submit:t.onSelectCompleted}})]:t._e()],2),i("footer",[i("el-button",{on:{click:t.onGoBackClick}},[i("i",{staticClass:"el-icon-d-arrow-left"}),t._v(" 返回")])],1)])}),[],!1,null,null,null));e.default=m.exports},"8c7b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAABFElEQVQ4T72TsUoDQRCGv39OL1FQxMIqXSABsbFQ1AfIk4gIqXwB0ScQweewsxAClmKnpWgjBts0IonxdmQDWlxyyWHhVruzs9/s/vOvyI1GZ3AKHOfjE9eiq3FA/wDXEVaM8OCrktZihurXgw0Sr5WqCFhmvWE6/5Bmnz2gqkZn0AcqZQEx74u0mTC8E74SAV5w+MWhJkjy+x60iXEzFRCwPSOcA1t/A3i2K82dCd/5J4DrIlO4+qnmXrm17KNOYssxZqYFd10KqhM1cNHF9fwLwNuG2g7ro37ji8B2nJcTcaYG4RDZUmEbwwzAUyu9H92s0AceTpDtA2MujU+YDZhizRyg/woq/ReAd4W0+djSW6zxDTChl/pgNivTAAAAAElFTkSuQmCC"},"8d94":function(t,e,i){},ad32:function(t,e,i){"use strict";var n={model:{prop:"value",event:"change"},props:{visible:{type:Boolean,default:!1},title:{type:String,default:"提示"},width:{default:"30%"},top:{type:String,default:"15vh"},showSubmit:{type:Boolean,default:!0},submitText:{type:String,default:"保存"},dangerText:{type:String,default:"重新生成"},cancelText:{type:String,default:"取消"},disabled:{type:Boolean,default:!1},showDanger:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{dialogVisible:{get:function(){return this.visible},set:function(t){this.$emit("update:visible",t)}}},data:function(){return{checkList:[]}},methods:{onCancleClick:function(){this.$emit("cancle")},onSubmitClick:function(t){this.dialogVisible&&("BUTTON"===t.target.nodeName?t.target.blur():"BUTTON"===t.target.parentNode.nodeName&&t.target.parentNode.blur(),this.$emit("submit"))},onDangerClick:function(){this.$emit("danger")},onOpen:function(){this.$emit("open")},onOpened:function(){this.$emit("opened")},onClose:function(){this.$emit("close")},onClosed:function(){this.$emit("closed")}}},a=(i("468e"),i("2877")),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"mp-img-style-header mp-erp-common-dialog-comp-wrap",attrs:{title:t.title,visible:t.dialogVisible,"close-on-click-modal":!1,width:t.width,top:t.top,modal:!1,"before-close":t.onCancleClick},on:{"update:visible":function(e){t.dialogVisible=e},open:t.onOpen,opened:t.onOpened,close:t.onClose,closed:t.onClosed}},[t._t("default"),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.showSubmit?i("el-button",{attrs:{type:"primary",loading:t.loading,disabled:t.disabled},on:{click:t.onSubmitClick}},[t._v(t._s(t.loading?"加载中":t.submitText))]):t._e(),t.showDanger?i("el-button",{attrs:{type:"danger"},on:{click:t.onDangerClick}},[t._v(t._s(t.dangerText))]):t._e(),i("el-button",{on:{click:t.onCancleClick}},[t._v(t._s(t.cancelText))])],1)],2)}),[],!1,null,null,null);e.a=r.exports},bc5c:function(t,e,i){"use strict";var n={props:{canEdit:{type:Boolean,default:!0},canRemove:{type:Boolean,default:!0},canCopy:{type:Boolean,default:!0},showList:{type:Array,default:function(){return["edit","del"]}}},methods:{onEditClick:function(){this.canEdit&&this.$emit("edit")},onRemoveClick:function(){this.canRemove&&this.$emit("remove")},onCopyClick:function(){this.canCopy&&this.$emit("copy")}}},a=(i("fe9a"),i("2877")),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ctrl-menus-container"},[t.showList.includes("copy")?n("span",{class:t.canCopy?"":"disabled",on:{click:t.onCopyClick}},[n("img",{attrs:{src:i("8c7b"),alt:""}}),n("i",[t._v("拷贝")])]):t._e(),t.showList.includes("edit")?n("span",{class:t.canEdit?"":"disabled",on:{click:t.onEditClick}},[n("img",{attrs:{src:i("3a48"),alt:""}}),n("i",[t._v("编辑")])]):t._e(),t.showList.includes("del")?n("span",{class:t.canRemove?"":"disabled",on:{click:t.onRemoveClick}},[n("img",{attrs:{src:i("6e30"),alt:""}}),n("i",[t._v("删除")])]):t._e()])}),[],!1,null,null,null);e.a=r.exports},d16f:function(t,e,i){},e83a:function(t,e,i){"use strict";var n=i("59aa");i.n(n).a},fe9a:function(t,e,i){"use strict";var n=i("10e2");i.n(n).a}}]);