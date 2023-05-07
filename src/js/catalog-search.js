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
  page = 1;

  const { catalogSearch } = e.currentTarget;

  inputValue = catalogSearch.value;

  if (inputValue === '') {
    return;
  }

  fetchMovieGenres().then(genres => {
    fetchCatalogSearchMovies(inputValue, page).then(data => {
      const movies = data.results.slice(0, 10);

      const cardsData = movies.map(movie => {
        const title = movie.title;
        const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const releaseYear = movie.release_date.substring(0, 4);
        const movieId = movie.id;
        const rating = movie.vote_average;
        const movieGenres = genres.genres
          .filter(genre => {
            if (movie.genre_ids.includes(genre.id)) {
              return genre;
            }
          })
          .map(genre => genre.name);

        return {
          title,
          posterPath,
          movieGenres,
          releaseYear,
          rating,
          movieId,
        };
      });

      catalogGallery.innerHTML = createGallery(cardsData);
    });
  });
}

function fetchCatalogSearchMovies(name, page) {
  const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

  return fetch(
    `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=${page}&query=${name}`
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
      const genres = movieGenres[0];

      const htmlPart = `
        <div class="movie__card" id="${movieId}">
        <div class="movie__card-poster" style="background-image: linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0), rgba(0,0,0,1)),
  url(${posterPath});"></div>

        <div class="movie__card-info">
          <h3>${title}</h3>
          <p><span>${genres}</span> | <span>${releaseYear}</span></p>
        </div>

        <div class="movie__card-rating">${rating}</div>
      </div> 
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
