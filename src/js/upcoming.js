// TODO ФЕТЧ АБИ ОТРИМАТИ UPCOMING MOVIES

function fetchUpcomingMovies() {
// https://developers.themoviedb.org/3/movies/get-upcoming

    const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
    const BASE_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

    return fetch(`${BASE_URL}`)
    .then(movieData => {

        console.log(movieData);
        if (!movieData.ok) {
            throw new Error(movieData.status)
          }
        
        return movieData.json()})
}

// TODO ВИКЛИК ФУНКЦІЇ ФЕТЧУ
fetchUpcomingMovies()
