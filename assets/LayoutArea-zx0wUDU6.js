import{u as z}from"./useTabRouter-D2eBXOQB.js";import{d,o as n,b as r,e as a,c as S,w as O,i as p,h as t,m as W,cg as v,k as B,g as L,cE as J,cF as Y,G as q,cG as I,cH as Q,T as X,bc as Z,F as R,l as D,ch as g,a3 as V,cI as ee,t as j,cB as N,u as te,aE as F}from"./index-DMvxVjEm.js";import{_ as E}from"./Popover-CKwAGYSn.js";import{N as A}from"./Icon-rGyCv9MX.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as G}from"./store-4SsHQJcl.js";import"./Follower-DQc2SkQL.js";import"./next-frame-once-C5Ksf8W7.js";import"./get-Ck1rweVE.js";import"./use-compitable-nDfnOrb4.js";const oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ne=a("path",{d:"M9 13L5 9l4-4M5 9h11a4 4 0 0 1 0 8h-1",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),se=[ne],ae=d({name:"ArrowBackUp",render:function(s,e){return n(),r("svg",oe,se)}}),re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},ce=a("g",{fill:"none"},[a("path",{d:"M2 4.5A2.5 2.5 0 0 1 4.5 2h11A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5v-11zM4.5 3A1.5 1.5 0 0 0 3 4.5v11A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 15.5 3h-11zM5 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zm3 0H6v2h2V6zm-3 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2zm3 0H6v2h2v-2zm3-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V6zm3 0h-2v2h2V6zm-3 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2zm3 0h-2v2h2v-2z",fill:"currentColor"})],-1),le=[ce],ie=d({name:"AppFolder20Regular",render:function(s,e){return n(),r("svg",re,le)}}),ue=d({name:"TabsBack",__name:"TabsBack",setup(i){const s=z(),e=()=>{s.push("/")};return(u,_)=>{const h=A,l=E;return n(),S(l,{trigger:"hover",placement:"top-start"},{trigger:O(()=>[a("div",{id:"tabs-back-box",onClick:_[0]||(_[0]=T=>e())},[p(h,{component:t(ae)},null,8,["component"])])]),default:O(()=>[W(" 返回首页 ")]),_:1})}}}),_e=y(ue,[["__scopeId","data-v-5f13382f"]]),de=d({name:"TabsOutset",__name:"TabsOutset",setup(i){const s=z(),e=()=>{s.push({name:"GroupProjectDetail"})};return(u,_)=>{const h=A;return n(),r("div",{id:"tabs-outset-box",onClick:_[0]||(_[0]=l=>e())},[p(h,{component:t(ie)},null,8,["component"]),v("",!0)])}}}),pe=y(de,[["__scopeId","data-v-8726a2da"]]),he={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},me=a("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 368L144 144"},null,-1),ve=a("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 144L144 368"},null,-1),be=[me,ve],M=d({name:"CloseOutline",render:function(s,e){return n(),r("svg",he,be)}}),fe=["onClick"],we=["title"],ke=["onClick"],ge=d({name:"TabsHeader",__name:"Tabs",setup(i){const s=z(),e=G(),u=B(()=>e.currentTabsInCacheSpace.length===1),_=o=>{s.push(o.link)},h=o=>{e.removeTabFromCacheSpace(o)},l=L(),{arrivedState:T}=J(l),{left:f,right:w}=Y(T),k=L([]),$=()=>{setTimeout(async()=>{await V(),k.value.find(o=>{const b=o.classList.contains("active");return b&&o.scrollIntoView(),b})})},c=L(!1),x=ee(()=>{const{clientWidth:o,scrollWidth:b}=l.value;o<b?c.value=!0:c.value=!1},200);q(()=>{var o;return(o=e.currentCacheSpace)==null?void 0:o.activeTabKey},()=>{$()},{immediate:!0}),I(l,()=>{x()},{childList:!0,subtree:!0,attributes:!0}),Q(l,()=>{x(),$()});const C=async o=>{await V(),l.value&&o(l.value)},H=async o=>{C(b=>{b.scrollLeft+=o.deltaY})};return X(async()=>{C(o=>{o.addEventListener("wheel",H)})}),Z(async()=>{C(o=>{o.removeEventListener("wheel",H)})}),(o,b)=>{const U=A;return n(),r("div",{class:g(["tabs-wrapper",{"shadow-pseudo":t(c),"shadow-left":!t(f),"shadow-right":!t(w)}])},[t(e).currentTabsInCacheSpace.length?(n(),r("ul",{key:0,ref_key:"refTabList",ref:l,class:"tab-list-box"},[(n(!0),r(R,null,D(t(e).currentTabsInCacheSpace,m=>{var K;return n(),r("li",{key:m.tabKey,ref_for:!0,ref_key:"refsTabs",ref:k,class:g(["tab-item-box",{active:m.tabKey===((K=t(e).currentCacheSpace)==null?void 0:K.activeTabKey)}]),onClick:P=>_(m)},[a("span",{title:m.customLabel||m.label,class:"tab-item-label"},j(m.customLabel||m.label),9,we),t(u)?v("",!0):(n(),r("div",{key:0,class:"tab-item-icon flex items-center",onClick:N(P=>h(m),["stop"])},[p(U,{component:t(M)},null,8,["component"])],8,ke))],10,fe)}),128))],512)):v("",!0)],2)}}}),Te=y(ge,[["__scopeId","data-v-0b511a66"]]),xe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ce=a("path",{d:"M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z",fill:"currentColor"},null,-1),ye=a("path",{d:"M18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z",fill:"currentColor"},null,-1),$e=[Ce,ye],Le=d({name:"KeyboardDoubleArrowDownFilled",render:function(s,e){return n(),r("svg",xe,$e)}}),Se={key:0,class:"close-icon focus"},Oe=a("span",{class:"close-other-text"},"关闭其他标签",-1),Be={class:"tabs-options-body"},ze=["onClick"],Ae=["title"],Fe=["onClick"],Me=d({name:"TabsOptions",__name:"TabsOptions",setup(i){const s=z(),e=G(),u=B(()=>e.currentTabsInCacheSpace.length===1),_=f=>{s.push(f.link)},h=f=>{e.removeTabFromCacheSpace(f)},l=()=>{u.value||e.removeOtherTabsFromCacheSpace()},T=L(!1);return(f,w)=>{const k=A,$=E;return n(),S($,{trigger:"hover",style:{width:"236px"},delay:300,class:"tabs-options-box",flip:"","onUpdate:show":w[1]||(w[1]=c=>T.value=c)},{trigger:O(()=>[a("div",{class:g(["tabs-options-action hover-bg-#cacfd8 dark:hover-c-#303133",{"bg-#cacfd8 dark:c-#303133":t(T)}])},[p(k,{component:t(Le)},null,8,["component"])],2)]),default:O(()=>[a("div",{class:g(["tabs-options-header",{disabled:t(u)}]),onClick:w[0]||(w[0]=c=>l())},[t(u)?v("",!0):(n(),r("span",Se,[p(k,{component:t(M)},null,8,["component"])])),Oe],2),a("ul",Be,[(n(!0),r(R,null,D(t(e).currentTabsInCacheSpace,c=>{var x;return n(),r("li",{key:c.tabKey,class:g(["tabs-options-list-item",{active:c.tabKey===((x=t(e).currentCacheSpace)==null?void 0:x.activeTabKey)}]),onClick:C=>_(c)},[a("span",{title:c.customLabel||c.label,class:"tabs-options-label"},j(c.customLabel||c.label),9,Ae),t(e).currentTabsInCacheSpace.length!==1?(n(),r("div",{key:0,class:"close-icon right",onClick:N(C=>h(c),["stop"])},[p(k,{component:t(M)},null,8,["component"])],8,Fe)):v("",!0)],10,ze)}),128))])]),_:1})}}}),He={key:0,class:"work-tabs__controller bg-#fff dark:bg-#333333"},Ke=d({name:"TabsController",__name:"TabsController",setup(i){const s=te(),e=B(()=>s.name!=="GroupProjectList"),u=B(()=>s.name!=="GroupProjectOverview");return(_,h)=>t(e)?(n(),r("div",He,[t(u)?v("",!0):(n(),S(_e,{key:0})),t(u)?(n(),S(pe,{key:1})):v("",!0),p(Te),p(Me)])):v("",!0)}}),Ve=y(Ke,[["__scopeId","data-v-30aa823e"]]),Re={class:"layout-area-container bg-#fff dark:bg-#1e1e20"},De={class:"layout-area-container__top"},je={class:"layout-area-container__bottom"},Ne=d({name:"LayoutArea",__name:"LayoutArea",props:{minHeight:{type:Boolean,default:!1}},setup(i){return(s,e)=>(n(),r("div",Re,[a("div",De,[F(s.$slots,"top",{},void 0,!0),p(Ve)]),a("div",je,[a("section",{class:g(["flex-1",{"overflow-y-auto":!1,"min-h-0":i.minHeight}])},[F(s.$slots,"content",{},void 0,!0)],2),F(s.$slots,"footer",{},void 0,!0)])]))}}),Xe=y(Ne,[["__scopeId","data-v-4489e434"]]);export{Xe as default};
