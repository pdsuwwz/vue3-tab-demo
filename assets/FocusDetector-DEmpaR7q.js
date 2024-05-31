import{d as C,bx as Q,T as Z,bH as ee,ba as te,k as R,g as I,S as ie,b1 as D,aS as B,n as S,aP as le,a2 as Y}from"./index-DMvxVjEm.js";import{c as ne,d as W}from"./Follower-DQc2SkQL.js";import{b as se}from"./next-frame-once-C5Ksf8W7.js";function $(l){return l&-l}class oe{constructor(i,s){this.l=i,this.min=s;const a=new Array(i+1);for(let o=0;o<i+1;++o)a[o]=0;this.ft=a}add(i,s){if(s===0)return;const{l:a,ft:o}=this;for(i+=1;i<=a;)o[i]+=s,i+=$(i)}get(i){return this.sum(i+1)-this.sum(i)}sum(i){if(i===void 0&&(i=this.l),i<=0)return 0;const{ft:s,min:a,l:o}=this;if(i>o)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let r=i*a;for(;i>0;)r+=s[i],i-=$(i);return r}getBound(i){let s=0,a=this.l;for(;a>s;){const o=Math.floor((s+a)/2),r=this.sum(o);if(r>i){a=o;continue}else if(r<i){if(s===o)return this.sum(s+1)<=i?s+1:o;s=o}else return o}return s}}let M;function re(){return typeof document>"u"?!1:(M===void 0&&("matchMedia"in window?M=window.matchMedia("(pointer:coarse)").matches:M=!1),M)}let _;function X(){return typeof document>"u"?1:(_===void 0&&(_="chrome"in window?window.devicePixelRatio:1),_)}const ue=W(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[W("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[W("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),de=C({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(l){const i=Q();ue.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:ne,ssr:i}),Z(()=>{const{defaultScrollIndex:e,defaultScrollKey:t}=l;e!=null?z({index:e}):t!=null&&z({key:t})});let s=!1,a=!1;ee(()=>{if(s=!1,!a){a=!0;return}z({top:H.value,left:x})}),te(()=>{s=!0,a||(a=!0)});const o=R(()=>{const e=new Map,{keyField:t}=l;return l.items.forEach((n,c)=>{e.set(n[t],c)}),e}),r=I(null),g=I(void 0),m=new Map,b=R(()=>{const{items:e,itemSize:t,keyField:n}=l,c=new oe(e.length,t);return e.forEach((f,d)=>{const u=f[n],h=m.get(u);h!==void 0&&c.add(d,h)}),c}),w=I(0);let x=0;const H=I(0),O=ie(()=>Math.max(b.value.getBound(H.value-D(l.paddingTop))-1,0)),K=R(()=>{const{value:e}=g;if(e===void 0)return[];const{items:t,itemSize:n}=l,c=O.value,f=Math.min(c+Math.ceil(e/n+1),t.length-1),d=[];for(let u=c;u<=f;++u)d.push(t[u]);return d}),z=(e,t)=>{if(typeof e=="number"){F(e,t,"auto");return}const{left:n,top:c,index:f,key:d,position:u,behavior:h,debounce:v=!0}=e;if(n!==void 0||c!==void 0)F(n,c,h);else if(f!==void 0)V(f,h,v);else if(d!==void 0){const N=o.value.get(d);N!==void 0&&V(N,h,v)}else u==="bottom"?F(0,Number.MAX_SAFE_INTEGER,h):u==="top"&&F(0,0,h)};let p,k=null;function V(e,t,n){const{value:c}=b,f=c.sum(e)+D(l.paddingTop);if(!n)r.value.scrollTo({left:0,top:f,behavior:t});else{p=e,k!==null&&window.clearTimeout(k),k=window.setTimeout(()=>{p=void 0,k=null},16);const{scrollTop:d,offsetHeight:u}=r.value;if(f>d){const h=c.get(e);f+h<=d+u||r.value.scrollTo({left:0,top:f+h-u,behavior:t})}else r.value.scrollTo({left:0,top:f,behavior:t})}}function F(e,t,n){r.value.scrollTo({left:e,top:t,behavior:n})}function U(e,t){var n,c,f;if(s||l.ignoreItemResize||j(t.target))return;const{value:d}=b,u=o.value.get(e),h=d.get(u),v=(f=(c=(n=t.borderBoxSize)===null||n===void 0?void 0:n[0])===null||c===void 0?void 0:c.blockSize)!==null&&f!==void 0?f:t.contentRect.height;if(v===h)return;v-l.itemSize===0?m.delete(e):m.set(e,v-l.itemSize);const T=v-h;if(T===0)return;d.add(u,T);const y=r.value;if(y!=null){if(p===void 0){const A=d.sum(u);y.scrollTop>A&&y.scrollBy(0,T)}else if(u<p)y.scrollBy(0,T);else if(u===p){const A=d.sum(u);v+A>y.scrollTop+y.offsetHeight&&y.scrollBy(0,T)}L()}w.value++}const P=!re();let E=!1;function q(e){var t;(t=l.onScroll)===null||t===void 0||t.call(l,e),(!P||!E)&&L()}function G(e){var t;if((t=l.onWheel)===null||t===void 0||t.call(l,e),P){const n=r.value;if(n!=null){if(e.deltaX===0&&(n.scrollTop===0&&e.deltaY<=0||n.scrollTop+n.offsetHeight>=n.scrollHeight&&e.deltaY>=0))return;e.preventDefault(),n.scrollTop+=e.deltaY/X(),n.scrollLeft+=e.deltaX/X(),L(),E=!0,se(()=>{E=!1})}}}function J(e){if(s||j(e.target)||e.contentRect.height===g.value)return;g.value=e.contentRect.height;const{onResize:t}=l;t!==void 0&&t(e)}function L(){const{value:e}=r;e!=null&&(H.value=e.scrollTop,x=e.scrollLeft)}function j(e){let t=e;for(;t!==null;){if(t.style.display==="none")return!0;t=t.parentElement}return!1}return{listHeight:g,listStyle:{overflow:"auto"},keyToIndex:o,itemsStyle:R(()=>{const{itemResizable:e}=l,t=B(b.value.sum());return w.value,[l.itemsStyle,{boxSizing:"content-box",height:e?"":t,minHeight:e?t:"",paddingTop:B(l.paddingTop),paddingBottom:B(l.paddingBottom)}]}),visibleItemsStyle:R(()=>(w.value,{transform:`translateY(${B(b.value.sum(O.value))})`})),viewportItems:K,listElRef:r,itemsElRef:I(null),scrollTo:z,handleListResize:J,handleListScroll:q,handleListWheel:G,handleItemResize:U}},render(){const{itemResizable:l,keyField:i,keyToIndex:s,visibleItemsTag:a}=this;return S(Y,{onResize:this.handleListResize},{default:()=>{var o,r;return S("div",le(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?S("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[S(a,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(g=>{const m=g[i],b=s.get(m),w=this.$slots.default({item:g,index:b})[0];return l?S(Y,{key:m,onResize:x=>this.handleItemResize(m,x)},{default:()=>w}):(w.key=m,w)})})]):(r=(o=this.$slots).empty)===null||r===void 0?void 0:r.call(o)])}})}}),he=C({props:{onFocus:Function,onBlur:Function},setup(l){return()=>S("div",{style:"width: 0; height: 0",tabindex:0,onFocus:l.onFocus,onBlur:l.onBlur})}});export{he as F,de as V};
