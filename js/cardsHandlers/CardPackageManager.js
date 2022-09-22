import CardPackage from '../cards/CardPackage.js';

const CardPackageManager = (data, containerPaquete) => {
	if(!data.length) return data;
	containerPaquete.innerHTML = '';
	let cont =0;
	for (const packageData of data) {
		containerPaquete.innerHTML += CardPackage(packageData,cont);
		cont+=1;
	}
};

export default CardPackageManager;
