!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired76b;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired76b=r);var s=r("hiFhO");var i=r("bpxeT"),o=r("2TvXO"),l=(s=r("hiFhO"),r("kiFmR")),c=r("jaaYu"),d=r("4cXS4"),u=r("5xtVg"),f=r("jcFG7"),p=r("5HOzi"),g=r("dkUq4"),h=(s=r("hiFhO"),r("9PJ7S")),m=r("4zVoc");function v(e){e.length||s.refs.tuiContainer.classList.add("visually-hidden");var t=e.map((function(e){var t=e.original_title,n=e.title,a=e.poster_path,r=e.id,s=e.genres,i=e.release_date,o=null,l=null,c=s.map((function(e){return e.id})),d=(0,h.posterСheck)(a),u=m.genresArr.reduce((function(e,t){return c.includes(t.id)&&e.push(t.name),e}),[]);return u.length>3?(o=u.slice(0,2)).splice(2,1,"Other"):o=0===u.length?["Genres not found"]:u,l=""===i?"Release data no found":i.slice(0,4),'\n          <li class="film__item" data-id="'.concat(r,'">\n          <img src="').concat(d,'" class="film__img" alt="').concat(t,'" />\n          <p class="film__title">').concat(n,'</p>\n          <p class="film__genre">').concat(o.join(", ")," | ").concat(l,"</p>\n        </li>")})).join("");return s.refs.galleryLibrary.innerHTML=t}function y(){s.refs.btnWathed.dataset.watch="active",s.refs.btnQueue.dataset.queue="";try{var e=JSON.parse(localStorage.getItem("watch"));if(!e||0===e.length)return s.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>',void s.refs.tuiContainer.classList.add("visually-hidden");f.options.totalItems=e.length;var t=0,n=20;s.refs.tuiContainer.classList.remove("visually-hidden"),v(e.slice(t,n)),new Pagination(s.refs.tuiContainer,f.options).on("beforeMove",(function(a){!function(e){t=e*f.options.itemsPerPage-20,n=e*f.options.itemsPerPage}(a.page),v(e.slice(t,n))}))}catch(e){console.log(e.message)}}function b(){return(b=e(i)(e(o).mark((function t(n){var a,r,i,f,h,m,y,b;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("film__item"===n.target.parentElement.className){e.next=2;break}return e.abrupt("return");case 2:return(0,u.onOpenModal)(),a=n.target.parentElement.dataset.id,e.next=6,c.serverApi.getDetailsMovie(a);case 6:return r=e.sent,e.next=9,(0,l.movieDescriptionMurkup)(r);case 9:i=e.sent,s.refs.movieDescription.insertAdjacentHTML("beforeend",i),(0,p.makeWatchTextContent)(r),(0,p.makeQueueTextContent)(r),f=document.querySelector("[data-add-watched]"),h=document.querySelector("[data-add-queue]"),m=document.querySelector("[data-modal-close]"),y=document.querySelector(".btn-ytb"),b=document.querySelector(".icon-youtube"),f.addEventListener("click",(function(){(0,d.onAddWatchClick)(r);var e=JSON.parse(localStorage.getItem("watch"));"active"===s.refs.btnWathed.dataset.watch&&v(e)})),h.addEventListener("click",(function(){(0,d.onAddQueueClick)(r);var e=JSON.parse(localStorage.getItem("queue"));"active"===s.refs.btnQueue.dataset.queue&&v(e)})),c.serverApi.getTrailer(a).then((function(e){0!==e.results.length?(b.classList.add("icon-youtube__enable"),b.classList.remove("icon-youtube__disabled")):(b.classList.remove("icon-youtube__enable"),b.classList.add("icon-youtube__disabled"),y.setAttribute("disabled",!0),Notiflix.Notify.failure("Oh! Unfortunately there is no trailer",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}))})),y.addEventListener("click",g.handleClick),m.addEventListener("click",u.closeModal);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}s.refs.btnWathed.addEventListener("click",y),s.refs.galleryLibrary.addEventListener("click",(function(e){return b.apply(this,arguments)}));s=r("hiFhO"),f=r("jcFG7");function _(){s.refs.btnWathed.dataset.watch="",s.refs.btnQueue.dataset.queue="active";try{var e=JSON.parse(localStorage.getItem("queue"));if(!e||0===e.length)return s.refs.galleryLibrary.innerHTML='<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>',void s.refs.tuiContainer.classList.add("visually-hidden");f.options.totalItems=e.length;var t=0,n=20;s.refs.tuiContainer.classList.remove("visually-hidden"),v(e.slice(t,n)),new Pagination(s.refs.tuiContainer,f.options).on("beforeMove",(function(a){!function(e){t=e*f.options.itemsPerPage-20,n=e*f.options.itemsPerPage}(a.page),v(e.slice(t,n))}))}catch(e){console.log(e.message)}}s.refs.btnQueue.addEventListener("click",_);c=r("jaaYu");!function(){c.serverApi.setlang(JSON.parse(localStorage.getItem("language")));try{var e=JSON.parse(localStorage.getItem("watch")),t=JSON.parse(localStorage.getItem("queue"));e||t?e&&0!==e.length?y():t&&0!==t.length&&!e||0===e.length?_():s.refs.galleryLibrary.insertAdjacentHTML("beforeend",'<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>'):s.refs.galleryLibrary.insertAdjacentHTML("beforeend",'<div class="message-wrap" >\n      <p class="sorry">Sorry...</p>\n      <p class="message">\n        You haven\'t added any movies yet. Hope you fix this soon :)\n      </p>\n      <a href="/src/index.html" class="library__button accent">Filmoteka</a>\n    </div>')}catch(e){console.log(e.message)}}(),r("5xtVg"),r("aZhHc"),r("jcFG7"),r("3ngM5"),r("dUjMA"),r("fDiVl"),r("iNWLi")}();
//# sourceMappingURL=mylibrary.0381fa66.js.map
