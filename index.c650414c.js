!function(){var e="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("ec3ca0e4403710b7fc1497b1dbf32c54","&page=1"),o="https://image.tmdb.org/t/p/original/";fetch(e).then((function(e){return e.json()})).then((function(e){e.ok&&(t.innerHTML=""),function(e){try{var o=e.results.length-1,a=Math.round((u=0,h=o,Math.random()*(h-u)+u));!function(e){e.video,t.innerHTML='<div class="hero-film_box"><h2 class="hero-film_title">'.concat(e.title,'</h2>\n    <p class="hero-film_rating">').concat(e.vote_average,'</p>\n    <p class="hero-film_descr">').concat(e.overview,"</p>\n    </div>"),window.addEventListener("load",l(e)),window.addEventListener("resize",l(e)),d.addEventListener("click",s),i.addEventListener("click",s),r.addEventListener("click",(function(e){e||s()}))}(e.results[a])}catch(e){console.log(e),c.classList.remove("hero-film_background"),n.classList.add("hero-default"),r.classList.add("hidden")}var u,h}(e)})).catch((function(e){return console.log(e)}));var t=document.body.querySelector(".hero-container"),n=document.body.querySelector(".hero"),c=(document.body.querySelector(".hero_with-film"),document.body.querySelector(".hero-film_background")),r=document.body.querySelector(".hero-film_btn"),d=document.querySelector(".hero-film_btn"),i=document.querySelector(".modal__close-btn"),a=document.querySelector("[data-modal]");document.body.querySelector(".hero-btn");function l(e){var t=window.innerWidth;(t<=767||t<=1279||t>=1280)&&(c.style.backgroundImage="url('".concat(o).concat(e.backdrop_path,"')"))}function s(){document.body.classList.toggle("modal-open"),a.classList.toggle("is-hidden")}}();
//# sourceMappingURL=index.c650414c.js.map
