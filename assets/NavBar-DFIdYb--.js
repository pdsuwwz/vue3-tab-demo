import{q as Q,x as o,y as ee,v as E,G as _,H as te,L as oe,d as g,M as ze,Q as Se,f as T,A as Ce,P as Ve,k as S,X as Re,bV as X,n as h,Y as V,cF as Be,a4 as R,aO as Y,aZ as x,N as Ne,D as Me,a3 as G,o as v,b,e as s,cG as ae,F as Ae,l as Fe,t as ie,j as Te,h as re,cH as Le,r as se,c as Z,w as B,g as p,cI as He,cJ as De,u,i as Ie,c9 as Oe,cK as Ue,cc as q,cL as Ke,V as Pe,a1 as je,K as We,cb as ne,m as Ee}from"./index-BQQ2VPbK.js";import{u as Xe}from"./useCurrentInstance-D9-B7Wuu.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{N as O}from"./Icon-BePXEFDU.js";import{N as Ye}from"./Dropdown-Ajl9EpEv.js";import{L as Ge}from"./logo-naive-DXiMhdiw.js";import{O as Ze}from"./Octocat-ScbXVVsF.js";import{_ as qe}from"./Tooltip-BDS6GQMR.js";const Je=Q("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[o("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),o("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),o("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),Q("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[ee({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),o("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),o("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),o("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),E("&:focus",[o("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),_("round",[o("rail","border-radius: calc(var(--n-rail-height) / 2);",[o("button","border-radius: calc(var(--n-button-height) / 2);")])]),te("disabled",[te("icon",[_("rubber-band",[_("pressed",[o("rail",[o("button","max-width: var(--n-button-width-pressed);")])]),o("rail",[E("&:active",[o("button","max-width: var(--n-button-width-pressed);")])]),_("active",[_("pressed",[o("rail",[o("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),o("rail",[E("&:active",[o("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),_("active",[o("rail",[o("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),o("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[o("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[ee()]),o("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),_("active",[o("rail","background-color: var(--n-rail-color-active);")]),_("loading",[o("rail",`
 cursor: wait;
 `)]),_("disabled",[o("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Qe=Object.assign(Object.assign({},oe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let F;const et=g({name:"Switch",props:Qe,slots:Object,setup(e){F===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?F=CSS.supports("width","max(1px)"):F=!1:F=!0);const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=ze(e),r=oe("Switch","-switch",Je,Be,e,n),c=Se(e),{mergedSizeRef:l,mergedDisabledRef:i}=c,m=T(e.defaultValue),f=Ce(e,"value"),w=Ve(f,m),C=S(()=>w.value===e.checkedValue),N=T(!1),d=T(!1),k=S(()=>{const{railStyle:a}=e;if(a)return a({focused:d.value,checked:C.value})});function y(a){const{"onUpdate:value":H,onChange:D,onUpdateValue:I}=e,{nTriggerFormInput:U,nTriggerFormChange:K}=c;H&&G(H,a),I&&G(I,a),D&&G(D,a),m.value=a,U(),K()}function ce(){const{nTriggerFormFocus:a}=c;a()}function de(){const{nTriggerFormBlur:a}=c;a()}function ue(){e.loading||i.value||(w.value!==e.checkedValue?y(e.checkedValue):y(e.uncheckedValue))}function he(){d.value=!0,ce()}function fe(){d.value=!1,de(),N.value=!1}function ve(a){e.loading||i.value||a.key===" "&&(w.value!==e.checkedValue?y(e.checkedValue):y(e.uncheckedValue),N.value=!1)}function me(a){e.loading||i.value||a.key===" "&&(a.preventDefault(),N.value=!0)}const J=S(()=>{const{value:a}=l,{self:{opacityDisabled:H,railColor:D,railColorActive:I,buttonBoxShadow:U,buttonColor:K,boxShadowFocus:ge,loadingColor:pe,textColor:be,iconColor:we,[R("buttonHeight",a)]:$,[R("buttonWidth",a)]:_e,[R("buttonWidthPressed",a)]:xe,[R("railHeight",a)]:z,[R("railWidth",a)]:A,[R("railBorderRadius",a)]:ke,[R("buttonBorderRadius",a)]:ye},common:{cubicBezierEaseInOut:$e}}=r.value;let P,j,W;return F?(P=`calc((${z} - ${$}) / 2)`,j=`max(${z}, ${$})`,W=`max(${A}, calc(${A} + ${$} - ${z}))`):(P=Y((x(z)-x($))/2),j=Y(Math.max(x(z),x($))),W=x(z)>x($)?A:Y(x(A)+x($)-x(z))),{"--n-bezier":$e,"--n-button-border-radius":ye,"--n-button-box-shadow":U,"--n-button-color":K,"--n-button-width":_e,"--n-button-width-pressed":xe,"--n-button-height":$,"--n-height":j,"--n-offset":P,"--n-opacity-disabled":H,"--n-rail-border-radius":ke,"--n-rail-color":D,"--n-rail-color-active":I,"--n-rail-height":z,"--n-rail-width":A,"--n-width":W,"--n-box-shadow-focus":ge,"--n-loading-color":pe,"--n-text-color":be,"--n-icon-color":we}}),M=t?Re("switch",S(()=>l.value[0]),J,e):void 0;return{handleClick:ue,handleBlur:fe,handleFocus:he,handleKeyup:ve,handleKeydown:me,mergedRailStyle:k,pressed:N,mergedClsPrefix:n,mergedValue:w,checked:C,mergedDisabled:i,cssVars:t?void 0:J,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:t,mergedRailStyle:r,onRender:c,$slots:l}=this;c==null||c();const{checked:i,unchecked:m,icon:f,"checked-icon":w,"unchecked-icon":C}=l,N=!(X(f)&&X(w)&&X(C));return h("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,N&&`${e}-switch--icon`,t&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},h("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:r},V(i,d=>V(m,k=>d||k?h("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},h("div",{class:`${e}-switch__rail-placeholder`},h("div",{class:`${e}-switch__button-placeholder`}),d),h("div",{class:`${e}-switch__rail-placeholder`},h("div",{class:`${e}-switch__button-placeholder`}),k)):null)),h("div",{class:`${e}-switch__button`},V(f,d=>V(w,k=>V(C,y=>h(Ne,null,{default:()=>this.loading?h(Me,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(k||d)?h("div",{class:`${e}-switch__button-icon`,key:k?"checked-icon":"icon"},k||d):!this.checked&&(y||d)?h("div",{class:`${e}-switch__button-icon`,key:y?"unchecked-icon":"icon"},y||d):null})))),V(i,d=>d&&h("div",{key:"checked",class:`${e}-switch__checked`},d)),V(m,d=>d&&h("div",{key:"unchecked",class:`${e}-switch__unchecked`},d)))))}}),tt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},nt=g({name:"UserAvatar",render:function(n,t){return v(),b("svg",tt,t[0]||(t[0]=[s("path",{d:"M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3z",fill:"currentColor"},null,-1),s("path",{d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",fill:"currentColor"},null,-1)]))}}),ot={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},at=g({name:"FullScreenMaximize24Regular",render:function(n,t){return v(),b("svg",ot,t[0]||(t[0]=[s("g",{fill:"none"},[s("path",{d:"M4.5 5.75c0-.69.56-1.25 1.25-1.25h2a.75.75 0 0 0 0-1.5h-2A2.75 2.75 0 0 0 3 5.75v2a.75.75 0 0 0 1.5 0v-2zm0 12.5c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5h-2A2.75 2.75 0 0 1 3 18.25v-2a.75.75 0 0 1 1.5 0v2zM18.25 4.5c.69 0 1.25.56 1.25 1.25v2a.75.75 0 0 0 1.5 0v-2A2.75 2.75 0 0 0 18.25 3h-2a.75.75 0 0 0 0 1.5h2zm1.25 13.75c0 .69-.56 1.25-1.25 1.25h-2a.75.75 0 0 0 0 1.5h2A2.75 2.75 0 0 0 21 18.25v-2a.75.75 0 0 0-1.5 0v2z",fill:"currentColor"})],-1)]))}}),it={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},rt=g({name:"FullScreenMinimize24Filled",render:function(n,t){return v(),b("svg",it,t[0]||(t[0]=[s("g",{fill:"none"},[s("path",{d:"M9 4a1 1 0 0 0-2 0v2.5a.5.5 0 0 1-.5.5H4a1 1 0 0 0 0 2h2.5A2.5 2.5 0 0 0 9 6.5V4zm0 16a1 1 0 1 1-2 0v-2.5a.5.5 0 0 0-.5-.5H4a1 1 0 1 1 0-2h2.5A2.5 2.5 0 0 1 9 17.5V20zm7-17a1 1 0 0 0-1 1v2.5A2.5 2.5 0 0 0 17.5 9H20a1 1 0 1 0 0-2h-2.5a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1zm-1 17a1 1 0 1 0 2 0v-2.5a.5.5 0 0 1 .5-.5H20a1 1 0 1 0 0-2h-2.5a2.5 2.5 0 0 0-2.5 2.5V20z",fill:"currentColor"})],-1)]))}}),st={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},lt=g({name:"SignOut20Regular",render:function(n,t){return v(),b("svg",st,t[0]||(t[0]=[s("g",{fill:"none"},[s("path",{d:"M8.5 11.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5zM11 3.5a.5.5 0 0 0-.576-.494l-7 1.07A.5.5 0 0 0 3 4.57v10.86a.5.5 0 0 0 .424.494l7 1.071a.5.5 0 0 0 .576-.494V10h5.172l-.997.874a.5.5 0 0 0 .658.752l1.996-1.75a.5.5 0 0 0 0-.752l-1.996-1.75a.499.499 0 1 0-.658.752l.997.874H11V3.5zm-1 .582V15.92L4 15V4.999l6-.917zM12.5 16H12v-5h1v4.5a.5.5 0 0 1-.5.5zM12 8V4h.5a.5.5 0 0 1 .5.5V8h-1z",fill:"currentColor"})],-1)]))}}),ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},dt=g({name:"DarkModeOutlined",render:function(n,t){return v(),b("svg",ct,t[0]||(t[0]=[s("path",{d:"M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z",fill:"currentColor"},null,-1)]))}}),ut={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ht=g({name:"LightModeOutlined",render:function(n,t){return v(),b("svg",ut,t[0]||(t[0]=[s("path",{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z",fill:"currentColor"},null,-1)]))}}),ft=g({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:e}=Xe();function n(){e.$emit("click")}return{title:S(()=>ae),handleClick:n}}}),vt={class:"side-action-container"},mt={class:"action-list"};function gt(e,n,t,r,c,l){return v(),b("div",vt,[s("ul",mt,[(v(),b(Ae,null,Fe(3,i=>s("li",{key:i,class:"action-item bg-#eee dark:bg-#555"}," Action "+ie(i),1)),64))])])}const pt=L(ft,[["render",gt],["__scopeId","data-v-12c1e694"]]),bt=g({name:"NavigationAvatar",components:{UserAvatar:nt},setup(){Te(),re();const e=t=>()=>h(O,null,{default:()=>h(t)});return{commandList:S(()=>[{label:"退出登录",key:"退出按钮",icon:e(lt),props:{onClick:()=>{Le.remove("token"),window.location.reload()}}}])}}}),wt={class:"navigation-avatar"};function _t(e,n,t,r,c,l){const i=se("UserAvatar"),m=O,f=Ye;return v(),Z(f,{trigger:"hover","show-arrow":"",options:e.commandList},{default:B(()=>[s("div",wt,[p(m,{size:24},{default:B(()=>[p(i)]),_:1}),n[0]||(n[0]=s("span",{class:"px-4px"},"Wisdom",-1))])]),_:1},8,["options"])}const xt=L(bt,[["render",_t]]),kt={class:"navigation-change-theme"},yt=g({name:"NavigationChangeTheme",__name:"ChangeTheme",setup(e){const n=He(),{isDark:t}=De(),r=T(n.theme),c=({focused:i,checked:m})=>{const f={};return m?(f.background="#313136",f.boxShadow="0 0 0 1px rgb(100 100 100)"):(f.background="#f6f5f7",f.boxShadow="0 0 0 1px rgb(60 60 67 / 40%)"),f},l=i=>{n.setTheme(i)};return(i,m)=>{const f=O,w=et;return v(),b("div",kt,[p(w,{value:u(r),"onUpdate:value":[m[0]||(m[0]=C=>Ie(r)?r.value=C:null),l],"checked-value":"dark","unchecked-value":"light","rail-style":c,style:Oe({"--n-icon-color":u(t)?"#fff":"#000","--n-button-color":u(t)?"#000":"#fff","--n-button-box-shadow":"none"})},{"checked-icon":B(()=>[p(f,{component:u(dt)},null,8,["component"])]),"unchecked-icon":B(()=>[p(f,{component:u(ht)},null,8,["component"])]),_:1},8,["value","style"])])}}}),$t=L(yt,[["__scopeId","data-v-12207909"]]),zt={class:"flex items-center h-full cursor-pointer"},St=g({name:"NavigationFullScreen",__name:"FullScreen",setup(e){const{isFullscreen:n,toggle:t}=Ue();return(r,c)=>{const l=O;return v(),b("div",zt,[p(l,{size:22,component:u(n)?u(rt):u(at),onClick:c[0]||(c[0]=i=>u(t)())},null,8,["component"])])}}}),Ct=g({name:"NavigationSideLogo",props:{auth:{type:Boolean,default:!0}},setup(){return{title:S(()=>ae)}}}),Vt={class:"side-logo-container"};function Rt(e,n,t,r,c,l){const i=se("router-link");return v(),b("div",Vt,[p(i,{to:"/"},{default:B(()=>[n[0]||(n[0]=s("img",{class:"side-logo-img",src:Ge,alt:"商标"},null,-1)),s("h1",{class:q(["side-logo-title c-#303133 dark:c-#fff",{"c-#303133 dark:c-#fff":e.auth,"c-#fff dark:c-#303133":!e.auth}])},ie(e.title),3)]),_:1})])}const Bt=L(Ct,[["render",Rt],["__scopeId","data-v-32f712c8"]]),le=Symbol(),Ut=()=>{const e=T(!0),{changeNotifyPlacement:n}=Ke(),t=()=>{e.value=!1,je(()=>{n("bottom-right"),window.$ModalNotification.destroyAll(),window.$ModalNotification.success({title:"页面刷新成功",duration:800,closable:!0}),e.value=!0})};return Pe(le,t),{isRouterAlive:e,reloadRouterView:t}},Nt=()=>({reloadRouterView:We(le)}),Mt=g({name:"NavigationNavBar",__name:"NavBar",props:{fixed:{type:Boolean,default:!1}},setup(e){const{reloadRouterView:n}=Nt(),t=re(),r=S(()=>t.name!=="UserLogin");return(c,l)=>{const i=qe;return v(),b("header",{class:q(["navigation-navbar-header-container",{"fixed-header":e.fixed,"navbar-shadow dark:dark-navbar-shadow":u(r),"login-navbar-shadow dark:shadow-none":!u(r)}])},[s("div",{class:q(["navbar-header-box",{"bg-#fff dark:bg-#1e1e20":u(r),"bg-#8d8b89 bg-opacity-30":!u(r)}])},[p(Bt,{auth:u(r)},null,8,["auth"]),l[2]||(l[2]=s("div",{style:{flex:"1"}},null,-1)),u(r)?(v(),Z(pt,{key:0})):ne("",!0),p(i,null,{trigger:B(()=>[s("div",{class:"h-full text-1.5em i-material-symbols:refresh",flex:"~ items-center","cursor-pointer":"",onClick:l[0]||(l[0]=m=>u(n)())})]),default:B(()=>[l[1]||(l[1]=Ee(" 强制刷新路由 "))]),_:1}),p($t),p(Ze),p(St),u(r)?(v(),Z(xt,{key:1})):ne("",!0)],2)],2)}}}),Kt=L(Mt,[["__scopeId","data-v-fb8f8955"]]);export{Kt as N,Bt as a,Ut as u};
