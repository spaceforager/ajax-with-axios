// async function getData() {
// 	//response returns a promise so we use await for promise to resolve
// 	const response = await axios.get('https://swapi.co/api/planets');

// 	const { next, results } = response.data;
// 	for (let planet of results) {
// 		console.log(planet.name);
// 	}
// 	const response2 = await axios.get(next);
// 	const { results: re2 } = response2.data;
// 	for (let planet of re2) {
// 		console.log(planet.name);
// 	}
// }

// getData();

async function getLaunches() {
	const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
	renderLaunches(res.data);
}

function renderLaunches(launches) {
	const ul = document.querySelector('#launches');
	for (let launch of launches) {
		ul.append(makeLaunchLI(launch));
	}
}

function makeLaunchLI(launch) {
	const newLI = document.createElement('LI');
	const bold = document.createElement('B');
	bold.innerText = launch.mission_name;
	newLI.append(bold);
	newLI.innerHTML += ` - ${launch.rocket.rocket_name} `;
	return newLI;
}

const btn = document.querySelector('#getLaunches');
btn.addEventListener('click', getLaunches);
