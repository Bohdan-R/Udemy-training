const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
} else {
    console.log('error');
}


