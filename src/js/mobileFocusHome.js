const currentNavigation = document.querySelectorAll('.mobile-header__link');
changeCurrentNavigation();

function changeCurrentNavigation() {
  currentNavigation[0].classList.add('current');
}
