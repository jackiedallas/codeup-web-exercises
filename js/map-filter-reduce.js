"use strict"
$(document).ready(function () {
	const users = [
		{
			id: 1,
			name: 'ryan',
			email: 'ryan@codeup.com',
			languages: ['clojure', 'javascript'],
			yearsOfExperience: 5
		},
		{
			id: 2,
			name: 'luis',
			email: 'luis@codeup.com',
			languages: ['java', 'scala', 'php'],
			yearsOfExperience: 6
		},
		{
			id: 3,
			name: 'zach',
			email: 'zach@codeup.com',
			languages: ['javascript', 'bash'],
			yearsOfExperience: 7
		},
		{
			id: 4,
			name: 'fernando',
			email: 'fernando@codeup.com',
			languages: ['java', 'php', 'sql'],
			yearsOfExperience: 8
		},
		{
			id: 5,
			name: 'justin',
			email: 'justin@codeup.com',
			languages: ['html', 'css', 'javascript', 'php'],
			yearsOfExperience: 9
		}
	];
	// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
	let hasOverThreeLangs = users.filter(user => user.languages.length > 2)
	console.log(hasOverThreeLangs);
	
	// Use .map to create an array of strings where each element is a user's email address
	let userEmails = users.map(user => `${user.name}'s email address is ${user.email}.`)
	console.log(userEmails);
	
	// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
	let totalExperience = users.reduce((total, user) => {
		return total + user.yearsOfExperience;
	}, 0);
	console.log(totalExperience + ' years of experience.');
	
	// Use .reduce to get the longest email from the list of users.
	let longestEmail = users.reduce((emailLength, user) => (user.email.length > emailLength.length ? user: emailLength), '');
	console.log(longestEmail);
})