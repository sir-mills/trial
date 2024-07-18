"use strict";exports.id=356,exports.ids=[356],exports.modules={63165:(e,t,a)=>{a.d(t,{Ol:()=>l,SZ:()=>i,Zb:()=>s,aY:()=>d,eW:()=>f,ll:()=>c});var r=a(53854),o=a(34218),n=a(56370);let s=o.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));s.displayName="Card";let l=o.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",e),...t}));l.displayName="CardHeader";let c=o.forwardRef(({className:e,...t},a)=>r.jsx("h3",{ref:a,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));c.displayName="CardTitle";let i=o.forwardRef(({className:e,...t},a)=>r.jsx("p",{ref:a,className:(0,n.cn)("text-sm text-muted-foreground",e),...t}));i.displayName="CardDescription";let d=o.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,n.cn)("p-6 pt-0",e),...t}));d.displayName="CardContent";let f=o.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,n.cn)("flex items-center p-6 pt-0",e),...t}));f.displayName="CardFooter"},49457:(e,t,a)=>{a.d(t,{i:()=>l});var r=a(53854),o=a(34218),n=a(37622),s=a(56370);let l=o.forwardRef(({className:e,...t},a)=>(0,r.jsxs)(n.fC,{ref:a,className:(0,s.cn)("relative flex w-full touch-none select-none items-center",e),...t,children:[r.jsx(n.fQ,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:r.jsx(n.e6,{className:"absolute h-full bg-primary"})}),r.jsx(n.bU,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50"})]}));l.displayName=n.fC.displayName},75930:(e,t,a)=>{async function r(e){let t=await fetch(`http://localhost:3000/api/users/${e}`,{method:"GET",cache:"no-cache",headers:{"Content-Type":"application/json"}}),a=await t.json();return a}async function o(e){try{let t=await fetch(`http://localhost:3000/api/items/${e}`,{method:"GET",headers:{"Content-Type":"application/json"},cache:"no-cache"}),a=await t.json();return console.log("getItemById",a),a}catch(e){return console.error(e),null}}async function n(e){try{let t=await fetch("http://localhost:3000/api/ratings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await t.json();return console.log("submitItemReview",a),a}catch(e){return console.error(e),null}}async function s(e,t){try{let a=await fetch(`http://localhost:3000/api/ratings/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await a.json();return console.log("updateReview",r),r}catch(e){return console.error(e),null}}async function l(e,t){try{let a=await fetch(`http://localhost:3000/api/ratings?target=${e}&author=${t}`,{method:"GET",headers:{"Content-Type":"application/json"},cache:"no-cache"}),r=await a.json();return console.log("getReviewByTargetAndAuthor",r),r[0]}catch(e){return console.error(e),null}}a.d(t,{PF:()=>o,PR:()=>r,XZ:()=>l,g8:()=>s,xi:()=>n})},57481:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(31323);let o=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};