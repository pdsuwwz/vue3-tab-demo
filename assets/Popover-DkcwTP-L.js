import{bA as ze,bF as he,bG as He,bH as ve,bI as ge,bJ as J,bK as Ne,bj as X,bL as pe,bM as We,bN as Ue,bO as Ge,bP as Ke,bQ as ke,bR as Xe,bh as Te,bS as je,a2 as ne,a6 as re,v as L,q as B,H as te,x as ae,G as Z,bT as Ye,L as ue,d as Re,M as Je,bU as qe,f as D,K as Qe,U as Ee,k,an as we,am as Ze,aH as oe,X as Ve,aD as en,I as nn,A as q,ao as be,V as Q,n as S,ak as rn,bp as tn,bo as an,bn as on,bV as me,bW as sn,aL as ln,al as Pe,Y as ie,F as dn,bX as un,aj as fn,P as cn,R as ye,bY as hn,aQ as vn,bZ as gn,bu as pn,aM as wn,a3 as j}from"./index-BQQ2VPbK.js";import{g as Se,e as _e,k as Me,u as V,a as bn,B as mn,V as yn}from"./Follower-BII3ZYJ5.js";import{c as Sn,t as fe,i as xe,g as _n,b as An}from"./get-D1TFL870.js";import{u as $n}from"./use-compitable-B-9Wj_ZY.js";var Cn="__lodash_hash_undefined__";function On(e){return this.__data__.set(e,Cn),this}function Tn(e){return this.__data__.has(e)}function ee(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new ze;++n<r;)this.add(e[n])}ee.prototype.add=ee.prototype.push=On;ee.prototype.has=Tn;function Rn(e,n){for(var r=-1,t=e==null?0:e.length;++r<t;)if(n(e[r],r,e))return!0;return!1}function En(e,n){return e.has(n)}var Pn=1,Mn=2;function Be(e,n,r,t,o,a){var i=r&Pn,s=e.length,d=n.length;if(s!=d&&!(i&&d>s))return!1;var u=a.get(e),c=a.get(n);if(u&&c)return u==n&&c==e;var p=-1,g=!0,b=r&Mn?new ee:void 0;for(a.set(e,n),a.set(n,e);++p<s;){var m=e[p],f=n[p];if(t)var T=i?t(f,m,p,n,e,a):t(m,f,p,e,n,a);if(T!==void 0){if(T)continue;g=!1;break}if(b){if(!Rn(n,function(A,$){if(!En(b,$)&&(m===A||o(m,A,r,t,a)))return b.push($)})){g=!1;break}}else if(!(m===f||o(m,f,r,t,a))){g=!1;break}}return a.delete(e),a.delete(n),g}function xn(e){var n=-1,r=Array(e.size);return e.forEach(function(t,o){r[++n]=[o,t]}),r}function Bn(e){var n=-1,r=Array(e.size);return e.forEach(function(t){r[++n]=t}),r}var In=1,Ln=2,Dn="[object Boolean]",Fn="[object Date]",zn="[object Error]",Hn="[object Map]",Nn="[object Number]",Wn="[object RegExp]",Un="[object Set]",Gn="[object String]",Kn="[object Symbol]",kn="[object ArrayBuffer]",Xn="[object DataView]",Ae=he?he.prototype:void 0,se=Ae?Ae.valueOf:void 0;function jn(e,n,r,t,o,a,i){switch(r){case Xn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case kn:return!(e.byteLength!=n.byteLength||!a(new ve(e),new ve(n)));case Dn:case Fn:case Nn:return He(+e,+n);case zn:return e.name==n.name&&e.message==n.message;case Wn:case Gn:return e==n+"";case Hn:var s=xn;case Un:var d=t&In;if(s||(s=Bn),e.size!=n.size&&!d)return!1;var u=i.get(e);if(u)return u==n;t|=Ln,i.set(e,n);var c=Be(s(e),s(n),t,o,a,i);return i.delete(e),c;case Kn:if(se)return se.call(e)==se.call(n)}return!1}var Yn=1,Jn=Object.prototype,qn=Jn.hasOwnProperty;function Qn(e,n,r,t,o,a){var i=r&Yn,s=Se(e),d=s.length,u=Se(n),c=u.length;if(d!=c&&!i)return!1;for(var p=d;p--;){var g=s[p];if(!(i?g in n:qn.call(n,g)))return!1}var b=a.get(e),m=a.get(n);if(b&&m)return b==n&&m==e;var f=!0;a.set(e,n),a.set(n,e);for(var T=i;++p<d;){g=s[p];var A=e[g],$=n[g];if(t)var F=i?t($,A,g,n,e,a):t(A,$,g,e,n,a);if(!(F===void 0?A===$||o(A,$,r,t,a):F)){f=!1;break}T||(T=g=="constructor")}if(f&&!T){var P=e.constructor,E=n.constructor;P!=E&&"constructor"in e&&"constructor"in n&&!(typeof P=="function"&&P instanceof P&&typeof E=="function"&&E instanceof E)&&(f=!1)}return a.delete(e),a.delete(n),f}var Zn=1,$e="[object Arguments]",Ce="[object Array]",Y="[object Object]",Vn=Object.prototype,Oe=Vn.hasOwnProperty;function er(e,n,r,t,o,a){var i=X(e),s=X(n),d=i?Ce:_e(e),u=s?Ce:_e(n);d=d==$e?Y:d,u=u==$e?Y:u;var c=d==Y,p=u==Y,g=d==u;if(g&&ge(e)){if(!ge(n))return!1;i=!0,c=!1}if(g&&!c)return a||(a=new J),i||Ne(e)?Be(e,n,r,t,o,a):jn(e,n,d,r,t,o,a);if(!(r&Zn)){var b=c&&Oe.call(e,"__wrapped__"),m=p&&Oe.call(n,"__wrapped__");if(b||m){var f=b?e.value():e,T=m?n.value():n;return a||(a=new J),o(f,T,r,t,a)}}return g?(a||(a=new J),Qn(e,n,r,t,o,a)):!1}function ce(e,n,r,t,o){return e===n?!0:e==null||n==null||!pe(e)&&!pe(n)?e!==e&&n!==n:er(e,n,r,t,ce,o)}var nr=1,rr=2;function tr(e,n,r,t){var o=r.length,a=o;if(e==null)return!a;for(e=Object(e);o--;){var i=r[o];if(i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++o<a;){i=r[o];var s=i[0],d=e[s],u=i[1];if(i[2]){if(d===void 0&&!(s in e))return!1}else{var c=new J,p;if(!(p===void 0?ce(u,d,nr|rr,t,c):p))return!1}}return!0}function Ie(e){return e===e&&!We(e)}function ar(e){for(var n=Me(e),r=n.length;r--;){var t=n[r],o=e[t];n[r]=[t,o,Ie(o)]}return n}function Le(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==void 0||e in Object(r))}}function or(e){var n=ar(e);return n.length==1&&n[0][2]?Le(n[0][0],n[0][1]):function(r){return r===e||tr(r,e,n)}}function ir(e,n){return e!=null&&n in Object(e)}function sr(e,n,r){n=Sn(n,e);for(var t=-1,o=n.length,a=!1;++t<o;){var i=fe(n[t]);if(!(a=e!=null&&r(e,i)))break;e=e[i]}return a||++t!=o?a:(o=e==null?0:e.length,!!o&&Ue(o)&&Ge(i,o)&&(X(e)||Ke(e)))}function lr(e,n){return e!=null&&sr(e,n,ir)}var dr=1,ur=2;function fr(e,n){return xe(e)&&Ie(n)?Le(fe(e),n):function(r){var t=_n(r,e);return t===void 0&&t===n?lr(r,e):ce(n,t,dr|ur)}}function cr(e){return function(n){return n==null?void 0:n[e]}}function hr(e){return function(n){return An(n,e)}}function vr(e){return xe(e)?cr(fe(e)):hr(e)}function gr(e){return typeof e=="function"?e:e==null?ke:typeof e=="object"?X(e)?fr(e[0],e[1]):or(e):vr(e)}function pr(e,n){return e&&Xe(e,n,Me)}function wr(e,n){return function(r,t){if(r==null)return r;if(!Te(r))return e(r,t);for(var o=r.length,a=-1,i=Object(r);++a<o&&t(i[a],a,i)!==!1;);return r}}var br=wr(pr);function mr(e,n){var r=-1,t=Te(e)?Array(e.length):[];return br(e,function(o,a,i){t[++r]=n(o,a,i)}),t}function yr(e,n){var r=X(e)?je:mr;return r(e,gr(n))}const N="@@mmoContext",Sr={mounted(e,{value:n}){e[N]={handler:void 0},typeof n=="function"&&(e[N].handler=n,ne("mousemoveoutside",e,n))},updated(e,{value:n}){const r=e[N];typeof n=="function"?r.handler?r.handler!==n&&(re("mousemoveoutside",e,r.handler),r.handler=n,ne("mousemoveoutside",e,n)):(e[N].handler=n,ne("mousemoveoutside",e,n)):r.handler&&(re("mousemoveoutside",e,r.handler),r.handler=void 0)},unmounted(e){const{handler:n}=e[N];n&&re("mousemoveoutside",e,n),e[N].handler=void 0}};let le;function _r(){return le===void 0&&(le=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),le}const de={top:"bottom",bottom:"top",left:"right",right:"left"},w="var(--n-arrow-height) * 1.414",Ar=L([B("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[L(">",[B("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),te("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[te("scrollable",[te("show-header-or-footer","padding: var(--n-padding);")])]),ae("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ae("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Z("scrollable, show-header-or-footer",[ae("content",`
 padding: var(--n-padding);
 `)])]),B("popover-shared",`
 transform-origin: inherit;
 `,[B("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[B("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${w});
 height: calc(${w});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),L("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),L("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),L("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),L("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),R("top-start",`
 top: calc(${w} / -2);
 left: calc(${x("top-start")} - var(--v-offset-left));
 `),R("top",`
 top: calc(${w} / -2);
 transform: translateX(calc(${w} / -2)) rotate(45deg);
 left: 50%;
 `),R("top-end",`
 top: calc(${w} / -2);
 right: calc(${x("top-end")} + var(--v-offset-left));
 `),R("bottom-start",`
 bottom: calc(${w} / -2);
 left: calc(${x("bottom-start")} - var(--v-offset-left));
 `),R("bottom",`
 bottom: calc(${w} / -2);
 transform: translateX(calc(${w} / -2)) rotate(45deg);
 left: 50%;
 `),R("bottom-end",`
 bottom: calc(${w} / -2);
 right: calc(${x("bottom-end")} + var(--v-offset-left));
 `),R("left-start",`
 left: calc(${w} / -2);
 top: calc(${x("left-start")} - var(--v-offset-top));
 `),R("left",`
 left: calc(${w} / -2);
 transform: translateY(calc(${w} / -2)) rotate(45deg);
 top: 50%;
 `),R("left-end",`
 left: calc(${w} / -2);
 bottom: calc(${x("left-end")} + var(--v-offset-top));
 `),R("right-start",`
 right: calc(${w} / -2);
 top: calc(${x("right-start")} - var(--v-offset-top));
 `),R("right",`
 right: calc(${w} / -2);
 transform: translateY(calc(${w} / -2)) rotate(45deg);
 top: 50%;
 `),R("right-end",`
 right: calc(${w} / -2);
 bottom: calc(${x("right-end")} + var(--v-offset-top));
 `),...yr({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const r=["right","left"].includes(n),t=r?"width":"height";return e.map(o=>{const a=o.split("-")[1]==="end",s=`calc((${`var(--v-target-${t}, 0px)`} - ${w}) / 2)`,d=x(o);return L(`[v-placement="${o}"] >`,[B("popover-shared",[Z("center-arrow",[B("popover-arrow",`${n}: calc(max(${s}, ${d}) ${a?"+":"-"} var(--v-offset-${r?"left":"top"}));`)])])])})})]);function x(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function R(e,n){const r=e.split("-")[0],t=["top","bottom"].includes(r)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return L(`[v-placement="${e}"] >`,[B("popover-shared",`
 margin-${de[r]}: var(--n-space);
 `,[Z("show-arrow",`
 margin-${de[r]}: var(--n-space-arrow);
 `),Z("overlap",`
 margin: 0;
 `),Ye("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${de[r]}: auto;
 ${t}
 `,[B("popover-arrow",n)])])])}const De=Object.assign(Object.assign({},ue.props),{to:V.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function $r({arrowClass:e,arrowStyle:n,arrowWrapperClass:r,arrowWrapperStyle:t,clsPrefix:o}){return S("div",{key:"__popover-arrow__",style:t,class:[`${o}-popover-arrow-wrapper`,r]},S("div",{class:[`${o}-popover-arrow`,e],style:n}))}const Cr=Re({name:"PopoverBody",inheritAttrs:!1,props:De,setup(e,{slots:n,attrs:r}){const{namespaceRef:t,mergedClsPrefixRef:o,inlineThemeDisabled:a}=Je(e),i=ue("Popover","-popover",Ar,qe,e,o),s=D(null),d=Qe("NPopover"),u=D(null),c=D(e.show),p=D(!1);Ee(()=>{const{show:h}=e;h&&!_r()&&!e.internalDeactivateImmediately&&(p.value=!0)});const g=k(()=>{const{trigger:h,onClickoutside:_}=e,C=[],{positionManuallyRef:{value:v}}=d;return v||(h==="click"&&!_&&C.push([we,P,void 0,{capture:!0}]),h==="hover"&&C.push([Sr,F])),_&&C.push([we,P,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&p.value)&&C.push([Ze,e.show]),C}),b=k(()=>{const{common:{cubicBezierEaseInOut:h,cubicBezierEaseIn:_,cubicBezierEaseOut:C},self:{space:v,spaceArrow:U,padding:G,fontSize:I,textColor:K,dividerColor:l,color:y,boxShadow:O,borderRadius:z,arrowHeight:H,arrowOffset:M,arrowOffsetVertical:Fe}}=i.value;return{"--n-box-shadow":O,"--n-bezier":h,"--n-bezier-ease-in":_,"--n-bezier-ease-out":C,"--n-font-size":I,"--n-text-color":K,"--n-color":y,"--n-divider-color":l,"--n-border-radius":z,"--n-arrow-height":H,"--n-arrow-offset":M,"--n-arrow-offset-vertical":Fe,"--n-padding":G,"--n-space":v,"--n-space-arrow":U}}),m=k(()=>{const h=e.width==="trigger"?void 0:oe(e.width),_=[];h&&_.push({width:h});const{maxWidth:C,minWidth:v}=e;return C&&_.push({maxWidth:oe(C)}),v&&_.push({maxWidth:oe(v)}),a||_.push(b.value),_}),f=a?Ve("popover",void 0,b,e):void 0;d.setBodyInstance({syncPosition:T}),en(()=>{d.setBodyInstance(null)}),nn(q(e,"show"),h=>{e.animated||(h?c.value=!0:c.value=!1)});function T(){var h;(h=s.value)===null||h===void 0||h.syncPosition()}function A(h){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&d.handleMouseEnter(h)}function $(h){e.trigger==="hover"&&e.keepAliveOnHover&&d.handleMouseLeave(h)}function F(h){e.trigger==="hover"&&!E().contains(be(h))&&d.handleMouseMoveOutside(h)}function P(h){(e.trigger==="click"&&!E().contains(be(h))||e.onClickoutside)&&d.handleClickOutside(h)}function E(){return d.getTriggerElement()}Q(tn,u),Q(an,null),Q(on,null);function W(){if(f==null||f.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&p.value))return null;let _;const C=d.internalRenderBodyRef.value,{value:v}=o;if(C)_=C([`${v}-popover-shared`,f==null?void 0:f.themeClass.value,e.overlap&&`${v}-popover-shared--overlap`,e.showArrow&&`${v}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${v}-popover-shared--center-arrow`],u,m.value,A,$);else{const{value:U}=d.extraClassRef,{internalTrapFocus:G}=e,I=!me(n.header)||!me(n.footer),K=()=>{var l,y;const O=I?S(dn,null,ie(n.header,M=>M?S("div",{class:[`${v}-popover__header`,e.headerClass],style:e.headerStyle},M):null),ie(n.default,M=>M?S("div",{class:[`${v}-popover__content`,e.contentClass],style:e.contentStyle},n):null),ie(n.footer,M=>M?S("div",{class:[`${v}-popover__footer`,e.footerClass],style:e.footerStyle},M):null)):e.scrollable?(l=n.default)===null||l===void 0?void 0:l.call(n):S("div",{class:[`${v}-popover__content`,e.contentClass],style:e.contentStyle},n),z=e.scrollable?S(un,{contentClass:I?void 0:`${v}-popover__content ${(y=e.contentClass)!==null&&y!==void 0?y:""}`,contentStyle:I?void 0:e.contentStyle},{default:()=>O}):O,H=e.showArrow?$r({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:v}):null;return[z,H]};_=S("div",ln({class:[`${v}-popover`,`${v}-popover-shared`,f==null?void 0:f.themeClass.value,U.map(l=>`${v}-${l}`),{[`${v}-popover--scrollable`]:e.scrollable,[`${v}-popover--show-header-or-footer`]:I,[`${v}-popover--raw`]:e.raw,[`${v}-popover-shared--overlap`]:e.overlap,[`${v}-popover-shared--show-arrow`]:e.showArrow,[`${v}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:u,style:m.value,onKeydown:d.handleKeydown,onMouseenter:A,onMouseleave:$},r),G?S(sn,{active:e.show,autoFocus:!0},{default:K}):K())}return Pe(_,g.value)}return{displayed:p,namespace:t,isMounted:d.isMountedRef,zIndex:d.zIndexRef,followerRef:s,adjustedTo:V(e),followerEnabled:c,renderContentNode:W}},render(){return S(bn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===V.tdkey},{default:()=>this.animated?S(rn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Or=Object.keys(De),Tr={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Rr(e,n,r){Tr[n].forEach(t=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[t],a=r[t];o?e.props[t]=(...i)=>{o(...i),a(...i)}:e.props[t]=a})}const Er={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:V.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Pr=Object.assign(Object.assign(Object.assign({},ue.props),Er),{internalOnAfterLeave:Function,internalRenderBody:Function}),Lr=Re({name:"Popover",inheritAttrs:!1,props:Pr,slots:Object,__popover__:!0,setup(e){const n=fn(),r=D(null),t=k(()=>e.show),o=D(e.defaultShow),a=cn(t,o),i=ye(()=>e.disabled?!1:a.value),s=()=>{if(e.disabled)return!0;const{getDisabled:l}=e;return!!(l!=null&&l())},d=()=>s()?!1:a.value,u=$n(e,["arrow","showArrow"]),c=k(()=>e.overlap?!1:u.value);let p=null;const g=D(null),b=D(null),m=ye(()=>e.x!==void 0&&e.y!==void 0);function f(l){const{"onUpdate:show":y,onUpdateShow:O,onShow:z,onHide:H}=e;o.value=l,y&&j(y,l),O&&j(O,l),l&&z&&j(z,!0),l&&H&&j(H,!1)}function T(){p&&p.syncPosition()}function A(){const{value:l}=g;l&&(window.clearTimeout(l),g.value=null)}function $(){const{value:l}=b;l&&(window.clearTimeout(l),b.value=null)}function F(){const l=s();if(e.trigger==="focus"&&!l){if(d())return;f(!0)}}function P(){const l=s();if(e.trigger==="focus"&&!l){if(!d())return;f(!1)}}function E(){const l=s();if(e.trigger==="hover"&&!l){if($(),g.value!==null||d())return;const y=()=>{f(!0),g.value=null},{delay:O}=e;O===0?y():g.value=window.setTimeout(y,O)}}function W(){const l=s();if(e.trigger==="hover"&&!l){if(A(),b.value!==null||!d())return;const y=()=>{f(!1),b.value=null},{duration:O}=e;O===0?y():b.value=window.setTimeout(y,O)}}function h(){W()}function _(l){var y;d()&&(e.trigger==="click"&&(A(),$(),f(!1)),(y=e.onClickoutside)===null||y===void 0||y.call(e,l))}function C(){if(e.trigger==="click"&&!s()){A(),$();const l=!d();f(l)}}function v(l){e.internalTrapFocus&&l.key==="Escape"&&(A(),$(),f(!1))}function U(l){o.value=l}function G(){var l;return(l=r.value)===null||l===void 0?void 0:l.targetRef}function I(l){p=l}return Q("NPopover",{getTriggerElement:G,handleKeydown:v,handleMouseEnter:E,handleMouseLeave:W,handleClickOutside:_,handleMouseMoveOutside:h,setBodyInstance:I,positionManuallyRef:m,isMountedRef:n,zIndexRef:q(e,"zIndex"),extraClassRef:q(e,"internalExtraClass"),internalRenderBodyRef:q(e,"internalRenderBody")}),Ee(()=>{a.value&&s()&&f(!1)}),{binderInstRef:r,positionManually:m,mergedShowConsideringDisabledProp:i,uncontrolledShow:o,mergedShowArrow:c,getMergedShow:d,setShow:U,handleClick:C,handleMouseEnter:E,handleMouseLeave:W,handleFocus:F,handleBlur:P,syncPosition:T}},render(){var e;const{positionManually:n,$slots:r}=this;let t,o=!1;if(!n&&(t=hn(r,"trigger"),t)){t=vn(t),t=t.type===gn?S("span",[t]):t;const a={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=t.type)===null||e===void 0)&&e.__popover__)o=!0,t.props||(t.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),t.props.internalSyncTargetWithParent=!0,t.props.internalInheritedEventHandlers?t.props.internalInheritedEventHandlers=[a,...t.props.internalInheritedEventHandlers]:t.props.internalInheritedEventHandlers=[a];else{const{internalInheritedEventHandlers:i}=this,s=[a,...i],d={onBlur:u=>{s.forEach(c=>{c.onBlur(u)})},onFocus:u=>{s.forEach(c=>{c.onFocus(u)})},onClick:u=>{s.forEach(c=>{c.onClick(u)})},onMouseenter:u=>{s.forEach(c=>{c.onMouseenter(u)})},onMouseleave:u=>{s.forEach(c=>{c.onMouseleave(u)})}};Rr(t,i?"nested":n?"manual":this.trigger,d)}}return S(mn,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const a=this.getMergedShow();return[this.internalTrapFocus&&a?Pe(S("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[pn,{enabled:a,zIndex:this.zIndex}]]):null,n?null:S(yn,null,{default:()=>t}),S(Cr,wn(this.$props,Or,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:a})),{default:()=>{var i,s;return(s=(i=this.$slots).default)===null||s===void 0?void 0:s.call(i)},header:()=>{var i,s;return(s=(i=this.$slots).header)===null||s===void 0?void 0:s.call(i)},footer:()=>{var i,s;return(s=(i=this.$slots).footer)===null||s===void 0?void 0:s.call(i)}})]}})}});export{Lr as _,Er as p,$r as r};
