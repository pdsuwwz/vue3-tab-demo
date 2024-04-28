import{v as ae,L as l,y as g,M as z,x as y,d as ne,g as le,O as te,P as M,X as se,B as ie,Y as de,k as R,Z as a,$ as he,a0 as ge,b7 as P,a1 as I,p as b,b8 as be,H as ve,b9 as ue,a7 as ke}from"./index-BAl-k0dT.js";const Ce={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},fe=ae("tag",`
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
 `),g("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),g("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),g("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),g("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),l("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[g("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),g("avatar",`
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
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),pe=Object.assign(Object.assign(Object.assign({},M.props),Ce),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),me=ve("n-tag"),ze=ne({name:"Tag",props:pe,setup(c){const i=le(null),{mergedBorderedRef:o,mergedClsPrefixRef:v,inlineThemeDisabled:u,mergedRtlRef:B}=te(c),C=M("Tag","-tag",fe,ue,c,v);se(me,{roundRef:ie(c,"round")});function k(e){if(!c.disabled&&c.checkable){const{checked:r,onCheckedChange:h,onUpdateChecked:t,"onUpdate:checked":s}=c;t&&t(!r),s&&s(!r),h&&h(!r)}}function f(e){if(c.triggerClickOnClose||e.stopPropagation(),!c.disabled){const{onClose:r}=c;r&&ke(r,e)}}const p={setTextContent(e){const{value:r}=i;r&&(r.textContent=e)}},m=de("Tag",B,v),n=R(()=>{const{type:e,size:r,color:{color:h,textColor:t}={}}=c,{common:{cubicBezierEaseInOut:s},self:{padding:T,closeMargin:w,borderRadius:O,opacityDisabled:S,textColorCheckable:H,textColorHoverCheckable:j,textColorPressedCheckable:F,textColorChecked:E,colorCheckable:U,colorHoverCheckable:N,colorPressedCheckable:D,colorChecked:K,colorCheckedHover:V,colorCheckedPressed:L,closeBorderRadius:W,fontWeightStrong:A,[a("colorBordered",e)]:X,[a("closeSize",r)]:Y,[a("closeIconSize",r)]:Z,[a("fontSize",r)]:q,[a("height",r)]:$,[a("color",e)]:G,[a("textColor",e)]:J,[a("border",e)]:Q,[a("closeIconColor",e)]:_,[a("closeIconColorHover",e)]:ee,[a("closeIconColorPressed",e)]:oe,[a("closeColorHover",e)]:re,[a("closeColorPressed",e)]:ce}}=C.value,x=he(w);return{"--n-font-weight-strong":A,"--n-avatar-size-override":`calc(${$} - 8px)`,"--n-bezier":s,"--n-border-radius":O,"--n-border":Q,"--n-close-icon-size":Z,"--n-close-color-pressed":ce,"--n-close-color-hover":re,"--n-close-border-radius":W,"--n-close-icon-color":_,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":_,"--n-close-margin-top":x.top,"--n-close-margin-right":x.right,"--n-close-margin-bottom":x.bottom,"--n-close-margin-left":x.left,"--n-close-size":Y,"--n-color":h||(o.value?X:G),"--n-color-checkable":U,"--n-color-checked":K,"--n-color-checked-hover":V,"--n-color-checked-pressed":L,"--n-color-hover-checkable":N,"--n-color-pressed-checkable":D,"--n-font-size":q,"--n-height":$,"--n-opacity-disabled":S,"--n-padding":T,"--n-text-color":t||J,"--n-text-color-checkable":H,"--n-text-color-checked":E,"--n-text-color-hover-checkable":j,"--n-text-color-pressed-checkable":F}}),d=u?ge("tag",R(()=>{let e="";const{type:r,size:h,color:{color:t,textColor:s}={}}=c;return e+=r[0],e+=h[0],t&&(e+=`a${P(t)}`),s&&(e+=`b${P(s)}`),o.value&&(e+="c"),e}),n,c):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:m,mergedClsPrefix:v,contentRef:i,mergedBordered:o,handleClick:k,handleCloseClick:f,cssVars:u?void 0:n,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){var c,i;const{mergedClsPrefix:o,rtlEnabled:v,closable:u,color:{borderColor:B}={},round:C,onRender:k,$slots:f}=this;k==null||k();const p=I(f.avatar,n=>n&&b("div",{class:`${o}-tag__avatar`},n)),m=I(f.icon,n=>n&&b("div",{class:`${o}-tag__icon`},n));return b("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:v,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:C,[`${o}-tag--avatar`]:p,[`${o}-tag--icon`]:m,[`${o}-tag--closable`]:u}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||p,b("span",{class:`${o}-tag__content`,ref:"contentRef"},(i=(c=this.$slots).default)===null||i===void 0?void 0:i.call(c)),!this.checkable&&u?b(be,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:C,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?b("div",{class:`${o}-tag__border`,style:{borderColor:B}}):null)}});export{ze as _,me as t};
