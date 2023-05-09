const refs = {
upcomingBtn: document.querySelector('#upcoming_btn'),
addToLibraryBtn: document.getElementById('mylibrary'),
libraryList: document.getElementById('library_list'),
}

const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
const POPUP_URL = `https://api.themoviedb.org/3/movie/`;

refs.addToLibraryBtn.addEventListener('click', onAddToLibraryBtnClick);

function onAddToLibraryBtnClick (e) {
    console.log('click on add to library btn');

    fetchFilmById().then(data => {
        const film = {
          title: data.title,
          posterPath: data.poster_path,
          genres: data.genres,
          releaseYear: data.release_date.substring(0, 4),
          id: data.id,
          voteAverage: data.vote_average,
        };
      
        console.log(film); // Вывести объект фильма в консоль

        console.log(markup(film));
        console.log(refs.libraryList);
        refs.libraryList.insertAdjacentHTML('beforeend', markup(film));
      });


}

function fetchFilmById() {
    return fetch(`${POPUP_URL}${localStorage.getItem('mylbery-id')}?api_key=${API_KEY}`)
    .then(data => {    
      return data.json()  
    })
  }



function markup(film) {

    return `
    <li class="movie__card" data-id="${film.id}">
        <div class="movie__card-poster" style="background-image: linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0), rgba(0,0,0,1)),
  url(${film.poster_path});" data-id="${film.id}"></div>

        <div class="movie__card-info" data-id="${film.id}">
          <h3 data-id="${film.id}">${film.title}</h3>
          <p data-id="${film.id}"><span data-id="${film.id}">${film.genres}</span> | <span data-id="${film.id}">${film.release_date}</span></p>
        </div>

        <div class="movie__card-rating" data-id="${film.id}">${film.vote_average}</div>
      </li>
    `
}

console.log(refs.libraryList);