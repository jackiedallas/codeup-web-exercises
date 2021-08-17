"use strict"

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(input) {
	var input = input.toLowerCase();
	if (input === 'blue') {
		console.log("blue is the color of the sky")
	} else if (input === 'red') {
		console.log("Strawberries are red")
	} else if (input === 'cyan') {
		console.log("I don't know anything about cyan")
	} else {
		console.log("I don't know the color " + input)
	}
}


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// analyzeColor(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function newColor() {
	var userColor = prompt("What's your favorite color?");
	switch (userColor) {
		case "red":
			console.log("Strawberries are red");
			break;
		case "blue":
			console.log("blue is the color of the sky");
			break;
		case "cyan":
			console.log("I don't know anything about cyan");
			break;
		default:
			alert("I've never seen the color " + userColor + ", but it sounds beautiful!");
			break;
	}
}
// newColor();
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userPick = prompt("Pick a color.");
// analyzeColor(userPick);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

var randomTotal = Math.floor(Math.random() * 100) + 1;
// var randomNum = Math.floor(Math.random() * 6);
// IF ELSE SYNTAX BELOW

function calculateTotal(x) {
	var total = randomTotal;
	console.log("Lucky number is: " + luckyNumber);
	console.log("Price before discount: " + "$" + randomTotal);
	if (luckyNumber == 0) {
		return "You did not win a discount today, your total is " + "$" + total;
	} else if (luckyNumber == 1) {
		return "You won a 10% discount, your final total is " + "$" + (total - (total * 0.1));
	} else if (luckyNumber == 2) {
		return "You won a 25% discount, your final total is " + "$" + (total - (total * 0.25));
	} else if (luckyNumber == 3) {
		return "You won a 35% discount, your final total is " + "$" + (total - (total * 0.35));
	} else if (luckyNumber == 4) {
		return "You won a 50% discount, your final total is " + "$" + (total - (total * 0.5));
	} else if (luckyNumber == 5) {
		return "You won a 100% discount, your order is FREE!";
	}
}

// console.log(calculateTotal(luckyNumber));

// SWITCH SYNTAX BELOW

function calculateTotal(x) {
	var total = randomTotal.toFixed(2);
	// console.log("Lucky number is: " + randomNum);
	// console.log("Price before discount: " + "$" + randomTotal);
	switch(luckyNumber) {
		case 0:
			console.log("You did not win a discount today, your total is " + "$" + total);
			break;
		case 1:
			console.log("You won a 10% discount, your final total is " + "$" + (total - (total * 0.1)));
			break;
		case 2:
			console.log("You won a 25% discount, your final total is " + "$" + (total - (total * 0.25)));
			break;
		case 3:
			console.log("You won a 35% discount, your final total is " + "$" + (total - (total * 0.35)));
			break;
		case 4:
			console.log("You won a 50% discount, your final total is " + "$" + (total - (total * 0.5)));
			break;
		case 5:
			console.log("You won a 100% discount, your order is FREE!");
			break;
	}
}

// calculateTotal(luckyNumber);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

function walmartBill() {
	var total = prompt("Good evening! What was your bill total today?")
	console.log("Lucky number is: " + luckyNumber);
	console.log("Price before discount: " + "$" + total);
	switch(luckyNumber) {
		case 0:
			console.log("Customer's lucky number was 0, no discount was applied.");
			console.log("Total after discount is $" + total)
			alert("You did not win a discount today, your total is " + "$" + total);
			break;
		case 1:
			console.log("Customer's lucky number was 1, 10% discount applied.");
			console.log("Total after discount is $" + (total - (total * .10)));
			alert("Congratulations, your lucky number was 1 and you won a 10% discount! The price before your discount was $" + total + ". Your final total is " + "$" + (total - (total * 0.10)));
			break;
		case 2:
			console.log("Customer's lucky number was 2, 25% discount applied.");
			console.log("Total after discount is $" + (total - (total * .25)))
			alert("Congratulations, your lucky number was 2 and you won a 25% discount! The price before your discount was $" + total + ". Your final total is " + "$" + (total - (total * 0.25)));
			break;
		case 3:
			console.log("Customer's lucky number was 3, 35% discount applied.");
			console.log("Total after discount is $" + (total - (total * .35)))
			alert("Congratulations, your lucky number was 3 and you won a 35% discount! The price before your discount was $" + total + ". Your final total is " + "$" + (total - (total * 0.35)));
			break;
		case 4:
			console.log("Customer's lucky number was 4, 50% discount was applied.");
			console.log("Total after discount is $" + (total - (total * .50)))
			alert("Congratulations, your lucky number was 4 and you won a 50% discount! The price before your discount was $" + total + ". Your final total is " + "$" + (total - (total * 0.50)));
			break;
		case 5:
			console.log("Customer's lucky number was 5, 100% discount was applied.");
			alert("Congratulations, your lucky number was 5 and you won a 100% discount! Your order is FREE!");
			break;
	}
}

//walmartBill();
 // committing
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function numbers() {
	var pickaNumber = confirm("Would you like to pick a number?");
	if (pickaNumber === true) {
		var userNumber = prompt("Pick your number.");
		var pickedNum = parseInt(userNumber);
		if (pickedNum % 2 === 0 && pickedNum > 0) {
			alert("Your number plus 100 is " + (pickedNum + 100) + ". Your number is also even and positive.");
		} else if (pickedNum % 2 !== 0 && pickedNum < 0) {
			alert("Your number plus 100 is " + (pickedNum + 100) + ". Your number is also odd and negative.");
		} else if (pickedNum % 2 === 0 && pickedNum < 0) {
			alert("Your number plus 100 is " + (pickedNum + 100) + ". Your number is also even and negative.");
		} else if (pickedNum % 2 !== 0 && pickedNum > 0) {
			alert("Your number plus 100 is " + (pickedNum + 100) + ". Your number is also odd and positive.");
		} else {
			alert("That is not a number.")
		}

	} else {
		alert("Smh, you're no fun!");
	}
}
numbers();


//Still working through bugs for below switch statement
// switch(pickedNum) {
// 	case pickedNum:
// 		alert("Your number plus 100 is " + (pickedNum + 100));
// 		break;
// 	case pickedNum % 2 === 0:
// 		alert("Your number is even.");
// 		break;
// 	case pickedNum % 2 !== 0:
// 		alert("Your number is odd.");
// 		break;
// 	case pickedNum < 0:
// 		alert("Your number is negative.");
// 		break;
// 	case pickedNum > 0:
// 		alert("Your number is positive.");
// 		break;
// 	// default:
// 	// 	alert("That is not a number.")
// 	// 	break;
//
//








