import{d as c,k as l,o as d,b as i,cd as f,e as s,cA as u,cB as p,cf as m}from"./index-iLhBIVOw.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const v=c({name:"IconFont",props:{icon:{type:String,default:""},shadow:{type:Boolean,default:!1},verticalCenter:{type:Boolean,default:!1},cursor:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){return{getClassName:l(()=>{const a=[];return e.verticalCenter&&a.push("middle"),e.cursor&&a.push("cursor"),e.disabled&&a.push("disabled"),a}),handleClick:()=>{!e.disabled&&t("click")},getAttrs:()=>{const a={};return e.shadow&&(a.filter="url(#drop-shadow)"),a}}}}),h=["xlink:href"];function C(e,t,o,r,n,a){return d(),i("svg",{class:m(["icon-font",e.getClassName]),"aria-hidden":"true",onClick:t[0]||(t[0]=k=>e.handleClick())},[t[1]||(t[1]=f('<filter id="drop-shadow" xmlns="http://www.w3.org/2000/svg" data-v-70c8c726><feGaussianBlur in="SourceAlpha" stdDeviation="2" data-v-70c8c726></feGaussianBlur><feOffset dx="1" dy="1" result="offsetblur" data-v-70c8c726></feOffset><feComponentTransfer data-v-70c8c726><feFuncA type="linear" slope="0.2" data-v-70c8c726></feFuncA></feComponentTransfer><feMerge data-v-70c8c726><feMergeNode data-v-70c8c726></feMergeNode><feMergeNode in="SourceGraphic" data-v-70c8c726></feMergeNode></feMerge></filter>',1)),s("g",u(p(e.getAttrs())),[s("use",{"xlink:href":"#"+e.icon},null,8,h)],16)],2)}const _=g(v,[["render",C],["__scopeId","data-v-70c8c726"]]);export{_};
