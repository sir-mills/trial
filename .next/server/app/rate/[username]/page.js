(()=>{var e={};e.id=818,e.ids=[818],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},12961:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>u});var r=s(67096),a=s(16132),l=s(37284),n=s.n(l),i=s(32564),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);s.d(t,o);let u=["",{children:["rate",{children:["[username]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,86222)),"/Users/wikiwoo/Desktop/WEBX/trial/app/rate/[username]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,8937)),"/Users/wikiwoo/Desktop/WEBX/trial/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/wikiwoo/Desktop/WEBX/trial/app/rate/[username]/page.tsx"],d="/rate/[username]/page",x={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/rate/[username]/page",pathname:"/rate/[username]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},28947:(e,t,s)=>{Promise.resolve().then(s.bind(s,84380))},84380:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(53854),a=s(7857),l=s(63165),n=s(49457),i=s(30991),o=s(75930),u=s(66609),c=s(34218);function d({params:e}){let{username:t}=e,[s,d]=(0,c.useState)(null),[x,p]=(0,c.useState)(null),[m,h]=(0,c.useState)(3),[f,g]=(0,c.useState)(""),[w,j]=(0,c.useState)(!1),[v,P]=(0,c.useState)(""),[y,b]=(0,c.useState)(null);(0,c.useEffect)(()=>{(0,u.getSession)().then(e=>{e&&e.user?.name&&(0,o.PR)(e.user.name).then(e=>{d(e),(0,o.XZ)(t,e.username).then(e=>{null!=e&&(b(e),h(e.stars),g(e.comment))})})})},[x]),(0,c.useEffect)(()=>{(0,o.PR)(t).then(e=>{p(e)})},[t]);let N=async()=>{let e;null!=s&&(j(!0),(e=null==y?await (0,o.xi)({comment:f,stars:m,target:t,author:s.username}):await (0,o.g8)(y.id,{comment:f,stars:m})).changes&&e.changes>0?window.location.href=`/seller/${t}`:P("Something went wrong. Try again."))};return null==s?r.jsx("div",{className:"flex flex-col items-center justify-center w-full h-full",children:"Log in"}):r.jsx("div",{className:"flex flex-col items-center justify-center w-full h-full",children:(0,r.jsxs)(l.Zb,{className:"w-[400px]",children:[(0,r.jsxs)(l.Ol,{children:[r.jsx(l.ll,{children:"Create your review"}),r.jsx(l.SZ,{children:"Write your review for the seller below."})]}),(0,r.jsxs)(l.aY,{className:"flex flex-col items-center gap-4",children:[(0,r.jsxs)("div",{className:"flex flex-col w-full gap-2",children:[r.jsx("span",{className:"text-lg",children:"Seller"}),(0,r.jsxs)("a",{href:`/seller/${t}`,className:"flex flex-row justify-start items-center gap-4 ps-4 rounded-xl rounded-lg border p-2",children:[r.jsx("img",{src:x?.profilePic,className:"w-12 h-12 rounded-xl border"}),r.jsx("span",{className:"text-sm underline",children:x?.username})]})]}),(0,r.jsxs)("div",{className:"flex flex-col w-full gap-2",children:[(0,r.jsxs)("div",{className:"flex flex-row gap-2 items-baseline",children:[r.jsx("span",{className:"text-lg",children:"Rating:"}),(0,r.jsxs)("span",{className:"text-lg "+(m<2?"text-red-500":m<4?"text-yellow-500":"text-green-500"),children:[m," stars"]})]}),r.jsx(n.i,{className:"w-full",min:0,max:5,step:1,value:[m],onValueChange:e=>{h(e[0])}})]}),(0,r.jsxs)("div",{className:"flex flex-col w-full gap-2",children:[r.jsx("span",{children:"Additional comments"}),r.jsx(i.g,{className:"w-full",placeholder:"I love this item...",value:f,onChange:e=>{g(e.target.value)}})]})]}),r.jsx(l.eW,{className:"w-full",children:r.jsx(a.z,{disabled:w,className:"w-full",onClick:N,children:w?"Submitting...":""!=v?v:null!=y?"Update review":"Submit review"})})]})})}},86222:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>l,default:()=>o});var r=s(95153);let a=(0,r.createProxy)(String.raw`/Users/wikiwoo/Desktop/WEBX/trial/app/rate/[username]/page.tsx`),{__esModule:l,$$typeof:n}=a,i=a.default,o=i}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[271,791,323,622,370,356],()=>s(12961));module.exports=r})();