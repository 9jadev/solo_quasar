(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={1:0},o={1:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={2:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"6bf6b897",3:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;u.push([0,0]),n()})({0:function(e,t,n){e.exports=n("7d3e")},1411:function(e,t,n){},"78ab":function(e,t,n){},"7d3e":function(e,t,n){"use strict";n.r(t);var r=n("52b5"),a=n.n(r),o=(n("67c8"),n("c1c3"),n("549c")),u=n.n(o),c=(n("2233"),n("2f72"),n("838b"),n("78ab"),n("e832")),i=n("b661"),s=n("8c49"),l=n("f846"),f=n("8738"),p=n("d09b"),d=n("6471"),h=n("9ad2"),b=n("0de0"),m=n("692f"),v=n("e0e9"),g=n("6c44"),y=n("dc7c"),k=n("d376"),w=n("ec6d"),x=n("a3be"),T=n("7213"),P=n("a667"),O=n("b2bf"),Q=n("f6b1");c["a"].use(l["a"],{config:{},lang:i["a"],iconSet:s["a"],components:{QHeader:f["a"],QFooter:p["a"],QTabs:d["a"],QTab:h["a"],QRouteTab:b["a"],QList:m["a"],QItem:v["a"],QItemSection:g["a"],QItemLabel:y["a"],QCheckbox:k["a"],QDialog:w["a"],QInput:x["a"],QDate:T["a"],QTime:P["a"]},plugins:{Dialog:O["a"],ClosePopup:Q["a"]}});var j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},S=[],E={name:"App"},_=E,C=(n("84c4"),n("a6c2")),L=Object(C["a"])(_,j,S,!1,null,null,null),A=L.exports,q=n("94ea"),D=(n("e612"),n("6c31")),I={tasks:{}},N={updateTask:function(e,t){console.log("payload mutation",t),Object.assign(e.tasks[t.id],t.updates)},deleteTask:function(e,t){c["a"].delete(e.tasks,t)},addTask:function(e,t){c["a"].set(e.tasks,t.id,t.task)}},B={updateTask:function(e,t){var n=e.commit;n("updateTask",t)},deleteTask:function(e,t){var n=e.commit;n("deleteTask",t)},addTask:function(e,t){var n=e.commit,r=Object(D["a"])(),a={id:r,task:t};n("addTask",a)}},M={tasks:function(e){return e.tasks}},$={namespaced:!0,state:I,mutations:N,actions:B,getters:M};c["a"].use(q["a"]);var V=function(){var e=new q["a"].Store({modules:{tasks:$},strict:!1});return e},F=n("4af9"),H=[{path:"/",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"9b31"))},children:[{path:"",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"d27f"))}},{path:"/settings",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"8c5f"))}}]}];H.push({path:"*",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"f364"))}});var J=H;c["a"].use(F["a"]);var K=function(){var e=new F["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:J,mode:"hash",base:""});return e},R=function(){return U.apply(this,arguments)};function U(){return U=u()(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof V){e.next=6;break}return e.next=3,V({Vue:c["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=V;case 7:if(t=e.t0,"function"!==typeof K){e.next=14;break}return e.next=11,K({Vue:c["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=K;case 15:return n=e.t1,t.$router=n,r={el:"#q-app",router:n,store:t,render:function(e){return e(A)}},e.abrupt("return",{app:r,store:t,router:n});case 19:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}var z=n("7338"),G=n.n(z);function W(){return X.apply(this,arguments)}function X(){return X=u()(a.a.mark((function e(){var t,n,r,o,u,i,s,l,f;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,u=!0,i=function(e){u=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),l=[void 0],f=0;case 11:if(!(!0===u&&f<l.length)){e.next=29;break}if("function"===typeof l[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[f]({app:n,router:o,store:r,Vue:c["a"],ssrContext:null,redirect:i,urlPath:s});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!1!==u){e.next=31;break}return e.abrupt("return");case 31:document.addEventListener("deviceready",(function(){c["a"].prototype.$q.cordova=window.cordova,new c["a"](n)}),!1);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),X.apply(this,arguments)}c["a"].prototype.$axios=G.a,W()},"84c4":function(e,t,n){"use strict";var r=n("1411"),a=n.n(r);a.a}});