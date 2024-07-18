"use strict";(()=>{var e={};e.id=58,e.ids=[58],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},17890:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>A,originalPathname:()=>m,patchFetch:()=>N,requestAsyncStorage:()=>c,routeModule:()=>u,serverHooks:()=>I,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>R});var T={};a.r(T),a.d(T,{DELETE:()=>p,GET:()=>o,POST:()=>l});var i=a(10884),E=a(16132),s=a(21040),r=a(21554),n=a(64947);async function o(e){let t=e.nextUrl.searchParams,T=t.get("user"),i=t.get("itemId"),E=await (0,n.bA)({filename:"./db/watchlist.db",driver:a(20661).Database});await E.exec(r.oN);let s="SELECT * FROM watchlist",o=[T?{params:[T],sql:"userId = ?"}:null,i?{params:[i],sql:"itemId = ?"}:null].filter(e=>null!==e),l=o.length>0?`${s} WHERE ${o.map(e=>e?.sql).join(" AND ")}`:`${s}`,p=await E.all(l,o.map(e=>e?.params).flat());return new Response(JSON.stringify(p),{headers:{"content-type":"application/json;charset=UTF-8"}})}async function l(e){let t=await e.json(),T=await (0,n.bA)({filename:"./db/watchlist.db",driver:a(20661).Database});await T.exec(r.oN);let i=await T.run("INSERT INTO watchlist (userId, itemId) VALUES (?, ?)",t.userId,t.itemId);return new Response(JSON.stringify(i),{headers:{"content-type":"application/json;charset=UTF-8"}})}async function p(e){let t=e.nextUrl.searchParams,T=t.get("user"),i=t.get("itemId"),E=await (0,n.bA)({filename:"./db/watchlist.db",driver:a(20661).Database});await E.exec(r.oN);let s=await E.run("DELETE FROM watchlist WHERE userId = ? AND itemId = ?",T,i);return new Response(JSON.stringify(s),{headers:{"content-type":"application/json;charset=UTF-8"}})}let u=new i.AppRouteRouteModule({definition:{kind:E.x.APP_ROUTE,page:"/api/watchlist/route",pathname:"/api/watchlist",filename:"route",bundlePath:"app/api/watchlist/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/watchlist/route.ts",nextConfigOutput:"",userland:T}),{requestAsyncStorage:c,staticGenerationAsyncStorage:d,serverHooks:I,headerHooks:A,staticGenerationBailout:R}=u,m="/api/watchlist/route";function N(){return(0,s.patchFetch)({serverHooks:I,staticGenerationAsyncStorage:d})}},21554:(e,t,a)=>{a.d(t,{Av:()=>s,c2:()=>T,iN:()=>i,oN:()=>r,s5:()=>E});let T=`CREATE TABLE IF NOT EXISTS users (
  username TEXT PRIMARY KEY,
  profilePic TEXT,
  bio TEXT,
  shippingAddress TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  balance INTEGER DEFAULT 0,
  password TEXT
)`,i=`CREATE TABLE IF NOT EXISTS items (
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
)`,s=`CREATE TABLE IF NOT EXISTS purchases (
  id INTEGER PRIMARY KEY DEFAULT AUTO_INCREMENT,
  itemId TEXT,
  buyer TEXT,
  seller TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  quantity INTEGER,
  itemPrice INTEGER,
  status TEXT DEFAULT 'pending',
  txnDigest TEXT
)`,r=`CREATE TABLE IF NOT EXISTS watchlist (
  userId TEXT, 
  itemId TEXT
)`}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),T=t.X(0,[271,382],()=>a(17890));module.exports=T})();