import CardRemito from '../cards/CardRemito.js';

const CardRemitoManager = (data, containerPaquete) => {
	if (data.length < 0 || data === false) return data;
	containerPaquete.innerHTML = '';
	for (const remitoData of data) {
		containerPaquete.innerHTML += CardRemito(remitoData);
	}
};

export default CardRemitoManager;
