"use strict";(()=>{var e={};e.id=440,e.ids=[440],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},17379:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>h,originalPathname:()=>l,patchFetch:()=>N,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>A,staticGenerationAsyncStorage:()=>R,staticGenerationBailout:()=>I});var s={};a.r(s),a.d(s,{DELETE:()=>u,GET:()=>p,PUT:()=>o});var r=a(10884),T=a(16132),E=a(21040),i=a(64947),n=a(21554);async function p(e,{params:t}){let s=t.purchaseId,r=await (0,i.bA)({filename:"./db/purchases.db",driver:a(20661).Database});await r.exec(n.Av);let T=await r.get("SELECT * FROM purchases WHERE id = ?",s);return T?new Response(JSON.stringify(T),{headers:{"content-type":"application/json;charset=UTF-8"}}):new Response(JSON.stringify({error:"Purchase not found"}),{headers:{"content-type":"application/json;charset=UTF-8"},status:404})}async function o(e,{params:t}){let s=t.purchaseId,r=await e.json(),T=r.status;if(!T)return new Response(JSON.stringify({error:"Status not provided"}),{headers:{"content-type":"application/json;charset=UTF-8"},status:400});let E=await (0,i.bA)({filename:"./db/purchases.db",driver:a(20661).Database}),n=await E.run("UPDATE purchases SET status = ? WHERE id = ?",T,s);return new Response(JSON.stringify(n),{headers:{"content-type":"application/json;charset=UTF-8"}})}async function u(e,{params:t}){let s=t.purchaseId,r=await (0,i.bA)({filename:"./db/purchases.db",driver:a(20661).Database}),T=await r.run("DELETE FROM purchases WHERE id = ?",s);return new Response(JSON.stringify(T),{headers:{"content-type":"application/json;charset=UTF-8"}})}let c=new r.AppRouteRouteModule({definition:{kind:T.x.APP_ROUTE,page:"/api/purchases/[purchaseId]/route",pathname:"/api/purchases/[purchaseId]",filename:"route",bundlePath:"app/api/purchases/[purchaseId]/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/purchases/[purchaseId]/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:R,serverHooks:A,headerHooks:h,staticGenerationBailout:I}=c,l="/api/purchases/[purchaseId]/route";function N(){return(0,E.patchFetch)({serverHooks:A,staticGenerationAsyncStorage:R})}},21554:(e,t,a)=>{a.d(t,{Av:()=>E,c2:()=>s,iN:()=>r,oN:()=>i,s5:()=>T});let s=`CREATE TABLE IF NOT EXISTS users (
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
)`,T=`CREATE TABLE IF NOT EXISTS ratings (
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
)`}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[271,382],()=>a(17379));module.exports=s})();