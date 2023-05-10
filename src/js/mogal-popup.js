// === MODAL POP UP ===
if (!localStorage.getItem('myLibraryIds')) {
  const emptyArray = {
    idsArray: [],
  };
  localStorage.setItem('myLibraryIds', JSON.stringify(emptyArray));
}

// localStorage.removeItem('myLibraryIds');

const refs = {
  overlayPopUp: document.getElementById('overlayPopUp'),
  closeModalPopUp: document.getElementById('closeModalPopUp'),
  // Підключення модалки до CATALOG GALLERY
  openModalPopUp: document.querySelector('.catalog__gallery'),
  // Підключення модалки до WEEKLY TRENDS
  openModalPopUp: document.querySelector('#movies-container'),
  modalPopUp: document.getElementById('modalPopUp'),
  btnPopUp: document.getElementById('mylibrary'),
  closeIconPopUp: document.querySelector('.pop-up-modal__close-icon'),
  blokPopUp: document.querySelector('.pop-up-modal__blok'),
  aboutTxtPopUp: document.querySelector('.pop-up-modal__about-txt'),

  image: document.querySelector('.pop-up-modal__img'),
  titles: document.querySelector('.pop-up-modal__title'),
  vote: document.querySelector('.vote'),
  votes: document.querySelector('.votes'),
  popular: document.querySelector('.popularity'),
  genre: document.querySelector('.genres'),
};

const classes = {
  openModal: 'open-modal',
  visual: 'visual',
};
// ===== ВИКЛИК МОДАЛКИ =====
refs.openModalPopUp.addEventListener('click', handlePopUpModal);
refs.closeModalPopUp.addEventListener('click', handlePopUpModal);
refs.overlayPopUp.addEventListener('click', handlePopUpModal);
document.addEventListener('keydown', handlePopUpModalClose);

function handlePopUpModalClose({ code }) {
  if (code === 'Escape' && modalPopUp.classList.contains(classes.visual)) {
    toogleLight();
    handlePopUpModal();
  }
}

function handlePopUpModal() {
  toogleLight();
  getPopUpMovies();
  document.body.classList.toggle(classes.openModal);
  overlayPopUp.classList.toggle(classes.visual);

  modalPopUp.classList.toggle(classes.visual);
}

// === Тимчасовий пробний запис в localStorage ===
// localStorage.setItem('film-id', 502356);
// localStorage.removeItem('film-id');
// POPUP MOVIES

const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
const POPUP_URL = `https://api.themoviedb.org/3/movie/`;
// const POPUP_ID = localStorage.getItem('film-id');
let MYLIBRARY_ID;
// 502356 840326 1008005

function fetchPopUpMovies() {
  return fetch(
    `${POPUP_URL}${localStorage.getItem('film-id')}?api_key=${API_KEY}`
  ).then(data => {
    return data.json();
  });
}

async function getPopUpMovies() {
  try {
    const {
      id,
      poster_path,
      title,
      overview,
      popularity,
      vote_average,
      vote_count,
      genres,
    } = await fetchPopUpMovies();
    MYLIBRARY_ID = id;
    // console.log(MYLIBRARY_ID);

    refs.image.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    refs.titles.textContent = title;
    refs.vote.textContent = vote_average;
    refs.votes.textContent = vote_count;
    refs.popular.textContent = popularity;
    // console.log(genres);
    refs.genre.textContent = genres.map(genres => genres.name).join(' ');
    refs.aboutTxtPopUp.textContent = overview;
  } catch (error) {
    console.log(error);
  }
}

// === set/remome в localStorage 'mylberyId' ====
refs.btnPopUp.addEventListener('click', pushMyLibrary);

function pushMyLibrary() {  
  const savedSettings = localStorage.getItem('myLibraryIds');
  const parsedSettings = JSON.parse(savedSettings);

  if (parsedSettings.idsArray.includes(MYLIBRARY_ID)) {
    const idIndex = parsedSettings.idsArray.indexOf(MYLIBRARY_ID);

    parsedSettings.idsArray.splice(idIndex, 1);

    localStorage.setItem('myLibraryIds', `${JSON.stringify(parsedSettings)}`);

    return;
  }

  parsedSettings.idsArray.push(MYLIBRARY_ID);

  localStorage.setItem('myLibraryIds', `${JSON.stringify(parsedSettings)}`);
}

// ===== Перемикач теми DARK/LIGHT =====
function toogleLight() {
  if (document.body.classList.contains('light-theme')) {
    // console.log('LIGHT');
    refs.modalPopUp.classList.add('light_shadow', 'light_color');
    refs.btnPopUp.classList.add('light_color');
    refs.blokPopUp.classList.add('light_color');
    refs.closeIconPopUp.classList.add('light_fill');
    refs.aboutTxtPopUp.classList.add('light_color');
  } else {
    // console.log('DARK');
    refs.modalPopUp.classList.remove('light_shadow', 'light_color');
    refs.btnPopUp.classList.remove('light_color');
    refs.blokPopUp.classList.remove('light_color');
    refs.closeIconPopUp.classList.remove('light_fill');
    refs.aboutTxtPopUp.classList.remove('light_color');
  }
}
