import{d as u,o as f,b as j,e as x,g as B,ae as C,a5 as b,p as k,_ as y,c as L,w as e,r,ci as T,i as t,m as p,N as V,af as S,bV as E}from"./index-YuIWdtd5.js";import{N as F,a as H}from"./NavBar-BoEGpASq.js";import $ from"./ProjectForm-BtPPQEcX.js";import O from"./TableHeader-DSyV3ASv.js";import{P as z,u as A}from"./TableBody-BGYFvE2A.js";import{_ as D}from"./DatePicker-DsYQEFVu.js";import"./useCurrentInstance-B_GBihtE.js";import"./Dropdown-C6th9mcZ.js";import"./create-D3Vn69pI.js";import"./logo-naive-DXiMhdiw.js";import"./FormItem-Do5WdziK.js";import"./Input-o3Mz25fI.js";import"./Eye-_gq0Kwc4.js";import"./ProjectItem-dRKrmNa8.js";import"./Tooltip-QzZbLZOe.js";import"./Spin-Cf-L_4CF.js";import"./FocusDetector-BPY1zISM.js";import"./Forward-CK1zORYB.js";const I={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},M=x("path",{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z",fill:"currentColor"},null,-1),R=[M],q=u({name:"CreateNewFolderOutlined",render:function(n,c){return f(),j("svg",I,R)}}),G=u({name:"ProjectList",components:{NavigationNavBar:F,NavigationSideLogo:H,ProjectTableHeader:O,ProjectTableBody:z,CreateNewFolderOutlined:q},setup(){const o=A(),n=B();async function c(){const a=C({name:"",corpName:"",notes:""});await b();const s=window.$ModalDialog.create({title:"创建项目",style:{width:"50vw"},closable:!0,maskClosable:!1,closeOnEsc:!1,content:()=>k($,{modelValue:a,ref:n}),positiveText:"创建",async onPositiveClick(){if(!await n.value.validateRules())return Promise.reject();s.loading=!0;const{error:l,data:d}=await o.createProject(a);if(s.loading=!1,l)return Promise.reject();o.getProjectList()}})}function i(a){o.getProjectList({kw:a})}return i(),{handleCreateProject:c,handleSelectSearch:i}}});function J(o,n,c,i,a,s){const _=r("NavigationSideLogo"),l=r("NavigationNavBar"),d=r("CreateNewFolderOutlined"),v=V,g=S,m=E,h=D,w=r("ProjectTableHeader"),N=r("ProjectTableBody"),P=T;return f(),L(P,null,{top:e(()=>[t(l,{fixed:!1},{default:e(()=>[t(_)]),_:1})]),side:e(()=>[t(m,{title:"项目管理"},{default:e(()=>[t(g,{type:"primary",class:"create-action",onClick:n[0]||(n[0]=K=>o.handleCreateProject())},{icon:e(()=>[t(v,null,{default:e(()=>[t(d)]),_:1})]),default:e(()=>[p(" 创建项目 ")]),_:1})]),_:1})]),content:e(()=>[t(m,{"has-divider":"","flex-content":""},{head:e(()=>[t(h,{type:"datetimerange"},{footer:e(()=>[p(" extra footer ")]),_:1})]),default:e(()=>[t(w),t(N)]),_:1})]),_:1})}const me=y(G,[["render",J],["__scopeId","data-v-de871c78"]]);export{me as default};
