"use strict"
$(document).ready(function () {
	// let jackiePushInfo = fetch('https://api.github.com/users/jackiedallas/events/public', {headers: {'Authorization': githubKey}})
	// let ianPushInfo = fetch('https://api.github.com/users/Ian-McConihay/events/public', {headers: {'Authorization': githubKey}})
	// let dezPushInfo = fetch('https://api.github.com/users/Dezmonelm/events/public', {headers: {'Authorization': githubKey}})
	// let robertPushInfo = fetch('https://api.github.com/users/robertallison/events/public', {headers: {'Authorization': githubKey}})
	// let maryPushInfo = fetch('https://api.github.com/users/maryawhite/events/public', {headers: {'Authorization': githubKey}})
	//
	// Promise.all([jackiePushInfo, ianPushInfo, dezPushInfo, robertPushInfo, maryPushInfo])
	// 	.then((responses) => Promise.all(responses.map((response) => response.json())))
	// 	.then((parsedResults) => {
	// 		// console.log(parsedResults)
	// 		parsedResults.map(function (latestInfo) {
	// 			console.log(latestInfo[0])
	// 			let mostRecentEvent = latestInfo[0]
	// 			let date = mostRecentEvent.created_at
	// 		})
	// 	})
	
	function getUserInfo(username) {
		
		return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': githubKey}})
			.then(function (response) {
				return response.json();
			})
			.then((userInfo) => {
				
				var userObject = {}
				let latestData = userInfo[0];
				var date = new Date(latestData.created_at);
				var actorInfo = latestData.actor;
				var eventType = latestData.type;
				var repoInfo = latestData.repo;
				var commitInfo = latestData.payload.commits;
				
				userObject.name = actorInfo.login;
				userObject.lastPush = date;
				userObject.gitHubURL = actorInfo.url;
				userObject.repoName = repoInfo.name;
				userObject.commitMessage = commitInfo[0].message;
				
				console.log(userObject)
			})
	}
	
	getUserInfo('jackiedallas')
	getUserInfo('maryawhite')
	getUserInfo('Ian-McConihay')
	getUserInfo('robertallison')
	getUserInfo('Dezmonelm')
	

	
	function wait(number) {
		return new Promise((resolve => {
			setTimeout(() => {
				resolve(`${number}`)
			}, number)
		})).then((number) => console.log(`You will see this message after ${number/1000} seconds`))
	}
	
	wait(3000)
	wait(5000)
	
	
	// var wait = new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		resolve('foo')
	// 	}, 5000);
	// });
	//
	// wait
	// 	.then(() => console.log('You will see this after 5 seconds'))
		
	
})