import{v as N,q as y,x as p,H as pe,G as U,d as ue,L as re,M as me,W as Xe,f as w,A as Z,ae as Vn,k as A,af as Te,I as _e,S as jn,U as Un,a4 as de,a5 as en,X as Ie,n as i,ag as Ln,F as Nn,a1 as Wn,ah as Hn,ai as Kn,P as Me,Q as Ze,aj as Gn,ak as qn,al as Yn,am as Jn,an as nn,ao as Qn,ap as Xn,a3 as L,E as Zn,K as et,R as tn,aq as ln,Y as nt,V as tt,ar as ot,o as sn,b as dn,e as Be,as as rt}from"./index-BQQ2VPbK.js";import{u as at,p as qe,f as lt,c as it,N as st,a as dt}from"./utils-DuVwWGRS.js";import{u as ut}from"./use-compitable-B-9Wj_ZY.js";import{c as ct,h as Ye}from"./create-DeO8t-sD.js";import{u as ft}from"./Eye-Bo3C4vt5.js";import{u as Qe,B as ht,V as bt,a as vt}from"./Follower-BII3ZYJ5.js";import{N as gt}from"./Input-BQhyNcfF.js";import{_ as Je}from"./Tag-DSt282iC.js";import{V as on}from"./index-D1YRNDTb.js";import{_ as pt}from"./Popover-DkcwTP-L.js";import{g as mt}from"./get-slot-Bk_rJcZu.js";import{m as wt}from"./member-avatar-CR9m-KS_.js";function rn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const xt=N([y("base-selection",`
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
 `)])])]),Ct=ue({name:"InternalSelection",props:Object.assign(Object.assign({},re.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:d}=me(e),c=Xe("InternalSelection",d,r),s=w(null),x=w(null),T=w(null),l=w(null),F=w(null),z=w(null),O=w(null),_=w(null),C=w(null),k=w(null),B=w(!1),I=w(!1),V=w(!1),E=re("InternalSelection","-internal-selection",xt,Vn,e,Z(e,"clsPrefix")),h=A(()=>e.clearable&&!e.disabled&&(V.value||e.active)),R=A(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Te(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),S=A(()=>{const t=e.selectedOption;if(t)return t[e.labelField]}),b=A(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function M(){var t;const{value:a}=s;if(a){const{value:$}=x;$&&($.style.width=`${a.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=C.value)===null||t===void 0||t.sync({showAllItemsBeforeCalculate:!1})))}}function j(){const{value:t}=k;t&&(t.style.display="none")}function Y(){const{value:t}=k;t&&(t.style.display="inline-block")}_e(Z(e,"active"),t=>{t||j()}),_e(Z(e,"pattern"),()=>{e.multiple&&Wn(M)});function J(t){const{onFocus:a}=e;a&&a(t)}function W(t){const{onBlur:a}=e;a&&a(t)}function H(t){const{onDeleteOption:a}=e;a&&a(t)}function Q(t){const{onClear:a}=e;a&&a(t)}function P(t){const{onPatternInput:a}=e;a&&a(t)}function le(t){var a;(!t.relatedTarget||!(!((a=T.value)===null||a===void 0)&&a.contains(t.relatedTarget)))&&J(t)}function ie(t){var a;!((a=T.value)===null||a===void 0)&&a.contains(t.relatedTarget)||W(t)}function ee(t){Q(t)}function ce(){V.value=!0}function ne(){V.value=!1}function fe(t){!e.active||!e.filterable||t.target!==x.value&&t.preventDefault()}function X(t){H(t)}const te=w(!1);function Pe(t){if(t.key==="Backspace"&&!te.value&&!e.pattern.length){const{selectedOptions:a}=e;a!=null&&a.length&&X(a[a.length-1])}}let he=null;function $e(t){const{value:a}=s;if(a){const $=t.target.value;a.textContent=$,M()}e.ignoreComposition&&te.value?he=t:P(t)}function Ae(){te.value=!0}function we(){te.value=!1,e.ignoreComposition&&P(he),he=null}function xe(t){var a;I.value=!0,(a=e.onPatternFocus)===null||a===void 0||a.call(e,t)}function ae(t){var a;I.value=!1,(a=e.onPatternBlur)===null||a===void 0||a.call(e,t)}function K(){var t,a;if(e.filterable)I.value=!1,(t=z.value)===null||t===void 0||t.blur(),(a=x.value)===null||a===void 0||a.blur();else if(e.multiple){const{value:$}=l;$==null||$.blur()}else{const{value:$}=F;$==null||$.blur()}}function Ce(){var t,a,$;e.filterable?(I.value=!1,(t=z.value)===null||t===void 0||t.focus()):e.multiple?(a=l.value)===null||a===void 0||a.focus():($=F.value)===null||$===void 0||$.focus()}function se(){const{value:t}=x;t&&(Y(),t.focus())}function Ee(){const{value:t}=x;t&&t.blur()}function De(t){const{value:a}=O;a&&a.setTextContent(`+${t}`)}function Ve(){const{value:t}=_;return t}function je(){return x.value}let be=null;function ve(){be!==null&&window.clearTimeout(be)}function Ue(){e.active||(ve(),be=window.setTimeout(()=>{b.value&&(B.value=!0)},100))}function Le(){ve()}function Ne(t){t||(ve(),B.value=!1)}_e(b,t=>{t||(B.value=!1)}),jn(()=>{Un(()=>{const t=z.value;t&&(e.disabled?t.removeAttribute("tabindex"):t.tabIndex=I.value?-1:0)})}),at(T,e.onResize);const{inlineThemeDisabled:ye}=e,ge=A(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:a},self:{fontWeight:$,borderRadius:We,color:He,placeholderColor:Re,textColor:Se,paddingSingle:Fe,paddingMultiple:Ke,caretColor:Ge,colorDisabled:Oe,textColorDisabled:oe,placeholderColorDisabled:n,colorActive:o,boxShadowFocus:u,boxShadowActive:m,boxShadowHover:v,border:f,borderFocus:g,borderHover:D,borderActive:q,arrowColor:hn,arrowColorDisabled:bn,loadingColor:vn,colorActiveWarning:gn,boxShadowFocusWarning:pn,boxShadowActiveWarning:mn,boxShadowHoverWarning:wn,borderWarning:xn,borderFocusWarning:Cn,borderHoverWarning:yn,borderActiveWarning:Rn,colorActiveError:Sn,boxShadowFocusError:Fn,boxShadowActiveError:On,boxShadowHoverError:kn,borderError:zn,borderFocusError:Tn,borderHoverError:_n,borderActiveError:Mn,clearColor:Bn,clearColorHover:In,clearColorPressed:Pn,clearSize:$n,arrowSize:An,[de("height",t)]:En,[de("fontSize",t)]:Dn}}=E.value,ke=en(Fe),ze=en(Ke);return{"--n-bezier":a,"--n-border":f,"--n-border-active":q,"--n-border-focus":g,"--n-border-hover":D,"--n-border-radius":We,"--n-box-shadow-active":m,"--n-box-shadow-focus":u,"--n-box-shadow-hover":v,"--n-caret-color":Ge,"--n-color":He,"--n-color-active":o,"--n-color-disabled":Oe,"--n-font-size":Dn,"--n-height":En,"--n-padding-single-top":ke.top,"--n-padding-multiple-top":ze.top,"--n-padding-single-right":ke.right,"--n-padding-multiple-right":ze.right,"--n-padding-single-left":ke.left,"--n-padding-multiple-left":ze.left,"--n-padding-single-bottom":ke.bottom,"--n-padding-multiple-bottom":ze.bottom,"--n-placeholder-color":Re,"--n-placeholder-color-disabled":n,"--n-text-color":Se,"--n-text-color-disabled":oe,"--n-arrow-color":hn,"--n-arrow-color-disabled":bn,"--n-loading-color":vn,"--n-color-active-warning":gn,"--n-box-shadow-focus-warning":pn,"--n-box-shadow-active-warning":mn,"--n-box-shadow-hover-warning":wn,"--n-border-warning":xn,"--n-border-focus-warning":Cn,"--n-border-hover-warning":yn,"--n-border-active-warning":Rn,"--n-color-active-error":Sn,"--n-box-shadow-focus-error":Fn,"--n-box-shadow-active-error":On,"--n-box-shadow-hover-error":kn,"--n-border-error":zn,"--n-border-focus-error":Tn,"--n-border-hover-error":_n,"--n-border-active-error":Mn,"--n-clear-size":$n,"--n-clear-color":Bn,"--n-clear-color-hover":In,"--n-clear-color-pressed":Pn,"--n-arrow-size":An,"--n-font-weight":$}}),G=ye?Ie("internal-selection",A(()=>e.size[0]),ge,e):void 0;return{mergedTheme:E,mergedClearable:h,mergedClsPrefix:r,rtlEnabled:c,patternInputFocused:I,filterablePlaceholder:R,label:S,selected:b,showTagsPanel:B,isComposing:te,counterRef:O,counterWrapperRef:_,patternInputMirrorRef:s,patternInputRef:x,selfRef:T,multipleElRef:l,singleElRef:F,patternInputWrapperRef:z,overflowRef:C,inputTagElRef:k,handleMouseDown:fe,handleFocusin:le,handleClear:ee,handleMouseEnter:ce,handleMouseLeave:ne,handleDeleteOption:X,handlePatternKeyDown:Pe,handlePatternInputInput:$e,handlePatternInputBlur:ae,handlePatternInputFocus:xe,handleMouseEnterCounter:Ue,handleMouseLeaveCounter:Le,handleFocusout:ie,handleCompositionEnd:we,handleCompositionStart:Ae,onPopoverUpdateShow:Ne,focus:Ce,focusInput:se,blur:K,blurInput:Ee,updateCounter:De,getCounter:Ve,getTail:je,renderLabel:e.renderLabel,cssVars:ye?void 0:ge,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender}},render(){const{status:e,multiple:r,size:d,disabled:c,filterable:s,maxTagCount:x,bordered:T,clsPrefix:l,ellipsisTagPopoverProps:F,onRender:z,renderTag:O,renderLabel:_}=this;z==null||z();const C=x==="responsive",k=typeof x=="number",B=C||k,I=i(Ln,null,{default:()=>i(gt,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var E,h;return(h=(E=this.$slots).arrow)===null||h===void 0?void 0:h.call(E)}})});let V;if(r){const{labelField:E}=this,h=P=>i("div",{class:`${l}-base-selection-tag-wrapper`,key:P.value},O?O({option:P,handleClose:()=>{this.handleDeleteOption(P)}}):i(Je,{size:d,closable:!P.disabled,disabled:c,onClose:()=>{this.handleDeleteOption(P)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>_?_(P,!0):Te(P[E],P,!0)})),R=()=>(k?this.selectedOptions.slice(0,x):this.selectedOptions).map(h),S=s?i("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:c,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,b=C?()=>i("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(Je,{size:d,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:c})):void 0;let M;if(k){const P=this.selectedOptions.length-x;P>0&&(M=i("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},i(Je,{size:d,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:c},{default:()=>`+${P}`})))}const j=C?s?i(on,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:b,tail:()=>S}):i(on,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:b}):k&&M?R().concat(M):R(),Y=B?()=>i("div",{class:`${l}-base-selection-popover`},C?R():this.selectedOptions.map(h)):void 0,J=B?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},F):null,H=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},i("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,Q=s?i("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},j,C?null:S,I):i("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:c?void 0:0},j,I);V=i(Nn,null,B?i(pt,Object.assign({},J,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Q,default:Y}):Q,H)}else if(s){const E=this.pattern||this.isComposing,h=this.active?!E:!this.selected,R=this.active?!1:this.selected;V=i("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:rn(this.label)},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:c,disabled:c,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),R?i("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},i("div",{class:`${l}-base-selection-overlay__wrapper`},O?O({option:this.selectedOption,handleClose:()=>{}}):_?_(this.selectedOption,!0):Te(this.label,this.selectedOption,!0))):null,h?i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,I)}else V=i("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${l}-base-selection-input`,title:rn(this.label),key:"input"},i("div",{class:`${l}-base-selection-input__content`},O?O({option:this.selectedOption,handleClose:()=>{}}):_?_(this.selectedOption,!0):Te(this.label,this.selectedOption,!0))):i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),I);return i("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},V,T?i("div",{class:`${l}-base-selection__border`}):null,T?i("div",{class:`${l}-base-selection__state-border`}):null)}}),yt=N([y("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),y("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Hn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Rt=Object.assign(Object.assign({},re.props),{to:Qe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Yt=ue({name:"Select",props:Rt,slots:Object,setup(e){const{mergedClsPrefixRef:r,mergedBorderedRef:d,namespaceRef:c,inlineThemeDisabled:s}=me(e),x=re("Select","-select",yt,Kn,e,r),T=w(e.defaultValue),l=Z(e,"value"),F=Me(l,T),z=w(!1),O=w(""),_=ut(e,["items","options"]),C=w([]),k=w([]),B=A(()=>k.value.concat(C.value).concat(_.value)),I=A(()=>{const{filter:n}=e;if(n)return n;const{labelField:o,valueField:u}=e;return(m,v)=>{if(!v)return!1;const f=v[o];if(typeof f=="string")return qe(m,f);const g=v[u];return typeof g=="string"?qe(m,g):typeof g=="number"?qe(m,String(g)):!1}}),V=A(()=>{if(e.remote)return _.value;{const{value:n}=B,{value:o}=O;return!o.length||!e.filterable?n:lt(n,I.value,o,e.childrenField)}}),E=A(()=>{const{valueField:n,childrenField:o}=e,u=dt(n,o);return ct(V.value,u)}),h=A(()=>it(B.value,e.valueField,e.childrenField)),R=w(!1),S=Me(Z(e,"show"),R),b=w(null),M=w(null),j=w(null),{localeRef:Y}=ft("Select"),J=A(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:Y.value.placeholder}),W=[],H=w(new Map),Q=A(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:o,valueField:u}=e;return m=>({[o]:String(m),[u]:m})}return n===!1?!1:o=>Object.assign(n(o),{value:o})});function P(n){const o=e.remote,{value:u}=H,{value:m}=h,{value:v}=Q,f=[];return n.forEach(g=>{if(m.has(g))f.push(m.get(g));else if(o&&u.has(g))f.push(u.get(g));else if(v){const D=v(g);D&&f.push(D)}}),f}const le=A(()=>{if(e.multiple){const{value:n}=F;return Array.isArray(n)?P(n):[]}return null}),ie=A(()=>{const{value:n}=F;return!e.multiple&&!Array.isArray(n)?n===null?null:P([n])[0]||null:null}),ee=Ze(e),{mergedSizeRef:ce,mergedDisabledRef:ne,mergedStatusRef:fe}=ee;function X(n,o){const{onChange:u,"onUpdate:value":m,onUpdateValue:v}=e,{nTriggerFormChange:f,nTriggerFormInput:g}=ee;u&&L(u,n,o),v&&L(v,n,o),m&&L(m,n,o),T.value=n,f(),g()}function te(n){const{onBlur:o}=e,{nTriggerFormBlur:u}=ee;o&&L(o,n),u()}function Pe(){const{onClear:n}=e;n&&L(n)}function he(n){const{onFocus:o,showOnFocus:u}=e,{nTriggerFormFocus:m}=ee;o&&L(o,n),m(),u&&ae()}function $e(n){const{onSearch:o}=e;o&&L(o,n)}function Ae(n){const{onScroll:o}=e;o&&L(o,n)}function we(){var n;const{remote:o,multiple:u}=e;if(o){const{value:m}=H;if(u){const{valueField:v}=e;(n=le.value)===null||n===void 0||n.forEach(f=>{m.set(f[v],f)})}else{const v=ie.value;v&&m.set(v[e.valueField],v)}}}function xe(n){const{onUpdateShow:o,"onUpdate:show":u}=e;o&&L(o,n),u&&L(u,n),R.value=n}function ae(){ne.value||(xe(!0),R.value=!0,e.filterable&&Fe())}function K(){xe(!1)}function Ce(){O.value="",k.value=W}const se=w(!1);function Ee(){e.filterable&&(se.value=!0)}function De(){e.filterable&&(se.value=!1,S.value||Ce())}function Ve(){ne.value||(S.value?e.filterable?Fe():K():ae())}function je(n){var o,u;!((u=(o=j.value)===null||o===void 0?void 0:o.selfRef)===null||u===void 0)&&u.contains(n.relatedTarget)||(z.value=!1,te(n),K())}function be(n){he(n),z.value=!0}function ve(){z.value=!0}function Ue(n){var o;!((o=b.value)===null||o===void 0)&&o.$el.contains(n.relatedTarget)||(z.value=!1,te(n),K())}function Le(){var n;(n=b.value)===null||n===void 0||n.focus(),K()}function Ne(n){var o;S.value&&(!((o=b.value)===null||o===void 0)&&o.$el.contains(Qn(n))||K())}function ye(n){if(!Array.isArray(n))return[];if(Q.value)return Array.from(n);{const{remote:o}=e,{value:u}=h;if(o){const{value:m}=H;return n.filter(v=>u.has(v)||m.has(v))}else return n.filter(m=>u.has(m))}}function ge(n){G(n.rawNode)}function G(n){if(ne.value)return;const{tag:o,remote:u,clearFilterAfterSelect:m,valueField:v}=e;if(o&&!u){const{value:f}=k,g=f[0]||null;if(g){const D=C.value;D.length?D.push(g):C.value=[g],k.value=W}}if(u&&H.value.set(n[v],n),e.multiple){const f=ye(F.value),g=f.findIndex(D=>D===n[v]);if(~g){if(f.splice(g,1),o&&!u){const D=t(n[v]);~D&&(C.value.splice(D,1),m&&(O.value=""))}}else f.push(n[v]),m&&(O.value="");X(f,P(f))}else{if(o&&!u){const f=t(n[v]);~f?C.value=[C.value[f]]:C.value=W}Se(),K(),X(n[v],n)}}function t(n){return C.value.findIndex(u=>u[e.valueField]===n)}function a(n){S.value||ae();const{value:o}=n.target;O.value=o;const{tag:u,remote:m}=e;if($e(o),u&&!m){if(!o){k.value=W;return}const{onCreate:v}=e,f=v?v(o):{[e.labelField]:o,[e.valueField]:o},{valueField:g,labelField:D}=e;_.value.some(q=>q[g]===f[g]||q[D]===f[D])||C.value.some(q=>q[g]===f[g]||q[D]===f[D])?k.value=W:k.value=[f]}}function $(n){n.stopPropagation();const{multiple:o}=e;!o&&e.filterable&&K(),Pe(),o?X([],[]):X(null,null)}function We(n){!Ye(n,"action")&&!Ye(n,"empty")&&!Ye(n,"header")&&n.preventDefault()}function He(n){Ae(n)}function Re(n){var o,u,m,v,f;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((o=b.value)===null||o===void 0)&&o.isComposing)){if(S.value){const g=(u=j.value)===null||u===void 0?void 0:u.getPendingTmNode();g?ge(g):e.filterable||(K(),Se())}else if(ae(),e.tag&&se.value){const g=k.value[0];if(g){const D=g[e.valueField],{value:q}=F;e.multiple&&Array.isArray(q)&&q.includes(D)||G(g)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;S.value&&((m=j.value)===null||m===void 0||m.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;S.value?(v=j.value)===null||v===void 0||v.next():ae();break;case"Escape":S.value&&(Xn(n),K()),(f=b.value)===null||f===void 0||f.focus();break}}function Se(){var n;(n=b.value)===null||n===void 0||n.focus()}function Fe(){var n;(n=b.value)===null||n===void 0||n.focusInput()}function Ke(){var n;S.value&&((n=M.value)===null||n===void 0||n.syncPosition())}we(),_e(Z(e,"options"),we);const Ge={focus:()=>{var n;(n=b.value)===null||n===void 0||n.focus()},focusInput:()=>{var n;(n=b.value)===null||n===void 0||n.focusInput()},blur:()=>{var n;(n=b.value)===null||n===void 0||n.blur()},blurInput:()=>{var n;(n=b.value)===null||n===void 0||n.blurInput()}},Oe=A(()=>{const{self:{menuBoxShadow:n}}=x.value;return{"--n-menu-box-shadow":n}}),oe=s?Ie("select",void 0,Oe,e):void 0;return Object.assign(Object.assign({},Ge),{mergedStatus:fe,mergedClsPrefix:r,mergedBordered:d,namespace:c,treeMate:E,isMounted:Gn(),triggerRef:b,menuRef:j,pattern:O,uncontrolledShow:R,mergedShow:S,adjustedTo:Qe(e),uncontrolledValue:T,mergedValue:F,followerRef:M,localizedPlaceholder:J,selectedOption:ie,selectedOptions:le,mergedSize:ce,mergedDisabled:ne,focused:z,activeWithoutMenuOpen:se,inlineThemeDisabled:s,onTriggerInputFocus:Ee,onTriggerInputBlur:De,handleTriggerOrMenuResize:Ke,handleMenuFocus:ve,handleMenuBlur:Ue,handleMenuTabOut:Le,handleTriggerClick:Ve,handleToggle:ge,handleDeleteOption:G,handlePatternInput:a,handleClear:$,handleTriggerBlur:je,handleTriggerFocus:be,handleKeydown:Re,handleMenuAfterLeave:Ce,handleMenuClickOutside:Ne,handleMenuScroll:He,handleMenuKeydown:Re,handleMenuMousedown:We,mergedTheme:x,cssVars:s?void 0:Oe,themeClass:oe==null?void 0:oe.themeClass,onRender:oe==null?void 0:oe.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(ht,null,{default:()=>[i(bt,null,{default:()=>i(Ct,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,r;return[(r=(e=this.$slots).arrow)===null||r===void 0?void 0:r.call(e)]}})}),i(vt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Qe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(qn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,r,d;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Yn(i(st,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(r=this.menuProps)===null||r===void 0?void 0:r.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(d=this.menuProps)===null||d===void 0?void 0:d.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var c,s;return[(s=(c=this.$slots).empty)===null||s===void 0?void 0:s.call(c)]},header:()=>{var c,s;return[(s=(c=this.$slots).header)===null||s===void 0?void 0:s.call(c)]},action:()=>{var c,s;return[(s=(c=this.$slots).action)===null||s===void 0?void 0:s.call(c)]}}),this.displayDirective==="show"?[[Jn,this.mergedShow],[nn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[nn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),St=y("radio",`
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
 `)])]),Ft={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},un=Zn("n-radio-group");function Ot(e){const r=et(un,null),d=Ze(e,{mergedSize(h){const{size:R}=e;if(R!==void 0)return R;if(r){const{mergedSizeRef:{value:S}}=r;if(S!==void 0)return S}return h?h.mergedSize.value:"medium"},mergedDisabled(h){return!!(e.disabled||r!=null&&r.disabledRef.value||h!=null&&h.disabled.value)}}),{mergedSizeRef:c,mergedDisabledRef:s}=d,x=w(null),T=w(null),l=w(e.defaultChecked),F=Z(e,"checked"),z=Me(F,l),O=tn(()=>r?r.valueRef.value===e.value:z.value),_=tn(()=>{const{name:h}=e;if(h!==void 0)return h;if(r)return r.nameRef.value}),C=w(!1);function k(){if(r){const{doUpdateValue:h}=r,{value:R}=e;L(h,R)}else{const{onUpdateChecked:h,"onUpdate:checked":R}=e,{nTriggerFormInput:S,nTriggerFormChange:b}=d;h&&L(h,!0),R&&L(R,!0),S(),b(),l.value=!0}}function B(){s.value||O.value||k()}function I(){B(),x.value&&(x.value.checked=O.value)}function V(){C.value=!1}function E(){C.value=!0}return{mergedClsPrefix:r?r.mergedClsPrefixRef:me(e).mergedClsPrefixRef,inputRef:x,labelRef:T,mergedName:_,mergedDisabled:s,renderSafeChecked:O,focus:C,mergedSize:c,handleRadioInputChange:I,handleRadioInputBlur:V,handleRadioInputFocus:E}}const kt=Object.assign(Object.assign({},re.props),Ft),Jt=ue({name:"Radio",props:kt,setup(e){const r=Ot(e),d=re("Radio","-radio",St,ln,e,r.mergedClsPrefix),c=A(()=>{const{mergedSize:{value:z}}=r,{common:{cubicBezierEaseInOut:O},self:{boxShadow:_,boxShadowActive:C,boxShadowDisabled:k,boxShadowFocus:B,boxShadowHover:I,color:V,colorDisabled:E,colorActive:h,textColor:R,textColorDisabled:S,dotColorActive:b,dotColorDisabled:M,labelPadding:j,labelLineHeight:Y,labelFontWeight:J,[de("fontSize",z)]:W,[de("radioSize",z)]:H}}=d.value;return{"--n-bezier":O,"--n-label-line-height":Y,"--n-label-font-weight":J,"--n-box-shadow":_,"--n-box-shadow-active":C,"--n-box-shadow-disabled":k,"--n-box-shadow-focus":B,"--n-box-shadow-hover":I,"--n-color":V,"--n-color-active":h,"--n-color-disabled":E,"--n-dot-color-active":b,"--n-dot-color-disabled":M,"--n-font-size":W,"--n-radio-size":H,"--n-text-color":R,"--n-text-color-disabled":S,"--n-label-padding":j}}),{inlineThemeDisabled:s,mergedClsPrefixRef:x,mergedRtlRef:T}=me(e),l=Xe("Radio",T,x),F=s?Ie("radio",A(()=>r.mergedSize.value[0]),c,e):void 0;return Object.assign(r,{rtlEnabled:l,cssVars:s?void 0:c,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender})},render(){const{$slots:e,mergedClsPrefix:r,onRender:d,label:c}=this;return d==null||d(),i("label",{class:[`${r}-radio`,this.themeClass,this.rtlEnabled&&`${r}-radio--rtl`,this.mergedDisabled&&`${r}-radio--disabled`,this.renderSafeChecked&&`${r}-radio--checked`,this.focus&&`${r}-radio--focus`],style:this.cssVars},i("input",{ref:"inputRef",type:"radio",class:`${r}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),i("div",{class:`${r}-radio__dot-wrapper`}," ",i("div",{class:[`${r}-radio__dot`,this.renderSafeChecked&&`${r}-radio__dot--checked`]})),nt(e.default,s=>!s&&!c?null:i("div",{ref:"labelRef",class:`${r}-radio__label`},s||c)))}}),zt=y("radio-group",`
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
 `)])]);function Tt(e,r,d){var c;const s=[];let x=!1;for(let T=0;T<e.length;++T){const l=e[T],F=(c=l.type)===null||c===void 0?void 0:c.name;F==="RadioButton"&&(x=!0);const z=l.props;if(F!=="RadioButton"){s.push(l);continue}if(T===0)s.push(l);else{const O=s[s.length-1].props,_=r===O.value,C=O.disabled,k=r===z.value,B=z.disabled,I=(_?2:0)+(C?0:1),V=(k?2:0)+(B?0:1),E={[`${d}-radio-group__splitor--disabled`]:C,[`${d}-radio-group__splitor--checked`]:_},h={[`${d}-radio-group__splitor--disabled`]:B,[`${d}-radio-group__splitor--checked`]:k},R=I<V?h:E;s.push(i("div",{class:[`${d}-radio-group__splitor`,R]}),l)}}return{children:s,isButtonGroup:x}}const _t=Object.assign(Object.assign({},re.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Qt=ue({name:"RadioGroup",props:_t,setup(e){const r=w(null),{mergedSizeRef:d,mergedDisabledRef:c,nTriggerFormChange:s,nTriggerFormInput:x,nTriggerFormBlur:T,nTriggerFormFocus:l}=Ze(e),{mergedClsPrefixRef:F,inlineThemeDisabled:z,mergedRtlRef:O}=me(e),_=re("Radio","-radio-group",zt,ln,e,F),C=w(e.defaultValue),k=Z(e,"value"),B=Me(k,C);function I(b){const{onUpdateValue:M,"onUpdate:value":j}=e;M&&L(M,b),j&&L(j,b),C.value=b,s(),x()}function V(b){const{value:M}=r;M&&(M.contains(b.relatedTarget)||l())}function E(b){const{value:M}=r;M&&(M.contains(b.relatedTarget)||T())}tt(un,{mergedClsPrefixRef:F,nameRef:Z(e,"name"),valueRef:B,disabledRef:c,mergedSizeRef:d,doUpdateValue:I});const h=Xe("Radio",O,F),R=A(()=>{const{value:b}=d,{common:{cubicBezierEaseInOut:M},self:{buttonBorderColor:j,buttonBorderColorActive:Y,buttonBorderRadius:J,buttonBoxShadow:W,buttonBoxShadowFocus:H,buttonBoxShadowHover:Q,buttonColor:P,buttonColorActive:le,buttonTextColor:ie,buttonTextColorActive:ee,buttonTextColorHover:ce,opacityDisabled:ne,[de("buttonHeight",b)]:fe,[de("fontSize",b)]:X}}=_.value;return{"--n-font-size":X,"--n-bezier":M,"--n-button-border-color":j,"--n-button-border-color-active":Y,"--n-button-border-radius":J,"--n-button-box-shadow":W,"--n-button-box-shadow-focus":H,"--n-button-box-shadow-hover":Q,"--n-button-color":P,"--n-button-color-active":le,"--n-button-text-color":ie,"--n-button-text-color-hover":ce,"--n-button-text-color-active":ee,"--n-height":fe,"--n-opacity-disabled":ne}}),S=z?Ie("radio-group",A(()=>d.value[0]),R,e):void 0;return{selfElRef:r,rtlEnabled:h,mergedClsPrefix:F,mergedValue:B,handleFocusout:E,handleFocusin:V,cssVars:z?void 0:R,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){var e;const{mergedValue:r,mergedClsPrefix:d,handleFocusin:c,handleFocusout:s}=this,{children:x,isButtonGroup:T}=Tt(ot(mt(this)),r,d);return(e=this.onRender)===null||e===void 0||e.call(this),i("div",{onFocusin:c,onFocusout:s,ref:"selfElRef",class:[`${d}-radio-group`,this.rtlEnabled&&`${d}-radio-group--rtl`,this.themeClass,T&&`${d}-radio-group--button-group`],style:this.cssVars},x)}}),Mt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 10 10"},Bt=ue({name:"PresenceAvailable10Regular",render:function(r,d){return sn(),dn("svg",Mt,d[0]||(d[0]=[Be("g",{fill:"none"},[Be("path",{d:"M4.998 0a4.998 4.998 0 1 0 0 9.995a4.998 4.998 0 0 0 0-9.995zM1 4.998a3.998 3.998 0 1 1 7.995 0a3.998 3.998 0 0 1-7.995 0zm6.104-1.602a.5.5 0 0 1 0 .708l-2.25 2.25a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647l1.896-1.897a.5.5 0 0 1 .708 0z",fill:"currentColor"})],-1)]))}}),It={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 10 10"},Pt=ue({name:"PresenceBlocked10Regular",render:function(r,d){return sn(),dn("svg",It,d[0]||(d[0]=[Be("g",{fill:"none"},[Be("path",{d:"M10 5A5 5 0 1 0 0 5a5 5 0 0 0 10 0zM9 5a4 4 0 0 1-6.453 3.16L8.16 2.547C8.686 3.224 9 4.076 9 5zM7.453 1.84L1.84 7.453A4 4 0 0 1 7.453 1.84z",fill:"currentColor"})],-1)]))}});function an(e){const r=Math.floor(Math.random()*e.length);return e[r]}const cn=[{value:"junior_development",label:"初级开发",type:"info"},{value:"middle_development",label:"中级开发",type:"success"},{value:"senior_development",label:"高级开发",type:"error"}],Xt=e=>cn.find(r=>r.value===e),fn=[{value:"teamMember",label:"团队成员"},{value:"teamLeader",label:"现场负责人"},{value:"projectManager",label:"项目经理"},{value:"qualityManager",label:"质控经理"},{value:"reviewManager",label:"复核经理"}],Zt=e=>fn.find(r=>r.value===e),$t=[{value:1,label:"活跃",type:"success",icon:Bt},{value:0,label:"停用",type:"default",icon:Pt}],eo=e=>$t.find(r=>r.value===e),At=Array.from({length:100}).map((e,r)=>{const d=r+1,c=`BJ${`${d}`.padStart(4,"0")}`,s=an(cn),x=an(fn);return{username:`Tom${d}`,userId:c,roleId:x.value,rank:s.value,phone:`${1e10+d}`,avatar:wt,email:`${c}@admin.com`,memberStatus:Math.random()>.5?0:1}}),no=async e=>(await rt(440),At.find(r=>r.userId===e));export{Yt as N,Jt as a,Qt as b,$t as c,cn as d,Zt as e,no as f,Xt as g,eo as h,At as m,fn as u};
