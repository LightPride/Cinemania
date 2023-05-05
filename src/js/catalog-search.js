const refs = {
  catalogForm: document.querySelector('#search-form'),
  catalogGallery: document.querySelector('.catalog__gallery'),
};

const { catalogForm, catalogGallery } = refs;

catalogForm.addEventListener('submit', onCatalogFormSubmit);

function onCatalogFormSubmit(e) {
  e.preventDefault();

  const { catalogSearch } = e.currentTarget;
}

function fetchCatalogSearchMovies(name) {
  const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
  const BASE_URL = 'https://api.themoviedb.org/3/movie/upcoming';

  return fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`).then(
    movieData => {
      if (!movieData.ok) {
        throw new Error(movieData.status);
      }

      return movieData.json();
    }
  );
}
