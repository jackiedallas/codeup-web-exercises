"use strict"
$(document).ready(function () {
	fetch('https://api.github.com/users/jackiedallas/events/public', {headers: {'Authorization': githubKey}})
		.then((response) => response.json())
		// .then((data) => console.log(data))
		.then((userInfo) => userInfo.forEach((array) => console.log(array.created_at)))
		// .then((jsonData) => jsonData.results)
		// .then((results) => console.log(results))
		// .then((results) => results.forEach((result) => console.log(result.id)));
		
		
		
})