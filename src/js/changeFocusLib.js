const currentNavigation = document.querySelectorAll('.navigation__link');
changeCurrentNavigation();

function changeCurrentNavigation() {
  currentNavigation[2].classList.add('current');
}
