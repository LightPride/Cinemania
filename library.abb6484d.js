!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=e.parcelRequire6cf5;null==n&&((n=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},e.parcelRequire6cf5=n),n.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,o,n,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(o,n)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,o=arguments;return new Promise((function(n,i){var a=t.apply(e,o);function c(t){r(a,n,i,c,l,"next",t)}function l(t){r(a,n,i,c,l,"throw",t)}c(void 0)}))}}})),n.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var n=e&&e.prototype instanceof m?e:m,i=Object.create(n.prototype),a=new O(o||[]);return i._invoke=function(t,e,r){var o=p;return function(n,i){if(o===d)throw new Error("Generator is already running");if(o===h){if("throw"===n)throw i;return k()}for(r.method=n,r.arg=i;;){var a=r.delegate;if(a){var c=U(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var l=s(t,e,r);if("normal"===l.type){if(o=r.done?h:f,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=h,r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",y={};function m(){}function v(){}function g(){}var b={};l(b,i,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(I([])));L&&L!==r&&o.call(L,i)&&(b=L);var x=g.prototype=m.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(n,i,a,c){var l=s(t[n],t,i);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==typeof p&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(p).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var n;this._invoke=function(t,o){function i(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(i,i):i()}}function U(t,r){var o=t.iterator[r.method];if(o===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,U(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var n=s(o,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,y;var i=n.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function I(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:k}}function k(){return{value:e,done:!0}}return v.prototype=g,l(x,"constructor",g),l(g,"constructor",v),v.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(P.prototype),l(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,o,n,i){void 0===i&&(i=Promise);var a=new P(u(e,r,o,n),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),l(x,c,"Generator"),l(x,i,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=I,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(o,n){return c.type="throw",c.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;S(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:I(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}));var i=n("bpxeT"),a=n("2TvXO");if(!localStorage.getItem("myLibraryIds")){localStorage.setItem("myLibraryIds",JSON.stringify({idsArray:[]}))}var c={overlayPopUp:document.getElementById("overlayPopUp"),closeModalPopUp:document.getElementById("closeModalPopUp"),openModalPopUp:document.querySelector(".catalog__gallery"),modalPopUp:document.getElementById("modalPopUp"),btnPopUp:document.getElementById("mylibrary"),closeIconPopUp:document.querySelector(".pop-up-modal__close-icon"),blokPopUp:document.querySelector(".pop-up-modal__blok"),aboutTxtPopUp:document.querySelector(".pop-up-modal__about-txt"),image:document.querySelector(".pop-up-modal__img"),titles:document.querySelector(".pop-up-modal__title"),vote:document.querySelector(".vote"),votes:document.querySelector(".votes"),popular:document.querySelector(".popularity"),genre:document.querySelector(".genres")},l="open-modal",u="visual";function s(){setTimeout((function(){h(),function(){d.apply(this,arguments)}(),document.body.classList.toggle(l),overlayPopUp.classList.toggle(u),document.body.classList.toggle("modal-open"),modalPopUp.classList.toggle(u)}),0)}c.openModalPopUp&&c.openModalPopUp.addEventListener("click",s),c.closeModalPopUp.addEventListener("click",s),c.overlayPopUp.addEventListener("click",s),document.addEventListener("keydown",(function(t){"Escape"===t.code&&modalPopUp.classList.contains(u)&&(h(),s())})),c.btnPopUp.addEventListener("click",(function(){"Add to my library"===c.btnPopUp.textContent?c.btnPopUp.textContent="Remove from my library":c.btnPopUp.textContent="Add to my library"}));var p;function f(){return fetch("".concat("https://api.themoviedb.org/3/movie/").concat(localStorage.getItem("film-id"),"?api_key=").concat("ec3ca0e4403710b7fc1497b1dbf32c54")).then((function(t){return t.json()}))}function d(){return(d=t(i)(t(a).mark((function e(){var r,o,n,i,l,u,s,d,h,y;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f();case 3:r=t.sent,o=r.id,n=r.poster_path,i=r.title,l=r.overview,u=r.popularity,s=r.vote_average,d=r.vote_count,h=r.genres,p=o,c.image.src="https://image.tmdb.org/t/p/w500/".concat(n),c.titles.textContent=i,c.vote.textContent=s,c.votes.textContent=d,c.popular.textContent=u,c.genre.textContent=h.map((function(t){return t.name})).join(" "),c.aboutTxtPopUp.textContent=l,y=localStorage.getItem("myLibraryIds"),JSON.parse(y).idsArray.includes(p)?c.btnPopUp.textContent="Remove from my library":c.btnPopUp.textContent="Add to my library",t.next=28;break;case 25:t.prev=25,t.t0=t.catch(0),console.log(t.t0);case 28:case"end":return t.stop()}}),e,null,[[0,25]])})))).apply(this,arguments)}function h(){document.body.classList.contains("light-theme")?(c.modalPopUp.classList.add("light_shadow","light_color"),c.btnPopUp.classList.add("light_color"),c.blokPopUp.classList.add("light_color"),c.closeIconPopUp.classList.add("light_fill"),c.aboutTxtPopUp.classList.add("light_color")):(c.modalPopUp.classList.remove("light_shadow","light_color"),c.btnPopUp.classList.remove("light_color"),c.blokPopUp.classList.remove("light_color"),c.closeIconPopUp.classList.remove("light_fill"),c.aboutTxtPopUp.classList.remove("light_color"))}c.btnPopUp.addEventListener("click",(function(){var t=localStorage.getItem("myLibraryIds"),e=JSON.parse(t);if(e.idsArray.includes(p)){var r=e.idsArray.indexOf(p);return e.idsArray.splice(r,1),void localStorage.setItem("myLibraryIds","".concat(JSON.stringify(e)))}e.idsArray.push(p),localStorage.setItem("myLibraryIds","".concat(JSON.stringify(e)))}))}();
//# sourceMappingURL=library.abb6484d.js.map
