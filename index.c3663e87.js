fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=ec3ca0e4403710b7fc1497b1dbf32c54&page=1").then((e=>e.json())).then((t=>{!function(t){try{if(t){console.log(t);const o=t.results.length-1;console.log(o);const l=Math.round((r=0,a=o,Math.random()*(a-r)+r));console.log(l);const i=t.results[l];console.log(i),e.innerHTML="",function(o){e.innerHTML=`<h2 class="hero-film_title">${o.title}</h2>\n    <p class="hero-film_rating">${o.vote_average}</p>\n    <p class="hero-film_descr">${o.overview}</p>\n    <button class="hero-film_btn btn">Watch trailer</button>`,window.addEventListener("load",n(o)),window.addEventListener("resize",n(o))}(i)}}catch(e){console.log(e),o.classList.remove("hero_with-film"),o.classList.add("hero-default")}var r,a}(t)})).catch((e=>console.log(e)));const e=document.body.querySelector(".hero-container"),o=document.body.querySelector(".hero"),t=document.body.querySelector(".hero_with-film");function n(e){const o=window.innerWidth;o<=767?t.style.backgroundImage=`linear-gradient(87.8deg, #0e0e0e 15.61%, rgba(14, 14, 14, 0) 60.39%), url('https://image.tmdb.org/t/p/original/${e.backdrop_path}')`:o<=1279?t.style.backgroundImage=`url('../images/hero/black-bg_md.png'), url('https://image.tmdb.org/t/p/original/${e.backdrop_path}')`:o>=1280&&(t.style.backgroundImage=`url('../images/hero/black-bg_lg.png'), url('https://image.tmdb.org/t/p/original/${e.backdrop_path}')`)}
//# sourceMappingURL=index.c3663e87.js.map
