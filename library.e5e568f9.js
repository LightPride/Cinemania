const a={upcomingBtn:document.querySelector("#upcoming_btn"),addToLibraryBtn:document.getElementById("mylibrary"),libraryList:document.getElementById("library_list"),catalogGallery:document.querySelector(".catalog__gallery"),anyMovis:document.querySelector(".anyMovis")};a.catalogGallery.addEventListener("click",(function(a){if("UL"===a.target.nodeName)return;const e=a.target;localStorage.setItem("film-id",`${e.dataset.id}`)}));const e=localStorage.getItem("myLibraryIds"),t=JSON.parse(e).idsArray;var n;function r({title:a,poster_path:e,release_date:t,vote_average:n,genres:r,id:i}){if(!r[0])return;return`\n        <li class="movie__card" data-id="${i}">\n        <div class="movie__card-poster" style="background-image: linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0), rgba(0,0,0,1)),\n  url(https://image.tmdb.org/t/p/w500/${e});" data-id="${i}"></div>\n\n        <div class="movie__card-info" data-id="${i}">\n          <h3 data-id="${i}">${a}</h3>\n          <p data-id="${i}"><span data-id="${i}">${r[0].name}</span> | <span data-id="${i}">${t.substring(0,4)}</span></p>\n        </div>\n\n        <div class="movie__card-rating" data-id="${i}">${n}</div>\n      </li> \n        `}n=t,a.catalogGallery.innerHTML="",n.map((e=>{(function(a){return fetch(`https://api.themoviedb.org/3/movie/${a}?api_key=ec3ca0e4403710b7fc1497b1dbf32c54`).then((a=>a.json()))})(e).then((async e=>{r(e)&&(a.anyMovis.innerHTML="",a.catalogGallery.insertAdjacentHTML("beforeend",r(e)))}))}));
//# sourceMappingURL=library.e5e568f9.js.map
