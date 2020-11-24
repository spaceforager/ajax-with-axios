async function getUsers(token) {
	const res = await axios.get(`https://hack-or-snooze-v3.herokuapp.com/users`, { params: { token } });
	console.log(res);
}

async function signUp(username, password, name) {
	const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', {
		user: { name, username, password }
	});
	console.log(res);
}

async function login(username, password) {
	const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', {
		user: { username, password }
	});
	console.log(res);
	return res.data.token;
}

//Since we have to await the login, we have to put it in an async function and await it.

async function getUsersWithAuth() {
	const token = await login('marvinhunt', 'askdjlij34898834');
	getUsers(token);
}

// signUp('marvinhunt', 'askdjlij34898834', 'marvin the kitty');

async function createStory() {
	const token = await login('marvinhunt', 'askdjlij34898834');
	const newStory = {
		token,
		story: {
			author: 'Marvin',
			title: 'MEOW MEOW MEOW',
			url: 'https://catss4lyfe.com'
		}
	};
	const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory);
	console.log(res);
}

createStory();
