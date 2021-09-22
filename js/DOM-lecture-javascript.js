// //~*~ Locating individual elements
// var topHeader = document.getElementById('top-header');
// console.log(topHeader);
//
// // What happens if there is no result?
// var hopTeader = document.getElementById('hop-teader');
// console.log(hopTeader);
//
// //~*~ Locating lists of elements
// var specialOffers = document.getElementsByClassName('special-offer');
// console.log(specialOffers);
//
// //Element List - retrieve by CLASS or TAG
// var listItems = document.getElementsByTagName('li');
// console.log(listItems);
//
// //Loop through the hatList and print our nodes
// for (var i = 0; i < listItems.length; i++) {
// 	console.log(listItems[i].className);
// }
// //~*~ Accessing form input
// var currentPlaceholder = document.forms.hatSearch[0].placeholder;
// console.log(currentPlaceholder);
//
// //~*~ Accessing / Modifying Element properties [so I've got a collection of this stuff - what now?]
// //Accessing innerHTML
//
// //Instead of printing a list of nodes, let's print some text - What HTML is INSIDE our <li>?
// var topSellers = document.getElementsByClassName('hat-sold');
// for (let i = 0; i < topSellers.length; i++) {
// 	topSellers[i].innerHTML = '<strong>Hat TBD</strong>';
// }
// //Modifying innerHTML
// //Uh oh - these were last month's top seller, WOOPS -
// //let's update our <li> to show "Hat TBD" and let's be STRONG about it!
//
//
// //innerText vs innerHTML
// //"Our Top Sellers" seems odd now as well - let's adjust!
// var bestSeller = document.getElementById('best-seller');
// bestSeller.innerText = "Will update soon...";
//
//
// //Perhaps a little EMPHASIS will assist - will innerText help?
// bestSeller.innerHTML = "<em>Will update soon...</em>";
//
// //Attribute methods: hasAttribute, getAttribute, setAttribute, removeAttribute
// var bottomLink = document.getElementById('bottom-link');
// console.log(bottomLink);
//
// //hasAttribute: return a BOOLEAN if the element has this attribute
// console.log(bottomLink.hasAttribute('href'));
// console.log(bottomLink.hasAttribute('style'));
//
// //getAttribute: what's that attribute's value? [the right side of the equation]
// console.log(bottomLink.getAttribute('href'));
//
// //setAttribute: let's change that attribute's value!
// bottomLink.setAttribute('href', 'https://hotnewhiphop.com');
// bottomLink.setAttribute('id', 'hnhh');
//
// //Accessing or Modifying styles
// var bodyElement = document.getElementsByTagName('body')[0];
// console.log(bodyElement);

var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');

button1.addEventListener('click', function () {
	// alert("hello quasar")
	
	var listItems = document.getElementsByTagName('li');
	
	for (let i = 0; i < listItems.length; i++) {
		listItems[i].style.backgroundColor = 'red';
	}
})

// demonstrate the BODY as a thing to manipulate - the BODY can be targeted as any other thing:

// Get the body element (notice we need to use index 0 of the array!)

// Change the body font color

// We had to use [] syntax since the property name has a dash

// Replace dashes with camelCase to use standard . syntax