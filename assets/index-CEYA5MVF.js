import{v as N,q as y,x as p,K as pe,J as U,d as ue,M as re,L as me,X as Xe,g as w,A as Z,ae as Et,k as A,af as Te,G as ze,a3 as Dt,T as Vt,V as jt,Y as de,Z as et,$ as Ie,n as i,ag as Ut,F as Lt,ah as Nt,ai as Wt,Q as Me,R as Ze,aj as Ht,ak as Kt,al as Gt,am as qt,an as tt,ao as Yt,ap as Jt,a5 as L,E as Qt,H as Xt,S as ot,aq as lt,a0 as Zt,W as eo,ar as to,o as it,b as st,e as Be,as as oo}from"./index-BKhi4FxM.js";import{u as no,p as qe,f as ro,c as ao,N as lo,a as io}from"./utils-Czh_a0dO.js";import{u as so}from"./use-compitable-BJHz0pPo.js";import{c as uo,h as Ye}from"./create-D3Vn69pI.js";import{u as co}from"./Eye-Dt3Q3uiE.js";import{u as Qe,B as ho,V as fo,a as vo}from"./Follower-D9AS3uyg.js";import{N as bo}from"./Input-C5IRk3XE.js";import{_ as Je}from"./Tag-CGKEXBfy.js";import{V as nt}from"./index-V3S0jIau.js";import{_ as go}from"./Popover-Ck4uvEuu.js";import{g as po}from"./get-slot-Bk_rJcZu.js";import{m as mo}from"./member-avatar-CR9m-KS_.js";function rt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const wo=N([y("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[y("base-loading",`
 color: var(--n-loading-color);
 `),y("base-selection-tags","min-height: var(--n-height);"),p("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),p("state-border",`
 z-index: 1;
 border-color: #0000;
 `),y("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[p("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),y("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[p("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),y("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[p("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),y("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),y("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[y("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[p("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),p("render-label",`
 color: var(--n-text-color);
 `)]),pe("disabled",[N("&:hover",[p("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),U("focus",[p("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),U("active",[p("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),y("base-selection-label","background-color: var(--n-color-active);"),y("base-selection-tags","background-color: var(--n-color-active);")])]),U("disabled","cursor: not-allowed;",[p("arrow",`
 color: var(--n-arrow-color-disabled);
 `),y("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[y("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),p("render-label",`
 color: var(--n-text-color-disabled);
 `)]),y("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),y("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),y("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[p("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),p("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>U(`${e}-status`,[p("state-border",`border: var(--n-border-${e});`),pe("disabled",[N("&:hover",[p("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),U("active",[p("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),y("base-selection-label",`background-color: var(--n-color-active-${e});`),y("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),U("focus",[p("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),y("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),y("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[N("&:last-child","padding-right: 0;"),y("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[p("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),xo=ue({name:"InternalSelection",props:Object.assign(Object.assign({},re.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:u}=me(e),c=Xe("InternalSelection",u,r),s=w(null),x=w(null),T=w(null),l=w(null),F=w(null),_=w(null),O=w(null),z=w(null),C=w(null),k=w(null),B=w(!1),I=w(!1),V=w(!1),E=re("InternalSelection","-internal-selection",wo,Et,e,Z(e,"clsPrefix")),f=A(()=>e.clearable&&!e.disabled&&(V.value||e.active)),R=A(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Te(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),S=A(()=>{const o=e.selectedOption;if(o)return o[e.labelField]}),v=A(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function M(){var o;const{value:a}=s;if(a){const{value:$}=x;$&&($.style.width=`${a.offsetWidth}px`,e.maxTagCount!=="responsive"&&((o=C.value)===null||o===void 0||o.sync({showAllItemsBeforeCalculate:!1})))}}function j(){const{value:o}=k;o&&(o.style.display="none")}function Y(){const{value:o}=k;o&&(o.style.display="inline-block")}ze(Z(e,"active"),o=>{o||j()}),ze(Z(e,"pattern"),()=>{e.multiple&&Dt(M)});function J(o){const{onFocus:a}=e;a&&a(o)}function W(o){const{onBlur:a}=e;a&&a(o)}function H(o){const{onDeleteOption:a}=e;a&&a(o)}function Q(o){const{onClear:a}=e;a&&a(o)}function P(o){const{onPatternInput:a}=e;a&&a(o)}function le(o){var a;(!o.relatedTarget||!(!((a=T.value)===null||a===void 0)&&a.contains(o.relatedTarget)))&&J(o)}function ie(o){var a;!((a=T.value)===null||a===void 0)&&a.contains(o.relatedTarget)||W(o)}function ee(o){Q(o)}function ce(){V.value=!0}function te(){V.value=!1}function he(o){!e.active||!e.filterable||o.target!==x.value&&o.preventDefault()}function X(o){H(o)}const oe=w(!1);function Pe(o){if(o.key==="Backspace"&&!oe.value&&!e.pattern.length){const{selectedOptions:a}=e;a!=null&&a.length&&X(a[a.length-1])}}let fe=null;function $e(o){const{value:a}=s;if(a){const $=o.target.value;a.textContent=$,M()}e.ignoreComposition&&oe.value?fe=o:P(o)}function Ae(){oe.value=!0}function we(){oe.value=!1,e.ignoreComposition&&P(fe),fe=null}function xe(o){var a;I.value=!0,(a=e.onPatternFocus)===null||a===void 0||a.call(e,o)}function ae(o){var a;I.value=!1,(a=e.onPatternBlur)===null||a===void 0||a.call(e,o)}function K(){var o,a;if(e.filterable)I.value=!1,(o=_.value)===null||o===void 0||o.blur(),(a=x.value)===null||a===void 0||a.blur();else if(e.multiple){const{value:$}=l;$==null||$.blur()}else{const{value:$}=F;$==null||$.blur()}}function Ce(){var o,a,$;e.filterable?(I.value=!1,(o=_.value)===null||o===void 0||o.focus()):e.multiple?(a=l.value)===null||a===void 0||a.focus():($=F.value)===null||$===void 0||$.focus()}function se(){const{value:o}=x;o&&(Y(),o.focus())}function Ee(){const{value:o}=x;o&&o.blur()}function De(o){const{value:a}=O;a&&a.setTextContent(`+${o}`)}function Ve(){const{value:o}=z;return o}function je(){return x.value}let ve=null;function be(){ve!==null&&window.clearTimeout(ve)}function Ue(){e.active||(be(),ve=window.setTimeout(()=>{v.value&&(B.value=!0)},100))}function Le(){be()}function Ne(o){o||(be(),B.value=!1)}ze(v,o=>{o||(B.value=!1)}),Vt(()=>{jt(()=>{const o=_.value;o&&(e.disabled?o.removeAttribute("tabindex"):o.tabIndex=I.value?-1:0)})}),no(T,e.onResize);const{inlineThemeDisabled:ye}=e,ge=A(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:a},self:{borderRadius:$,color:We,placeholderColor:He,textColor:Re,paddingSingle:Se,paddingMultiple:Fe,caretColor:Ke,colorDisabled:Ge,textColorDisabled:Oe,placeholderColorDisabled:ne,colorActive:t,boxShadowFocus:n,boxShadowActive:d,boxShadowHover:m,border:b,borderFocus:h,borderHover:g,borderActive:D,arrowColor:q,arrowColorDisabled:ht,loadingColor:ft,colorActiveWarning:vt,boxShadowFocusWarning:bt,boxShadowActiveWarning:gt,boxShadowHoverWarning:pt,borderWarning:mt,borderFocusWarning:wt,borderHoverWarning:xt,borderActiveWarning:Ct,colorActiveError:yt,boxShadowFocusError:Rt,boxShadowActiveError:St,boxShadowHoverError:Ft,borderError:Ot,borderFocusError:kt,borderHoverError:_t,borderActiveError:Tt,clearColor:zt,clearColorHover:Mt,clearColorPressed:Bt,clearSize:It,arrowSize:Pt,[de("height",o)]:$t,[de("fontSize",o)]:At}}=E.value,ke=et(Se),_e=et(Fe);return{"--n-bezier":a,"--n-border":b,"--n-border-active":D,"--n-border-focus":h,"--n-border-hover":g,"--n-border-radius":$,"--n-box-shadow-active":d,"--n-box-shadow-focus":n,"--n-box-shadow-hover":m,"--n-caret-color":Ke,"--n-color":We,"--n-color-active":t,"--n-color-disabled":Ge,"--n-font-size":At,"--n-height":$t,"--n-padding-single-top":ke.top,"--n-padding-multiple-top":_e.top,"--n-padding-single-right":ke.right,"--n-padding-multiple-right":_e.right,"--n-padding-single-left":ke.left,"--n-padding-multiple-left":_e.left,"--n-padding-single-bottom":ke.bottom,"--n-padding-multiple-bottom":_e.bottom,"--n-placeholder-color":He,"--n-placeholder-color-disabled":ne,"--n-text-color":Re,"--n-text-color-disabled":Oe,"--n-arrow-color":q,"--n-arrow-color-disabled":ht,"--n-loading-color":ft,"--n-color-active-warning":vt,"--n-box-shadow-focus-warning":bt,"--n-box-shadow-active-warning":gt,"--n-box-shadow-hover-warning":pt,"--n-border-warning":mt,"--n-border-focus-warning":wt,"--n-border-hover-warning":xt,"--n-border-active-warning":Ct,"--n-color-active-error":yt,"--n-box-shadow-focus-error":Rt,"--n-box-shadow-active-error":St,"--n-box-shadow-hover-error":Ft,"--n-border-error":Ot,"--n-border-focus-error":kt,"--n-border-hover-error":_t,"--n-border-active-error":Tt,"--n-clear-size":It,"--n-clear-color":zt,"--n-clear-color-hover":Mt,"--n-clear-color-pressed":Bt,"--n-arrow-size":Pt}}),G=ye?Ie("internal-selection",A(()=>e.size[0]),ge,e):void 0;return{mergedTheme:E,mergedClearable:f,mergedClsPrefix:r,rtlEnabled:c,patternInputFocused:I,filterablePlaceholder:R,label:S,selected:v,showTagsPanel:B,isComposing:oe,counterRef:O,counterWrapperRef:z,patternInputMirrorRef:s,patternInputRef:x,selfRef:T,multipleElRef:l,singleElRef:F,patternInputWrapperRef:_,overflowRef:C,inputTagElRef:k,handleMouseDown:he,handleFocusin:le,handleClear:ee,handleMouseEnter:ce,handleMouseLeave:te,handleDeleteOption:X,handlePatternKeyDown:Pe,handlePatternInputInput:$e,handlePatternInputBlur:ae,handlePatternInputFocus:xe,handleMouseEnterCounter:Ue,handleMouseLeaveCounter:Le,handleFocusout:ie,handleCompositionEnd:we,handleCompositionStart:Ae,onPopoverUpdateShow:Ne,focus:Ce,focusInput:se,blur:K,blurInput:Ee,updateCounter:De,getCounter:Ve,getTail:je,renderLabel:e.renderLabel,cssVars:ye?void 0:ge,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender}},render(){const{status:e,multiple:r,size:u,disabled:c,filterable:s,maxTagCount:x,bordered:T,clsPrefix:l,ellipsisTagPopoverProps:F,onRender:_,renderTag:O,renderLabel:z}=this;_==null||_();const C=x==="responsive",k=typeof x=="number",B=C||k,I=i(Ut,null,{default:()=>i(bo,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var E,f;return(f=(E=this.$slots).arrow)===null||f===void 0?void 0:f.call(E)}})});let V;if(r){const{labelField:E}=this,f=P=>i("div",{class:`${l}-base-selection-tag-wrapper`,key:P.value},O?O({option:P,handleClose:()=>{this.handleDeleteOption(P)}}):i(Je,{size:u,closable:!P.disabled,disabled:c,onClose:()=>{this.handleDeleteOption(P)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>z?z(P,!0):Te(P[E],P,!0)})),R=()=>(k?this.selectedOptions.slice(0,x):this.selectedOptions).map(f),S=s?i("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:c,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,v=C?()=>i("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(Je,{size:u,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:c})):void 0;let M;if(k){const P=this.selectedOptions.length-x;P>0&&(M=i("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},i(Je,{size:u,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:c},{default:()=>`+${P}`})))}const j=C?s?i(nt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:v,tail:()=>S}):i(nt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:v}):k&&M?R().concat(M):R(),Y=B?()=>i("div",{class:`${l}-base-selection-popover`},C?R():this.selectedOptions.map(f)):void 0,J=B?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},F):null,H=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},i("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,Q=s?i("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},j,C?null:S,I):i("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:c?void 0:0},j,I);V=i(Lt,null,B?i(go,Object.assign({},J,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Q,default:Y}):Q,H)}else if(s){const E=this.pattern||this.isComposing,f=this.active?!E:!this.selected,R=this.active?!1:this.selected;V=i("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:rt(this.label)},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:c,disabled:c,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),R?i("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},i("div",{class:`${l}-base-selection-overlay__wrapper`},O?O({option:this.selectedOption,handleClose:()=>{}}):z?z(this.selectedOption,!0):Te(this.label,this.selectedOption,!0))):null,f?i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,I)}else V=i("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${l}-base-selection-input`,title:rt(this.label),key:"input"},i("div",{class:`${l}-base-selection-input__content`},O?O({option:this.selectedOption,handleClose:()=>{}}):z?z(this.selectedOption,!0):Te(this.label,this.selectedOption,!0))):i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),I);return i("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},V,T?i("div",{class:`${l}-base-selection__border`}):null,T?i("div",{class:`${l}-base-selection__state-border`}):null)}}),Co=N([y("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),y("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Nt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),yo=Object.assign(Object.assign({},re.props),{to:Qe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Xo=ue({name:"Select",props:yo,setup(e){const{mergedClsPrefixRef:r,mergedBorderedRef:u,namespaceRef:c,inlineThemeDisabled:s}=me(e),x=re("Select","-select",Co,Wt,e,r),T=w(e.defaultValue),l=Z(e,"value"),F=Me(l,T),_=w(!1),O=w(""),z=so(e,["items","options"]),C=w([]),k=w([]),B=A(()=>k.value.concat(C.value).concat(z.value)),I=A(()=>{const{filter:t}=e;if(t)return t;const{labelField:n,valueField:d}=e;return(m,b)=>{if(!b)return!1;const h=b[n];if(typeof h=="string")return qe(m,h);const g=b[d];return typeof g=="string"?qe(m,g):typeof g=="number"?qe(m,String(g)):!1}}),V=A(()=>{if(e.remote)return z.value;{const{value:t}=B,{value:n}=O;return!n.length||!e.filterable?t:ro(t,I.value,n,e.childrenField)}}),E=A(()=>{const{valueField:t,childrenField:n}=e,d=io(t,n);return uo(V.value,d)}),f=A(()=>ao(B.value,e.valueField,e.childrenField)),R=w(!1),S=Me(Z(e,"show"),R),v=w(null),M=w(null),j=w(null),{localeRef:Y}=co("Select"),J=A(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:Y.value.placeholder}),W=[],H=w(new Map),Q=A(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:n,valueField:d}=e;return m=>({[n]:String(m),[d]:m})}return t===!1?!1:n=>Object.assign(t(n),{value:n})});function P(t){const n=e.remote,{value:d}=H,{value:m}=f,{value:b}=Q,h=[];return t.forEach(g=>{if(m.has(g))h.push(m.get(g));else if(n&&d.has(g))h.push(d.get(g));else if(b){const D=b(g);D&&h.push(D)}}),h}const le=A(()=>{if(e.multiple){const{value:t}=F;return Array.isArray(t)?P(t):[]}return null}),ie=A(()=>{const{value:t}=F;return!e.multiple&&!Array.isArray(t)?t===null?null:P([t])[0]||null:null}),ee=Ze(e),{mergedSizeRef:ce,mergedDisabledRef:te,mergedStatusRef:he}=ee;function X(t,n){const{onChange:d,"onUpdate:value":m,onUpdateValue:b}=e,{nTriggerFormChange:h,nTriggerFormInput:g}=ee;d&&L(d,t,n),b&&L(b,t,n),m&&L(m,t,n),T.value=t,h(),g()}function oe(t){const{onBlur:n}=e,{nTriggerFormBlur:d}=ee;n&&L(n,t),d()}function Pe(){const{onClear:t}=e;t&&L(t)}function fe(t){const{onFocus:n,showOnFocus:d}=e,{nTriggerFormFocus:m}=ee;n&&L(n,t),m(),d&&ae()}function $e(t){const{onSearch:n}=e;n&&L(n,t)}function Ae(t){const{onScroll:n}=e;n&&L(n,t)}function we(){var t;const{remote:n,multiple:d}=e;if(n){const{value:m}=H;if(d){const{valueField:b}=e;(t=le.value)===null||t===void 0||t.forEach(h=>{m.set(h[b],h)})}else{const b=ie.value;b&&m.set(b[e.valueField],b)}}}function xe(t){const{onUpdateShow:n,"onUpdate:show":d}=e;n&&L(n,t),d&&L(d,t),R.value=t}function ae(){te.value||(xe(!0),R.value=!0,e.filterable&&Fe())}function K(){xe(!1)}function Ce(){O.value="",k.value=W}const se=w(!1);function Ee(){e.filterable&&(se.value=!0)}function De(){e.filterable&&(se.value=!1,S.value||Ce())}function Ve(){te.value||(S.value?e.filterable?Fe():K():ae())}function je(t){var n,d;!((d=(n=j.value)===null||n===void 0?void 0:n.selfRef)===null||d===void 0)&&d.contains(t.relatedTarget)||(_.value=!1,oe(t),K())}function ve(t){fe(t),_.value=!0}function be(){_.value=!0}function Ue(t){var n;!((n=v.value)===null||n===void 0)&&n.$el.contains(t.relatedTarget)||(_.value=!1,oe(t),K())}function Le(){var t;(t=v.value)===null||t===void 0||t.focus(),K()}function Ne(t){var n;S.value&&(!((n=v.value)===null||n===void 0)&&n.$el.contains(Yt(t))||K())}function ye(t){if(!Array.isArray(t))return[];if(Q.value)return Array.from(t);{const{remote:n}=e,{value:d}=f;if(n){const{value:m}=H;return t.filter(b=>d.has(b)||m.has(b))}else return t.filter(m=>d.has(m))}}function ge(t){G(t.rawNode)}function G(t){if(te.value)return;const{tag:n,remote:d,clearFilterAfterSelect:m,valueField:b}=e;if(n&&!d){const{value:h}=k,g=h[0]||null;if(g){const D=C.value;D.length?D.push(g):C.value=[g],k.value=W}}if(d&&H.value.set(t[b],t),e.multiple){const h=ye(F.value),g=h.findIndex(D=>D===t[b]);if(~g){if(h.splice(g,1),n&&!d){const D=o(t[b]);~D&&(C.value.splice(D,1),m&&(O.value=""))}}else h.push(t[b]),m&&(O.value="");X(h,P(h))}else{if(n&&!d){const h=o(t[b]);~h?C.value=[C.value[h]]:C.value=W}Se(),K(),X(t[b],t)}}function o(t){return C.value.findIndex(d=>d[e.valueField]===t)}function a(t){S.value||ae();const{value:n}=t.target;O.value=n;const{tag:d,remote:m}=e;if($e(n),d&&!m){if(!n){k.value=W;return}const{onCreate:b}=e,h=b?b(n):{[e.labelField]:n,[e.valueField]:n},{valueField:g,labelField:D}=e;z.value.some(q=>q[g]===h[g]||q[D]===h[D])||C.value.some(q=>q[g]===h[g]||q[D]===h[D])?k.value=W:k.value=[h]}}function $(t){t.stopPropagation();const{multiple:n}=e;!n&&e.filterable&&K(),Pe(),n?X([],[]):X(null,null)}function We(t){!Ye(t,"action")&&!Ye(t,"empty")&&!Ye(t,"header")&&t.preventDefault()}function He(t){Ae(t)}function Re(t){var n,d,m,b,h;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((n=v.value)===null||n===void 0)&&n.isComposing)){if(S.value){const g=(d=j.value)===null||d===void 0?void 0:d.getPendingTmNode();g?ge(g):e.filterable||(K(),Se())}else if(ae(),e.tag&&se.value){const g=k.value[0];if(g){const D=g[e.valueField],{value:q}=F;e.multiple&&Array.isArray(q)&&q.includes(D)||G(g)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;S.value&&((m=j.value)===null||m===void 0||m.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;S.value?(b=j.value)===null||b===void 0||b.next():ae();break;case"Escape":S.value&&(Jt(t),K()),(h=v.value)===null||h===void 0||h.focus();break}}function Se(){var t;(t=v.value)===null||t===void 0||t.focus()}function Fe(){var t;(t=v.value)===null||t===void 0||t.focusInput()}function Ke(){var t;S.value&&((t=M.value)===null||t===void 0||t.syncPosition())}we(),ze(Z(e,"options"),we);const Ge={focus:()=>{var t;(t=v.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=v.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=v.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=v.value)===null||t===void 0||t.blurInput()}},Oe=A(()=>{const{self:{menuBoxShadow:t}}=x.value;return{"--n-menu-box-shadow":t}}),ne=s?Ie("select",void 0,Oe,e):void 0;return Object.assign(Object.assign({},Ge),{mergedStatus:he,mergedClsPrefix:r,mergedBordered:u,namespace:c,treeMate:E,isMounted:Ht(),triggerRef:v,menuRef:j,pattern:O,uncontrolledShow:R,mergedShow:S,adjustedTo:Qe(e),uncontrolledValue:T,mergedValue:F,followerRef:M,localizedPlaceholder:J,selectedOption:ie,selectedOptions:le,mergedSize:ce,mergedDisabled:te,focused:_,activeWithoutMenuOpen:se,inlineThemeDisabled:s,onTriggerInputFocus:Ee,onTriggerInputBlur:De,handleTriggerOrMenuResize:Ke,handleMenuFocus:be,handleMenuBlur:Ue,handleMenuTabOut:Le,handleTriggerClick:Ve,handleToggle:ge,handleDeleteOption:G,handlePatternInput:a,handleClear:$,handleTriggerBlur:je,handleTriggerFocus:ve,handleKeydown:Re,handleMenuAfterLeave:Ce,handleMenuClickOutside:Ne,handleMenuScroll:He,handleMenuKeydown:Re,handleMenuMousedown:We,mergedTheme:x,cssVars:s?void 0:Oe,themeClass:ne==null?void 0:ne.themeClass,onRender:ne==null?void 0:ne.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(ho,null,{default:()=>[i(fo,null,{default:()=>i(xo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,r;return[(r=(e=this.$slots).arrow)===null||r===void 0?void 0:r.call(e)]}})}),i(vo,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Qe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(Kt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,r,u;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Gt(i(lo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(r=this.menuProps)===null||r===void 0?void 0:r.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(u=this.menuProps)===null||u===void 0?void 0:u.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var c,s;return[(s=(c=this.$slots).empty)===null||s===void 0?void 0:s.call(c)]},header:()=>{var c,s;return[(s=(c=this.$slots).header)===null||s===void 0?void 0:s.call(c)]},action:()=>{var c,s;return[(s=(c=this.$slots).action)===null||s===void 0?void 0:s.call(c)]}}),this.displayDirective==="show"?[[qt,this.mergedShow],[tt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[tt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ro={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},dt=Qt("n-radio-group");function So(e){const r=Xt(dt,null),u=Ze(e,{mergedSize(f){const{size:R}=e;if(R!==void 0)return R;if(r){const{mergedSizeRef:{value:S}}=r;if(S!==void 0)return S}return f?f.mergedSize.value:"medium"},mergedDisabled(f){return!!(e.disabled||r!=null&&r.disabledRef.value||f!=null&&f.disabled.value)}}),{mergedSizeRef:c,mergedDisabledRef:s}=u,x=w(null),T=w(null),l=w(e.defaultChecked),F=Z(e,"checked"),_=Me(F,l),O=ot(()=>r?r.valueRef.value===e.value:_.value),z=ot(()=>{const{name:f}=e;if(f!==void 0)return f;if(r)return r.nameRef.value}),C=w(!1);function k(){if(r){const{doUpdateValue:f}=r,{value:R}=e;L(f,R)}else{const{onUpdateChecked:f,"onUpdate:checked":R}=e,{nTriggerFormInput:S,nTriggerFormChange:v}=u;f&&L(f,!0),R&&L(R,!0),S(),v(),l.value=!0}}function B(){s.value||O.value||k()}function I(){B(),x.value&&(x.value.checked=O.value)}function V(){C.value=!1}function E(){C.value=!0}return{mergedClsPrefix:r?r.mergedClsPrefixRef:me(e).mergedClsPrefixRef,inputRef:x,labelRef:T,mergedName:z,mergedDisabled:s,renderSafeChecked:O,focus:C,mergedSize:c,handleRadioInputChange:I,handleRadioInputBlur:V,handleRadioInputFocus:E}}const Fo=y("radio",`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[U("checked",[p("dot",`
 background-color: var(--n-color-active);
 `)]),p("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),y("radio-input",`
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `),p("dot",`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[N("&::before",`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),U("checked",{boxShadow:"var(--n-box-shadow-active)"},[N("&::before",`
 opacity: 1;
 transform: scale(1);
 `)])]),p("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),pe("disabled",`
 cursor: pointer;
 `,[N("&:hover",[p("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),U("focus",[N("&:not(:active)",[p("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),U("disabled",`
 cursor: not-allowed;
 `,[p("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[N("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),U("checked",`
 opacity: 1;
 `)]),p("label",{color:"var(--n-text-color-disabled)"}),y("radio-input",`
 cursor: not-allowed;
 `)])]),Oo=Object.assign(Object.assign({},re.props),Ro),Zo=ue({name:"Radio",props:Oo,setup(e){const r=So(e),u=re("Radio","-radio",Fo,lt,e,r.mergedClsPrefix),c=A(()=>{const{mergedSize:{value:_}}=r,{common:{cubicBezierEaseInOut:O},self:{boxShadow:z,boxShadowActive:C,boxShadowDisabled:k,boxShadowFocus:B,boxShadowHover:I,color:V,colorDisabled:E,colorActive:f,textColor:R,textColorDisabled:S,dotColorActive:v,dotColorDisabled:M,labelPadding:j,labelLineHeight:Y,labelFontWeight:J,[de("fontSize",_)]:W,[de("radioSize",_)]:H}}=u.value;return{"--n-bezier":O,"--n-label-line-height":Y,"--n-label-font-weight":J,"--n-box-shadow":z,"--n-box-shadow-active":C,"--n-box-shadow-disabled":k,"--n-box-shadow-focus":B,"--n-box-shadow-hover":I,"--n-color":V,"--n-color-active":f,"--n-color-disabled":E,"--n-dot-color-active":v,"--n-dot-color-disabled":M,"--n-font-size":W,"--n-radio-size":H,"--n-text-color":R,"--n-text-color-disabled":S,"--n-label-padding":j}}),{inlineThemeDisabled:s,mergedClsPrefixRef:x,mergedRtlRef:T}=me(e),l=Xe("Radio",T,x),F=s?Ie("radio",A(()=>r.mergedSize.value[0]),c,e):void 0;return Object.assign(r,{rtlEnabled:l,cssVars:s?void 0:c,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender})},render(){const{$slots:e,mergedClsPrefix:r,onRender:u,label:c}=this;return u==null||u(),i("label",{class:[`${r}-radio`,this.themeClass,this.rtlEnabled&&`${r}-radio--rtl`,this.mergedDisabled&&`${r}-radio--disabled`,this.renderSafeChecked&&`${r}-radio--checked`,this.focus&&`${r}-radio--focus`],style:this.cssVars},i("input",{ref:"inputRef",type:"radio",class:`${r}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),i("div",{class:`${r}-radio__dot-wrapper`}," ",i("div",{class:[`${r}-radio__dot`,this.renderSafeChecked&&`${r}-radio__dot--checked`]})),Zt(e.default,s=>!s&&!c?null:i("div",{ref:"labelRef",class:`${r}-radio__label`},s||c)))}}),ko=y("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[p("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[U("checked",{backgroundColor:"var(--n-button-border-color-active)"}),U("disabled",{opacity:"var(--n-opacity-disabled)"})]),U("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[y("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),p("splitor",{height:"var(--n-height)"})]),y("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[y("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),p("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),N("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[p("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),N("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[p("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),pe("disabled",`
 cursor: pointer;
 `,[N("&:hover",[p("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),pe("checked",{color:"var(--n-button-text-color-hover)"})]),U("focus",[N("&:not(:active)",[p("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),U("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),U("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function _o(e,r,u){var c;const s=[];let x=!1;for(let T=0;T<e.length;++T){const l=e[T],F=(c=l.type)===null||c===void 0?void 0:c.name;F==="RadioButton"&&(x=!0);const _=l.props;if(F!=="RadioButton"){s.push(l);continue}if(T===0)s.push(l);else{const O=s[s.length-1].props,z=r===O.value,C=O.disabled,k=r===_.value,B=_.disabled,I=(z?2:0)+(C?0:1),V=(k?2:0)+(B?0:1),E={[`${u}-radio-group__splitor--disabled`]:C,[`${u}-radio-group__splitor--checked`]:z},f={[`${u}-radio-group__splitor--disabled`]:B,[`${u}-radio-group__splitor--checked`]:k},R=I<V?f:E;s.push(i("div",{class:[`${u}-radio-group__splitor`,R]}),l)}}return{children:s,isButtonGroup:x}}const To=Object.assign(Object.assign({},re.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),en=ue({name:"RadioGroup",props:To,setup(e){const r=w(null),{mergedSizeRef:u,mergedDisabledRef:c,nTriggerFormChange:s,nTriggerFormInput:x,nTriggerFormBlur:T,nTriggerFormFocus:l}=Ze(e),{mergedClsPrefixRef:F,inlineThemeDisabled:_,mergedRtlRef:O}=me(e),z=re("Radio","-radio-group",ko,lt,e,F),C=w(e.defaultValue),k=Z(e,"value"),B=Me(k,C);function I(v){const{onUpdateValue:M,"onUpdate:value":j}=e;M&&L(M,v),j&&L(j,v),C.value=v,s(),x()}function V(v){const{value:M}=r;M&&(M.contains(v.relatedTarget)||l())}function E(v){const{value:M}=r;M&&(M.contains(v.relatedTarget)||T())}eo(dt,{mergedClsPrefixRef:F,nameRef:Z(e,"name"),valueRef:B,disabledRef:c,mergedSizeRef:u,doUpdateValue:I});const f=Xe("Radio",O,F),R=A(()=>{const{value:v}=u,{common:{cubicBezierEaseInOut:M},self:{buttonBorderColor:j,buttonBorderColorActive:Y,buttonBorderRadius:J,buttonBoxShadow:W,buttonBoxShadowFocus:H,buttonBoxShadowHover:Q,buttonColor:P,buttonColorActive:le,buttonTextColor:ie,buttonTextColorActive:ee,buttonTextColorHover:ce,opacityDisabled:te,[de("buttonHeight",v)]:he,[de("fontSize",v)]:X}}=z.value;return{"--n-font-size":X,"--n-bezier":M,"--n-button-border-color":j,"--n-button-border-color-active":Y,"--n-button-border-radius":J,"--n-button-box-shadow":W,"--n-button-box-shadow-focus":H,"--n-button-box-shadow-hover":Q,"--n-button-color":P,"--n-button-color-active":le,"--n-button-text-color":ie,"--n-button-text-color-hover":ce,"--n-button-text-color-active":ee,"--n-height":he,"--n-opacity-disabled":te}}),S=_?Ie("radio-group",A(()=>u.value[0]),R,e):void 0;return{selfElRef:r,rtlEnabled:f,mergedClsPrefix:F,mergedValue:B,handleFocusout:E,handleFocusin:V,cssVars:_?void 0:R,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){var e;const{mergedValue:r,mergedClsPrefix:u,handleFocusin:c,handleFocusout:s}=this,{children:x,isButtonGroup:T}=_o(to(po(this)),r,u);return(e=this.onRender)===null||e===void 0||e.call(this),i("div",{onFocusin:c,onFocusout:s,ref:"selfElRef",class:[`${u}-radio-group`,this.rtlEnabled&&`${u}-radio-group--rtl`,this.themeClass,T&&`${u}-radio-group--button-group`],style:this.cssVars},x)}}),zo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 10 10"},Mo=Be("g",{fill:"none"},[Be("path",{d:"M4.998 0a4.998 4.998 0 1 0 0 9.995a4.998 4.998 0 0 0 0-9.995zM1 4.998a3.998 3.998 0 1 1 7.995 0a3.998 3.998 0 0 1-7.995 0zm6.104-1.602a.5.5 0 0 1 0 .708l-2.25 2.25a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647l1.896-1.897a.5.5 0 0 1 .708 0z",fill:"currentColor"})],-1),Bo=[Mo],Io=ue({name:"PresenceAvailable10Regular",render:function(r,u){return it(),st("svg",zo,Bo)}}),Po={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 10 10"},$o=Be("g",{fill:"none"},[Be("path",{d:"M10 5A5 5 0 1 0 0 5a5 5 0 0 0 10 0zM9 5a4 4 0 0 1-6.453 3.16L8.16 2.547C8.686 3.224 9 4.076 9 5zM7.453 1.84L1.84 7.453A4 4 0 0 1 7.453 1.84z",fill:"currentColor"})],-1),Ao=[$o],Eo=ue({name:"PresenceBlocked10Regular",render:function(r,u){return it(),st("svg",Po,Ao)}});function at(e){const r=Math.floor(Math.random()*e.length);return e[r]}const ut=[{value:"junior_development",label:"初级开发",type:"info"},{value:"middle_development",label:"中级开发",type:"success"},{value:"senior_development",label:"高级开发",type:"error"}],tn=e=>ut.find(r=>r.value===e),ct=[{value:"teamMember",label:"团队成员"},{value:"teamLeader",label:"现场负责人"},{value:"projectManager",label:"项目经理"},{value:"qualityManager",label:"质控经理"},{value:"reviewManager",label:"复核经理"}],on=e=>ct.find(r=>r.value===e),Do=[{value:1,label:"活跃",type:"success",icon:Io},{value:0,label:"停用",type:"default",icon:Eo}],nn=e=>Do.find(r=>r.value===e),Vo=Array.from({length:100}).map((e,r)=>{const u=r+1,c=`BJ${`${u}`.padStart(4,"0")}`,s=at(ut),x=at(ct);return{username:`Tom${u}`,userId:c,roleId:x.value,rank:s.value,phone:`${1e10+u}`,avatar:mo,email:`${c}@admin.com`,memberStatus:Math.random()>.5?0:1}}),rn=async e=>(await oo(440),Vo.find(r=>r.userId===e));export{Xo as N,en as a,Zo as b,Do as c,ut as d,on as e,rn as f,tn as g,nn as h,Vo as m,ct as u};
