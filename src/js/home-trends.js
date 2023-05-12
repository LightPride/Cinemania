const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const TABLET_WIDTH_THRESHOLD = 768;
const colWidthClass = 'col-md-4';

const container = document.querySelector('.catalog__gallery');
const pashalka = document.querySelector('.pas-halka');

async function fetchTrendsMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const { results: movieData } = await response.json();
    return movieData;
  } catch (error) {
    console.log(error);
  }
}

async function getGenresById(genreIds) {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const { genres } = await response.json();
  return genreIds
    .map(genreId => genres.find(genre => genre.id === genreId)?.name)
    .join(', ');
}

// зірочки

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
  pashalka.appendChild(starsContainer);
  const height = fullStars.offsetHeight;
  fullStars.style.width = `${(rating / 2) * height}px`;
  return starsContainer;
}

async function renderMovies(movies, count) {
  container.innerHTML = '';
  const moviesContainer = document.createElement('ul');
  moviesContainer.classList.add('weekly-list');
  container.appendChild(moviesContainer);

  const movieList = movies.slice(0, count);

  const movieElements = await Promise.all(
    movieList.map(async movie => {
      const genres = await getGenresById(movie.genre_ids);
      const shortenedTitle = movie.title.slice(0, movie.title.indexOf(':'));
      const releaseYear = movie.release_date.slice(0, 4);
      const ratingValue = movie.vote_average.toFixed(1);

      const li = document.createElement('li');
      li.classList.add('weekly-item');

      const wrapper = document.createElement('div');
      wrapper.classList.add('weekly-wrapper');
      // Додавання ID для модалки POP UP
      console.log(movie.id);
      wrapper.dataset.id = `${movie.id}`;
      // ++++++++++++++++++++

      const movieDetails = document.createElement('div');
      movieDetails.classList.add('weekly-info');

      const title = document.createElement('h3');
      title.classList.add('weekly-info__title');
      title.innerText = `${shortenedTitle}`;

      const releaseDateAndGenre = document.createElement('span');
      releaseDateAndGenre.classList.add('weekly-info__genres__data');
      releaseDateAndGenre.innerText = `${genres
        .split(',')
        .slice(0, 1)
        .join(', ')} | ${releaseYear}`;

      const movieRating = document.createElement('div');
      movieRating.classList.add('weekly-rating');
      const ratingValueEl = document.createElement('span');
      ratingValueEl.innerText = `${ratingValue}`;
      movieRating.appendChild(ratingValueEl);

      const additionalInfo = document.createElement('div');
      additionalInfo.classList.add('catalog-list__additional-info');
      additionalInfo.appendChild(releaseDateAndGenre);
      additionalInfo.appendChild(createStarRating(ratingValue));
      additionalInfo.title = ratingValue;

      const poster = document.createElement('img');
      poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      poster.alt = `${movie.title} movie poster`;
      poster.classList.add('weekly-img');
      poster.setAttribute('width', '500');

      movieDetails.appendChild(title);
      movieDetails.appendChild(additionalInfo);

      wrapper.appendChild(movieDetails);
      li.appendChild(wrapper);
      li.appendChild(poster);

      return li;
    })
  );

  moviesContainer.append(...movieElements);
}

function getFetchedMovies() {
  const count = window.innerWidth < TABLET_WIDTH_THRESHOLD ? 1 : 3;
  fetchTrendsMovies().then(movies => renderMovies(movies, count));
}

getFetchedMovies();

window.addEventListener('resize', getFetchedMovies);

// ===== ВИКЛИК МОДАЛКИ =====
container.addEventListener('click', onWeeklyTrendsClick);

function onWeeklyTrendsClick(e) {
  const targetCard = e.target;
  localStorage.setItem('film-id', `${targetCard.dataset.id}`);
  console.log(targetCard.dataset.id);
}
