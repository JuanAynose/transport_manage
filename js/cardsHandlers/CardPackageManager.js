import CardPackage from '../cards/CardPackage.js';

const CardPackageManager = (data, containerPaquete) => {
	if (data.length < 0 || data === false) return data;
	containerPaquete.innerHTML = '';
	let cont = 0;

	if (data.length) {
		for (const packageData of data) {
			containerPaquete.innerHTML += CardPackage(packageData, cont);
			cont += 1;
		}
	} else {
		containerPaquete.innerHTML += CardPackage(data);
	}
};

export default CardPackageManager;
