"use strict";(()=>{var e={};e.id=616,e.ids=[616],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},51253:(e,t,i)=>{i.r(t),i.d(t,{headerHooks:()=>A,originalPathname:()=>I,patchFetch:()=>N,requestAsyncStorage:()=>l,routeModule:()=>u,serverHooks:()=>R,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>m});var a={};i.r(a),i.d(a,{DELETE:()=>d,GET:()=>o,PUT:()=>p});var T=i(10884),E=i(16132),s=i(21040),r=i(64947),n=i(21554);async function o(e,{params:t}){let a=t.id,T=await (0,r.bA)({filename:"./db/items.db",driver:i(20661).Database});await T.exec(n.iN);let E=await T.get("SELECT * FROM items WHERE id = ?",a);return E?new Response(JSON.stringify(E),{headers:{"content-type":"application/json;charset=UTF-8"}}):new Response(JSON.stringify({error:"Item not found"}),{headers:{"content-type":"application/json;charset=UTF-8"},status:404})}async function p(e,{params:t}){let a=await e.json(),T=t.id,E=await (0,r.bA)({filename:"./db/items.db",driver:i(20661).Database}),s=await E.run("UPDATE items SET title = ?, description = ?, price = ?, image = ?, totalSupply = ?, availableSupply = ?, listed = ? WHERE id = ?",a.title,a.description,a.price,a.image,a.totalSupply,a.availableSupply,a.listed,T);return new Response(JSON.stringify(s),{headers:{"content-type":"application/json;charset=UTF-8"}})}async function d(e,{params:t}){let a=t.id,T=await (0,r.bA)({filename:"./db/items.db",driver:i(20661).Database}),E=await T.run("DELETE FROM items WHERE id = ?",a);return new Response(JSON.stringify(E),{headers:{"content-type":"application/json;charset=UTF-8"}})}let u=new T.AppRouteRouteModule({definition:{kind:E.x.APP_ROUTE,page:"/api/items/[id]/route",pathname:"/api/items/[id]",filename:"route",bundlePath:"app/api/items/[id]/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/items/[id]/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:R,headerHooks:A,staticGenerationBailout:m}=u,I="/api/items/[id]/route";function N(){return(0,s.patchFetch)({serverHooks:R,staticGenerationAsyncStorage:c})}},21554:(e,t,i)=>{i.d(t,{Av:()=>s,c2:()=>a,iN:()=>T,oN:()=>r,s5:()=>E});let a=`CREATE TABLE IF NOT EXISTS users (
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
)`}};var t=require("../../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),a=t.X(0,[271,382],()=>i(51253));module.exports=a})();