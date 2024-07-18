"use strict";(()=>{var e={};e.id=781,e.ids=[781],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},41029:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>A,originalPathname:()=>c,patchFetch:()=>I,requestAsyncStorage:()=>u,routeModule:()=>p,serverHooks:()=>l,staticGenerationAsyncStorage:()=>R,staticGenerationBailout:()=>d});var T={};r.r(T),r.d(T,{GET:()=>o});var a=r(10884),s=r(16132),E=r(21040),i=r(64947),n=r(21554);async function o(e){let t=e.nextUrl.searchParams.get("target");if(!t)return new Response(JSON.stringify({error:"Target not found"}),{headers:{"content-type":"application/json;charset=UTF-8"},status:404});let T=await (0,i.bA)({filename:"./db/ratings.db",driver:r(20661).Database});await T.exec(n.s5);let a=await T.all("SELECT * FROM ratings WHERE target = ?",t);if(console.log("ratings",a),!a)return new Response(JSON.stringify({error:"Rating not found"}),{headers:{"content-type":"application/json;charset=UTF-8"},status:404});let s=a.map(e=>e.stars).reduce((e,t)=>e+t,0)/a.length;return new Response(JSON.stringify(s),{headers:{"content-type":"application/json;charset=UTF-8"}})}let p=new a.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/ratings/stars/route",pathname:"/api/ratings/stars",filename:"route",bundlePath:"app/api/ratings/stars/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/ratings/stars/route.ts",nextConfigOutput:"",userland:T}),{requestAsyncStorage:u,staticGenerationAsyncStorage:R,serverHooks:l,headerHooks:A,staticGenerationBailout:d}=p,c="/api/ratings/stars/route";function I(){return(0,E.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:R})}},21554:(e,t,r)=>{r.d(t,{Av:()=>E,c2:()=>T,iN:()=>a,oN:()=>i,s5:()=>s});let T=`CREATE TABLE IF NOT EXISTS users (
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
)`}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),T=t.X(0,[271,382],()=>r(41029));module.exports=T})();