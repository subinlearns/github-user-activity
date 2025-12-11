const https = require('node:https')
const proc = require('node:process')

function usage(fileName) {
	fileSplit = fileName.split('/')
	shortName = fileSplit.pop()
	console.log(`Usage: ${shortName} <username>`)
}

if (proc.argv.length != 3) {
	usage(proc.argv[1]);
	proc.exit(1);
}

function fetchUserEvents(userName) {
	const URL = `https://api.github.com/users/${userName}/events`;

	const getOptions = {
		headers: {
			'User-Agent': 'Mozilla/5.0',
		},
	};

	https.get(URL, getOptions, (res) => {
		if (res.statusCode === 404) {
			console.log('[-] Username Not Valid');
			proc.exit(2);
		}
		
		data = '';
		res.on('data', (d) => {
			data += d;
		});
		
		res.on('end', (d) => {
			const events = JSON.parse(data)
			if (events.length === 0) {
				console.log("No events found for this user")
			} else {
				displayActivity(events);
			}
		});

	}).on('error', (e) => {
		console.log('Error fetching data:', e.message);
	})
}

function displayActivity(events) {
	events.forEach(singleEvent => {
		const { type, repo, actor, payload, created_at } = singleEvent;
		const repoName = repo.name;
		switch(type) {
			case 'PushEvent':
				console.log(`Pushed commits to ${repoName}`);
				break;
			case 'IssuesEvent':
				if (payload.action === 'opened') {
					console.log(`Opened a new issue in ${repoName}`);
				} else {
					console.log(`Closed an issue in ${repoName}`);
				}
				break;
			case 'StarEvent':
				console.log(`Starred ${repoName}`);
				break;
			default:
				console.log(`Other Activity in ${repoName}`);
				break;
		}
	});
}

const userName = proc.argv[2];
fetchUserEvents(userName);
