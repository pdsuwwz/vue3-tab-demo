import{_ as x}from"./index-CVjN2ueZ.js";import{K as V,k as j,cu as p,ab as I,d as m,o,b as C,e as s,f as O,cv as z,as as T,cw as $,c as r,w as d,r as B,g as f,t as a,cx as h,m as N,cb as S,cc as g}from"./index-BQQ2VPbK.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as L}from"./Tooltip-BDS6GQMR.js";import{N as A}from"./Icon-BePXEFDU.js";import{_ as D}from"./Spin-Bhyd3BdO.js";import"./Popover-DkcwTP-L.js";import"./Follower-BII3ZYJ5.js";import"./next-frame-once-C5Ksf8W7.js";import"./get-D1TFL870.js";import"./use-compitable-B-9Wj_ZY.js";function E(){const e=V(I,null);return j(()=>{if(e===null)return p;const{mergedThemeRef:{value:n},mergedThemeOverridesRef:{value:t}}=e,i=(n==null?void 0:n.common)||p;return t!=null&&t.common?Object.assign({},i,t.common):i})}const K={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},R=m({name:"PlayCircleOutlineOutlined",render:function(n,t){return o(),C("svg",K,t[0]||(t[0]=[s("path",{d:"M10 16.5l6-4.5l-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z",fill:"currentColor"},null,-1)]))}}),F={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},H=m({name:"StopCircleOutlined",render:function(n,t){return o(),C("svg",F,t[0]||(t[0]=[s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8zm4-4H8V8h8v8z",fill:"currentColor"},null,-1)]))}}),_=m({name:"ProjectItem",components:{},props:{dataset:{type:Object,default(){return{}}}},setup(e){const n=E(),t=O(!1),i=j(()=>e.dataset.isPublished?H:R),c=z();async function u(l){t.value||(t.value=!0,await T(1e3),t.value=!1,e.dataset.isPublished?c.info("停止发布"):c.success("发布成功"),e.dataset.isPublished=!e.dataset.isPublished)}return{themeVars:n,isLoading:t,getActionIcon:i,handlePublish:u}}}),v=()=>{$(e=>({cfd2d032:e.themeVars.primaryColor}))},w=_.setup;_.setup=w?(e,n)=>(v(),w(e,n)):v;const q={class:"project-item-container bg-#fff dark:bg-#3c3c3c"},G={style:{flex:"1","min-width":"0"}},J={class:"project-item__name"},Q={class:"project-item__name-left"},U={class:"project-item__name-desc"},W={class:"project-item__name-desc__corpname"},X={class:"project-item__name-desc__corpname-maintext text_nowrap"},Y={class:"project-item__name-desc__fullname text_nowrap"},Z={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},ee={class:"project-item-action__icon"},te={class:"project-item-action__status"};function se(e,n,t,i,c,u){const l=x,k=L,b=A,P=D,y=B("router-link");return o(),r(y,{to:`/result/${e.dataset.id}/overview`},{default:d(()=>[s("ul",q,[s("li",G,[s("div",J,[s("div",Q,[f(l,{icon:"iconfile"})]),s("div",U,[s("div",W,[s("span",X,a(e.dataset.corpName),1),s("span",{onClick:n[0]||(n[0]=h(()=>{},["prevent"]))},[e.dataset.notes?(o(),r(k,{key:0},{trigger:d(()=>[f(l,{icon:"iconhelp",class:"corpname-notes"})]),default:d(()=>[N(a(e.dataset.notes)+" ",1)]),_:1})):S("",!0)])]),s("p",Y,a(e.dataset.name),1)])])]),s("li",Z,a(e.dataset.createTime),1),s("li",{class:g(["project-item-action text_nowrap",{active:e.dataset.isPublished,loading:e.isLoading}]),onClick:n[1]||(n[1]=h(ne=>e.handlePublish(e.dataset.id),["prevent"]))},[s("span",ee,[e.isLoading?(o(),r(P,{key:1,size:16})):(o(),r(b,{key:0,component:e.getActionIcon,class:g({"c-#666 dark:c-#eee":!e.dataset.isPublished})},null,8,["component","class"]))]),s("span",te,a(e.dataset.isPublished?"停止":"发布"),1)],2)])]),_:1},8,["to"])}const fe=M(_,[["render",se],["__scopeId","data-v-87658320"]]);export{fe as default};
