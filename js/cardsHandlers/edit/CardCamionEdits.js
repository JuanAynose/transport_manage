import CardCamionEdit from '../../cards/CardCamionEdit.js';

const CardCamionEdits = (data, containerCamion) => {
	if (data.length < 0 || data === false) return data;
	containerCamion.innerHTML = '';
	if (data.length) {
		for (const camionData of data) {
			containerCamion.innerHTML += CardCamionEdit(camionData);
		}
	} else {
		containerCamion.innerHTML += CardCamionEdit(data);
	}
};

export default CardCamionEdits;
