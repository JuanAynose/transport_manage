import CardCamionEdit from '../../cards/CardCamionEdit.js';

const CardCamionEdits = (data, containerCamion) => {
	if (!data.length) return data;
	containerCamion.innerHTML = '';
	for (const camionData of data) {
		containerCamion.innerHTML += CardCamionEdit(camionData);
	}
};

export default CardCamionEdits;
