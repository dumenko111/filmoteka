function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},s=t.parcelRequired76b;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired76b=s),s("bTcpz");var i=s("185lj");if((l=s("3fz09")).refs.langValue.addEventListener("change",(function(e){const t=e.target.value;i.serverApi.setlang(t),localStorage.setItem("language",JSON.stringify(t)),location.reload()})),localStorage.getItem("language")){const e=JSON.parse(localStorage.getItem("language"));l.refs.langValue.value=e,i.serverApi.setlang(e)}i=s("185lj");if((l=s("3fz09")).refs.trend.addEventListener("change",(function(e){const t=e.target.value;i.serverApi.setTrend(t),localStorage.setItem("selected-trend",JSON.stringify(t)),location.reload()})),localStorage.getItem("selected-trend")){const e=JSON.parse(localStorage.getItem("selected-trend"));l.refs.trend.value=e,i.serverApi.setTrend(e)}var a=s("7Y9D8"),l=s("3fz09"),o=(i=s("185lj"),s("fb9GJ")),c=(l=s("3fz09"),i=s("185lj"),s("1fedI")),d=s("2nhTy"),u=s("04jNI"),p=s("bRnc2");u=s("04jNI");const f=new(e(o))(l.refs.tuiContainer,d.options);function v(e){i.serverApi.setPage(1);const t=e.map((({original_title:e,title:t,poster_path:r,id:n,genre_ids:s,release_date:i})=>{const a=(0,c.posterСheck)(r);let l=null,o=null;const d=p.genresArr.reduce(((e,t)=>(s.includes(t.id)&&e.push(t.name),e)),[]);return d.length>3?(l=d.slice(0,2),l.splice(2,1,"Other")):l=0===d.length?["Genres not found"]:d,o=i?i.slice(0,4):"Release data no found",`\n        <li class="film__item" data-id="${n}">\n        <img src="${a}" class="film__img" alt="${e}" />\n        <div>\n        <p class="film__title">${t}</p>\n        <p class="film__genre">${l.join(", ")} | ${o}</p></div>\n      </li>`})).join("");return"ru"===l.refs.langValue.value?l.refs.gallery.innerHTML=`<li class="warship"><img src="${warship}" /></li>`:l.refs.gallery.innerHTML=t}async function g(){try{let e=[];e="top"===l.refs.trend.value?await i.serverApi.getTop():"popular"===l.refs.trend.value?await i.serverApi.getPopular():await i.serverApi.getPopularMovie(),i.serverApi.setTotalResults(e.total_results),v(e.results)}catch(e){console.log(e)}(0,u.spinnerStop)()}(0,u.spinnerPlay)(),f.on("beforeMove",(async e=>{(0,u.spinnerPlay)(),f.setTotalItems(i.serverApi.totalResults),"top"===l.refs.trend.value||"popular"===l.refs.trend.value?(f.setTotalItems(1e4),i.serverApi.setTotalResults(1e4)):f.setTotalItems(i.serverApi.totalResults);const t=e.page;i.serverApi.setPage(t),g()}));var m=s("it60l"),y=s("bTcpz"),h=s("9Co7P"),b=s("lFT8c"),_=s("c8VpK");u=s("04jNI");g(),l.refs.gallery.addEventListener("click",(async function(t){if("film__item"!==t.target.parentElement.className)return;(0,y.onOpenModal)(),(0,u.spinnerPlay)();const r=t.target.parentElement.dataset.id,n=await i.serverApi.getDetailsMovie(r),s=await(0,m.movieDescriptionMurkup)(n);l.refs.movieDescription.insertAdjacentHTML("beforeend",s),(0,u.spinnerStop)(),(0,b.makeWatchTextContent)(n),(0,b.makeQueueTextContent)(n);const o=document.querySelector("[data-add-watched]"),c=document.querySelector("[data-add-queue]"),d=document.querySelector("[data-modal-close]"),p=document.querySelector(".btn-ytb"),f=document.querySelector(".icon-youtube");i.serverApi.getTrailer(r).then((({results:t})=>{0!==t.length?(f.classList.add("icon-youtube__enable"),f.classList.remove("icon-youtube__disabled")):(f.classList.remove("icon-youtube__enable"),f.classList.add("icon-youtube__disabled"),p.setAttribute("disabled",!0),e(a).Notify.failure("Oh! Unfortunately there is no trailer",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}))})),o.addEventListener("click",(()=>(0,h.onAddWatchClick)(n))),c.addEventListener("click",(()=>(0,h.onAddQueueClick)(n))),p.addEventListener("click",_.handleClick),d.addEventListener("click",y.closeModal)}));a=s("7Y9D8"),o=s("fb9GJ"),l=s("3fz09"),i=s("185lj"),d=s("2nhTy"),u=s("04jNI");let T=" ";async function A(){const t=await i.serverApi.getMovieOnDemand(T),r=t.results,n=t.total_results;if(d.options.totalItems=n,n<20&&0!==n?l.refs.tuiContainer.classList.add("visually-hidden"):l.refs.tuiContainer.classList.remove("visually-hidden"),0===r.length)return g(),e(a).Notify.failure("Search result not successful. Enter the correct movie name and",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}),T=" ",void history.goBack();v(r)}l.refs.formRef.addEventListener("submit",(async function(t){t.preventDefault(),(0,u.spinnerPlay)();if(document.querySelector(".header__form-input").addEventListener("change",(()=>{i.serverApi.setPage(1),i.serverApi.setRequestCount()})),T=t.currentTarget.elements.serch_film.value.trim().toLowerCase(),!T)return e(a).Notify.failure("Enter the name of the movie",{position:"center-top",fontFamily:"inherit",borderRadius:"25px",clickToClose:!0}),void(0,u.spinnerStop)();await A(),(0,u.spinnerStop)();new(e(o))(l.refs.tuiContainer,d.options).on("beforeMove",(e=>{const t=e.page;i.serverApi.setPage(t),i.serverApi.incrementRequestCount(),A()}))})),s("2nhTy"),s("7bYU0"),s("eobyt"),s("c8VpK"),s("3TU0j"),s("3hXKf"),s("04jNI"),s("2ix2C");
//# sourceMappingURL=index.9fb7a3cf.js.map