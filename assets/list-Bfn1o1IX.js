import B from"./LayoutArea-CVQ7oX4D.js";import{_ as C}from"./LayoutSection-ChycM6KC.js";import{N as u,a as f}from"./NavBar-DFIdYb--.js";import k from"./ProjectForm-ZYHsigv4.js";import y from"./TableHeader-sI2PSupx.js";import{P as b,u as E}from"./TableBody-4ppNhxXd.js";import{d as v,b as T,e as L,o as w,f as V,ac as S,a1 as F,n as H,c as $,w as t,r as m,g as o,m as _,ad as O}from"./index-BQQ2VPbK.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{N as A}from"./Icon-BePXEFDU.js";import{_ as D}from"./DatePicker-ClxcA8Fy.js";import"./useTabRouter-D_wdIkvi.js";import"./store-DR4Batca.js";import"./Popover-DkcwTP-L.js";import"./Follower-BII3ZYJ5.js";import"./next-frame-once-C5Ksf8W7.js";import"./get-D1TFL870.js";import"./use-compitable-B-9Wj_ZY.js";import"./Space-Bh7kPegg.js";import"./get-slot-Bk_rJcZu.js";import"./useCurrentInstance-D9-B7Wuu.js";import"./Dropdown-Ajl9EpEv.js";import"./create-DeO8t-sD.js";import"./logo-naive-DXiMhdiw.js";import"./Octocat-ScbXVVsF.js";import"./Tooltip-BDS6GQMR.js";import"./FormItem-BHg4hoUr.js";import"./Input-BQhyNcfF.js";import"./Eye-Bo3C4vt5.js";import"./ProjectItem-BVQ5_13g.js";import"./index-CVjN2ueZ.js";import"./Spin-Bhyd3BdO.js";import"./FocusDetector-ugadypO-.js";import"./Forward--dHqveyb.js";const I={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},M=v({name:"CreateNewFolderOutlined",render:function(e,n){return w(),T("svg",I,n[0]||(n[0]=[L("path",{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z",fill:"currentColor"},null,-1)]))}}),R=v({name:"ProjectList",components:{NavigationNavBar:u,NavigationSideLogo:f,ProjectTableHeader:y,ProjectTableBody:b,CreateNewFolderOutlined:M},setup(){const r=E(),e=V();async function n(){const a=S({name:"",corpName:"",notes:""});await F();const s=window.$ModalDialog.create({title:"创建项目",style:{width:"50vw"},closable:!0,maskClosable:!1,closeOnEsc:!1,content:()=>H(k,{modelValue:a,ref:e}),positiveText:"创建",async onPositiveClick(){if(!await e.value.validateRules())return Promise.reject(new Error("表单校验失败"));s.loading=!0;const{error:c,data:p}=await r.createProject(a);if(s.loading=!1,c)return Promise.reject(new Error("创建失败"));r.getProjectList()}})}function i(a){r.getProjectList({kw:a})}return i(),{handleCreateProject:n,handleSelectSearch:i}}});function q(r,e,n,i,a,s){const l=f,c=u,p=m("CreateNewFolderOutlined"),g=A,P=O,d=C,j=D,N=m("ProjectTableHeader"),h=m("ProjectTableBody"),x=B;return w(),$(x,null,{top:t(()=>[o(c,{fixed:!1},{default:t(()=>[o(l)]),_:1})]),side:t(()=>[o(d,{title:"项目管理"},{default:t(()=>[o(P,{type:"primary",class:"create-action",onClick:e[0]||(e[0]=G=>r.handleCreateProject())},{icon:t(()=>[o(g,null,{default:t(()=>[o(p)]),_:1})]),default:t(()=>[e[1]||(e[1]=_(" 创建项目 "))]),_:1})]),_:1})]),content:t(()=>[o(d,{"has-divider":"","flex-content":""},{head:t(()=>[o(j,{type:"datetimerange"},{footer:t(()=>e[2]||(e[2]=[_(" extra footer ")])),_:1})]),default:t(()=>[o(N),o(h)]),_:1})]),_:1})}const Ct=z(R,[["render",q],["__scopeId","data-v-8f762e3d"]]);export{Ct as default};
