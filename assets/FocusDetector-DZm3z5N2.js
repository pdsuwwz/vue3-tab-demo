import{f as p,k,T as H,Y as se,d as X,J as oe,n as y,V as q,aP as re,br as ue,U as ae,bz as ce,b6 as de,B as _,aX as K,aO as F}from"./index-Dr4_a72h.js";import{c as j,d as fe}from"./Follower-RfDnNUhg.js";import{b as he}from"./next-frame-once-C5Ksf8W7.js";function U(t){return t&-t}class Q{constructor(l,i){this.l=l,this.min=i;const o=new Array(l+1);for(let s=0;s<l+1;++s)o[s]=0;this.ft=o}add(l,i){if(i===0)return;const{l:o,ft:s}=this;for(l+=1;l<=o;)s[l]+=i,l+=U(l)}get(l){return this.sum(l+1)-this.sum(l)}sum(l){if(l===void 0&&(l=this.l),l<=0)return 0;const{ft:i,min:o,l:s}=this;if(l>s)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let a=l*o;for(;l>0;)a+=i[l],l-=U(l);return a}getBound(l){let i=0,o=this.l;for(;o>i;){const s=Math.floor((i+o)/2),a=this.sum(s);if(a>l){o=s;continue}else if(a<l){if(i===s)return this.sum(i+1)<=l?i+1:s;i=s}else return s}return i}}let E;function me(){return typeof document>"u"?!1:(E===void 0&&("matchMedia"in window?E=window.matchMedia("(pointer:coarse)").matches:E=!1),E)}let P;function G(){return typeof document>"u"?1:(P===void 0&&(P="chrome"in window?window.devicePixelRatio:1),P)}const Z="VVirtualListXScroll";function ve({columnsRef:t,renderColRef:l,renderItemWithColsRef:i}){const o=p(0),s=p(0),a=k(()=>{const r=t.value;if(r.length===0)return null;const g=new Q(r.length,0);return r.forEach((I,x)=>{g.add(x,I.width)}),g}),w=H(()=>{const r=a.value;return r!==null?Math.max(r.getBound(s.value)-1,0):0}),b=r=>{const g=a.value;return g!==null?g.sum(r):0},c=H(()=>{const r=a.value;return r!==null?Math.min(r.getBound(s.value+o.value)+1,t.value.length-1):0});return se(Z,{startIndexRef:w,endIndexRef:c,columnsRef:t,renderColRef:l,renderItemWithColsRef:i,getLeft:b}),{listWidthRef:o,scrollLeftRef:s}}const J=X({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:t,endIndexRef:l,columnsRef:i,getLeft:o,renderColRef:s,renderItemWithColsRef:a}=oe(Z);return{startIndex:t,endIndex:l,columns:i,renderCol:s,renderItemWithCols:a,getLeft:o}},render(){const{startIndex:t,endIndex:l,columns:i,renderCol:o,renderItemWithCols:s,getLeft:a,item:w}=this;if(s!=null)return s({itemIndex:this.index,startColIndex:t,endColIndex:l,allColumns:i,item:w,getLeft:a});if(o!=null){const b=[];for(let c=t;c<=l;++c){const r=i[c];b.push(o({column:r,left:a(c),item:w}))}return b}return null}}),ge=j(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[j("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[j("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Re=X({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(t){const l=ue();ge.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:fe,ssr:l}),ae(()=>{const{defaultScrollIndex:e,defaultScrollKey:n}=t;e!=null?B({index:e}):n!=null&&B({key:n})});let i=!1,o=!1;ce(()=>{if(i=!1,!o){o=!0;return}B({top:S.value,left:w.value})}),de(()=>{i=!0,o||(o=!0)});const s=H(()=>{if(t.renderCol==null&&t.renderItemWithCols==null||t.columns.length===0)return;let e=0;return t.columns.forEach(n=>{e+=n.width}),e}),a=k(()=>{const e=new Map,{keyField:n}=t;return t.items.forEach((u,f)=>{e.set(u[n],f)}),e}),{scrollLeftRef:w,listWidthRef:b}=ve({columnsRef:_(t,"columns"),renderColRef:_(t,"renderCol"),renderItemWithColsRef:_(t,"renderItemWithCols")}),c=p(null),r=p(void 0),g=new Map,I=k(()=>{const{items:e,itemSize:n,keyField:u}=t,f=new Q(e.length,n);return e.forEach((h,m)=>{const d=h[u],v=g.get(d);v!==void 0&&f.add(m,v)}),f}),x=p(0),S=p(0),W=H(()=>Math.max(I.value.getBound(S.value-K(t.paddingTop))-1,0)),ee=k(()=>{const{value:e}=r;if(e===void 0)return[];const{items:n,itemSize:u}=t,f=W.value,h=Math.min(f+Math.ceil(e/u+1),n.length-1),m=[];for(let d=f;d<=h;++d)m.push(n[d]);return m}),B=(e,n)=>{if(typeof e=="number"){M(e,n,"auto");return}const{left:u,top:f,index:h,key:m,position:d,behavior:v,debounce:R=!0}=e;if(u!==void 0||f!==void 0)M(u,f,v);else if(h!==void 0)Y(h,v,R);else if(m!==void 0){const A=a.value.get(m);A!==void 0&&Y(A,v,R)}else d==="bottom"?M(0,Number.MAX_SAFE_INTEGER,v):d==="top"&&M(0,0,v)};let z,L=null;function Y(e,n,u){const{value:f}=I,h=f.sum(e)+K(t.paddingTop);if(!u)c.value.scrollTo({left:0,top:h,behavior:n});else{z=e,L!==null&&window.clearTimeout(L),L=window.setTimeout(()=>{z=void 0,L=null},16);const{scrollTop:m,offsetHeight:d}=c.value;if(h>m){const v=f.get(e);h+v<=m+d||c.value.scrollTo({left:0,top:h+v-d,behavior:n})}else c.value.scrollTo({left:0,top:h,behavior:n})}}function M(e,n,u){c.value.scrollTo({left:e,top:n,behavior:u})}function te(e,n){var u,f,h;if(i||t.ignoreItemResize||$(n.target))return;const{value:m}=I,d=a.value.get(e),v=m.get(d),R=(h=(f=(u=n.borderBoxSize)===null||u===void 0?void 0:u[0])===null||f===void 0?void 0:f.blockSize)!==null&&h!==void 0?h:n.contentRect.height;if(R===v)return;R-t.itemSize===0?g.delete(e):g.set(e,R-t.itemSize);const C=R-v;if(C===0)return;m.add(d,C);const T=c.value;if(T!=null){if(z===void 0){const O=m.sum(d);T.scrollTop>O&&T.scrollBy(0,C)}else if(d<z)T.scrollBy(0,C);else if(d===z){const O=m.sum(d);R+O>T.scrollTop+T.offsetHeight&&T.scrollBy(0,C)}N()}x.value++}const D=!me();let V=!1;function ne(e){var n;(n=t.onScroll)===null||n===void 0||n.call(t,e),(!D||!V)&&N()}function le(e){var n;if((n=t.onWheel)===null||n===void 0||n.call(t,e),D){const u=c.value;if(u!=null){if(e.deltaX===0&&(u.scrollTop===0&&e.deltaY<=0||u.scrollTop+u.offsetHeight>=u.scrollHeight&&e.deltaY>=0))return;e.preventDefault(),u.scrollTop+=e.deltaY/G(),u.scrollLeft+=e.deltaX/G(),N(),V=!0,he(()=>{V=!1})}}}function ie(e){if(i||$(e.target))return;if(t.renderCol==null&&t.renderItemWithCols==null){if(e.contentRect.height===r.value)return}else if(e.contentRect.height===r.value&&e.contentRect.width===b.value)return;r.value=e.contentRect.height,b.value=e.contentRect.width;const{onResize:n}=t;n!==void 0&&n(e)}function N(){const{value:e}=c;e!=null&&(S.value=e.scrollTop,w.value=e.scrollLeft)}function $(e){let n=e;for(;n!==null;){if(n.style.display==="none")return!0;n=n.parentElement}return!1}return{listHeight:r,listStyle:{overflow:"auto"},keyToIndex:a,itemsStyle:k(()=>{const{itemResizable:e}=t,n=F(I.value.sum());return x.value,[t.itemsStyle,{boxSizing:"content-box",width:F(s.value),height:e?"":n,minHeight:e?n:"",paddingTop:F(t.paddingTop),paddingBottom:F(t.paddingBottom)}]}),visibleItemsStyle:k(()=>(x.value,{transform:`translateY(${F(I.value.sum(W.value))})`})),viewportItems:ee,listElRef:c,itemsElRef:p(null),scrollTo:B,handleListResize:ie,handleListScroll:ne,handleListWheel:le,handleItemResize:te}},render(){const{itemResizable:t,keyField:l,keyToIndex:i,visibleItemsTag:o}=this;return y(q,{onResize:this.handleListResize},{default:()=>{var s,a;return y("div",re(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?y("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[y(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:w,renderItemWithCols:b}=this;return this.viewportItems.map(c=>{const r=c[l],g=i.get(r),I=w!=null?y(J,{index:g,item:c}):void 0,x=b!=null?y(J,{index:g,item:c}):void 0,S=this.$slots.default({item:c,renderedCols:I,renderedItemWithCols:x,index:g})[0];return t?y(q,{key:r,onResize:W=>this.handleItemResize(r,W)},{default:()=>S}):(S.key=r,S)})}})]):(a=(s=this.$slots).empty)===null||a===void 0?void 0:a.call(s)])}})}}),ye=X({props:{onFocus:Function,onBlur:Function},setup(t){return()=>y("div",{style:"width: 0; height: 0",tabindex:0,onFocus:t.onFocus,onBlur:t.onBlur})}});export{ye as F,Re as V};
