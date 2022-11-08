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

const SortDataPackage = (child, situationChild) => {
	switch (situationChild) {
		case SITUATION_PACKAGE.PREPARACION:
			CardPackageEdit(
				modalMenuRemitos.children[REMITO_OPTIONS.PREPARACION].children[1],
				child
			);
			break;
		case SITUATION_PACKAGE.CAMINO:
			CardPackageEdit(
				modalMenuRemitos.children[REMITO_OPTIONS.CAMINO].children[1],
				child
			);
			break;

		case SITUATION_PACKAGE.ENTREGADO:
			CardPackageEdit(
				modalMenuRemitos.children[REMITO_OPTIONS.ENTREGADO].children[1],
				child
			);
			break;

		case SITUATION_PACKAGE.DEPOSITO:
			CardPackageEdit(
				modalMenuRemitos.children[REMITO_OPTIONS.DEPOSITO].children[1],
				child
			);
			break;

		case SITUATION_PACKAGE.PERDIDO:
			CardPackageEdit(
				modalMenuRemitos.children[REMITO_OPTIONS.PERDIDO].children[1],
				child
			);
			break;
		case SITUATION_PACKAGE.CANCELADO:
			CardPackageEdit(
				modalMenuRemitos.children[REMITO_OPTIONS.CANCELADOS].children[1],
				child
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
