import{b0 as A,H as K,v as M,b4 as N,x as w,b5 as V,y as C,d as G,O as D,g as y,J as T,k as x,P as I,bv as U,Z as q,a0 as J,b7 as X,U as Y,W as Z,aR as Q,I as ee,D as re,p as R,a1 as te,a3 as oe}from"./index-BtdQCspP.js";import{t as ne}from"./Tag-BuwadE8H.js";const se=A&&"loading"in document.createElement("img"),ae=(e={})=>{var a;const{root:l=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof l=="string"?document.querySelector(l):l)||document.documentElement})}},F=new WeakMap,_=new WeakMap,k=new WeakMap,ie=(e,a,l)=>{if(!e)return()=>{};const i=ae(a),{root:d}=i.options;let n;const c=F.get(d);c?n=c:(n=new Map,F.set(d,n));let h,o;n.has(i.hash)?(o=n.get(i.hash),o[1].has(e)||(h=o[0],o[1].add(e),h.observe(e))):(h=new IntersectionObserver(p=>{p.forEach(f=>{if(f.isIntersecting){const b=_.get(f.target),O=k.get(f.target);b&&b(),O&&(O.value=!0)}})},i.options),h.observe(e),o=[h,new Set([e])],n.set(i.hash,o));let u=!1;const g=()=>{u||(_.delete(e),k.delete(e),u=!0,o[1].has(e)&&(o[0].unobserve(e),o[1].delete(e)),o[1].size<=0&&n.delete(i.hash),n.size||F.delete(d))};return _.set(e,g),k.set(e,l),g},le=K("n-avatar-group"),de=M("avatar",`
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
`,[N(w("&","--n-merged-color: var(--n-color-modal);")),V(w("&","--n-merged-color: var(--n-color-popover);")),w("img",`
 width: 100%;
 height: 100%;
 `),C("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),M("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),C("text","line-height: 1.25")]),ce=Object.assign(Object.assign({},I.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ve=G({name:"Avatar",props:ce,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:l}=D(e),i=y(!1);let d=null;const n=y(null),c=y(null),h=()=>{const{value:r}=n;if(r&&(d===null||d!==r.innerHTML)){d=r.innerHTML;const{value:t}=c;if(t){const{offsetWidth:s,offsetHeight:m}=t,{offsetWidth:v,offsetHeight:L}=r,S=.9,j=Math.min(s/v*S,m/L*S,1);r.style.transform=`translateX(-50%) translateY(-50%) scale(${j})`}}},o=T(le,null),u=x(()=>{const{size:r}=e;if(r)return r;const{size:t}=o||{};return t||"medium"}),g=I("Avatar","-avatar",de,U,e,a),p=T(ne,null),f=x(()=>{if(o)return!0;const{round:r,circle:t}=e;return r!==void 0||t!==void 0?r||t:p?p.roundRef.value:!1}),b=x(()=>o?!0:e.bordered||!1),O=x(()=>{const r=u.value,t=f.value,s=b.value,{color:m}=e,{self:{borderRadius:v,fontSize:L,color:S,border:j,colorModal:W,colorPopover:$},common:{cubicBezierEaseInOut:B}}=g.value;let P;return typeof r=="number"?P=`${r}px`:P=g.value.self[q("height",r)],{"--n-font-size":L,"--n-border":s?j:"none","--n-border-radius":t?"50%":v,"--n-color":m||S,"--n-color-modal":m||W,"--n-color-popover":m||$,"--n-bezier":B,"--n-merged-size":`var(--n-avatar-size-override, ${P})`}}),z=l?J("avatar",x(()=>{const r=u.value,t=f.value,s=b.value,{color:m}=e;let v="";return r&&(typeof r=="number"?v+=`a${r}`:v+=r[0]),t&&(v+="b"),s&&(v+="c"),m&&(v+=X(m)),v}),O,e):void 0,E=y(!e.lazy);Y(()=>{if(e.lazy&&e.intersectionObserverOptions){let r;const t=Z(()=>{r==null||r(),r=void 0,e.lazy&&(r=ie(c.value,e.intersectionObserverOptions,E))});Q(()=>{t(),r==null||r()})}}),ee(()=>{var r;return e.src||((r=e.imgProps)===null||r===void 0?void 0:r.src)},()=>{i.value=!1});const H=y(!e.lazy);return{textRef:n,selfRef:c,mergedRoundRef:f,mergedClsPrefix:a,fitTextTransform:h,cssVars:l?void 0:O,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,hasLoadError:i,shouldStartLoading:E,loaded:H,mergedOnError:r=>{if(!E.value)return;i.value=!0;const{onError:t,imgProps:{onError:s}={}}=e;t==null||t(r),s==null||s(r)},mergedOnLoad:r=>{const{onLoad:t,imgProps:{onLoad:s}={}}=e;t==null||t(r),s==null||s(r),H.value=!0}}},render(){var e,a;const{$slots:l,src:i,mergedClsPrefix:d,lazy:n,onRender:c,loaded:h,hasLoadError:o,imgProps:u={}}=this;c==null||c();let g;const p=!h&&!o&&(this.renderPlaceholder?this.renderPlaceholder():(a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e));return this.hasLoadError?g=this.renderFallback?this.renderFallback():re(l.fallback,()=>[R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):g=te(l.default,f=>{if(f)return R(oe,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${d}-avatar__text`},f)});if(i||u.src){const b=this.src||u.src;return R("img",Object.assign(Object.assign({},u),{loading:se&&!this.intersectionObserverOptions&&n?"lazy":"eager",src:n&&this.intersectionObserverOptions?this.shouldStartLoading?b:void 0:b,"data-image-src":b,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[u.style||"",{objectFit:this.objectFit},p?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),R("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},g,n&&p)}});export{ve as _,se as i,ie as o};
