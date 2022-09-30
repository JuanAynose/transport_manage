import getSingleCamion from '../../../callbacks/get/getSingleCamion.js';
import getSingleEmpleados from '../../../callbacks/get/getSingleEmpleado.js';
import { CALL_OPTION } from '../../../constants/callsOptionsUpdate.js';

const getCity = (optionList, valueId) => {
	for (const optionItem of optionList) {
		if (optionItem.value === valueId) optionItem.selected = true;
	}
};

const singleCall = async (id_selected, childSelected, call_name) => {
	const getSingleEmploye = await getSingleEmpleados(id_selected);
	const getSingleTruck = await getSingleCamion(id_selected);

	console.log(getSingleTruck);
	switch (call_name) {
		case CALL_OPTION.SINGLE_EMPLOYE:
			console.log('anashei');
			childSelected.children[0].children[1].value = id_selected;
			childSelected.children[1].children[1].value = getSingleEmploye.dni;
			childSelected.children[2].children[1].value = getSingleEmploye.apellido;
			childSelected.children[3].children[1].value = getSingleEmploye.telef;
			childSelected.children[4].children[1].value = getSingleEmploye.direc;
			getCity(
				childSelected.children[5].children[1].options,
				getSingleEmploye.cod_ciudad
			);
			childSelected.children[6].children[1].value =
				getSingleEmploye.fecha_ingreso;
			childSelected.children[7].children[1].value = getSingleEmploye.fecha_nac;
			break;
		case CALL_OPTION.SINGLE_TRUCK:
			childSelected.children[0].children[1].value = id_selected;
			childSelected.children[1].children[1].value = getSingleTruck.capacidad;
			childSelected.children[2].children[1].value = getSingleTruck.marca;
			childSelected.children[3].children[1].value =
				getSingleTruck.disponibilidad;
			break;
	}
};

export default singleCall;
