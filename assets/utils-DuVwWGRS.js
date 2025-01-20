import{S as ee,bw as V,I as A,aD as ne,d as F,n as a,q as k,x as z,v as O,M as te,L as I,bx as Ee,k as x,a4 as P,X as oe,C as ie,K as re,af as le,R as D,ak as $e,G as M,H as He,ah as Ve,W as De,A as S,by as je,f as B,aZ as Ke,a5 as j,V as W,Y as X,D as Ae,Z as Ge,B as qe,a1 as Ze}from"./index-BQQ2VPbK.js";import{F as Ue,V as We}from"./FocusDetector-ugadypO-.js";import{i as G,b as Xe}from"./Follower-BII3ZYJ5.js";import{a as Ye,h as Y}from"./create-DeO8t-sD.js";import{u as Je}from"./Eye-Bo3C4vt5.js";function Qe(e,t){t&&(ee(()=>{const{value:o}=e;o&&V.registerHandler(o,t)}),A(e,(o,r)=>{r&&V.unregisterHandler(r)},{deep:!1}),ne(()=>{const{value:o}=e;o&&V.unregisterHandler(o)}))}function K(e){const t=e.filter(o=>o!==void 0);if(t.length!==0)return t.length===1?t[0]:o=>{e.forEach(r=>{r&&r(o)})}}const en=F({name:"Checkmark",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},a("g",{fill:"none"},a("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),nn=F({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),tn=k("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[z("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[O("+",[z("description",`
 margin-top: 8px;
 `)])]),z("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),z("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),on=Object.assign(Object.assign({},I.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),rn=F({name:"Empty",props:on,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedComponentPropsRef:r}=te(e),s=I("Empty","-empty",tn,Ee,e,t),{localeRef:d}=Je("Empty"),l=x(()=>{var c,p,b;return(c=e.description)!==null&&c!==void 0?c:(b=(p=r==null?void 0:r.value)===null||p===void 0?void 0:p.Empty)===null||b===void 0?void 0:b.description}),u=x(()=>{var c,p;return((p=(c=r==null?void 0:r.value)===null||c===void 0?void 0:c.Empty)===null||p===void 0?void 0:p.renderIcon)||(()=>a(nn,null))}),m=x(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:p},self:{[P("iconSize",c)]:b,[P("fontSize",c)]:y,textColor:f,iconColor:R,extraTextColor:L}}=s.value;return{"--n-icon-size":b,"--n-font-size":y,"--n-bezier":p,"--n-text-color":f,"--n-icon-color":R,"--n-extra-text-color":L}}),C=o?oe("empty",x(()=>{let c="";const{size:p}=e;return c+=p[0],c}),m,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:u,localizedDescription:x(()=>l.value||d.value.description),cssVars:o?void 0:m,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:o}=this;return o==null||o(),a("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${t}-empty__icon`},e.icon?e.icon():a(ie,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${t}-empty__extra`},e.extra()):null)}}),J=F({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:o,nodePropsRef:r}=re(G);return{labelField:o,nodeProps:r,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:o,nodeProps:r,tmNode:{rawNode:s}}=this,d=r==null?void 0:r(s),l=t?t(s,!1):le(s[this.labelField],s,!1),u=a("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d==null?void 0:d.class]}),l);return s.render?s.render({node:u,option:s}):o?o({node:u,option:s,selected:!1}):u}});function ln(e,t){return a($e,{name:"fade-in-scale-up-transition"},{default:()=>e?a(ie,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>a(en)}):null})}const Q=F({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:o,multipleRef:r,valueSetRef:s,renderLabelRef:d,renderOptionRef:l,labelFieldRef:u,valueFieldRef:m,showCheckmarkRef:C,nodePropsRef:c,handleOptionClick:p,handleOptionMouseEnter:b}=re(G),y=D(()=>{const{value:g}=o;return g?e.tmNode.key===g.key:!1});function f(g){const{tmNode:v}=e;v.disabled||p(g,v)}function R(g){const{tmNode:v}=e;v.disabled||b(g,v)}function L(g){const{tmNode:v}=e,{value:w}=y;v.disabled||w||b(g,v)}return{multiple:r,isGrouped:D(()=>{const{tmNode:g}=e,{parent:v}=g;return v&&v.rawNode.type==="group"}),showCheckmark:C,nodeProps:c,isPending:y,isSelected:D(()=>{const{value:g}=t,{value:v}=r;if(g===null)return!1;const w=e.tmNode.rawNode[m.value];if(v){const{value:$}=s;return $.has(w)}else return g===w}),labelField:u,renderLabel:d,renderOption:l,handleMouseMove:L,handleMouseEnter:R,handleClick:f}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:o,isPending:r,isGrouped:s,showCheckmark:d,nodeProps:l,renderOption:u,renderLabel:m,handleClick:C,handleMouseEnter:c,handleMouseMove:p}=this,b=ln(o,e),y=m?[m(t,o),d&&b]:[le(t[this.labelField],t,o),d&&b],f=l==null?void 0:l(t),R=a("div",Object.assign({},f,{class:[`${e}-base-select-option`,t.class,f==null?void 0:f.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:d}],style:[(f==null?void 0:f.style)||"",t.style||""],onClick:K([C,f==null?void 0:f.onClick]),onMouseenter:K([c,f==null?void 0:f.onMouseenter]),onMousemove:K([p,f==null?void 0:f.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},y));return t.render?t.render({node:R,option:t,selected:o}):u?u({node:R,option:t,selected:o}):R}}),an=k("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[k("scrollbar",`
 max-height: var(--n-height);
 `),k("virtual-list",`
 max-height: var(--n-height);
 `),k("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[z("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),k("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),k("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),z("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),z("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),z("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),z("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),k("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),k("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[M("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),O("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),O("&:active",`
 color: var(--n-option-text-color-pressed);
 `),M("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),M("pending",[O("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),M("selected",`
 color: var(--n-option-text-color-active);
 `,[O("&::before",`
 background-color: var(--n-option-color-active);
 `),M("pending",[O("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),M("disabled",`
 cursor: not-allowed;
 `,[He("selected",`
 color: var(--n-option-text-color-disabled);
 `),M("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Ve({enterScale:"0.5"})])])]),pn=F({name:"InternalSelectMenu",props:Object.assign(Object.assign({},I.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:o}=te(e),r=De("InternalSelectMenu",o,t),s=I("InternalSelectMenu","-internal-select-menu",an,je,e,S(e,"clsPrefix")),d=B(null),l=B(null),u=B(null),m=x(()=>e.treeMate.getFlattenedNodes()),C=x(()=>Ye(m.value)),c=B(null);function p(){const{treeMate:n}=e;let i=null;const{value:h}=e;h===null?i=n.getFirstAvailableNode():(e.multiple?i=n.getNode((h||[])[(h||[]).length-1]):i=n.getNode(h),(!i||i.disabled)&&(i=n.getFirstAvailableNode())),T(i||null)}function b(){const{value:n}=c;n&&!e.treeMate.getNode(n.key)&&(c.value=null)}let y;A(()=>e.show,n=>{n?y=A(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?p():b(),Ze(q)):b()},{immediate:!0}):y==null||y()},{immediate:!0}),ne(()=>{y==null||y()});const f=x(()=>Ke(s.value.self[P("optionHeight",e.size)])),R=x(()=>j(s.value.self[P("padding",e.size)])),L=x(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),g=x(()=>{const n=m.value;return n&&n.length===0});function v(n){const{onToggle:i}=e;i&&i(n)}function w(n){const{onScroll:i}=e;i&&i(n)}function $(n){var i;(i=u.value)===null||i===void 0||i.sync(),w(n)}function se(){var n;(n=u.value)===null||n===void 0||n.sync()}function de(){const{value:n}=c;return n||null}function ce(n,i){i.disabled||T(i,!1)}function ue(n,i){i.disabled||v(i)}function fe(n){var i;Y(n,"action")||(i=e.onKeyup)===null||i===void 0||i.call(e,n)}function pe(n){var i;Y(n,"action")||(i=e.onKeydown)===null||i===void 0||i.call(e,n)}function he(n){var i;(i=e.onMousedown)===null||i===void 0||i.call(e,n),!e.focusable&&n.preventDefault()}function ge(){const{value:n}=c;n&&T(n.getNext({loop:!0}),!0)}function ve(){const{value:n}=c;n&&T(n.getPrev({loop:!0}),!0)}function T(n,i=!1){c.value=n,i&&q()}function q(){var n,i;const h=c.value;if(!h)return;const _=C.value(h.key);_!==null&&(e.virtualScroll?(n=l.value)===null||n===void 0||n.scrollTo({index:_}):(i=u.value)===null||i===void 0||i.scrollTo({index:_,elSize:f.value}))}function me(n){var i,h;!((i=d.value)===null||i===void 0)&&i.contains(n.target)&&((h=e.onFocus)===null||h===void 0||h.call(e,n))}function be(n){var i,h;!((i=d.value)===null||i===void 0)&&i.contains(n.relatedTarget)||(h=e.onBlur)===null||h===void 0||h.call(e,n)}W(G,{handleOptionMouseEnter:ce,handleOptionClick:ue,valueSetRef:L,pendingTmNodeRef:c,nodePropsRef:S(e,"nodeProps"),showCheckmarkRef:S(e,"showCheckmark"),multipleRef:S(e,"multiple"),valueRef:S(e,"value"),renderLabelRef:S(e,"renderLabel"),renderOptionRef:S(e,"renderOption"),labelFieldRef:S(e,"labelField"),valueFieldRef:S(e,"valueField")}),W(Xe,d),ee(()=>{const{value:n}=u;n&&n.sync()});const Z=x(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:i},self:{height:h,borderRadius:_,color:xe,groupHeaderTextColor:Ce,actionDividerColor:ze,optionTextColorPressed:Re,optionTextColor:Se,optionTextColorDisabled:ke,optionTextColorActive:we,optionOpacityDisabled:Me,optionCheckColor:Pe,actionTextColor:Ne,optionColorPending:Oe,optionColorActive:Fe,loadingColor:Le,loadingSize:Te,optionColorActivePending:_e,[P("optionFontSize",n)]:Be,[P("optionHeight",n)]:Ie,[P("optionPadding",n)]:H}}=s.value;return{"--n-height":h,"--n-action-divider-color":ze,"--n-action-text-color":Ne,"--n-bezier":i,"--n-border-radius":_,"--n-color":xe,"--n-option-font-size":Be,"--n-group-header-text-color":Ce,"--n-option-check-color":Pe,"--n-option-color-pending":Oe,"--n-option-color-active":Fe,"--n-option-color-active-pending":_e,"--n-option-height":Ie,"--n-option-opacity-disabled":Me,"--n-option-text-color":Se,"--n-option-text-color-active":we,"--n-option-text-color-disabled":ke,"--n-option-text-color-pressed":Re,"--n-option-padding":H,"--n-option-padding-left":j(H,"left"),"--n-option-padding-right":j(H,"right"),"--n-loading-color":Le,"--n-loading-size":Te}}),{inlineThemeDisabled:U}=e,N=U?oe("internal-select-menu",x(()=>e.size[0]),Z,e):void 0,ye={selfRef:d,next:ge,prev:ve,getPendingTmNode:de};return Qe(d,e.onResize),Object.assign({mergedTheme:s,mergedClsPrefix:t,rtlEnabled:r,virtualListRef:l,scrollbarRef:u,itemSize:f,padding:R,flattenedNodes:m,empty:g,virtualListContainer(){const{value:n}=l;return n==null?void 0:n.listElRef},virtualListContent(){const{value:n}=l;return n==null?void 0:n.itemsElRef},doScroll:w,handleFocusin:me,handleFocusout:be,handleKeyUp:fe,handleKeyDown:pe,handleMouseDown:he,handleVirtualListResize:se,handleVirtualListScroll:$,cssVars:U?void 0:Z,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender},ye)},render(){const{$slots:e,virtualScroll:t,clsPrefix:o,mergedTheme:r,themeClass:s,onRender:d}=this;return d==null||d(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,s,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},X(e.header,l=>l&&a("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},l)),this.loading?a("div",{class:`${o}-base-select-menu__loading`},a(Ae,{clsPrefix:o,strokeWidth:20})):this.empty?a("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},qe(e.empty,()=>[a(rn,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):a(Ge,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?a(We,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:l})=>l.isGroup?a(J,{key:l.key,clsPrefix:o,tmNode:l}):l.ignored?null:a(Q,{clsPrefix:o,key:l.key,tmNode:l})}):a("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(l=>l.isGroup?a(J,{key:l.key,clsPrefix:o,tmNode:l}):a(Q,{clsPrefix:o,key:l.key,tmNode:l})))}),X(e.action,l=>l&&[a("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},l),a(Ue,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function E(e){return e.type==="group"}function ae(e){return e.type==="ignored"}function hn(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function gn(e,t){return{getIsGroup:E,getIgnored:ae,getKey(r){return E(r)?r.name||r.key||"key-required":r[e]},getChildren(r){return r[t]}}}function vn(e,t,o,r){if(!t)return e;function s(d){if(!Array.isArray(d))return[];const l=[];for(const u of d)if(E(u)){const m=s(u[r]);m.length&&l.push(Object.assign({},u,{[r]:m}))}else{if(ae(u))continue;t(o,u)&&l.push(u)}return l}return s(e)}function mn(e,t,o){const r=new Map;return e.forEach(s=>{E(s)?s[o].forEach(d=>{r.set(d[t],d)}):r.set(s[t],s)}),r}export{pn as N,gn as a,rn as b,mn as c,vn as f,K as m,hn as p,Qe as u};
