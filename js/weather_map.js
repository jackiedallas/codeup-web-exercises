"use strict"

$(document).ready(function () {
	$('#current-weather').click(function (event) {
		event.preventDefault();
		
		var latitude = '';
		var longitude = '';
		geocode($('#location-search').val(), mapBoxKey).then(function (results) {
			// console.log(results)
			for (let i = 0; i < results.length; i++) {
				if (i === 0) {
					latitude += results[i];
				} else {
					longitude += results[i];
				}
			}
			$.get('https://api.openweathermap.org/data/2.5/onecall', {
				appid: weatherMapKey,
				lat: longitude,
				lon: latitude,
				units: 'imperial'
			})
				.done(function (weather) {
					console.log(weather);
					var dailyWx = weather.daily;
					console.log(dailyWx);
					
					
					
					var cards = '';
					for (let i = 0; i < dailyWx.length ; i++) {
						if (i <= 4) {
							
							let dt = new Date(dailyWx[i].dt * 1000).toLocaleDateString();
							let sr = new Date(dailyWx[i].sunrise * 1000).toLocaleTimeString();
							let ss = new Date(dailyWx[i].sunset * 1000).toLocaleTimeString();
							let precipitation = dailyWx[i].pop * 100;
							cards += '<div class="card-deck pt-5">' +
								'<div class="card mx-5" id="cards">' +
								'<div class="card-header text-center">' + '<h5>' + dt + '</h5>' + '</div>' +
								'<div class="card-body">' +
								'<h3 class="card-title text-center">' + dailyWx[i].weather[0].description + '</h3>' +
								'<p class="card-text">' + '<span class="cardText">' + 'High: ' + '</span>' + dailyWx[i].temp.max + '&deg' + 'F' + '<span class="cardText">' + ' Low: ' + '</span>' + dailyWx[i].temp.min + '&deg' + 'F' + '</p>' +
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
						$('#forecastContainer').html(cards)
					}
					
					
					// for (let i = 0; i < weather.daily.length; i++) {
					// 	if (i <= 5) {
					// 		console.log(weather.daily[i])
					// 		// var date = weather.daily[i].dt;
					// 		// // console.log(date)
					// 		// var humidity = weather.daily[i].humidity;
					// 		// // console.log(humidity)
					// 		// var description = weather.daily[i].weather[i].description;
					// 		// console.log(description)
					// 	}
					// }
					
					
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