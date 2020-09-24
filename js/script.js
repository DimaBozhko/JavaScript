"use strict";

let numberofFilms;

function start() {
	numberofFilms = +prompt("сколько фильмов вы уже посмотрели?", "");

	while (numberofFilms == "" || numberofFilms == null || isNaN(numberofFilms)) {
		numberofFilms = +prompt("сколько фильмов вы уже посмотрели?", "");
	}
}

// start();


let personalMovieDB = {
	count: numberofFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function showMyBD() {
	if (personalMovieDB.privat == false) {
		console.log(personalMovieDB);
	}
}

// showMyBD();

function writeYourGenres() {
	for (let i = 1; i < 4; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под №${i} ?`);
	}
}

writeYourGenres();

function rememberMyFilms() {
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
	}
}

// rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count <= 10) {
		console.log("необходимо больше фильмов")
	} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 25) {
		console.log("норм, но можно лучше")
	} else if (personalMovieDB.count > 25) {
		console.log("воу воу, полегче, Дружок")
	} else {
		console.log("ошибка")
	};	
}

// detectPersonalLevel();



