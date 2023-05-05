const darkModeIcon = document.querySelector('.dark-mode__icon');
const lightModeIcon = document.querySelector('.light-mode__icon');
const toggleButton = document.querySelector('.toggleButton');

toggleButton.addEventListener('click', () => {
  if (darkModeIcon.style.display === 'none') {
    darkModeIcon.style.display = 'block';
    lightModeIcon.style.display = 'none';
  } else {
    darkModeIcon.style.display = 'none';
    lightModeIcon.style.display = 'block';
  }
});
