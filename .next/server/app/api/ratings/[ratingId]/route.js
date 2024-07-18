"use strict";(()=>{var e={};e.id=458,e.ids=[458],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},76224:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>c,originalPathname:()=>l,patchFetch:()=>m,requestAsyncStorage:()=>R,routeModule:()=>u,serverHooks:()=>I,staticGenerationAsyncStorage:()=>A,staticGenerationBailout:()=>g});var i={};a.r(i),a.d(i,{DELETE:()=>d,GET:()=>o,PUT:()=>p});var r=a(10884),T=a(16132),E=a(21040),n=a(64947),s=a(21554);async function o(e,{params:t}){let i=t.ratingId,r=await (0,n.bA)({filename:"./db/ratings.db",driver:a(20661).Database});await r.exec(s.s5);let T=await r.get("SELECT * FROM ratings WHERE id = ?",i);return T?new Response(JSON.stringify(T),{headers:{"content-type":"application/json;charset=UTF-8"}}):new Response(JSON.stringify({error:"Rating not found"}),{headers:{"content-type":"application/json;charset=UTF-8"},status:404})}async function p(e,{params:t}){let i=await e.json(),r=t.ratingId,T=await (0,n.bA)({filename:"./db/ratings.db",driver:a(20661).Database}),E=await T.run("UPDATE ratings SET stars = ?, comment = ? WHERE id = ?",i.stars,i.comment,r);return new Response(JSON.stringify(E),{headers:{"content-type":"application/json;charset=UTF-8"}})}async function d(e,{params:t}){let i=t.ratingId,r=await (0,n.bA)({filename:"./db/ratings.db",driver:a(20661).Database}),T=await r.run("DELETE FROM ratings WHERE id = ?",i);return new Response(JSON.stringify(T),{headers:{"content-type":"application/json;charset=UTF-8"}})}let u=new r.AppRouteRouteModule({definition:{kind:T.x.APP_ROUTE,page:"/api/ratings/[ratingId]/route",pathname:"/api/ratings/[ratingId]",filename:"route",bundlePath:"app/api/ratings/[ratingId]/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/ratings/[ratingId]/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:R,staticGenerationAsyncStorage:A,serverHooks:I,headerHooks:c,staticGenerationBailout:g}=u,l="/api/ratings/[ratingId]/route";function m(){return(0,E.patchFetch)({serverHooks:I,staticGenerationAsyncStorage:A})}},21554:(e,t,a)=>{a.d(t,{Av:()=>E,c2:()=>i,iN:()=>r,oN:()=>n,s5:()=>T});let i=`CREATE TABLE IF NOT EXISTS users (
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
)`,n=`CREATE TABLE IF NOT EXISTS watchlist (
  userId TEXT, 
  itemId TEXT
)`}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[271,382],()=>a(76224));module.exports=i})();