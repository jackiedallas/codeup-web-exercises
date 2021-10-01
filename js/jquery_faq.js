"use strict"

$(document).ready(function () {
	$('body').css('color', 'limegreen').css('background-color', 'black')
	
	// add class to picture div & button
	$('button').addClass('btn btn-light bg-light')
	$('div').addClass('frame');
	$('.frame').css({'width': '250px', 'height': '250px', 'border': '10px solid white', 'margin': '1em'});
	$('#picture1').css({'background-image': 'url(/img/small-loner.jpg)', 'background-size': 'cover'})
	$('#picture2').css({'background-image': 'url(/img/small-moon.jpg)', 'background-size': 'cover'})
	$('#picture3').css({'background-image': 'url(/img/small-sunset.jpg)', 'background-size': 'cover'})
	
	
	// Add a class to all dd elements named invisible.
	$('dd').addClass('invisible');
	$('li:last-child').addClass('highlight')
	
	
	var highlightFacts = document.getElementById('highlight');
	var showFacts = document.getElementById('showFacts');
	
	
	// Update the page with jQuery to add a link that toggles the class invisible on and off for all dd elements.
	showFacts.addEventListener("click", function (e) {
		e.preventDefault();
		$('dd').toggleClass('invisible');
	})
	
	
	// Create a button that, when clicked, makes the last li in each ul have a yellow background.
	highlightFacts.addEventListener('click', function (e){
		e.preventDefault();
		$('li:last-child').css('background-color', 'yellow');
		// $('.highlight').toggleClass('highlight');
	})
	
	// When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
	$('#earth-header').click(function () {
		$('#earth-header').next().css('font-weight', 'bold')
	})
	$('#mars-header').click(function () {
		$('#mars-header').next().css('font-weight', 'bold')
	})
	$('#saturn-header').click(function () {
		$('#saturn-header').next().css('font-weight', 'bold')
	})
	
	
	// When any list item is clicked, first li of the parent ul should have a font color of blue.
	$('#earth-facts').click(function () {
		$('#earth-facts li').first().css('color', 'blue')
	})
	$('#mars-facts').click(function () {
		$('#mars-facts li').first().css('color', 'blue')
	})
	$('#saturn-facts').click(function () {
		$('#saturn-facts li').first().css('color', 'blue')
	})
	
	//	Create 3 divs that each look like a picture frame. Each one should have a unique background image and a button underneath that swaps the image from the frame. Use the traversing functions of jQuery to accomplish this.
	//
	// The rules are the following:
	//
	// The left frame swaps to the right and takes the image from the frame in the center.
	// The center frame swaps randomly to either the left or right.
	// The right frame swaps to the left and takes the image from the frame in the center.
	
	$('#s-btn1').click(function (e) {
		e.preventDefault();
		// $('#picturesList li:eq(1)').before($('#picturesList li:eq(0)'));
		$('#picturesList li:eq(1)').insertBefore('#picturesList li:eq(0)');
		
	})
	
})





