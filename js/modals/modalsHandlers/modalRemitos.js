import { REMITO_OPTIONS } from '../../constants/remitoOptions.js';
import { SITUATION_PACKAGE } from '../../constants/situationOptions.js';

const modalMenuRemitos = document.getElementById('modalRemitos').children[0];
const SortDataPackage = (childId, situationChild) => {
	switch (situationChild) {
		case SITUATION_PACKAGE.PREPARACION:
			console.log(
				modalMenuRemitos.children[REMITO_OPTIONS.PREPARANCION],
				childId
			);
			break;
		case SITUATION_PACKAGE.CAMINO:
			console.log(modalMenuRemitos.children[REMITO_OPTIONS.CAMINO], childId);
			break;

		case SITUATION_PACKAGE.ENTREGADO:
			console.log(modalMenuRemitos.children[REMITO_OPTIONS.ENTREGADO], childId);
			break;

		case SITUATION_PACKAGE.DEPOSITO:
			console.log(modalMenuRemitos.children[REMITO_OPTIONS.DEPOSITO], childId);
			break;

		case SITUATION_PACKAGE.PERDIDO:
			console.log(modalMenuRemitos.children[REMITO_OPTIONS.PERDIDO], childId);
			break;
	}
};

const modalRemitos = data => {
	console.log(data);

	for (const itemPackage of data) {
		const { situacion } = itemPackage;
		SortDataPackage(itemPackage, Number(situacion));
	}
};
export default modalRemitos;
