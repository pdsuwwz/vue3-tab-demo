import{bn as c,bD as f,bE as o,bF as p}from"./index-DMvxVjEm.js";var h=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,y=/^\w*$/;function d(r,n){if(c(r))return!1;var e=typeof r;return e=="number"||e=="symbol"||e=="boolean"||r==null||f(r)?!0:y.test(r)||!h.test(r)||n!=null&&r in Object(n)}var m="Expected a function";function s(r,n){if(typeof r!="function"||n!=null&&typeof n!="function")throw new TypeError(m);var e=function(){var t=arguments,a=n?n.apply(this,t):t[0],i=e.cache;if(i.has(a))return i.get(a);var u=r.apply(this,t);return e.cache=i.set(a,u)||i,u};return e.cache=new(s.Cache||o),e}s.Cache=o;var g=500;function l(r){var n=s(r,function(t){return e.size===g&&e.clear(),t}),e=n.cache;return n}var E=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,C=/\\(\\)?/g,I=l(function(r){var n=[];return r.charCodeAt(0)===46&&n.push(""),r.replace(E,function(e,t,a,i){n.push(a?i.replace(C,"$1"):t||e)}),n});function P(r,n){return c(r)?r:d(r,n)?[r]:I(p(r))}var b=1/0;function w(r){if(typeof r=="string"||f(r))return r;var n=r+"";return n=="0"&&1/r==-b?"-0":n}function T(r,n){n=P(n,r);for(var e=0,t=n.length;r!=null&&e<t;)r=r[w(n[e++])];return e&&e==t?r:void 0}function M(r,n,e){var t=r==null?void 0:T(r,n);return t===void 0?e:t}export{T as b,P as c,M as g,d as i,w as t};
