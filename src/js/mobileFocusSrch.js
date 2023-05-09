const currentNavigation = document.querySelectorAll('.mobile-header__link');
changeCurrentNavigation();

function changeCurrentNavigation() {
  currentNavigation[1].classList.add('current');
}
