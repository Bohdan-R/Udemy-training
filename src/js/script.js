let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i += 1) {
        const a = prompt('Один из последних просмотреных фильмов?', '');
        const b = prompt('Как оцените фильм?', '');

        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i -= 1;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    };
};

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i += 1) {
        /* let yourFilmGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        personalMovieDB.genres[i] = yourFilmGenre; */

        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
    console.log(personalMovieDB);
}

writeYourGenres();