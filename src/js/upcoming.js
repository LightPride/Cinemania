// TODO ФЕТЧ АБИ ОТРИМАТИ UPCOMING MOVIES

function fetchUpcomingMovies() {
// https://developers.themoviedb.org/3/movies/get-upcoming

    const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
    const BASE_URL = `https://api.themoviedb.org/3/movie/upcoming`;

    return fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`)
    .then(movieData => {

        if (!movieData.ok) {
            throw new Error(movieData.status)
          }
        console.log(movieData);

        return movieData.json()
      })

}

// TODO ВИКЛИК ФУНКЦІЇ ФЕТЧУ
fetchUpcomingMovies()

return `
<h2 class="upcoming__title">UPCOMING THIS MONTH</h2>
  <div class="upcoming__insert">
    <img class="upcoming__poster" href="" alt="Movie poster"/>
    <p class="upcoming__movie-name">TEMPORARY NAME</p>

    <div class="upcoming__infolist-text">
      <p class="upcoming__about-item">Release date</p>
      <p class="upcoming__about-item">Vote / Votes</p>
      <p class="upcoming__about-item">Popularity</p>
      <p class="upcoming__about-item">Genre</p>
    </div>

    <div class="upcoming__infolist">
      <p class="upcoming__release"></p>
      <p class="upcoming__vote"></p>
      <p class="upcoming__popularity"></p>
      <p class="upcoming__genre"></p>
    </div>

    <p class="upcoming__about-title">ABOUT</p>
    <p class="upcoming__about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, est! Dolore ex mollitia ut sunt! Blanditiis quae quod id debitis maxime nulla, voluptas nostrum magni natus, eius, consectetur corporis aut.</p>
  </div>
`