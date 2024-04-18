import{v as Q,y as n,z as ee,x as E,L as w,M as te,d as v,O as Se,P as oe,S as Ce,g as H,B as Be,R as Ve,k as S,Z as B,a$ as X,bj as x,a0 as Re,cj as Y,p as l,a1 as V,ck as Me,C as Ne,G as Ae,a7 as Z,o as h,b as m,e as s,cl as ae,_ as T,F as Fe,l as Te,t as ie,f as Le,u as se,cm as Ie,N as U,r as re,c as q,w as F,i as p,cn as De,co as He,h as d,j as Ue,bR as Oe,cp as We,cb as G,bS as ce,bT as le,c9 as ne,cq as je}from"./index-DGA7EaGb.js";import{u as Pe}from"./useCurrentInstance-DNJrUfNG.js";import{N as Ke}from"./Dropdown-CqEQa8QK.js";import{L as Ee}from"./logo-naive-DXiMhdiw.js";const Xe=Q("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[n("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),n("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),n("button-placeholder",`
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
 `,[ee({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),n("checked, unchecked",`
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
 `),n("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),n("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),E("&:focus",[n("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),w("round",[n("rail","border-radius: calc(var(--n-rail-height) / 2);",[n("button","border-radius: calc(var(--n-button-height) / 2);")])]),te("disabled",[te("icon",[w("rubber-band",[w("pressed",[n("rail",[n("button","max-width: var(--n-button-width-pressed);")])]),n("rail",[E("&:active",[n("button","max-width: var(--n-button-width-pressed);")])]),w("active",[w("pressed",[n("rail",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),n("rail",[E("&:active",[n("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),w("active",[n("rail",[n("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),n("rail",`
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
 `,[n("button-icon",`
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
 `,[ee()]),n("button",`
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
 `)]),w("active",[n("rail","background-color: var(--n-rail-color-active);")]),w("loading",[n("rail",`
 cursor: wait;
 `)]),w("disabled",[n("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ye=Object.assign(Object.assign({},oe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let A;const Ze=v({name:"Switch",props:Ye,setup(e){A===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?A=CSS.supports("width","max(1px)"):A=!1:A=!0);const{mergedClsPrefixRef:a,inlineThemeDisabled:t}=Se(e),f=oe("Switch","-switch",Xe,Me,e,a),r=Ce(e),{mergedSizeRef:_,mergedDisabledRef:i}=r,g=H(e.defaultValue),u=Be(e,"value"),b=Ve(u,g),C=S(()=>b.value===e.checkedValue),R=H(!1),c=H(!1),k=S(()=>{const{railStyle:o}=e;if(o)return o({focused:c.value,checked:C.value})});function $(o){const{"onUpdate:value":L,onChange:I,onUpdateValue:D}=e,{nTriggerFormInput:O,nTriggerFormChange:W}=r;L&&Z(L,o),D&&Z(D,o),I&&Z(I,o),g.value=o,O(),W()}function de(){const{nTriggerFormFocus:o}=r;o()}function ue(){const{nTriggerFormBlur:o}=r;o()}function he(){e.loading||i.value||(b.value!==e.checkedValue?$(e.checkedValue):$(e.uncheckedValue))}function ve(){c.value=!0,de()}function fe(){c.value=!1,ue(),R.value=!1}function ge(o){e.loading||i.value||o.key===" "&&(b.value!==e.checkedValue?$(e.checkedValue):$(e.uncheckedValue),R.value=!1)}function me(o){e.loading||i.value||o.key===" "&&(o.preventDefault(),R.value=!0)}const J=S(()=>{const{value:o}=_,{self:{opacityDisabled:L,railColor:I,railColorActive:D,buttonBoxShadow:O,buttonColor:W,boxShadowFocus:_e,loadingColor:pe,textColor:be,iconColor:we,[B("buttonHeight",o)]:y,[B("buttonWidth",o)]:xe,[B("buttonWidthPressed",o)]:ke,[B("railHeight",o)]:z,[B("railWidth",o)]:N,[B("railBorderRadius",o)]:$e,[B("buttonBorderRadius",o)]:ye},common:{cubicBezierEaseInOut:ze}}=f.value;let j,P,K;return A?(j=`calc((${z} - ${y}) / 2)`,P=`max(${z}, ${y})`,K=`max(${N}, calc(${N} + ${y} - ${z}))`):(j=X((x(z)-x(y))/2),P=X(Math.max(x(z),x(y))),K=x(z)>x(y)?N:X(x(N)+x(y)-x(z))),{"--n-bezier":ze,"--n-button-border-radius":ye,"--n-button-box-shadow":O,"--n-button-color":W,"--n-button-width":xe,"--n-button-width-pressed":ke,"--n-button-height":y,"--n-height":P,"--n-offset":j,"--n-opacity-disabled":L,"--n-rail-border-radius":$e,"--n-rail-color":I,"--n-rail-color-active":D,"--n-rail-height":z,"--n-rail-width":N,"--n-width":K,"--n-box-shadow-focus":_e,"--n-loading-color":pe,"--n-text-color":be,"--n-icon-color":we}}),M=t?Re("switch",S(()=>_.value[0]),J,e):void 0;return{handleClick:he,handleBlur:fe,handleFocus:ve,handleKeyup:ge,handleKeydown:me,mergedRailStyle:k,pressed:R,mergedClsPrefix:a,mergedValue:b,checked:C,mergedDisabled:i,cssVars:t?void 0:J,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:a,checked:t,mergedRailStyle:f,onRender:r,$slots:_}=this;r==null||r();const{checked:i,unchecked:g,icon:u,"checked-icon":b,"unchecked-icon":C}=_,R=!(Y(u)&&Y(b)&&Y(C));return l("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,R&&`${e}-switch--icon`,t&&`${e}-switch--active`,a&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},l("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:f},V(i,c=>V(g,k=>c||k?l("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},l("div",{class:`${e}-switch__rail-placeholder`},l("div",{class:`${e}-switch__button-placeholder`}),c),l("div",{class:`${e}-switch__rail-placeholder`},l("div",{class:`${e}-switch__button-placeholder`}),k)):null)),l("div",{class:`${e}-switch__button`},V(u,c=>V(b,k=>V(C,$=>l(Ne,null,{default:()=>this.loading?l(Ae,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(k||c)?l("div",{class:`${e}-switch__button-icon`,key:k?"checked-icon":"icon"},k||c):!this.checked&&($||c)?l("div",{class:`${e}-switch__button-icon`,key:$?"unchecked-icon":"icon"},$||c):null})))),V(i,c=>c&&l("div",{key:"checked",class:`${e}-switch__checked`},c)),V(g,c=>c&&l("div",{key:"unchecked",class:`${e}-switch__unchecked`},c)))))}}),qe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ge=s("g",{fill:"none"},[s("path",{d:"M4.5 5.75c0-.69.56-1.25 1.25-1.25h2a.75.75 0 0 0 0-1.5h-2A2.75 2.75 0 0 0 3 5.75v2a.75.75 0 0 0 1.5 0v-2zm0 12.5c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 0 1.5h-2A2.75 2.75 0 0 1 3 18.25v-2a.75.75 0 0 1 1.5 0v2zM18.25 4.5c.69 0 1.25.56 1.25 1.25v2a.75.75 0 0 0 1.5 0v-2A2.75 2.75 0 0 0 18.25 3h-2a.75.75 0 0 0 0 1.5h2zm1.25 13.75c0 .69-.56 1.25-1.25 1.25h-2a.75.75 0 0 0 0 1.5h2A2.75 2.75 0 0 0 21 18.25v-2a.75.75 0 0 0-1.5 0v2z",fill:"currentColor"})],-1),Je=[Ge],Qe=v({name:"FullScreenMaximize24Regular",render:function(a,t){return h(),m("svg",qe,Je)}}),et={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},tt=s("g",{fill:"none"},[s("path",{d:"M9 4a1 1 0 0 0-2 0v2.5a.5.5 0 0 1-.5.5H4a1 1 0 0 0 0 2h2.5A2.5 2.5 0 0 0 9 6.5V4zm0 16a1 1 0 1 1-2 0v-2.5a.5.5 0 0 0-.5-.5H4a1 1 0 1 1 0-2h2.5A2.5 2.5 0 0 1 9 17.5V20zm7-17a1 1 0 0 0-1 1v2.5A2.5 2.5 0 0 0 17.5 9H20a1 1 0 1 0 0-2h-2.5a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1zm-1 17a1 1 0 1 0 2 0v-2.5a.5.5 0 0 1 .5-.5H20a1 1 0 1 0 0-2h-2.5a2.5 2.5 0 0 0-2.5 2.5V20z",fill:"currentColor"})],-1),nt=[tt],ot=v({name:"FullScreenMinimize24Filled",render:function(a,t){return h(),m("svg",et,nt)}}),at={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 20 20"},it=s("g",{fill:"none"},[s("path",{d:"M8.5 11.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5zM11 3.5a.5.5 0 0 0-.576-.494l-7 1.07A.5.5 0 0 0 3 4.57v10.86a.5.5 0 0 0 .424.494l7 1.071a.5.5 0 0 0 .576-.494V10h5.172l-.997.874a.5.5 0 0 0 .658.752l1.996-1.75a.5.5 0 0 0 0-.752l-1.996-1.75a.499.499 0 1 0-.658.752l.997.874H11V3.5zm-1 .582V15.92L4 15V4.999l6-.917zM12.5 16H12v-5h1v4.5a.5.5 0 0 1-.5.5zM12 8V4h.5a.5.5 0 0 1 .5.5V8h-1z",fill:"currentColor"})],-1),st=[it],rt=v({name:"SignOut20Regular",render:function(a,t){return h(),m("svg",at,st)}}),ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},lt=s("path",{d:"M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z",fill:"currentColor"},null,-1),dt=[lt],ut=v({name:"DarkModeOutlined",render:function(a,t){return h(),m("svg",ct,dt)}}),ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},vt=s("path",{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z",fill:"currentColor"},null,-1),ft=[vt],gt=v({name:"LightModeOutlined",render:function(a,t){return h(),m("svg",ht,ft)}}),mt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},_t=s("path",{d:"M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3z",fill:"currentColor"},null,-1),pt=s("path",{d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",fill:"currentColor"},null,-1),bt=[_t,pt],wt=v({name:"UserAvatar",render:function(a,t){return h(),m("svg",mt,bt)}}),xt=v({name:"NavigationSideAction",emits:["click"],setup(){const{proxy:e}=Pe();function a(){e.$emit("click")}return{title:S(()=>ae),handleClick:a}}}),kt={class:"side-action-container"},$t={class:"action-list"};function yt(e,a,t,f,r,_){return h(),m("div",kt,[s("ul",$t,[(h(),m(Fe,null,Te(3,i=>s("li",{key:i,class:"action-item bg-#eee dark:bg-#555"}," Action "+ie(i),1)),64))])])}const zt=T(xt,[["render",yt],["__scopeId","data-v-d2bf7722"]]),St=v({name:"NavigationAvatar",components:{UserAvatar:wt},setup(){Le(),se();const e=t=>()=>l(U,null,{default:()=>l(t)});return{commandList:S(()=>[{label:"退出登录",key:"退出按钮",icon:e(rt),props:{onClick:()=>{Ie.remove("token"),window.location.reload()}}}])}}}),Ct={class:"navigation-avatar"},Bt=s("span",{class:"px-4px"},"Wisdom",-1);function Vt(e,a,t,f,r,_){const i=re("UserAvatar"),g=U,u=Ke;return h(),q(u,{trigger:"hover","show-arrow":"",options:e.commandList},{default:F(()=>[s("div",Ct,[p(g,{size:24},{default:F(()=>[p(i)]),_:1}),Bt])]),_:1},8,["options"])}const Rt=T(St,[["render",Vt]]),Mt={class:"navigation-change-theme"},Nt=v({name:"NavigationChangeTheme",__name:"ChangeTheme",setup(e){const a=De(),{isDark:t}=He(),f=H(a.theme),r=({focused:i,checked:g})=>{const u={};return g?(u.background="#313136",u.boxShadow="0 0 0 1px rgb(100 100 100)"):(u.background="#f6f5f7",u.boxShadow="0 0 0 1px rgb(60 60 67 / 40%)"),u},_=i=>{a.setTheme(i)};return(i,g)=>{const u=U,b=Ze;return h(),m("div",Mt,[p(b,{value:d(f),"onUpdate:value":[g[0]||(g[0]=C=>Ue(f)?f.value=C:null),_],"checked-value":"dark","unchecked-value":"light","rail-style":r,style:Oe({"--n-icon-color":d(t)?"#fff":"#000","--n-button-color":d(t)?"#000":"#fff","--n-button-box-shadow":"none"})},{"checked-icon":F(()=>[p(u,{component:d(ut)},null,8,["component"])]),"unchecked-icon":F(()=>[p(u,{component:d(gt)},null,8,["component"])]),_:1},8,["value","style"])])}}}),At=T(Nt,[["__scopeId","data-v-6192c3f3"]]),Ft={class:"flex items-center h-full cursor-pointer"},Tt=v({name:"NavigationFullScreen",__name:"FullScreen",setup(e){const{isFullscreen:a,toggle:t}=We();return(f,r)=>{const _=U;return h(),m("div",Ft,[p(_,{size:22,component:d(a)?d(ot):d(Qe),onClick:r[0]||(r[0]=i=>d(t)())},null,8,["component"])])}}}),Lt=v({name:"NavigationSideLogo",props:{auth:{type:Boolean,default:!0}},setup(){return{title:S(()=>ae)}}}),It=e=>(ce("data-v-ec3486b9"),e=e(),le(),e),Dt={class:"side-logo-container"},Ht=It(()=>s("img",{class:"side-logo-img",src:Ee,alt:"商标"},null,-1));function Ut(e,a,t,f,r,_){const i=re("router-link");return h(),m("div",Dt,[p(i,{to:"/"},{default:F(()=>[Ht,s("h1",{class:G(["side-logo-title c-#303133 dark:c-#fff",{"c-#303133 dark:c-#fff":e.auth,"c-#fff dark:c-#303133":!e.auth}])},ie(e.title),3)]),_:1})])}const Ot=T(Lt,[["render",Ut],["__scopeId","data-v-ec3486b9"]]),Wt=e=>(ce("data-v-3016aa62"),e=e(),le(),e),jt=Wt(()=>s("div",{style:{flex:"1"}},null,-1)),Pt=v({name:"NavigationNavBar",__name:"NavBar",props:{fixed:{type:Boolean,default:!1}},setup(e){const a=se(),t=S(()=>a.name!=="UserLogin");return(f,r)=>(h(),m("header",{class:G(["navigation-navbar-header-container",{"fixed-header":e.fixed,"navbar-shadow dark:dark-navbar-shadow":d(t),"login-navbar-shadow dark:shadow-none":!d(t)}])},[s("div",{class:G(["navbar-header-box",{"bg-#fff dark:bg-#1e1e20":d(t),"bg-#8d8b89 bg-opacity-30":!d(t)}])},[p(Ot,{auth:d(t)},null,8,["auth"]),jt,d(t)?(h(),q(zt,{key:0})):ne("",!0),p(At),p(je),p(Tt),d(t)?(h(),q(Rt,{key:1})):ne("",!0)],2)],2))}}),Zt=T(Pt,[["__scopeId","data-v-3016aa62"]]);export{Zt as N,Ot as a};
