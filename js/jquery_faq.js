"use strict"

$(document).ready(function () {
	$('body').css('color', 'limegreen').css('background-color', 'black')
	$('dd').addClass('invisible');
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
		// $('li').children().last().css('background-color', 'yellow');
	})
	
	
})





