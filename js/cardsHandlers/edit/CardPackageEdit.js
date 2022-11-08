import CardPackageRemito from '../../cards/CardPackageRemito.js';

const CardPackageEdit = (containerPaquete, data) => {
	containerPaquete.innerHTML += CardPackageRemito(data);
};

export default CardPackageEdit;
