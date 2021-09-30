"use strict"


$(document).ready (function () {
	$('#snake1, #snake2, #snake3').hide();
	// Initialize the game
	var pressStart = document.getElementById('start');
	pressStart.addEventListener('click', function () {
		$('#flashy-header, #start').hide();
		$('.showPicture').show();
	})
	if (pressStart) {
		
		
		
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
				// $('h1').click(function () {
				// 	window.location.reload(true);
				// });
			}
			
		});
//KONAMI CODE END
	}
	
});




// Make the mouse pointer a flashlight
function flashlight(mouseLocation) {
	// Client X & Y provide the coordinates of the mouse pointer in the DOM.
	var x = mouseLocation.clientX;
	var y = mouseLocation.clientY;
	// console.log(x + y)
	// Style cursors in CSS with custom properties
	document.documentElement.style.setProperty('--cursorX', x + 'px');
	document.documentElement.style.setProperty('--cursorY', y + 'px');
}
// Add event listener for the mouse pointer
$(document).mousemove(flashlight);
// $(document).touches(flashlight);








