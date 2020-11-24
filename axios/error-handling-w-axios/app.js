async function getRandomDog() {
	const res = await axios.get('https://dog.ceo/api/breeds/image/random');
	const img = document.querySelector('#dog');
	img.setAttribute('src', res.data.message);
}

async function getDogByBreed(breed) {
	try {
		const URL = `https://dog.ceo/api/breed/${breed}/images/random`;
		const res = await axios.get(URL);
		const img = document.querySelector('#dog');
		img.setAttribute('src', res.data.message);
	} catch (e) {
		alert('BREED NOT FOUND!');
		getRandomDog();
	}
}

const form = document.querySelector('#searchForm');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const input = document.querySelector('#search');
	getDogByBreed(input.value);
	input.value = '';
});
