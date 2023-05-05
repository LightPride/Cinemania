const toogle = document.getElementById('toggle');
toogle.addEventListener('click', toogleLight);

document.addEventListener('keydown', (event) => {  
  console.log('key', event.key);
  console.log('code', event.code);
  console.log('event', event);
})

const refs = {  
  overlayPopUp: document.getElementById('overlayPopUp'),  
  closeModalPopUp: document.getElementById('closeModalPopUp'),
  openModalPopUp: document.getElementById('openModalPopUp'),
  modalPopUp: document.getElementById('modalPopUp'),
  btnPopUp: document.getElementById('mylibrary'),
  closeIconPopUp: document.querySelector('.pop-up__close-icon'),
  blokPopUp: document.querySelector('.pop-up__blok'), 
  aboutTxtPopUp: document.querySelector('.pop-up__about-txt'),
};

console.log(refs.aboutTxtPopUp);

const classes = {
  openModal: 'open-modal',
  visual: 'visual',
};

console.log(refs.modalPopUp);

refs.openModalPopUp.addEventListener('click', handlePopUpModal);
refs.closeModalPopUp.addEventListener('click', handlePopUpModal);
refs.overlayPopUp.addEventListener('click', handlePopUpModal);

document.addEventListener('keydown', handlePopUpModalClose)

function handlePopUpModalClose({code}) {  
  if (code === 'Escape' && modalPopUp.classList.contains(classes.visual)) {
    console.log('+');
    handlePopUpModal();
  }
}

function handlePopUpModal() {
  document.body.classList.toggle(classes.openModal);
  overlayPopUp.classList.toggle(classes.visual);
  modalPopUp.classList.toggle(classes.visual);  
  console.log(modalPopUp);
};


function toogleLight() {   
  if (!refs.modalPopUp.classList.contains('light_shadow')) {
  console.log(refs.modalPopUp.classList.contains('light_shadow'));  
  refs.modalPopUp.classList.add('light_shadow');  
  refs.btnPopUp.classList.add('light_color');  
  refs.blokPopUp.classList.add('light_color');  
  refs.closeIconPopUp.classList.add('light_fill');   
  refs.aboutTxtPopUp.classList.add('light_color');  
  document.body.classList.add('light_color');
 } else {
  console.log(refs.modalPopUp.classList.contains('light_shadow'));  
  refs.modalPopUp.classList.remove('light_shadow');  
  refs.btnPopUp.classList.remove('light_color');  
  refs.blokPopUp.classList.remove('light_color');  
  refs.closeIconPopUp.classList.remove('light_fill');   
  refs.aboutTxtPopUp.classList.remove('light_color');  
  document.body.classList.remove('light_color');
 }
};

// fetchUpcomingMovies();

// console.dir(fetchUpcomingMovies());