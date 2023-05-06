const insertionBlock = document.querySelector('.upcoming__insert');

// TODO ФЕТЧ АБИ ОТРИМАТИ UPCOMING MOVIES

const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
const BASE_URL = `https://api.themoviedb.org/3/movie/upcoming`;

function fetchUpcomingMovies() {
// https://developers.themoviedb.org/3/movies/get-upcoming

    return fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`)
    .then(movieData => {

        if (!movieData.ok) {
            throw new Error(movieData.status)
          }
        return movieData.json()
       
      })
}

// function getFetchedMovies() {
//   fetchUpcomingMovies()
//     .then(data => {
//       const returnedResult = data.results
//       console.log(returnedResult);

//       if (returnedResult.length >= 1) {
//         const randomMovie = returnedResult[Math.floor(Math.random() * returnedResult.length)];
//         const createdMarkup = renderMarkup(randomMovie);
//         insertionBlock.insertAdjacentHTML('beforeend', createdMarkup);
//       }
//     })
//     .catch(error => console.log(error));
// }

// TODO ВИКЛИК ФУНКЦІЇ ФЕТЧУ

async function getFetchedMovies() {
  try {
    const data = await fetchUpcomingMovies();
    const returnedResult = data.results;
    console.log(returnedResult);

    if (returnedResult.length >= 1) {
      const randomMovie = returnedResult[Math.floor(Math.random() * returnedResult.length)];
      const genreNames = await getGenresById(randomMovie.genre_ids);
      const createdMarkup = await renderMarkup({ ...randomMovie, genreNames });
      insertionBlock.insertAdjacentHTML('beforeend', createdMarkup);
    }
  } catch (error) {
    console.log(error);
  }
}

getFetchedMovies()

// function renderMarkup({ poster_path, title, overview, popularity, vote_average, vote_count, release_date, genre_ids}) {

// return `
// <div class="desktop-positioning">
// <div class="desktop-left">
//   <img class="upcoming__poster"
//      src="https://image.tmdb.org/t/p/w500/${poster_path}"
//      alt="Movie Poster">
// </div>
// <div class="desktop-right"> 
//   <p class="upcoming__movie-name">${title}</p>

// <div class="upcoming__infolist">
//   <div class="first-upcoming-div">

//     <ul class="rel-vote-list">
//       <li><p class="upcoming__about-item">Release date</p></li>
//       <li><p class="upcoming__about-item">Vote / Votes</p></li>
//     </ul>
//     <ul class="rel-vote-list-value" >
//       <li><p class="upcoming__release">${release_date}</p></li>
//       <li><p class="upcoming__vote"></p>
//       <span class="vote__styling">${vote_average}</span>
//        / 
//       <span class="vote__styling">${vote_count}</span>
//        </li>
//     </ul>

//   </div>

//   <div class="second-upcoming-div">

//     <ul class="pop-gen-list">
//       <li><p class="upcoming__about-item">Popularity</p></li>
//       <li><p class="upcoming__about-item">Genre</p></li>
//     </ul>

//     <ul class="pop-gen-list-value">
//       <li><p class="upcoming__popularity">${popularity}</p></li>
//       <li><p class="upcoming__genre"></p>${getGenresById(genre_ids)}</li>
//     </ul>

//   </div>
// </div>

// <p class="upcoming__about-title">ABOUT</p>
// <p class="upcoming__about">${overview}</p>

// <button type="button" class="upcoming__btn">Remind me</button>
// </div>
// </div>
// `
// }

async function renderMarkup({ poster_path, backdrop_path, title, overview, popularity, vote_average, vote_count, release_date, genre_ids}) {
  const genreNames = await getGenresById(genre_ids);

  return `
    <div class="desktop-positioning">
      <div class="desktop-left">
      <img class="upcoming__poster"
      src="https://image.tmdb.org/t/p/original/${poster_path}"
      srcset="https://image.tmdb.org/t/p/original/${backdrop_path} 768w,
              https://image.tmdb.org/t/p/original/${poster_path} 480w"

      alt="Movie Poster">
 
      </div>
      <div class="desktop-right"> 
        <p class="upcoming__movie-name">${title}</p>

        <div class="upcoming__infolist">
          <div class="first-upcoming-div">

            <ul class="rel-vote-list">
              <li><p class="upcoming__about-item">Release date</p></li>
              <li><p class="upcoming__about-item">Vote / Votes</p></li>
            </ul>
            <ul class="rel-vote-list-value" >
              <li><p class="upcoming__release">${release_date}</p></li>
              <li><p class="upcoming__vote"></p>
              <span class="vote__styling">${vote_average}</span>
              / 
              <span class="vote__styling">${vote_count}</span>
              </li>
            </ul>

          </div>

          <div class="second-upcoming-div">

            <ul class="pop-gen-list">
              <li><p class="upcoming__about-item">Popularity</p></li>
              <li><p class="upcoming__about-item">Genre</p></li>
            </ul>

            <ul class="pop-gen-list-value">
              <li><p class="upcoming__popularity">${popularity}</p></li>
              <li><p class="upcoming__genre"></p>${genreNames}</li>
            </ul>

          </div>
        </div>

        <p class="upcoming__about-title">ABOUT</p>
        <p class="upcoming__about">${overview}</p>

        <button type="button" class="upcoming__btn">Remind me</button>
      </div>
    </div>
  `;
}


async function getGenresById(genreIds) {
  const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
  const BASE_URL = `https://api.themoviedb.org/3/genre/movie/list`;

  const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  const genreNames = genreIds.map((genreId) => {
    const genre = data.genres.find((genre) => genre.id === genreId);
    return genre.name;
  });

  return genreNames.join(', ');
}
