import CardRemito from '../cards/CardRemito.js';

const CardRemitoManager = (data, containerPaquete) => {
	if (!data.length) return data;
	for (const remitoData of data) {
		containerPaquete.innerHTML += CardRemito(remitoData);
	}
};

export default CardRemitoManager;
