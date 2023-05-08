const container = document.getElementById('movies-container');
const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const TABLET_WIDTH_THRESHOLD = 768;
const colWidthClass = 'col-md-4';

async function fetchTrendsMovies() {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const movieData = await response.json();
        return movieData.results;
    } catch (error) {
        console.log(error);
    }
}

async function renderMovies(movies, count) {
    container.innerHTML = '';
    const moviesContainer = document.createElement('ul');
    moviesContainer.id = 'movies-container';
    moviesContainer.classList.add('weekly-list', 'd-flex', 'flex-wrap');
    container.appendChild(moviesContainer);

    movies.slice(0, count).forEach(async (movie) => {
        const genres = await getGenresById(movie.genre_ids);
        const li = document.createElement('li');
        li.classList.add('weekly-item');

        const movieDetails = document.createElement('div');
        movieDetails.classList.add('weekly-wrapper');

        const title = document.createElement('h3');
        title.classList.add('weekly-info__title');
        title.innerText = `${movie.title}`;

        const releaseDateAndGenre = document.createElement('span');
        releaseDateAndGenre.classList.add('weekly-info__genres__data');
        releaseDateAndGenre.innerText = `${genres.split(',').slice(0, 2).join(', ')} | ${movie.release_date.slice(0, 4)}`;

        const movieRating = document.createElement('div');
        movieRating.classList.add('weekly-rating');
        const ratingValue = document.createElement('span');
        ratingValue.innerText = `${movie.vote_average.toFixed(1)}`;
        movieRating.appendChild(ratingValue);

        const poster = document.createElement('img');
        poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        poster.alt = `${movie.title} movie poster`;
        poster.classList.add('weekly-img');

        movieDetails.appendChild(title);
        movieDetails.appendChild(releaseDateAndGenre);

        li.appendChild(movieDetails);
        li.appendChild(movieRating);
        li.appendChild(poster);

        moviesContainer.appendChild(li);
    });

    if (window.innerWidth < TABLET_WIDTH_THRESHOLD) {
        moviesContainer.style.gap = '0';
    }
}






async function getGenresById(genreIds) {
    const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
    const BASE_URL = `https://api.themoviedb.org/3/genre/movie/list`;

    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    const genreNames = genreIds.map((genreId) => {
        const genre = data.genres.find((genre) => genre.id === genreId);
        return genre.name;
    });

    return genreNames.join(', ');
}

async function getFetchedMovies() {
    let count;
    if (window.innerWidth < TABLET_WIDTH_THRESHOLD) {
        count = 1;
    } else {
        count = 3;
    }
    const movies = await fetchTrendsMovies();
    renderMovies(movies, count);
}

getFetchedMovies();

window.addEventListener('resize', () => {
    getFetchedMovies()
});
