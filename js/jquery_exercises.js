"use strict"

// // $(document).ready(function () {
// // 	alert("DOM has finished loading");
// // })
//
// // USING THE ID SELECTOR
// // var contents = $('#header1').html();
// // alert(contents);
//
// // USING THE CLASS SELECTOR
// $('.important').css('background-color', 'red');
//
// // USING THE ELEMENT SELECTOR
// $('p').css('font-size', '14px');
//
// // USING THE MULTIPLE SELECTOR
// $('.important, p').css('background-color', '#ff0');
//
// // USING THE ALL SELECTOR
// $('*').css('border', '1px solid #f00');
//

// // CODE FOR JQUERY EXERCISE BELOW

// ID Selector exercises
// var test = $('#listItem1').html();
// alert(test);

// Class Selector Exercises
// $('.codeup').css('border', '1px solid red')

// Element Selector Exercises
$('ul').css('padding-left', '0')
$('li').css('font-size', '20px').css('list-style', 'none');
// $('h1, p, li').css('background-color', 'yellow');
var test2 = $('h1').html();
// alert(test2);
$('*').css('text-align', 'center').css('margin', '1rem');
$('#header1').css('font-family', 'monospace').css('background-color', 'gold')


$('#button1').click(function () {
	$('*').toggle("explode");
});

$('.header-2-doubleClick').dblclick(function () {
	alert("You double clicked header 2")
});

$('#exercise-header').hover(
	function () {
		$(this).css('background-color', 'yellow')
	},
	function f() {
		$(this).css('background-color', 'white')
	}
);

$('#example').hover(
	function () {
		$(this).css('transform', 'rotateY(180deg)')
	},
	function () {
		$(this).css('transform', 'rotateY(360deg)')
	}
);

// alert(counter)
$(document).ready(function () {
	var count = 0;
	$('#button2').css('font-size', '50px').css('width', '100px').css('height', '100px').click(function () {
		++count;
		$('#counter').html(count)
	})

	
});

