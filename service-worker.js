if(!self.define){let e,a={};const n=(n,i)=>(n=new URL(n+".js",i).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const s=e=>n(e,c),l={module:{uri:c},exports:r,require:s};a[c]=Promise.all(i.map((e=>l[e]||s(e)))).then((e=>(o(...e),r)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"colearna"}),self.skipWaiting(),e.precacheAndRoute([{url:"/colearna/css/app.7a4f2689.css",revision:null},{url:"/colearna/favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"/colearna/img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/colearna/img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/colearna/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/colearna/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/colearna/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/colearna/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/colearna/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/colearna/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/colearna/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/colearna/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/colearna/img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/colearna/img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/colearna/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/colearna/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/colearna/img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"/colearna/index.html",revision:"db7322dc971e623f2f78e9fe3d102bd2"},{url:"/colearna/js/about.d45b3f41.js",revision:null},{url:"/colearna/js/about.d45b3f41.js.map",revision:"c0fbf45a2a4b7c8d9ba318a7fc4e3379"},{url:"/colearna/js/app.64375c93.js",revision:null},{url:"/colearna/js/app.64375c93.js.map",revision:"931d3f8ed2458ed5404789d0699d07e9"},{url:"/colearna/js/chunk-vendors.0809bd60.js",revision:null},{url:"/colearna/js/chunk-vendors.0809bd60.js.map",revision:"de60bb74b4a8ca84f9da3d2ca7df85a6"},{url:"/colearna/manifest.json",revision:"641e66c9c37a28780fabc8409525b8ec"},{url:"/colearna/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
