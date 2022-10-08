import CardCiudad from '../cards/CardCiudad.js';

const CardCiudadManager = (data, containerCiudad) => {
	if (!data.length) return data;
	containerCiudad.innerHTML = '';
	for (const ciudadData of data) {
		containerCiudad.innerHTML += CardCiudad(ciudadData);
	}
};

export default CardCiudadManager;
