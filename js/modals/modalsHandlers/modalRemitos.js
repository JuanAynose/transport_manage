import CardPackageEdit from '../../cardsHandlers/edit/CardPackageEdit.js';
import { REMITO_OPTIONS } from '../../constants/remitoOptions.js';
import { SITUATION_PACKAGE } from '../../constants/situationOptions.js';

const modalMenuRemitos =
	document.getElementById('modalRemitos').children[0].children[0];
const SortDataPackage = (childId, situationChild) => {
	switch (situationChild) {
		case SITUATION_PACKAGE.PREPARACION:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[REMITO_OPTIONS.PREPARANCION]
			);
			break;
		case SITUATION_PACKAGE.CAMINO:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[REMITO_OPTIONS.CAMINO]
			);
			break;

		case SITUATION_PACKAGE.ENTREGADO:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[REMITO_OPTIONS.ENTREGADO]
			);
			break;

		case SITUATION_PACKAGE.DEPOSITO:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[REMITO_OPTIONS.DEPOSITO]
			);
			break;

		case SITUATION_PACKAGE.PERDIDO:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[REMITO_OPTIONS.PERDIDO]
			);
			break;
		case SITUATION_PACKAGE.CANCELADO:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[REMITO_OPTIONS.CANCELADOS]
			);
			break;
	}
};

const modalRemitos = data => {
	if (data.length) {
		for (const itemPackage of data) {
			const { situacion } = itemPackage;
			SortDataPackage(itemPackage, Number(situacion));
		}
	}
};
export default modalRemitos;
