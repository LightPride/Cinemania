// const container = document.querySelector('.weekly-trends__insert');


// const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';
// const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week';

// function fetchTrendsMovies() {
//     //developers.themoviedb.org/3/trending/get-trending
//     return fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`)
//         .then(movieData => {
//             console.log(movieData);
//             if (!movieData.ok) {
//                 throw new Error(movieData.status)
//             }
//             return movieData.json()


//         })
// }
// fetchTrendsMovies()


// function renderMovies(movies, count) {
//     container.innerHTML = '';

//     movies.slice(0, count).forEach(movie => {
//         const li = document.createElement('li');
//         const title = document.createElement('h3');
//         const img = document.createElement('img');
//         const rating = document.createElement('span');

//         title.innerText = movie.title;
//         img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//         rating.innerText = movie.vote_average;

//         li.appendChild(title);
//         li.appendChild(img);
//         li.appendChild(rating);
//         container.appendChild(li);
//     });
// }

// function getFetchedMovies() {
//     fetchTrendsMovies().then(data => {
//         const movies = data.results;
//         let count;

//         if (window.matchMedia('(max-width: 767px)').matches) {
//             // mobile
//             count = 1;
//         } else if (window.matchMedia('(max-width: 1023px)').matches) {
//             // tablet
//             count = 2;
//         } else {
//             // desktop
//             count = 3;
//         }

//         renderMovies(movies, count);
//     }).catch(error => console.log(error));
// }

// getFetchedMovies();

// // Listen to resize events and update the rendered movies
// window.addEventListener('resize', getFetchedMovies);


// // // ================================================
// // // const { createProxyMiddleware } = require('http-proxy-middleware');

// // // module.exports = function (app) {
// // //     app.use(
// // //         '/api',
// // //         createProxyMiddleware({
// // //             target: 'https://api.themoviedb.org/3',
// // //             changeOrigin: true,
// // //         })
// // //     );
// // // };

// // // =================================================


// // const express = require('express');
// // const { createProxyMiddleware } = require('http-proxy-middleware');

// // const app = express();

// // // Налаштування проксі-сервера для запитів до API-сервера
// // app.use('/api', createProxyMiddleware({
// //     target: 'https://api.themoviedb.org',
// //     changeOrigin: true,
// //     pathRewrite: {
// //         '^/api': '/3/trending/movie/week' // замінюємо шлях запиту з '/api' на '/3/trending/movie/week'
// //     },
// //     headers: {
// //         'Authorization': 'Bearer <your-api-key>',
// //         'Content-Type': 'application/json',
// //     }
// // }));

// // // Ваші маршрути та інші налаштування сервера

// // // Запускаємо сервер
// // app.listen(3000, () => {
// //     console.log('Server is running on http://localhost:3000');
// // });

// // !Перевірка на помилку

// // fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(response => response.json())
// //     .then(data => console.log(data))
// //     .catch(error => console.error(error))




// // fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(response => response.json())
// //     .then(data => {
// //         const userList = document.querySelector('.user-list');
// //         let output = '';
// //         data.forEach(user => {
// //             output += `
// //         <li>
// //           <h3>${user.name}</h3>
// //           <p>${user.email}</p>
// //         </li>
// //       `;
// //         });
// //         userList.innerHTML = output;
// //     })
// //     .catch(error => console.error(error));
//  ===============
