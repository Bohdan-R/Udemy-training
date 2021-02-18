const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        this.count = +prompt('Сколько фильмов вы посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i += 1) {
            const a = prompt('Один из последних просмотреных фильмов?', '');
            const b = prompt('Как оцените фильм?', '');

            if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
                this.movies[a] = b;
            } else {
                console.log('error');
                i -= 1;
            }
        }
    },
    detectPersonalLevel() {
        if (this.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (this.count >= 10 && this.count < 30) {
            console.log('Вы класический зритель');
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log('error');
        }
    },
    showMyDB() {
        if (!this.privat) {
            console.log(personalMovieDB);
        };
    },
    toggleVisibleMyBD() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
    writeYourGenres() {
        for (let i = 0; i < 3; i += 1) {
            let favoriteGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            if (favoriteGenres === null || favoriteGenres === '') {
                i -= 1;
            }

            this.genres[i] = favoriteGenres;
        }

        this.genres.forEach((genre, idx) => {
            console.log(`Любимый жанр #${idx + 1} - это ${genre}`);
        })
    },
};

console.log(personalMovieDB);
personalMovieDB.toggleVisibleMyBD();
personalMovieDB.showMyDB();
console.log(personalMovieDB);

console.log(personalMovieDB.writeYourGenres());