"use strict";(()=>{var e={};e.id=802,e.ids=[802],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},49864:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>R,originalPathname:()=>d,patchFetch:()=>I,requestAsyncStorage:()=>u,routeModule:()=>o,serverHooks:()=>m,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>A});var i={};a.r(i),a.d(i,{GET:()=>n,POST:()=>p});var s=a(10884),r=a(16132),T=a(21040),E=a(64947),l=a(21554);async function n(e){let t=e.nextUrl.searchParams,i=t.get("user"),s=t.get("listed"),r=t.get("search"),T=t.get("category"),n=t.get("sort"),p=await (0,E.bA)({filename:"./db/items.db",driver:a(20661).Database});await p.exec(l.iN);let o="SELECT * FROM items",u=[i?{params:[i],sql:"owner = ?"}:null,s?{params:[s],sql:"listed = ?"}:null,r?{params:[`%${r}%`,`%${r}%`],sql:"(title LIKE ? OR description LIKE ?)"}:null,T?{params:[T],sql:"category = ?"}:null].filter(e=>null!==e),c=n?{params:[],sql:"priceAsc"===n?"ORDER BY price ASC":"priceDesc"===n?"ORDER BY price DESC":"newest"===n?"ORDER BY timestamp DESC":"oldest"===n?"ORDER BY timestamp ASC":""}:null,m=u.length>0?`${o} WHERE ${u.map(e=>e?.sql).join(" AND ")} ${c?c.sql:""}`:`${o} ${c?c.sql:""}`;console.log("query",m);let R=await p.all(m,u.map(e=>e?.params).flat());return new Response(JSON.stringify(R),{headers:{"content-type":"application/json;charset=UTF-8"}})}async function p(e){let t=await e.json(),i=await (0,E.bA)({filename:"./db/items.db",driver:a(20661).Database});await i.exec(l.iN);let s=await i.run("INSERT INTO items (id, title, description, price, image, owner, totalSupply, availableSupply, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",t.id,t.title,t.description,t.price,t.image,t.owner,t.totalSupply,t.availableSupply,t.category);return new Response(JSON.stringify(s),{headers:{"content-type":"application/json;charset=UTF-8"}})}let o=new s.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/items/route",pathname:"/api/items",filename:"route",bundlePath:"app/api/items/route"},resolvedPagePath:"/Users/wikiwoo/Desktop/WEBX/trial/app/api/items/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:u,staticGenerationAsyncStorage:c,serverHooks:m,headerHooks:R,staticGenerationBailout:A}=o,d="/api/items/route";function I(){return(0,T.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:c})}},21554:(e,t,a)=>{a.d(t,{Av:()=>T,c2:()=>i,iN:()=>s,oN:()=>E,s5:()=>r});let i=`CREATE TABLE IF NOT EXISTS users (
  username TEXT PRIMARY KEY,
  profilePic TEXT,
  bio TEXT,
  shippingAddress TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  balance INTEGER DEFAULT 0,
  password TEXT
)`,s=`CREATE TABLE IF NOT EXISTS items (
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
)`,T=`CREATE TABLE IF NOT EXISTS purchases (
  id INTEGER PRIMARY KEY DEFAULT AUTO_INCREMENT,
  itemId TEXT,
  buyer TEXT,
  seller TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  quantity INTEGER,
  itemPrice INTEGER,
  status TEXT DEFAULT 'pending',
  txnDigest TEXT
)`,E=`CREATE TABLE IF NOT EXISTS watchlist (
  userId TEXT, 
  itemId TEXT
)`}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[271,382],()=>a(49864));module.exports=i})();