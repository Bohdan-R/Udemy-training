const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотреных фильмов?', ''),
    b = prompt('Как оцените фильм?', ''),
    c = prompt('Один из последних просмотреных фильмов?', ''),
    d = prompt('Как оцените фильм?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);