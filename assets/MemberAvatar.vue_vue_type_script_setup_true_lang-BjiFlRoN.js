import{q as S,G as a,L as h,d as g,M as T,k as c,X as $,n as i,a$ as k,a4 as V,b as R,g as u,e as m,t as f,w,o as M,m as N}from"./index-BQQ2VPbK.js";import{u as j}from"./use-compitable-B-9Wj_ZY.js";import{_ as D}from"./Avatar-Bl8qhK3Z.js";const P=S("text",`
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
 `)]),O=Object.assign(Object.assign({},h.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),A=g({name:"Text",props:O,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:s}=T(e),n=h("Typography","-text",P,k,e,r),o=c(()=>{const{depth:l,type:d}=e,x=d==="default"?l===void 0?"textColor":`textColor${l}Depth`:V("textColor",d),{common:{fontWeightStrong:b,fontFamilyMono:p,cubicBezierEaseInOut:y},self:{codeTextColor:_,codeBorderRadius:v,codeColor:C,codeBorder:z,[x]:B}}=n.value;return{"--n-bezier":y,"--n-text-color":B,"--n-font-weight-strong":b,"--n-font-famliy-mono":p,"--n-code-border-radius":v,"--n-code-text-color":_,"--n-code-color":C,"--n-code-border":z}}),t=s?$("text",c(()=>`${e.type[0]}${e.depth||""}`),o,e):void 0;return{mergedClsPrefix:r,compitableTag:j(e,["as","tag"]),cssVars:s?void 0:o,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,r,s;const{mergedClsPrefix:n}=this;(e=this.onRender)===null||e===void 0||e.call(this);const o=[`${n}-text`,this.themeClass,{[`${n}-text--code`]:this.code,[`${n}-text--delete`]:this.delete,[`${n}-text--strong`]:this.strong,[`${n}-text--italic`]:this.italic,[`${n}-text--underline`]:this.underline}],t=(s=(r=this.$slots).default)===null||s===void 0?void 0:s.call(r);return this.code?i("code",{class:o,style:this.cssVars},this.delete?i("del",null,t):t):this.delete?i("del",{class:o,style:this.cssVars},t):i(this.compitableTag||"span",{class:o,style:this.cssVars},t)}}),E={class:"flex items-center"},K={class:"pl-12px"},G=g({name:"MemberAvatar",__name:"MemberAvatar",props:{size:{type:[String,Number],default:"medium"},avatar:{type:String,default:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},title:{type:String,default:""},subTitle:{type:String,default:""}},setup(e){return(r,s)=>{const n=D,o=A;return M(),R("div",E,[u(n,{src:e.avatar,round:"",size:e.size},null,8,["src","size"]),m("div",K,[m("div",null,f(e.title),1),u(o,{depth:"3",tag:"div"},{default:w(()=>[N(f(e.subTitle),1)]),_:1})])])}}});export{G as _};
