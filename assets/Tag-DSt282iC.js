import{q as ae,G as l,x as h,H as z,v as y,L as M,d as ce,f as le,M as te,aU as se,V as ie,A as de,W as he,k as R,a4 as a,a5 as ge,X as be,aV as P,Y as I,n as g,aW as ue,E as ve,a3 as fe}from"./index-BQQ2VPbK.js";const ke={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Ce=ae("tag",`
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
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),pe=Object.assign(Object.assign(Object.assign({},M.props),ke),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),me=ve("n-tag"),ze=ce({name:"Tag",props:pe,slots:Object,setup(r){const s=le(null),{mergedBorderedRef:o,mergedClsPrefixRef:b,inlineThemeDisabled:u,mergedRtlRef:B}=te(r),f=M("Tag","-tag",Ce,se,r,b);ie(me,{roundRef:de(r,"round")});function v(){if(!r.disabled&&r.checkable){const{checked:e,onCheckedChange:n,onUpdateChecked:d,"onUpdate:checked":t}=r;d&&d(!e),t&&t(!e),n&&n(!e)}}function k(e){if(r.triggerClickOnClose||e.stopPropagation(),!r.disabled){const{onClose:n}=r;n&&fe(n,e)}}const C={setTextContent(e){const{value:n}=s;n&&(n.textContent=e)}},p=he("Tag",B,b),c=R(()=>{const{type:e,size:n,color:{color:d,textColor:t}={}}=r,{common:{cubicBezierEaseInOut:m},self:{padding:T,closeMargin:w,borderRadius:O,opacityDisabled:S,textColorCheckable:j,textColorHoverCheckable:H,textColorPressedCheckable:F,textColorChecked:E,colorCheckable:U,colorHoverCheckable:V,colorPressedCheckable:N,colorChecked:W,colorCheckedHover:D,colorCheckedPressed:K,closeBorderRadius:A,fontWeightStrong:L,[a("colorBordered",e)]:q,[a("closeSize",n)]:G,[a("closeIconSize",n)]:X,[a("fontSize",n)]:Y,[a("height",n)]:$,[a("color",e)]:J,[a("textColor",e)]:Q,[a("border",e)]:Z,[a("closeIconColor",e)]:_,[a("closeIconColorHover",e)]:ee,[a("closeIconColorPressed",e)]:oe,[a("closeColorHover",e)]:re,[a("closeColorPressed",e)]:ne}}=f.value,x=ge(w);return{"--n-font-weight-strong":L,"--n-avatar-size-override":`calc(${$} - 8px)`,"--n-bezier":m,"--n-border-radius":O,"--n-border":Z,"--n-close-icon-size":X,"--n-close-color-pressed":ne,"--n-close-color-hover":re,"--n-close-border-radius":A,"--n-close-icon-color":_,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":_,"--n-close-margin-top":x.top,"--n-close-margin-right":x.right,"--n-close-margin-bottom":x.bottom,"--n-close-margin-left":x.left,"--n-close-size":G,"--n-color":d||(o.value?q:J),"--n-color-checkable":U,"--n-color-checked":W,"--n-color-checked-hover":D,"--n-color-checked-pressed":K,"--n-color-hover-checkable":V,"--n-color-pressed-checkable":N,"--n-font-size":Y,"--n-height":$,"--n-opacity-disabled":S,"--n-padding":T,"--n-text-color":t||Q,"--n-text-color-checkable":j,"--n-text-color-checked":E,"--n-text-color-hover-checkable":H,"--n-text-color-pressed-checkable":F}}),i=u?be("tag",R(()=>{let e="";const{type:n,size:d,color:{color:t,textColor:m}={}}=r;return e+=n[0],e+=d[0],t&&(e+=`a${P(t)}`),m&&(e+=`b${P(m)}`),o.value&&(e+="c"),e}),c,r):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:p,mergedClsPrefix:b,contentRef:s,mergedBordered:o,handleClick:v,handleCloseClick:k,cssVars:u?void 0:c,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender})},render(){var r,s;const{mergedClsPrefix:o,rtlEnabled:b,closable:u,color:{borderColor:B}={},round:f,onRender:v,$slots:k}=this;v==null||v();const C=I(k.avatar,c=>c&&g("div",{class:`${o}-tag__avatar`},c)),p=I(k.icon,c=>c&&g("div",{class:`${o}-tag__icon`},c));return g("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:b,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:f,[`${o}-tag--avatar`]:C,[`${o}-tag--icon`]:p,[`${o}-tag--closable`]:u}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},p||C,g("span",{class:`${o}-tag__content`,ref:"contentRef"},(s=(r=this.$slots).default)===null||s===void 0?void 0:s.call(r)),!this.checkable&&u?g(ue,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:f,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${o}-tag__border`,style:{borderColor:B}}):null)}});export{ze as _,me as t};
