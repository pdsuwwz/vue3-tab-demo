import{d as u,o as f,b as j,e as x,g as B,ae as C,a5 as b,p as k,_ as y,c as E,w as e,r,ci as L,i as t,m as p,N as T,af as V,bV as S}from"./index-Rz9BoSGC.js";import{N as F,a as H}from"./NavBar-BtOfYxcJ.js";import $ from"./ProjectForm-B41jhYWB.js";import O from"./TableHeader-CG5RqLDQ.js";import{P as z,u as A}from"./TableBody-6XiPv-fB.js";import{_ as D}from"./DatePicker-DlpZ6wVA.js";import"./useCurrentInstance-D17uK1gg.js";import"./Dropdown-Kj2jzaDN.js";import"./create-D3Vn69pI.js";import"./logo-naive-DXiMhdiw.js";import"./FormItem-mfWLD7Gn.js";import"./Input-CElSeZlw.js";import"./Eye-CX9HsqhW.js";import"./ProjectItem-DLKEULtd.js";import"./Tooltip-Crz3FB2S.js";import"./Spin-CZnq_DH3.js";import"./FocusDetector-CmYLTUXL.js";import"./Forward-7Rd0KYT0.js";const I={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},M=x("path",{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z",fill:"currentColor"},null,-1),R=[M],q=u({name:"CreateNewFolderOutlined",render:function(n,c){return f(),j("svg",I,R)}}),G=u({name:"ProjectList",components:{NavigationNavBar:F,NavigationSideLogo:H,ProjectTableHeader:O,ProjectTableBody:z,CreateNewFolderOutlined:q},setup(){const o=A(),n=B();async function c(){const a=C({name:"",corpName:"",notes:""});await b();const s=window.$ModalDialog.create({title:"创建项目",style:{width:"50vw"},closable:!0,maskClosable:!1,closeOnEsc:!1,content:()=>k($,{modelValue:a,ref:n}),positiveText:"创建",async onPositiveClick(){if(!await n.value.validateRules())return Promise.reject(new Error("表单校验失败"));s.loading=!0;const{error:l,data:_}=await o.createProject(a);if(s.loading=!1,l)return Promise.reject(new Error("创建失败"));o.getProjectList()}})}function i(a){o.getProjectList({kw:a})}return i(),{handleCreateProject:c,handleSelectSearch:i}}});function J(o,n,c,i,a,s){const d=r("NavigationSideLogo"),l=r("NavigationNavBar"),_=r("CreateNewFolderOutlined"),v=T,w=V,m=S,h=D,g=r("ProjectTableHeader"),N=r("ProjectTableBody"),P=L;return f(),E(P,null,{top:e(()=>[t(l,{fixed:!1},{default:e(()=>[t(d)]),_:1})]),side:e(()=>[t(m,{title:"项目管理"},{default:e(()=>[t(w,{type:"primary",class:"create-action",onClick:n[0]||(n[0]=K=>o.handleCreateProject())},{icon:e(()=>[t(v,null,{default:e(()=>[t(_)]),_:1})]),default:e(()=>[p(" 创建项目 ")]),_:1})]),_:1})]),content:e(()=>[t(m,{"has-divider":"","flex-content":""},{head:e(()=>[t(h,{type:"datetimerange"},{footer:e(()=>[p(" extra footer ")]),_:1})]),default:e(()=>[t(g),t(N)]),_:1})]),_:1})}const me=y(G,[["render",J],["__scopeId","data-v-21df0fa8"]]);export{me as default};