"use strict";(()=>{var e={};e.id=371,e.ids=[371],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},10001:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>A,originalPathname:()=>I,patchFetch:()=>N,requestAsyncStorage:()=>d,routeModule:()=>u,serverHooks:()=>l,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>R});var s={};a.r(s),a.d(s,{GET:()=>o,PUT:()=>p});var r=a(10884),T=a(16132),E=a(21040),i=a(64947),n=a(21554);async function o(e,{params:t}){let s=t.address,r=await (0,i.bA)({filename:"./db/users.db",driver:a(20661).Database});await r.exec(n.c2);let T=await r.get("SELECT balance FROM users WHERE username = ?",s);return T?new Response(JSON.stringify(T),{headers:{"content-type":"application/json;charset=UTF-8"}}):new Response(JSON.stringify({error:"User not found"}),{headers:{"content-type":"application/json;charset=UTF-8"},status:404})}async function p(e,{params:t}){let s=await e.json(),r=s.balance;if(void 0===r)return new Response(JSON.stringify({error:"Balance not found"}),{headers:{"content-type":"application/json;charset=UTF-8"},status:404});let T=t.address,E=await (0,i.bA)({filename:"./db/users.db",driver:a(20661).Database}),n=await E.run("UPDATE users SET balance = ? WHERE username = ?",r,T);return new Response(JSON.stringify(n),{headers:{"content-type":"application/json;charset=UTF-8"}})}let u=new r.AppRouteRouteModule({definition:{kind:T.x.APP_ROUTE,page:"/api/users/[address]/balance/route",pathname:"/api/users/[address]/balance",filename:"route",bundlePath:"app/api/users/[address]/balance/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/users/[address]/balance/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:c,serverHooks:l,headerHooks:A,staticGenerationBailout:R}=u,I="/api/users/[address]/balance/route";function N(){return(0,E.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:c})}},21554:(e,t,a)=>{a.d(t,{Av:()=>E,c2:()=>s,iN:()=>r,oN:()=>i,s5:()=>T});let s=`CREATE TABLE IF NOT EXISTS users (
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
)`}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[271,382],()=>a(10001));module.exports=s})();