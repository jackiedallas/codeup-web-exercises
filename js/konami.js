"use strict"

$(document).ready (function () {
	$('#snake1, #snake2, #snake3').hide();
	// Initialize the game
	var pressStart = document.getElementById('start');
	pressStart.addEventListener('click', function () {
		$('#flashy-header, #start').hide();
		$('.showPicture').show();
		modalDialog();
	})
	// $('#press-start').click(function () {
	//
	// })
	
});

function modalDialog() {
	$('#snake1').hover(function () {
		$(this).show('#modal')
	},
	function () {
		$('#modal').hide()
	})
	
	$('#snake2').hover(function () {
			$('#modal').show()
		},
		function () {
			$('#modal').hide()
		})
	
	$('#snake3').hover(function () {
			$('#modal').show()
		},
		function () {
			$('#modal').hide()
		})
	

}

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
		// $('h1').click(function () {
		// 	window.location.reload(true);
		// });
	}
	
});






