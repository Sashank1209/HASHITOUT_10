if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const f=e=>n(e,o),d={module:{uri:o},exports:c,require:f};i[o]=Promise.all(s.map((e=>d[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-e8bda533.js",revision:null},{url:"assets/index-f9d7a0ef.css",revision:null},{url:"index.html",revision:"d5ca5a8bde63b3e130f6cd718c40e9a6"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"153c39e0211dfc149423fd8b3fbf5b4f"},{url:"favicon-16x16.png",revision:"ff6fa5dc02aed530edd22e1772c638c5"},{url:"favicon-32x32.png",revision:"aeacffe77b67be3bb7dbe21524c25599"},{url:"pwa-192x192.png",revision:"83c664b208c1bf42e49262e6548f42f1"},{url:"pwa-512x512.png",revision:"b559583635843a2f65008d340778f582"},{url:"manifest.webmanifest",revision:"b4abd3659b914dc374496eea414cbbc8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));