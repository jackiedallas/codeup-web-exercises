// 'use strict'
//
// console.log("Ice Cream Seller question...");
// console.log('');
// // Still figuring this one out...
// function iceCreamSeller(x, y) {
// 	// var conesToSell = Math.floor(Math.random() * 50) + 50;
// 	// var conesBought = Math.floor(Math.random() * 5) + 1;
// 	do{
// 		if (true) {
// 			var conesBought = x - y;
// 			console.log("I just sold " + conesBought + " ice cream cones.")
// 			x--;
// 		}
// 	} while(x >= 8)
// }
// iceCreamSeller(10, 2);



function rollSixSided(numberOfRolls){

	for (var i = 0; i < numberOfRolls; i++) {
		var dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
		console.log("You rolled a " + dice);
	}
}
rollSixSided(50);