(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-72118915"],{"588f":function(e,t,n){},f9a5:function(e,t,n){"use strict";var a=n("588f");n.n(a).a},fd55:function(e,t,n){"use strict";n.r(t);var a=(n("96cf"),n("1da1")),s=n("3835"),o=n("5530"),r=n("05f6"),i=n("2f62"),c={name:"ElementTemplatePage",components:{CommonElementSetComp:r.a},data:function(){return{isLoadingElement:!1,isLoadingGroup:!1}},computed:Object(o.a)({},Object(i.e)("basicSet",["ElementDataList","ElementGroupDataList"])),methods:{handleEditSubmitSuccess:function(e){var t=e.saveType,n=e.editData,a=e.ID;this.$store.commit("basicSet/setElementItemSave",{saveType:t,editData:n,ID:a})},onElementRemove:function(e){var t=Object(s.a)(e,1)[0];this.$store.dispatch("basicSet/getElementRemove",t)},getElementList:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoadingElement=!0,t.next=3,e.$store.dispatch("basicSet/getElementList");case 3:e.isLoadingElement=!1;case 4:case"end":return t.stop()}}),t)})))()},handleGroupSaveSuccess:function(e){var t=e.saveType,n=e.editData,a=e.ID;this.$store.commit("basicSet/setElementGroupItemSave",{saveType:t,editData:n,ID:a})},onElementGroupRemove:function(e){var t=this,n=Object(s.a)(e,2),o=n[0],r=n[1];return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.dispatch("basicSet/getElementGroupRemove",[o,r]);case 1:case"end":return e.stop()}}),e)})))()},getElementGroupList:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoadingGroup=!0,t.next=3,e.$store.dispatch("basicSet/getElementGroupList");case 3:e.isLoadingGroup=!1;case 4:case"end":return t.stop()}}),t)})))()},handleSortSuccess:function(e){this.$store.commit("basicSet/setElementGroupElementListBySort",e)}},mounted:function(){this.getElementList(),this.getElementGroupList()}},m=(n("f9a5"),n("2877")),u=Object(m.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"mp-erp-basic-setup-element-set-common-comp-wrap"},[n("header"),n("CommonElementSetComp",{attrs:{ElementDataList:e.ElementDataList,ElementGroupDataList:e.ElementGroupDataList,isLoadingElement:e.isLoadingElement,isLoadingGroup:e.isLoadingGroup,isCommon:!0},on:{saveElement:e.handleEditSubmitSuccess,removeElement:e.onElementRemove,saveElementGroup:e.handleGroupSaveSuccess,removeElementGroup:e.onElementGroupRemove,sortGroupElementList:e.handleSortSuccess}})],1)}),[],!1,null,null,null);t.default=u.exports}}]);