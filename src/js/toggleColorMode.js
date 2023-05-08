const darkModeIcon = document.querySelector('.dark-mode__icon');
const lightModeIcon = document.querySelector('.light-mode__icon');
const toggleButton = document.querySelector('.toggleButton');

const applyTheme = isLightMode => {
  if (isLightMode) {
    darkModeIcon.style.display = 'none';
    lightModeIcon.style.display = 'block';
    document.body.classList.add('light-theme');
  } else {
    darkModeIcon.style.display = 'block';
    lightModeIcon.style.display = 'none';
    document.body.classList.remove('light-theme');
  }
};

const toggleTheme = () => {
  const isLightMode = document.body.classList.contains('light-theme');
  localStorage.setItem('isLightMode', !isLightMode);
  applyTheme(!isLightMode);
};

toggleButton.addEventListener('click', toggleTheme);

const isLightMode = JSON.parse(localStorage.getItem('isLightMode'));
if (isLightMode !== null) {
  applyTheme(isLightMode);
}
