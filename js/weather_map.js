"use strict"

$(document).ready(function () {
	$('#current-weather').click(function (event) { // using a click event to get a lat/long from user input for 5-day forecast
		event.preventDefault();
		var latitude = '';
		var longitude = '';
		geocode($('#location-search').val(), mapBoxKey).then(function (results) { // used geocode function to convert user input to lat/long coordinates
			// console.log(results)
			for (let i = 0; i < results.length; i++) {
				if (i === 0) {
					latitude += results[i];
				} else {
					longitude += results[i];
				} // stored lat & long data into separate variables to pass to get request for OpenWeatherAPI
			}
			$.get('https://api.openweathermap.org/data/2.5/onecall', {
				appid: weatherMapKey,
				lat: longitude, // came from geocode function & user input
				lon: latitude, // came from geocode function & user input
				units: 'imperial'
			})
				.done(function (weather) {
					var dailyWx = weather.daily; // stored daily weather data in variable to iterate easier
					console.log(dailyWx);
					
					var cards = '';
					for (let i = 0; i < dailyWx.length ; i++) {
						if (i <= 4) {
							// variable declarations for dates and times
							let dt = new Date(dailyWx[i].dt * 1000).toLocaleDateString();
							let sr = new Date(dailyWx[i].sunrise * 1000).toLocaleTimeString();
							let ss = new Date(dailyWx[i].sunset * 1000).toLocaleTimeString();
							let precipitation = dailyWx[i].pop * 100;
							
							// data for html
							cards += '<div class="card-deck pt-5">' +
								'<div class="card mx-5" id="cards">' +
								'<div class="card-header text-center">' + '<h5>' + dt + '</h5>' + '</div>' +
								'<div class="card-body">' +
								'<h3 class="card-title text-center">' + dailyWx[i].weather[0].description + '</h3>' +
								'<p class="card-text">' + '<span class="cardText">' + 'High: ' + '</span>' + dailyWx[i].temp.max + '&deg' + 'F' + '<span class="cardText">' + ' Low: ' + '</span>' + dailyWx[i].temp.min + '&deg' +                                 'F' + '</p>' +
								'<p class="card-text">' + '<span class="">' + 'High Feels Like  ' + '</span>' + dailyWx[i].feels_like.day + '&deg' + 'F' + '</p>' +
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
		})
	})
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// // Create Map
	// mapboxgl.accessToken = mapBoxKey;
	// var weatherMap = new mapboxgl.Map({
	// 	container: 'map',
	// 	style: 'mapbox://styles/mapbox/streets-v11',
	// 	zoom: 10,
	// 	center: [-98.4861, 29.4252]
	// })
})