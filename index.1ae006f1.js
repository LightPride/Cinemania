!function(){var n=document.querySelector(".upcoming__insert");fetch("".concat("https://api.themoviedb.org/3/movie/upcoming","?api_key=").concat("ec3ca0e4403710b7fc1497b1dbf32c54","&language=en-US&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(t){var e,i,o,c,s,l,a,p,u,r=t.results;if(r.length>=1){var _=r[Math.floor(Math.random()*r.length)],g=(i=(e=_).poster_path,o=e.title,c=e.overview,s=e.popularity,l=e.vote_average,a=e.vote_count,p=e.release_date,u=e.genre_ids,'\n<img class="upcoming__poster" src=https://image.tmdb.org/t/p/w500/'.concat(i,' alt="Movie poster"/>\n<p class="upcoming__movie-name">').concat(o,'</p>\n\n<div class="upcoming__infolist">\n  <div class="first-upcoming-div">\n\n    <ul class="rel-vote-list">\n      <li><p class="upcoming__about-item">Release date</p></li>\n      <li><p class="upcoming__about-item">Vote / Votes</p></li>\n    </ul>\n    <ul class="rel-vote-list-value" >\n      <li><p class="upcoming__release">').concat(p,'</p></li>\n      <li><p class="upcoming__vote"></p>\n      <span class="vote__styling">').concat(l,'</span>\n       / \n      <span class="vote__styling">').concat(a,'</span>\n       </li>\n    </ul>\n\n  </div>\n\n  <div class="second-upcoming-div">\n\n    <ul class="pop-gen-list">\n      <li><p class="upcoming__about-item">Popularity</p></li>\n      <li><p class="upcoming__about-item">Genre</p></li>\n    </ul>\n\n    <ul class="pop-gen-list-value">\n      <li><p class="upcoming__popularity">').concat(s,'</p></li>\n      <li><p class="upcoming__genre"></p>').concat(u,'</li>\n    </ul>\n\n  </div>\n</div>\n\n<p class="upcoming__about-title">ABOUT</p>\n<p class="upcoming__about">').concat(c,"</p>\n"));n.insertAdjacentHTML("beforeend",g)}})).catch((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.1ae006f1.js.map