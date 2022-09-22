import CardCamion from '../cards/CardCamion.js';

const CardCamionManager = (data, containerCamion) => {
	if(!data.length) return data;

	containerCamion.innerHTML = '';
	for (const camionData of data) {
		containerCamion.innerHTML += CardCamion(camionData);
	}
};

export default CardCamionManager;
