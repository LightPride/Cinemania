!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},o=n.parcelRequire6cf5;null==o&&((o=function(n){if(n in e)return e[n].exports;if(n in i){var o=i[n];delete i[n];var t={id:n,exports:{}};return e[n]=t,o.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,e){i[n]=e},n.parcelRequire6cf5=o),o.register("6yLno",(function(n,e){return fetch("".concat("https://api.themoviedb.org/3/movie/upcoming","?api_key=").concat("ec3ca0e4403710b7fc1497b1dbf32c54","&language=en-US&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return console.log(n),n.json()})),'\n<h2 class="upcoming__title">UPCOMING THIS MONTH</h2>\n  <div class="upcoming__insert">\n    <img class="upcoming__poster" href="" alt="Movie poster"/>\n    <p class="upcoming__movie-name">TEMPORARY NAME</p>\n\n    <div class="upcoming__infolist-text">\n      <p class="upcoming__about-item">Release date</p>\n      <p class="upcoming__about-item">Vote / Votes</p>\n      <p class="upcoming__about-item">Popularity</p>\n      <p class="upcoming__about-item">Genre</p>\n    </div>\n\n    <div class="upcoming__infolist">\n      <p class="upcoming__release"></p>\n      <p class="upcoming__vote"></p>\n      <p class="upcoming__popularity"></p>\n      <p class="upcoming__genre"></p>\n    </div>\n\n    <p class="upcoming__about-title">ABOUT</p>\n    <p class="upcoming__about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, est! Dolore ex mollitia ut sunt! Blanditiis quae quod id debitis maxime nulla, voluptas nostrum magni natus, eius, consectetur corporis aut.</p>\n  </div>\n'})),o("6yLno")}();
//# sourceMappingURL=catalog.d9a9ab5c.js.map
