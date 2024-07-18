"use strict";(()=>{var e={};e.id=768,e.ids=[768],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},84071:(e,s,t)=>{t.r(s),t.d(s,{headerHooks:()=>l,originalPathname:()=>m,patchFetch:()=>N,requestAsyncStorage:()=>R,routeModule:()=>d,serverHooks:()=>A,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>I});var r={};t.r(r),t.d(r,{DELETE:()=>p,GET:()=>o,PUT:()=>u});var a=t(10884),T=t(16132),E=t(21040),i=t(64947),n=t(21554);async function o(e,{params:s}){let r=s.address,a=await (0,i.bA)({filename:"./db/users.db",driver:t(20661).Database});await a.exec(n.c2);let T=await a.get("SELECT * FROM users WHERE username = ?",r);return T?new Response(JSON.stringify(T),{headers:{"content-type":"application/json;charset=UTF-8"}}):new Response(JSON.stringify({error:"User not found"}),{headers:{"content-type":"application/json;charset=UTF-8"},status:404})}async function u(e,{params:s}){let r=await e.json(),a=s.address,T=await (0,i.bA)({filename:"./db/users.db",driver:t(20661).Database}),E=await T.run("UPDATE users SET username = ?, profilePic = ?, bio = ?, password = ? WHERE username = ?",r.username,r.profilePic,r.bio,r.password,a);return new Response(JSON.stringify(E),{headers:{"content-type":"application/json;charset=UTF-8"}})}async function p(e,{params:s}){let r=s.address,a=await (0,i.bA)({filename:"./db/users.db",driver:t(20661).Database}),T=await a.run("DELETE FROM users WHERE username = ?",r);return new Response(JSON.stringify(T),{headers:{"content-type":"application/json;charset=UTF-8"}})}let d=new a.AppRouteRouteModule({definition:{kind:T.x.APP_ROUTE,page:"/api/users/[address]/route",pathname:"/api/users/[address]",filename:"route",bundlePath:"app/api/users/[address]/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/users/[address]/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:R,staticGenerationAsyncStorage:c,serverHooks:A,headerHooks:l,staticGenerationBailout:I}=d,m="/api/users/[address]/route";function N(){return(0,E.patchFetch)({serverHooks:A,staticGenerationAsyncStorage:c})}},21554:(e,s,t)=>{t.d(s,{Av:()=>E,c2:()=>r,iN:()=>a,oN:()=>i,s5:()=>T});let r=`CREATE TABLE IF NOT EXISTS users (
  username TEXT PRIMARY KEY,
  profilePic TEXT,
  bio TEXT,
  shippingAddress TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  balance INTEGER DEFAULT 0,
  password TEXT
)`,a=`CREATE TABLE IF NOT EXISTS items (
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
)`}};var s=require("../../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[271,382],()=>t(84071));module.exports=r})();