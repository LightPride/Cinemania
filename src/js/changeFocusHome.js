const currentNavigation = document.querySelectorAll('.navigation__link');
changeCurrentNavigation();

function changeCurrentNavigation() {
  currentNavigation[0].classList.add('current');
}
