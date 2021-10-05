"use strict"
const restaurants = [
	{
		name: 'Chic-Fil-A',
		rating: '⭐⭐️⭐⭐️⭐',
		recommendation: 'Spicy Deluxe Chicken Sandwich',
		location: [29.438594815037302, -98.69505129748077],
		phone: '210-520-5575',
		dineIn: false,
		takeout: true,
		delivery: true
	},
	{
		name: 'Chipotle',
		rating: '⭐⭐⭐️⭐️',
		recommendation: 'Burrito Bowl',
		location: [29.49366149067531, -98.70563459865569],
		phone: '210-688-9082',
		dineIn: true,
		takeout: true,
		delivery: true
	},
	{
		name: 'Befeds',
		rating: '⭐⭐️⭐⭐️⭐',
		recommendation: 'Chicken & Fries with a Liter of Red',
		location: [46.074939878062956, 12.589180313148331],
		phone: '+39 0434 661025',
		dineIn: true,
		takeout: true,
		delivery: false
	}
];
console.log(restaurants)

$(document).ready(function () {
	// access Token
	mapboxgl.accessToken = mapBoxKey;
	
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		zoom: 10,
		center: [14.51667, 46.05]
		// pitch: 60, // pitch in degrees
		// bearing: -60 // bearing in degrees
	})
	
	geocode("Jurčkova Cesta 225, 1000 Ljubljana, Slovenia", mapBoxKey).then(function (results) {
		console.log(results)
		var foodMarker = new mapboxgl.Marker({color: 'red'})
			.setLngLat(results)
			.addTo(map)
		
		var foodPopUp = new mapboxgl.Popup()
			.setHTML('<h5>Lars&Sven, best burgers in Slovenia!</h5>')
			.addTo(map)
		
		foodMarker.setPopup(foodPopUp)
	})
	
	

})