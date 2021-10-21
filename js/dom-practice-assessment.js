/**
 * Write your solutions here
 */
$(document).ready(function () {


// 1. When the box with the id of `dbl-click-box` is double-clicked, an alert should pop up with the text 'BOX DOUBLE-CLICKED!'
$('.dbl-click-box').dblclick(function () {
	alert('BOX DOUBLE-CLICKED!')
})

// 2. Clicking on the button with an id of `dark-mode-btn` toggles dark mode on and off. *HINT: changes should be applied to the body of the HTML.*
$('#dark-mode-btn').click(function () {
	$('body').toggleClass();
})

// 3. When the cursor hovers over the span with the id of uppercase (`<span id="uppercase">`), take the text of that span and display it, in lowercase, in the span with the id of lowercase (`<span id="lowercase">`).
$('#uppercase').hover(
	function () {
		$(this).hide()
		$('#lowercase').html('this is a title').show()
	},
	function () {
		$(this).show()
		$('#lowercase').hide()
	}
)

// 4. The span with an id of `counter` should increment by one every second.
let count = 0; // count variable has to be outside the interval function
setInterval(function () {
	++count;
	$('#counter').html(count)
}, 1000)







})