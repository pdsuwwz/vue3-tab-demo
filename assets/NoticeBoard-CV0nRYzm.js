import{c7 as mt,bF as xt,aU as Ke,W as wt,H as bt,aB as yt,E as St,d as q,L as ce,g as $,c8 as Ct,n as w,c9 as _t,k as h,T as Ue,aH as We,q as Rt,x as c,v as T,J as d,aQ as je,Q as Pt,A as zt,V as It,ca as kt,G as le,M as Ze,cb as Dt,$ as Nt,ar as Tt,a2 as Me,I as Ae,al as Vt,am as $t,ak as Et,cc as jt,ao as Mt,a4 as Z,a3 as Be,a6 as H,o as At,c as Bt,w as Ot,cd as Lt,ce as Xt,e as de}from"./index-DMvxVjEm.js";import{c as Yt}from"./_createCompounder-CvUgx7KZ.js";import{_ as Ft}from"./_plugin-vue_export-helper-DlAUqK2U.js";function Kt(e){return mt(xt(e).toLowerCase())}var Oe=Yt(function(e,o,a){return o=o.toLowerCase(),e+(a?Kt(o):o)});function Ut(e){const{length:o}=e;return o>1&&(e.push(Le(e[0],0,"append")),e.unshift(Le(e[o-1],o-1,"prepend"))),e}function Le(e,o,a){return Ke(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Xe(e,o,a){return o===1?0:a?e===0?o-3:e===o-1?0:e-1:e}function _e(e,o){return o?e+1:e}function Wt(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function Zt(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function Ht(e,o){return o&&e>3?e-2:e}function Ye(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Fe(e,o){let{offsetWidth:a,offsetHeight:r}=e;if(o){const v=getComputedStyle(e);a=a-parseFloat(v.getPropertyValue("padding-left"))-parseFloat(v.getPropertyValue("padding-right")),r=r-parseFloat(v.getPropertyValue("padding-top"))-parseFloat(v.getPropertyValue("padding-bottom"))}return{width:a,height:r}}function re(e,o,a){return e<o?o:e>a?a:e}function qt(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,r,,v="ms"]=a;return Number(r)*(v==="ms"?1:1e3)}return 0}const He=St("n-carousel-methods"),Qt=e=>{wt(He,e)},Pe=(e="unknown",o="component")=>{const a=bt(He);return a||yt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a},Gt={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Jt=q({name:"CarouselDots",props:Gt,setup(e){const{mergedClsPrefixRef:o}=ce(e),a=$([]),r=Pe();function v(g,f){switch(g.key){case"Enter":case" ":g.preventDefault(),r.to(f);return}e.keyboard&&y(g)}function b(g){e.trigger==="hover"&&r.to(g)}function P(g){e.trigger==="click"&&r.to(g)}function y(g){var f;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const x=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(x==="input"||x==="textarea")return;const{code:_}=g,M=_==="PageUp"||_==="ArrowUp",A=_==="PageDown"||_==="ArrowDown",C=_==="PageUp"||_==="ArrowRight",R=_==="PageDown"||_==="ArrowLeft",z=r.isVertical(),E=z?M:C,F=z?A:R;!E&&!F||(g.preventDefault(),E&&!r.isNextDisabled()?(r.next(),S(r.currentIndexRef.value)):F&&!r.isPrevDisabled()&&(r.prev(),S(r.currentIndexRef.value)))}function S(g){var f;(f=a.value[g])===null||f===void 0||f.focus()}return Ct(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:v,handleMouseenter:b,handleClick:P}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},_t(this.total,a=>{const r=a===this.currentIndex;return w("div",{"aria-selected":r,ref:v=>o.push(v),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:v=>{this.handleKeydown(v,a)}})}))}}),en=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),tn=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),nn=q({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=ce(e),{isVertical:a,isPrevDisabled:r,isNextDisabled:v,prev:b,next:P}=Pe();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:r,isNextDisabled:v,prev:b,next:P}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},en),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},tn))}}),ue="CarouselItem",on=e=>{var o;return((o=e.type)===null||o===void 0?void 0:o.name)===ue},an=q({name:ue,setup(e){const{mergedClsPrefixRef:o}=ce(e),a=Pe(Oe(ue),`n-${Oe(ue)}`),r=$(),v=h(()=>{const{value:f}=r;return f?a.getSlideIndex(f):-1}),b=h(()=>a.isPrev(v.value)),P=h(()=>a.isNext(v.value)),y=h(()=>a.isActive(v.value)),S=h(()=>a.getSlideStyle(v.value));Ue(()=>{a.addSlide(r.value)}),We(()=>{a.removeSlide(r.value)});function g(f){const{value:x}=v;x!==void 0&&(a==null||a.onCarouselItemClick(x,f))}return{mergedClsPrefix:o,selfElRef:r,isPrev:b,isNext:P,isActive:y,index:v,style:S,handleClick:g}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:r,isNext:v,isActive:b,index:P,style:y}=this,S=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:b,[`${a}-carousel__slide--prev`]:r,[`${a}-carousel__slide--next`]:v}];return w("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":P,"aria-hidden":!b,style:y,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:r,isNext:v,isActive:b,index:P}))}}),sn=Rt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[T("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[d("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 background-color: var(--n-dot-color-active);
 `)])]),d("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[T("svg",`
 height: 1em;
 width: 1em;
 `),T("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),d("vertical",`
 touch-action: pan-x;
 `,[c("slides",`
 flex-direction: column;
 `),d("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),d("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[d("current",`
 transform: translateY(-50%) translateZ(0);
 `),d("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),d("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),d("usercontrol",[c("slides",[T(">",[T("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),d("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),d("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),d("show-arrow",[d("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),d("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),d("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),d("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),d("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[d("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),d("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[d("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),d("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),d("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),ln=["transitionDuration","transitionTimingFunction"],rn=Object.assign(Object.assign({},Ze.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Re=!1;const un=q({name:"Carousel",props:rn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=ce(e),r=$(null),v=$(null),b=$([]),P={value:[]},y=h(()=>e.direction==="vertical"),S=h(()=>y.value?"height":"width"),g=h(()=>y.value?"bottom":"right"),f=h(()=>e.effect==="slide"),x=h(()=>e.loop&&e.slidesPerView===1&&f.value),_=h(()=>e.effect==="custom"),M=h(()=>!f.value||e.centeredSlides?1:e.slidesPerView),A=h(()=>_.value?1:e.slidesPerView),C=h(()=>M.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),R=$({width:0,height:0}),z=h(()=>{const{value:t}=b;if(!t.length)return[];const{value:n}=C;if(n)return t.map(m=>Fe(m));const{value:s}=A,{value:l}=R,{value:u}=S;let i=l[u];if(s!=="auto"){const{spaceBetween:m}=e,I=i-(s-1)*m,ie=1/Math.max(1,s);i=I*ie}const p=Object.assign(Object.assign({},l),{[u]:i});return t.map(()=>p)}),E=h(()=>{const{value:t}=z;if(!t.length)return[];const{centeredSlides:n,spaceBetween:s}=e,{value:l}=S,{[l]:u}=R.value;let i=0;return t.map(({[l]:p})=>{let m=i;return n&&(m+=(p-u)/2),i+=p+s,m})}),F=$(!1),ve=h(()=>{const{transitionStyle:t}=e;return t?je(t,ln):{}}),he=h(()=>_.value?0:qt(ve.value.transitionDuration)),ze=h(()=>{const{value:t}=b;if(!t.length)return[];const n=!(C.value||A.value===1),s=p=>{if(n){const{value:m}=S;return{[m]:`${z.value[p][m]}px`}}};if(_.value)return t.map((p,m)=>s(m));const{effect:l,spaceBetween:u}=e,{value:i}=g;return t.reduce((p,m,I)=>{const ie=Object.assign(Object.assign({},s(I)),{[`margin-${i}`]:`${u}px`});return p.push(ie),F.value&&(l==="fade"||l==="card")&&Object.assign(ie,ve.value),p},[])}),k=h(()=>{const{value:t}=M,{length:n}=b.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:s}=z,{length:l}=s;if(!l)return n;const{value:u}=E,{value:i}=S,p=R.value[i];let m=s[s.length-1][i],I=l;for(;I>1&&m<p;)I--,m+=u[I]-u[I-1];return re(I+1,1,l)}}),Q=h(()=>Ht(k.value,x.value)),qe=_e(e.defaultIndex,x.value),pe=$(Xe(qe,k.value,x.value)),V=Pt(zt(e,"currentIndex"),pe),D=h(()=>_e(V.value,x.value));function K(t){var n,s;t=re(t,0,k.value-1);const l=Xe(t,k.value,x.value),{value:u}=V;l!==V.value&&(pe.value=l,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,l,u),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,l,u))}function G(t=D.value){return Wt(t,k.value,e.loop)}function J(t=D.value){return Zt(t,k.value,e.loop)}function Qe(t){const n=O(t);return n!==null&&G()===n}function Ge(t){const n=O(t);return n!==null&&J()===n}function Ie(t){return D.value===O(t)}function Je(t){return V.value===t}function ke(){return G()===null}function De(){return J()===null}function ge(t){const n=re(_e(t,x.value),0,k.value);(t!==V.value||n!==D.value)&&K(n)}function me(){const t=G();t!==null&&K(t)}function ee(){const t=J();t!==null&&K(t)}function et(){(!N||!x.value)&&me()}function tt(){(!N||!x.value)&&ee()}let N=!1,B=0;const xe=$({});function te(t,n=0){xe.value=Object.assign({},ve.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function U(t=0){f.value?we(D.value,t):B!==0&&(!N&&t>0&&(N=!0),te(B=0,t))}function we(t,n){const s=Ne(t);s!==B&&n>0&&(N=!0),B=Ne(D.value),te(s,n)}function Ne(t){let n;return t>=k.value-1?n=Te():n=E.value[t]||0,n}function Te(){if(M.value==="auto"){const{value:t}=S,{[t]:n}=R.value,{value:s}=E,l=s[s.length-1];let u;if(l===void 0)u=n;else{const{value:i}=z;u=l+i[i.length-1][t]}return u-n}else{const{value:t}=E;return t[k.value-1]||0}}const W={currentIndexRef:V,to:ge,prev:et,next:tt,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:Qe,isNext:Ge,isActive:Ie,isPrevDisabled:ke,isNextDisabled:De,getSlideIndex:O,getSlideStyle:at,addSlide:nt,removeSlide:ot,onCarouselItemClick:st};Qt(W);function nt(t){t&&b.value.push(t)}function ot(t){if(!t)return;const n=O(t);n!==-1&&b.value.splice(n,1)}function O(t){return typeof t=="number"?t:t?b.value.indexOf(t):-1}function at(t){const n=O(t);if(n!==-1){const s=[ze.value[n]],l=W.isPrev(n),u=W.isNext(n);return l&&s.push(e.prevSlideStyle||""),u&&s.push(e.nextSlideStyle||""),jt(s)}}function st(t,n){let s=!N&&!ae&&!Ce;e.effect==="card"&&s&&!Ie(t)&&(ge(t),s=!1),s||(n.preventDefault(),n.stopPropagation())}let ne=null;function oe(){ne&&(clearInterval(ne),ne=null)}function L(){oe(),!e.autoplay||Q.value<2||(ne=window.setInterval(ee,e.interval))}let be=0,ye=0,j=0,Se=0,ae=!1,Ce=!1;function Ve(t){var n;if(Re||!(!((n=v.value)===null||n===void 0)&&n.contains(Mt(t))))return;Re=!0,ae=!0,Ce=!1,Se=Date.now(),oe(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=Ye(t)?t.touches[0]:t;y.value?ye=s.clientY:be=s.clientX,e.touchable&&(Z("touchmove",document,se),Z("touchend",document,X),Z("touchcancel",document,X)),e.draggable&&(Z("mousemove",document,se),Z("mouseup",document,X))}function se(t){const{value:n}=y,{value:s}=S,l=Ye(t)?t.touches[0]:t,u=n?l.clientY-ye:l.clientX-be,i=R.value[s];j=re(u,-i,i),t.cancelable&&t.preventDefault(),f.value&&te(B-j,0)}function X(){const{value:t}=D;let n=t;if(!N&&j!==0&&f.value){const s=B-j,l=[...E.value.slice(0,k.value-1),Te()];let u=null;for(let i=0;i<l.length;i++){const p=Math.abs(l[i]-s);if(u!==null&&u<p)break;u=p,n=i}}if(n===t){const s=Date.now()-Se,{value:l}=S,u=R.value[l];j>u/2||j/s>.4?n=G(t):(j<-u/2||j/s<-.4)&&(n=J(t))}n!==null&&n!==t?(Ce=!0,K(n),Be(()=>{(!x.value||pe.value!==V.value)&&U(he.value)})):U(he.value),$e(),L()}function $e(){ae&&(Re=!1),ae=!1,be=0,ye=0,j=0,Se=0,H("touchmove",document,se),H("touchend",document,X),H("touchcancel",document,X),H("mousemove",document,se),H("mouseup",document,X)}function it(){if(f.value&&N){const{value:t}=D;we(t,0)}else L();f.value&&(xe.value.transitionDuration="0ms"),N=!1}function lt(t){if(t.preventDefault(),N)return;let{deltaX:n,deltaY:s}=t;t.shiftKey&&!n&&(n=s);const l=-1,u=1,i=(n||s)>0?u:l;let p=0,m=0;y.value?m=i:p=i;const I=10;(m*s>=I||p*n>=I)&&(i===u&&!De()?ee():i===l&&!ke()&&me())}function rt(){R.value=Fe(r.value,!0),L()}function ut(){var t,n;C.value&&((n=(t=z.effect).scheduler)===null||n===void 0||n.call(t),z.effect.run())}function ct(){e.autoplay&&oe()}function dt(){e.autoplay&&L()}Ue(()=>{It(L),requestAnimationFrame(()=>F.value=!0)}),We(()=>{$e(),oe()}),kt(()=>{const{value:t}=b,{value:n}=P,s=new Map,l=i=>s.has(i)?s.get(i):-1;let u=!1;for(let i=0;i<t.length;i++){const p=n.findIndex(m=>m.el===t[i]);p!==i&&(u=!0),s.set(t[i],p)}u&&t.sort((i,p)=>l(i)-l(p))}),le(D,(t,n)=>{if(t!==n)if(L(),f.value){if(x.value){const{value:s}=k;Q.value>2&&t===s-2&&n===1?t=0:t===1&&n===s-2&&(t=s-1)}we(t,he.value)}else U()},{immediate:!0}),le([x,M],()=>void Be(()=>{K(D.value)})),le(E,()=>{f.value&&U()},{deep:!0}),le(f,t=>{t?U():(N=!1,te(B=0))});const ft=h(()=>({onTouchstartPassive:e.touchable?Ve:void 0,onMousedown:e.draggable?Ve:void 0,onWheel:e.mousewheel?lt:void 0})),vt=h(()=>Object.assign(Object.assign({},je(W,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:Q.value,currentIndex:V.value})),ht=h(()=>({total:Q.value,currentIndex:V.value,to:W.to})),pt={getCurrentIndex:()=>V.value,to:ge,prev:me,next:ee},gt=Ze("Carousel","-carousel",sn,Dt,e,o),Ee=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:s,dotColorActive:l,dotColorFocus:u,dotLineWidth:i,dotLineWidthActive:p,arrowColor:m}}=gt.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":u,"--n-dot-color-active":l,"--n-dot-size":n,"--n-dot-line-width":i,"--n-dot-line-width-active":p,"--n-arrow-color":m}}),Y=a?Nt("carousel",void 0,Ee,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:r,slidesElRef:v,slideVNodes:P,duplicatedable:x,userWantsControl:_,autoSlideSize:C,realIndex:D,slideStyles:ze,translateStyle:xe,slidesControlListeners:ft,handleTransitionEnd:it,handleResize:rt,handleSlideResize:ut,handleMouseenter:ct,handleMouseleave:dt,isActive:Je,arrowSlotProps:vt,dotSlotProps:ht},pt),{cssVars:a?void 0:Ee,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:r,slideStyles:v,dotType:b,dotPlacement:P,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:f,$slots:{default:x,dots:_,arrow:M}}=this,A=x&&Tt(x())||[];let C=cn(A);return C.length||(C=A.map(R=>w(an,null,{default:()=>Ke(R)}))),this.duplicatedable&&(C=Ut(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(R=>w(Me,{onResize:this.handleSlideResize},{default:()=>R}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${P}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,r&&`${o}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(Me,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?C.map((R,z)=>w("div",{style:v[z],key:z},Vt(w(Et,Object.assign({},S),{default:()=>R}),[[$t,this.isActive(z)]]))):C)}),this.showDots&&f.total>1&&Ae(_,f,()=>[w(Jt,{key:b+P,total:f.total,currentIndex:f.currentIndex,dotType:b,trigger:this.trigger,keyboard:this.keyboard})]),a&&Ae(M,g,()=>[w(nn,null)]))}});function cn(e){return e.reduce((o,a)=>(on(a)&&o.push(a),o),[])}const fe=e=>(Lt("data-v-7e6f8472"),e=e(),Xt(),e),dn=fe(()=>de("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"},null,-1)),fn=fe(()=>de("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"},null,-1)),vn=fe(()=>de("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"},null,-1)),hn=fe(()=>de("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"},null,-1)),pn=q({name:"NoticeBoard",__name:"NoticeBoard",setup(e){return $(""),(o,a)=>{const r=un;return At(),Bt(r,{autoplay:"",interval:2e3},{default:Ot(()=>[dn,fn,vn,hn]),_:1})}}}),wn=Ft(pn,[["__scopeId","data-v-7e6f8472"]]);export{wn as default};
