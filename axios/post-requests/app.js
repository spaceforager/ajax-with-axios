async function getUsers() {
	const res = await axios.get('https://reqres.in/api/users');
	console.log(res);
}

async function createUser() {
	const res = await axios.post('https://reqres.in/api/users', {
		username: 'Marvin',
		email: 'marvin@gmail.com',
		age: 5
	});
	console.log(res);
}

createUser();
