import CardCamion from '../cards/CardCamion.js';

const CardCamionManager = (data, containerCamion) => {
	if (data.length < 0 || data === false) return data;
	containerCamion.innerHTML = '';
	if (data.length) {
		for (const camionData of data) {
			containerCamion.innerHTML += CardCamion(camionData);
		}
	} else {
		containerCamion.innerHTML += CardCamion(data);
	}
};

export default CardCamionManager;
