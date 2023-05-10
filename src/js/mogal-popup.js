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
  openModalPopUp: document.querySelector('.catalog__gallery'),
  openModalPopUp: document.getElementById('movies-container'),
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
refs.btnPopUp.addEventListener('click', () => {
  if (refs.btnPopUp.textContent === 'Add to my library') {
    refs.btnPopUp.textContent = 'Remove from my library';
  } else {
    refs.btnPopUp.textContent = 'Add to my library';
  }
});

if (!refs.openModalPopUp) {
} else {
  refs.openModalPopUp.addEventListener('click', handlePopUpModal);
}
// refs.openModalPopUp.addEventListener('click', handlePopUpModal);
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

  

  setTimeout(() => {
    toogleLight();
    getPopUpMovies();
    document.body.classList.toggle(classes.openModal);
    overlayPopUp.classList.toggle(classes.visual);
    document.body.classList.toggle('modal-open');
    modalPopUp.classList.toggle(classes.visual);
  }, 0);


  // localStorage.removeItem('film-id', MYLIBRARY_ID);
  // localStorage.removeItem('mylbery-id', MYLIBRARY_ID);
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

    const savedSettings = localStorage.getItem('myLibraryIds');
    const parsedSettings = JSON.parse(savedSettings);

    if (parsedSettings.idsArray.includes(MYLIBRARY_ID)) {
      refs.btnPopUp.textContent = 'Remove from my library';
    } else {
      refs.btnPopUp.textContent = 'Add to my library';
    }
  } catch (error) {
    console.log(error);
  }
}

// === set/remome в localStorage 'mylberyId' ====
refs.btnPopUp.addEventListener('click', pushMyLibrary);

function pushMyLibrary() {
  // if (!refs.btnPopUp.classList.contains('add_mylibrary')) {
  //   refs.btnPopUp.classList.add('add_mylibrary');
  //   localStorage.setItem('mylbery-id', MYLIBRARY_ID);
  // } else {
  //   refs.btnPopUp.classList.remove('add_mylibrary');
  //   refs.btnPopUp.classList.add('btn');
  //   localStorage.removeItem('mylbery-id', MYLIBRARY_ID);
  // }
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
