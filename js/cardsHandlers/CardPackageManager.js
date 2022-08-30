import CardPackage from '../cards/CardPackage.js';

const CardPackageManager = (data, containerPaquete) => {
	for (const packageData of data) {
		containerPaquete.innerHTML += CardPackage(packageData);
	}
};

export default CardPackageManager;
