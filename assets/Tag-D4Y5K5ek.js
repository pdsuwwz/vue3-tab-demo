import{q as ce,G as l,x as h,H as z,v as y,O as M,d as ne,L as R,n as g,aY as le,f as te,M as se,aZ as ie,Y as de,B as he,Z as ge,k as P,$ as c,a0 as be,a1 as ve,a_ as I,a5 as ue,E as ke}from"./index-Dr4_a72h.js";const Ce={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},fe=ce("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[l("strong",`
 font-weight: var(--n-font-weight-strong);
 `),h("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),h("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),h("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),h("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),l("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[h("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),h("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),l("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),l("icon, avatar",[l("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),l("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),l("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[z("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[z("checked","color: var(--n-text-color-pressed-checkable);")])]),l("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),pe=Object.assign(Object.assign(Object.assign({},M.props),Ce),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),me=ke("n-tag"),ze=ne({name:"Tag",props:pe,slots:Object,setup(r){const s=te(null),{mergedBorderedRef:o,mergedClsPrefixRef:b,inlineThemeDisabled:v,mergedRtlRef:B}=se(r),k=M("Tag","-tag",fe,ie,r,b);de(me,{roundRef:he(r,"round")});function u(){if(!r.disabled&&r.checkable){const{checked:e,onCheckedChange:a,onUpdateChecked:d,"onUpdate:checked":t}=r;d&&d(!e),t&&t(!e),a&&a(!e)}}function C(e){if(r.triggerClickOnClose||e.stopPropagation(),!r.disabled){const{onClose:a}=r;a&&ue(a,e)}}const f={setTextContent(e){const{value:a}=s;a&&(a.textContent=e)}},p=ge("Tag",B,b),n=P(()=>{const{type:e,size:a,color:{color:d,textColor:t}={}}=r,{common:{cubicBezierEaseInOut:m},self:{padding:O,closeMargin:T,borderRadius:w,opacityDisabled:S,textColorCheckable:j,textColorHoverCheckable:H,textColorPressedCheckable:F,textColorChecked:E,colorCheckable:U,colorHoverCheckable:N,colorPressedCheckable:D,colorChecked:K,colorCheckedHover:V,colorCheckedPressed:L,closeBorderRadius:W,fontWeightStrong:Y,[c("colorBordered",e)]:Z,[c("closeSize",a)]:q,[c("closeIconSize",a)]:A,[c("fontSize",a)]:G,[c("height",a)]:$,[c("color",e)]:J,[c("textColor",e)]:Q,[c("border",e)]:X,[c("closeIconColor",e)]:_,[c("closeIconColorHover",e)]:ee,[c("closeIconColorPressed",e)]:oe,[c("closeColorHover",e)]:re,[c("closeColorPressed",e)]:ae}}=k.value,x=be(T);return{"--n-font-weight-strong":Y,"--n-avatar-size-override":`calc(${$} - 8px)`,"--n-bezier":m,"--n-border-radius":w,"--n-border":X,"--n-close-icon-size":A,"--n-close-color-pressed":ae,"--n-close-color-hover":re,"--n-close-border-radius":W,"--n-close-icon-color":_,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":_,"--n-close-margin-top":x.top,"--n-close-margin-right":x.right,"--n-close-margin-bottom":x.bottom,"--n-close-margin-left":x.left,"--n-close-size":q,"--n-color":d||(o.value?Z:J),"--n-color-checkable":U,"--n-color-checked":K,"--n-color-checked-hover":V,"--n-color-checked-pressed":L,"--n-color-hover-checkable":N,"--n-color-pressed-checkable":D,"--n-font-size":G,"--n-height":$,"--n-opacity-disabled":S,"--n-padding":O,"--n-text-color":t||Q,"--n-text-color-checkable":j,"--n-text-color-checked":E,"--n-text-color-hover-checkable":H,"--n-text-color-pressed-checkable":F}}),i=v?ve("tag",P(()=>{let e="";const{type:a,size:d,color:{color:t,textColor:m}={}}=r;return e+=a[0],e+=d[0],t&&(e+=`a${I(t)}`),m&&(e+=`b${I(m)}`),o.value&&(e+="c"),e}),n,r):void 0;return Object.assign(Object.assign({},f),{rtlEnabled:p,mergedClsPrefix:b,contentRef:s,mergedBordered:o,handleClick:u,handleCloseClick:C,cssVars:v?void 0:n,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender})},render(){var r,s;const{mergedClsPrefix:o,rtlEnabled:b,closable:v,color:{borderColor:B}={},round:k,onRender:u,$slots:C}=this;u==null||u();const f=R(C.avatar,n=>n&&g("div",{class:`${o}-tag__avatar`},n)),p=R(C.icon,n=>n&&g("div",{class:`${o}-tag__icon`},n));return g("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:b,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:k,[`${o}-tag--avatar`]:f,[`${o}-tag--icon`]:p,[`${o}-tag--closable`]:v}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},p||f,g("span",{class:`${o}-tag__content`,ref:"contentRef"},(s=(r=this.$slots).default)===null||s===void 0?void 0:s.call(r)),!this.checkable&&v?g(le,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:k,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${o}-tag__border`,style:{borderColor:B}}):null)}});export{ze as _,me as t};
