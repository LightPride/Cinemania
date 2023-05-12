const refs = {
  upcomingBtn: document.querySelector('#upcoming_btn'),
  addToLibraryBtn: document.getElementById('mylibrary'),
  libraryList: document.getElementById('library_list'),
  catalogGallery: document.querySelector('.catalog__gallery'),
  anyMovis: document.querySelector('.anyMovis'),
  pashalka: document.querySelector('.pas-halka'),
};

refs.catalogGallery.addEventListener('click', onCatalogGalleryClick);

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
  id,
}) {
  if (!genres[0]) {
    return;
  }
  const genre = genres[0].name;
  // console.log(genre);
  const htmlPart = `
        <li class="movie__card" data-id="${id}">
        <div class="movie__card-poster" style="background-image: linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0), rgba(0,0,0,1)),
  url(https://image.tmdb.org/t/p/w500/${poster_path});" data-id="${id}"></div>

        <div class="movie__card-info" data-id="${id}">
          <h3 data-id="${id}">${title}</h3>
          <p data-id="${id}"><span data-id="${id}">${genre}</span> | <span data-id="${id}">${release_date.substring(
    0,
    4
  )}</span></p>
        </div>

        <div class="movie__card-rating" data-id="${id}">${createStarRating(
    vote_average
  )}</div>
      </li> 
        `;

  return htmlPart;
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
