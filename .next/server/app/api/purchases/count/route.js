"use strict";(()=>{var e={};e.id=389,e.ids=[389],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},6358:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>A,originalPathname:()=>I,patchFetch:()=>h,requestAsyncStorage:()=>c,routeModule:()=>u,serverHooks:()=>R,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>d});var r={};a.r(r),a.d(r,{GET:()=>o,POST:()=>p});var T=a(10884),s=a(16132),E=a(21040),i=a(64947),n=a(21554);async function o(e){let t=e.nextUrl.searchParams,r=t.get("buyer"),T=t.get("seller"),s=await (0,i.bA)({filename:"./db/purchases.db",driver:a(20661).Database});if(await s.exec(n.Av),r){let e=await s.all("SELECT * FROM purchases WHERE buyer = ?",r);return new Response(JSON.stringify(e),{headers:{"content-type":"application/json;charset=UTF-8"}})}if(T){let e=await s.all("SELECT * FROM purchases WHERE seller = ?",T);return new Response(JSON.stringify(e),{headers:{"content-type":"application/json;charset=UTF-8"}})}{let e=await s.all("SELECT * FROM purchases");return new Response(JSON.stringify(e),{headers:{"content-type":"application/json;charset=UTF-8"}})}}async function p(e){let t=await e.json(),r=await (0,i.bA)({filename:"./db/purchases.db",driver:a(20661).Database});await r.exec(n.Av);let T=await r.run("INSERT INTO purchases (itemId, buyer, seller, quantity, itemPrice) VALUES (?, ?, ?, ?, ?)",t.itemId,t.buyer,t.seller,t.quantity,t.itemPrice);return new Response(JSON.stringify(T),{headers:{"content-type":"application/json;charset=UTF-8"}})}let u=new T.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/purchases/count/route",pathname:"/api/purchases/count",filename:"route",bundlePath:"app/api/purchases/count/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/purchases/count/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:R,headerHooks:A,staticGenerationBailout:d}=u,I="/api/purchases/count/route";function h(){return(0,E.patchFetch)({serverHooks:R,staticGenerationAsyncStorage:l})}},21554:(e,t,a)=>{a.d(t,{Av:()=>E,c2:()=>r,iN:()=>T,oN:()=>i,s5:()=>s});let r=`CREATE TABLE IF NOT EXISTS users (
  username TEXT PRIMARY KEY,
  profilePic TEXT,
  bio TEXT,
  shippingAddress TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  balance INTEGER DEFAULT 0,
  password TEXT
)`,T=`CREATE TABLE IF NOT EXISTS items (
  id TEXT PRIMARY KEY,
  title TEXT,
  description TEXT,
  price INTEGER,
  totalSupply INTEGER,
  availableSupply INTEGER,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  listed BOOLEAN DEFAULT TRUE,
  image TEXT,
  owner TEXT,
  category TEXT
)`,s=`CREATE TABLE IF NOT EXISTS ratings (
  id INTEGER PRIMARY KEY DEFAULT AUTO_INCREMENT,
  target TEXT,
  author TEXT,
  stars INTEGER,
  comment TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`,E=`CREATE TABLE IF NOT EXISTS purchases (
  id INTEGER PRIMARY KEY DEFAULT AUTO_INCREMENT,
  itemId TEXT,
  buyer TEXT,
  seller TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  quantity INTEGER,
  itemPrice INTEGER,
  status TEXT DEFAULT 'pending',
  txnDigest TEXT
)`,i=`CREATE TABLE IF NOT EXISTS watchlist (
  userId TEXT, 
  itemId TEXT
)`}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[271,382],()=>a(6358));module.exports=r})();