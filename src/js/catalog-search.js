const refs = {
  catalogForm: document.querySelector('#search-form'),
  catalogGallery: document.querySelector('.catalog__gallery'),
  navigation: document.querySelectorAll('.navigation__link'),
};

const { catalogForm, catalogGallery, navigation } = refs;

changeCurrentNavigation();

refs.catalogForm.addEventListener('submit', onCatalogFormSubmit);

function onCatalogFormSubmit(e) {
  e.preventDefault();
  inputValue = '';

  const { catalogSearch } = e.currentTarget;

  inputValue = catalogSearch.value;

  if (inputValue === '') {
    return;
  }

  fetchCatalogSearchMovies(inputValue).then(data => {
    const movies = data.results.map(movie => {
      const title = movie.title;
      const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      const releaseYear = movie.release_date.substring(0, 4);
      const movieId = movie.id;
      const rating = movie.popularity;
      fetchInByMovieName(movie.genre_ids).then(genreArr => {
        const genre = genreArr.map(gnr => gnr.name);
        const cardsData = {
          title,
          posterPath,
          genre,
          releaseYear,
          rating,
          movieId,
        };
        console.log(cardsData);
      });
    });

    console.log(movies);
  });
}

function fetchCatalogSearchMovies(name) {
  const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

  return fetch(
    `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1&query=${name}`
  ).then(movieData => {
    if (!movieData.ok) {
      throw new Error(movieData.status);
    }

    return movieData.json();
  });
}

function fetchInByMovieName(ids) {
  const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
  const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';

  return fetch(`${BASE_URL}?api_key=${API_KEY}`)
    .then(movieData => {
      if (!movieData.ok) {
        throw new Error(movieData.status);
      }

      return movieData.json();
    })
    .then(data => {
      const searcedGenre = data.genres.filter(genre => {
        // if (genre.id === id) {
        if (ids.includes(genre.id)) {
          return genre.name;
        }
      });

      return searcedGenre;
    });
}

function createGallery(movies) {
  const generatedHtml = movies
    .map(({ title, posterPath, genre, releaseYear, rating, movieId }) => {
      const htmlPart = `
        // 
        `;

      return htmlPart;
    })
    .join('');

  return generatedHtml;
}

function changeCurrentNavigation() {
  navigation[0].classList.remove('current');
  navigation[2].classList.remove('current');
  navigation[1].classList.add('current');
}

// ? from "fetchCatalogSearchMovies"
// .then(data => {
//   console.log(data.results);
//   const movie = data.results[0];
//   const movieId = movie.id;
// getMoviesById(movieId).then(movie => {
//   const title = movie.title;
//   const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//   const genres = movie.genres.map(genre => genre.name);
//   const releaseYear = movie.release_date.substring(0, 4);
//   console.log(title, posterPath, genres, releaseYear);
// });
// });

function getMoviesById(id) {
  const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
  const BASE_URL = `https://api.themoviedb.org/3/movie/603692`;

  return fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US`)
    .then(movieData => {
      if (!movieData.ok) {
        throw new Error(movieData.status);
      }

      return movieData.json();
    })
    .then(console.log);
}

getMoviesById();
