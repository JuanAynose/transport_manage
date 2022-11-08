import CardProvincia from '../cards/CardProvincia.js';

const CardProvinciaManager = (data, containerProvincia) => {
	if (data.length < 0 || data === false) return data;
	containerProvincia.innerHTML = '';
	for (const provinciaData of data) {
		containerProvincia.innerHTML += CardProvincia(provinciaData);
	}
};

export default CardProvinciaManager;
