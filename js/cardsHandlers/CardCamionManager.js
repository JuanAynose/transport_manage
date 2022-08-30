import CardCamion from '../cards/CardCamion.js';

const CardCamionManager = (data, containerCamion) => {
	for (const camionData of data) {
		containerCamion.innerHTML += CardCamion(camionData);
	}
};

export default CardCamionManager;
