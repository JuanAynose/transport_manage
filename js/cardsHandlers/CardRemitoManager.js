const CardRemitoManager = (data, containerPaquete) => {
	if (!data.length) return data;
	let cont = 0;
	for (const remitoData of data) {
		//containerPaquete.innerHTML += CardPackage(packageData, cont);
		cont += 1;
	}
};

export default CardRemitoManager;
