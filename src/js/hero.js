const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=1`;
const IMG_URL = 'https://image.tmdb.org/t/p/original/';

fetchMovieOfTheDay();

function fetchMovieOfTheDay() {
    return fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
      makeMovieOfTheDay(data);
      }).catch(error => console.log(error))
  }

  const heroContainer = document.body.querySelector(".hero-container");
  const heroEl = document.body.querySelector('.hero');
  const heroFilm = document.body.querySelector('.hero_with-film');

  function makeMovieOfTheDay(data) {
    try {
      if (data) {
          console.log(data);
          const valueOfElements = data.results.length - 1
          console.log(valueOfElements);
  
          const movieNumber = Math.round(getRandomNumber(0, valueOfElements));
          console.log(movieNumber);
  
          const film = data.results[movieNumber];
          console.log(film);

          heroContainer.innerHTML = '';
          makeMarkup(film)
        } 
    } catch (error) {
        console.log(error);
        heroEl.classList.remove("hero_with-film");
        heroEl.classList.add("hero-default");
    }
  }
  
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function makeMarkup(film) {
    heroContainer.innerHTML = `<div class="hero-film_box"><h2 class="hero-film_title">${film.title}</h2>
    <p class="hero-film_rating">${film.vote_average}</p>
    <p class="hero-film_descr">${film.overview}</p>
    <button class="hero-film_btn btn">Watch trailer</button></div>
    <div class="hero-film_background"></div>`;

    // Викликаємо функцію при завантаженні сторінки та при зміні ширини вікна браузера
    window.addEventListener('load', setHeroBackground(film));
    window.addEventListener('resize', setHeroBackground(film));
  }
  

  function setHeroBackground(film) {
    const windowWidth = window.innerWidth;
  
    // змінюємо вигляд бекграунда в залежності від ширини екрана
    if (windowWidth <= 767) {
      heroFilm.style.backgroundImage = `linear-gradient(87.8deg, #0e0e0e 15.61%, rgba(14, 14, 14, 0) 60.39%), url('${IMG_URL}${film.backdrop_path}')`;
    } else if(windowWidth <= 1279) {
      heroFilm.style.backgroundImage = `url('${IMG_URL}${film.backdrop_path}')`;
    } else if(windowWidth >= 1280) {
      heroFilm.style.backgroundImage = `url('${IMG_URL}${film.backdrop_path}')`;
      
    }
  }