"use strict"

$(document).ready(function () {
	// Get Weather Data
	$.get("http://api.openweathermap.org/data/2.5/weather", {
		APPID: weatherMapKey,
		q: "San Antonio, Texas",
		units: 'imperial'
	}).done(function (weatherData) {
		console.log(weatherData)
		// Create Map
		mapboxgl.accessToken = mapBoxKey;
		var weatherMap = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			zoom: 10,
			center: [-98.4861, 29.4252]
		})
		
		
	})
	
	
	
})