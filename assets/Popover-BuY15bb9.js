import{bB as ze,bC as He,bD as Ne,bE as ue,bw as We,bF as ge,bG as Ke,bH as pe,bI as we,bJ as Y,bK as Ge,bf as X,bL as be,bM as Ue,bN as ke,bO as Xe,bP as je,bQ as Je,bR as Ye,bS as qe,a6 as re,a4 as ne,v as L,q as M,H as te,x as oe,G as Z,bT as Qe,d as Re,n as S,ai as Ze,M as Ve,O as fe,f as D,X as Ee,k,J as er,al as ye,ak as rr,aH as ae,a1 as nr,aD as tr,I as or,B as q,ao as me,bU as Se,bV as ar,aP as ir,aj as Be,L as ie,F as sr,bW as lr,bX as dr,Y as Q,bl as ur,bk as fr,bj as cr,bY as vr,aR as hr,bZ as gr,bq as pr,aS as wr,an as br,Q as yr,T as _e,a5 as j}from"./index-Dr4_a72h.js";import{e as mr,g as Sr,f as Ae,a as _r,u as V,B as Ar,V as Or}from"./Follower-RfDnNUhg.js";import{c as $r,t as ce,i as xe,g as Cr,b as Tr}from"./get-DCJZEGYX.js";import{u as Pr}from"./use-compitable-BlQ8ajn3.js";var Rr=ze(Object.keys,Object),Er=Object.prototype,Br=Er.hasOwnProperty;function xr(e){if(!He(e))return Rr(e);var r=[];for(var n in Object(e))Br.call(e,n)&&n!="constructor"&&r.push(n);return r}function ve(e){return ue(e)?Ne(e):xr(e)}function Oe(e){return mr(e,ve,Sr)}var Mr="__lodash_hash_undefined__";function Ir(e){return this.__data__.set(e,Mr),this}function Lr(e){return this.__data__.has(e)}function ee(e){var r=-1,n=e==null?0:e.length;for(this.__data__=new We;++r<n;)this.add(e[r])}ee.prototype.add=ee.prototype.push=Ir;ee.prototype.has=Lr;function Dr(e,r){for(var n=-1,t=e==null?0:e.length;++n<t;)if(r(e[n],n,e))return!0;return!1}function Fr(e,r){return e.has(r)}var zr=1,Hr=2;function Me(e,r,n,t,a,o){var i=n&zr,s=e.length,d=r.length;if(s!=d&&!(i&&d>s))return!1;var u=o.get(e),c=o.get(r);if(u&&c)return u==r&&c==e;var p=-1,g=!0,b=n&Hr?new ee:void 0;for(o.set(e,r),o.set(r,e);++p<s;){var y=e[p],f=r[p];if(t)var T=i?t(f,y,p,r,e,o):t(y,f,p,e,r,o);if(T!==void 0){if(T)continue;g=!1;break}if(b){if(!Dr(r,function(A,O){if(!Fr(b,O)&&(y===A||a(y,A,n,t,o)))return b.push(O)})){g=!1;break}}else if(!(y===f||a(y,f,n,t,o))){g=!1;break}}return o.delete(e),o.delete(r),g}function Nr(e){var r=-1,n=Array(e.size);return e.forEach(function(t,a){n[++r]=[a,t]}),n}function Wr(e){var r=-1,n=Array(e.size);return e.forEach(function(t){n[++r]=t}),n}var Kr=1,Gr=2,Ur="[object Boolean]",kr="[object Date]",Xr="[object Error]",jr="[object Map]",Jr="[object Number]",Yr="[object RegExp]",qr="[object Set]",Qr="[object String]",Zr="[object Symbol]",Vr="[object ArrayBuffer]",en="[object DataView]",$e=ge?ge.prototype:void 0,se=$e?$e.valueOf:void 0;function rn(e,r,n,t,a,o,i){switch(n){case en:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Vr:return!(e.byteLength!=r.byteLength||!o(new pe(e),new pe(r)));case Ur:case kr:case Jr:return Ke(+e,+r);case Xr:return e.name==r.name&&e.message==r.message;case Yr:case Qr:return e==r+"";case jr:var s=Nr;case qr:var d=t&Kr;if(s||(s=Wr),e.size!=r.size&&!d)return!1;var u=i.get(e);if(u)return u==r;t|=Gr,i.set(e,r);var c=Me(s(e),s(r),t,a,o,i);return i.delete(e),c;case Zr:if(se)return se.call(e)==se.call(r)}return!1}var nn=1,tn=Object.prototype,on=tn.hasOwnProperty;function an(e,r,n,t,a,o){var i=n&nn,s=Oe(e),d=s.length,u=Oe(r),c=u.length;if(d!=c&&!i)return!1;for(var p=d;p--;){var g=s[p];if(!(i?g in r:on.call(r,g)))return!1}var b=o.get(e),y=o.get(r);if(b&&y)return b==r&&y==e;var f=!0;o.set(e,r),o.set(r,e);for(var T=i;++p<d;){g=s[p];var A=e[g],O=r[g];if(t)var F=i?t(O,A,g,r,e,o):t(A,O,g,e,r,o);if(!(F===void 0?A===O||a(A,O,n,t,o):F)){f=!1;break}T||(T=g=="constructor")}if(f&&!T){var E=e.constructor,R=r.constructor;E!=R&&"constructor"in e&&"constructor"in r&&!(typeof E=="function"&&E instanceof E&&typeof R=="function"&&R instanceof R)&&(f=!1)}return o.delete(e),o.delete(r),f}var sn=1,Ce="[object Arguments]",Te="[object Array]",J="[object Object]",ln=Object.prototype,Pe=ln.hasOwnProperty;function dn(e,r,n,t,a,o){var i=X(e),s=X(r),d=i?Te:Ae(e),u=s?Te:Ae(r);d=d==Ce?J:d,u=u==Ce?J:u;var c=d==J,p=u==J,g=d==u;if(g&&we(e)){if(!we(r))return!1;i=!0,c=!1}if(g&&!c)return o||(o=new Y),i||Ge(e)?Me(e,r,n,t,a,o):rn(e,r,d,n,t,a,o);if(!(n&sn)){var b=c&&Pe.call(e,"__wrapped__"),y=p&&Pe.call(r,"__wrapped__");if(b||y){var f=b?e.value():e,T=y?r.value():r;return o||(o=new Y),a(f,T,n,t,o)}}return g?(o||(o=new Y),an(e,r,n,t,a,o)):!1}function he(e,r,n,t,a){return e===r?!0:e==null||r==null||!be(e)&&!be(r)?e!==e&&r!==r:dn(e,r,n,t,he,a)}var un=1,fn=2;function cn(e,r,n,t){var a=n.length,o=a;if(e==null)return!o;for(e=Object(e);a--;){var i=n[a];if(i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++a<o;){i=n[a];var s=i[0],d=e[s],u=i[1];if(i[2]){if(d===void 0&&!(s in e))return!1}else{var c=new Y,p;if(!(p===void 0?he(u,d,un|fn,t,c):p))return!1}}return!0}function Ie(e){return e===e&&!Ue(e)}function vn(e){for(var r=ve(e),n=r.length;n--;){var t=r[n],a=e[t];r[n]=[t,a,Ie(a)]}return r}function Le(e,r){return function(n){return n==null?!1:n[e]===r&&(r!==void 0||e in Object(n))}}function hn(e){var r=vn(e);return r.length==1&&r[0][2]?Le(r[0][0],r[0][1]):function(n){return n===e||cn(n,e,r)}}function gn(e,r){return e!=null&&r in Object(e)}function pn(e,r,n){r=$r(r,e);for(var t=-1,a=r.length,o=!1;++t<a;){var i=ce(r[t]);if(!(o=e!=null&&n(e,i)))break;e=e[i]}return o||++t!=a?o:(a=e==null?0:e.length,!!a&&ke(a)&&Xe(i,a)&&(X(e)||je(e)))}function wn(e,r){return e!=null&&pn(e,r,gn)}var bn=1,yn=2;function mn(e,r){return xe(e)&&Ie(r)?Le(ce(e),r):function(n){var t=Cr(n,e);return t===void 0&&t===r?wn(n,e):he(r,t,bn|yn)}}function Sn(e){return function(r){return r==null?void 0:r[e]}}function _n(e){return function(r){return Tr(r,e)}}function An(e){return xe(e)?Sn(ce(e)):_n(e)}function On(e){return typeof e=="function"?e:e==null?Je:typeof e=="object"?X(e)?mn(e[0],e[1]):hn(e):An(e)}function $n(e,r){return e&&Ye(e,r,ve)}function Cn(e,r){return function(n,t){if(n==null)return n;if(!ue(n))return e(n,t);for(var a=n.length,o=-1,i=Object(n);++o<a&&t(i[o],o,i)!==!1;);return n}}var Tn=Cn($n);function Pn(e,r){var n=-1,t=ue(e)?Array(e.length):[];return Tn(e,function(a,o,i){t[++n]=r(a,o,i)}),t}function Rn(e,r){var n=X(e)?qe:Pn;return n(e,On(r))}const N="@@mmoContext",En={mounted(e,{value:r}){e[N]={handler:void 0},typeof r=="function"&&(e[N].handler=r,ne("mousemoveoutside",e,r))},updated(e,{value:r}){const n=e[N];typeof r=="function"?n.handler?n.handler!==r&&(re("mousemoveoutside",e,n.handler),n.handler=r,ne("mousemoveoutside",e,r)):(e[N].handler=r,ne("mousemoveoutside",e,r)):n.handler&&(re("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:r}=e[N];r&&re("mousemoveoutside",e,r),e[N].handler=void 0}};let le;function Bn(){return le===void 0&&(le=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),le}const de={top:"bottom",bottom:"top",left:"right",right:"left"},w="var(--n-arrow-height) * 1.414",xn=L([M("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[L(">",[M("scrollbar",`
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
 `)])]),M("popover-shared",`
 transform-origin: inherit;
 `,[M("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[M("popover-arrow",`
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
 `)]),P("top-start",`
 top: calc(${w} / -2);
 left: calc(${x("top-start")} - var(--v-offset-left));
 `),P("top",`
 top: calc(${w} / -2);
 transform: translateX(calc(${w} / -2)) rotate(45deg);
 left: 50%;
 `),P("top-end",`
 top: calc(${w} / -2);
 right: calc(${x("top-end")} + var(--v-offset-left));
 `),P("bottom-start",`
 bottom: calc(${w} / -2);
 left: calc(${x("bottom-start")} - var(--v-offset-left));
 `),P("bottom",`
 bottom: calc(${w} / -2);
 transform: translateX(calc(${w} / -2)) rotate(45deg);
 left: 50%;
 `),P("bottom-end",`
 bottom: calc(${w} / -2);
 right: calc(${x("bottom-end")} + var(--v-offset-left));
 `),P("left-start",`
 left: calc(${w} / -2);
 top: calc(${x("left-start")} - var(--v-offset-top));
 `),P("left",`
 left: calc(${w} / -2);
 transform: translateY(calc(${w} / -2)) rotate(45deg);
 top: 50%;
 `),P("left-end",`
 left: calc(${w} / -2);
 bottom: calc(${x("left-end")} + var(--v-offset-top));
 `),P("right-start",`
 right: calc(${w} / -2);
 top: calc(${x("right-start")} - var(--v-offset-top));
 `),P("right",`
 right: calc(${w} / -2);
 transform: translateY(calc(${w} / -2)) rotate(45deg);
 top: 50%;
 `),P("right-end",`
 right: calc(${w} / -2);
 bottom: calc(${x("right-end")} + var(--v-offset-top));
 `),...Rn({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,r)=>{const n=["right","left"].includes(r),t=n?"width":"height";return e.map(a=>{const o=a.split("-")[1]==="end",s=`calc((${`var(--v-target-${t}, 0px)`} - ${w}) / 2)`,d=x(a);return L(`[v-placement="${a}"] >`,[M("popover-shared",[Z("center-arrow",[M("popover-arrow",`${r}: calc(max(${s}, ${d}) ${o?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function x(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function P(e,r){const n=e.split("-")[0],t=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return L(`[v-placement="${e}"] >`,[M("popover-shared",`
 margin-${de[n]}: var(--n-space);
 `,[Z("show-arrow",`
 margin-${de[n]}: var(--n-space-arrow);
 `),Z("overlap",`
 margin: 0;
 `),Qe("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${de[n]}: auto;
 ${t}
 `,[M("popover-arrow",r)])])])}const De=Object.assign(Object.assign({},fe.props),{to:V.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function Mn({arrowClass:e,arrowStyle:r,arrowWrapperClass:n,arrowWrapperStyle:t,clsPrefix:a}){return S("div",{key:"__popover-arrow__",style:t,class:[`${a}-popover-arrow-wrapper`,n]},S("div",{class:[`${a}-popover-arrow`,e],style:r}))}const In=Re({name:"PopoverBody",inheritAttrs:!1,props:De,setup(e,{slots:r,attrs:n}){const{namespaceRef:t,mergedClsPrefixRef:a,inlineThemeDisabled:o}=Ve(e),i=fe("Popover","-popover",xn,dr,e,a),s=D(null),d=er("NPopover"),u=D(null),c=D(e.show),p=D(!1);Ee(()=>{const{show:v}=e;v&&!Bn()&&!e.internalDeactivateImmediately&&(p.value=!0)});const g=k(()=>{const{trigger:v,onClickoutside:_}=e,$=[],{positionManuallyRef:{value:h}}=d;return h||(v==="click"&&!_&&$.push([ye,E,void 0,{capture:!0}]),v==="hover"&&$.push([En,F])),_&&$.push([ye,E,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&p.value)&&$.push([rr,e.show]),$}),b=k(()=>{const{common:{cubicBezierEaseInOut:v,cubicBezierEaseIn:_,cubicBezierEaseOut:$},self:{space:h,spaceArrow:K,padding:G,fontSize:I,textColor:U,dividerColor:l,color:m,boxShadow:C,borderRadius:z,arrowHeight:H,arrowOffset:B,arrowOffsetVertical:Fe}}=i.value;return{"--n-box-shadow":C,"--n-bezier":v,"--n-bezier-ease-in":_,"--n-bezier-ease-out":$,"--n-font-size":I,"--n-text-color":U,"--n-color":m,"--n-divider-color":l,"--n-border-radius":z,"--n-arrow-height":H,"--n-arrow-offset":B,"--n-arrow-offset-vertical":Fe,"--n-padding":G,"--n-space":h,"--n-space-arrow":K}}),y=k(()=>{const v=e.width==="trigger"?void 0:ae(e.width),_=[];v&&_.push({width:v});const{maxWidth:$,minWidth:h}=e;return $&&_.push({maxWidth:ae($)}),h&&_.push({maxWidth:ae(h)}),o||_.push(b.value),_}),f=o?nr("popover",void 0,b,e):void 0;d.setBodyInstance({syncPosition:T}),tr(()=>{d.setBodyInstance(null)}),or(q(e,"show"),v=>{e.animated||(v?c.value=!0:c.value=!1)});function T(){var v;(v=s.value)===null||v===void 0||v.syncPosition()}function A(v){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&d.handleMouseEnter(v)}function O(v){e.trigger==="hover"&&e.keepAliveOnHover&&d.handleMouseLeave(v)}function F(v){e.trigger==="hover"&&!R().contains(me(v))&&d.handleMouseMoveOutside(v)}function E(v){(e.trigger==="click"&&!R().contains(me(v))||e.onClickoutside)&&d.handleClickOutside(v)}function R(){return d.getTriggerElement()}Q(ur,u),Q(fr,null),Q(cr,null);function W(){if(f==null||f.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&p.value))return null;let _;const $=d.internalRenderBodyRef.value,{value:h}=a;if($)_=$([`${h}-popover-shared`,f==null?void 0:f.themeClass.value,e.overlap&&`${h}-popover-shared--overlap`,e.showArrow&&`${h}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${h}-popover-shared--center-arrow`],u,y.value,A,O);else{const{value:K}=d.extraClassRef,{internalTrapFocus:G}=e,I=!Se(r.header)||!Se(r.footer),U=()=>{var l,m;const C=I?S(sr,null,ie(r.header,B=>B?S("div",{class:[`${h}-popover__header`,e.headerClass],style:e.headerStyle},B):null),ie(r.default,B=>B?S("div",{class:[`${h}-popover__content`,e.contentClass],style:e.contentStyle},r):null),ie(r.footer,B=>B?S("div",{class:[`${h}-popover__footer`,e.footerClass],style:e.footerStyle},B):null)):e.scrollable?(l=r.default)===null||l===void 0?void 0:l.call(r):S("div",{class:[`${h}-popover__content`,e.contentClass],style:e.contentStyle},r),z=e.scrollable?S(lr,{contentClass:I?void 0:`${h}-popover__content ${(m=e.contentClass)!==null&&m!==void 0?m:""}`,contentStyle:I?void 0:e.contentStyle},{default:()=>C}):C,H=e.showArrow?Mn({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:h}):null;return[z,H]};_=S("div",ir({class:[`${h}-popover`,`${h}-popover-shared`,f==null?void 0:f.themeClass.value,K.map(l=>`${h}-${l}`),{[`${h}-popover--scrollable`]:e.scrollable,[`${h}-popover--show-header-or-footer`]:I,[`${h}-popover--raw`]:e.raw,[`${h}-popover-shared--overlap`]:e.overlap,[`${h}-popover-shared--show-arrow`]:e.showArrow,[`${h}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:u,style:y.value,onKeydown:d.handleKeydown,onMouseenter:A,onMouseleave:O},n),G?S(ar,{active:e.show,autoFocus:!0},{default:U}):U())}return Be(_,g.value)}return{displayed:p,namespace:t,isMounted:d.isMountedRef,zIndex:d.zIndexRef,followerRef:s,adjustedTo:V(e),followerEnabled:c,renderContentNode:W}},render(){return S(_r,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===V.tdkey},{default:()=>this.animated?S(Ze,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Ln=Object.keys(De),Dn={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Fn(e,r,n){Dn[r].forEach(t=>{e.props?e.props=Object.assign({},e.props):e.props={};const a=e.props[t],o=n[t];a?e.props[t]=(...i)=>{a(...i),o(...i)}:e.props[t]=o})}const zn={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:V.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Hn=Object.assign(Object.assign(Object.assign({},fe.props),zn),{internalOnAfterLeave:Function,internalRenderBody:Function}),Un=Re({name:"Popover",inheritAttrs:!1,props:Hn,slots:Object,__popover__:!0,setup(e){const r=br(),n=D(null),t=k(()=>e.show),a=D(e.defaultShow),o=yr(t,a),i=_e(()=>e.disabled?!1:o.value),s=()=>{if(e.disabled)return!0;const{getDisabled:l}=e;return!!(l!=null&&l())},d=()=>s()?!1:o.value,u=Pr(e,["arrow","showArrow"]),c=k(()=>e.overlap?!1:u.value);let p=null;const g=D(null),b=D(null),y=_e(()=>e.x!==void 0&&e.y!==void 0);function f(l){const{"onUpdate:show":m,onUpdateShow:C,onShow:z,onHide:H}=e;a.value=l,m&&j(m,l),C&&j(C,l),l&&z&&j(z,!0),l&&H&&j(H,!1)}function T(){p&&p.syncPosition()}function A(){const{value:l}=g;l&&(window.clearTimeout(l),g.value=null)}function O(){const{value:l}=b;l&&(window.clearTimeout(l),b.value=null)}function F(){const l=s();if(e.trigger==="focus"&&!l){if(d())return;f(!0)}}function E(){const l=s();if(e.trigger==="focus"&&!l){if(!d())return;f(!1)}}function R(){const l=s();if(e.trigger==="hover"&&!l){if(O(),g.value!==null||d())return;const m=()=>{f(!0),g.value=null},{delay:C}=e;C===0?m():g.value=window.setTimeout(m,C)}}function W(){const l=s();if(e.trigger==="hover"&&!l){if(A(),b.value!==null||!d())return;const m=()=>{f(!1),b.value=null},{duration:C}=e;C===0?m():b.value=window.setTimeout(m,C)}}function v(){W()}function _(l){var m;d()&&(e.trigger==="click"&&(A(),O(),f(!1)),(m=e.onClickoutside)===null||m===void 0||m.call(e,l))}function $(){if(e.trigger==="click"&&!s()){A(),O();const l=!d();f(l)}}function h(l){e.internalTrapFocus&&l.key==="Escape"&&(A(),O(),f(!1))}function K(l){a.value=l}function G(){var l;return(l=n.value)===null||l===void 0?void 0:l.targetRef}function I(l){p=l}return Q("NPopover",{getTriggerElement:G,handleKeydown:h,handleMouseEnter:R,handleMouseLeave:W,handleClickOutside:_,handleMouseMoveOutside:v,setBodyInstance:I,positionManuallyRef:y,isMountedRef:r,zIndexRef:q(e,"zIndex"),extraClassRef:q(e,"internalExtraClass"),internalRenderBodyRef:q(e,"internalRenderBody")}),Ee(()=>{o.value&&s()&&f(!1)}),{binderInstRef:n,positionManually:y,mergedShowConsideringDisabledProp:i,uncontrolledShow:a,mergedShowArrow:c,getMergedShow:d,setShow:K,handleClick:$,handleMouseEnter:R,handleMouseLeave:W,handleFocus:F,handleBlur:E,syncPosition:T}},render(){var e;const{positionManually:r,$slots:n}=this;let t,a=!1;if(!r&&(t=vr(n,"trigger"),t)){t=hr(t),t=t.type===gr?S("span",[t]):t;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=t.type)===null||e===void 0)&&e.__popover__)a=!0,t.props||(t.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),t.props.internalSyncTargetWithParent=!0,t.props.internalInheritedEventHandlers?t.props.internalInheritedEventHandlers=[o,...t.props.internalInheritedEventHandlers]:t.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:i}=this,s=[o,...i],d={onBlur:u=>{s.forEach(c=>{c.onBlur(u)})},onFocus:u=>{s.forEach(c=>{c.onFocus(u)})},onClick:u=>{s.forEach(c=>{c.onClick(u)})},onMouseenter:u=>{s.forEach(c=>{c.onMouseenter(u)})},onMouseleave:u=>{s.forEach(c=>{c.onMouseleave(u)})}};Fn(t,i?"nested":r?"manual":this.trigger,d)}}return S(Ar,{ref:"binderInstRef",syncTarget:!a,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?Be(S("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[pr,{enabled:o,zIndex:this.zIndex}]]):null,r?null:S(Or,null,{default:()=>t}),S(In,wr(this.$props,Ln,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var i,s;return(s=(i=this.$slots).default)===null||s===void 0?void 0:s.call(i)},header:()=>{var i,s;return(s=(i=this.$slots).header)===null||s===void 0?void 0:s.call(i)},footer:()=>{var i,s;return(s=(i=this.$slots).footer)===null||s===void 0?void 0:s.call(i)}})]}})}});export{Un as _,zn as p,Mn as r};
