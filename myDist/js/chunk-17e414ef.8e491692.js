(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-17e414ef"],{"1c31":function(t,e,i){"use strict";i.r(e);var o=(i("99af"),i("b0c0"),i("2909")),n=i("5530"),a=i("2f62"),s={name:"QuotationSchemeSet",components:{FormulaPanelComp:i("7961").a},computed:Object(n.a)({},Object(a.e)("priceManage",["curPriceItem","curQuotationSchemeData"]),{curQuotationSchemeName:function(){return this.curQuotationSchemeData?this.curQuotationSchemeData.Name:"新加方案"},Condition4getFormulaProperty:function(){return{ProductID:this.ProductID,PriceID:this.PriceID,UseModule:6}}}),data:function(){return{PriceID:"",PriceName:"",ProductID:"",ProductName:""}},methods:{onGoBackClick:function(t){"success"===t?this.$router.push({name:"QuotationScheme",params:Object(n.a)({},this.$route.params,{timer:Date.now()})}):this.$goback()},onSuccessSubmit:function(t){t&&this.$store.commit("priceManage/setPriceItemSolutionListChange",[this.ProductID,this.PriceID].concat(Object(o.a)(t)))}},mounted:function(){if(this.curPriceItem){var t=this.curPriceItem,e=t.ID,i=t.Name;this.PriceID=e,this.PriceName=i,this.ProductID=this.$route.params.id,this.ProductName=this.$route.params.name}else this.$goback()}},c=(i("dd7a"),i("2877")),r=Object(c.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.ProductID?i("FormulaPanelComp",{staticClass:"mp-erp-product-module-formula-set-page-wrap mp-erp-price-module-quotation-scheme-set-page-wrap",attrs:{PositionID:t.ProductID,PriceID:t.PriceID,PositionType:"ProductID",moduleIndex:6,NowEditFormulaData:t.curQuotationSchemeData,pageTitle:t.ProductName,Condition4getProperty:t.Condition4getFormulaProperty,pageLabel:"当前产品",FormulaLabel:"报价方案名称",hiddenUnit:""},on:{goback:t.onGoBackClick,successSubmit:t.onSuccessSubmit},scopedSlots:t._u([{key:"title",fn:function(){return[i("span",{staticClass:"name"},[t._v("价格名称："+t._s(t.PriceName))]),i("span",{staticClass:"name"},[t._v("报价方案："+t._s(t.curQuotationSchemeName))])]},proxy:!0}],null,!1,2281567826)}):t._e()}),[],!1,null,null,null);e.default=r.exports},3351:function(t,e,i){},6173:function(t,e,i){"use strict";var o=i("e5ca");i.n(o).a},"6e84":function(t,e,i){"use strict";var o={props:{leftWidth:{type:String,default:"49%"},single:{type:Boolean,default:!1}},data:function(){return{leftW:"48%",offsetWidth:0,oLeft:null,moving:!1,distance:7,initPageX:0}},methods:{onLineDown:function(t){!this.oLeft&&this.$refs.oLeft&&(this.oLeft=this.$refs.oLeft),this.oLeft&&(this.offsetWidth=this.oLeft.offsetWidth,document.addEventListener("mousemove",this.onLineMove),document.addEventListener("mouseup",this.onLineUp),this.moving=!0,this.distance=t.offsetX,this.initPageX=t.pageX),t.preventDefault()},onLineMove:function(t){this.leftW="".concat(t.pageX-this.initPageX-this.distance+this.offsetWidth,"px")},onLineUp:function(){document.removeEventListener("mousemove",this.onLineMove),document.removeEventListener("mouseup",this.onLineUp),this.moving=!1}},created:function(){this.leftW=this.leftWidth}},n=(i("6173"),i("2877")),a=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{ref:"oWrap",staticClass:"mp-erp-common-comps-left-and-right-width-drap-auto-change-comp-wrap"},[i("div",{ref:"oLeft",staticClass:"left mp-scroll-wrap",style:"width:"+t.leftW},[t._t("left")],2),t.single?t._e():i("span",{staticClass:"vertical-line",class:t.moving?"moving":"",on:{mousedown:t.onLineDown}},[i("i")]),i("div",{staticClass:"right mp-scroll-wrap"},[t._t("right")],2)])}),[],!1,null,null,null);e.a=a.exports},dd7a:function(t,e,i){"use strict";var o=i("3351");i.n(o).a},e5ca:function(t,e,i){}}]);