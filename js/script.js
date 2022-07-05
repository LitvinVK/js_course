const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
    
for (let i = 0; i < 2; i++) {
    const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    const lastMovieScore = prompt('На сколько оцените его?', '');

    if (lastMovie != null && lastMovieScore != null && lastMovie != '' && lastMovieScore != '' &&
    lastMovie.length < 50 && lastMovieScore.length < 50) {
        personalMovieDB.movies[lastMovie] = lastMovieScore;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

// let i = 0;

// while (i != 2) {
//     const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
//     const lastMovieScore = prompt('На сколько оцените его?', '');

//     if (lastMovie != null && lastMovieScore != null && lastMovie != '' && lastMovieScore != '' &&
//     lastMovie.length < 50 && lastMovieScore.length < 50) {
//         personalMovieDB.movies[lastMovie] = lastMovieScore;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//     }
// }

// let i2 = 0;

// do {
//     const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
//     const lastMovieScore = prompt('На сколько оцените его?', '');

//     if (lastMovie != null && lastMovieScore != null && lastMovie != '' && lastMovieScore != '' &&
//     lastMovie.length < 50 && lastMovieScore.length < 50) {
//         personalMovieDB.movies[lastMovie] = lastMovieScore;
//         console.log('done');
//         i2++;
//     } else {
//         console.log('error');
//     }
// } while (i2 != 2);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);