"use strict"
const restaurants = [
	{
		name: 'Chic-Fil-A',
		rating: '⭐⭐️⭐⭐️⭐',
		recommendation: 'Recommended: Spicy Deluxe Chicken Sandwich',
		location: '10634 Potranco Rd, San Antonio, TX 78251',
		// location: {
		// 	lng: 29.438594815037302,
		// 	lat: -98.69505129748077
		// },
		phone: '210-520-5575',
		dineIn: false,
		takeout: true,
		delivery: true,
		popupHTML: '<h5>Chic-Fil-A</h5>',
		image: 'img/chic-fil-a.jpeg'
	},
	{
		name: 'Brick and Spoon',
		rating: '⭐⭐⭐️⭐️',
		recommendation: 'Recommended: Cajun Omelette',
		location: '3662 Airport Blvd # A, Mobile, AL 36608',
		// location: {
		// 	lng: 29.49366149067531,
		// 	lat: -98.70563459865569
		// },
		phone: '251-378-8378',
		dineIn: true,
		takeout: true,
		delivery: false,
		popupHTML: '<h5>Brick & Spoon</h5>',
		image: 'img/brickandspoon.jpeg'
	},
	{
		name: 'Befeds',
		rating: '⭐⭐️⭐⭐️⭐',
		recommendation: 'Recommended: Chicken & Fries with a Liter of Red',
		location: 'Viale per Costa, 6/B, 33081 Aviano PN, Italy',
		// location: {
		// 	lng: 46.074939878062956,
		// 	lat: 12.589180313148331
		// },
		phone: '+39 0434 661025',
		dineIn: true,
		takeout: true,
		delivery: false,
		popupHTML: '<h5>BeFeds</h5>',
		image: 'img/befeds.jpeg'
	}
];
// console.log(restaurants)

$(document).ready(function () {
	// access Token
	mapboxgl.accessToken = mapBoxKey;
	
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		zoom: 4,
		center: [14.51667, 46.05]
		// pitch: 60, // pitch in degrees
		// bearing: -60 // bearing in degrees
	})
	
	map.addControl(
		new MapboxGeocoder({
			accessToken: mapBoxKey,
			mapboxgl: mapboxgl
		})
	)
	
	// geocode("Jurčkova Cesta 225, 1000 Ljubljana, Slovenia", mapBoxKey).then(function (results) {
	// 	// console.log(results)
	// 	var foodMarker = new mapboxgl.Marker({color: 'red'})
	// 		.setLngLat(results)
	// 		.addTo(map)
	//
	// 	var foodPopUp = new mapboxgl.Popup()
	// 		.setHTML('<p>Lars&Sven, best burgers in Slovenia!</p>')
	// 		.addTo(map)
	//
	// 	foodMarker.setPopup(foodPopUp)
	// })
	
	restaurants.forEach(function (restaurant) {
		geocode(restaurant.location, mapBoxKey).then(function (coordinates) {
			var favPopup = new mapboxgl.Popup({
				closeOnMove: true,
				
			})
				.setHTML(
					'<div class="container">' +
					restaurant.popupHTML +
					'<img height="125" width="175" src="' + restaurant.image + '"' + '>' +
					restaurant.rating +
					'<div>' + restaurant.location + '</div>' +
					'<div>' + restaurant.recommendation + '</div>',
					'</div>'
				)
				
			var favSpotsMarker = new mapboxgl.Marker({color: 'red'})
				.setLngLat(coordinates)
				.addTo(map)
				.setPopup(favPopup)
				
			
			favPopup.addTo(map)
		})
		
	})
	
	

})