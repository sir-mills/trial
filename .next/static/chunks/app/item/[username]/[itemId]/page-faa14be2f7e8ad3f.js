(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{2565:function(t,e,s){Promise.resolve().then(s.bind(s,6911)),Promise.resolve().then(s.bind(s,1917)),Promise.resolve().then(s.t.bind(s,413,23))},6911:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return i}});var r,n,o=s(7437),u=s(1271);(r=n||(n={}))[r.Visitor=0]="Visitor",r[r.Buyer=1]="Buyer",r[r.Seller=2]="Seller";var a=s(2265);function i(t){let{itemId:e,sellerUsername:s,available:r,listed:i,itemTitle:f,itemImage:c,itemPrice:l}=t,{toast:S}=(0,u.pm)(),[d,p]=(0,a.useState)(null),[_,E]=(0,a.useState)(n.Visitor),[T,O]=(0,a.useState)("1"),[y,m]=(0,a.useState)(!1),[v,A]=(0,a.useState)(""),[h,I]=(0,a.useState)(""),[D,P]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{},[]),(0,o.jsx)("div",{})}},1917:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return o}});var r=s(7437),n=s(2265);function o(t){let{target:e}=t,[s,o]=(0,n.useState)([]),[u,a]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{},[e]),(0,r.jsx)("div",{className:"flex flex-col gap-4 items-center py-4 h-full w-full",children:"PLACEHOLDER"})}},1271:function(t,e,s){"use strict";s.d(e,{pm:function(){return S}});var r=s(2265);let n=0,o=new Map,u=t=>{if(o.has(t))return;let e=setTimeout(()=>{o.delete(t),c({type:"REMOVE_TOAST",toastId:t})},1e6);o.set(t,e)},a=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,1)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case"DISMISS_TOAST":{let{toastId:s}=e;return s?u(s):t.toasts.forEach(t=>{u(t.id)}),{...t,toasts:t.toasts.map(t=>t.id===s||void 0===s?{...t,open:!1}:t)}}case"REMOVE_TOAST":if(void 0===e.toastId)return{...t,toasts:[]};return{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)}}},i=[],f={toasts:[]};function c(t){f=a(f,t),i.forEach(t=>{t(f)})}function l(t){let{...e}=t,s=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:s});return c({type:"ADD_TOAST",toast:{...e,id:s,open:!0,onOpenChange:t=>{t||r()}}}),{id:s,dismiss:r,update:t=>c({type:"UPDATE_TOAST",toast:{...t,id:s}})}}function S(){let[t,e]=r.useState(f);return r.useEffect(()=>(i.push(e),()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)}),[t]),{...t,toast:l,dismiss:t=>c({type:"DISMISS_TOAST",toastId:t})}}},622:function(t,e,s){"use strict";var r=s(2265),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function f(t,e,s){var r,o={},f=null,c=null;for(r in void 0!==s&&(f=""+s),void 0!==e.key&&(f=""+e.key),void 0!==e.ref&&(c=e.ref),e)u.call(e,r)&&!i.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===o[r]&&(o[r]=e[r]);return{$$typeof:n,type:t,key:f,ref:c,props:o,_owner:a.current}}e.Fragment=o,e.jsx=f,e.jsxs=f},7437:function(t,e,s){"use strict";t.exports=s(622)}},function(t){t.O(0,[413,971,472,744],function(){return t(t.s=2565)}),_N_E=t.O()}]);