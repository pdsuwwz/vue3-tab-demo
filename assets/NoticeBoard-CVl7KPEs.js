import{bL as mt,bM as xt,b3 as Ue,X as bt,J as wt,aL as yt,H as St,d as q,O as ce,g as $,bN as Ct,p as b,bO as Rt,k as h,U as Fe,aR as We,v as _t,y as c,x as T,L as d,aZ as je,R as Pt,B as zt,W as It,bP as kt,I as le,P as Ze,bQ as Dt,a0 as Nt,aA as Tt,a3 as Me,K as Ae,at as Vt,au as $t,as as Et,bR as jt,ax as Mt,a6 as Z,a5 as Be,a8 as H,o as At,c as Bt,w as Ot,bS as Lt,bT as Xt,e as de,_ as Kt}from"./index-C9dlbafH.js";import{c as Yt}from"./_createCompounder-nGjTZBYV.js";function Ut(e){return mt(xt(e).toLowerCase())}var Oe=Yt(function(e,o,a){return o=o.toLowerCase(),e+(a?Ut(o):o)});function Ft(e){const{length:o}=e;return o>1&&(e.push(Le(e[0],0,"append")),e.unshift(Le(e[o-1],o-1,"prepend"))),e}function Le(e,o,a){return Ue(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Xe(e,o,a){return o===1?0:a?e===0?o-3:e===o-1?0:e-1:e}function Re(e,o){return o?e+1:e}function Wt(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function Zt(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function Ht(e,o){return o&&e>3?e-2:e}function Ke(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Ye(e,o){let{offsetWidth:a,offsetHeight:r}=e;if(o){const v=getComputedStyle(e);a=a-parseFloat(v.getPropertyValue("padding-left"))-parseFloat(v.getPropertyValue("padding-right")),r=r-parseFloat(v.getPropertyValue("padding-top"))-parseFloat(v.getPropertyValue("padding-bottom"))}return{width:a,height:r}}function re(e,o,a){return e<o?o:e>a?a:e}function qt(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,r,,v="ms"]=a;return Number(r)*(v==="ms"?1:1e3)}return 0}const He=St("n-carousel-methods"),Jt=e=>{bt(He,e)},Pe=(e="unknown",o="component")=>{const a=wt(He);return a||yt(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a},Qt={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},Gt=q({name:"CarouselDots",props:Qt,setup(e){const{mergedClsPrefixRef:o}=ce(e),a=$([]),r=Pe();function v(g,f){switch(g.key){case"Enter":case" ":g.preventDefault(),r.to(f);return}e.keyboard&&y(g)}function w(g){e.trigger==="hover"&&r.to(g)}function P(g){e.trigger==="click"&&r.to(g)}function y(g){var f;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const x=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(x==="input"||x==="textarea")return;const{code:R}=g,M=R==="PageUp"||R==="ArrowUp",A=R==="PageDown"||R==="ArrowDown",C=R==="PageUp"||R==="ArrowRight",_=R==="PageDown"||R==="ArrowLeft",z=r.isVertical(),E=z?M:C,Y=z?A:_;!E&&!Y||(g.preventDefault(),E&&!r.isNextDisabled()?(r.next(),S(r.currentIndexRef.value)):Y&&!r.isPrevDisabled()&&(r.prev(),S(r.currentIndexRef.value)))}function S(g){var f;(f=a.value[g])===null||f===void 0||f.focus()}return Ct(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:v,handleMouseenter:w,handleClick:P}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return b("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Rt(this.total,a=>{const r=a===this.currentIndex;return b("div",{"aria-selected":r,ref:v=>o.push(v),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:v=>{this.handleKeydown(v,a)}})}))}}),en=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),tn=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),nn=q({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=ce(e),{isVertical:a,isPrevDisabled:r,isNextDisabled:v,prev:w,next:P}=Pe();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:r,isNextDisabled:v,prev:w,next:P}},render(){const{mergedClsPrefix:e}=this;return b("div",{class:`${e}-carousel__arrow-group`},b("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},en),b("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},tn))}}),ue="CarouselItem",on=e=>{var o;return((o=e.type)===null||o===void 0?void 0:o.name)===ue},an=q({name:ue,setup(e){const{mergedClsPrefixRef:o}=ce(e),a=Pe(Oe(ue),`n-${Oe(ue)}`),r=$(),v=h(()=>{const{value:f}=r;return f?a.getSlideIndex(f):-1}),w=h(()=>a.isPrev(v.value)),P=h(()=>a.isNext(v.value)),y=h(()=>a.isActive(v.value)),S=h(()=>a.getSlideStyle(v.value));Fe(()=>{a.addSlide(r.value)}),We(()=>{a.removeSlide(r.value)});function g(f){const{value:x}=v;x!==void 0&&(a==null||a.onCarouselItemClick(x,f))}return{mergedClsPrefix:o,selfElRef:r,isPrev:w,isNext:P,isActive:y,index:v,style:S,handleClick:g}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:r,isNext:v,isActive:w,index:P,style:y}=this,S=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:w,[`${a}-carousel__slide--prev`]:r,[`${a}-carousel__slide--next`]:v}];return b("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":P,"aria-hidden":!w,style:y,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:r,isNext:v,isActive:w,index:P}))}}),sn=_t("carousel",`
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
 `)])])]),ln=["transitionDuration","transitionTimingFunction"],rn=Object.assign(Object.assign({},Ze.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let _e=!1;const un=q({name:"Carousel",props:rn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=ce(e),r=$(null),v=$(null),w=$([]),P={value:[]},y=h(()=>e.direction==="vertical"),S=h(()=>y.value?"height":"width"),g=h(()=>y.value?"bottom":"right"),f=h(()=>e.effect==="slide"),x=h(()=>e.loop&&e.slidesPerView===1&&f.value),R=h(()=>e.effect==="custom"),M=h(()=>!f.value||e.centeredSlides?1:e.slidesPerView),A=h(()=>R.value?1:e.slidesPerView),C=h(()=>M.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),_=$({width:0,height:0}),z=h(()=>{const{value:t}=w;if(!t.length)return[];const{value:n}=C;if(n)return t.map(m=>Ye(m));const{value:s}=A,{value:l}=_,{value:u}=S;let i=l[u];if(s!=="auto"){const{spaceBetween:m}=e,I=i-(s-1)*m,ie=1/Math.max(1,s);i=I*ie}const p=Object.assign(Object.assign({},l),{[u]:i});return t.map(()=>p)}),E=h(()=>{const{value:t}=z;if(!t.length)return[];const{centeredSlides:n,spaceBetween:s}=e,{value:l}=S,{[l]:u}=_.value;let i=0;return t.map(({[l]:p})=>{let m=i;return n&&(m+=(p-u)/2),i+=p+s,m})}),Y=$(!1),ve=h(()=>{const{transitionStyle:t}=e;return t?je(t,ln):{}}),he=h(()=>R.value?0:qt(ve.value.transitionDuration)),ze=h(()=>{const{value:t}=w;if(!t.length)return[];const n=!(C.value||A.value===1),s=p=>{if(n){const{value:m}=S;return{[m]:`${z.value[p][m]}px`}}};if(R.value)return t.map((p,m)=>s(m));const{effect:l,spaceBetween:u}=e,{value:i}=g;return t.reduce((p,m,I)=>{const ie=Object.assign(Object.assign({},s(I)),{[`margin-${i}`]:`${u}px`});return p.push(ie),Y.value&&(l==="fade"||l==="card")&&Object.assign(ie,ve.value),p},[])}),k=h(()=>{const{value:t}=M,{length:n}=w.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:s}=z,{length:l}=s;if(!l)return n;const{value:u}=E,{value:i}=S,p=_.value[i];let m=s[s.length-1][i],I=l;for(;I>1&&m<p;)I--,m+=u[I]-u[I-1];return re(I+1,1,l)}}),J=h(()=>Ht(k.value,x.value)),qe=Re(e.defaultIndex,x.value),pe=$(Xe(qe,k.value,x.value)),V=Pt(zt(e,"currentIndex"),pe),D=h(()=>Re(V.value,x.value));function U(t){var n,s;t=re(t,0,k.value-1);const l=Xe(t,k.value,x.value),{value:u}=V;l!==V.value&&(pe.value=l,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,l,u),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,l,u))}function Q(t=D.value){return Wt(t,k.value,e.loop)}function G(t=D.value){return Zt(t,k.value,e.loop)}function Je(t){const n=O(t);return n!==null&&Q()===n}function Qe(t){const n=O(t);return n!==null&&G()===n}function Ie(t){return D.value===O(t)}function Ge(t){return V.value===t}function ke(){return Q()===null}function De(){return G()===null}function ge(t){const n=re(Re(t,x.value),0,k.value);(t!==V.value||n!==D.value)&&U(n)}function me(){const t=Q();t!==null&&U(t)}function ee(){const t=G();t!==null&&U(t)}function et(){(!N||!x.value)&&me()}function tt(){(!N||!x.value)&&ee()}let N=!1,B=0;const xe=$({});function te(t,n=0){xe.value=Object.assign({},ve.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function F(t=0){f.value?be(D.value,t):B!==0&&(!N&&t>0&&(N=!0),te(B=0,t))}function be(t,n){const s=Ne(t);s!==B&&n>0&&(N=!0),B=Ne(D.value),te(s,n)}function Ne(t){let n;return t>=k.value-1?n=Te():n=E.value[t]||0,n}function Te(){if(M.value==="auto"){const{value:t}=S,{[t]:n}=_.value,{value:s}=E,l=s[s.length-1];let u;if(l===void 0)u=n;else{const{value:i}=z;u=l+i[i.length-1][t]}return u-n}else{const{value:t}=E;return t[k.value-1]||0}}const W={currentIndexRef:V,to:ge,prev:et,next:tt,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:Je,isNext:Qe,isActive:Ie,isPrevDisabled:ke,isNextDisabled:De,getSlideIndex:O,getSlideStyle:at,addSlide:nt,removeSlide:ot,onCarouselItemClick:st};Jt(W);function nt(t){t&&w.value.push(t)}function ot(t){if(!t)return;const n=O(t);n!==-1&&w.value.splice(n,1)}function O(t){return typeof t=="number"?t:t?w.value.indexOf(t):-1}function at(t){const n=O(t);if(n!==-1){const s=[ze.value[n]],l=W.isPrev(n),u=W.isNext(n);return l&&s.push(e.prevSlideStyle||""),u&&s.push(e.nextSlideStyle||""),jt(s)}}function st(t,n){let s=!N&&!ae&&!Ce;e.effect==="card"&&s&&!Ie(t)&&(ge(t),s=!1),s||(n.preventDefault(),n.stopPropagation())}let ne=null;function oe(){ne&&(clearInterval(ne),ne=null)}function L(){oe(),!e.autoplay||J.value<2||(ne=window.setInterval(ee,e.interval))}let we=0,ye=0,j=0,Se=0,ae=!1,Ce=!1;function Ve(t){var n;if(_e||!(!((n=v.value)===null||n===void 0)&&n.contains(Mt(t))))return;_e=!0,ae=!0,Ce=!1,Se=Date.now(),oe(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=Ke(t)?t.touches[0]:t;y.value?ye=s.clientY:we=s.clientX,e.touchable&&(Z("touchmove",document,se),Z("touchend",document,X),Z("touchcancel",document,X)),e.draggable&&(Z("mousemove",document,se),Z("mouseup",document,X))}function se(t){const{value:n}=y,{value:s}=S,l=Ke(t)?t.touches[0]:t,u=n?l.clientY-ye:l.clientX-we,i=_.value[s];j=re(u,-i,i),t.cancelable&&t.preventDefault(),f.value&&te(B-j,0)}function X(){const{value:t}=D;let n=t;if(!N&&j!==0&&f.value){const s=B-j,l=[...E.value.slice(0,k.value-1),Te()];let u=null;for(let i=0;i<l.length;i++){const p=Math.abs(l[i]-s);if(u!==null&&u<p)break;u=p,n=i}}if(n===t){const s=Date.now()-Se,{value:l}=S,u=_.value[l];j>u/2||j/s>.4?n=Q(t):(j<-u/2||j/s<-.4)&&(n=G(t))}n!==null&&n!==t?(Ce=!0,U(n),Be(()=>{(!x.value||pe.value!==V.value)&&F(he.value)})):F(he.value),$e(),L()}function $e(){ae&&(_e=!1),ae=!1,we=0,ye=0,j=0,Se=0,H("touchmove",document,se),H("touchend",document,X),H("touchcancel",document,X),H("mousemove",document,se),H("mouseup",document,X)}function it(){if(f.value&&N){const{value:t}=D;be(t,0)}else L();f.value&&(xe.value.transitionDuration="0ms"),N=!1}function lt(t){if(t.preventDefault(),N)return;let{deltaX:n,deltaY:s}=t;t.shiftKey&&!n&&(n=s);const l=-1,u=1,i=(n||s)>0?u:l;let p=0,m=0;y.value?m=i:p=i;const I=10;(m*s>=I||p*n>=I)&&(i===u&&!De()?ee():i===l&&!ke()&&me())}function rt(){_.value=Ye(r.value,!0),L()}function ut(){var t,n;C.value&&((n=(t=z.effect).scheduler)===null||n===void 0||n.call(t),z.effect.run())}function ct(){e.autoplay&&oe()}function dt(){e.autoplay&&L()}Fe(()=>{It(L),requestAnimationFrame(()=>Y.value=!0)}),We(()=>{$e(),oe()}),kt(()=>{const{value:t}=w,{value:n}=P,s=new Map,l=i=>s.has(i)?s.get(i):-1;let u=!1;for(let i=0;i<t.length;i++){const p=n.findIndex(m=>m.el===t[i]);p!==i&&(u=!0),s.set(t[i],p)}u&&t.sort((i,p)=>l(i)-l(p))}),le(D,(t,n)=>{if(t!==n)if(L(),f.value){if(x.value){const{value:s}=k;J.value>2&&t===s-2&&n===1?t=0:t===1&&n===s-2&&(t=s-1)}be(t,he.value)}else F()},{immediate:!0}),le([x,M],()=>void Be(()=>{U(D.value)})),le(E,()=>{f.value&&F()},{deep:!0}),le(f,t=>{t?F():(N=!1,te(B=0))});const ft=h(()=>({onTouchstartPassive:e.touchable?Ve:void 0,onMousedown:e.draggable?Ve:void 0,onWheel:e.mousewheel?lt:void 0})),vt=h(()=>Object.assign(Object.assign({},je(W,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:J.value,currentIndex:V.value})),ht=h(()=>({total:J.value,currentIndex:V.value,to:W.to})),pt={getCurrentIndex:()=>V.value,to:ge,prev:me,next:ee},gt=Ze("Carousel","-carousel",sn,Dt,e,o),Ee=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:s,dotColorActive:l,dotColorFocus:u,dotLineWidth:i,dotLineWidthActive:p,arrowColor:m}}=gt.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":u,"--n-dot-color-active":l,"--n-dot-size":n,"--n-dot-line-width":i,"--n-dot-line-width-active":p,"--n-arrow-color":m}}),K=a?Nt("carousel",void 0,Ee,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:r,slidesElRef:v,slideVNodes:P,duplicatedable:x,userWantsControl:R,autoSlideSize:C,realIndex:D,slideStyles:ze,translateStyle:xe,slidesControlListeners:ft,handleTransitionEnd:it,handleResize:rt,handleSlideResize:ut,handleMouseenter:ct,handleMouseleave:dt,isActive:Ge,arrowSlotProps:vt,dotSlotProps:ht},pt),{cssVars:a?void 0:Ee,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:r,slideStyles:v,dotType:w,dotPlacement:P,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:f,$slots:{default:x,dots:R,arrow:M}}=this,A=x&&Tt(x())||[];let C=cn(A);return C.length||(C=A.map(_=>b(an,null,{default:()=>Ue(_)}))),this.duplicatedable&&(C=Ft(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(_=>b(Me,{onResize:this.handleSlideResize},{default:()=>_}))),(e=this.onRender)===null||e===void 0||e.call(this),b("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${P}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,r&&`${o}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),b(Me,{onResize:this.handleResize},{default:()=>b("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?C.map((_,z)=>b("div",{style:v[z],key:z},Vt(b(Et,Object.assign({},S),{default:()=>_}),[[$t,this.isActive(z)]]))):C)}),this.showDots&&f.total>1&&Ae(R,f,()=>[b(Gt,{key:w+P,total:f.total,currentIndex:f.currentIndex,dotType:w,trigger:this.trigger,keyboard:this.keyboard})]),a&&Ae(M,g,()=>[b(nn,null)]))}});function cn(e){return e.reduce((o,a)=>(on(a)&&o.push(a),o),[])}const fe=e=>(Lt("data-v-253c621b"),e=e(),Xt(),e),dn=fe(()=>de("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"},null,-1)),fn=fe(()=>de("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"},null,-1)),vn=fe(()=>de("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"},null,-1)),hn=fe(()=>de("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"},null,-1)),pn=q({name:"NoticeBoard",__name:"NoticeBoard",setup(e){return $(""),(o,a)=>{const r=un;return At(),Bt(r,{autoplay:"",interval:2e3},{default:Ot(()=>[dn,fn,vn,hn]),_:1})}}}),xn=Kt(pn,[["__scopeId","data-v-253c621b"]]);export{xn as default};
