import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

let totalEl = 0;
let page = 1;

const options = {
  totalItems: totalEl,
  itemsPerPage: 20,
  visiblePages: 3,
  page: page,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination('pagination', options);

// import { pagination } from './pagination';

const refs = {
  catalogForm: document.querySelector('#search-form'),
  catalogGallery: document.querySelector('.catalog__gallery'),
  pashalka: document.querySelector('.pas-halka'),
};

const { catalogForm, catalogGallery } = refs;

// let page = 1;
let inputValue = '';
// let totalEl = 0;

catalogForm.addEventListener('submit', onSubmit);
catalogGallery.addEventListener('click', onCatalogGalleryClick);

//? FUNCTIONS FUNCTIONS FUNCTIONS

onCatalogLoad();

setTimeout(() => {
  pagination.reset(totalEl);
}, 500);

pagination.on('afterMove', event => {
  const currentPage = event.page;
  page = currentPage;

  onCatalogLoad();
});

function onSubmit(e) {
  e.preventDefault();
  page = 1;

  const { catalogSearch } = e.currentTarget;

  inputValue = catalogSearch.value;

  if (inputValue === '') {
    onCatalogLoad();

    pagination.off('afterMove');

    pagination.on('afterMove', event => {
      const currentPage = event.page;
      page = currentPage;

      onCatalogLoad();
    });

    return;
  }

  onCatalogFormSubmit();

  pagination.off('afterMove');

  pagination.on('afterMove', event => {
    const currentPage = event.page;
    page = currentPage;

    onCatalogFormSubmit();
  });

  setTimeout(() => {
    pagination.reset(totalEl);
  }, 500);
}

function onCatalogLoad() {
  fetchMovieGenres().then(genres => {
    fetchCatalogTrendMovies(page).then(async data => {
      const movies = data.results.slice(0, 10);
      // const movies = data.results;
      totalEl = data.total_results;

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

      catalogGallery.innerHTML = await createGallery(cardsData);

      // pagination.reset(totalEl);
    });
  });
}

function onCatalogFormSubmit() {
  fetchMovieGenres().then(genres => {
    fetchCatalogSearchMovies(inputValue, page).then(async data => {
      const movies = data.results.slice(0, 10);
      // const movies = data.results;
      totalEl = data.total_results;

      if (movies.length === 0) {
        catalogGallery.innerHTML = `<div style='margin: 0 auto 0 auto' class="anyMovis" id="library_list"><h2 class="anyMovis__title">OOPS... <br />We are very sorry! <br />You don't have any movies at your library.</h2></div>`;

        return;
      }

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

      catalogGallery.innerHTML = await createGallery(cardsData);

      // pagination.reset(totalEl);
    });
  });
}

function fetchCatalogTrendMovies(page) {
  const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';

  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`
  ).then(movieData => {
    if (!movieData.ok) {
      throw new Error(movieData.status);
    }

    return movieData.json();
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

      if (posterPath === 'https://image.tmdb.org/t/p/w500null') {
        posterPath =
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
      }

      const htmlPart = `
        <li class="movie__card" data-id="${movieId}">
        <div class="movie__card-poster" style="background-image: linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0), rgba(0,0,0,1)),
  url(${posterPath});" data-id="${movieId}"></div>

        <div class="movie__card-info" data-id="${movieId}">
          <h3 data-id="${movieId}">${title}</h3>
          <p data-id="${movieId}"><span data-id="${movieId}">${genres}</span> | <span data-id="${movieId}">${releaseYear}</span></p>
        </div>

        <div class="movie__card-rating" data-id="${movieId}">${createStarRating(
        rating
      )}</div>
      </li> 
        `;

      return htmlPart;
    })
    .join('');

  return generatedHtml;
}

function onCatalogGalleryClick(e) {
  if (e.target.nodeName === 'UL') {
    return;
  }

  const targetCard = e.target;

  localStorage.setItem('film-id', `${targetCard.dataset.id}`);
}

function createStarRating(rating) {
  const starsContainer = document.createElement('div');
  starsContainer.classList.add('stars-container');
  const grayStars = document.createElement('div');
  grayStars.classList.add('st-gray');
  grayStars.classList.add('flex');
  grayStars.innerHTML = '⭐⭐⭐⭐⭐';
  const fullStars = document.createElement('div');
  fullStars.innerHTML = '⭐⭐⭐⭐⭐';
  fullStars.classList.add('st');
  fullStars.classList.add('flex');
  starsContainer.append(grayStars, fullStars);
  refs.pashalka.appendChild(starsContainer);
  const height = fullStars.offsetHeight;
  fullStars.style.width = `${(rating / 2) * height}px`;

  const innerStarsContainer = starsContainer.outerHTML;
  return innerStarsContainer;
}
