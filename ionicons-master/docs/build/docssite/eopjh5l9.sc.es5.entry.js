/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};DocsSite.loadBundle("eopjh5l9",["exports","./chunk-4e065e0c.js"],function(t,e){var n=window.DocsSite.h,o=function(){function t(){this.isSticky=!1,this.query="",this.isSearchVisible=!1}return t.prototype.handleScroll=function(){requestAnimationFrame(this.checkScroll.bind(this))},t.prototype.handleResize=function(){var t=this;requestAnimationFrame(function(){window.innerWidth>768&&(t.el.querySelector("nav").style.display="",t.el.classList.remove("show-mobile-menu"),document.body.classList.remove("no-scroll"),t.isMobileMenuShown=!1)})},t.prototype.checkScroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.isSticky=t>30},t.prototype.showNav=function(){if(!this.isMobileMenuShown){this.isMobileMenuShown=!0;var t=this.el.querySelector("nav");t.style.display="flex",setTimeout(function(){t.classList.add("show-mobile-menu"),document.body.classList.add("no-scroll")},1)}},t.prototype.hideNav=function(){if(this.isMobileMenuShown){this.isMobileMenuShown=!1;var t=this.el.querySelector("nav");t.classList.remove("show-mobile-menu"),setTimeout(function(){t.style.display="none",document.body.classList.remove("no-scroll")},300)}},t.prototype.render=function(){var t=this;return n("header",{class:(this.isSearchVisible?"visible-search":"")+" "+(this.isSticky?"overlay":"")},n("div",{class:"container"},n("div",{class:"logo"},n("stencil-route-link",{url:"/",exact:!0},n("svg",{width:"32px",height:"32px",viewBox:"0 0 32 32"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{id:"icon","fill-rule":"nonzero"},n("circle",{id:"circle",fill:"#EAEEF5",cx:"16",cy:"16",r:"16"}),n("circle",{id:"circle_copy",fill:"#B4C1D8",cx:"16",cy:"16",r:"11"}),n("circle",{id:"circle_copy_2",fill:"#647AA1",cx:"16",cy:"16",r:"6"}),n("circle",{id:"circle_copy_3",fill:"#647AA1",cx:"23.5",cy:"8.5",r:"2"})))),"Ionicons"),n("span",{class:"version"},this.version)),n("icon-search",{query:this.query,size:"small"}),n("nav",null,n("stencil-route-link",{class:"nav__item",url:"/",exact:!0,onClick:this.hideNav.bind(this)},"Icons"),n("stencil-route-link",{class:"nav__item",url:"/usage",onClick:function(){t.toggleHeaderSearch.emit("hide"),t.hideNav()}},"Usage"),n("a",{class:"nav__item",href:"https://github.com/ionic-team/ionicons"},"Github",n("svg",{width:"12px",height:"12px",viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{transform:"translate(0,1)"},n("rect",{id:"bg",fill:"#e3e8f1",x:"0",y:"2",width:"9",height:"9",rx:"1.5"}),n("path",{d:"M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z",id:"arrow",fill:"#A4AEC3"})))),n("span",{class:"close",onClick:this.hideNav.bind(this)},n("i",{class:"ion ion-md-close"}))),n("a",{class:"btn sm-hide",href:"/ionicons.designerpack.zip"},n("svg",{width:"9px",height:"11px",viewBox:"0 0 9 11",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",null,n("rect",{id:"bg",fill:"#BAC3D1",x:"0",y:"9",width:"9",height:"2",rx:"1"}),n("path",{d:"M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z",id:"arrow",fill:"#94A0B8"}))),"Designer pack"),n("span",{class:"more",onClick:this.showNav.bind(this)},n("i",{class:"ion ion-md-more"}))))},Object.defineProperty(t,"is",{get:function(){return"header-bar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},isMobileMenuShown:{state:!0},isSearchVisible:{type:Boolean,attr:"is-search-visible"},isSticky:{state:!0},query:{type:String,attr:"query"},version:{type:String,attr:"version"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"toggleHeaderSearch",method:"toggleHeaderSearch",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:scroll",method:"handleScroll",passive:!0},{name:"window:resize",method:"handleResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"header-bar header{-webkit-transition:border .6s;transition:border .6s;position:fixed;width:100%;top:0;left:0;right:0;background:#fff;z-index:999;border-bottom:1px solid transparent;height:64px}header-bar header.overlay{border-bottom:1px solid rgba(0,0,0,.05)}header-bar .container,header-bar .logo,header-bar .logo a,header-bar nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}header-bar .logo,header-bar nav{-ms-flex:0 0 auto;flex:0 0 auto}header-bar nav{-ms-flex-align:baseline;align-items:baseline}header-bar icon-search{-webkit-transition:opacity .5s;transition:opacity .5s;-ms-flex:1;flex:1;padding-left:60px;padding-right:60px;opacity:0;pointer-events:none}header-bar .visible-search icon-search{opacity:1;pointer-events:auto}header-bar .container{-ms-flex-pack:justify;justify-content:space-between;padding-top:12px;padding-bottom:12px}header-bar .logo a{font-weight:700;font-size:16px;color:var(--color-shark)}header-bar .logo svg{margin-right:10px}header-bar .logo .version{margin-left:10px;font-size:10px;font-weight:600;color:var(--color-oslo-gray);background-color:var(--color-catskill-white);border-radius:4px;padding:1px 5px;position:relative;top:-2px}header-bar a{text-decoration:none}header-bar .nav__item+.nav__item,header-bar nav+.btn{margin-left:30px}header-bar .nav__item{font-size:13px;font-weight:600}header-bar .nav__item,header-bar .nav__item a{-webkit-transition:color .3s;transition:color .3s;color:var(--color-pale-sky)}header-bar .nav__item:hover,header-bar .nav__item a:not(.link-active):hover{color:var(--color-shark)}header-bar .nav__item .link-active{color:var(--color-heather);cursor:default}header-bar .nav__item svg{margin-left:6px}header-bar .nav__item:hover svg #arrow{-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)}header-bar .btn svg{margin-right:6px}header-bar .btn:hover svg #arrow{-webkit-transform:translateY(1px);transform:translateY(1px)}header-bar .more{padding:0 8px;line-height:28px;color:var(--color-dodger-blue);cursor:pointer}header-bar .more,header-bar nav span.close{font-size:28px;display:none}\@media screen and (max-width:992px){header-bar nav>*+*{margin-left:18px}header-bar icon-search{padding-left:30px;padding-right:30px}}\@media screen and (max-width:768px){header-bar .btn.sm-hide{display:none}header-bar .close,header-bar .more{cursor:pointer}header-bar .more{display:block}header-bar .nav__item+.nav__item,header-bar nav+.btn{margin-left:0;margin-top:30px}header-bar nav{-webkit-transition:opacity .3s;transition:opacity .3s;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:99999;background-image:linear-gradient(-223deg,#363e49,#1c1e21);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;opacity:0;display:none}header-bar nav .close{margin:0;position:absolute;top:14px;right:18px;color:#fff;cursor:pointer}header-bar .nav__item{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(8px);transform:translateY(8px)}header-bar .nav__item,header-bar .nav__item a{font-size:28px;color:hsla(0,0%,100%,.9)}header-bar .nav__item .link-active{color:hsla(0,0%,100%,.3)}header-bar .nav__item:hover,header-bar .nav__item a:not(.link-active):hover{color:hsla(0,0%,100%,.9)}header-bar .nav__item svg #bg{opacity:.2}header-bar nav.show-mobile-menu{opacity:1}header-bar nav.show-mobile-menu .nav__item{-webkit-transform:translateY(0);transform:translateY(0)}header-bar nav.show-mobile-menu .close{display:block}header-bar icon-search{padding-left:20px;padding-right:15px}}\@media screen and (max-width:520px){header-bar .version{display:none}}"},enumerable:!0,configurable:!0}),t}(),i=function(){function t(){this.data={version:void 0,icons:[]},this.query="",this.isHeaderSearchVisible=!1}return t.prototype.handleScroll=function(){requestAnimationFrame(this.checkScroll.bind(this))},t.prototype.searchHandler=function(t){this.query=t.detail},t.prototype.toggleHandler=function(t){this.isHeaderSearchVisible="show"===t.detail},t.prototype.componentWillLoad=function(){this.loadData()},t.prototype.loadData=function(){return r(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,fetch("/data.json")];case 1:return[4,e.sent().json()];case 2:return t=e.sent(),this.data=t,this.data.icons=t.icons.map(function(t){return t.icons=t.icons.reverse(),t.name=t.icons[0].split("-").slice(1).join("-"),t}),[2]}})})},t.prototype.checkScroll=function(){var t=document.querySelector("header .search-input"),e=document.querySelector("icon-list .search-input");if(e&&t){var n=t.querySelector("input"),o=e.querySelector("input");if(e.getBoundingClientRect().top<e.scrollHeight/2){if(this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=!0,o===document.activeElement&&n.focus()}else{if(!this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=!1,n===document.activeElement&&o.focus()}}},t.prototype.render=function(){return[n("header-bar",{version:this.data.version,query:this.query,isSearchVisible:this.isHeaderSearchVisible}),n("stencil-router",null,n("stencil-router-scroll-top",null,n("stencil-route-switch",{scrollTopOffset:0},n("stencil-route",{url:"/",component:"landing-page",exact:!0,componentProps:{query:this.query,data:this.data}}),n("stencil-route",{url:"/usage",component:"usage-page",componentProps:{data:this.data}}),n("stencil-route",{component:"notfound-page"}))))]},Object.defineProperty(t,"is",{get:function(){return"ionicons-site"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{data:{state:!0},isHeaderSearchVisible:{state:!0},query:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:scroll",method:"handleScroll",passive:!0},{name:"hasSearched",method:"searchHandler"},{name:"toggleHeaderSearch",method:"toggleHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"stencil-router>div{height:100%}"},enumerable:!0,configurable:!0}),t}(),r=function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})},a=function(){function t(){this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}return t.prototype.computeMatch=function(t){var n=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!n)return this.previousMatch=this.match,this.match=e.matchPath(t.pathname,{path:this.url,exact:this.exact,strict:!0})},t.prototype.componentDidUpdate=function(){return r(this,void 0,void 0,function(){var t;return __generator(this,function(n){return t={},this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!e.matchesAreEqual(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t),[2]})})},t.prototype.render=function(){if(!this.match||!this.history)return null;var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?n(this.component,Object.assign({},t)):void 0},Object.defineProperty(t,"is",{get:function(){return"stencil-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group",reflectToAttr:!0},history:{type:"Any",attr:"history"},historyType:{type:String,attr:"history-type"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{type:"Any",attr:"match",mutable:!0},routeRender:{type:"Any",attr:"route-render"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:!0,configurable:!0}),t}();e.ActiveRouter.injectProps(a,["location","history","historyType","routeViewsUpdated"]);function s(t){return"stencil-route"===t.tagName.toLocaleLowerCase()}var c=function(){function t(){this.group=window.crypto?([1e7].toString()+-1e3.toString()+-4e3.toString()+-8e3.toString()+-1e11.toString()).replace(/[018]/g,function(t){return(t^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}):((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[]}return t.prototype.componentWillLoad=function(){null!=this.location&&this.regenerateSubscribers(this.location)},t.prototype.regenerateSubscribers=function(t){return n=this,o=void 0,r=function(){var n,o,i=this;return __generator(this,function(r){return null==t?[2]:(n=-1,this.subscribers=Array.prototype.slice.call(this.el.children).filter(s).map(function(o,i){var r=e.matchPath(t.pathname,{path:o.url,exact:o.exact,strict:!0});return r&&-1===n&&(n=i),{el:o,match:r}}),-1===n?[2]:this.activeIndex===n?(this.subscribers[n].el.match=this.subscribers[n].match,[2]):(this.activeIndex=n,o=this.subscribers[this.activeIndex],this.scrollTopOffset&&(o.el.scrollTopOffset=this.scrollTopOffset),o.el.group=this.group,o.el.match=o.match,o.el.componentUpdated=function(t){i.queue.write(function(){i.subscribers.forEach(function(t,e){if(t.el.componentUpdated=void 0,e===i.activeIndex)return t.el.style.display="";i.scrollTopOffset&&(t.el.scrollTopOffset=i.scrollTopOffset),t.el.group=i.group,t.el.match=null,t.el.style.display="none"})}),i.routeViewsUpdated&&i.routeViewsUpdated(Object.assign({scrollTopOffset:i.scrollTopOffset},t))},[2]))})},new((i=void 0)||(i=Promise))(function(t,e){function a(t){try{c(r.next(t))}catch(t){e(t)}}function s(t){try{c(r.throw(t))}catch(t){e(t)}}function c(e){e.done?t(e.value):new i(function(t){t(e.value)}).then(a,s)}c((r=r.apply(n,o||[])).next())});var n,o,i,r},t.prototype.render=function(){return n("slot",null)},Object.defineProperty(t,"is",{get:function(){return"stencil-route-switch"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},group:{type:String,attr:"group",reflectToAttr:!0},location:{type:"Any",attr:"location",watchCallbacks:["regenerateSubscribers"]},queue:{context:"queue"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"}}},enumerable:!0,configurable:!0}),t}();function l(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.error.apply(console,e)}function u(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.warn.apply(console,e)}e.ActiveRouter.injectProps(c,["location","routeViewsUpdated"]);var h=function(){var t,e=[];return{setPrompt:function(e){return u(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,i){if(null!=t){var r="function"==typeof t?t(e,n):t;"string"==typeof r?"function"==typeof o?o(r,i):(u(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==r)}else i(!0)},appendListener:function(t){var n=!0,o=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];n&&t.apply(void 0,e)};return e.push(o),function(){n=!1,e=e.filter(function(t){return t!==o})}},notifyListeners:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.forEach(function(e){return e.apply(void 0,t)})}}},f=function(t){void 0===t&&(t="scrollPositions");var n=new Map;if(e.storageAvailable("sessionStorage")){var o=window.sessionStorage.getItem(t);n=o?new Map(JSON.parse(o)):n}function i(t,o){if(n.set(t,o),e.storageAvailable("sessionStorage")){var i=[];n.forEach(function(t,e){i.push([e,t])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(i))}}return"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:i,get:function(t){return n.get(t)},has:function(t){return n.has(t)},capture:function(t){i(t,[window.scrollX,window.scrollY])}}},p=function(){try{return window.history.state||{}}catch(t){return{}}},d={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+e.stripLeadingSlash(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:e.stripLeadingSlash,decodePath:e.addLeadingSlash},slash:{encodePath:e.addLeadingSlash,decodePath:e.addLeadingSlash}},y=function(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},g=function(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};function m(t,e){var n=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:n})}var v={browser:function(t){void 0===t&&(t={}),l(e.canUseDOM,"Browser history needs a DOM");var n=window.history,o=e.supportsHistory(),i=!e.supportsPopStateOnHashChange(),r=f(),a=null!=t.forceRefresh&&t.forceRefresh,s=null!=t.getUserConfirmation?t.getUserConfirmation:e.getConfirmation,c=null!=t.keyLength?t.keyLength:6,d=t.basename?e.stripTrailingSlash(e.addLeadingSlash(t.basename)):"",y=function(t){var n=(t=t||{}).key,o=t.state,i=window.location,r=i.pathname+i.search+i.hash;return u(!d||e.hasBasename(r,d),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+r+'" to begin with "'+d+'".'),d&&(r=e.stripBasename(r,d)),e.createLocation(r,o,n||e.createKey(c))},g=h(),m=function(t){r.capture(H.location.key),Object.assign(H,t),H.location.scrollPosition=r.get(H.location.key),H.length=n.length,g.notifyListeners(H.location,H.action)},v=function(t){e.isExtraneousPopstateEvent(t)||S(y(t.state))},b=function(){S(y(p()))},w=!1,S=function(t){w?(w=!1,m()):g.confirmTransitionTo(t,"POP",s,function(e){e?m({action:"POP",location:t}):P(t)})},P=function(t){var e=x.indexOf(H.location.key);-1===e&&(e=0);var n=x.indexOf(t.key);-1===n&&(n=0);var o=e-n;o&&(w=!0,T(o))},L=y(p()),x=[L.key],O=function(t){return d+e.createPath(t)},T=function(t){n.go(t)},k=0,A=function(t){1===(k+=t)?(e.addEventListener(window,"popstate",v),i&&e.addEventListener(window,"hashchange",b)):0===k&&(e.removeEventListener(window,"popstate",v),i&&e.removeEventListener(window,"hashchange",b))},j=!1,H={length:n.length,action:"POP",location:L,createHref:O,push:function(t,i){u(!("object"==typeof t&&void 0!==t.state&&void 0!==i),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var r=e.createLocation(t,i,e.createKey(c),H.location);g.confirmTransitionTo(r,"PUSH",s,function(t){if(t){var e=O(r),i=r.state;if(o)if(n.pushState({key:r.key,state:i},void 0,e),a)window.location.href=e;else{var s=x.indexOf(H.location.key),c=x.slice(0,-1===s?0:s+1);c.push(r.key),x=c,m({action:"PUSH",location:r})}else u(void 0===i,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=e}})},replace:function(t,i){u(!("object"==typeof t&&void 0!==t.state&&void 0!==i),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var r=e.createLocation(t,i,e.createKey(c),H.location);g.confirmTransitionTo(r,"REPLACE",s,function(t){if(t){var e=O(r),i=r.state;if(o)if(n.replaceState({key:r.key,state:i},void 0,e),a)window.location.replace(e);else{var s=x.indexOf(H.location.key);-1!==s&&(x[s]=r.key),m({action:"REPLACE",location:r})}else u(void 0===i,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(e)}})},go:T,goBack:function(){return T(-1)},goForward:function(){return T(1)},block:function(t){void 0===t&&(t="");var e=g.setPrompt(t);return j||(A(1),j=!0),function(){return j&&(j=!1,A(-1)),e()}},listen:function(t){var e=g.appendListener(t);return A(1),function(){A(-1),e()}}};return H},hash:function(t){void 0===t&&(t={}),l(a.canUseDOM,"Hash history needs a DOM");var e=window.history,n=a.supportsGoWithoutReloadUsingHash(),o=null!=t.keyLength?t.keyLength:6,i=t.getUserConfirmation,r=void 0===i?s:i,a=t.__chunk_1,s=t.getConfirmation,c=t.hashType,f=void 0===c?"slash":c,p=t.basename?a.stripTrailingSlash(a.addLeadingSlash(t.basename)):"",m=d[f],v=m.encodePath,b=m.decodePath,w=function(){var t=b(y());return u(!p||a.hasBasename(t,p),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+p+'".'),p&&(t=a.stripBasename(t,p)),a.createLocation(t,void 0,a.createKey(o))},S=h(),P=function(t){Object.assign(R,t),R.length=e.length,S.notifyListeners(R.location,R.action)},L=!1,x=null,O=function(){var t=y(),e=v(t);if(t!==e)g(e);else{var n=w();if(!L&&a.locationsAreEqual(R.location,n))return;if(x===a.createPath(n))return;x=null,T(n)}},T=function(t){L?(L=!1,P()):S.confirmTransitionTo(t,"POP",r,function(e){e?P({action:"POP",location:t}):k(t)})},k=function(t){var e=E.lastIndexOf(a.createPath(R.location));-1===e&&(e=0);var n=E.lastIndexOf(a.createPath(t));-1===n&&(n=0);var o=e-n;o&&(L=!0,U(o))},A=y(),j=v(A);A!==j&&g(j);var H=w(),E=[a.createPath(H)],U=function(t){u(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)},_=0,q=function(t){1===(_+=t)?a.addEventListener(window,"hashchange",O):0===_&&a.removeEventListener(window,"hashchange",O)},M=!1,R={length:e.length,action:"POP",location:H,createHref:function(t){return"#"+v(p+a.createPath(t))},push:function(t,e){u(void 0===e,"Hash history cannot push state; it is ignored");var n=a.createLocation(t,void 0,a.createKey(o),R.location);S.confirmTransitionTo(n,"PUSH",r,function(t){if(t){var e=a.createPath(n),o=v(p+e);if(y()!==o){x=e,window.location.hash=o;var i=E.lastIndexOf(a.createPath(R.location)),r=E.slice(0,-1===i?0:i+1);r.push(e),E=r,P({action:"PUSH",location:n})}else u(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),P()}})},replace:function(t,e){u(void 0===e,"Hash history cannot replace state; it is ignored");var n=a.createLocation(t,void 0,a.createKey(o),R.location);S.confirmTransitionTo(n,"REPLACE",r,function(t){if(t){var e=a.createPath(n),o=v(p+e);y()!==o&&(x=e,g(o));var i=E.indexOf(a.createPath(R.location));-1!==i&&(E[i]=e),P({action:"REPLACE",location:n})}})},go:U,goBack:function(){return U(-1)},goForward:function(){return U(1)},block:function(t){void 0===t&&(t="");var e=S.setPrompt(t);return M||(q(1),M=!0),function(){return M&&(M=!1,q(-1)),e()}},listen:function(t){var e=S.appendListener(t);return q(1),function(){q(-1),e()}}};return R}},b=function(){function t(){var t=this;this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=function(e){void 0===e&&(e={}),t.scrollTo(e.scrollTopOffset||t.scrollTopOffset)}}return t.prototype.componentWillLoad=function(){var t=this;this.history=v[this.historyType](),this.history.listen(function(e){return n=t,o=void 0,r=function(){return __generator(this,function(t){return e=m(e,this.root),this.location=e,[2]})},new((i=void 0)||(i=Promise))(function(t,e){function a(t){try{c(r.next(t))}catch(t){e(t)}}function s(t){try{c(r.throw(t))}catch(t){e(t)}}function c(e){e.done?t(e.value):new i(function(t){t(e.value)}).then(a,s)}c((r=r.apply(n,o||[])).next())});var n,o,i,r}),this.location=m(this.history.location,this.root)},t.prototype.scrollTo=function(t){var e=this;if(null!=t&&!this.isServer&&this.history)return"POP"===this.history.action&&Array.isArray(this.history.location.scrollPosition)?this.queue.write(function(){e.history&&e.history.location&&Array.isArray(e.history.location.scrollPosition)&&window.scrollTo(e.history.location.scrollPosition[0],e.history.location.scrollPosition[1])}):this.queue.write(function(){window.scrollTo(0,t)})},t.prototype.render=function(){if(this.location&&this.history)return n(e.ActiveRouter.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},n("slot",null))},Object.defineProperty(t,"is",{get:function(){return"stencil-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},isServer:{context:"isServer"},location:{state:!0},queue:{context:"queue"},root:{type:String,attr:"root"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},titleSuffix:{type:String,attr:"title-suffix"}}},enumerable:!0,configurable:!0}),t}();t.HeaderBar=o,t.IoniconsSite=i,t.StencilRoute=a,t.StencilRouteSwitch=c,t.StencilRouter=b,Object.defineProperty(t,"__esModule",{value:!0})});