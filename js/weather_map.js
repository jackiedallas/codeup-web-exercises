"use strict"

$(document).ready(function () {
	// Create Map
	mapboxgl.accessToken = mapBoxKey;
	var weatherMap = new mapboxgl.Map({
		container: 'map',
		zoom: 10,
		center: [-98.4861, 29.4252],
		// style: {
		//
		// }
		style: 'mapbox://styles/mapbox/streets-v11'
	})
	weatherMap.addControl(new mapboxgl.NavigationControl());
	weatherMap.addControl(new mapboxgl.FullscreenControl());
	// drag marker functionality & get new forecast
	
	var locationMarker = new mapboxgl.Marker({
		draggable: true,
		color: 'red'
	})
		.setLngLat([-98.4861, 29.4252])
		.addTo(weatherMap)
		.on('dragend', () => {
			var results = locationMarker.getLngLat()
			var coordArr = Object.values(results)
			// console.log(results)
			// console.log(coordArr)
			
			

			$.get('https://api.openweathermap.org/data/2.5/onecall', {
				appid: weatherMapKey,
				lat: coordArr[1],
				lon: coordArr[0],
				units: 'imperial'
			})
				.done(function (weather) {
					reverseGeocode(results, mapBoxKey).then(function (result) {
						$('#city-header').html('<h2 class="text-center">' + result + '</h2>');
					})
					// console.log(weather)
					var dailyWx = weather.daily; // stored daily weather data in variable to iterate easier
					// console.log(dailyWx);
					// var userLocation = $('#location-search').val();
					var cards = '';
					for (let i = 0; i < dailyWx.length ; i++) {
						if (i <= 4) {
							// variable declarations for dates and times
							let dt = new Date(dailyWx[i].dt * 1000).toLocaleDateString('en-US',{
								weekday: 'short',
								day: 'numeric',
								year: 'numeric',
								month: 'long'
							});
							let sr = new Date(dailyWx[i].sunrise * 1000).toLocaleTimeString();
							let ss = new Date(dailyWx[i].sunset * 1000).toLocaleTimeString();
							let precipitation = dailyWx[i].pop * 100;


							// data for html
							cards += '<div class="card-deck card-deck-font pt-3">' +
								'<div class="card mx-5" id="cards">' +
								'<div class="card-header text-center">' + '<h5>' + dt + '</h5>' + '</div>' +
								'<div class="card-body">' +
								'<h3 class="card-title text-center">' + dailyWx[i].weather[0].description + '</h3>' +
								'<p class="card-text">' + '<span class="cardText">' + 'High: ' + '</span>' + dailyWx[i].temp.max.toFixed(1) + '&deg' + 'F' + '<span class="cardText">' + ' Low: ' + '</span>' +                                         dailyWx[i].temp.min.toFixed(1) + '&deg' + 'F' + '</p>' +
								'<p class="card-text">' + '<span class="">' + 'High Feels Like  ' + '</span>' + dailyWx[i].feels_like.day.toFixed(1) + '&deg' + 'F' + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Humidity: ' + '</span>' + dailyWx[i].humidity + '%' + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'UV Index: ' + '</span>' + dailyWx[i].uvi.toFixed(2) + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Wind Speed: ' + '</span>' + dailyWx[i].wind_speed + 'm/s, ' + dailyWx[i].wind_deg + '&deg' + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Precipitation: ' + '</span>' + parseInt(precipitation) + '%' + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Pressure: ' + '</span>' + dailyWx[i].pressure + 'mb' + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Sunrise: ' + '</span>' + sr + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Sunset: ' + '</span>' + ss + '</p>' +
								'</div>' +
								'</div>' +
								'</div>'
						}
						
						$('#forecastContainer').html(cards) // insert into html here




					}
				})
			// alert('you moved the marker')
		})
	
	// change map style
	const layerList = document.getElementById('menu');
	const inputs = layerList.getElementsByTagName('input');
	for (const input of inputs) {
		input.onclick = (layer) => {
			const layerId = layer.target.id;
			weatherMap.setStyle('mapbox://styles/mapbox/' + layerId);
		};
	}
	
	
	$('#current-weather').click(function (event) { // using a click event to get a lat/long from user input for 5-day forecast
		event.preventDefault();
		
		
		
		geocode($('#location-search').val(), mapBoxKey).then(function (results) { // used geocode function to convert user input to lat/long coordinates
			// console.log(results)
			
			weatherMap.flyTo({
				center: results,
				essential: true,
				speed: 0.5,
				zoom: 9,
				bearing: 0
			})
			
			
			// get weather data from search
			$.get('https://api.openweathermap.org/data/2.5/onecall', {
				appid: weatherMapKey,
				lat: results[1], // came from geocode function & user input
				lon: results[0], // came from geocode function & user input
				units: 'imperial'
			})
				.done(function (weather) {
					// console.log(weather)
					var dailyWx = weather.daily; // stored daily weather data in variable to iterate easier
					// console.log(dailyWx);
					var userLocation = $('#location-search').val();
					var cards = '';
					for (let i = 0; i < dailyWx.length ; i++) {
						if (i <= 4) {
							// variable declarations for dates and times
							let dt = new Date(dailyWx[i].dt * 1000).toLocaleDateString('en-US',{
								weekday: 'short',
								day: 'numeric',
								year: 'numeric',
								month: 'long'
							});
							let sr = new Date(dailyWx[i].sunrise * 1000).toLocaleTimeString();
							let ss = new Date(dailyWx[i].sunset * 1000).toLocaleTimeString();
							let precipitation = dailyWx[i].pop * 100;
							
							
							// data for html
							cards += '<div class="card-deck card-deck-font pt-3">' +
								'<div class="card mx-5" id="cards">' +
								'<div class="card-header text-center">' + '<h5>' + dt + '</h5>' + '</div>' +
								'<div class="card-body">' +
								'<h3 class="card-title text-center">' + dailyWx[i].weather[0].description + '</h3>' +
								'<p class="card-text">' + '<span class="cardText">' + 'High: ' + '</span>' + dailyWx[i].temp.max.toFixed(1) + '&deg' + 'F' + '<span class="cardText">' + ' Low: ' + '</span>' +                                         dailyWx[i].temp.min.toFixed(1) + '&deg' + 'F' + '</p>' +
								'<p class="card-text">' + '<span class="">' + 'High Feels Like  ' + '</span>' + dailyWx[i].feels_like.day.toFixed(1) + '&deg' + 'F' + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Humidity: ' + '</span>' + dailyWx[i].humidity + '%' + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'UV Index: ' + '</span>' + dailyWx[i].uvi.toFixed(2) + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Wind Speed: ' + '</span>' + dailyWx[i].wind_speed + 'm/s, ' + dailyWx[i].wind_deg + '&deg' + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Precipitation: ' + '</span>' + parseInt(precipitation) + '%' + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Pressure: ' + '</span>' + dailyWx[i].pressure + 'mb' + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Sunrise: ' + '</span>' + sr + '</p>' +
								'<p class="card-text">' + '<span class="cardText">' + 'Sunset: ' + '</span>' + ss + '</p>' +
								'</div>' +
								'</div>' +
								'</div>'
						}
						$('#city-header').html('<h2 class="text-center">' + userLocation + '</h2>');
						$('#forecastContainer').html(cards) // insert into html here
						
						
						
						
					}
				})
		})
	})
	$('#refresh').click(function (event) {
		event.preventDefault();
		window.location.reload();
	})
})