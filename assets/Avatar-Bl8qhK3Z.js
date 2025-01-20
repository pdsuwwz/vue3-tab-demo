import{aP as A,E as K,q as C,aR as V,v as w,aS as N,x as H,L as $,d as G,M as q,f as y,k as x,X as D,S as U,U as X,aD as Y,I as J,B as Q,Y as Z,n as R,K as T,bC as ee,a4 as ne,aV as re,$ as te}from"./index-BQQ2VPbK.js";import{t as oe}from"./Tag-DSt282iC.js";const se=A&&"loading"in document.createElement("img");function ae(e={}){var a;const{root:d=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof d=="string"?document.querySelector(d):d)||document.documentElement})}}const F=new WeakMap,M=new WeakMap,_=new WeakMap,ie=(e,a,d)=>{if(!e)return()=>{};const i=ae(a),{root:l}=i.options;let o;const c=F.get(l);c?o=c:(o=new Map,F.set(l,o));let v,t;o.has(i.hash)?(t=o.get(i.hash),t[1].has(e)||(v=t[0],t[1].add(e),v.observe(e))):(v=new IntersectionObserver(p=>{p.forEach(f=>{if(f.isIntersecting){const b=M.get(f.target),O=_.get(f.target);b&&b(),O&&(O.value=!0)}})},i.options),v.observe(e),t=[v,new Set([e])],o.set(i.hash,t));let u=!1;const g=()=>{u||(M.delete(e),_.delete(e),u=!0,t[1].has(e)&&(t[0].unobserve(e),t[1].delete(e)),t[1].size<=0&&o.delete(i.hash),o.size||F.delete(l))};return M.set(e,g),_.set(e,d),g},de=K("n-avatar-group"),le=C("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[V(w("&","--n-merged-color: var(--n-color-modal);")),N(w("&","--n-merged-color: var(--n-color-popover);")),w("img",`
 width: 100%;
 height: 100%;
 `),H("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),C("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),H("text","line-height: 1.25")]),ce=Object.assign(Object.assign({},$.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),he=G({name:"Avatar",props:ce,slots:Object,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:d}=q(e),i=y(!1);let l=null;const o=y(null),c=y(null),v=()=>{const{value:n}=o;if(n&&(l===null||l!==n.innerHTML)){l=n.innerHTML;const{value:r}=c;if(r){const{offsetWidth:s,offsetHeight:m}=r,{offsetWidth:h,offsetHeight:L}=n,S=.9,j=Math.min(s/h*S,m/L*S,1);n.style.transform=`translateX(-50%) translateY(-50%) scale(${j})`}}},t=T(de,null),u=x(()=>{const{size:n}=e;if(n)return n;const{size:r}=t||{};return r||"medium"}),g=$("Avatar","-avatar",le,ee,e,a),p=T(oe,null),f=x(()=>{if(t)return!0;const{round:n,circle:r}=e;return n!==void 0||r!==void 0?n||r:p?p.roundRef.value:!1}),b=x(()=>t?!0:e.bordered||!1),O=x(()=>{const n=u.value,r=f.value,s=b.value,{color:m}=e,{self:{borderRadius:h,fontSize:L,color:S,border:j,colorModal:B,colorPopover:I},common:{cubicBezierEaseInOut:W}}=g.value;let P;return typeof n=="number"?P=`${n}px`:P=g.value.self[ne("height",n)],{"--n-font-size":L,"--n-border":s?j:"none","--n-border-radius":r?"50%":h,"--n-color":m||S,"--n-color-modal":m||B,"--n-color-popover":m||I,"--n-bezier":W,"--n-merged-size":`var(--n-avatar-size-override, ${P})`}}),z=d?D("avatar",x(()=>{const n=u.value,r=f.value,s=b.value,{color:m}=e;let h="";return n&&(typeof n=="number"?h+=`a${n}`:h+=n[0]),r&&(h+="b"),s&&(h+="c"),m&&(h+=re(m)),h}),O,e):void 0,E=y(!e.lazy);U(()=>{if(e.lazy&&e.intersectionObserverOptions){let n;const r=X(()=>{n==null||n(),n=void 0,e.lazy&&(n=ie(c.value,e.intersectionObserverOptions,E))});Y(()=>{r(),n==null||n()})}}),J(()=>{var n;return e.src||((n=e.imgProps)===null||n===void 0?void 0:n.src)},()=>{i.value=!1});const k=y(!e.lazy);return{textRef:o,selfRef:c,mergedRoundRef:f,mergedClsPrefix:a,fitTextTransform:v,cssVars:d?void 0:O,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,hasLoadError:i,shouldStartLoading:E,loaded:k,mergedOnError:n=>{if(!E.value)return;i.value=!0;const{onError:r,imgProps:{onError:s}={}}=e;r==null||r(n),s==null||s(n)},mergedOnLoad:n=>{const{onLoad:r,imgProps:{onLoad:s}={}}=e;r==null||r(n),s==null||s(n),k.value=!0}}},render(){var e,a;const{$slots:d,src:i,mergedClsPrefix:l,lazy:o,onRender:c,loaded:v,hasLoadError:t,imgProps:u={}}=this;c==null||c();let g;const p=!v&&!t&&(this.renderPlaceholder?this.renderPlaceholder():(a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e));return this.hasLoadError?g=this.renderFallback?this.renderFallback():Q(d.fallback,()=>[R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):g=Z(d.default,f=>{if(f)return R(te,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${l}-avatar__text`},f)});if(i||u.src){const b=this.src||u.src;return R("img",Object.assign(Object.assign({},u),{loading:se&&!this.intersectionObserverOptions&&o?"lazy":"eager",src:o&&this.intersectionObserverOptions?this.shouldStartLoading?b:void 0:b,"data-image-src":b,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[u.style||"",{objectFit:this.objectFit},p?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),R("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},g,o&&p)}});export{he as _,se as i,ie as o};
