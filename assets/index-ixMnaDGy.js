import{v as N,q as C,x as g,K as pe,J as U,d as ue,M as ne,L as me,X as Xe,g as x,A as X,ae as Et,k as D,af as ze,G as Me,a3 as Dt,T as Vt,V as jt,Y as de,Z as et,$ as Pe,n as i,ag as Ut,F as Lt,ah as Nt,ai as Wt,Q as Be,R as Ze,aj as Ht,ak as Kt,al as Gt,am as qt,an as tt,ao as Yt,ap as Jt,a5 as L,E as Qt,H as Xt,S as ot,aq as it,a0 as Zt,W as eo,ar as to,o as st,b as dt,e as Ie,as as oo}from"./index-hlZMzDj2.js";import{u as no,c as ro,p as Ye,f as ao,N as lo,a as io}from"./utils-B8K24Z07.js";import{c as so,h as nt}from"./create-D3Vn69pI.js";import{u as uo}from"./Eye-CNO_-J-m.js";import{u as co}from"./use-compitable-DlrK69ze.js";import{u as Qe,B as ho,V as fo,a as vo}from"./Follower-B57-yXFF.js";import{N as bo}from"./Input-DSXVbwjw.js";import{_ as Je}from"./Tag-C724h7ki.js";import{V as rt}from"./index-CAKrL18w.js";import{_ as go}from"./Popover-CItKPQ7F.js";import{g as po}from"./get-slot-Bk_rJcZu.js";import{m as mo}from"./member-avatar-DVoK-9KR.js";function at(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const wo=N([C("base-selection",`
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
 `,[C("base-loading",`
 color: var(--n-loading-color);
 `),C("base-selection-tags","min-height: var(--n-height);"),g("border, state-border",`
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
 `),g("state-border",`
 z-index: 1;
 border-color: #0000;
 `),C("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[g("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),C("base-selection-overlay",`
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
 `,[g("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),C("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[g("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),C("base-selection-tags",`
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
 `),C("base-selection-label",`
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
 `,[C("base-selection-input",`
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
 `,[g("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),g("render-label",`
 color: var(--n-text-color);
 `)]),pe("disabled",[N("&:hover",[g("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),U("focus",[g("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),U("active",[g("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),C("base-selection-label","background-color: var(--n-color-active);"),C("base-selection-tags","background-color: var(--n-color-active);")])]),U("disabled","cursor: not-allowed;",[g("arrow",`
 color: var(--n-arrow-color-disabled);
 `),C("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[C("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),g("render-label",`
 color: var(--n-text-color-disabled);
 `)]),C("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),C("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),C("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[g("input",`
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
 `),g("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>U(`${e}-status`,[g("state-border",`border: var(--n-border-${e});`),pe("disabled",[N("&:hover",[g("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),U("active",[g("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),C("base-selection-label",`background-color: var(--n-color-active-${e});`),C("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),U("focus",[g("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),C("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),C("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[N("&:last-child","padding-right: 0;"),C("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[g("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),xo=ue({name:"InternalSelection",props:Object.assign(Object.assign({},ne.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:u}=me(e),c=Xe("InternalSelection",u,r),s=x(null),S=x(null),h=x(null),l=x(null),F=x(null),T=x(null),O=x(null),$=x(null),z=x(null),B=x(null),y=x(!1),m=x(!1),V=x(!1),M=ne("InternalSelection","-internal-selection",wo,Et,e,X(e,"clsPrefix")),p=D(()=>e.clearable&&!e.disabled&&(V.value||e.active)),_=D(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ze(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),I=D(()=>{const o=e.selectedOption;if(o)return o[e.labelField]}),k=D(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function R(){var o;const{value:a}=s;if(a){const{value:E}=S;E&&(E.style.width=`${a.offsetWidth}px`,e.maxTagCount!=="responsive"&&((o=z.value)===null||o===void 0||o.sync({showAllItemsBeforeCalculate:!1})))}}function A(){const{value:o}=B;o&&(o.style.display="none")}function W(){const{value:o}=B;o&&(o.style.display="inline-block")}Me(X(e,"active"),o=>{o||A()}),Me(X(e,"pattern"),()=>{e.multiple&&Dt(R)});function G(o){const{onFocus:a}=e;a&&a(o)}function Y(o){const{onBlur:a}=e;a&&a(o)}function J(o){const{onDeleteOption:a}=e;a&&a(o)}function Z(o){const{onClear:a}=e;a&&a(o)}function P(o){const{onPatternInput:a}=e;a&&a(o)}function le(o){var a;(!o.relatedTarget||!(!((a=h.value)===null||a===void 0)&&a.contains(o.relatedTarget)))&&G(o)}function ie(o){var a;!((a=h.value)===null||a===void 0)&&a.contains(o.relatedTarget)||Y(o)}function ee(o){Z(o)}function ce(){V.value=!0}function te(){V.value=!1}function he(o){!e.active||!e.filterable||o.target!==S.value&&o.preventDefault()}function Q(o){J(o)}function we(o){if(o.key==="Backspace"&&!re.value&&!e.pattern.length){const{selectedOptions:a}=e;a!=null&&a.length&&Q(a[a.length-1])}}const re=x(!1);let fe=null;function $e(o){const{value:a}=s;if(a){const E=o.target.value;a.textContent=E,R()}e.ignoreComposition&&re.value?fe=o:P(o)}function Ae(){re.value=!0}function xe(){re.value=!1,e.ignoreComposition&&P(fe),fe=null}function Ce(o){var a;m.value=!0,(a=e.onPatternFocus)===null||a===void 0||a.call(e,o)}function ae(o){var a;m.value=!1,(a=e.onPatternBlur)===null||a===void 0||a.call(e,o)}function H(){var o,a;if(e.filterable)m.value=!1,(o=T.value)===null||o===void 0||o.blur(),(a=S.value)===null||a===void 0||a.blur();else if(e.multiple){const{value:E}=l;E==null||E.blur()}else{const{value:E}=F;E==null||E.blur()}}function ye(){var o,a,E;e.filterable?(m.value=!1,(o=T.value)===null||o===void 0||o.focus()):e.multiple?(a=l.value)===null||a===void 0||a.focus():(E=F.value)===null||E===void 0||E.focus()}function se(){const{value:o}=S;o&&(W(),o.focus())}function Ee(){const{value:o}=S;o&&o.blur()}function De(o){const{value:a}=O;a&&a.setTextContent(`+${o}`)}function Ve(){const{value:o}=$;return o}function je(){return S.value}let ve=null;function be(){ve!==null&&window.clearTimeout(ve)}function Ue(){e.active||(be(),ve=window.setTimeout(()=>{k.value&&(y.value=!0)},100))}function Le(){be()}function Ne(o){o||(be(),y.value=!1)}Me(k,o=>{o||(y.value=!1)}),Vt(()=>{jt(()=>{const o=T.value;o&&(e.disabled?o.removeAttribute("tabindex"):o.tabIndex=m.value?-1:0)})}),no(h,e.onResize);const{inlineThemeDisabled:Re}=e,ge=D(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:a},self:{borderRadius:E,color:We,placeholderColor:He,textColor:Se,paddingSingle:Fe,paddingMultiple:Oe,caretColor:Ke,colorDisabled:Ge,textColorDisabled:ke,placeholderColorDisabled:oe,colorActive:t,boxShadowFocus:n,boxShadowActive:d,boxShadowHover:w,border:v,borderFocus:f,borderHover:b,borderActive:j,arrowColor:q,arrowColorDisabled:qe,loadingColor:ft,colorActiveWarning:vt,boxShadowFocusWarning:bt,boxShadowActiveWarning:gt,boxShadowHoverWarning:pt,borderWarning:mt,borderFocusWarning:wt,borderHoverWarning:xt,borderActiveWarning:Ct,colorActiveError:yt,boxShadowFocusError:Rt,boxShadowActiveError:St,boxShadowHoverError:Ft,borderError:Ot,borderFocusError:kt,borderHoverError:_t,borderActiveError:Tt,clearColor:zt,clearColorHover:Mt,clearColorPressed:Bt,clearSize:It,arrowSize:Pt,[de("height",o)]:$t,[de("fontSize",o)]:At}}=M.value,_e=et(Fe),Te=et(Oe);return{"--n-bezier":a,"--n-border":v,"--n-border-active":j,"--n-border-focus":f,"--n-border-hover":b,"--n-border-radius":E,"--n-box-shadow-active":d,"--n-box-shadow-focus":n,"--n-box-shadow-hover":w,"--n-caret-color":Ke,"--n-color":We,"--n-color-active":t,"--n-color-disabled":Ge,"--n-font-size":At,"--n-height":$t,"--n-padding-single-top":_e.top,"--n-padding-multiple-top":Te.top,"--n-padding-single-right":_e.right,"--n-padding-multiple-right":Te.right,"--n-padding-single-left":_e.left,"--n-padding-multiple-left":Te.left,"--n-padding-single-bottom":_e.bottom,"--n-padding-multiple-bottom":Te.bottom,"--n-placeholder-color":He,"--n-placeholder-color-disabled":oe,"--n-text-color":Se,"--n-text-color-disabled":ke,"--n-arrow-color":q,"--n-arrow-color-disabled":qe,"--n-loading-color":ft,"--n-color-active-warning":vt,"--n-box-shadow-focus-warning":bt,"--n-box-shadow-active-warning":gt,"--n-box-shadow-hover-warning":pt,"--n-border-warning":mt,"--n-border-focus-warning":wt,"--n-border-hover-warning":xt,"--n-border-active-warning":Ct,"--n-color-active-error":yt,"--n-box-shadow-focus-error":Rt,"--n-box-shadow-active-error":St,"--n-box-shadow-hover-error":Ft,"--n-border-error":Ot,"--n-border-focus-error":kt,"--n-border-hover-error":_t,"--n-border-active-error":Tt,"--n-clear-size":It,"--n-clear-color":zt,"--n-clear-color-hover":Mt,"--n-clear-color-pressed":Bt,"--n-arrow-size":Pt}}),K=Re?Pe("internal-selection",D(()=>e.size[0]),ge,e):void 0;return{mergedTheme:M,mergedClearable:p,mergedClsPrefix:r,rtlEnabled:c,patternInputFocused:m,filterablePlaceholder:_,label:I,selected:k,showTagsPanel:y,isComposing:re,counterRef:O,counterWrapperRef:$,patternInputMirrorRef:s,patternInputRef:S,selfRef:h,multipleElRef:l,singleElRef:F,patternInputWrapperRef:T,overflowRef:z,inputTagElRef:B,handleMouseDown:he,handleFocusin:le,handleClear:ee,handleMouseEnter:ce,handleMouseLeave:te,handleDeleteOption:Q,handlePatternKeyDown:we,handlePatternInputInput:$e,handlePatternInputBlur:ae,handlePatternInputFocus:Ce,handleMouseEnterCounter:Ue,handleMouseLeaveCounter:Le,handleFocusout:ie,handleCompositionEnd:xe,handleCompositionStart:Ae,onPopoverUpdateShow:Ne,focus:ye,focusInput:se,blur:H,blurInput:Ee,updateCounter:De,getCounter:Ve,getTail:je,renderLabel:e.renderLabel,cssVars:Re?void 0:ge,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender}},render(){const{status:e,multiple:r,size:u,disabled:c,filterable:s,maxTagCount:S,bordered:h,clsPrefix:l,ellipsisTagPopoverProps:F,onRender:T,renderTag:O,renderLabel:$}=this;T==null||T();const z=S==="responsive",B=typeof S=="number",y=z||B,m=i(Ut,null,{default:()=>i(bo,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var M,p;return(p=(M=this.$slots).arrow)===null||p===void 0?void 0:p.call(M)}})});let V;if(r){const{labelField:M}=this,p=P=>i("div",{class:`${l}-base-selection-tag-wrapper`,key:P.value},O?O({option:P,handleClose:()=>{this.handleDeleteOption(P)}}):i(Je,{size:u,closable:!P.disabled,disabled:c,onClose:()=>{this.handleDeleteOption(P)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>$?$(P,!0):ze(P[M],P,!0)})),_=()=>(B?this.selectedOptions.slice(0,S):this.selectedOptions).map(p),I=s?i("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:c,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,k=z?()=>i("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(Je,{size:u,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:c})):void 0;let R;if(B){const P=this.selectedOptions.length-S;P>0&&(R=i("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},i(Je,{size:u,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:c},{default:()=>`+${P}`})))}const A=z?s?i(rt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:_,counter:k,tail:()=>I}):i(rt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:_,counter:k}):B&&R?_().concat(R):_(),W=y?()=>i("div",{class:`${l}-base-selection-popover`},z?_():this.selectedOptions.map(p)):void 0,G=y?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},F):null,J=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},i("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,Z=s?i("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},A,z?null:I,m):i("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:c?void 0:0},A,m);V=i(Lt,null,y?i(go,Object.assign({},G,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Z,default:W}):Z,J)}else if(s){const M=this.pattern||this.isComposing,p=this.active?!M:!this.selected,_=this.active?!1:this.selected;V=i("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:at(this.label)},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:c,disabled:c,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),_?i("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},i("div",{class:`${l}-base-selection-overlay__wrapper`},O?O({option:this.selectedOption,handleClose:()=>{}}):$?$(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):null,p?i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,m)}else V=i("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${l}-base-selection-input`,title:at(this.label),key:"input"},i("div",{class:`${l}-base-selection-input__content`},O?O({option:this.selectedOption,handleClose:()=>{}}):$?$(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):i("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),m);return i("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},V,h?i("div",{class:`${l}-base-selection__border`}):null,h?i("div",{class:`${l}-base-selection__state-border`}):null)}}),Co=N([C("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),C("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Nt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),yo=Object.assign(Object.assign({},ne.props),{to:Qe.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Xo=ue({name:"Select",props:yo,setup(e){const{mergedClsPrefixRef:r,mergedBorderedRef:u,namespaceRef:c,inlineThemeDisabled:s}=me(e),S=ne("Select","-select",Co,Wt,e,r),h=x(e.defaultValue),l=X(e,"value"),F=Be(l,h),T=x(!1),O=x(""),$=D(()=>{const{valueField:t,childrenField:n}=e,d=io(t,n);return so(Z.value,d)}),z=D(()=>ro(Y.value,e.valueField,e.childrenField)),B=x(!1),y=Be(X(e,"show"),B),m=x(null),V=x(null),M=x(null),{localeRef:p}=uo("Select"),_=D(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:p.value.placeholder}),I=co(e,["items","options"]),k=[],R=x([]),A=x([]),W=x(new Map),G=D(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:n,valueField:d}=e;return w=>({[n]:String(w),[d]:w})}return t===!1?!1:n=>Object.assign(t(n),{value:n})}),Y=D(()=>A.value.concat(R.value).concat(I.value)),J=D(()=>{const{filter:t}=e;if(t)return t;const{labelField:n,valueField:d}=e;return(w,v)=>{if(!v)return!1;const f=v[n];if(typeof f=="string")return Ye(w,f);const b=v[d];return typeof b=="string"?Ye(w,b):typeof b=="number"?Ye(w,String(b)):!1}}),Z=D(()=>{if(e.remote)return I.value;{const{value:t}=Y,{value:n}=O;return!n.length||!e.filterable?t:ao(t,J.value,n,e.childrenField)}});function P(t){const n=e.remote,{value:d}=W,{value:w}=z,{value:v}=G,f=[];return t.forEach(b=>{if(w.has(b))f.push(w.get(b));else if(n&&d.has(b))f.push(d.get(b));else if(v){const j=v(b);j&&f.push(j)}}),f}const le=D(()=>{if(e.multiple){const{value:t}=F;return Array.isArray(t)?P(t):[]}return null}),ie=D(()=>{const{value:t}=F;return!e.multiple&&!Array.isArray(t)?t===null?null:P([t])[0]||null:null}),ee=Ze(e),{mergedSizeRef:ce,mergedDisabledRef:te,mergedStatusRef:he}=ee;function Q(t,n){const{onChange:d,"onUpdate:value":w,onUpdateValue:v}=e,{nTriggerFormChange:f,nTriggerFormInput:b}=ee;d&&L(d,t,n),v&&L(v,t,n),w&&L(w,t,n),h.value=t,f(),b()}function we(t){const{onBlur:n}=e,{nTriggerFormBlur:d}=ee;n&&L(n,t),d()}function re(){const{onClear:t}=e;t&&L(t)}function fe(t){const{onFocus:n,showOnFocus:d}=e,{nTriggerFormFocus:w}=ee;n&&L(n,t),w(),d&&ae()}function $e(t){const{onSearch:n}=e;n&&L(n,t)}function Ae(t){const{onScroll:n}=e;n&&L(n,t)}function xe(){var t;const{remote:n,multiple:d}=e;if(n){const{value:w}=W;if(d){const{valueField:v}=e;(t=le.value)===null||t===void 0||t.forEach(f=>{w.set(f[v],f)})}else{const v=ie.value;v&&w.set(v[e.valueField],v)}}}function Ce(t){const{onUpdateShow:n,"onUpdate:show":d}=e;n&&L(n,t),d&&L(d,t),B.value=t}function ae(){te.value||(Ce(!0),B.value=!0,e.filterable&&Oe())}function H(){Ce(!1)}function ye(){O.value="",A.value=k}const se=x(!1);function Ee(){e.filterable&&(se.value=!0)}function De(){e.filterable&&(se.value=!1,y.value||ye())}function Ve(){te.value||(y.value?e.filterable?Oe():H():ae())}function je(t){var n,d;!((d=(n=M.value)===null||n===void 0?void 0:n.selfRef)===null||d===void 0)&&d.contains(t.relatedTarget)||(T.value=!1,we(t),H())}function ve(t){fe(t),T.value=!0}function be(t){T.value=!0}function Ue(t){var n;!((n=m.value)===null||n===void 0)&&n.$el.contains(t.relatedTarget)||(T.value=!1,we(t),H())}function Le(){var t;(t=m.value)===null||t===void 0||t.focus(),H()}function Ne(t){var n;y.value&&(!((n=m.value)===null||n===void 0)&&n.$el.contains(Yt(t))||H())}function Re(t){if(!Array.isArray(t))return[];if(G.value)return Array.from(t);{const{remote:n}=e,{value:d}=z;if(n){const{value:w}=W;return t.filter(v=>d.has(v)||w.has(v))}else return t.filter(w=>d.has(w))}}function ge(t){K(t.rawNode)}function K(t){if(te.value)return;const{tag:n,remote:d,clearFilterAfterSelect:w,valueField:v}=e;if(n&&!d){const{value:f}=A,b=f[0]||null;if(b){const j=R.value;j.length?j.push(b):R.value=[b],A.value=k}}if(d&&W.value.set(t[v],t),e.multiple){const f=Re(F.value),b=f.findIndex(j=>j===t[v]);if(~b){if(f.splice(b,1),n&&!d){const j=o(t[v]);~j&&(R.value.splice(j,1),w&&(O.value=""))}}else f.push(t[v]),w&&(O.value="");Q(f,P(f))}else{if(n&&!d){const f=o(t[v]);~f?R.value=[R.value[f]]:R.value=k}Fe(),H(),Q(t[v],t)}}function o(t){return R.value.findIndex(d=>d[e.valueField]===t)}function a(t){y.value||ae();const{value:n}=t.target;O.value=n;const{tag:d,remote:w}=e;if($e(n),d&&!w){if(!n){A.value=k;return}const{onCreate:v}=e,f=v?v(n):{[e.labelField]:n,[e.valueField]:n},{valueField:b,labelField:j}=e;I.value.some(q=>q[b]===f[b]||q[j]===f[j])||R.value.some(q=>q[b]===f[b]||q[j]===f[j])?A.value=k:A.value=[f]}}function E(t){t.stopPropagation();const{multiple:n}=e;!n&&e.filterable&&H(),re(),n?Q([],[]):Q(null,null)}function We(t){!nt(t,"action")&&!nt(t,"empty")&&t.preventDefault()}function He(t){Ae(t)}function Se(t){var n,d,w,v,f;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((n=m.value)===null||n===void 0)&&n.isComposing)){if(y.value){const b=(d=M.value)===null||d===void 0?void 0:d.getPendingTmNode();b?ge(b):e.filterable||(H(),Fe())}else if(ae(),e.tag&&se.value){const b=A.value[0];if(b){const j=b[e.valueField],{value:q}=F;e.multiple&&Array.isArray(q)&&q.some(qe=>qe===j)||K(b)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;y.value&&((w=M.value)===null||w===void 0||w.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;y.value?(v=M.value)===null||v===void 0||v.next():ae();break;case"Escape":y.value&&(Jt(t),H()),(f=m.value)===null||f===void 0||f.focus();break}}function Fe(){var t;(t=m.value)===null||t===void 0||t.focus()}function Oe(){var t;(t=m.value)===null||t===void 0||t.focusInput()}function Ke(){var t;y.value&&((t=V.value)===null||t===void 0||t.syncPosition())}xe(),Me(X(e,"options"),xe);const Ge={focus:()=>{var t;(t=m.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=m.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=m.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=m.value)===null||t===void 0||t.blurInput()}},ke=D(()=>{const{self:{menuBoxShadow:t}}=S.value;return{"--n-menu-box-shadow":t}}),oe=s?Pe("select",void 0,ke,e):void 0;return Object.assign(Object.assign({},Ge),{mergedStatus:he,mergedClsPrefix:r,mergedBordered:u,namespace:c,treeMate:$,isMounted:Ht(),triggerRef:m,menuRef:M,pattern:O,uncontrolledShow:B,mergedShow:y,adjustedTo:Qe(e),uncontrolledValue:h,mergedValue:F,followerRef:V,localizedPlaceholder:_,selectedOption:ie,selectedOptions:le,mergedSize:ce,mergedDisabled:te,focused:T,activeWithoutMenuOpen:se,inlineThemeDisabled:s,onTriggerInputFocus:Ee,onTriggerInputBlur:De,handleTriggerOrMenuResize:Ke,handleMenuFocus:be,handleMenuBlur:Ue,handleMenuTabOut:Le,handleTriggerClick:Ve,handleToggle:ge,handleDeleteOption:K,handlePatternInput:a,handleClear:E,handleTriggerBlur:je,handleTriggerFocus:ve,handleKeydown:Se,handleMenuAfterLeave:ye,handleMenuClickOutside:Ne,handleMenuScroll:He,handleMenuKeydown:Se,handleMenuMousedown:We,mergedTheme:S,cssVars:s?void 0:ke,themeClass:oe==null?void 0:oe.themeClass,onRender:oe==null?void 0:oe.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(ho,null,{default:()=>[i(fo,null,{default:()=>i(xo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,r;return[(r=(e=this.$slots).arrow)===null||r===void 0?void 0:r.call(e)]}})}),i(vo,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Qe.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(Kt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,r,u;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Gt(i(lo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(r=this.menuProps)===null||r===void 0?void 0:r.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(u=this.menuProps)===null||u===void 0?void 0:u.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var c,s;return[(s=(c=this.$slots).empty)===null||s===void 0?void 0:s.call(c)]},header:()=>{var c,s;return[(s=(c=this.$slots).header)===null||s===void 0?void 0:s.call(c)]},action:()=>{var c,s;return[(s=(c=this.$slots).action)===null||s===void 0?void 0:s.call(c)]}}),this.displayDirective==="show"?[[qt,this.mergedShow],[tt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[tt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ro={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},ut=Qt("n-radio-group");function So(e){const r=Ze(e,{mergedSize(p){const{size:_}=e;if(_!==void 0)return _;if(h){const{mergedSizeRef:{value:I}}=h;if(I!==void 0)return I}return p?p.mergedSize.value:"medium"},mergedDisabled(p){return!!(e.disabled||h!=null&&h.disabledRef.value||p!=null&&p.disabled.value)}}),{mergedSizeRef:u,mergedDisabledRef:c}=r,s=x(null),S=x(null),h=Xt(ut,null),l=x(e.defaultChecked),F=X(e,"checked"),T=Be(F,l),O=ot(()=>h?h.valueRef.value===e.value:T.value),$=ot(()=>{const{name:p}=e;if(p!==void 0)return p;if(h)return h.nameRef.value}),z=x(!1);function B(){if(h){const{doUpdateValue:p}=h,{value:_}=e;L(p,_)}else{const{onUpdateChecked:p,"onUpdate:checked":_}=e,{nTriggerFormInput:I,nTriggerFormChange:k}=r;p&&L(p,!0),_&&L(_,!0),I(),k(),l.value=!0}}function y(){c.value||O.value||B()}function m(){y(),s.value&&(s.value.checked=O.value)}function V(){z.value=!1}function M(){z.value=!0}return{mergedClsPrefix:h?h.mergedClsPrefixRef:me(e).mergedClsPrefixRef,inputRef:s,labelRef:S,mergedName:$,mergedDisabled:c,renderSafeChecked:O,focus:z,mergedSize:u,handleRadioInputChange:m,handleRadioInputBlur:V,handleRadioInputFocus:M}}const Fo=C("radio",`
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
`,[U("checked",[g("dot",`
 background-color: var(--n-color-active);
 `)]),g("dot-wrapper",`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),C("radio-input",`
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
 `),g("dot",`
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
 `)])]),g("label",`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),pe("disabled",`
 cursor: pointer;
 `,[N("&:hover",[g("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),U("focus",[N("&:not(:active)",[g("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),U("disabled",`
 cursor: not-allowed;
 `,[g("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[N("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),U("checked",`
 opacity: 1;
 `)]),g("label",{color:"var(--n-text-color-disabled)"}),C("radio-input",`
 cursor: not-allowed;
 `)])]),Oo=Object.assign(Object.assign({},ne.props),Ro),Zo=ue({name:"Radio",props:Oo,setup(e){const r=So(e),u=ne("Radio","-radio",Fo,it,e,r.mergedClsPrefix),c=D(()=>{const{mergedSize:{value:T}}=r,{common:{cubicBezierEaseInOut:O},self:{boxShadow:$,boxShadowActive:z,boxShadowDisabled:B,boxShadowFocus:y,boxShadowHover:m,color:V,colorDisabled:M,colorActive:p,textColor:_,textColorDisabled:I,dotColorActive:k,dotColorDisabled:R,labelPadding:A,labelLineHeight:W,labelFontWeight:G,[de("fontSize",T)]:Y,[de("radioSize",T)]:J}}=u.value;return{"--n-bezier":O,"--n-label-line-height":W,"--n-label-font-weight":G,"--n-box-shadow":$,"--n-box-shadow-active":z,"--n-box-shadow-disabled":B,"--n-box-shadow-focus":y,"--n-box-shadow-hover":m,"--n-color":V,"--n-color-active":p,"--n-color-disabled":M,"--n-dot-color-active":k,"--n-dot-color-disabled":R,"--n-font-size":Y,"--n-radio-size":J,"--n-text-color":_,"--n-text-color-disabled":I,"--n-label-padding":A}}),{inlineThemeDisabled:s,mergedClsPrefixRef:S,mergedRtlRef:h}=me(e),l=Xe("Radio",h,S),F=s?Pe("radio",D(()=>r.mergedSize.value[0]),c,e):void 0;return Object.assign(r,{rtlEnabled:l,cssVars:s?void 0:c,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender})},render(){const{$slots:e,mergedClsPrefix:r,onRender:u,label:c}=this;return u==null||u(),i("label",{class:[`${r}-radio`,this.themeClass,this.rtlEnabled&&`${r}-radio--rtl`,this.mergedDisabled&&`${r}-radio--disabled`,this.renderSafeChecked&&`${r}-radio--checked`,this.focus&&`${r}-radio--focus`],style:this.cssVars},i("input",{ref:"inputRef",type:"radio",class:`${r}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),i("div",{class:`${r}-radio__dot-wrapper`}," ",i("div",{class:[`${r}-radio__dot`,this.renderSafeChecked&&`${r}-radio__dot--checked`]})),Zt(e.default,s=>!s&&!c?null:i("div",{ref:"labelRef",class:`${r}-radio__label`},s||c)))}}),ko=C("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[g("splitor",`
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
 `,[C("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),g("splitor",{height:"var(--n-height)"})]),C("radio-button",`
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
 `,[C("radio-input",`
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
 `),g("state-border",`
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
 `,[g("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),N("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[g("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),pe("disabled",`
 cursor: pointer;
 `,[N("&:hover",[g("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),pe("checked",{color:"var(--n-button-text-color-hover)"})]),U("focus",[N("&:not(:active)",[g("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),U("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),U("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function _o(e,r,u){var c;const s=[];let S=!1;for(let h=0;h<e.length;++h){const l=e[h],F=(c=l.type)===null||c===void 0?void 0:c.name;F==="RadioButton"&&(S=!0);const T=l.props;if(F!=="RadioButton"){s.push(l);continue}if(h===0)s.push(l);else{const O=s[s.length-1].props,$=r===O.value,z=O.disabled,B=r===T.value,y=T.disabled,m=($?2:0)+(z?0:1),V=(B?2:0)+(y?0:1),M={[`${u}-radio-group__splitor--disabled`]:z,[`${u}-radio-group__splitor--checked`]:$},p={[`${u}-radio-group__splitor--disabled`]:y,[`${u}-radio-group__splitor--checked`]:B},_=m<V?p:M;s.push(i("div",{class:[`${u}-radio-group__splitor`,_]}),l)}}return{children:s,isButtonGroup:S}}const To=Object.assign(Object.assign({},ne.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),en=ue({name:"RadioGroup",props:To,setup(e){const r=x(null),{mergedSizeRef:u,mergedDisabledRef:c,nTriggerFormChange:s,nTriggerFormInput:S,nTriggerFormBlur:h,nTriggerFormFocus:l}=Ze(e),{mergedClsPrefixRef:F,inlineThemeDisabled:T,mergedRtlRef:O}=me(e),$=ne("Radio","-radio-group",ko,it,e,F),z=x(e.defaultValue),B=X(e,"value"),y=Be(B,z);function m(k){const{onUpdateValue:R,"onUpdate:value":A}=e;R&&L(R,k),A&&L(A,k),z.value=k,s(),S()}function V(k){const{value:R}=r;R&&(R.contains(k.relatedTarget)||l())}function M(k){const{value:R}=r;R&&(R.contains(k.relatedTarget)||h())}eo(ut,{mergedClsPrefixRef:F,nameRef:X(e,"name"),valueRef:y,disabledRef:c,mergedSizeRef:u,doUpdateValue:m});const p=Xe("Radio",O,F),_=D(()=>{const{value:k}=u,{common:{cubicBezierEaseInOut:R},self:{buttonBorderColor:A,buttonBorderColorActive:W,buttonBorderRadius:G,buttonBoxShadow:Y,buttonBoxShadowFocus:J,buttonBoxShadowHover:Z,buttonColor:P,buttonColorActive:le,buttonTextColor:ie,buttonTextColorActive:ee,buttonTextColorHover:ce,opacityDisabled:te,[de("buttonHeight",k)]:he,[de("fontSize",k)]:Q}}=$.value;return{"--n-font-size":Q,"--n-bezier":R,"--n-button-border-color":A,"--n-button-border-color-active":W,"--n-button-border-radius":G,"--n-button-box-shadow":Y,"--n-button-box-shadow-focus":J,"--n-button-box-shadow-hover":Z,"--n-button-color":P,"--n-button-color-active":le,"--n-button-text-color":ie,"--n-button-text-color-hover":ce,"--n-button-text-color-active":ee,"--n-height":he,"--n-opacity-disabled":te}}),I=T?Pe("radio-group",D(()=>u.value[0]),_,e):void 0;return{selfElRef:r,rtlEnabled:p,mergedClsPrefix:F,mergedValue:y,handleFocusout:M,handleFocusin:V,cssVars:T?void 0:_,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender}},render(){var e;const{mergedValue:r,mergedClsPrefix:u,handleFocusin:c,handleFocusout:s}=this,{children:S,isButtonGroup:h}=_o(to(po(this)),r,u);return(e=this.onRender)===null||e===void 0||e.call(this),i("div",{onFocusin:c,onFocusout:s,ref:"selfElRef",class:[`${u}-radio-group`,this.rtlEnabled&&`${u}-radio-group--rtl`,this.themeClass,h&&`${u}-radio-group--button-group`],style:this.cssVars},S)}}),zo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 10 10"},Mo=Ie("g",{fill:"none"},[Ie("path",{d:"M4.998 0a4.998 4.998 0 1 0 0 9.995a4.998 4.998 0 0 0 0-9.995zM1 4.998a3.998 3.998 0 1 1 7.995 0a3.998 3.998 0 0 1-7.995 0zm6.104-1.602a.5.5 0 0 1 0 .708l-2.25 2.25a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647l1.896-1.897a.5.5 0 0 1 .708 0z",fill:"currentColor"})],-1),Bo=[Mo],Io=ue({name:"PresenceAvailable10Regular",render:function(r,u){return st(),dt("svg",zo,Bo)}}),Po={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 10 10"},$o=Ie("g",{fill:"none"},[Ie("path",{d:"M10 5A5 5 0 1 0 0 5a5 5 0 0 0 10 0zM9 5a4 4 0 0 1-6.453 3.16L8.16 2.547C8.686 3.224 9 4.076 9 5zM7.453 1.84L1.84 7.453A4 4 0 0 1 7.453 1.84z",fill:"currentColor"})],-1),Ao=[$o],Eo=ue({name:"PresenceBlocked10Regular",render:function(r,u){return st(),dt("svg",Po,Ao)}});function lt(e){const r=Math.floor(Math.random()*e.length);return e[r]}const ct=[{value:"junior_development",label:"初级开发",type:"info"},{value:"middle_development",label:"中级开发",type:"success"},{value:"senior_development",label:"高级开发",type:"error"}],tn=e=>ct.find(r=>r.value===e),ht=[{value:"teamMember",label:"团队成员"},{value:"teamLeader",label:"现场负责人"},{value:"projectManager",label:"项目经理"},{value:"qualityManager",label:"质控经理"},{value:"reviewManager",label:"复核经理"}],on=e=>ht.find(r=>r.value===e),Do=[{value:1,label:"活跃",type:"success",icon:Io},{value:0,label:"停用",type:"default",icon:Eo}],nn=e=>Do.find(r=>r.value===e),Vo=Array.from({length:100}).map((e,r)=>{const u=r+1,c=`BJ${`${u}`.padStart(4,"0")}`,s=lt(ct),S=lt(ht);return{username:`Tom${u}`,userId:c,roleId:S.value,rank:s.value,phone:`${1e10+u}`,avatar:mo,email:`${c}@admin.com`,memberStatus:Math.random()>.5?0:1}}),rn=async e=>(await oo(440),Vo.find(r=>r.userId===e));export{Xo as N,en as a,Zo as b,Do as c,ct as d,on as e,rn as f,tn as g,nn as h,Vo as m,ht as u};