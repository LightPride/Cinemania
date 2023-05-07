const refs = {
  overlayPopUp: document.getElementById('overlayPopUp'),
  closeModalPopUp: document.getElementById('closeModalPopUp'),
  openModalPopUp: document.getElementById('openModalPopUp'),
  modalPopUp: document.getElementById('modalPopUp'),
  btnPopUp: document.getElementById('mylibrary'),
  closeIconPopUp: document.querySelector('.pop-up__close-icon'),
  blokPopUp: document.querySelector('.pop-up__blok'),
  aboutTxtPopUp: document.querySelector('.pop-up__about-txt'),

  image: document.querySelector('.pop-up__img'),
  titles: document.querySelector('.pop-up__title'),
  vote: document.querySelector('.vote'),
  votes: document.querySelector('.votes'),
  popular: document.querySelector('.popularity'),
  genre: document.querySelector('.genres'),
  currentNavigation: document.querySelectorAll('.navigation__link'),
};


changeCurrentNavigation();

const classes = {
  openModal: 'open-modal',
  visual: 'visual',
};

refs.openModalPopUp.addEventListener('click', handlePopUpModal);
refs.closeModalPopUp.addEventListener('click', handlePopUpModal);
refs.overlayPopUp.addEventListener('click', handlePopUpModal);

document.addEventListener('keydown', handlePopUpModalClose)

function handlePopUpModalClose({code}) {  
  if (code === 'Escape' && modalPopUp.classList.contains(classes.visual)) {    
    handlePopUpModal();
  }
}

function handlePopUpModal() {
  getPopUpMovies();
  toogleLightPopUp();
  document.body.classList.toggle(classes.openModal);
  overlayPopUp.classList.toggle(classes.visual);
  modalPopUp.classList.toggle(classes.visual);  
  console.log(modalPopUp);  
};

// ===== Перемикач теми =====
const toogle = document.getElementById('toggle');
toogle.addEventListener('click', toogleLight);

function toogleLight() {
document.body.classList.toggle('light_color');
toogleLightPopUp();
}

function toogleLightPopUp() {   
  if (document.body.classList.contains('light_color')) {
  refs.modalPopUp.classList.add('light_shadow', 'light_color');  
  refs.btnPopUp.classList.add('light_color');  
  refs.blokPopUp.classList.add('light_color');  
  refs.closeIconPopUp.classList.add('light_fill');   
  refs.aboutTxtPopUp.classList.add('light_color');  
 } else {
  console.log(refs.modalPopUp.classList.contains('light_shadow'));  
  refs.modalPopUp.classList.remove('light_shadow', 'light_color');  
  refs.btnPopUp.classList.remove('light_color');  
  refs.blokPopUp.classList.remove('light_color');  
  refs.closeIconPopUp.classList.remove('light_fill');   
  refs.aboutTxtPopUp.classList.remove('light_color');  
 }
};

// POPUP MOVIES
const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
const POPUP_URL = `https://api.themoviedb.org/3/movie/`;
const POPUP_ID = 840326;
// 502356 840326 1008005

function fetchPopUpMovies() {
  return fetch(`${POPUP_URL}${POPUP_ID}?api_key=${API_KEY}`)
  .then(data => {    
    return data.json();      
  })
}


async function getPopUpMovies() {
  try {
    const { poster_path, title, overview, popularity, vote_average, vote_count, tagline, genres } = await fetchPopUpMovies();
    refs.image.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    refs.titles.textContent = title;
    refs.vote.textContent = vote_average;
    refs.votes.textContent = vote_count;
    refs.popular.textContent = popularity;
    console.log(genres);
    refs.genre.textContent = genres.map((genres) => genres.name).join(" ");
    refs.aboutTxtPopUp.textContent = overview;
  } catch (error) {
    console.log(error);
  }

  function getPopUpMovies() {
    fetchPopUpMovies()
      .then(({ poster_path, title, overview, popularity, vote_average, vote_count, tagline, genres }) => {
        console.log(genres)
        refs.image.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        refs.titles.textContent = title;
        refs.vote.textContent = vote_average;
        refs.votes.textContent = vote_count;
        refs.popular.textContent = popularity;
        refs.genre.textContent = tagline;
        refs.aboutTxtPopUp.textContent = overview;
      })
      .catch(error => console.log(error));
  }
}

getPopUpMovies();


function changeCurrentNavigation() {
  refs.currentNavigation[0].classList.remove('current');
  refs.currentNavigation[1].classList.remove('current');
  refs.currentNavigation[2].classList.add('current');
}