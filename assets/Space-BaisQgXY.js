import{aQ as G,d as R,ar as j,n as b,aU as E,M,O as C,aV as _,Z as I,k as O,$ as P,aW as T,aX as S}from"./index-Dr4_a72h.js";import{g as W}from"./get-slot-Bk_rJcZu.js";let h;function A(){if(!G)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),h=n}return h}const L=Object.assign(Object.assign({},C.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),F=R({name:"Space",props:L,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:u}=M(e),d=C("Space","-space",void 0,_,e,n),t=I("Space",u,n);return{useGap:A(),rtlEnabled:t,mergedClsPrefix:n,margin:O(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[P("gap",a)]:f}}=d.value,{row:r,col:g}=T(f);return{horizontal:S(g),vertical:S(r)}})}},render(){const{vertical:e,reverse:n,align:u,inline:d,justify:t,itemClass:a,itemStyle:f,margin:r,wrap:g,mergedClsPrefix:v,rtlEnabled:x,useGap:o,wrapItem:$,internalUseGap:B}=this,p=j(W(this),!1);if(!p.length)return null;const w=`${r.horizontal}px`,c=`${r.horizontal/2}px`,z=`${r.vertical}px`,s=`${r.vertical/2}px`,l=p.length-1,m=t.startsWith("space-");return b("div",{role:"none",class:[`${v}-space`,x&&`${v}-space--rtl`],style:{display:d?"inline-flex":"flex",flexDirection:e&&!n?"column":e&&n?"column-reverse":!e&&n?"row-reverse":"row",justifyContent:["start","end"].includes(t)?`flex-${t}`:t,flexWrap:!g||e?"nowrap":"wrap",marginTop:o||e?"":`-${s}`,marginBottom:o||e?"":`-${s}`,alignItems:u,gap:o?`${r.vertical}px ${r.horizontal}px`:""}},!$&&(o||B)?p:p.map((y,i)=>y.type===E?y:b("div",{role:"none",class:a,style:[f,{maxWidth:"100%"},o?"":e?{marginBottom:i!==l?z:""}:x?{marginLeft:m?t==="space-between"&&i===l?"":c:i!==l?w:"",marginRight:m?t==="space-between"&&i===0?"":c:"",paddingTop:s,paddingBottom:s}:{marginRight:m?t==="space-between"&&i===l?"":c:i!==l?w:"",marginLeft:m?t==="space-between"&&i===0?"":c:"",paddingTop:s,paddingBottom:s}]},y)))}});export{F as _};
