import{c7 as gt,bF as mt,aU as Fe,W as xt,H as bt,aB as wt,E as yt,d as q,L as de,g as $,c8 as St,n as b,c9 as Ct,k as p,T as Ke,aH as Ue,q as Rt,x as c,v as T,J as d,aQ as Ee,Q as Pt,A as _t,V as zt,ca as kt,G as le,M as We,cb as It,$ as Nt,ar as Dt,a2 as je,I as Me,al as Tt,am as Vt,ak as $t,cc as Et,ao as jt,a4 as Z,a3 as Ae,a6 as H,o as Mt,c as At,w as Bt,e as re}from"./index-iLhBIVOw.js";import{c as Ot}from"./_createCompounder-DwX7wHia.js";import{_ as Lt}from"./_plugin-vue_export-helper-DlAUqK2U.js";function Xt(e){return gt(mt(e).toLowerCase())}var Be=Ot(function(e,o,a){return o=o.toLowerCase(),e+(a?Xt(o):o)});function Yt(e){const{length:o}=e;return o>1&&(e.push(Oe(e[0],0,"append")),e.unshift(Oe(e[o-1],o-1,"prepend"))),e}function Oe(e,o,a){return Fe(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Le(e,o,a){return o===1?0:a?e===0?o-3:e===o-1?0:e-1:e}function Ce(e,o){return o?e+1:e}function Ft(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function Kt(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function Ut(e,o){return o&&e>3?e-2:e}function Xe(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Ye(e,o){let{offsetWidth:a,offsetHeight:r}=e;if(o){const v=getComputedStyle(e);a=a-Number.parseFloat(v.getPropertyValue("padding-left"))-Number.parseFloat(v.getPropertyValue("padding-right")),r=r-Number.parseFloat(v.getPropertyValue("padding-top"))-Number.parseFloat(v.getPropertyValue("padding-bottom"))}return{width:a,height:r}}function ue(e,o,a){return e<o?o:e>a?a:e}function Wt(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,r,,v="ms"]=a;return Number(r)*(v==="ms"?1:1e3)}return 0}const Ze=yt("n-carousel-methods");function Zt(e){xt(Ze,e)}function Pe(e="unknown",o="component"){const a=bt(Ze);return a||wt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a}const Ht={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},qt=q({name:"CarouselDots",props:Ht,setup(e){const{mergedClsPrefixRef:o}=de(e),a=$([]),r=Pe();function v(g,f){switch(g.key){case"Enter":case" ":g.preventDefault(),r.to(f);return}e.keyboard&&y(g)}function w(g){e.trigger==="hover"&&r.to(g)}function _(g){e.trigger==="click"&&r.to(g)}function y(g){var f;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const x=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(x==="input"||x==="textarea")return;const{code:R}=g,M=R==="PageUp"||R==="ArrowUp",A=R==="PageDown"||R==="ArrowDown",C=R==="PageUp"||R==="ArrowRight",P=R==="PageDown"||R==="ArrowLeft",z=r.isVertical(),E=z?M:C,F=z?A:P;!E&&!F||(g.preventDefault(),E&&!r.isNextDisabled()?(r.next(),S(r.currentIndexRef.value)):F&&!r.isPrevDisabled()&&(r.prev(),S(r.currentIndexRef.value)))}function S(g){var f;(f=a.value[g])===null||f===void 0||f.focus()}return St(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:v,handleMouseenter:w,handleClick:_}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return b("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Ct(this.total,a=>{const r=a===this.currentIndex;return b("div",{"aria-selected":r,ref:v=>o.push(v),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:v=>{this.handleKeydown(v,a)}})}))}}),Qt=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Gt=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),Jt=q({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=de(e),{isVertical:a,isPrevDisabled:r,isNextDisabled:v,prev:w,next:_}=Pe();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:r,isNextDisabled:v,prev:w,next:_}},render(){const{mergedClsPrefix:e}=this;return b("div",{class:`${e}-carousel__arrow-group`},b("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Qt),b("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Gt))}}),ce="CarouselItem";function en(e){var o;return((o=e.type)===null||o===void 0?void 0:o.name)===ce}const tn=q({name:ce,setup(e){const{mergedClsPrefixRef:o}=de(e),a=Pe(Be(ce),`n-${Be(ce)}`),r=$(),v=p(()=>{const{value:f}=r;return f?a.getSlideIndex(f):-1}),w=p(()=>a.isPrev(v.value)),_=p(()=>a.isNext(v.value)),y=p(()=>a.isActive(v.value)),S=p(()=>a.getSlideStyle(v.value));Ke(()=>{a.addSlide(r.value)}),Ue(()=>{a.removeSlide(r.value)});function g(f){const{value:x}=v;x!==void 0&&(a==null||a.onCarouselItemClick(x,f))}return{mergedClsPrefix:o,selfElRef:r,isPrev:w,isNext:_,isActive:y,index:v,style:S,handleClick:g}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:r,isNext:v,isActive:w,index:_,style:y}=this,S=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:w,[`${a}-carousel__slide--prev`]:r,[`${a}-carousel__slide--next`]:v}];return b("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":_,"aria-hidden":!w,style:y,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:r,isNext:v,isActive:w,index:_}))}}),nn=Rt("carousel",`
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
 `)])])]),on=["transitionDuration","transitionTimingFunction"],an=Object.assign(Object.assign({},We.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Re=!1;const sn=q({name:"Carousel",props:an,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=de(e),r=$(null),v=$(null),w=$([]),_={value:[]},y=p(()=>e.direction==="vertical"),S=p(()=>y.value?"height":"width"),g=p(()=>y.value?"bottom":"right"),f=p(()=>e.effect==="slide"),x=p(()=>e.loop&&e.slidesPerView===1&&f.value),R=p(()=>e.effect==="custom"),M=p(()=>!f.value||e.centeredSlides?1:e.slidesPerView),A=p(()=>R.value?1:e.slidesPerView),C=p(()=>M.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),P=$({width:0,height:0}),z=p(()=>{const{value:t}=w;if(!t.length)return[];const{value:n}=C;if(n)return t.map(m=>Ye(m));const{value:s}=A,{value:l}=P,{value:u}=S;let i=l[u];if(s!=="auto"){const{spaceBetween:m}=e,k=i-(s-1)*m,ie=1/Math.max(1,s);i=k*ie}const h=Object.assign(Object.assign({},l),{[u]:i});return t.map(()=>h)}),E=p(()=>{const{value:t}=z;if(!t.length)return[];const{centeredSlides:n,spaceBetween:s}=e,{value:l}=S,{[l]:u}=P.value;let i=0;return t.map(({[l]:h})=>{let m=i;return n&&(m+=(h-u)/2),i+=h+s,m})}),F=$(!1),fe=p(()=>{const{transitionStyle:t}=e;return t?Ee(t,on):{}}),ve=p(()=>R.value?0:Wt(fe.value.transitionDuration)),_e=p(()=>{const{value:t}=w;if(!t.length)return[];const n=!(C.value||A.value===1),s=h=>{if(n){const{value:m}=S;return{[m]:`${z.value[h][m]}px`}}};if(R.value)return t.map((h,m)=>s(m));const{effect:l,spaceBetween:u}=e,{value:i}=g;return t.reduce((h,m,k)=>{const ie=Object.assign(Object.assign({},s(k)),{[`margin-${i}`]:`${u}px`});return h.push(ie),F.value&&(l==="fade"||l==="card")&&Object.assign(ie,fe.value),h},[])}),I=p(()=>{const{value:t}=M,{length:n}=w.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:s}=z,{length:l}=s;if(!l)return n;const{value:u}=E,{value:i}=S,h=P.value[i];let m=s[s.length-1][i],k=l;for(;k>1&&m<h;)k--,m+=u[k]-u[k-1];return ue(k+1,1,l)}}),Q=p(()=>Ut(I.value,x.value)),He=Ce(e.defaultIndex,x.value),pe=$(Le(He,I.value,x.value)),V=Pt(_t(e,"currentIndex"),pe),N=p(()=>Ce(V.value,x.value));function K(t){var n,s;t=ue(t,0,I.value-1);const l=Le(t,I.value,x.value),{value:u}=V;l!==V.value&&(pe.value=l,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,l,u),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,l,u))}function G(t=N.value){return Ft(t,I.value,e.loop)}function J(t=N.value){return Kt(t,I.value,e.loop)}function qe(t){const n=O(t);return n!==null&&G()===n}function Qe(t){const n=O(t);return n!==null&&J()===n}function ze(t){return N.value===O(t)}function Ge(t){return V.value===t}function ke(){return G()===null}function Ie(){return J()===null}function he(t){const n=ue(Ce(t,x.value),0,I.value);(t!==V.value||n!==N.value)&&K(n)}function ge(){const t=G();t!==null&&K(t)}function ee(){const t=J();t!==null&&K(t)}let D=!1;function Je(){(!D||!x.value)&&ge()}function et(){(!D||!x.value)&&ee()}let B=0;const me=$({});function te(t,n=0){me.value=Object.assign({},fe.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function U(t=0){f.value?xe(N.value,t):B!==0&&(!D&&t>0&&(D=!0),te(B=0,t))}function xe(t,n){const s=Ne(t);s!==B&&n>0&&(D=!0),B=Ne(N.value),te(s,n)}function Ne(t){let n;return t>=I.value-1?n=De():n=E.value[t]||0,n}function De(){if(M.value==="auto"){const{value:t}=S,{[t]:n}=P.value,{value:s}=E,l=s[s.length-1];let u;if(l===void 0)u=n;else{const{value:i}=z;u=l+i[i.length-1][t]}return u-n}else{const{value:t}=E;return t[I.value-1]||0}}const W={currentIndexRef:V,to:he,prev:Je,next:et,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:qe,isNext:Qe,isActive:ze,isPrevDisabled:ke,isNextDisabled:Ie,getSlideIndex:O,getSlideStyle:ot,addSlide:tt,removeSlide:nt,onCarouselItemClick:at};Zt(W);function tt(t){t&&w.value.push(t)}function nt(t){if(!t)return;const n=O(t);n!==-1&&w.value.splice(n,1)}function O(t){return typeof t=="number"?t:t?w.value.indexOf(t):-1}function ot(t){const n=O(t);if(n!==-1){const s=[_e.value[n]],l=W.isPrev(n),u=W.isNext(n);return l&&s.push(e.prevSlideStyle||""),u&&s.push(e.nextSlideStyle||""),Et(s)}}let be=0,we=0,j=0,ye=0,ne=!1,Se=!1;function at(t,n){let s=!D&&!ne&&!Se;e.effect==="card"&&s&&!ze(t)&&(he(t),s=!1),s||(n.preventDefault(),n.stopPropagation())}let oe=null;function ae(){oe&&(clearInterval(oe),oe=null)}function L(){ae(),!e.autoplay||Q.value<2||(oe=window.setInterval(ee,e.interval))}function Te(t){var n;if(Re||!(!((n=v.value)===null||n===void 0)&&n.contains(jt(t))))return;Re=!0,ne=!0,Se=!1,ye=Date.now(),ae(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=Xe(t)?t.touches[0]:t;y.value?we=s.clientY:be=s.clientX,e.touchable&&(Z("touchmove",document,se),Z("touchend",document,X),Z("touchcancel",document,X)),e.draggable&&(Z("mousemove",document,se),Z("mouseup",document,X))}function se(t){const{value:n}=y,{value:s}=S,l=Xe(t)?t.touches[0]:t,u=n?l.clientY-we:l.clientX-be,i=P.value[s];j=ue(u,-i,i),t.cancelable&&t.preventDefault(),f.value&&te(B-j,0)}function X(){const{value:t}=N;let n=t;if(!D&&j!==0&&f.value){const s=B-j,l=[...E.value.slice(0,I.value-1),De()];let u=null;for(let i=0;i<l.length;i++){const h=Math.abs(l[i]-s);if(u!==null&&u<h)break;u=h,n=i}}if(n===t){const s=Date.now()-ye,{value:l}=S,u=P.value[l];j>u/2||j/s>.4?n=G(t):(j<-u/2||j/s<-.4)&&(n=J(t))}n!==null&&n!==t?(Se=!0,K(n),Ae(()=>{(!x.value||pe.value!==V.value)&&U(ve.value)})):U(ve.value),Ve(),L()}function Ve(){ne&&(Re=!1),ne=!1,be=0,we=0,j=0,ye=0,H("touchmove",document,se),H("touchend",document,X),H("touchcancel",document,X),H("mousemove",document,se),H("mouseup",document,X)}function st(){if(f.value&&D){const{value:t}=N;xe(t,0)}else L();f.value&&(me.value.transitionDuration="0ms"),D=!1}function it(t){if(t.preventDefault(),D)return;let{deltaX:n,deltaY:s}=t;t.shiftKey&&!n&&(n=s);const l=-1,u=1,i=(n||s)>0?u:l;let h=0,m=0;y.value?m=i:h=i;const k=10;(m*s>=k||h*n>=k)&&(i===u&&!Ie()?ee():i===l&&!ke()&&ge())}function lt(){P.value=Ye(r.value,!0),L()}function rt(){var t,n;C.value&&((n=(t=z.effect).scheduler)===null||n===void 0||n.call(t),z.effect.run())}function ut(){e.autoplay&&ae()}function ct(){e.autoplay&&L()}Ke(()=>{zt(L),requestAnimationFrame(()=>F.value=!0)}),Ue(()=>{Ve(),ae()}),kt(()=>{const{value:t}=w,{value:n}=_,s=new Map,l=i=>s.has(i)?s.get(i):-1;let u=!1;for(let i=0;i<t.length;i++){const h=n.findIndex(m=>m.el===t[i]);h!==i&&(u=!0),s.set(t[i],h)}u&&t.sort((i,h)=>l(i)-l(h))}),le(N,(t,n)=>{if(t!==n)if(L(),f.value){if(x.value){const{value:s}=I;Q.value>2&&t===s-2&&n===1?t=0:t===1&&n===s-2&&(t=s-1)}xe(t,ve.value)}else U()},{immediate:!0}),le([x,M],()=>void Ae(()=>{K(N.value)})),le(E,()=>{f.value&&U()},{deep:!0}),le(f,t=>{t?U():(D=!1,te(B=0))});const dt=p(()=>({onTouchstartPassive:e.touchable?Te:void 0,onMousedown:e.draggable?Te:void 0,onWheel:e.mousewheel?it:void 0})),ft=p(()=>Object.assign(Object.assign({},Ee(W,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:Q.value,currentIndex:V.value})),vt=p(()=>({total:Q.value,currentIndex:V.value,to:W.to})),pt={getCurrentIndex:()=>V.value,to:he,prev:ge,next:ee},ht=We("Carousel","-carousel",nn,It,e,o),$e=p(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:s,dotColorActive:l,dotColorFocus:u,dotLineWidth:i,dotLineWidthActive:h,arrowColor:m}}=ht.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":u,"--n-dot-color-active":l,"--n-dot-size":n,"--n-dot-line-width":i,"--n-dot-line-width-active":h,"--n-arrow-color":m}}),Y=a?Nt("carousel",void 0,$e,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:r,slidesElRef:v,slideVNodes:_,duplicatedable:x,userWantsControl:R,autoSlideSize:C,realIndex:N,slideStyles:_e,translateStyle:me,slidesControlListeners:dt,handleTransitionEnd:st,handleResize:lt,handleSlideResize:rt,handleMouseenter:ut,handleMouseleave:ct,isActive:Ge,arrowSlotProps:ft,dotSlotProps:vt},pt),{cssVars:a?void 0:$e,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:r,slideStyles:v,dotType:w,dotPlacement:_,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:f,$slots:{default:x,dots:R,arrow:M}}=this,A=x&&Dt(x())||[];let C=ln(A);return C.length||(C=A.map(P=>b(tn,null,{default:()=>Fe(P)}))),this.duplicatedable&&(C=Yt(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(P=>b(je,{onResize:this.handleSlideResize},{default:()=>P}))),(e=this.onRender)===null||e===void 0||e.call(this),b("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${_}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,r&&`${o}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),b(je,{onResize:this.handleResize},{default:()=>b("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?C.map((P,z)=>b("div",{style:v[z],key:z},Tt(b($t,Object.assign({},S),{default:()=>P}),[[Vt,this.isActive(z)]]))):C)}),this.showDots&&f.total>1&&Me(R,f,()=>[b(qt,{key:w+_,total:f.total,currentIndex:f.currentIndex,dotType:w,trigger:this.trigger,keyboard:this.keyboard})]),a&&Me(M,g,()=>[b(Jt,null)]))}});function ln(e){return e.reduce((o,a)=>(en(a)&&o.push(a),o),[])}const rn=q({name:"NoticeBoard",__name:"NoticeBoard",setup(e){return $(""),(o,a)=>{const r=sn;return Mt(),At(r,{autoplay:"",interval:2e3},{default:Bt(()=>a[0]||(a[0]=[re("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"},null,-1),re("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"},null,-1),re("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"},null,-1),re("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"},null,-1)])),_:1})}}}),fn=Lt(rn,[["__scopeId","data-v-7e6f8472"]]);export{fn as default};
