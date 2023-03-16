!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired76b;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequired76b=a),a.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("5xtVg",(function(t,r){e(t.exports,"onOpenModal",(function(){return o})),e(t.exports,"closeModal",(function(){return s}));var n=a("hiFhO");function o(){var e=window.innerWidth-n.refs.body.clientWidth;e&&(n.refs.body.style.marginRight=e+"px"),n.refs.overlay.classList.add("visiable"),n.refs.body.classList.add("no-scroll"),window.addEventListener("keydown",i)}function i(e){"Escape"===e.code&&(s(),window.removeEventListener("keydown",i))}function s(){n.refs.overlay.classList.remove("visiable"),n.refs.body.classList.remove("no-scroll"),n.refs.movieDescription.textContent="",n.refs.body.style.marginRight=""}n.refs.overlay.addEventListener("click",(function(e){e.target===n.refs.overlay&&s()}))})),a.register("hiFhO",(function(t,r){e(t.exports,"refs",(function(){return n}));var n={body:document.querySelector("body"),overlay:document.querySelector(".modal-overlay"),content:document.querySelector(".modal-content"),gallery:document.querySelector(".gallery"),galleryLibrary:document.querySelector(".gallery-library"),formRef:document.querySelector(".header__form"),movieDescription:document.querySelector("[data-movie-description]"),team:document.querySelector(".js-team-modal"),wrap:document.querySelector(".modal-team-wrap"),contentTeam:document.querySelector(".modal-team-content"),overlayTeam:document.querySelector(".modal-team-overlay"),btnClose:document.querySelector(".modal-team__close-btn"),mainList:document.querySelector(".main"),containerLib:document.querySelector(".container-lib"),btnWathed:document.querySelector(".js-watched"),btnQueue:document.querySelector(".js-queue"),headerThemeText:document.querySelector(".theme-text"),iconSunBgc:document.querySelector(".theme__icon--sun"),iconMoonBgc:document.querySelector(".theme__icon--moon"),darkBtn:document.querySelector(".header__toolbar-theme"),footer:document.querySelector(".footer"),footerContainer:document.querySelector(".footer__container"),headerLib:document.querySelector(".header__theme--my-lib"),scrollBtn:document.querySelector(".is-show"),scollIcon:document.querySelector(".scroll-top__icon"),spinner:document.querySelector(".js-spinner"),load:document.querySelector("[data-load]"),backdrop:document.querySelector(".backdrop"),openModalBtn:document.querySelector("[data-about-modal-open]"),modal:document.querySelector("[data-about-modal]"),registrationWrapper:document.querySelector(".registrationWrapper"),registerBtn:document.querySelector(".register-btn"),loginBtn:document.querySelector(".login-btn"),changeFormRegister:document.querySelector(".register"),changeFormLogin:document.querySelector(".login"),registerForm:document.querySelector(".register-form"),loginForm:document.querySelector(".login-form"),iconEnter:document.querySelector(".iconEnter"),iconExit:document.querySelector(".iconExit"),loginedWrapper:document.querySelector(".loginedWrapper"),exitBtnFromOnline:document.querySelector(".exitBtnFromOnline"),tuiContainer:document.querySelector(".tui-pagination"),langValue:document.querySelector(".select__lang"),trend:document.querySelector(".select__trend")}})),a.register("jaaYu",(function(r,n){e(r.exports,"serverApi",(function(){return m}));var o=a("bpxeT"),i=a("8MBJY"),s=a("4KMWL"),c=a("8MQK7"),u=a("dPxxm"),l=a("a2hTj"),d=a("hKHmD"),f=a("2TvXO"),p=new WeakMap,m=new(function(){"use strict";function e(){t(i)(this,e),t(c)(this,p,{writable:!0,value:1}),t(d)(this,"totalResults",2e4),t(d)(this,"requestCount",1),t(d)(this,"language","en-US"),t(d)(this,"trend","week"),t(d)(this,"KEY","api_key=7770a554235a470dd8487676c4d97407"),t(d)(this,"baseUrl","https://api.themoviedb.org/3"),t(d)(this,"baseSrc","https://image.tmdb.org/t/p/w500")}return t(l)(e,[{key:"getPopularMovie",value:function(){var e=this;return t(o)(t(f).mark((function r(){var n;return t(f).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,axios({url:"".concat(e.baseUrl,"/trending/movie/").concat(e.trend,"?").concat(e.KEY,"&page=").concat(t(s)(e,p),"&language=").concat(e.language)});case 2:return n=r.sent,r.next=5,n.data;case 5:return r.abrupt("return",r.sent);case 6:case"end":return r.stop()}}),r)})))()}},{key:"getMovieOnDemand",value:function(e){var r=this;return t(o)(t(f).mark((function n(){var o;return t(f).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,axios({url:"".concat(r.baseUrl,"/search/movie?").concat(r.KEY,"&language=").concat(r.language,"&page=").concat(t(s)(r,p),"&include_adult=false&query=").concat(e)});case 2:return o=n.sent,1===r.requestCount&&o.data.results.length&&Notiflix.Notify.success("We found ".concat(o.data.total_results," movies"),{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}),n.next=6,o.data;case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))()}},{key:"getDetailsMovie",value:function(e){var r=this;return t(o)(t(f).mark((function n(){var o;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios({url:"".concat(r.baseUrl,"/movie/").concat(e,"?").concat(r.KEY,"&language=").concat(r.language)});case 3:return o=t.sent,t.next=6,o.data;case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),n,null,[[0,9]])})))()}},{key:"getTrailer",value:function(e){var r=this;return t(o)(t(f).mark((function n(){var o;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("".concat(r.baseUrl,"/movie/").concat(e,"/videos?").concat(r.KEY,"&language=en-US"));case 3:return o=t.sent,t.next=6,o.data;case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),n,null,[[0,9]])})))()}},{key:"getTop",value:function(){var e=this;return t(o)(t(f).mark((function r(){var n;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("".concat(e.baseUrl,"/movie/top_rated?").concat(e.KEY,"&language=").concat(e.language,"&page=").concat(e.getPage()));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),r)})))()}},{key:"getPopular",value:function(){var e=this;return t(o)(t(f).mark((function r(){var n;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("".concat(e.baseUrl,"/movie/popular?").concat(e.KEY,"&language=").concat(e.language,"&page=").concat(e.getPage()));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),r)})))()}},{key:"setPage",value:function(e){t(u)(this,p,e)}},{key:"setTotalResults",value:function(e){this.totalResults=e}},{key:"incrementRequestCount",value:function(){this.requestCount++}},{key:"setRequestCount",value:function(){this.requestCount=1}},{key:"setlang",value:function(e){this.language=e}},{key:"setTrend",value:function(e){this.trend=e}},{key:"getTrend",value:function(){return this.trend}},{key:"getPage",value:function(){return t(s)(this,p)>500?500:t(s)(this,p)}}]),e}())})),a.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){r(i,o,a,s,c,"next",e)}function c(e){r(i,o,a,s,c,"throw",e)}s(void 0)}))}}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("4KMWL",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var o=r.default(e,t,"get");return n.default(e,o)};var r=o(a("1UHsN")),n=o(a("ffZzF"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),a.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),a.register("8MQK7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){n.default(e,t),t.set(e,r)};var r,n=(r=a("5k7tO"))&&r.__esModule?r:{default:r}})),a.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),a.register("dPxxm",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){var a=r.default(e,t,"set");return n.default(e,a,o),o};var r=o(a("1UHsN")),n=o(a("jdVyQ"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}})),a.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n=d;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=S(i,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?m:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=m,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",m="completed",v={};function g(){}function h(){}function y(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(T([])));x&&x!==r&&n.call(x,a)&&(b=x);var L=y.prototype=g.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,i,s){var c=l(e[o],e,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function S(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function q(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(q,this),this.reset(!0)}function T(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:t,done:!0}}return h.prototype=y,c(L,"constructor",y),c(y,"constructor",h),h.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(L),e},e.awrap=function(e){return{__await:e}},_(k.prototype),c(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(L),c(L,s,"Generator"),c(L,a,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("9PJ7S",(function(r,n){e(r.exports,"posterСheck",(function(){return s}));var o=a("jaaYu"),i=a("6plHc");function s(e){return null===e?"".concat(t(i)):"".concat(o.serverApi.baseSrc).concat(e)}})),a.register("6plHc",(function(e,t){e.exports=a("aNJCr").getBundleURL("5ZwWc")+a("iE7OH").resolve("cs03i")})),a.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a.register("jcFG7",(function(t,r){e(t.exports,"options",(function(){return n}));var n={totalItems:a("jaaYu").serverApi.totalResults,itemsPerPage:20,visiblePages:10,centerAlign:!0,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}})),a.register("j1lrD",(function(t,r){e(t.exports,"spinnerPlay",(function(){return i})),e(t.exports,"spinnerStop",(function(){return s}));var n=a("hiFhO"),o=new Spinner({lines:14,length:27,width:20,radius:33,scale:.5,corners:1,speed:1,rotate:18,animation:"spinner-line-shrink",direction:1,color:"#ff6b08",fadeColor:"transparent",top:"49%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"}).spin(n.refs.spinner);function i(){o.spin(n.refs.spinner),n.refs.load.classList.remove("is-hidden")}function s(){n.refs.load.classList.add("is-hidden"),o.stop()}})),a.register("4zVoc",(function(t,r){e(t.exports,"genresArr",(function(){return n}));var n=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]})),a.register("kiFmR",(function(r,n){e(r.exports,"movieDescriptionMurkup",(function(){return s}));var o=a("9PJ7S"),i=a("erQpf"),s=function(e){var r=e.id,n=e.poster_path,a=e.title,s=e.original_title,c=e.popularity,u=e.overview,l=e.genres,d=e.vote_average,f=e.vote_count,p=(0,o.posterСheck)(n),m=u.length>0?u:"Unfortunately, we don't have a description right now",v=[];l.forEach((function(e){var t=e.name;return v.push(t)}));var g=v.length>0?v.join(", "):"Genres not found";return'\n  <div class="movie__description" data-movie-id="'.concat(r,'">\n  <div class="movie__poster-wrappaer">\n    <img src="').concat(p,'" alt="').concat(a,'" class="movie__poster" />\n  </div>\n  <div class="movie__container">\n    <h3 class="movie__title">').concat(a,'</h3>\n    <div class="description__container">\n      <div class="description__title-wrapper">\n        <p class="description__title">Vote / Votes</p>\n        <p class="description__title">Popularity</p>\n        <p class="description__title">Original Title</p>\n        <p class="description__title">Genre</p>\n      </div>\n      <div class="description__text-wrapper">\n        <p class="description__text">\n          <span class="vote vote-accent">').concat(d,'</span>&#47;<span\n            class="vote"\n            >').concat(f,'</span\n          >\n        </p>\n        <p class="description__text description__popularity">').concat(c,'</p>\n        <p class="description__text">').concat(s,'</p>\n        <p class="description__text">').concat(g,'</p>\n      </div>\n    </div>\n    <h4 class="about__title">About</h4>\n    <p class="about__text">').concat(m,'</p>\n    <div class="btn__container">\n      <button type="button" class="modal__btn" data-add-watched></button>\n      <button type="button" class="modal__btn" data-add-queue></button>\n      \n    </div>\n  </div>\n  <button type="button" class="btn-ytb youtube"><svg class="icon-youtube" width="44" height="44">\n      <use href="').concat(t(i),'#icon-youtube"></use>\n    </svg></button>\n  <button type="button" class="modal__close" data-modal-close>\n    <svg class="modal__close-icon" width="18" height="18">\n      <use href="').concat(t(i),'#icon-close"></use>\n    </svg>\n  </button>\n</div>\n  ')}})),a.register("erQpf",(function(e,t){e.exports=a("aNJCr").getBundleURL("5ZwWc")+a("iE7OH").resolve("kxKJ3")})),a.register("4cXS4",(function(t,r){e(t.exports,"onAddWatchClick",(function(){return n})),e(t.exports,"onAddQueueClick",(function(){return o}));var n=function(e){var t=[],r=document.querySelector("[data-add-watched]");if(localStorage.getItem("watch")&&(t=JSON.parse(localStorage.getItem("watch"))),"remove from watched"===r.textContent)return localStorage.setItem("watch",JSON.stringify(t.filter((function(t){return t.id!==e.id})))),void(r.textContent="add to watched");t.push(e),localStorage.setItem("watch",JSON.stringify(t)),r.textContent="remove from watched"},o=function(e){var t=[],r=document.querySelector("[data-add-queue]");if(localStorage.getItem("queue")&&(t=JSON.parse(localStorage.getItem("queue"))),"remove from queue"===r.textContent)return localStorage.setItem("queue",JSON.stringify(t.filter((function(t){return t.id!==e.id})))),void(r.textContent="add to queue");t.push(e),localStorage.setItem("queue",JSON.stringify(t)),r.textContent="remove from queue"}})),a.register("5HOzi",(function(t,r){e(t.exports,"makeWatchTextContent",(function(){return n})),e(t.exports,"makeQueueTextContent",(function(){return o}));var n=function(e){var t=[];localStorage.getItem("watch")&&(t=JSON.parse(localStorage.getItem("watch")));var r=t.some((function(t){return t.id===e.id}));document.querySelector("[data-add-watched]").textContent=r?"remove from watched":"add to watched"},o=function(e){var t=[];localStorage.getItem("queue")&&(t=JSON.parse(localStorage.getItem("queue")));var r=t.some((function(t){return t.id===e.id}));document.querySelector("[data-add-queue]").textContent=r?"remove from queue":"add to queue"}})),a.register("dkUq4",(function(r,n){e(r.exports,"handleClick",(function(){return l}));var o,i=a("bpxeT"),s=a("2TvXO"),c=a("jaaYu"),u=a("j1lrD"),l=(o=t(i)(t(s).mark((function e(){var r,n,o;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,u.spinnerPlay)(),r=document.querySelector(".movie__description"),n=r.dataset.movieId,o="",c.serverApi.getTrailer(n).then((function(e){e.results.map((function(e){"Trailer"===e.type&&"Official Trailer"===e.name&&(o=e.key)})),(0,u.spinnerStop)(),basicLightbox.create('\n        <div class="player-container">\n   <iframe class="player" src=\'https://www.youtube.com/embed/'.concat(o,'\'frameborder="0"\n   allow="accelerometer; autoplay; encrypted-media; gyroscope; \n   picture-in-picture" allowfullscreen></iframe> \n   </div>\n')).show()}));case 5:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)})})),a.register("aZhHc",(function(e,r){var n=a("TnqyV"),o=a("hiFhO"),i=a("erQpf");function s(e){"Escape"===e.code&&(c(),window.removeEventListener("keydown",s))}function c(){o.refs.overlayTeam.classList.remove("visiable"),o.refs.body.classList.remove("no-scroll")}o.refs.team.addEventListener("click",(function(e){e.preventDefault(),o.refs.overlayTeam.classList.add("visiable"),o.refs.body.classList.add("no-scroll");var r=(a=n.teamItems,a.map((function(e){var r=e.img,n=e.name,o=e.role,a=e.git;return'<div class="team-card">\n      <img src="'.concat(r,'" alt="').concat(n,'" class="team-image" width="150" height="150">\n      <p class="team-name">').concat(n,'</p>\n      <p class="team-role">').concat(o,'</p>\n      <a href="').concat(a,'" target="_blank" class="team-git">\n        <svg class="team-git__icon" width="24" height="24">\n          <use href="').concat(t(i),'#git-hub"></use>\n        </svg>\n      </a>\n    </div>')})).join(""));var a;o.refs.wrap.innerHTML=r,window.addEventListener("keydown",s)})),o.refs.overlayTeam.addEventListener("click",(function(e){e.target===o.refs.overlayTeam&&c()})),o.refs.btnClose.addEventListener("click",c)})),a.register("TnqyV",(function(e,t){})),a.register("3ngM5",(function(e,t){var r=a("hiFhO");function n(){try{"dark"===localStorage.getItem("theme")?(r.refs.body.classList.add("dark"),r.refs.body.classList.add("img-dark"),r.refs.body.classList.remove("light"),r.refs.headerThemeText.textContent="Light",r.refs.iconSunBgc.classList.remove("visually-hidden"),r.refs.iconMoonBgc.classList.add("visually-hidden"),r.refs.footer.classList.add("dark"),r.refs.footerContainer.classList.add("dark"),r.refs.team.classList.add("dark"),r.refs.content.classList.add("dark"),r.refs.contentTeam.classList.add("dark"),r.refs.wrap.classList.add("dark"),r.refs.btnClose.classList.add("dark"),r.refs.scollIcon.classList.add("dark"),r.refs.registerForm.classList.add("dark"),r.refs.loginForm.classList.add("dark"),r.refs.loginedWrapper.classList.add("dark")):(r.refs.body.classList.add("light"),r.refs.body.classList.remove("dark"),r.refs.body.classList.remove("img-dark"),r.refs.headerThemeText.textContent="Dark",r.refs.iconSunBgc.classList.add("visually-hidden"),r.refs.iconMoonBgc.classList.remove("visually-hidden"),r.refs.footer.classList.remove("dark"),r.refs.footerContainer.classList.remove("dark"),r.refs.team.classList.remove("dark"),r.refs.content.classList.remove("dark"),r.refs.contentTeam.classList.remove("dark"),r.refs.wrap.classList.remove("dark"),r.refs.btnClose.classList.remove("dark"),r.refs.scollIcon.classList.remove("dark"),r.refs.registerForm.classList.remove("dark"),r.refs.loginForm.classList.remove("dark"),r.refs.loginedWrapper.classList.remove("dark"))}catch(e){}}r.refs.darkBtn.addEventListener("click",(function(e){e.preventDefault(),"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark");n()})),n()})),a.register("dUjMA",(function(e,t){var r=a("hiFhO");window.onscroll=function(){window.scrollY>500?r.refs.scrollBtn.classList.remove("is-hidden"):window.scrollY<500&&r.refs.scrollBtn.classList.add("is-hidden")},r.refs.scrollBtn.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})}})),a.register("fDiVl",(function(e,t){var r=a("hiFhO");function n(e){"Escape"===e.code&&(o(),window.removeEventListener("keydown",n))}function o(e){e.target===r.refs.registrationWrapper&&(r.refs.modal.classList.remove("visiable"),r.refs.body.classList.remove("no-scroll"),r.refs.registerForm.classList.remove("hidden"),r.refs.loginForm.classList.remove("visiable")),e.target===r.refs.loginedWrapper&&r.refs.loginedWrapper.classList.remove("active")}r.refs.openModalBtn.addEventListener("click",(function(){r.refs.modal.classList.add("visiable"),r.refs.body.classList.add("no-scroll"),window.addEventListener("keydown",n)})),r.refs.registrationWrapper.addEventListener("click",o),r.refs.registerBtn.addEventListener("click",(function(){r.refs.registerBtn.classList.add("active"),setTimeout((function(){r.refs.registerBtn.classList.remove("active")}),2500)})),r.refs.loginBtn.addEventListener("click",(function(){r.refs.loginBtn.classList.add("active"),setTimeout((function(){r.refs.loginBtn.classList.remove("active")}),2500)})),r.refs.changeFormLogin.addEventListener("click",(function(){r.refs.registerForm.classList.add("hidden"),r.refs.loginForm.classList.add("visiable")})),r.refs.changeFormRegister.addEventListener("click",(function(){r.refs.registerForm.classList.remove("hidden"),r.refs.loginForm.classList.remove("visiable")})),r.refs.iconExit.addEventListener("click",(function(){r.refs.loginedWrapper.classList.add("active")})),r.refs.loginedWrapper.addEventListener("click",o)})),a.register("iNWLi",(function(e,t){var r=initializeApp({apiKey:"AIzaSyAr9PnJjkOaXP4O6n2hAHTbJJCMzH43B44",authDomain:"filmoteka-7ab1a.firebaseapp.com",projectId:"filmoteka-7ab1a",storageBucket:"filmoteka-7ab1a.appspot.com",messagingSenderId:"740687621716",appId:"1:740687621716:web:23af114b92a4b6ee7507c1",databaseURL:"https://filmoteka-7ab1a-default-rtdb.firebaseio.com/"}),n=getAuth(),o=getDatabase(r),a=JSON.parse(localStorage.getItem("watch")),i=JSON.parse(localStorage.getItem("queue")),s=document.querySelector("[data-content-register]");document.querySelector(".register-btn").addEventListener("click",(function(e){var t=document.querySelector(".emailRegister").value,r=document.querySelector(".passRegister").value;createUserWithEmailAndPassword(n,t,r).then((function(e){var n=e.user;set(ref(o,"users/"+n.uid),{emailRegister:t,passwordRegister:r}),Notiflix.Notify.success("User Crated"),document.querySelector(".emailRegister").value="",document.querySelector(".passRegister").value="",s.setAttribute("data-content-register","Registered")})).catch((function(e){e.code;var t=e.message;Notiflix.Notify.failure(t),document.querySelector(".emailRegister").value="",document.querySelector(".passRegister").value="",s.setAttribute("data-content-register","Hi there, it's ERROR")}))}));var c=document.querySelector("[data-content-login]");document.querySelector(".login-btn").addEventListener("click",(function(e){var t=document.querySelector(".emailLogin").value,r=document.querySelector(".passLogin").value;signInWithEmailAndPassword(n,t,r).then((function(e){var t=new Date,r=e.user;update(ref(o,"users/"+r.uid),{last_login:t}),Notiflix.Notify.success("User loged in!"),c.setAttribute("data-content-login","User loged in!")})).catch((function(e){e.code;var t=e.message;Notiflix.Notify.failure(t),c.setAttribute("data-content-login","Hi there, it's ERROR"),document.querySelector(".emailLogin").value="",document.querySelector(".passLogin").value=""}))}));var u=new CustomEvent("localdatachanged");document.dispatchEvent(u),document.addEventListener("localdatachanged",(function(){})),onAuthStateChanged(n,(function(e){if(e){var t=e.uid;update(ref(o,"users/"+t),{watch:a,queue:i}),refs.iconEnter.classList.add("locked"),refs.iconExit.classList.add("active"),refs.modal.classList.remove("visiable")}})),refs.exitBtnFromOnline.addEventListener("click",(function(){var e=getAuth();signOut(e).then((function(){refs.iconEnter.classList.remove("locked"),refs.iconExit.classList.remove("active"),refs.loginedWrapper.classList.remove("active")})).catch((function(e){Notiflix.Notify.failure("User is signed out!")}))}))})),a("iE7OH").register(JSON.parse('{"5ZwWc":"index.2b1aa93e.js","cs03i":"coming_soon.265f69e2.jpg","kxKJ3":"symbol-defs.0f67bb5c.svg"}'))}();
//# sourceMappingURL=index.2b1aa93e.js.map
