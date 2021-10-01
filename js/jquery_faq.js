"use strict"

$(document).ready(function () {
	$('body').css('color', 'limegreen').css('background-color', 'black')
	
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
})





