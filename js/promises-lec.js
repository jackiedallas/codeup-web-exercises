"use strict";
$(document).ready(function () {
/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

// var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
// return of fetch request is a Promise object

//TODO: console log the results of the above Promise. What is the result?
// 	console.log(pokemonAPI)
//TODO: add a method that runs if the Promise resolves successfully
		
//TODO: add a method that runs if the Promise fails

//TODO: In the callback function of the .then method, parse the response into JSON
// pokemonAPI.then(function (results) {
// 	console.log(results);
// 	// results.text().then((text)=>{
// 	// 	console.log(text)})
//
// 	results.json().then((resultsObj) => console.log(resultsObj))
// 		.catch(function (err) {
// 			console.log(err)
// 		});
// })

/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
// BONUS: Is there a way for us to clean up our code?
// 	fetch('https://pokeapi.co/api/v2/pokemon')
// 		.then((response)=>response.json())
// 		.then((jsonData)=>jsonData.results)
// 		.then((results)=>results.forEach((result)=>console.log(result.name)));
// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API
// 	fetch('https://swapi.dev/api/films')
// // TODO: Use Promise chaining to console log the json response
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.then((starWarsFilmsData) => {
// 		//	starWarsFilmsData is a parsed object from the call to respone.json()
// 		console.log(starWarsFilmsData.results)
// 			starWarsFilmsData.results.forEach((film) => console.log('Star Wars: ' + film.title + ', release date -- ' + film.release_date))
// 	})
// TODO: chain another method that iterates through the results array and console logs the names

// TODO: Demonstrate Promise.all and Promise.race
	let pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
	let starWarsAPI = fetch('https://swapi.dev/api/films');
	
	Promise.all([pokemonAPI, starWarsAPI])
		.then((responses) => {
			// responses contains the resoved promises in the same order that they were passed into the all method.
			console.log(responses)
			return Promise.all(responses.map((response) => {
				return response.json()
			}))
		})
		.then((parseResults) => {
			console.log(parseResults)
		})
	
	// Promise.race([pokemonAPI, starWarsAPI])
	// 	.then((response) => {console.log(response)})
})