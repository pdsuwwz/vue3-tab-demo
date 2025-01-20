import{c4 as xt,bB as wt,V as bt,K as yt,az as St,E as Ct,d as J,M as ce,n as w,f as T,c5 as Pt,c6 as Rt,k as p,S as Ue,aD as We,q as zt,x as c,v as D,G as d,aQ as Ze,L as He,P as _t,A as kt,U as It,c7 as Nt,I as ie,X as Dt,ar as Tt,$ as Me,J as Be,al as Vt,am as $t,ak as Et,aM as Ae,a6 as q,c8 as jt,c9 as Mt,ao as Bt,a2 as G,a1 as Oe,c as At,w as Ot,o as Lt,e as re}from"./index-BQQ2VPbK.js";import{c as Xt}from"./_createCompounder-BrI_Lpde.js";import{_ as Kt}from"./_plugin-vue_export-helper-DlAUqK2U.js";function Yt(e){return xt(wt(e).toLowerCase())}var Le=Xt(function(e,o,a){return o=o.toLowerCase(),e+(a?Yt(o):o)});const qe=Ct("n-carousel-methods");function Ft(e){bt(qe,e)}function ze(e="unknown",o="component"){const a=yt(qe);return a||St(e,`\`${o}\` must be placed inside \`n-carousel\`.`),a}function Ut(){return w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function Wt(){return w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const Zt=J({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:o}=ce(e),{isVertical:a,isPrevDisabled:l,isNextDisabled:v,prev:b,next:z}=ze();return{mergedClsPrefix:o,isVertical:a,isPrevDisabled:l,isNextDisabled:v,prev:b,next:z}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Ut()),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},Wt()))}}),Ht={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},qt=J({name:"CarouselDots",props:Ht,setup(e){const{mergedClsPrefixRef:o}=ce(e),a=T([]),l=ze();function v(g,f){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(f);return}e.keyboard&&y(g)}function b(g){e.trigger==="hover"&&l.to(g)}function z(g){e.trigger==="click"&&l.to(g)}function y(g){var f;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const x=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(x==="input"||x==="textarea")return;const{code:P}=g,M=P==="PageUp"||P==="ArrowUp",B=P==="PageDown"||P==="ArrowDown",C=P==="PageUp"||P==="ArrowRight",R=P==="PageDown"||P==="ArrowLeft",$=l.isVertical(),A=$?M:C,E=$?B:R;!A&&!E||(g.preventDefault(),A&&!l.isNextDisabled()?(l.next(),S(l.currentIndexRef.value)):E&&!l.isPrevDisabled()&&(l.prev(),S(l.currentIndexRef.value)))}function S(g){var f;(f=a.value[g])===null||f===void 0||f.focus()}return Pt(()=>a.value.length=0),{mergedClsPrefix:o,dotEls:a,handleKeydown:v,handleMouseenter:b,handleClick:z}},render(){const{mergedClsPrefix:e,dotEls:o}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Rt(this.total,a=>{const l=a===this.currentIndex;return w("div",{"aria-selected":l,ref:v=>o.push(v),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:a,onClick:()=>{this.handleClick(a)},onMouseenter:()=>{this.handleMouseenter(a)},onKeydown:v=>{this.handleKeydown(v,a)}})}))}}),ue="CarouselItem";function Gt(e){var o;return((o=e.type)===null||o===void 0?void 0:o.name)===ue}const Jt=J({name:ue,setup(e){const{mergedClsPrefixRef:o}=ce(e),a=ze(Le(ue),`n-${Le(ue)}`),l=T(),v=p(()=>{const{value:f}=l;return f?a.getSlideIndex(f):-1}),b=p(()=>a.isPrev(v.value)),z=p(()=>a.isNext(v.value)),y=p(()=>a.isActive(v.value)),S=p(()=>a.getSlideStyle(v.value));Ue(()=>{a.addSlide(l.value)}),We(()=>{a.removeSlide(l.value)});function g(f){const{value:x}=v;x!==void 0&&(a==null||a.onCarouselItemClick(x,f))}return{mergedClsPrefix:o,selfElRef:l,isPrev:b,isNext:z,isActive:y,index:v,style:S,handleClick:g}},render(){var e;const{$slots:o,mergedClsPrefix:a,isPrev:l,isNext:v,isActive:b,index:z,style:y}=this,S=[`${a}-carousel__slide`,{[`${a}-carousel__slide--current`]:b,[`${a}-carousel__slide--prev`]:l,[`${a}-carousel__slide--next`]:v}];return w("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":z,"aria-hidden":!b,style:y,onClickCapture:this.handleClick},(e=o.default)===null||e===void 0?void 0:e.call(o,{isPrev:l,isNext:v,isActive:b,index:z}))}}),Qt=zt("carousel",`
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
 `,[D("> img",`
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
 `,[D("&:focus",`
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
 `,[D("&:focus",`
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
 `,[D("svg",`
 height: 1em;
 width: 1em;
 `),D("&:hover",`
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
 `)])])]),d("usercontrol",[c("slides",[D(">",[D("div",`
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
 `,[D("> *:first-child",`
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
 `,[D("> *:first-child",`
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
 `,[D("> *:first-child",`
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
 `,[D("> *:first-child",`
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
 `)])])]);function en(e){const{length:o}=e;return o>1&&(e.push(Xe(e[0],0,"append")),e.unshift(Xe(e[o-1],o-1,"prepend"))),e}function Xe(e,o,a){return Ze(e,{key:`carousel-item-duplicate-${o}-${a}`})}function Ke(e,o,a){return o===1?0:a?e===0?o-3:e===o-1?0:e-1:e}function Pe(e,o){return o?e+1:e}function tn(e,o,a){return e<0?null:e===0?a?o-1:null:e-1}function nn(e,o,a){return e>o-1?null:e===o-1?a?0:null:e+1}function on(e,o){return o&&e>3?e-2:e}function Ye(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Fe(e,o){let{offsetWidth:a,offsetHeight:l}=e;if(o){const v=getComputedStyle(e);a=a-Number.parseFloat(v.getPropertyValue("padding-left"))-Number.parseFloat(v.getPropertyValue("padding-right")),l=l-Number.parseFloat(v.getPropertyValue("padding-top"))-Number.parseFloat(v.getPropertyValue("padding-bottom"))}return{width:a,height:l}}function le(e,o,a){return e<o?o:e>a?a:e}function an(e){if(e===void 0)return 0;if(typeof e=="number")return e;const o=/^((\d+)?\.?\d+?)(ms|s)?$/,a=e.match(o);if(a){const[,l,,v="ms"]=a;return Number(l)*(v==="ms"?1:1e3)}return 0}const sn=["transitionDuration","transitionTimingFunction"],rn=Object.assign(Object.assign({},He.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Re=!1;const ln=J({name:"Carousel",props:rn,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:a}=ce(e),l=T(null),v=T(null),b=T([]),z={value:[]},y=p(()=>e.direction==="vertical"),S=p(()=>y.value?"height":"width"),g=p(()=>y.value?"bottom":"right"),f=p(()=>e.effect==="slide"),x=p(()=>e.loop&&e.slidesPerView===1&&f.value),P=p(()=>e.effect==="custom"),M=p(()=>!f.value||e.centeredSlides?1:e.slidesPerView),B=p(()=>P.value?1:e.slidesPerView),C=p(()=>M.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),R=T({width:0,height:0}),$=T(0),A=p(()=>{const{value:t}=b;if(!t.length)return[];$.value;const{value:n}=C;if(n)return t.map(m=>Fe(m));const{value:s}=B,{value:r}=R,{value:u}=S;let i=r[u];if(s!=="auto"){const{spaceBetween:m}=e,_=i-(s-1)*m,se=1/Math.max(1,s);i=_*se}const h=Object.assign(Object.assign({},r),{[u]:i});return t.map(()=>h)}),E=p(()=>{const{value:t}=A;if(!t.length)return[];const{centeredSlides:n,spaceBetween:s}=e,{value:r}=S,{[r]:u}=R.value;let i=0;return t.map(({[r]:h})=>{let m=i;return n&&(m+=(h-u)/2),i+=h+s,m})}),_e=T(!1),de=p(()=>{const{transitionStyle:t}=e;return t?Ae(t,sn):{}}),fe=p(()=>P.value?0:an(de.value.transitionDuration)),ke=p(()=>{const{value:t}=b;if(!t.length)return[];const n=!(C.value||B.value===1),s=h=>{if(n){const{value:m}=S;return{[m]:`${A.value[h][m]}px`}}};if(P.value)return t.map((h,m)=>s(m));const{effect:r,spaceBetween:u}=e,{value:i}=g;return t.reduce((h,m,_)=>{const se=Object.assign(Object.assign({},s(_)),{[`margin-${i}`]:`${u}px`});return h.push(se),_e.value&&(r==="fade"||r==="card")&&Object.assign(se,de.value),h},[])}),k=p(()=>{const{value:t}=M,{length:n}=b.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:s}=A,{length:r}=s;if(!r)return n;const{value:u}=E,{value:i}=S,h=R.value[i];let m=s[s.length-1][i],_=r;for(;_>1&&m<h;)_--,m+=u[_]-u[_-1];return le(_+1,1,r)}}),ve=p(()=>on(k.value,x.value)),Ge=Pe(e.defaultIndex,x.value),pe=T(Ke(Ge,k.value,x.value)),V=_t(kt(e,"currentIndex"),pe),I=p(()=>Pe(V.value,x.value));function U(t){var n,s;t=le(t,0,k.value-1);const r=Ke(t,k.value,x.value),{value:u}=V;r!==V.value&&(pe.value=r,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,r,u),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,r,u))}function he(t=I.value){return tn(t,k.value,e.loop)}function ge(t=I.value){return nn(t,k.value,e.loop)}function Je(t){const n=X(t);return n!==null&&he()===n}function Qe(t){const n=X(t);return n!==null&&ge()===n}function Ie(t){return I.value===X(t)}function et(t){return V.value===t}function Ne(){return he()===null}function De(){return ge()===null}let L=0;function me(t){const n=le(Pe(t,x.value),0,k.value);(t!==V.value||n!==I.value)&&U(n)}function Q(){const t=he();t!==null&&(L=-1,U(t))}function W(){const t=ge();t!==null&&(L=1,U(t))}let N=!1;function tt(){(!N||!x.value)&&Q()}function nt(){(!N||!x.value)&&W()}let O=0;const xe=T({});function ee(t,n=0){xe.value=Object.assign({},de.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function Z(t=0){f.value?we(I.value,t):O!==0&&(!N&&t>0&&(N=!0),ee(O=0,t))}function we(t,n){const s=Te(t);s!==O&&n>0&&(N=!0),O=Te(I.value),ee(s,n)}function Te(t){let n;return t>=k.value-1?n=Ve():n=E.value[t]||0,n}function Ve(){if(M.value==="auto"){const{value:t}=S,{[t]:n}=R.value,{value:s}=E,r=s[s.length-1];let u;if(r===void 0)u=n;else{const{value:i}=A;u=r+i[i.length-1][t]}return u-n}else{const{value:t}=E;return t[k.value-1]||0}}const H={currentIndexRef:V,to:me,prev:tt,next:nt,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:Je,isNext:Qe,isActive:Ie,isPrevDisabled:Ne,isNextDisabled:De,getSlideIndex:X,getSlideStyle:st,addSlide:ot,removeSlide:at,onCarouselItemClick:it};Ft(H);function ot(t){t&&b.value.push(t)}function at(t){if(!t)return;const n=X(t);n!==-1&&b.value.splice(n,1)}function X(t){return typeof t=="number"?t:t?b.value.indexOf(t):-1}function st(t){const n=X(t);if(n!==-1){const s=[ke.value[n]],r=H.isPrev(n),u=H.isNext(n);return r&&s.push(e.prevSlideStyle||""),u&&s.push(e.nextSlideStyle||""),Mt(s)}}let be=0,ye=0,j=0,Se=0,te=!1,Ce=!1;function it(t,n){let s=!N&&!te&&!Ce;e.effect==="card"&&s&&!Ie(t)&&(me(t),s=!1),s||(n.preventDefault(),n.stopPropagation())}let ne=null;function oe(){ne&&(clearInterval(ne),ne=null)}function K(){oe(),!e.autoplay||ve.value<2||(ne=window.setInterval(W,e.interval))}function $e(t){var n;if(Re||!(!((n=v.value)===null||n===void 0)&&n.contains(Bt(t))))return;Re=!0,te=!0,Ce=!1,Se=Date.now(),oe(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=Ye(t)?t.touches[0]:t;y.value?ye=s.clientY:be=s.clientX,e.touchable&&(G("touchmove",document,ae),G("touchend",document,Y),G("touchcancel",document,Y)),e.draggable&&(G("mousemove",document,ae),G("mouseup",document,Y))}function ae(t){const{value:n}=y,{value:s}=S,r=Ye(t)?t.touches[0]:t,u=n?r.clientY-ye:r.clientX-be,i=R.value[s];j=le(u,-i,i),t.cancelable&&t.preventDefault(),f.value&&ee(O-j,0)}function Y(){const{value:t}=I;let n=t;if(!N&&j!==0&&f.value){const s=O-j,r=[...E.value.slice(0,k.value-1),Ve()];let u=null;for(let i=0;i<r.length;i++){const h=Math.abs(r[i]-s);if(u!==null&&u<h)break;u=h,n=i}}if(n===t){const s=Date.now()-Se,{value:r}=S,u=R.value[r];j>u/2||j/s>.4?Q():(j<-u/2||j/s<-.4)&&W()}n!==null&&n!==t?(Ce=!0,U(n),Oe(()=>{(!x.value||pe.value!==V.value)&&Z(fe.value)})):Z(fe.value),Ee(),K()}function Ee(){te&&(Re=!1),te=!1,be=0,ye=0,j=0,Se=0,q("touchmove",document,ae),q("touchend",document,Y),q("touchcancel",document,Y),q("mousemove",document,ae),q("mouseup",document,Y)}function rt(){if(f.value&&N){const{value:t}=I;we(t,0)}else K();f.value&&(xe.value.transitionDuration="0ms"),N=!1}function lt(t){if(t.preventDefault(),N)return;let{deltaX:n,deltaY:s}=t;t.shiftKey&&!n&&(n=s);const r=-1,u=1,i=(n||s)>0?u:r;let h=0,m=0;y.value?m=i:h=i;const _=10;(m*s>=_||h*n>=_)&&(i===u&&!De()?W():i===r&&!Ne()&&Q())}function ut(){R.value=Fe(l.value,!0),K()}function ct(){C.value&&$.value++}function dt(){e.autoplay&&oe()}function ft(){e.autoplay&&K()}Ue(()=>{It(K),requestAnimationFrame(()=>_e.value=!0)}),We(()=>{Ee(),oe()}),Nt(()=>{const{value:t}=b,{value:n}=z,s=new Map,r=i=>s.has(i)?s.get(i):-1;let u=!1;for(let i=0;i<t.length;i++){const h=n.findIndex(m=>m.el===t[i]);h!==i&&(u=!0),s.set(t[i],h)}u&&t.sort((i,h)=>r(i)-r(h))}),ie(I,(t,n)=>{if(t===n){L=0;return}if(K(),f.value){if(x.value){const{value:s}=k;L===-1&&n===1&&t===s-2?t=0:L===1&&n===s-2&&t===1&&(t=s-1)}we(t,fe.value)}else Z();L=0},{immediate:!0}),ie([x,M],()=>void Oe(()=>{U(I.value)})),ie(E,()=>{f.value&&Z()},{deep:!0}),ie(f,t=>{t?Z():(N=!1,ee(O=0))});const vt=p(()=>({onTouchstartPassive:e.touchable?$e:void 0,onMousedown:e.draggable?$e:void 0,onWheel:e.mousewheel?lt:void 0})),pt=p(()=>Object.assign(Object.assign({},Ae(H,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ve.value,currentIndex:V.value})),ht=p(()=>({total:ve.value,currentIndex:V.value,to:H.to})),gt={getCurrentIndex:()=>V.value,to:me,prev:Q,next:W},mt=He("Carousel","-carousel",Qt,jt,e,o),je=p(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:s,dotColorActive:r,dotColorFocus:u,dotLineWidth:i,dotLineWidthActive:h,arrowColor:m}}=mt.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":u,"--n-dot-color-active":r,"--n-dot-size":n,"--n-dot-line-width":i,"--n-dot-line-width-active":h,"--n-arrow-color":m}}),F=a?Dt("carousel",void 0,je,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:o,selfElRef:l,slidesElRef:v,slideVNodes:z,duplicatedable:x,userWantsControl:P,autoSlideSize:C,realIndex:I,slideStyles:ke,translateStyle:xe,slidesControlListeners:vt,handleTransitionEnd:rt,handleResize:ut,handleSlideResize:ct,handleMouseenter:dt,handleMouseleave:ft,isActive:et,arrowSlotProps:pt,dotSlotProps:ht},gt),{cssVars:a?void 0:je,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender})},render(){var e;const{mergedClsPrefix:o,showArrow:a,userWantsControl:l,slideStyles:v,dotType:b,dotPlacement:z,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:f,$slots:{default:x,dots:P,arrow:M}}=this,B=x&&Tt(x())||[];let C=un(B);return C.length||(C=B.map(R=>w(Jt,null,{default:()=>Ze(R)}))),this.duplicatedable&&(C=en(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(R=>w(Me,{onResize:this.handleSlideResize},{default:()=>R}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${o}-carousel`,this.direction==="vertical"&&`${o}-carousel--vertical`,this.showArrow&&`${o}-carousel--show-arrow`,`${o}-carousel--${z}`,`${o}-carousel--${this.direction}`,`${o}-carousel--${this.effect}`,l&&`${o}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(Me,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${o}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?C.map((R,$)=>w("div",{style:v[$],key:$},Vt(w(Et,Object.assign({},S),{default:()=>R}),[[$t,this.isActive($)]]))):C)}),this.showDots&&f.total>1&&Be(P,f,()=>[w(qt,{key:b+z,total:f.total,currentIndex:f.currentIndex,dotType:b,trigger:this.trigger,keyboard:this.keyboard})]),a&&Be(M,g,()=>[w(Zt,null)]))}});function un(e){return e.reduce((o,a)=>(Gt(a)&&o.push(a),o),[])}const cn=J({name:"NoticeBoard",__name:"NoticeBoard",setup(e){return T(""),(o,a)=>{const l=ln;return Lt(),At(l,{autoplay:"",interval:2e3},{default:Ot(()=>a[0]||(a[0]=[re("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"},null,-1),re("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"},null,-1),re("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"},null,-1),re("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"},null,-1)])),_:1})}}}),pn=Kt(cn,[["__scopeId","data-v-7e6f8472"]]);export{pn as default};
