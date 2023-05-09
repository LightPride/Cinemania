const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=1`;
const IMG_URL = 'https://image.tmdb.org/t/p/original/';

fetchMovieOfTheDay();

function fetchMovieOfTheDay() {
  return fetch(BASE_URL)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        heroContainer.innerHTML = '';
      }
      makeMovieOfTheDay(data);
    })
    .catch(error => console.log(error));
}

const heroContainer = document.body.querySelector('.hero-container');
const heroEl = document.body.querySelector('.hero');
const heroFilm = document.body.querySelector('.hero_with-film');
const heroBckgr = document.body.querySelector('.hero-film_background');
const heroBtn = document.body.querySelector('.hero-film_btn');
const openModalBtn = document.querySelector('.hero-film_btn');
const closeModalBtn = document.querySelector('.modal__close-btn');
const modal = document.querySelector('[data-modal]');
const getStartedBtn = document.body.querySelector('.hero-btn');

function makeMovieOfTheDay(data) {
  try {
    const valueOfElements = data.results.length - 1;

    const movieNumber = Math.round(getRandomNumber(0, valueOfElements));

    const film = data.results[movieNumber];

    makeMarkup(film);
  } catch (error) {
    console.log(error);
    heroBckgr.classList.remove('hero-film_background');
    heroEl.classList.add('hero-default');
    heroBtn.classList.add('hidden');
  }
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

let videoCheck = true;

function makeMarkup(film) {
  videoCheck = film.video;
  heroContainer.innerHTML = `<div class="hero-film_box"><h2 class="hero-film_title">${film.title}</h2>
    <p class="hero-film_rating">${film.vote_average}</p>
    <p class="hero-film_descr">${film.overview}</p>
    </div>`;

  // Викликаємо функцію при завантаженні сторінки та при зміні ширини вікна браузера
  window.addEventListener('load', setHeroBackground(film));
  window.addEventListener('resize', setHeroBackground(film));
  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);
  heroBtn.addEventListener('click', videoCheck => {
    if (!videoCheck) {
      toggleModal();
    }
  });
}

function setHeroBackground(film) {
  const windowWidth = window.innerWidth;

  // змінюємо вигляд бекграунда в залежності від ширини екрана
  if (windowWidth <= 767) {
    heroBckgr.style.backgroundImage = `url('${IMG_URL}${film.backdrop_path}')`;
  } else if (windowWidth <= 1279) {
    heroBckgr.style.backgroundImage = `url('${IMG_URL}${film.backdrop_path}')`;
  } else if (windowWidth >= 1280) {
    heroBckgr.style.backgroundImage = `url('${IMG_URL}${film.backdrop_path}')`;
  }
}

function toggleModal() {
  document.body.classList.toggle('modal-open');
  modal.classList.toggle('is-hidden');
}
