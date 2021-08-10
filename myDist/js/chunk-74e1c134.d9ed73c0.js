(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-74e1c134"],{"072a":function(e,t,n){"use strict";var i=n("956e");n.n(i).a},2243:function(e,t,n){},"283a":function(e,t,n){},"31e0":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p})),n("99af"),n("7db0"),n("caad"),n("d3b7"),n("ac1f"),n("25f0"),n("2532"),n("466d");var i=n("d4ec"),s=n("bee2"),r=n("ade3"),a=n("192e"),l=n("247a"),o=n("7775"),u=n("3eca"),c=[{type:"ProductProperty",label:"产品"},{type:"MaterialProperty",label:"物料"}],p=function(){function e(t){if(Object(i.a)(this,e),Object(r.a)(this,"ID",""),Object(r.a)(this,"Name",""),Object(r.a)(this,"Content",""),Object(r.a)(this,"UseModule",""),Object(r.a)(this,"UseTimes",""),Object(r.a)(this,"Unit",""),Object(r.a)(this,"Remark",""),Object(r.a)(this,"PropertyList",[]),t&&"[object Object]"===Object.prototype.toString.call(t)){var n=JSON.parse(JSON.stringify(t)),s=n.ID,a=n.Name,l=n.Content,o=n.PositionID,u=n.UseModule,c=n.UseTimes,p=n.Unit,d=n.PropertyList,m=n.Remark,f=n.MaterialTypeID,h=n.PartID,y=n.ProductID,L=n.PriceID,C=n.TableID,D=n.GroupID,b=n.ElementID,I=n.CraftID;s&&(this.ID=s),a&&(this.Name=a),l&&(this.Content=l),o&&(this.PositionID=o),f&&(this.MaterialTypeID=f),h&&(this.PartID=h),y&&(this.ProductID=y),L&&(this.PriceID=L),C&&(this.TableID=C),D&&(this.GroupID=D),b&&(this.ElementID=b),I&&(this.CraftID=I),(u||0===u)&&(this.UseModule=u),c&&(this.UseTimes=c),p&&(this.Unit=p),m&&(this.Remark=m),d&&Array.isArray(d)&&d.length>0&&(this.PropertyList=d)}}return Object(s.a)(e,null,[{key:"checkSubmit",value:function(e){if(!e||"[object Object]"!==Object.prototype.toString.call(e))return a.a.failSingleError("操作失败","获取提交信息出错"),!1;var t=e.Name,n=e.PropertyList,i=e.Content;if(!t)return a.a.failSingleError("操作失败","请输入公式名称"),!1;if(n&&n.length>0){var s=n.find((function(e){return!e.DefaultValue&&0!==e.DefaultValue}));if(s)return a.a.failSingleError("操作失败","".concat(s.Element?s.Element.Name:s.DisplayContent,"未设置空值")),!1;if(s=n.find((function(e){if(!e.Element)return!Object(l.h)(e.DefaultValue);var t=e.Element,n=t.Type,i=t.NumbericAttribute,s=!(1===n&&i&&i.AllowDecimal);return!Object(l.h)(e.DefaultValue,s)})))return a.a.failSingleError("操作失败","".concat(s.Element?s.Element.Name:s.DisplayContent,"空值设置值不正确(检查是否为数字或是否允许小数)")),!1;for(var r=0;r<n.length;r+=1){var c=n[r];if(c.ValueRange){var p=c.ValueRange,d=p.MinValue,m=p.MaxValue;if((d||0===d)&&+c.DefaultValue<d)return a.a.failSingleError("操作失败","".concat(c.Element?c.Element.Name:c.DisplayContent,"空值设置值不能小于").concat(d)),!1;if((m||0===m)&&+c.DefaultValue>m&&-1!==m)return a.a.failSingleError("操作失败","".concat(c.Element?c.Element.Name:c.DisplayContent,"空值设置值不能大于").concat(m)),!1}}if(s=n.find((function(e){var t=e.DefaultValue,n=e.AvailableValueList;return!u.d.AvailableValueListChecker(t,n)})))return a.a.failSingleError("操作失败","".concat(s.Element?s.Element.Name:s.DisplayContent,"空值设置值不正确，请检查其取值范围")),!1}if(!i)return a.a.failSingleError("操作失败","请填写公式内容"),!1;var f=i.match(o.d);return!f||(a.a.failSingleError("操作失败","公式中[ ".concat(f," ]请转为半角字符")),!1)}},{key:"checkCalculate",value:function(e){if(!e||"[object Object]"!==Object.prototype.toString.call(e))return a.a.failSingleError("计算失败","获取提交信息出错"),!1;var t=e.PropertyList,n=e.Content;if(!n)return a.a.failSingleError("计算失败","请填写公式内容"),!1;var i=n.match(o.d);if(i)return a.a.failSingleError("计算失败","公式中[ ".concat(i," ]等字符为全角字符，请转换为半角")),!1;if(t&&t.length>0){var s=t.find((function(e){return!e.CalculateValue&&0!==e.CalculateValue&&n.includes(e.DisplayContent)}));if(s)return a.a.failSingleError("计算失败","".concat(s.Element?s.Element.Name:s.DisplayContent,"未设置测试计算数值")),!1;if(s=t.find((function(e){return n.includes(e.DisplayContent)&&!Object(l.h)(e.CalculateValue)})))return a.a.failSingleError("计算失败","".concat(s.Element?s.Element.Name:s.DisplayContent,"计算值不合法(检查是否为数字或是否允许小数)")),!1}return!0}}]),e}()},"466d":function(e,t,n){"use strict";var i=n("d784"),s=n("825a"),r=n("50c4"),a=n("1d80"),l=n("8aa5"),o=n("14c3");i("match",1,(function(e,t,n){return[function(t){var n=a(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var a=s(e),u=String(this);if(!a.global)return o(a,u);var c=a.unicode;a.lastIndex=0;for(var p,d=[],m=0;null!==(p=o(a,u));){var f=String(p[0]);d[m]=f,""===f&&(a.lastIndex=l(u,r(a.lastIndex),c)),m++}return 0===m?null:d}]}))},"468e":function(e,t,n){"use strict";var i=n("4aae");n.n(i).a},4944:function(e,t,n){"use strict";var i=n("283a");n.n(i).a},"4aae":function(e,t,n){},5731:function(e,t){e.exports="data:image/png;base64,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"},"7dfd":function(e,t,n){},"918d":function(e,t,n){"use strict";var i=n("2243");n.n(i).a},"956e":function(e,t,n){},a9e4:function(e,t,n){"use strict";var i=(n("99af"),n("4de4"),n("7db0"),n("4160"),n("caad"),n("d81d"),n("b64b"),n("d3b7"),n("25f0"),n("2532"),n("159b"),n("5530")),s=n("3835"),r=n("ad32"),a=n("2387"),l=n("31e0"),o=n("3eca"),u=(n("c740"),n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mp-erp-common-comps-on-element-select-dialog-element-type-show-item-comp-wrap"},e._l(e.elementList,(function(t){return n("li",{key:t.StoredContent||t.ID},[e.isMultiple&&t.StoredContent?n("el-checkbox",{attrs:{value:e.MultipleCheckedIDList.includes(t.StoredContent)},on:{change:function(n){return e.onCheckedItemChange(n,t)}}},[e._v(e._s(e.getName(t)))]):n("span",{class:{"has-child":t._FixedTypeList&&t._FixedTypeList.length>0,disabled:!t.StoredContent,"is-disabled":t.StoredContent&&e.selectedElementIDs.includes(t.StoredContent),"is-element":!0},on:{click:function(n){return e.onItemClick(t)}}},[e._v(e._s(e.getName(t)))]),t._FixedTypeList&&t._FixedTypeList.length>0?n("div",[e._v(" （"),e._l(t._FixedTypeList,(function(t){return n("span",{key:t.StoredContent,staticClass:"blue-span",class:e.selectedElementIDs.includes(t.StoredContent)?"is-disabled":"",on:{click:function(n){return e.onItemClick(t)}}},[e._v(e._s(e.getName(t)))])})),e._v("） ")],2):e._e()],1)})),0)}),c={props:{dataList:{type:Array,default:function(){return[]}},ElementList:{type:Array,default:null},selectedElementIDs:{type:Array,default:function(){return[]}},isMultiple:{type:Boolean,default:!1},checkedList:{type:Array,default:function(){return[]}}},computed:{elementList:function(){var e=this;if(this.ElementList)return this.ElementList;if(!this.dataList||!Array.isArray(this.dataList)||0===this.dataList.length)return[];var t=[];return JSON.parse(JSON.stringify(this.dataList)).forEach((function(n){if(n.FixedType||0===n.FixedType){var s=t.find((function(e){var t="";return n.Element?t=n.Element.ID:n.Formula?t=n.Formula.ID:n.Constraint&&(t=n.Constraint.ID),(e.Element?e.Element.ID:e.ID)===t}));if(s)s._FixedTypeList.push(n);else{var r=n.Element||n.Formula||n.Constraint;t.push(Object(i.a)({},r,{_FixedTypeList:[n]}))}}else{var a=t.findIndex((function(t){return e.getResultFor2PropsIsSame(t,n)}));if(a>-1){if(!t[a].StoredContent&&n.StoredContent){var l=t[a]._FixedTypeList,o=Object(i.a)({},n,{_FixedTypeList:l});t.splice(a,1,o)}}else t.push(Object(i.a)({},n,{_FixedTypeList:[]}))}})),t},MultipleCheckedIDList:function(){return Array.isArray(this.checkedList)?this.checkedList.map((function(e){return e.StoredContent})):[]}},methods:{getName:function(e){return o.d.getProperyName(e)},onItemClick:function(e){this.$emit("submit",e)},onCheckedItemChange:function(e,t){this.$emit("checked",e,t)},getResultFor2PropsIsSame:function(e,t){return e.Element?e.Element.ID===t.Element&&t.Element.ID:e.Formula?e.Formula.ID===t.Formula&&t.Formula.ID:e.ID&&t.Element?e.ID===t.Element.ID:!(!e.ID||!t.Formula)&&e.ID===t.Formula.ID}}},p=(n("918d"),n("2877")),d=Object(p.a)(c,u,[],!1,null,null,null).exports,m={props:{dataList:{type:Array,default:null},selectedElementIDs:{type:Array,default:function(){return[]}},ElementGroupList:{type:Array,default:null},isMultiple:{type:Boolean,default:!1},checkedList:{type:Array,default:function(){return[]}}},components:{ElementTypeShowComp:d},computed:{groupList:function(){if(this.ElementGroupList)return this.ElementGroupList;if(!this.dataList||!Array.isArray(this.dataList)||0===this.dataList.length)return[];var e=[],t=[];return JSON.parse(JSON.stringify(this.dataList)).forEach((function(n){var s=n.Group,r=n.FixedType,a=n.Element,l=n.Formula,o=n.Constraint,u=a||l||o;if(!u&&s&&!r&&0!==r){var c=e.findIndex((function(e){return(e.Group?e.Group.ID:e.ID)===s.ID}));if(c>-1){if(!e[c].StoredContent&&n.StoredContent){var p=e[c],d=p.List,m=p._FixedTypeList;d=d||[],m=m||[];var f=Object(i.a)({},n,{List:d,_FixedTypeList:m});e.splice(c,1,f)}}else e.push(Object(i.a)({},n,{_FixedTypeList:[],List:[]}))}if(a&&s&&!r&&0!==r&&!l){var h=e.find((function(e){return(e.Group?e.Group.ID:e.ID)===s.ID}));if(h){h.List||(h.List=[]);var y=h.List.findIndex((function(e){return(e.Element?e.Element.ID:e.ID)===a.ID}));if(y>-1){if(!h.List[y].StoredContent&&n.StoredContent){var L=h.List[y]._FixedTypeList,C=Object(i.a)({},n,{_FixedTypeList:L});h.List.splice(y,1,C)}}else h.List.push(n)}else e.push(Object(i.a)({},s,{List:[n]}))}if(!a&&s&&(r||0===r)&&!l){var D=e.find((function(e){return(e.Group?e.Group.ID:e.ID)===s.ID}));if(D)D._FixedTypeList||(D._FixedTypeList=[]),D._FixedTypeList.push(n);else{var b=Object(i.a)({},s,{List:[],_FixedTypeList:[n]});e.push(b)}t.push(n)}if(u&&s&&(r||0===r)){var I=e.find((function(e){return(e.Group?e.Group.ID:e.ID)===s.ID}));if(I){var v=I.List.find((function(e){return(e.Element?e.Element.ID:e.ID)===u.ID}));if(v)v._FixedTypeList||(v._FixedTypeList=[]),v._FixedTypeList.push(n);else{var E=Object(i.a)({},u,{_FixedTypeList:[n]});I.List.push(E)}}else e.push(Object(i.a)({},s,{_FixedTypeList:[n],List:[]}))}})),e},MultipleCheckedIDList:function(){return Array.isArray(this.checkedList)?this.checkedList.map((function(e){return e.StoredContent})):[]}},methods:{getName:function(e){return o.d.getProperyName(e)},onItemClick:function(e){this.$emit("submit",e)},onCheckedItemChange:function(e,t){this.$emit("checked",e,t)}}},f=(n("e363"),Object(p.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mp-erp-common-comps-on-element-select-dialog-group-type-show-item-comp-wrap"},e._l(e.groupList,(function(t){return n("li",{key:t.Group?t.Group.ID:t.ID},[t.Group?n("label",[e.isMultiple&&t.StoredContent?n("el-checkbox",{attrs:{value:e.MultipleCheckedIDList.includes(t.StoredContent)},on:{change:function(n){return e.onCheckedItemChange(n,t)}}},[e._v(e._s(t.Group.Name))]):t.StoredContent?n("span",{staticClass:"is-element",class:e.selectedElementIDs.includes(t.StoredContent)?"is-disabled":"",on:{click:function(n){return e.onItemClick(t)}}},[e._v(e._s(t.Group.Name))]):n("span",[e._v(e._s(t.Group.Name))]),t._FixedTypeList&&t._FixedTypeList.length>0?[e._v(" （ "),e.isMultiple?e._l(t._FixedTypeList,(function(t){return n("el-checkbox",{key:t.StoredContent,attrs:{value:e.MultipleCheckedIDList.includes(t.StoredContent)},on:{change:function(n){return e.onCheckedItemChange(n,t)}}},[e._v(e._s(e.getName(t)))])})):e._l(t._FixedTypeList,(function(t){return n("span",{key:t.StoredContent,staticClass:"blue-span",class:e.selectedElementIDs.includes(t.StoredContent)?"is-disabled":"",on:{click:function(n){return e.onItemClick(t)}}},[e._v(e._s(e.getName(t)))])})),e._v(" ） ")]:e._e(),t.List.length>0?[e._v("：")]:e._e()],2):e._e(),!t.Group&&t.Name?n("label",[e._v(e._s(t.Name)+" "),t._FixedTypeList&&t._FixedTypeList.length>0?[e._v(" （ "),e.isMultiple?e._l(t._FixedTypeList,(function(t){return n("el-checkbox",{key:t.StoredContent,attrs:{value:e.MultipleCheckedIDList.includes(t.StoredContent)},on:{change:function(n){return e.onCheckedItemChange(n,t)}}},[e._v(e._s(e.getName(t)))])})):e._l(t._FixedTypeList,(function(t){return n("span",{key:t.StoredContent,staticClass:"blue-span",class:e.selectedElementIDs.includes(t.StoredContent)?"is-disabled":"",on:{click:function(n){return e.onItemClick(t)}}},[e._v(e._s(e.getName(t)))])})),e._v(" ） ")]:e._e(),t.List.length>0?[e._v("：")]:e._e()],2):e._e(),n("ElementTypeShowComp",{attrs:{ElementList:t.List,selectedElementIDs:e.selectedElementIDs,isMultiple:e.isMultiple,checkedList:e.checkedList},on:{submit:e.onItemClick,checked:e.onCheckedItemChange}})],1)})),0)}),[],!1,null,null,null)).exports,h={props:{dataList:{type:Array,default:function(){return[]}},selectedElementIDs:{type:Array,default:function(){return[]}},isMultiple:{type:Boolean,default:!1},checkedList:{type:Array,default:function(){return[]}}},components:{ElementTypeShowComp:d,ElementGroupTypeShowComp:f},computed:{craftTypeList:function(){if(!this.dataList||!Array.isArray(this.dataList)||0===this.dataList.length)return[];var e=[],t=JSON.parse(JSON.stringify(this.dataList)),n=function(e){return{Craft:e,_ElementList:[],_ElementGroupList:[]}},s=function(t){var n=e.find((function(e){return t.ID===e.Craft.ID}));if(n){if(!n.StoredContent&&t.StoredContent){var s=n._ElementList,r=n._ElementGroupList,a=Object(i.a)({},t,{_ElementList:s,_ElementGroupList:r}),l=e.findIndex((function(e){return t.ID===e.Craft.ID}));e.splice(l,1,a)}}else e.push(t)};return t.forEach((function(t){var r=t.Craft,a=t.Element,l=t.Group,o=t.FixedType,u=t.Formula,c=a||u;if(!r||a||l||o||0===o||u||s(t),r&&a&&!l&&!o&&0!==o&&!u){var p=e.find((function(e){return r.ID===e.Craft.ID}));if(p){p._ElementList||(p._ElementList=[]);var d=p._ElementList.findIndex((function(e){return(e.Element?e.Element.ID:e.ID)===a.ID}));if(d>-1){if(!p._ElementList[d].StoredContent&&t.StoredContent){var m=p._ElementList[d]._FixedTypeList,f=Object(i.a)({},t,{_FixedTypeList:m});p._ElementList.splice(d,1,f)}}else p._ElementList.push(t)}else{var h=n(r);h._ElementList.push(t),s(h)}}if(r&&a&&!l&&(o||0===o)&&!u){var y=e.find((function(e){return r.ID===e.Craft.ID}));if(y){y._ElementList||(y._ElementList=[]);var L=y._ElementList.find((function(e){return(e.Element?e.Element.ID:e.ID)===a.ID}));if(L)L._FixedTypeList||(L._FixedTypeList=[]),L._FixedTypeList.push(t);else{var C=Object(i.a)({},a,{_FixedTypeList:[t]});y._ElementList.push(C)}}else{var D=n(r),b=Object(i.a)({},a,{_FixedTypeList:[t]});D._ElementList.push(b),s(D)}}if(r&&!a&&l&&!o&&0!==o&&!u){var I=e.find((function(e){return r.ID===e.Craft.ID}));if(I){var v=Object(i.a)({},t,{List:[]});I._ElementGroupList||(I._ElementGroupList=[]);var E=I._ElementGroupList.findIndex((function(e){return(e.Group?e.Group.ID:e.ID)===l.ID}));if(E>-1){if(!I._ElementGroupList[E].StoredContent&&t.StoredContent){var _=I._ElementGroupList[E].List,g=Object(i.a)({},t,{List:_});I._ElementGroupList.splice(E,1,g)}}else I._ElementGroupList.push(v)}else{var k=n(r),T=Object(i.a)({},t,{List:[]});k._ElementGroupList.push(T),s(k)}}if(r&&a&&l&&!o&&0!==o&&!u){var S=e.find((function(e){return r.ID===e.Craft.ID}));if(S){var x=Object(i.a)({},l,{List:[t]});S._ElementGroupList||(S._ElementGroupList=[]);var M=S._ElementGroupList.find((function(e){return(e.Group?e.Group.ID:e.ID)===l.ID}));if(M){var O=M.List.findIndex((function(e){return e.ID===a.ID}));if(O>-1){if(!M.List[O].StoredContent&&t.StoredContent){var A=M.List[O]._FixedTypeList,F=Object(i.a)({},t,{_FixedTypeList:A});M.List.splice(O,1,F)}}else M.List.push(t)}else S._ElementGroupList.push(x)}else{var G=n(r),w=Object(i.a)({},l,{List:[t]});G._ElementGroupList.push(w),s(G)}}if(r&&!c&&l&&(o||0===o)){var N=e.find((function(e){return r.ID===e.Craft.ID}));if(N){var j=Object(i.a)({},l,{List:[],_FixedTypeList:[t]});N._ElementGroupList||(N._ElementGroupList=[]);var P=N._ElementGroupList.find((function(e){return(e.Group?e.Group.ID:e.ID)===l.ID}));P?(P._FixedTypeList||(P._FixedTypeList=[]),P._FixedTypeList.push(t)):N._ElementGroupList.push(j)}else{var B=n(r),V=Object(i.a)({},l,{List:[],_FixedTypeList:[t]});B._ElementGroupList.push(V),s(B)}}if(r&&c&&l&&(o||0===o)){var Y=e.find((function(e){return r.ID===e.Craft.ID}));if(Y){Y._ElementGroupList||(Y._ElementGroupList=[]);var R=Y._ElementGroupList.find((function(e){return(e.Group?e.Group.ID:e.ID)===l.ID}));if(R){var W=R.List.find((function(e){return(e.Element?e.Element.ID:e.ID)===c.ID}));if(W)W._FixedTypeList||(W._FixedTypeList=[]),W._FixedTypeList.push(t);else{var Z=Object(i.a)({},c,{_FixedTypeList:[t]});R.List.push(Z)}}else{var U=Object(i.a)({},l,{List:[Object(i.a)({},c,{_FixedTypeList:[t]})],_FixedTypeList:[]});Y._ElementGroupList.push(U)}}else{var J=n(r),X=Object(i.a)({},l,{List:[Object(i.a)({},c,{_FixedTypeList:[t]})],_FixedTypeList:[]});J._ElementGroupList.push(X),s(J)}}})),e},MultipleCheckedIDList:function(){return Array.isArray(this.checkedList)?this.checkedList.map((function(e){return e.StoredContent})):[]}},methods:{getName:function(e){return o.d.getProperyName(e)},onItemClick:function(e){e.StoredContent&&this.$emit("submit",e)},onCheckedItemChange:function(e,t){this.$emit("checked",e,t)}}},y=(n("e952"),Object(p.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mp-erp-common-comps-on-element-select-dialog-craft-type-show-item-comp-wrap"},e._l(e.craftTypeList,(function(t){return n("li",{key:t.StoredContent||t.Craft.ID},[e.isMultiple&&t.StoredContent?n("el-checkbox",{attrs:{value:e.MultipleCheckedIDList.includes(t.StoredContent)},on:{change:function(n){return e.onCheckedItemChange(n,t)}}},[e._v(e._s(t.Craft.Name))]):n("label",{staticClass:"is-element",class:{"is-disabled":t.StoredContent&&e.selectedElementIDs.includes(t.StoredContent),"no-element":!t.StoredContent},on:{click:function(n){return e.onItemClick(t)}}},[e._v(e._s(t.Craft.Name)+" "),t._ElementList||t._ElementGroupList?[e._v("：")]:e._e()],2),n("div",[n("ElementTypeShowComp",{attrs:{selectedElementIDs:e.selectedElementIDs,ElementList:t._ElementList,isMultiple:e.isMultiple,checkedList:e.checkedList},on:{submit:e.onItemClick,checked:e.onCheckedItemChange}}),n("ElementGroupTypeShowComp",{attrs:{selectedElementIDs:e.selectedElementIDs,ElementGroupList:t._ElementGroupList,isMultiple:e.isMultiple,checkedList:e.checkedList},on:{submit:e.onItemClick,checked:e.onCheckedItemChange}})],1)],1)})),0)}),[],!1,null,null,null)).exports,L={props:{dataList:{type:Array,default:function(){return[]}},selectedElementIDs:{type:Array,default:function(){return[]}},useType:{type:String,default:"condition"},isMultiple:{type:Boolean,default:!1},checkedList:{type:Array,default:function(){return[]}}},computed:{formulaMaterialList:function(){if(!this.dataList||"formula"!==this.useType||0===this.dataList.length)return[];var e=[];return this.dataList.forEach((function(t){var n=t.MaterialType,i=e.find((function(e){return e.MaterialType.ID===n.ID}));i?i.List.push(t):e.push({MaterialType:n,List:[t]})})),e},MultipleCheckedIDList:function(){return Array.isArray(this.checkedList)?this.checkedList.map((function(e){return e.StoredContent})):[]}},methods:{getName:function(e){return o.d.getProperyName(e)},onItemClick:function(e){this.$emit("submit",e)},onCheckedItemChange:function(e,t){this.$emit("checked",e,t)}}},C=(n("072a"),Object(p.a)(L,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mp-erp-common-comps-on-element-select-dialog-group-type-show-item-comp-wrap"},["formula"===e.useType?e._l(e.formulaMaterialList,(function(t){return n("li",{key:t.MaterialType.ID,staticClass:"formula-type"},[n("label",[e._v(e._s(t.MaterialType.Name)+"：")]),e._l(t.List,(function(t){return n("span",{key:t.Element.ID,staticClass:"is-element",class:{"is-disabled":t.StoredContent&&e.selectedElementIDs.includes(t.StoredContent)},on:{click:function(n){return e.onItemClick(t)}}},[e._v(e._s(e.getName(t)))])}))],2)})):e._l(e.dataList,(function(t){return n("li",{key:t.StoredContent||t.ID},[e.isMultiple&&t.StoredContent?n("el-checkbox",{attrs:{value:e.MultipleCheckedIDList.includes(t.StoredContent)},on:{change:function(n){return e.onCheckedItemChange(n,t)}}},[e._v(e._s(e.getName(t)))]):n("span",{staticClass:"is-element",class:{"has-child":t.FixedTypeList,disabled:!t.StoredContent,"is-disabled":t.StoredContent&&e.selectedElementIDs.includes(t.StoredContent)},on:{click:function(n){return e.onItemClick(t)}}},[e._v(e._s(e.getName(t)))]),t.FixedTypeList?n("div",[e._v(" （"),e._l(t.FixedTypeList,(function(t){return n("span",{key:t.StoredContent,staticClass:"blue-span",class:e.selectedElementIDs.includes(t.StoredContent)?"is-disabled":"",on:{click:function(n){return e.onItemClick(t)}}},[e._v(e._s(e.getName(t)))])})),e._v("） ")],2):e._e()],1)}))],2)}),[],!1,null,null,null)).exports,D={props:{dataList:{type:Array,default:function(){return[]}},ElementList:{type:Array,default:null},selectedElementIDs:{type:Array,default:function(){return[]}},isMultiple:{type:Boolean,default:!1},checkedList:{type:Array,default:function(){return[]}}},components:{ElementTypeShowComp:d,TipsSpanButton:a.a},computed:{localListData:function(){if(!this.dataList||!Array.isArray(this.dataList)||0===this.dataList.length)return null;var e={Element:[],Formula:[],Constraint:[]};return this.dataList.forEach((function(t){var n=t.Formula,i=t.Constraint;n&&!i?e.Formula.push(t):!n&&i?e.Constraint.push(t):e.Element.push(t)})),e},MultipleCheckedIDList:function(){return Array.isArray(this.checkedList)?this.checkedList.map((function(e){return e.StoredContent})):[]}},methods:{onSubmit:function(e){this.$emit("submit",e)},onCheckedItemChange:function(e,t){this.$emit("checked",e,t)},getTextName:function(e){return o.d.getProperyName(e)}}},b=(n("f0f1"),Object(p.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.localListData?n("div",{staticClass:"mp-erp-common-comps-on-element-select-dialog-part-type-show-item-comp-wrap"},[n("div",{staticClass:"element"},[e.isMultiple?e._l(e.localListData.Element,(function(t){return n("el-checkbox",{key:t.StoredContent,attrs:{value:e.MultipleCheckedIDList.includes(t.StoredContent)},on:{change:function(n){return e.onCheckedItemChange(n,t)}}},[e._v(e._s(e.getTextName(t)||t.DisplayContent||"未知名称"))])})):e._l(e.localListData.Element,(function(t){return n("TipsSpanButton",{key:t.StoredContent,attrs:{disabled:e.selectedElementIDs.includes(t.StoredContent),text:e.getTextName(t)||t.DisplayContent||"未知名称"},nativeOn:{click:function(n){return e.onSubmit(t)}}})}))],2),e.localListData.Formula.length>0?n("p",{staticClass:"title mp-common-title-wrap"},[e._v("公式")]):e._e(),n("ElementTypeShowComp",{attrs:{dataList:e.localListData.Formula,selectedElementIDs:e.selectedElementIDs,isMultiple:e.isMultiple,checkedList:e.checkedList},on:{submit:e.onSubmit,checked:e.onCheckedItemChange}}),e.localListData.Constraint.length>0?n("p",{staticClass:"title mp-common-title-wrap"},[e._v("子条件")]):e._e(),n("ElementTypeShowComp",{attrs:{dataList:e.localListData.Constraint,selectedElementIDs:e.selectedElementIDs,isMultiple:e.isMultiple,checkedList:e.checkedList},on:{submit:e.onSubmit,checked:e.onCheckedItemChange}})],1):e._e()}),[],!1,null,null,null)).exports,I={components:{CommonDialogComp:r.a,TipsSpanButton:a.a,ElementGroupTypeShowComp:f,ElementTypeShowComp:d,CraftTypeShowComp:y,MaterialTypeShowComp:C,PartTypeShowComp:b},props:{visible:{type:Boolean,default:!1},list:{type:Array,default:function(){return[]}},selectedElementIDs:{type:Array,default:function(){return[]}},useType:{type:String,default:"condition"},DialogTitle:{type:String,default:""},showConstant:{type:Boolean,default:!1},curTargetID:{type:String,default:""},fixedPartName:{type:String,default:""},isMultiple:{type:Boolean,default:!1},title:{type:String,default:"添加元素"},freeText:{type:String,default:"常量"},MultipleCheckedList:{type:Array,default:function(){return[]}}},data:function(){return{propertyData:null,panelRadio:"",panelList:[],tempTabList:[{label:"产品",value:"ProductProperty"},{label:"物料",value:"MaterialProperty"}],MultipleList:[],ExcludeShowTitleTypeList:[7,10]}},computed:{showData:function(){if(this.propertyData&&this.panelRadio){if(this.propertyData[this.panelRadio])return this.propertyData[this.panelRadio];if(this.propertyData.PartProperty&&this.propertyData.PartProperty[this.panelRadio])return this.propertyData.PartProperty[this.panelRadio]}return null},MultipleCheckedIDList:function(){return Array.isArray(this.MultipleList)?this.MultipleList.map((function(e){return e.StoredContent})):[]}},methods:{onSubmit:function(e){this.selectedElementIDs.includes(e.StoredContent)||(this.$emit("submit",e),this.onCancle())},onChecked:function(e,t){e?this.MultipleList.push(t):this.MultipleList=this.MultipleList.filter((function(e){return e.StoredContent!==t.StoredContent}))},onCancle:function(){this.$emit("update:visible",!1)},getInitListData:function(){var e=this;if(this.panelList=[],o.b&&this.list){var t={ProductProperty:[],PartProperty:{},MaterialProperty:[]};this.list.forEach((function(n){if(n.Product&&n.Product.ID&&!n.Part)n.Product.ID===e.curTargetID&&e.tempTabList&&e.tempTabList[0].label&&(e.tempTabList[0].label.includes("（当前）")||(e.tempTabList[0].label+="（当前）")),t.ProductProperty.push(n);else if(n.Product&&n.Product.ID&&n.Part&&n.Part.ID){var i=n.Part.Name||n.Part.ID;e.curTargetID===n.Part.ID&&(i+="（当前目标）"),t.PartProperty[i]&&Array.isArray(t.PartProperty[i])?t.PartProperty[i].push(n):t.PartProperty[i]=[n]}else 0===n.Module&&t.MaterialProperty.push(n)}));var n=this.protertyFilterHelper(t);if(this.propertyData=n,Object.keys(n).length>0){var i=Object.keys(n),r=Object(s.a)(i,1)[0];if(Array.isArray(n[r]))this.panelRadio=r;else if("[object Object]"===Object.prototype.toString.call(n[r])){var a=Object.keys(n[r]),l=Object(s.a)(a,1)[0];Array.isArray(n[r][l])&&(this.panelRadio=l)}}this.fixedPartName&&(this.panelRadio="产品"===this.fixedPartName?"ProductProperty":this.fixedPartName)}},protertyFilterHelper:function(e){var t=this,n={};return Object.keys(e).forEach((function(s){if(Array.isArray(e[s])&&e[s].length>0){n[s]=t.protertySeparateHelper(e[s]);var r=t.tempTabList.find((function(e){return e.value===s}));r&&t.panelList.push(Object(i.a)({},r))}if("[object Object]"===Object.prototype.toString.call(e[s])&&Object.keys(e[s]).length>0){var a={};Object.keys(e[s]).forEach((function(n){(a[n]=t.protertySeparateHelper(e[s][n]),"PartProperty"===s)&&(t.panelList.find((function(e){return e.value===n}))||t.panelList.push({label:n,value:n}))})),n[s]=a}})),n},protertySeparateHelper:function(e){var t=JSON.parse(JSON.stringify(e)),n={};t.forEach((function(e){n[e.Type]&&Array.isArray(n[e.Type])?n[e.Type].push(e):n[e.Type]=[e]}));var i=[];return Object.keys(n).forEach((function(e){i.push({Type:+e,list:n[e]})})),i},onOpen:function(){this.getInitListData(),this.setMultipleListInit()},setMultipleListInit:function(){this.MultipleList=this.MultipleCheckedList.filter((function(e){return e.StoredContent}))},getTitle:function(e){var t=this;if(this.ExcludeShowTitleTypeList.includes(e))return"";var n=o.b.find((function(t){return t.ID===e}));if(n){if(0!==e)return n.nickName;var i=l.a.find((function(e){return e.type===t.panelRadio}));return i?"".concat(i.label).concat(n.nickName):n.label}return""},getTextName:function(e){return o.d.getProperyName(e)},onConstantClick:function(){this.$emit("submit",null),this.onCancle()},onMultipleSubmit:function(){this.$emit("select",this.MultipleList)}}},v=(n("4944"),Object(p.a)(I,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("CommonDialogComp",{staticClass:"mp-erp-common-comps-formula-panel-comp-element-select-comp-wrap",attrs:{width:"850px",top:"10vh",title:e.title,visible:e.visible,showSubmit:e.isMultiple,cancelText:"关闭"},on:{"update:visible":function(t){e.visible=t},cancle:e.onCancle,open:e.onOpen,submit:e.onMultipleSubmit}},[i("section",{staticClass:"show-panel-box"},[i("header",[e.panelList.length>1&&!e.fixedPartName?i("el-radio-group",{staticClass:"mp-common-tab-radio-box",attrs:{size:"mini"},model:{value:e.panelRadio,callback:function(t){e.panelRadio=t},expression:"panelRadio"}},e._l(e.panelList,(function(t){return i("el-radio-button",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1):e.DialogTitle?i("p",[e._v(e._s(e.DialogTitle))]):e._e()],1),e.showData?i("main",[e._l(e.showData,(function(t){return i("div",{key:t.Type},[e.getTitle(t.Type)?i("span",{staticClass:"title mp-common-title-wrap"},[e._v(e._s(e.getTitle(t.Type)))]):e._e(),2===t.Type?i("ElementGroupTypeShowComp",{attrs:{dataList:t.list,selectedElementIDs:e.selectedElementIDs,isMultiple:e.isMultiple,checkedList:e.MultipleList},on:{submit:e.onSubmit,checked:e.onChecked}}):3===t.Type?i("ElementTypeShowComp",{attrs:{dataList:t.list,selectedElementIDs:e.selectedElementIDs,isMultiple:e.isMultiple,checkedList:e.MultipleList},on:{submit:e.onSubmit,checked:e.onChecked}}):4===t.Type?i("CraftTypeShowComp",{attrs:{dataList:t.list,selectedElementIDs:e.selectedElementIDs,isMultiple:e.isMultiple,checkedList:e.MultipleList},on:{submit:e.onSubmit,checked:e.onChecked}}):5===t.Type?i("MaterialTypeShowComp",{attrs:{useType:e.useType,dataList:t.list,selectedElementIDs:e.selectedElementIDs,isMultiple:e.isMultiple,checkedList:e.MultipleList},on:{submit:e.onSubmit,checked:e.onChecked}}):6===t.Type?i("ElementGroupTypeShowComp",{attrs:{dataList:t.list,selectedElementIDs:e.selectedElementIDs,isMultiple:e.isMultiple,checkedList:e.MultipleList},on:{submit:e.onSubmit,checked:e.onChecked}}):7===t.Type||10===t.Type?i("PartTypeShowComp",{attrs:{dataList:t.list,selectedElementIDs:e.selectedElementIDs,isMultiple:e.isMultiple,checkedList:e.MultipleList},on:{submit:e.onSubmit,checked:e.onChecked}}):i("div",[e.isMultiple?e._l(t.list,(function(t){return i("el-checkbox",{key:t.StoredContent,attrs:{value:e.MultipleCheckedIDList.includes(t.StoredContent)},on:{change:function(n){return e.onChecked(n,t)}}},[e._v(e._s(e.getTextName(t)||t.DisplayContent||"未知名称"))])})):e._l(t.list,(function(t){return i("TipsSpanButton",{key:t.StoredContent,attrs:{disabled:e.selectedElementIDs.includes(t.StoredContent),text:e.getTextName(t)||t.DisplayContent||"未知名称"},nativeOn:{click:function(n){return e.onSubmit(t)}}})}))],2)],1)})),e.showConstant?i("p",{staticClass:"constant"},[e.showConstant?i("span",{staticClass:"blue-span",on:{click:e.onConstantClick}},[e._v(e._s(e.freeText))]):e._e()]):e._e()],2):i("main",{staticClass:"null-box"},[i("img",{attrs:{src:n("5731"),alt:""}}),i("p",{staticClass:"is-font-size-12 is-gray"},[e._v("暂无数据，请先添加")])])])])}),[],!1,null,null,null));t.a=v.exports},ad32:function(e,t,n){"use strict";var i={model:{prop:"value",event:"change"},props:{visible:{type:Boolean,default:!1},title:{type:String,default:"提示"},width:{default:"30%"},top:{type:String,default:"15vh"},showSubmit:{type:Boolean,default:!0},submitText:{type:String,default:"保存"},dangerText:{type:String,default:"重新生成"},cancelText:{type:String,default:"取消"},disabled:{type:Boolean,default:!1},showDanger:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{dialogVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}}},data:function(){return{checkList:[]}},methods:{onCancleClick:function(){this.$emit("cancle")},onSubmitClick:function(e){this.dialogVisible&&("BUTTON"===e.target.nodeName?e.target.blur():"BUTTON"===e.target.parentNode.nodeName&&e.target.parentNode.blur(),this.$emit("submit"))},onDangerClick:function(){this.$emit("danger")},onOpen:function(){this.$emit("open")},onOpened:function(){this.$emit("opened")},onClose:function(){this.$emit("close")},onClosed:function(){this.$emit("closed")}}},s=(n("468e"),n("2877")),r=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"mp-img-style-header mp-erp-common-dialog-comp-wrap",attrs:{title:e.title,visible:e.dialogVisible,"close-on-click-modal":!1,width:e.width,top:e.top,modal:!1,"before-close":e.onCancleClick},on:{"update:visible":function(t){e.dialogVisible=t},open:e.onOpen,opened:e.onOpened,close:e.onClose,closed:e.onClosed}},[e._t("default"),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.$slots["foot-tip"]?n("div",[e._t("foot-tip")],2):e._e(),n("p",[e.showSubmit?n("el-button",{attrs:{type:"primary",loading:e.loading,disabled:e.disabled},on:{click:e.onSubmitClick}},[e._v(e._s(e.loading?"加载中":e.submitText))]):e._e(),e.showDanger?n("el-button",{attrs:{type:"danger"},on:{click:e.onDangerClick}},[e._v(e._s(e.dangerText))]):e._e(),n("el-button",{on:{click:e.onCancleClick}},[e._v(e._s(e.cancelText))])],1)])],2)}),[],!1,null,null,null);t.a=r.exports},dbd1:function(e,t,n){},e363:function(e,t,n){"use strict";var i=n("dbd1");n.n(i).a},e952:function(e,t,n){"use strict";var i=n("feaa");n.n(i).a},f0f1:function(e,t,n){"use strict";var i=n("7dfd");n.n(i).a},feaa:function(e,t,n){}}]);