const refs = {
  upcomingBtn: document.querySelector('#upcoming_btn'),
  addToLibraryBtn: document.getElementById('mylibrary'),
  libraryList: document.getElementById('library_list'),
  catalogGallery: document.querySelector('.catalog__gallery'),
  anyMovis: document.querySelector('.anyMovis'),
};

const savedSettings = localStorage.getItem('myLibraryIds');
const parsedSettings = JSON.parse(savedSettings);
const filmsIds = parsedSettings.idsArray;

const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
const POPUP_URL = `https://api.themoviedb.org/3/movie/`;

function renderLibrary(array) {
  refs.catalogGallery.innerHTML = '';
  array.map(id => {
    fetchPopUpMovies(id).then(async data => {
      if (!createGallery(data)) {
        return;
      }
      refs.anyMovis.innerHTML = '';
      refs.catalogGallery.insertAdjacentHTML('beforeend', createGallery(data));
    });
  });
}

function fetchPopUpMovies(id) {
  return fetch(`${POPUP_URL}${id}?api_key=${API_KEY}`).then(data => {
    return data.json();
  });
}

renderLibrary(filmsIds);

function createGallery({
  title,
  poster_path,
  release_date,
  vote_average,
  genres,
}) {
  if (!genres[0]) {
    return;
  }
  const genre = genres[0].name;
  // console.log(genre);
  const htmlPart = `
        <li class="movie__card">
        <div class="movie__card-poster" style="background-image: linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0), rgba(0,0,0,1)),
  url(https://image.tmdb.org/t/p/w500/${poster_path});"></div>

        <div class="movie__card-info">
          <h3>${title}</h3>
          <p><span>${genre}</span> | <span>${release_date.substring(
    0,
    4
  )}</span></p>
        </div>

        <div class="movie__card-rating">${vote_average}</div>
      </li> 
        `;

  return htmlPart;
}

// function onAddToLibraryBtnClick (e) {
//     console.log('click on add to library btn');
//     let array = [];

//     fetchFilmById().then(data => {
//         const movies = {
//           title: data.title,
//           posterPath: data.poster_path,
//           genres: data.genres,
//           releaseYear: data.release_date,
//           id: data.id,
//           voteAverage: data.vote_average,
//         }

//         console.log(movies); // Вывести объект фильма в консоль

//       //   for(const movie in movies) {
//       //     console.log(
//       //       `
//       //       <li class="movie__card" data-id="${movie.id}">
//       //       <div class="movie__card-poster" style="background-image: linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0), rgba(0,0,0,1)),
//       // url(${movie.poster_path});" data-id="${movie.id}"></div>

//       //       <div class="movie__card-info" data-id="${movie.id}">
//       //         <h3 data-id="${movie.id}">${movie.title}</h3>
//       //         <p data-id="${movie.id}"><span data-id="${movie.id}">${movie.genres}</span> | <span data-id="${movie.id}">${movie.release_date}</span></p>
//       //       </div>

//       //       <div class="movie__card-rating" data-id="${movie.id}">${movie.vote_average}</div>
//       //     </li>

//       //       `
//       //     )
//       //   }

//       });

// }

// function fetchFilmById() {
//     return fetch(`${POPUP_URL}${localStorage.getItem('mylbery-id')}?api_key=${API_KEY}`)
//     .then(data => {
//       return data.json()
//     })
//   }

// fetchFilmById().then(console.log)
