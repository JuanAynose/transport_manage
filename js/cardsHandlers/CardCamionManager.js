import CardCamion from '../cards/CardCamion.js';

const CardCamionManager = (data, containerCamion) => {
	containerCamion.innerHTML = '';
	for (const camionData of data) {
		containerCamion.innerHTML += CardCamion(camionData);
	}
};

export default CardCamionManager;
