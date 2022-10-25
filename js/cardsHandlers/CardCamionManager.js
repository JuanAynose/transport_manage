import CardCamion from '../cards/CardCamion.js';

const compareAndMerge = (dataDefaultCamiones, dataCamionePeso) => {
	const arrMerged = [...dataDefaultCamiones, ...dataCamionePeso];
	const filteTest = arrMerged.filter((element, index, arr) => {
		const reverse = arr.reverse();
		return element.peso_total >= reverse[index].peso_total;
	});

	return filteTest;
};

const CardCamionManager = (data, containerCamion, dataCamiones) => {
	if (data.length < 0 || data === false) return data;
	containerCamion.innerHTML = '';
	if (data.length) {
		const dataNormalize = compareAndMerge(data, dataCamiones);
		for (const camionData of dataNormalize) {
			if (Number(camionData.capacidad) >= Number(camionData.peso_total))
				containerCamion.innerHTML += CardCamion(camionData);
		}
	} else {
		const dataNormalize = compareAndMerge(data, dataCamiones);
		if (Number(dataNormalize.capacidad) >= Number(dataNormalize.peso_total))
			containerCamion.innerHTML += CardCamion(dataNormalize);
	}
};

export default CardCamionManager;
/*
if (data.length) {
		for (const camionData of data) {
			if (Number(camionData.capacidad) >= Number(camionData.peso_total))
				containerCamion.innerHTML += CardCamion(camionData);
		}
	} else {
		if (Number(data.capacidad) >= Number(data.peso_total))
			containerCamion.innerHTML += CardCamion(data);
	}

*/
