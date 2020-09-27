"use strict";

let numberofFilms;

let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
			personalMovieDB.count = +prompt("сколько фильмов вы уже посмотрели?", "");
			while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
				personalMovieDB.count = +prompt("сколько фильмов вы уже посмотрели?", "");
			}
		},	
	showMyBD: function() {
		if (personalMovieDB.privat == false) {
			console.log(personalMovieDB)
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i < 4; i++) {
			personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под №${i} ?`);
			if(personalMovieDB.genres[i - 1] == undefined || personalMovieDB.genres[i - 1] == "") {
				i--;
			} 
		}
		personalMovieDB.genres.forEach(function(item, i) {
			console.log(`любимый жанр ${i + 1} - это ${item}`)
		})
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count <= 10) {
			console.log("необходимо больше фильмов")
		} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 25) {
			console.log("норм, но можно лучше")
		} else if (personalMovieDB.count > 25) {
			console.log("воу воу, полегче, Дружок")
		} else {
			console.log("ошибка")
		};	
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = true;
		} else {
			personalMovieDB.privat = false;
		}
	}
};


personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyBD();
personalMovieDB.writeYourGenres();
