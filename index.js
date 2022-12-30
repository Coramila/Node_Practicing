var superHeroes = require("superheroes");
var superVillains = require("supervillains");

var myHero = superHeroes.random();
var myVillain = superVillains.random();

console.log("My hero: " + myHero);
console.log("My villain: " + myVillain);