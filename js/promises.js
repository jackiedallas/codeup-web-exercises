"use strict"
$(document).ready(function () {
	
	fetch('https://api.github.com/users/jackiedallas/events/public', {headers: {'Authorization': githubKey}})
		.then(function (response) {
			return response.json();
		})
		.then((userInfo) => {
			var userObject = {}
			let latestData = userInfo[0];
			// console.log(latestData)
			var date = latestData.created_at;
			var actorInfo = latestData.actor;
			// console.log(actorInfo)
			var eventType = latestData.type;
			// console.log(eventType)
			var repoInfo = latestData.repo;
			var commitInfo = latestData.payload.commits;
			// console.log(commitInfo)
			
			userObject.name = actorInfo.login;
			userObject.lastPush = date;
			userObject.gitHubURL = actorInfo.url;
			userObject.repoName = repoInfo.name;
			userObject.commitMessage = commitInfo[0].message;
			
			console.log(userObject)
		})
	
	
	var myPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('foo')
		}, 5000);
	});
	
	myPromise.then(() => console.log('You will see this after 5 seconds'))
	
})