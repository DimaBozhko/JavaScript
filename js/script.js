"use strict";

let numberofFilms = prompt("сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
	count: numberofFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let a = prompt("Один из последних просмотренных фильмов"),
	b = prompt("на сколько оцените его?"),
	c = prompt("Один из последних просмотренных фильмов"),
	d = prompt("на сколько оцените его?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
