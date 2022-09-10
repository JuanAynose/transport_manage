import CardCamionEdit from '../../cards/CardCamionEdit.js';

const CardCamionEdits = (data, containerCamion) => {
	containerCamion.innerHTML = '';
	for (const camionData of data) {
		containerCamion.innerHTML += CardCamionEdit(camionData);
	}
};

export default CardCamionEdits;
