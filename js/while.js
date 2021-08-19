console.log("");
console.log("While Loops Exercises");
console.log("");
var i = 1;
while(i < 65536) {
	i *= 2;
	console.log(i);
}
//
console.log('');
console.log("Do While Loop..");

// function conesToSell() {
// 	var ranNum = Math.floor(Math.random() * 50) + 50;
// 	console.log(ranNum);
// }
// // conesToSell()
// function conesBought() {
// 	var ranNum2 = Math.floor(Math.random() * 5) + 1;
// 	console.log(ranNum2)
// }
// // conesBought();
console.log('');
console.log("Ice Cream Seller question...");
console.log('');
// Still figuring this one out...
function iceCreamSeller() {
	var conesToSell = Math.floor(Math.random() * 50) + 50;
	do{
		alert("I have " + conesToSell + " would you like to buy some?")

	} while(false)
}
// iceCreamSeller();