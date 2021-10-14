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
	
	let hasOverThreeLangs = users.filter(user => user.languages.length > 2)
	console.log(hasOverThreeLangs);
	
	let userEmails = users.map(user => `${user.name}'s email address is ${user.email}.`)
	console.log(userEmails);
	
	let totalExperience = users.reduce((total, user) => {
		return total + user.yearsOfExperience;
	}, 0);
	console.log(totalExperience + ' years of experience.');
})