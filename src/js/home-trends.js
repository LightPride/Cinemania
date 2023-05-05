const container = document.querySelector('.wekly-trends__insert');

function fetchTrendsMovies() {
    const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
    const BASE_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`;

    return fetch(BASE_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        });
}

function renderMovies(movies, count) {
    container.innerHTML = '';

    movies.slice(0, count).forEach(movie => {
        const li = document.createElement('li');
        const title = document.createElement('h3');
        const img = document.createElement('img');
        const rating = document.createElement('span');

        title.innerText = movie.title;
        img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        rating.innerText = movie.vote_average;

        li.appendChild(title);
        li.appendChild(img);
        li.appendChild(rating);
        container.appendChild(li);
    });
}

function getFetchedMovies() {
    fetchTrendsMovies().then(data => {
        const movies = data.results;
        let count;

        if (window.matchMedia('(max-width: 767px)').matches) {
            // mobile
            count = 1;
        } else if (window.matchMedia('(max-width: 1023px)').matches) {
            // tablet
            count = 2;
        } else {
            // desktop
            count = 3;
        }

        renderMovies(movies, count);
    }).catch(error => console.log(error));
}

getFetchedMovies();

// Listen to resize events and update the rendered movies
window.addEventListener('resize', getFetchedMovies);