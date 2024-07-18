"use strict";(()=>{var e={};e.id=98,e.ids=[98],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},96452:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>d,originalPathname:()=>c,patchFetch:()=>m,requestAsyncStorage:()=>l,routeModule:()=>u,serverHooks:()=>R,staticGenerationAsyncStorage:()=>A,staticGenerationBailout:()=>I});var T={};a.r(T),a.d(T,{GET:()=>o,POST:()=>p});var r=a(10884),E=a(16132),i=a(21040),s=a(64947),n=a(21554);async function o(e){let t=e.nextUrl.searchParams,T=t.get("author"),r=t.get("target"),E=await (0,s.bA)({filename:"./db/ratings.db",driver:a(20661).Database});await E.exec(n.s5);let i="SELECT * FROM ratings",o=[T?{params:[T],sql:"author = ?"}:null,r?{params:[r],sql:"target = ?"}:null].filter(e=>null!==e),p=o.length>0?`${i} WHERE ${o.map(e=>e?.sql).join(" AND ")}`:`${i}`,u=await E.all(p,o.map(e=>e?.params).flat());return new Response(JSON.stringify(u),{headers:{"content-type":"application/json;charset=UTF-8"}})}async function p(e){let t=await e.json(),T=await (0,s.bA)({filename:"./db/ratings.db",driver:a(20661).Database});await T.exec(n.s5);let r=await T.run("INSERT INTO ratings (target, author, stars, comment) VALUES (?, ?, ?, ?)",t.target,t.author,t.stars,t.comment);return new Response(JSON.stringify(r),{headers:{"content-type":"application/json;charset=UTF-8"}})}let u=new r.AppRouteRouteModule({definition:{kind:E.x.APP_ROUTE,page:"/api/ratings/route",pathname:"/api/ratings",filename:"route",bundlePath:"app/api/ratings/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/ratings/route.ts",nextConfigOutput:"",userland:T}),{requestAsyncStorage:l,staticGenerationAsyncStorage:A,serverHooks:R,headerHooks:d,staticGenerationBailout:I}=u,c="/api/ratings/route";function m(){return(0,i.patchFetch)({serverHooks:R,staticGenerationAsyncStorage:A})}},21554:(e,t,a)=>{a.d(t,{Av:()=>i,c2:()=>T,iN:()=>r,oN:()=>s,s5:()=>E});let T=`CREATE TABLE IF NOT EXISTS users (
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
)`,E=`CREATE TABLE IF NOT EXISTS ratings (
  id INTEGER PRIMARY KEY DEFAULT AUTO_INCREMENT,
  target TEXT,
  author TEXT,
  stars INTEGER,
  comment TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`,i=`CREATE TABLE IF NOT EXISTS purchases (
  id INTEGER PRIMARY KEY DEFAULT AUTO_INCREMENT,
  itemId TEXT,
  buyer TEXT,
  seller TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  quantity INTEGER,
  itemPrice INTEGER,
  status TEXT DEFAULT 'pending',
  txnDigest TEXT
)`,s=`CREATE TABLE IF NOT EXISTS watchlist (
  userId TEXT, 
  itemId TEXT
)`}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),T=t.X(0,[271,382],()=>a(96452));module.exports=T})();