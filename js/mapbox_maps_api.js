"use strict"

$(document).ready(function () {
	// access Token
	var myToken = 'pk.eyJ1IjoiamFja2llZGFsbGFzIiwiYSI6ImNrdWN1NmEwbjE0MTMyeG84Y3pmMnN6encifQ.pTLanvGV47qgP0FzumCIOw'
	
	mapboxgl.accessToken = myToken;
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v9',
		zoom: 10,
		center: [-98.4916, 29.4252]
		// pitch: 60, // pitch in degrees
		// bearing: -60 // bearing in degrees
	})
	
	// add markers
	var marker = new mapboxgl.Marker()
		.setLngLat([-98.4916, 29.4260])
		.addTo(map)
	
	
	
	// Add the control to the map.
	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}))
	
	
	// add geolocate control
	map.addControl(
		new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true,
			showUserHeading: true
		})
	)
	
	// popups
	// var popup = new mapboxgl.Popup()
	// 	.setLngLat([-98.489615, 29.426827])
	// 	.setHTML("<p>Codeup Rocks!</p>")
	// 	.addTo(map)
	
	var alamoPopup = new mapboxgl.Popup()
		.setHTML("<p>Remember The Alamo!</p>")
		.addTo(map)
	
	marker.setPopup(alamoPopup)
	
	// the  geocode method from mapbox-geocoder-utils.js
	geocode("4307 albert martin san antonio", 	mapboxgl.accessToken = 'pk.eyJ1IjoiamFja2llZGFsbGFzIiwiYSI6ImNrdWN1NmEwbjE0MTMyeG84Y3pmMnN6encifQ.pTLanvGV47qgP0FzumCIOw'
).then(function(result) {
		console.log(result);
		map.setCenter(result);
		map.setZoom(17);
	});

})