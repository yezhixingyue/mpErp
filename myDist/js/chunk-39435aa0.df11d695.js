(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-39435aa0"],{"2bab":function(t,e,n){"use strict";var i=(n("7db0"),n("caad"),n("2532"),{model:{prop:"value",event:"change"},props:{InputContent:{type:String,default:""},Allow:{type:Boolean,default:!1},value:{}},computed:{options:function(){return this.InputContent?this.$utils.getNumberValueList(this.InputContent):[]},content:{get:function(){return this.value},set:function(t){this.$emit("change",t)}},placeholder:function(){return 0===this.options.length&&this.Allow?"请输入数字":this.options.length>0&&!this.Allow?"请选择选项":this.options.length>0&&this.Allow?"请选择或输入数字":""}},methods:{onBlur:function(t){this.$emit("change",t.target.value)}},mounted:function(){var t=this;if(this.Allow&&this.$refs.oSelect){var e=this.$refs.oSelect.onInputChange,n=this.$refs.oSelect.$children.find((function(t){return t.$el.className.includes("el-input")}));this.$refs.oSelect.onInputChange=function(){n&&t.$emit("change",n.value),e()}}}}),r=(n("75a9"),n("2877")),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.InputContent?n("el-select",{ref:"oSelect",staticClass:"mp-erp-number-type-element-display-select-comp",attrs:{filterable:t.Allow,"default-first-option":"","allow-create":t.Allow,placeholder:t.placeholder,size:"small"},nativeOn:{blur:function(e){return t.onBlur(e)},change:function(e){return t.onBlur(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}},t._l(t.options,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1):n("el-input",{staticClass:"mp-erp-number-type-element-display-input-comp",attrs:{size:"small",maxlength:"9"},model:{value:t.content,callback:function(e){t.content="string"==typeof e?e.trim():e},expression:"content"}})}),[],!1,null,null,null);e.a=o.exports},"2bd3":function(t,e,n){"use strict";var i=(n("99af"),n("7db0"),n("c740"),n("4160"),n("a15b"),n("d81d"),n("fb6a"),n("a434"),n("d3b7"),n("25f0"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("3835")),r=n("5530"),o=n("53ca"),s=n("2909"),a=n("2bab"),l=n("3d96"),u=(n("cb29"),n("caad"),n("c975"),n("2532"),n("247a")),c=function(t,e){if(!t&&0!==t)return{msg:"值未设置",result:!1};var n=e.Type,i=e.NumbericAttribute,r=e.OptionAttribute,o=e.HiddenToCustomer;if(1===n){var s=i.AllowDecimal,a=i.SectionList,l=i.InputContent,c=i.Allow,f=i.AllowCustomer;if(!Object(u.h)(t,!s))return{msg:"输入值错误，请输入正确的数字类型（".concat(s?"允许小数":"不允许小数","）"),result:!1};if(a&&Array.isArray(a)&&a.length>0){var d=Object(u.f)(l);if(d.includes("".concat(t)))return{msg:"",result:!0};if(!c&&!d.includes("".concat(t)))return{msg:"值不正确，不允许自定义，请从".concat(d,"中取值"),result:!1};if(!f&&!o&&!d.includes("".concat(t)))return{msg:"值不正确，不允许客户自定义，请从".concat(d,"中取值"),result:!1};for(var p=!1,h=0;h<a.length;h+=1){var m=a[h],v=m.MinValue,g=m.MaxValue,b=m.IsGeneralValue,y=m.Increment;if(+t>v&&(+t<=g||-1===g)){if(p=!0,!b){var S=y.toString().indexOf(".");S=-1===S?0:y.toString().length-S-1;var x=new Array(S);if(x.fill("0"),(+t*(S="1".concat(x.join("")))-v*S)%(y*S)!=0)return{msg:"输入值不合法，（".concat(v,", ").concat(g,"]区间内应符合增量为").concat(y),result:!1}}if(b)return{msg:"输入值不合法，（".concat(v,", ").concat(g,"]区间内应从").concat(d,"对应区间中取值"),result:!1}}}if(!p){return{msg:"输入值不合法，不在分段控制范围内",result:!1}}}return{msg:"",result:!0}}if(2===n){var w=r.Allow,k=r.OptionList.map((function(t){return t.ID}));return w||k.includes(t)?{msg:"",result:!0}:{msg:"该选项元素不允许自定义",result:!1}}return{msg:"",result:!0}},f=n("7775"),d={props:{Elements:{type:Array,default:function(){return[]}},List:{type:Array,default:function(){return[]}},sizeTemp:{type:Object,default:null},hiddenName:{type:Boolean,default:!1},hiddenSort:{type:Boolean,default:!1},hiddenCustomerSet:{type:Boolean,default:!1},canEmpty:{type:Boolean,default:!1}},components:{NumberTypeItemComp:a.a,OptionTypeItemComp:l.a},computed:{autoWidth:function(){return 0===this.ElementList.length?"100%":"".concat(100/this.ElementList.length,"%")}},data:function(){return{SizeList:[],ElementList:[],sizeTemplate:null}},methods:{onSubmit:function(){var t,e=this;if(0===this.SizeList.length&&!this.canEmpty)return this.setErrorAndReturn("至少需设置一行固定尺寸");if(!this.hiddenName){if((t=this.SizeList.findIndex((function(t){return!t.Name})))>-1)return this.setErrorAndReturn("第".concat(t+1,"行未设置名称"));if((t=this.SizeList.findIndex((function(t){return!f.f.test(t.Name)})))>-1)return this.setErrorAndReturn("第".concat(t+1,"行名称不合法，名称仅支持中文、英文(全角/半角)、+-_(全角/半角)、数字(全角/半角)"));var n=this.SizeList.map((function(t){return t.Name}));if(n.length>Object(s.a)(new Set(n)).length)return this.setErrorAndReturn("存在重复名称，请检查")}for(var i=0;i<this.SizeList.length;i+=1)for(var r=this.SizeList[i].List,a=function(t){var n=r[t],o=n.First,s=n.Second,a=e.ElementList.find((function(t){var e=t.ID;return o===e}));if(a){var l=c(s,a),u=l.result,f=l.msg;if(!u)return{v:e.setErrorAndReturn("第".concat(i+1,"行").concat(a.Name).concat(f))}}},l=0;l<r.length;l+=1){var u=a(l);if("object"===Object(o.a)(u))return u.v}var d=this.SizeList.map((function(t){return t.List})).map((function(t){return t.map((function(t){return t.Second})).join("")}));return d.length>Object(s.a)(new Set(d)).length?this.setErrorAndReturn("存在设置项重复，请检查"):this.SizeList},setErrorAndReturn:function(t){return this.messageBox.failSingleError("保存失败",t),!1},onAddClick:function(){var t=JSON.parse(JSON.stringify(this.sizeTemplate)),e=this.SizeList.length,n=Math.random().toString(36).slice(-10),i=Object(r.a)({},t,{Index:e,key:n});this.SizeList.push(i)},onOptionMove:function(t,e){var n=this.SizeList.splice(e,1),r=Object(i.a)(n,1)[0],o="up"===t?e-1:e+1;this.SizeList.splice(o,0,r),this.SizeList.forEach((function(t,e){t.Index=e}))},onItemRemove:function(t){this.SizeList.splice(t,1)}},mounted:function(){this.SizeList=JSON.parse(JSON.stringify(this.List)),this.ElementList=JSON.parse(JSON.stringify(this.Elements)),this.sizeTemplate=JSON.parse(JSON.stringify(this.sizeTemp))}},p=(n("fa4a"),n("2877")),h=Object(p.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mp-erp-comps-pruduct-module-general-size-set-dialog-size-add-panel-comp-wrap"},[n("p",{staticClass:"btn-box"},[n("el-button",{staticClass:"border-blue-btn",attrs:{size:"mini"},on:{click:t.onAddClick}},[t._v("+ 添加一行")])],1),t.ElementList.length>0?n("div",[n("div",{staticClass:"header"},[t.hiddenName?t._e():n("span",{staticStyle:{width:"150px","padding-right":"6px"}},[t._v("名称")]),n("div",t._l(t.ElementList,(function(e){return n("span",{key:e.ID,style:"width:"+t.autoWidth,attrs:{title:e.Name}},[t._v(t._s(e.Name)),e.Unit?n("i",[t._v("（"+t._s(e.Unit)+"）")]):t._e()])})),0),t.hiddenCustomerSet?t._e():n("span",{staticStyle:{width:"90px"}},[t._v("客户隐藏")]),n("span",{staticStyle:{width:"210px"}},[t._v("操作")])]),n("ul",t._l(t.SizeList,(function(e,i){return n("li",{key:e.key||e.ID,staticClass:"content-item"},[t.hiddenName?t._e():n("el-input",{staticClass:"name",attrs:{maxlength:"20",size:"small"},model:{value:e.Name,callback:function(n){t.$set(e,"Name","string"==typeof n?n.trim():n)},expression:"item.Name"}}),n("ul",{staticClass:"flex-content"},t._l(t.ElementList,(function(i,r){return n("li",{key:i.ID,style:"width:"+t.autoWidth},[1===i.Type?n("NumberTypeItemComp",{attrs:{InputContent:"",Allow:i.NumbericAttribute.Allow},model:{value:e.List[r].Second,callback:function(n){t.$set(e.List[r],"Second",n)},expression:"item.List[i].Second"}}):t._e(),2===i.Type?n("OptionTypeItemComp",{attrs:{options:i.OptionAttribute.OptionList,Allow:i.OptionAttribute.Allow,canRadio:!1},model:{value:e.List[r].Second,callback:function(n){t.$set(e.List[r],"Second",n)},expression:"item.List[i].Second"}}):t._e()],1)})),0),t.hiddenCustomerSet?t._e():n("el-checkbox",{model:{value:e.HiddenToCustomer,callback:function(n){t.$set(e,"HiddenToCustomer",n)},expression:"item.HiddenToCustomer"}},[t._v("隐藏")]),n("div",{staticClass:"ctrl"},[n("span",{staticClass:"del-btn",on:{click:function(e){return t.onItemRemove(i)}}},[n("i"),t._v(" 删除")]),t.hiddenSort?t._e():n("div",[n("span",{directives:[{name:"show",rawName:"v-show",value:i<t.SizeList.length-1,expression:"index < SizeList.length - 1"}],on:{click:function(e){return t.onOptionMove("down",i)}}},[n("i",{staticClass:"el-icon-bottom"}),t._v(" 下移")])]),t.hiddenSort?t._e():n("div",[n("span",{directives:[{name:"show",rawName:"v-show",value:i>0,expression:"index > 0"}],on:{click:function(e){return t.onOptionMove("up",i)}}},[n("i",{staticClass:"el-icon-top"}),t._v(" 上移")])])])],1)})),0)]):t._e()])}),[],!1,null,null,null);e.a=h.exports},"3d96":function(t,e,n){"use strict";var i={model:{prop:"value",event:"change"},props:{placeholder:{type:String,default:"请选择"},value:{},options:{type:Array,default:function(){return[]}},canRadio:{type:Boolean,default:!0},Allow:{type:Boolean,default:!1},SelectMode:{}},computed:{checkVal:{get:function(){return this.value},set:function(t){this.$emit("change",t)}}},methods:{onBlur:function(t){this.Allow&&this.$emit("change",t.target.value)}}},r=(n("a903"),n("2877")),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return!t.canRadio||t.options.length>3||t.Allow||1===t.SelectMode?n("el-select",{staticClass:"mp-erp-option-type-element-display-select-comp",attrs:{placeholder:t.placeholder,"default-first-option":"","allow-create":t.Allow,filterable:t.Allow,size:"small"},nativeOn:{blur:function(e){return t.onBlur(e)},change:function(e){return t.onBlur(e)}},model:{value:t.checkVal,callback:function(e){t.checkVal=e},expression:"checkVal"}},t._l(t.options,(function(t){return n("el-option",{key:t.ID,attrs:{label:t.Name,value:t.ID}})})),1):n("el-radio-group",{model:{value:t.checkVal,callback:function(e){t.checkVal=e},expression:"checkVal"}},t._l(t.options,(function(e){return n("el-radio",{key:e.ID,attrs:{label:e.ID}},[t._v(t._s(e.Name))])})),1)}),[],!1,null,null,null);e.a=o.exports},6062:function(t,e,n){"use strict";var i=n("6d61"),r=n("6566");t.exports=i("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,n){"use strict";var i=n("9bf2").f,r=n("7c73"),o=n("e2cc"),s=n("0366"),a=n("19aa"),l=n("2266"),u=n("7dd0"),c=n("2626"),f=n("83ab"),d=n("f183").fastKey,p=n("69f3"),h=p.set,m=p.getterFor;t.exports={getConstructor:function(t,e,n,u){var c=t((function(t,i){a(t,c,e),h(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),f||(t.size=0),null!=i&&l(i,t[u],t,n)})),p=m(e),v=function(t,e,n){var i,r,o=p(t),s=g(t,e);return s?s.value=n:(o.last=s={index:r=d(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=s),i&&(i.next=s),f?o.size++:t.size++,"F"!==r&&(o.index[r]=s)),t},g=function(t,e){var n,i=p(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(c.prototype,{clear:function(){for(var t=p(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,f?t.size=0:this.size=0},delete:function(t){var e=this,n=p(e),i=g(e,t);if(i){var r=i.next,o=i.previous;delete n.index[i.index],i.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==i&&(n.first=r),n.last==i&&(n.last=o),f?n.size--:e.size--}return!!i},forEach:function(t){for(var e,n=p(this),i=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(i(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!g(this,t)}}),o(c.prototype,n?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return v(this,0===t?0:t,e)}}:{add:function(t){return v(this,t=0===t?0:t,t)}}),f&&i(c.prototype,"size",{get:function(){return p(this).size}}),c},setStrong:function(t,e,n){var i=e+" Iterator",r=m(e),o=m(i);u(t,e,(function(t,e){h(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){for(var t=o(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),c(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("94ca"),s=n("6eeb"),a=n("f183"),l=n("2266"),u=n("19aa"),c=n("861d"),f=n("d039"),d=n("1c7e"),p=n("d44e"),h=n("7156");t.exports=function(t,e,n){var m=-1!==t.indexOf("Map"),v=-1!==t.indexOf("Weak"),g=m?"set":"add",b=r[t],y=b&&b.prototype,S=b,x={},w=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(v&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(v&&!c(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof b||!(v||y.forEach&&!f((function(){(new b).entries().next()})))))S=n.getConstructor(e,t,m,g),a.REQUIRED=!0;else if(o(t,!0)){var k=new S,z=k[g](v?{}:-0,1)!=k,A=f((function(){k.has(1)})),L=d((function(t){new b(t)})),C=!v&&f((function(){for(var t=new b,e=5;e--;)t[g](e,e);return!t.has(-0)}));L||((S=e((function(e,n){u(e,S,t);var i=h(new b,e,S);return null!=n&&l(n,i[g],i,m),i}))).prototype=y,y.constructor=S),(A||C)&&(w("delete"),w("has"),m&&w("get")),(C||z)&&w(g),v&&y.clear&&delete y.clear}return x[t]=S,i({global:!0,forced:S!=b},x),p(S,t),v||n.setStrong(S,t,m),S}},"75a9":function(t,e,n){"use strict";var i=n("8012");n.n(i).a},8012:function(t,e,n){},"81d5":function(t,e,n){"use strict";var i=n("7b0b"),r=n("23cb"),o=n("50c4");t.exports=function(t){for(var e=i(this),n=o(e.length),s=arguments.length,a=r(s>1?arguments[1]:void 0,n),l=s>2?arguments[2]:void 0,u=void 0===l?n:r(l,n);u>a;)e[a++]=t;return e}},"9c17":function(t,e,n){},a903:function(t,e,n){"use strict";var i=n("f24b");n.n(i).a},bb2f:function(t,e,n){var i=n("d039");t.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},cb29:function(t,e,n){var i=n("23e7"),r=n("81d5"),o=n("44d2");i({target:"Array",proto:!0},{fill:r}),o("fill")},f183:function(t,e,n){var i=n("d012"),r=n("861d"),o=n("5135"),s=n("9bf2").f,a=n("90e3"),l=n("bb2f"),u=a("meta"),c=0,f=Object.isExtensible||function(){return!0},d=function(t){s(t,u,{value:{objectID:"O"+ ++c,weakData:{}}})},p=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,u)){if(!f(t))return"F";if(!e)return"E";d(t)}return t[u].objectID},getWeakData:function(t,e){if(!o(t,u)){if(!f(t))return!0;if(!e)return!1;d(t)}return t[u].weakData},onFreeze:function(t){return l&&p.REQUIRED&&f(t)&&!o(t,u)&&d(t),t}};i[u]=!0},f24b:function(t,e,n){},fa4a:function(t,e,n){"use strict";var i=n("9c17");n.n(i).a}}]);