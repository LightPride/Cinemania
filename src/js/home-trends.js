const container = document.querySelector('.weekly-trends__insert');
const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';

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


function getFetchedMovies() {
    fetchTrendsMovies().then(movies => {
        let count;

        if (window.matchMedia('(max-width: 767px)').matches) {
            // mobile
            count = 1;
        } else if (window.matchMedia('(max-width: 1023px)').matches) {
            // desktop
            count = 3;
        }

        renderMovies(movies, count);
    }).catch(error => console.log(error));
}


getFetchedMovies();

async function renderMovies(movies, count) {
    const container = document.getElementById('movies-container');
    container.innerHTML = '';

    movies.slice(0, count).forEach(async movie => {
        const genres = await getGenresById(movie.genre_ids);
        const li = document.createElement('li');
        const movieInfo = document.createElement('div');
        const title = document.createElement('h3');
        const img = document.createElement('img');
        const rating = document.createElement('span');
        const releaseDate = document.createElement('span');
        const genre = document.createElement('span');

        title.innerText = `${movie.title}`;
        genre.innerText = `${genres}`;
        releaseDate.innerText = `${movie.release_date.slice(0, 4)}`;
        rating.innerText = `${movie.vote_average.toFixed(1)}`;
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        img.alt = `${movie.title} movie poster`;

        movieInfo.appendChild(title);
        movieInfo.appendChild(genre);
        movieInfo.appendChild(releaseDate);

        li.appendChild(img);
        li.appendChild(movieInfo);
        li.appendChild(rating);
        container.appendChild(li);
    });
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

window.addEventListener('resize', () => {
    getFetchedMovies();
});


