"use strict";(()=>{var e={};e.id=428,e.ids=[428],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},50383:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>R,originalPathname:()=>I,patchFetch:()=>m,requestAsyncStorage:()=>l,routeModule:()=>o,serverHooks:()=>A,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>d});var T={};a.r(T),a.d(T,{GET:()=>p,POST:()=>u});var r=a(10884),s=a(16132),E=a(21040),i=a(64947),n=a(21554);async function p(e){let t=e.nextUrl.searchParams,T=t.get("buyer"),r=t.get("seller"),s=await (0,i.bA)({filename:"./db/purchases.db",driver:a(20661).Database});await s.exec(n.Av);let E="SELECT * FROM purchases",p=[T?{params:[T],sql:"buyer = ?"}:null,r?{params:[r],sql:"seller = ?"}:null].filter(e=>null!==e),u=p.length>0?`${E} WHERE ${p.map(e=>e?.sql).join(" AND ")}`:`${E}`,o=await s.all(u,p.map(e=>e?.params).flat());return new Response(JSON.stringify(o),{headers:{"content-type":"application/json;charset=UTF-8"}})}async function u(e){let t=await e.json(),T=await (0,i.bA)({filename:"./db/purchases.db",driver:a(20661).Database});await T.exec(n.Av);let r=await T.run("INSERT INTO purchases (itemId, buyer, seller, quantity, itemPrice, txnDigest) VALUES (?, ?, ?, ?, ?, ?)",t.itemId,t.buyer,t.seller,t.quantity,t.itemPrice,t.txnDigest);return new Response(JSON.stringify(r),{headers:{"content-type":"application/json;charset=UTF-8"}})}let o=new r.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/purchases/route",pathname:"/api/purchases",filename:"route",bundlePath:"app/api/purchases/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/purchases/route.ts",nextConfigOutput:"",userland:T}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:A,headerHooks:R,staticGenerationBailout:d}=o,I="/api/purchases/route";function m(){return(0,E.patchFetch)({serverHooks:A,staticGenerationAsyncStorage:c})}},21554:(e,t,a)=>{a.d(t,{Av:()=>E,c2:()=>T,iN:()=>r,oN:()=>i,s5:()=>s});let T=`CREATE TABLE IF NOT EXISTS users (
  username TEXT PRIMARY KEY,
  profilePic TEXT,
  bio TEXT,
  shippingAddress TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  balance INTEGER DEFAULT 0,
  password TEXT
)`,r=`CREATE TABLE IF NOT EXISTS items (
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
)`}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),T=t.X(0,[271,382],()=>a(50383));module.exports=T})();