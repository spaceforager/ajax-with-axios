async function getJoke(firstName, lastName) {
	const res = await axios.get(`http://api.icndb.com/jokes/random`, { params: { firstName, lastName } });
	console.log(res.data.value.joke);
}

getJoke('Bethany', 'Rolfson');
