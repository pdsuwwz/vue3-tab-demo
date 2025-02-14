import{q as $,G as a,d as g,n as i,M as S,O as f,k as d,$ as T,a1 as k,a$ as V,b as R,g as u,e as m,t as h,w,o as M,m as N}from"./index-Dr4_a72h.js";import{u as j}from"./use-compitable-BlQ8ajn3.js";import{_ as D}from"./Avatar-Bku4dOeq.js";const O=$("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[a("strong",`
 font-weight: var(--n-font-weight-strong);
 `),a("italic",{fontStyle:"italic"}),a("underline",{textDecoration:"underline"}),a("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),P=Object.assign(Object.assign({},f.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),A=g({name:"Text",props:P,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:s}=S(e),o=f("Typography","-text",O,V,e,r),n=d(()=>{const{depth:l,type:c}=e,v=c==="default"?l===void 0?"textColor":`textColor${l}Depth`:T("textColor",c),{common:{fontWeightStrong:x,fontFamilyMono:b,cubicBezierEaseInOut:p},self:{codeTextColor:y,codeBorderRadius:_,codeColor:C,codeBorder:z,[v]:B}}=o.value;return{"--n-bezier":p,"--n-text-color":B,"--n-font-weight-strong":x,"--n-font-famliy-mono":b,"--n-code-border-radius":_,"--n-code-text-color":y,"--n-code-color":C,"--n-code-border":z}}),t=s?k("text",d(()=>`${e.type[0]}${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:r,compitableTag:j(e,["as","tag"]),cssVars:s?void 0:n,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,r,s;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const n=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],t=(s=(r=this.$slots).default)===null||s===void 0?void 0:s.call(r);return this.code?i("code",{class:n,style:this.cssVars},this.delete?i("del",null,t):t):this.delete?i("del",{class:n,style:this.cssVars},t):i(this.compitableTag||"span",{class:n,style:this.cssVars},t)}}),E={class:"flex items-center"},K={class:"pl-12px"},H=g({name:"MemberAvatar",__name:"MemberAvatar",props:{size:{type:[String,Number],default:"medium"},avatar:{type:String,default:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},title:{type:String,default:""},subTitle:{type:String,default:""}},setup(e){return(r,s)=>{const o=D,n=A;return M(),R("div",E,[u(o,{src:e.avatar,round:"",size:e.size},null,8,["src","size"]),m("div",K,[m("div",null,h(e.title),1),u(n,{depth:"3",tag:"div"},{default:w(()=>[N(h(e.subTitle),1)]),_:1})])])}}});export{H as _};
