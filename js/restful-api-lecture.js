"use strict"

$(document).ready(function () {
	const API_URL = 'https://vagabond-glacier-verse.glitch.me/dogs';
	
	function getDogs() {
		return fetch(API_URL)
			.then((response) => response.json())
			.then((dogs) => console.log(dogs))
	}
	// getDogs()
	
	
	
	function getDog(id) {
		return fetch(`${API_URL}/${id}`)
			.then((response) => response.json())
			.then((dog) => console.log(dog))
	}
	// getDog(3)
	
	
	
	
	function editDog(dog) {
		let options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dog)
		}
		
		return fetch(`${API_URL}/${dog.id}`, options)
			.then((response) => response.json())
		
	}
	let cookie = {id: 100, name: 'Cookie', age: 4, isGoodDog: false}
	// editDog(cookie).then((data) => console.log(data))
	
	function deleteDog(id) {
		let options = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		}
		fetch(`${API_URL}/${id}`, options)
			.then((response) => console.log("deleted dog with id " + id, response))
	}
	
	// deleteDog(21)
	// deleteDog(6)
	// deleteDog(11)
	// deleteDog(13)


})