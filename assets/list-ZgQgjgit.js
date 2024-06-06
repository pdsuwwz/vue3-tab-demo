import B from"./LayoutArea-DGmkLIsY.js";import{_ as C}from"./LayoutSection-CjZSVrWB.js";import{N as u,a as f}from"./NavBar-DYr7MS71.js";import k from"./ProjectForm-B-vwBvK9.js";import y from"./TableHeader-BrX4H9nR.js";import{P as b,u as E}from"./TableBody-GzqOcrj1.js";import{d as v,o as w,b as T,e as L,g as V,ac as S,a3 as F,n as H,c as $,w as e,r as m,i as t,m as _,ad as O}from"./index-hlZMzDj2.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{N as A}from"./Icon-CqbrJ_1W.js";import{_ as D}from"./DatePicker-laVxNS1w.js";import"./useTabRouter-CRtNCc81.js";import"./store-DQ0_T7Rf.js";import"./Popover-CItKPQ7F.js";import"./Follower-B57-yXFF.js";import"./next-frame-once-C5Ksf8W7.js";import"./get-D3dpxE9Z.js";import"./use-compitable-DlrK69ze.js";import"./Space-DWG2v_Tp.js";import"./get-slot-Bk_rJcZu.js";import"./useCurrentInstance-BWQNPCHb.js";import"./Dropdown-DF0woCIx.js";import"./create-D3Vn69pI.js";import"./logo-naive-DXiMhdiw.js";import"./Octocat-DcPnrvEy.js";import"./Tooltip-d3xdvl8Y.js";import"./FormItem-DEk7V5kr.js";import"./Input-DSXVbwjw.js";import"./Eye-CNO_-J-m.js";import"./ProjectItem-SeKbdT4C.js";import"./index-RQStPu9K.js";import"./Spin-DTW5naV0.js";import"./FocusDetector-DZMJenPK.js";import"./Forward-BkubeyH7.js";const I={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},M=L("path",{d:"M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z",fill:"currentColor"},null,-1),R=[M],q=v({name:"CreateNewFolderOutlined",render:function(r,a){return w(),T("svg",I,R)}}),G=v({name:"ProjectList",components:{NavigationNavBar:u,NavigationSideLogo:f,ProjectTableHeader:y,ProjectTableBody:b,CreateNewFolderOutlined:q},setup(){const o=E(),r=V();async function a(){const n=S({name:"",corpName:"",notes:""});await F();const c=window.$ModalDialog.create({title:"创建项目",style:{width:"50vw"},closable:!0,maskClosable:!1,closeOnEsc:!1,content:()=>H(k,{modelValue:n,ref:r}),positiveText:"创建",async onPositiveClick(){if(!await r.value.validateRules())return Promise.reject(new Error("表单校验失败"));c.loading=!0;const{error:s,data:p}=await o.createProject(n);if(c.loading=!1,s)return Promise.reject(new Error("创建失败"));o.getProjectList()}})}function i(n){o.getProjectList({kw:n})}return i(),{handleCreateProject:a,handleSelectSearch:i}}});function J(o,r,a,i,n,c){const l=f,s=u,p=m("CreateNewFolderOutlined"),h=A,g=O,d=C,P=D,j=m("ProjectTableHeader"),N=m("ProjectTableBody"),x=B;return w(),$(x,null,{top:e(()=>[t(s,{fixed:!1},{default:e(()=>[t(l)]),_:1})]),side:e(()=>[t(d,{title:"项目管理"},{default:e(()=>[t(g,{type:"primary",class:"create-action",onClick:r[0]||(r[0]=K=>o.handleCreateProject())},{icon:e(()=>[t(h,null,{default:e(()=>[t(p)]),_:1})]),default:e(()=>[_(" 创建项目 ")]),_:1})]),_:1})]),content:e(()=>[t(d,{"has-divider":"","flex-content":""},{head:e(()=>[t(P,{type:"datetimerange"},{footer:e(()=>[_(" extra footer ")]),_:1})]),default:e(()=>[t(j),t(N)]),_:1})]),_:1})}const ye=z(G,[["render",J],["__scopeId","data-v-8f762e3d"]]);export{ye as default};