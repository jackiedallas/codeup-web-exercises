console.log(' ');
console.log('Break and Continue Exercises');
console.log(' ');

// Prompt user for odd number between 1 & 50..
while(true) {
	var userNum = prompt("Pick a number between 1 and 50.");
	if (userNum > 50 || userNum < 1) {
		alert("The number needs to be between 1 and 50, pick again.");
	} else if(isNaN(userNum)) {
		alert("That is not a number, pick a NUMBER!");
	} else if ((!isNaN(userNum)) || userNum < 50 || userNum > 1) {
		break;
	}
}
// do {
// 	var userNum = prompt("Pick a number between 1 and 50.");
// 	if (userNum > 50 || userNum < 1) {
// 		alert("The number needs to be between 1 and 50, pick again.");
// 	} else if(isNaN(userNum)) {
// 		alert("That is not a number, pick a NUMBER!");
// 	} else if ((isNaN(userNum)) || userNum > 50 || userNum < 1) {
// 		break;
// 	}
// 	// while((isNaN(userNum)) || userNum > 50 || userNum < 1);
// }
//
console.log("Number to skip is " + userNum + ".");
//
var numToSkip = parseInt(userNum)
for (var i = 1; i < 50; i++) {
	if (i === numToSkip) {
		console.log("SKIP THIS NUMBER!");
		continue;
		// continue;
	} else if (i % 2 !== 0) {
		console.log("Here is an odd number: " + i);
	}
}
