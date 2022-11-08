import CardCiudad from '../cards/CardCiudad.js';

const CardCiudadManager = (data, containerCiudad) => {
	if (data.length < 0 || data === false) return data;
	containerCiudad.innerHTML = '';
	for (const ciudadData of data) {
		containerCiudad.innerHTML += CardCiudad(ciudadData);
	}
};

export default CardCiudadManager;
