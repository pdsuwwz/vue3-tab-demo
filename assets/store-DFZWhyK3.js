import{bg as U,f as $,g as C,cu as y,ac as A,k as v,cv as E}from"./index-iLhBIVOw.js";const j=U("work-tabs",()=>{const S=$(),R=C(),u=y("allTabCacheSpaces",A(new Map)),T=y("activeCacheSpaceKey",C(null)),o=v(()=>u.value.get(T.value)),r=v(()=>{var e;return((e=o==null?void 0:o.value)==null?void 0:e.tabs)||[]}),L=v(()=>{const e=r.value.length;return r.value[e-1]}),O=v(()=>{const e=r.value,a=o.value.activeTabKey;return e.find(t=>t.tabKey===a)}),p=(e,a)=>e+a,x=(e,a,c)=>{const t=u.value.get(p(e,a));return t?t.tabs.find(n=>n.routeName===c):void 0},m=y("cachesKeepAliveInclude",A(new Set)),P=v(()=>Array.from(m.value)),B=e=>{m.value.add(e.routeName)},d=e=>{m.value.delete(e.routeName)},i=(e,a)=>e.tabKey===a.tabKey,g=({label:e,customLabel:a,route:c})=>({label:e??"",customLabel:a??"",tabKey:c.path,link:c.fullPath,routeName:c.name}),K=e=>{T.value=e.cacheSpaceKey},f=e=>{const a=o.value;a.activeTabKey=e.tabKey,S.push(e.link)},w=(e,a)=>({cacheSpaceKey:p(e,a.cacheSpaceKey),activeTabKey:null,tabs:[]}),I=(e,a)=>{const c=p(e,a.cacheSpaceKey);let t;return u.value.has(c)?t=u.value.get(c):(t=w(e,a),u.value.set(t.cacheSpaceKey,t)),K(t),t},_=e=>{const a=r.value,c=a.find(t=>i(t,e));return B(e),c?(c.link=e.link,e.customLabel&&(c.customLabel=e.customLabel),c):(a.push(e),e)},M=(e,a)=>{if(!a.length)return;const c=s=>{let l;return E(s)?l=s:l=s.to,l},t=c(a[0]),h=S.resolve(t);I(e,{cacheSpaceKey:h.meta.cacheSpaceKey});const n=a.map(s=>{const l=c(s),N=S.resolve(l);let F;E(s)||(F=s.tabName);const q=N.meta.title;return _(g({label:q,customLabel:F,route:N}))});f(n[n.length-1])},b=C([]),W=e=>{const a=O.value;b.value.find(t=>i(a,t.workTab))||b.value.push({workTab:a,beforeCloseFunction:e})},k=e=>{const a=b.value.find(n=>i(e,n.workTab)),c=b.value.findIndex(n=>i(e,n.workTab)),t=!0;if(!a)return Promise.resolve(t);const h=a.beforeCloseFunction();return new Promise((n,s)=>{h.then(()=>{b.value.splice(c,1),n(t)}),h.catch(l=>s(new Error(l||"关闭 Tab 失败")))})};return{singletonTabName:R,getterCachesKeepAliveInclude:P,allTabCacheSpaces:u,activeCacheSpaceKey:T,currentCacheSpace:o,currentTabsInCacheSpace:r,findTabByCacheSpaceKey:x,removeCacheFromKeepAlive:d,createNewCacheSpaceKey:p,addCacheSpace:I,changeOtherCacheSpace:K,bindTabToCacheSpace:_,bindMultipleTabsToCacheSpace:M,removeTabFromCacheSpace:async e=>{await k(e);const a=r.value,c=a.findIndex(n=>i(n,e)),t=a.splice(c,1)[0];return a.some(n=>n.routeName===t.routeName)||d(t),a.length!==0&&f(L.value),t},removeOtherTabsFromCacheSpace:()=>{const e=r.value,a=o.value.activeTabKey;if(e.length<=1)return;const c=e.find(t=>t.tabKey===a);e.forEach(t=>{i(c,t)||d(t)}),e.splice(0,e.length,c)},changeTabByCacheSpace:f,createFactoryCacheSpace:w,createFactoryTabData:g,__subscribingClosedTab:b,registerCloseTabEvent:W,notifyBeforeCloseTabEvent:k}}),J=j;export{J as u};