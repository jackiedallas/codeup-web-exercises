console.log("For Loops Exercise");
console.log(" ");
//
var num = Math.floor(Math.random() * 50) + 1;
//

function showMultiplicationTable(num) {
	for (var i = 1; i <= 10; i++) {
		console.log(num + " x " + i + " = " + (num * i));
	}
}

console.log("Multiplication Table");
showMultiplicationTable(num);

//
console.log(' ');
console.log("Random numbers between 20 and 200...")
for (var i = 1; i <= 10; i++) {
	var randomNum = Math.floor(Math.random() * (200 - 20)) + 20;
	if (randomNum % 2 === 0) {
		console.log(randomNum + " is even.")
	} else if (randomNum % 2 !== 0) {
		console.log(randomNum + " is odd.")
	}

}
// Still trying to figure this one out.
// Visual representation of what I want to happen in the console.
// function logTriangle() {
// 	console.log('1')
// 	console.log('22')
// 	console.log('333')
// 	console.log('4444')
// 	console.log('55555')
// 	console.log('666666')
// 	console.log('7777777')
// 	console.log('88888888')
// 	console.log('999999999')
// }
// // logTriangle();
//
// for (var i = 1; i <= 10; i++) {
// 	if(i < 10) {
// 		console.log(i.toString() + i.toString());
// 	}
// }
console.log(" ");
console.log("Numbers divisible by 5 from 100 to 0...");
for (i = 100; i > 0; i--) {
	if(i % 5 !== 0) {
		continue;
	}
	console.log(i);
}