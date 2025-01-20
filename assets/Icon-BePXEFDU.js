import{q as g,G as d,v as l,L as m,d as b,M as y,aK as C,k as a,X as v,aH as _,aC as $,n as u,aL as z}from"./index-BQQ2VPbK.js";const R=g("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[d("color-transition",{transition:"color .3s var(--n-bezier)"}),d("depth",{color:"var(--n-color)"},[l("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),l("svg",{height:"1em",width:"1em"})]),S=Object.assign(Object.assign({},m.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),P=b({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:S,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=y(e),s=m("Icon","-icon",R,C,e,t),r=a(()=>{const{depth:i}=e,{common:{cubicBezierEaseInOut:c},self:h}=s.value;if(i!==void 0){const{color:f,[`opacity${i}Depth`]:p}=h;return{"--n-bezier":c,"--n-color":f,"--n-opacity":p}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),n=o?v("icon",a(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:a(()=>{const{size:i,color:c}=e;return{fontSize:_(i),color:c}}),cssVars:o?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:s,component:r,onRender:n,themeClass:i}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&$("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),u("i",z(this.$attrs,{role:"img",class:[`${s}-icon`,i,{[`${s}-icon--depth`]:o,[`${s}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?u(r):this.$slots)}});export{P as N};
