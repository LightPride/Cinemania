const currentNavigation = document.querySelectorAll('.mobile-header__link');
changeCurrentNavigation();

function changeCurrentNavigation() {
  currentNavigation[2].classList.add('current');
}
