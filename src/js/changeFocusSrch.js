const currentNavigation = document.querySelectorAll('.navigation__link');
changeCurrentNavigation();

function changeCurrentNavigation() {
  currentNavigation[0].classList.remove('current');
  currentNavigation[2].classList.remove('current');
  currentNavigation[1].classList.add('current');
}
