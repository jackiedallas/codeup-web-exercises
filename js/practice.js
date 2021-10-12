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

//Find a vowel at the beginning and end with RegEx
//  ^ => first item matches:
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// + => for 1 or more occurrances (this ensures str length > 3)
// \1 => matches to previously stored match.
// \2 looks for matched item stored 2 instances ago
// \3 looks for matched item stored 3 ago, etc

//  $ ensures that matched item is at end of the sequence
function startEndVowel(){
let re = /^([aeiou]).*\1$/i;

return re;

}
// if (button){
// 	button.addEventListener('click', swapper, false)
// }
//
// var button = document.getElementById('btn');
//
// button.addEventListener("click", function () {
// 	var i = 0;
// 	for(i = 0; i < 10; i++) {
// 		button.innerHTML = ++i
// 	}
// })

function factorial (number) {
	 var product = 1;
	for (let i = 1; i <=number ; i++) {
		product *= i;
	}
	return product;
}

console.log(factorial(8));

function getGrade(score) {
	let grade;
	// Write your code here
	if(score > 25) {
		grade = 'A';
	} else if (score > 20) {
		grade = 'B';
	} else if (score > 15) {
		grade = 'C';
	} else if (score > 10) {
		grade = 'D';
	} else if (score > 5) {
		grade = 'E';
	} else {
		return 'F';
	}
	return grade;
}

console.log(getGrade(17));

var hasTacos = ['blueberry muffin', 'banana', 'yogurt', 'cereal', 'brisket and egg taco'];
var noTacos = ['parfait', 'omlette de frumage', 'protein shake', 'fasting'];

function tacoTuesday(input) {
	var newArr = input.join(" ").split(" ")
	console.log(newArr)
	for (var i = 0; i < newArr.length; i++) {
		if (newArr.includes('taco')) {
			return true;
		} else if (!newArr.includes('taco')) {
			return false;
		}
	}
}

console.log(tacoTuesday(hasTacos));
console.log(tacoTuesday(noTacos));




//Live Search Function
function liveSearchCoffees() {
	// making sure all inputs are lowercase
	var searchCoffees = searchArea.value.toLowerCase();
	console.log(searchCoffees)
	var searchedCoffees = [];
	// console.log(searchedCoffees);
	coffees.forEach((coffee) => {
		if (coffee.name.toLowerCase().includes(searchCoffees)) {
			searchedCoffees.push(coffee);
		}
	})
	// console.log(searchedCoffees);
	tbody.innerHTML = renderCoffees(searchedCoffees);
}

var searchArea = document.querySelector('#search-area');
searchArea.addEventListener('keyup', liveSearchCoffees);






