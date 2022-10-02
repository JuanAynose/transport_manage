import CardPackageRemito from '../../cards/CardPackageRemito.js';

const CardPackageEdit = (data, containerPaquete) => {
	if (!data.length <= 0) return data;
	containerPaquete.innerHTML = '';
	let cont = 0;
	if (!data.length) {
		containerPaquete.innerHTML += CardPackageRemito(data);
	} else {
		for (const packageData of data) {
			containerPaquete.innerHTML += CardPackageRemito(packageData);
			cont += 1;
		}
	}
};

export default CardPackageEdit;
