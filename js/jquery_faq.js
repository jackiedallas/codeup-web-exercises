"use strict"

$(document).ready(function () {
	$('body').css('color', 'limegreen').css('background-color', 'black')
	$('dd').addClass('invisible');
	$('li:last-child').addClass('highlight')
	// $('.highlight').css('background-color', 'yellow')
	
	// $('ul').addClass('list-facts')
	// $('.invisible').css('visibility', 'hidden');
	var highlightFacts = document.getElementById('highlight');
	var showFacts = document.getElementById('showFacts');
	
	showFacts.addEventListener("click", function (e) {
		e.preventDefault();
		$('dd').toggleClass('invisible');
		// $('.invisible').css('visibility', 'visible');
	})
	
	highlightFacts.addEventListener('click', function (e){
		e.preventDefault();
		$('li:last-child').css('background-color', 'yellow');
		// $('.highlight').toggleClass('highlight');
	})
	
	
	$('#earth-header').click(function () {
		$('#earth-header').next().css('font-weight', 'bold')
	})
	$('#mars-header').click(function () {
		$('#mars-header').next().css('font-weight', 'bold')
	})
	$('#saturn-header').click(function () {
		$('#saturn-header').next().css('font-weight', 'bold')
	})
	
})





