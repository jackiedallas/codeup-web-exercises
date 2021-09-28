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
$('li').css('font-size', '20px');
$('h1, p, li').css('background-color', 'yellow');
var test2 = $('h1').html();
alert(test2);