const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./QpMCZZYB.js","./DAn_TZHb.js","./entry.BfGmsZvA.css"])))=>i.map(i=>d[i]);
import{ac as d,ad as w,_ as p,ae as l}from"./DAn_TZHb.js";async function g(t,a){return await $fetch(`/api/content/${a}/database.sql`,{context:{},responseType:"text",headers:{"content-type":"text/plain"},query:{v:d[String(a)],t:void 0}})}async function S(t,a="gzip"){var s;const e=Uint8Array.from(atob(t),u=>u.charCodeAt(0)),r=(s=new Response(new Blob([e])).body)==null?void 0:s.pipeThrough(new DecompressionStream(a));return(await new Response(r).text()).split(`
`)}function f(t,a){const e=b(t),n={...a};for(const r in n)e[r]==="json"&&n[r]&&n[r]!=="undefined"&&(n[r]=JSON.parse(n[r])),e[r]==="boolean"&&n[r]!=="undefined"&&(n[r]=!!n[r]);for(const r in n)n[r]==="NULL"&&(n[r]=void 0);return n}function b(t){const a=t.match(/FROM\s+(\w+)/);if(!a)return{};const e=w[h(a[1])];return(e==null?void 0:e.fields)||{}}function h(t){return t.replace(/^_content_/,"")}let o;const m={},i={};function D(t){async function a(e){return o||(i._=i._||_(),o=await i._,i._=void 0),m[String(e)]||(i[String(e)]=i[String(e)]||y(e),await i[String(e)],m[String(e)]="loaded",i[String(e)]=void 0),o}return{all:async(e,n)=>(await a(t),o.exec({sql:e,bind:n,rowMode:"object",returnValue:"resultRows"}).map(r=>f(e,r))),first:async(e,n)=>(await a(t),f(e,o.exec({sql:e,bind:n,rowMode:"object",returnValue:"resultRows"}).shift())),exec:async(e,n)=>{await a(t),await o.exec({sql:e,bind:n})}}}async function _(){if(!o){const t=await p(()=>import("./QpMCZZYB.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>e.default);globalThis.sqlite3ApiConfig={silent:!0,debug:(...e)=>console.debug(...e),warn:(...e)=>{String(e[0]).includes("OPFS sqlite3_vfs")||console.warn(...e)},error:(...e)=>console.error(...e),log:(...e)=>console.log(...e)};const a=await t();o=new a.oo1.DB}return o}async function y(t){if(window.sessionStorage.getItem("previewToken"))return o;let a=null;const e=`checksum_${t}`,n=`collection_${t}`;let r="matched";try{const c=o.exec({sql:`SELECT * FROM ${l.info} where id = '${e}'`,rowMode:"object",returnValue:"resultRows"}).shift();(c==null?void 0:c.version)!==d[String(t)]&&(r="mismatch")}catch{r="missing"}if(r!=="matched"){if(window.localStorage.getItem(`content_${e}`)===d[String(t)]&&(a=window.localStorage.getItem(`content_${n}`)),!a){a=await g(void 0,String(t));try{window.localStorage.setItem(`content_${e}`,d[String(t)]),window.localStorage.setItem(`content_${n}`,a)}catch(s){console.error("Database integrity check failed, rebuilding database",s)}}const c=await S(a);await o.exec({sql:`DROP TABLE IF EXISTS ${l[String(t)]}`}),r==="mismatch"&&await o.exec({sql:`DELETE FROM ${l.info} WHERE id = '${e}'`});for(const s of c)try{await o.exec(s)}catch(u){console.error("Error executing command",u)}}return o}export{D as loadDatabaseAdapter};
