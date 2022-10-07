import CardPackageEdit from '../../cardsHandlers/edit/CardPackageEdit.js';
import { REMITO_OPTIONS } from '../../constants/remitoOptions.js';
import { SITUATION_PACKAGE } from '../../constants/situationOptions.js';

const cleanRemitoContainer = childrens => {
	for (let i = 0; i < childrens.children.length; i++) {
		childrens.children[i].children[1].innerHTML = '';
	}
};

const modalMenuRemitos =
	document.getElementById('modalRemitos').children[0].children[0];

const SortDataPackage = (childId, situationChild) => {
	switch (situationChild) {
		case SITUATION_PACKAGE.PREPARACION:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[1].children[REMITO_OPTIONS.PREPARANCION]
			);
			break;
		case SITUATION_PACKAGE.CAMINO:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[1].children[REMITO_OPTIONS.CAMINO]
			);
			break;

		case SITUATION_PACKAGE.ENTREGADO:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[1].children[REMITO_OPTIONS.ENTREGADO]
			);
			break;

		case SITUATION_PACKAGE.DEPOSITO:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[1].children[REMITO_OPTIONS.DEPOSITO]
			);
			break;

		case SITUATION_PACKAGE.PERDIDO:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[1].children[REMITO_OPTIONS.PERDIDO]
			);
			break;
		case SITUATION_PACKAGE.CANCELADO:
			CardPackageEdit(
				childId,
				modalMenuRemitos.children[1].children[REMITO_OPTIONS.CANCELADOS]
			);
			break;
	}
};

const modalRemitos = data => {
	if (data.length) {
		cleanRemitoContainer(modalMenuRemitos);
		for (const itemPackage of data) {
			const { situacion } = itemPackage;
			SortDataPackage(itemPackage, Number(situacion));
		}
	}
};
export default modalRemitos;
