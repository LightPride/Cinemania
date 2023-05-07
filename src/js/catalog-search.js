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

  fetchMovieGenres().then(genres => {
    fetchCatalogSearchMovies(inputValue).then(data => {
      const movies = data.results.slice(0, 10);
      movies.map(movie => {
        const title = movie.title;
        const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const releaseYear = movie.release_date.substring(0, 4);
        const movieId = movie.id;
        const rating = movie.vote_average;
        const movieGenres = genres.genres.filter(genre => {
          if (movie.genre_ids.includes(genre.id)) {
            return genre.name;
          }
        });

        const cardsData = {
          title,
          posterPath,
          movieGenres,
          releaseYear,
          rating,
          movieId,
        };

        console.log(cardsData);
      });
    });
  });
}

function fetchCatalogSearchMovies(name) {
  const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

  return fetch(
    `${BASE_URL}?api_key=${API_KEY}&language=en-US&per_page=10&page=1&query=${name}`
  ).then(movieData => {
    if (!movieData.ok) {
      throw new Error(movieData.status);
    }

    return movieData.json();
  });
}

function fetchMovieGenres() {
  const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
  const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';

  return fetch(`${BASE_URL}?api_key=${API_KEY}`).then(movieData => {
    if (!movieData.ok) {
      throw new Error(movieData.status);
    }

    return movieData.json();
  });
}

function createGallery(movies) {
  const generatedHtml = movies
    .map(({ title, posterPath, movieGenres, releaseYear, rating, movieId }) => {
      const htmlPart = `
        // 
        `;

      return htmlPart;
    })
    .join('');

  return generatedHtml;
}

function changeCurrentNavigation() {
  navigation[1].classList.add('current');
}
