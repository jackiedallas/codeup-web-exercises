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
rollSixSided(1);

function isANumber(value){
	return typeof value === 'number';
}

function increment(input) {
	// if(isNaN(parseInt(input))){
	// 	return false;
	// }
	// ASSESSMENT REVIEW (CLEANER SOLUTION)
	// return ++input;
	// }
	
	var allNums = parseInt(input);
	if(!isNaN(allNums)){
		return allNums += 1;
	} else {
		return false;
	}
}

function decrement(input){
	// if(isNaN(parseInt(input))){
	// 	return false;
	// } else {
	// 	// ASSESSMENT REVIEW (CLEANER SOLUTION)
	// 	return --input;
	// }
	
	var allNums = parseInt(input);
	if(!isNaN(allNums)){
		return allNums -= 1;
	} else {
		return false;
	}
}

function getHighestNumber(num1, num2, num3) {
	// var allNums = parseInt(input);
	// var Num1 = parseFloat(num1);
	// var Num2 = parseFloat(num2);
	// var Num3 = parseFloat(num3);
	if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2)) || isNaN(parseFloat(num3))) {
		return false;
	} else {
		return Math.max(num1, num2, num3)
	}
	
	// return Math.max(arguments)
}

function parseNumber(input) {
	if(!isNaN(input)){
		return parseFloat(input);
	}
	// if(typeof input === 'string'){
	// 	return parseInt(input);
	// } else {
	// 	return parseFloat(input);
	// }
}
////
function add(num1, num2) {
	var Num1 = parseFloat(num1);
	var Num2 = parseFloat(num2);
	if(!isNaN(Num1) && !isNaN(Num2)){
		return Num1 + Num2;
	} else {
		return false;
	}
	// 	if(!isNaN(parseFloat(num1)) || !isNaN(parseFloat(num2))){
	// 		return num1 + num2;
	// 	} else {
	// 		return false;
	// 	}
	
	
}

// function isPalindrome(input){
// 	if(input === 'Monday'){
// 		return false;
// 	} else if(typeof input === 'string'){
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

function isPalindrome(input) {
	if(typeof input !== 'string'){
		return false;
	}
	var inputLow = input.toLowerCase()
	var inputArr = inputLow.split('')
	var revArr = inputArr.reverse();
	var newInputArr = revArr.join('');
	if(inputLow === newInputArr){
		return true;
	} else{
		return false;
	}
}

console.log(isPalindrome('BOB'));
console.log(isPalindrome('radar'));
console.log(isPalindrome('jackie'));

function square(input) {
	if(typeof input === 'number'){
		return Math.pow(input,2);
	} else{
		return false;
	}
}

function multiply(num1, num2) {
	var Num1 = parseFloat(num1);
	var Num2 = parseFloat(num2);
	
	if(!isNaN(Num1) && !isNaN(Num2)){
		return Num1 * Num2;
	} else{
		return false;
	}
}

function sumOfSquares(num1, num2) {
	var Num1 = parseFloat(num1);
	var Num2 = parseFloat(num2);
	
	if(!isNaN(Num1) && !isNaN(Num2)){
		return (Num1**2) + (Num2**2);
	} else{
		return false;
	}
}