import{v as r,y as d,x as c,d as $,O as b,P as u,bK as y,Y as C,k as S,a0 as E,p as i,F as w}from"./index-DGA7EaGb.js";const z=r("thing",`
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
 `,[d("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),d("description",[c("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),d("content",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),d("footer",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),d("action",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),R=Object.assign(Object.assign({},u.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),O=$({name:"Thing",props:R,setup(t,{slots:e}){const{mergedClsPrefixRef:h,inlineThemeDisabled:o,mergedRtlRef:f}=b(t),s=u("Thing","-thing",z,y,t,h),v=C("Thing",f,h),x=S(()=>{const{self:{titleTextColor:l,textColor:n,titleFontWeight:g,fontSize:m},common:{cubicBezierEaseInOut:_}}=s.value;return{"--n-bezier":_,"--n-font-size":m,"--n-text-color":n,"--n-title-font-weight":g,"--n-title-text-color":l}}),a=o?E("thing",void 0,x,t):void 0;return()=>{var l;const{value:n}=h,g=v?v.value:!1;return(l=a==null?void 0:a.onRender)===null||l===void 0||l.call(a),i("div",{class:[`${n}-thing`,a==null?void 0:a.themeClass,g&&`${n}-thing--rtl`],style:o?void 0:x.value},e.avatar&&t.contentIndented?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,i("div",{class:`${n}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?i("div",{class:`${n}-thing-avatar-header-wrapper`},e.avatar?i("div",{class:`${n}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header-wrapper`},i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null):null):i(w,null,e.header||t.title||e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header`},e.header||t.title?i("div",{class:`${n}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?i("div",{class:`${n}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?i("div",{class:[`${n}-thing-main__description`,t.descriptionClass],style:t.descriptionStyle},e.description?e.description():t.description):null),e.default||t.content?i("div",{class:[`${n}-thing-main__content`,t.contentClass],style:t.contentStyle},e.default?e.default():t.content):null,e.footer?i("div",{class:`${n}-thing-main__footer`},e.footer()):null,e.action?i("div",{class:`${n}-thing-main__action`},e.action()):null))}}});export{O as _};
