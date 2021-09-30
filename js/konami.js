"use strict"
$('#press-start').click(function () {
	$('body').html('');
})

// Make the mouse pointer a flashlight
// || mouseLocation.touches[0].clientY
// || mouseLocation.touches[0].clientX
function flashlight(mouseLocation) {
	// Client X & Y provide the coordinates of the mouse pointer in the DOM. "touches" are events that can be fired depending on
	var x = mouseLocation.clientX;
	var y = mouseLocation.clientY;
	// console.log(x + y)
	// Style cursors in CSS
	document.documentElement.style.setProperty('--cursorX', x + 'px');
	document.documentElement.style.setProperty('--cursorY', y + 'px');
}
// Add event listener for the mouse pointer
$(document).mousemove(flashlight);
// $(document).touches(flashlight);














// The Konami Code is "up, up, down, down, left, right, left, right, b, a, enter"
// Key Code: 38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13

// Create a variable to hold user inputs
var userKeys = [];
var konamiCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter"
$(document).keydown(function(event){
	console.log(event.key);
	userKeys.push(event.key);
	if (userKeys.join('') === konamiCode) {
		alert("You have gained 30 lives!");
		$('h1').click(function () {
			window.location.reload(true);
		});
	}
	
});





