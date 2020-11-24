const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log(this.responseText);
	const data = JSON.parse(this.responseText);

	for (let planet of data.results) {
		console.log(planet.name);
	}
	const nextURL = data.next;
	const secondReq = new XMLHttpRequest();
	secondReq.addEventListener('load', function() {
		console.log('SUCCESS');
	});
	secondReq.addEventListener('error', () => {
		console.log('ERROR2!!!');
	});
	secondReq.open('GET', nextURL);
	secondReq.send();
});

firstReq.addEventListener('error', () => {
	console.log('ERROR!!!!');
});

firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
