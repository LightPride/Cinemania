fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=ec3ca0e4403710b7fc1497b1dbf32c54&language=en-US&page=1").then((e=>{if(console.log(e),!e.ok)throw new Error(e.status);return e.json()}));
//# sourceMappingURL=catalog.8af906b8.js.map
