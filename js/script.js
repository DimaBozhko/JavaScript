"use strict";

let numberofFilms = +prompt("сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
	count: numberofFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for ( let i = 0; i < 2; i++) {

	let a = prompt("Один из последних просмотренных фильмов"),
		b = prompt("на сколько оцените его?");

	if ( a != null && b != null && a != "" && b != "" && a.length < 50 ) {

		personalMovieDB.movies[a] = b;
		console.log('done');

	} else {

		console.log('error');
		i--;

	};
};

if (personalMovieDB.count < 10) {
	console.log("необходимо больше фильмов")
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 25) {
	console.log("норм, но можно лучше")
} else if (personalMovieDB.count > 25) {
	console.log("воу воу, полегче, Дружок")
} else {
	console.log("ошибка")
};


console.log(personalMovieDB);
