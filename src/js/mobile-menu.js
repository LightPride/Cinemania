(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const backdrop = document.querySelector('.backdrop-mobile');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    backdrop.classList.add('block');
  };

  openMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    backdrop.classList.remove('block');
    openMenuBtn.setAttribute('aria-expanded', false);
  });

  document.addEventListener('click', e => {
    if (!mobileMenu.contains(e.target) && !openMenuBtn.contains(e.target)) {
      mobileMenu.classList.remove('is-open');
      backdrop.classList.remove('block');
      openMenuBtn.setAttribute('aria-expanded', false);
    }
  });
})();
