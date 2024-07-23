import{bE as Ne,bI as ve,bJ as He,bK as he,bL as ge,bM as Y,bN as We,bn as J,bO as pe,bP as Ue,bQ as Ke,bR as Ge,bS as ke,bT as Je,bU as Xe,bl as Re,bV as Qe,a4 as ne,a6 as re,v as L,q as B,K as te,x as oe,J as Z,bW as Ye,d as Ee,L as je,M as ue,bX as qe,g as D,H as Ze,V as Pe,k,am as Ve,aK as ae,$ as en,aH as nn,G as rn,A as j,W as q,bt as tn,bs as on,br as an,n as S,ak as sn,an as we,ao as be,bY as me,bZ as ln,aP as dn,al as xe,a0 as ie,F as un,b_ as fn,aj as cn,Q as vn,S as ye,b$ as Se,aU as hn,c0 as gn,by as pn,aQ as wn,a5 as X}from"./index-BKhi4FxM.js";import{g as _e,e as Ae,k as Me,u as V,a as bn,V as mn,B as yn}from"./Follower-D9AS3uyg.js";import{c as Sn,t as fe,i as Be,g as _n,b as An}from"./get-CMpYxWG2.js";import{u as $n}from"./use-compitable-BJHz0pPo.js";var Cn="__lodash_hash_undefined__";function On(e){return this.__data__.set(e,Cn),this}function Tn(e){return this.__data__.has(e)}function ee(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new Ne;++n<r;)this.add(e[n])}ee.prototype.add=ee.prototype.push=On;ee.prototype.has=Tn;function Rn(e,n){for(var r=-1,t=e==null?0:e.length;++r<t;)if(n(e[r],r,e))return!0;return!1}function En(e,n){return e.has(n)}var Pn=1,xn=2;function Ie(e,n,r,t,a,o){var i=r&Pn,s=e.length,d=n.length;if(s!=d&&!(i&&d>s))return!1;var u=o.get(e),c=o.get(n);if(u&&c)return u==n&&c==e;var p=-1,g=!0,b=r&xn?new ee:void 0;for(o.set(e,n),o.set(n,e);++p<s;){var m=e[p],f=n[p];if(t)var T=i?t(f,m,p,n,e,o):t(m,f,p,e,n,o);if(T!==void 0){if(T)continue;g=!1;break}if(b){if(!Rn(n,function(A,$){if(!En(b,$)&&(m===A||a(m,A,r,t,o)))return b.push($)})){g=!1;break}}else if(!(m===f||a(m,f,r,t,o))){g=!1;break}}return o.delete(e),o.delete(n),g}function Mn(e){var n=-1,r=Array(e.size);return e.forEach(function(t,a){r[++n]=[a,t]}),r}function Bn(e){var n=-1,r=Array(e.size);return e.forEach(function(t){r[++n]=t}),r}var In=1,Ln=2,Dn="[object Boolean]",Fn="[object Date]",zn="[object Error]",Nn="[object Map]",Hn="[object Number]",Wn="[object RegExp]",Un="[object Set]",Kn="[object String]",Gn="[object Symbol]",kn="[object ArrayBuffer]",Jn="[object DataView]",$e=ve?ve.prototype:void 0,se=$e?$e.valueOf:void 0;function Xn(e,n,r,t,a,o,i){switch(r){case Jn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case kn:return!(e.byteLength!=n.byteLength||!o(new he(e),new he(n)));case Dn:case Fn:case Hn:return He(+e,+n);case zn:return e.name==n.name&&e.message==n.message;case Wn:case Kn:return e==n+"";case Nn:var s=Mn;case Un:var d=t&In;if(s||(s=Bn),e.size!=n.size&&!d)return!1;var u=i.get(e);if(u)return u==n;t|=Ln,i.set(e,n);var c=Ie(s(e),s(n),t,a,o,i);return i.delete(e),c;case Gn:if(se)return se.call(e)==se.call(n)}return!1}var Qn=1,Yn=Object.prototype,jn=Yn.hasOwnProperty;function qn(e,n,r,t,a,o){var i=r&Qn,s=_e(e),d=s.length,u=_e(n),c=u.length;if(d!=c&&!i)return!1;for(var p=d;p--;){var g=s[p];if(!(i?g in n:jn.call(n,g)))return!1}var b=o.get(e),m=o.get(n);if(b&&m)return b==n&&m==e;var f=!0;o.set(e,n),o.set(n,e);for(var T=i;++p<d;){g=s[p];var A=e[g],$=n[g];if(t)var F=i?t($,A,g,n,e,o):t(A,$,g,e,n,o);if(!(F===void 0?A===$||a(A,$,r,t,o):F)){f=!1;break}T||(T=g=="constructor")}if(f&&!T){var P=e.constructor,E=n.constructor;P!=E&&"constructor"in e&&"constructor"in n&&!(typeof P=="function"&&P instanceof P&&typeof E=="function"&&E instanceof E)&&(f=!1)}return o.delete(e),o.delete(n),f}var Zn=1,Ce="[object Arguments]",Oe="[object Array]",Q="[object Object]",Vn=Object.prototype,Te=Vn.hasOwnProperty;function er(e,n,r,t,a,o){var i=J(e),s=J(n),d=i?Oe:Ae(e),u=s?Oe:Ae(n);d=d==Ce?Q:d,u=u==Ce?Q:u;var c=d==Q,p=u==Q,g=d==u;if(g&&ge(e)){if(!ge(n))return!1;i=!0,c=!1}if(g&&!c)return o||(o=new Y),i||We(e)?Ie(e,n,r,t,a,o):Xn(e,n,d,r,t,a,o);if(!(r&Zn)){var b=c&&Te.call(e,"__wrapped__"),m=p&&Te.call(n,"__wrapped__");if(b||m){var f=b?e.value():e,T=m?n.value():n;return o||(o=new Y),a(f,T,r,t,o)}}return g?(o||(o=new Y),qn(e,n,r,t,a,o)):!1}function ce(e,n,r,t,a){return e===n?!0:e==null||n==null||!pe(e)&&!pe(n)?e!==e&&n!==n:er(e,n,r,t,ce,a)}var nr=1,rr=2;function tr(e,n,r,t){var a=r.length,o=a;if(e==null)return!o;for(e=Object(e);a--;){var i=r[a];if(i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<o;){i=r[a];var s=i[0],d=e[s],u=i[1];if(i[2]){if(d===void 0&&!(s in e))return!1}else{var c=new Y,p;if(!(p===void 0?ce(u,d,nr|rr,t,c):p))return!1}}return!0}function Le(e){return e===e&&!Ue(e)}function or(e){for(var n=Me(e),r=n.length;r--;){var t=n[r],a=e[t];n[r]=[t,a,Le(a)]}return n}function De(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==void 0||e in Object(r))}}function ar(e){var n=or(e);return n.length==1&&n[0][2]?De(n[0][0],n[0][1]):function(r){return r===e||tr(r,e,n)}}function ir(e,n){return e!=null&&n in Object(e)}function sr(e,n,r){n=Sn(n,e);for(var t=-1,a=n.length,o=!1;++t<a;){var i=fe(n[t]);if(!(o=e!=null&&r(e,i)))break;e=e[i]}return o||++t!=a?o:(a=e==null?0:e.length,!!a&&Ke(a)&&Ge(i,a)&&(J(e)||ke(e)))}function lr(e,n){return e!=null&&sr(e,n,ir)}var dr=1,ur=2;function fr(e,n){return Be(e)&&Le(n)?De(fe(e),n):function(r){var t=_n(r,e);return t===void 0&&t===n?lr(r,e):ce(n,t,dr|ur)}}function cr(e){return function(n){return n==null?void 0:n[e]}}function vr(e){return function(n){return An(n,e)}}function hr(e){return Be(e)?cr(fe(e)):vr(e)}function gr(e){return typeof e=="function"?e:e==null?Je:typeof e=="object"?J(e)?fr(e[0],e[1]):ar(e):hr(e)}function pr(e,n){return e&&Xe(e,n,Me)}function wr(e,n){return function(r,t){if(r==null)return r;if(!Re(r))return e(r,t);for(var a=r.length,o=-1,i=Object(r);++o<a&&t(i[o],o,i)!==!1;);return r}}var br=wr(pr);function mr(e,n){var r=-1,t=Re(e)?Array(e.length):[];return br(e,function(a,o,i){t[++r]=n(a,o,i)}),t}function yr(e,n){var r=J(e)?Qe:mr;return r(e,gr(n))}let le;function Sr(){return le===void 0&&(le=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),le}const H="@@mmoContext",_r={mounted(e,{value:n}){e[H]={handler:void 0},typeof n=="function"&&(e[H].handler=n,ne("mousemoveoutside",e,n))},updated(e,{value:n}){const r=e[H];typeof n=="function"?r.handler?r.handler!==n&&(re("mousemoveoutside",e,r.handler),r.handler=n,ne("mousemoveoutside",e,n)):(e[H].handler=n,ne("mousemoveoutside",e,n)):r.handler&&(re("mousemoveoutside",e,r.handler),r.handler=void 0)},unmounted(e){const{handler:n}=e[H];n&&re("mousemoveoutside",e,n),e[H].handler=void 0}},de={top:"bottom",bottom:"top",left:"right",right:"left"},w="var(--n-arrow-height) * 1.414",Ar=L([B("popover",`
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
 `,[te("scrollable",[te("show-header-or-footer","padding: var(--n-padding);")])]),oe("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),oe("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Z("scrollable, show-header-or-footer",[oe("content",`
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
 left: calc(${M("top-start")} - var(--v-offset-left));
 `),R("top",`
 top: calc(${w} / -2);
 transform: translateX(calc(${w} / -2)) rotate(45deg);
 left: 50%;
 `),R("top-end",`
 top: calc(${w} / -2);
 right: calc(${M("top-end")} + var(--v-offset-left));
 `),R("bottom-start",`
 bottom: calc(${w} / -2);
 left: calc(${M("bottom-start")} - var(--v-offset-left));
 `),R("bottom",`
 bottom: calc(${w} / -2);
 transform: translateX(calc(${w} / -2)) rotate(45deg);
 left: 50%;
 `),R("bottom-end",`
 bottom: calc(${w} / -2);
 right: calc(${M("bottom-end")} + var(--v-offset-left));
 `),R("left-start",`
 left: calc(${w} / -2);
 top: calc(${M("left-start")} - var(--v-offset-top));
 `),R("left",`
 left: calc(${w} / -2);
 transform: translateY(calc(${w} / -2)) rotate(45deg);
 top: 50%;
 `),R("left-end",`
 left: calc(${w} / -2);
 bottom: calc(${M("left-end")} + var(--v-offset-top));
 `),R("right-start",`
 right: calc(${w} / -2);
 top: calc(${M("right-start")} - var(--v-offset-top));
 `),R("right",`
 right: calc(${w} / -2);
 transform: translateY(calc(${w} / -2)) rotate(45deg);
 top: 50%;
 `),R("right-end",`
 right: calc(${w} / -2);
 bottom: calc(${M("right-end")} + var(--v-offset-top));
 `),...yr({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,n)=>{const r=["right","left"].includes(n),t=r?"width":"height";return e.map(a=>{const o=a.split("-")[1]==="end",s=`calc((${`var(--v-target-${t}, 0px)`} - ${w}) / 2)`,d=M(a);return L(`[v-placement="${a}"] >`,[B("popover-shared",[Z("center-arrow",[B("popover-arrow",`${n}: calc(max(${s}, ${d}) ${o?"+":"-"} var(--v-offset-${r?"left":"top"}));`)])])])})})]);function M(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function R(e,n){const r=e.split("-")[0],t=["top","bottom"].includes(r)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return L(`[v-placement="${e}"] >`,[B("popover-shared",`
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
 `,[B("popover-arrow",n)])])])}const Fe=Object.assign(Object.assign({},ue.props),{to:V.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function $r({arrowClass:e,arrowStyle:n,arrowWrapperClass:r,arrowWrapperStyle:t,clsPrefix:a}){return S("div",{key:"__popover-arrow__",style:t,class:[`${a}-popover-arrow-wrapper`,r]},S("div",{class:[`${a}-popover-arrow`,e],style:n}))}const Cr=Ee({name:"PopoverBody",inheritAttrs:!1,props:Fe,setup(e,{slots:n,attrs:r}){const{namespaceRef:t,mergedClsPrefixRef:a,inlineThemeDisabled:o}=je(e),i=ue("Popover","-popover",Ar,qe,e,a),s=D(null),d=Ze("NPopover"),u=D(null),c=D(e.show),p=D(!1);Pe(()=>{const{show:v}=e;v&&!Sr()&&!e.internalDeactivateImmediately&&(p.value=!0)});const g=k(()=>{const{trigger:v,onClickoutside:_}=e,C=[],{positionManuallyRef:{value:h}}=d;return h||(v==="click"&&!_&&C.push([we,P,void 0,{capture:!0}]),v==="hover"&&C.push([_r,F])),_&&C.push([we,P,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&p.value)&&C.push([Ve,e.show]),C}),b=k(()=>{const{common:{cubicBezierEaseInOut:v,cubicBezierEaseIn:_,cubicBezierEaseOut:C},self:{space:h,spaceArrow:U,padding:K,fontSize:I,textColor:G,dividerColor:l,color:y,boxShadow:O,borderRadius:z,arrowHeight:N,arrowOffset:x,arrowOffsetVertical:ze}}=i.value;return{"--n-box-shadow":O,"--n-bezier":v,"--n-bezier-ease-in":_,"--n-bezier-ease-out":C,"--n-font-size":I,"--n-text-color":G,"--n-color":y,"--n-divider-color":l,"--n-border-radius":z,"--n-arrow-height":N,"--n-arrow-offset":x,"--n-arrow-offset-vertical":ze,"--n-padding":K,"--n-space":h,"--n-space-arrow":U}}),m=k(()=>{const v=e.width==="trigger"?void 0:ae(e.width),_=[];v&&_.push({width:v});const{maxWidth:C,minWidth:h}=e;return C&&_.push({maxWidth:ae(C)}),h&&_.push({maxWidth:ae(h)}),o||_.push(b.value),_}),f=o?en("popover",void 0,b,e):void 0;d.setBodyInstance({syncPosition:T}),nn(()=>{d.setBodyInstance(null)}),rn(j(e,"show"),v=>{e.animated||(v?c.value=!0:c.value=!1)});function T(){var v;(v=s.value)===null||v===void 0||v.syncPosition()}function A(v){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&d.handleMouseEnter(v)}function $(v){e.trigger==="hover"&&e.keepAliveOnHover&&d.handleMouseLeave(v)}function F(v){e.trigger==="hover"&&!E().contains(be(v))&&d.handleMouseMoveOutside(v)}function P(v){(e.trigger==="click"&&!E().contains(be(v))||e.onClickoutside)&&d.handleClickOutside(v)}function E(){return d.getTriggerElement()}q(tn,u),q(on,null),q(an,null);function W(){if(f==null||f.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&p.value))return null;let _;const C=d.internalRenderBodyRef.value,{value:h}=a;if(C)_=C([`${h}-popover-shared`,f==null?void 0:f.themeClass.value,e.overlap&&`${h}-popover-shared--overlap`,e.showArrow&&`${h}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${h}-popover-shared--center-arrow`],u,m.value,A,$);else{const{value:U}=d.extraClassRef,{internalTrapFocus:K}=e,I=!me(n.header)||!me(n.footer),G=()=>{var l,y;const O=I?S(un,null,ie(n.header,x=>x?S("div",{class:[`${h}-popover__header`,e.headerClass],style:e.headerStyle},x):null),ie(n.default,x=>x?S("div",{class:[`${h}-popover__content`,e.contentClass],style:e.contentStyle},n):null),ie(n.footer,x=>x?S("div",{class:[`${h}-popover__footer`,e.footerClass],style:e.footerStyle},x):null)):e.scrollable?(l=n.default)===null||l===void 0?void 0:l.call(n):S("div",{class:[`${h}-popover__content`,e.contentClass],style:e.contentStyle},n),z=e.scrollable?S(fn,{contentClass:I?void 0:`${h}-popover__content ${(y=e.contentClass)!==null&&y!==void 0?y:""}`,contentStyle:I?void 0:e.contentStyle},{default:()=>O}):O,N=e.showArrow?$r({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:h}):null;return[z,N]};_=S("div",dn({class:[`${h}-popover`,`${h}-popover-shared`,f==null?void 0:f.themeClass.value,U.map(l=>`${h}-${l}`),{[`${h}-popover--scrollable`]:e.scrollable,[`${h}-popover--show-header-or-footer`]:I,[`${h}-popover--raw`]:e.raw,[`${h}-popover-shared--overlap`]:e.overlap,[`${h}-popover-shared--show-arrow`]:e.showArrow,[`${h}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:u,style:m.value,onKeydown:d.handleKeydown,onMouseenter:A,onMouseleave:$},r),K?S(ln,{active:e.show,autoFocus:!0},{default:G}):G())}return xe(_,g.value)}return{displayed:p,namespace:t,isMounted:d.isMountedRef,zIndex:d.zIndexRef,followerRef:s,adjustedTo:V(e),followerEnabled:c,renderContentNode:W}},render(){return S(bn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===V.tdkey},{default:()=>this.animated?S(sn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Or=Object.keys(Fe),Tr={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Rr(e,n,r){Tr[n].forEach(t=>{e.props?e.props=Object.assign({},e.props):e.props={};const a=e.props[t],o=r[t];a?e.props[t]=(...i)=>{a(...i),o(...i)}:e.props[t]=o})}const Er={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:V.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Pr=Object.assign(Object.assign(Object.assign({},ue.props),Er),{internalOnAfterLeave:Function,internalRenderBody:Function}),Lr=Ee({name:"Popover",inheritAttrs:!1,props:Pr,__popover__:!0,setup(e){const n=cn(),r=D(null),t=k(()=>e.show),a=D(e.defaultShow),o=vn(t,a),i=ye(()=>e.disabled?!1:o.value),s=()=>{if(e.disabled)return!0;const{getDisabled:l}=e;return!!(l!=null&&l())},d=()=>s()?!1:o.value,u=$n(e,["arrow","showArrow"]),c=k(()=>e.overlap?!1:u.value);let p=null;const g=D(null),b=D(null),m=ye(()=>e.x!==void 0&&e.y!==void 0);function f(l){const{"onUpdate:show":y,onUpdateShow:O,onShow:z,onHide:N}=e;a.value=l,y&&X(y,l),O&&X(O,l),l&&z&&X(z,!0),l&&N&&X(N,!1)}function T(){p&&p.syncPosition()}function A(){const{value:l}=g;l&&(window.clearTimeout(l),g.value=null)}function $(){const{value:l}=b;l&&(window.clearTimeout(l),b.value=null)}function F(){const l=s();if(e.trigger==="focus"&&!l){if(d())return;f(!0)}}function P(){const l=s();if(e.trigger==="focus"&&!l){if(!d())return;f(!1)}}function E(){const l=s();if(e.trigger==="hover"&&!l){if($(),g.value!==null||d())return;const y=()=>{f(!0),g.value=null},{delay:O}=e;O===0?y():g.value=window.setTimeout(y,O)}}function W(){const l=s();if(e.trigger==="hover"&&!l){if(A(),b.value!==null||!d())return;const y=()=>{f(!1),b.value=null},{duration:O}=e;O===0?y():b.value=window.setTimeout(y,O)}}function v(){W()}function _(l){var y;d()&&(e.trigger==="click"&&(A(),$(),f(!1)),(y=e.onClickoutside)===null||y===void 0||y.call(e,l))}function C(){if(e.trigger==="click"&&!s()){A(),$();const l=!d();f(l)}}function h(l){e.internalTrapFocus&&l.key==="Escape"&&(A(),$(),f(!1))}function U(l){a.value=l}function K(){var l;return(l=r.value)===null||l===void 0?void 0:l.targetRef}function I(l){p=l}return q("NPopover",{getTriggerElement:K,handleKeydown:h,handleMouseEnter:E,handleMouseLeave:W,handleClickOutside:_,handleMouseMoveOutside:v,setBodyInstance:I,positionManuallyRef:m,isMountedRef:n,zIndexRef:j(e,"zIndex"),extraClassRef:j(e,"internalExtraClass"),internalRenderBodyRef:j(e,"internalRenderBody")}),Pe(()=>{o.value&&s()&&f(!1)}),{binderInstRef:r,positionManually:m,mergedShowConsideringDisabledProp:i,uncontrolledShow:a,mergedShowArrow:c,getMergedShow:d,setShow:U,handleClick:C,handleMouseEnter:E,handleMouseLeave:W,handleFocus:F,handleBlur:P,syncPosition:T}},render(){var e;const{positionManually:n,$slots:r}=this;let t,a=!1;if(!n&&(r.activator?t=Se(r,"activator"):t=Se(r,"trigger"),t)){t=hn(t),t=t.type===gn?S("span",[t]):t;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=t.type)===null||e===void 0)&&e.__popover__)a=!0,t.props||(t.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),t.props.internalSyncTargetWithParent=!0,t.props.internalInheritedEventHandlers?t.props.internalInheritedEventHandlers=[o,...t.props.internalInheritedEventHandlers]:t.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:i}=this,s=[o,...i],d={onBlur:u=>{s.forEach(c=>{c.onBlur(u)})},onFocus:u=>{s.forEach(c=>{c.onFocus(u)})},onClick:u=>{s.forEach(c=>{c.onClick(u)})},onMouseenter:u=>{s.forEach(c=>{c.onMouseenter(u)})},onMouseleave:u=>{s.forEach(c=>{c.onMouseleave(u)})}};Rr(t,i?"nested":n?"manual":this.trigger,d)}}return S(yn,{ref:"binderInstRef",syncTarget:!a,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?xe(S("div",{style:{position:"fixed",inset:0}}),[[pn,{enabled:o,zIndex:this.zIndex}]]):null,n?null:S(mn,null,{default:()=>t}),S(Cr,wn(this.$props,Or,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var i,s;return(s=(i=this.$slots).default)===null||s===void 0?void 0:s.call(i)},header:()=>{var i,s;return(s=(i=this.$slots).header)===null||s===void 0?void 0:s.call(i)},footer:()=>{var i,s;return(s=(i=this.$slots).footer)===null||s===void 0?void 0:s.call(i)}})]}})}});export{Lr as _,Er as p,$r as r};
