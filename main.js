"use strict";

let numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");
let a = prompt("один из последних просмотренных фильмов?", ""),
    b = +prompt("на сколько оцените его", ""),
    c = prompt("один из последних просмотренных фильмов?", ""),
    d = +prompt("на сколько оцените его", "");


let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false

};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
