import{q as r,x as l,v as c,L as x,d as $,M as b,c3 as y,W as C,k as S,X as E,n as i,F as w}from"./index-BQQ2VPbK.js";const z=r("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[r("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),r("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[r("thing-header-wrapper",`
 flex: 1;
 `)]),r("thing-main",`
 flex-grow: 1;
 `,[r("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[l("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),l("description",[c("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),l("content",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),l("footer",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),l("action",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),R=Object.assign(Object.assign({},x.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),j=$({name:"Thing",props:R,slots:Object,setup(t,{slots:e}){const{mergedClsPrefixRef:h,inlineThemeDisabled:o,mergedRtlRef:s}=b(t),v=x("Thing","-thing",z,y,t,h),u=C("Thing",s,h),f=S(()=>{const{self:{titleTextColor:d,textColor:n,titleFontWeight:g,fontSize:m},common:{cubicBezierEaseInOut:_}}=v.value;return{"--n-bezier":_,"--n-font-size":m,"--n-text-color":n,"--n-title-font-weight":g,"--n-title-text-color":d}}),a=o?E("thing",void 0,f,t):void 0;return()=>{var d;const{value:n}=h,g=u?u.value:!1;return(d=a==null?void 0:a.onRender)===null||d===void 0||d.call(a),i("div",{class:[`${n}-thing`,a==null?void 0:a.themeClass,g&&`${n}-thing--rtl`],style:o?void 0:f.value},e.avatar&&t.contentIndented?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,i("div",{class:`${n}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?i("div",{class:`${n}-thing-avatar-header-wrapper`},e.avatar?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header-wrapper`},i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null):null):i(w,null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null),e.default||t.content?i("div",{class:[`${n}-thing-main__content`,t.contentClass],style:t.contentStyle},e.default?e.default():t.content):null,e.footer?i("div",{class:`${n}-thing-main__footer`},e.footer()):null,e.action?i("div",{class:`${n}-thing-main__action`},e.action()):null))}}});export{j as _};
