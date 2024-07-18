"use strict";(()=>{var e={};e.id=701,e.ids=[701],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},39817:(e,t,T)=>{T.r(t),T.d(t,{headerHooks:()=>l,originalPathname:()=>I,patchFetch:()=>N,requestAsyncStorage:()=>A,routeModule:()=>u,serverHooks:()=>R,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>c});var s={};T.r(s),T.d(s,{GET:()=>o,POST:()=>p});var E=T(10884),r=T(16132),a=T(21040),i=T(64947),n=T(21554);async function o(e){let t=await (0,i.bA)({filename:"./db/users.db",driver:T(20661).Database});await t.exec(n.c2);let s=await t.all("SELECT * FROM users");return new Response(JSON.stringify(s),{headers:{"content-type":"application/json;charset=UTF-8"}})}async function p(e){let t=await e.json(),s=await (0,i.bA)({filename:"./db/users.db",driver:T(20661).Database});await s.exec(n.c2);let E=await s.run("INSERT INTO users (username, profilePic, bio, shippingAddress, password) VALUES (?, ?, ?, ?, ?)",t.username,t.profilePic,t.bio,t.shippingAddress,t.password);return new Response(JSON.stringify(E),{headers:{"content-type":"application/json;charset=UTF-8"}})}let u=new E.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/users/route",pathname:"/api/users",filename:"route",bundlePath:"app/api/users/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/users/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:A,staticGenerationAsyncStorage:d,serverHooks:R,headerHooks:l,staticGenerationBailout:c}=u,I="/api/users/route";function N(){return(0,a.patchFetch)({serverHooks:R,staticGenerationAsyncStorage:d})}},21554:(e,t,T)=>{T.d(t,{Av:()=>a,c2:()=>s,iN:()=>E,oN:()=>i,s5:()=>r});let s=`CREATE TABLE IF NOT EXISTS users (
  username TEXT PRIMARY KEY,
  profilePic TEXT,
  bio TEXT,
  shippingAddress TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  balance INTEGER DEFAULT 0,
  password TEXT
)`,E=`CREATE TABLE IF NOT EXISTS items (
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
)`,r=`CREATE TABLE IF NOT EXISTS ratings (
  id INTEGER PRIMARY KEY DEFAULT AUTO_INCREMENT,
  target TEXT,
  author TEXT,
  stars INTEGER,
  comment TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)`,a=`CREATE TABLE IF NOT EXISTS purchases (
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
)`}};var t=require("../../../webpack-runtime.js");t.C(e);var T=e=>t(t.s=e),s=t.X(0,[271,382],()=>T(39817));module.exports=s})();