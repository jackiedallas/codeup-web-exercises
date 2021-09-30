"use strict"

$(document).ready(function () {
	$('.btn').css('background', 'none').css('color', 'blue').css('border', 'none')
	$('dd').addClass('invisible');
	// $('.invisible').css('visibility', 'hidden');
	var showFacts = document.getElementById('showFacts');
	showFacts.addEventListener("click", function (e) {
		e.preventDefault();
		$('dd').toggleClass('invisible');
		// $('.invisible').css('visibility', 'visible');
	})
})





