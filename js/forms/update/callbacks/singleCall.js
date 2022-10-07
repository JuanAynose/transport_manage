import getPaqueteAllDetails from '../../../callbacks/get/getPaqueteAllDetails.js';
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
	const getPaquete = await getPaqueteAllDetails(id_selected);
	switch (call_name) {
		case CALL_OPTION.SINGLE_EMPLOYE:
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
		case CALL_OPTION.SINGLE_PACKAGE:
			childSelected.children[1].children[1].children[2].value =
				getPaquete[2].descrip;
			childSelected.children[2].children[1].value = getPaquete[2].peso;
			childSelected.children[3].children[1].value = getPaquete[2].tipo_producto;
			childSelected.children[4].children[1].value = getPaquete[0].prioridad;
			childSelected.children[5].children[1].children[1].value =
				getPaquete[1].nombre;
			childSelected.children[5].children[2].children[1].value =
				getPaquete[1].apellido;
			childSelected.children[5].children[3].children[1].value =
				getPaquete[1].cel;
			childSelected.children[5].children[4].children[1].value =
				getPaquete[1].dni;
			childSelected.children[5].children[5].children[1].value =
				getPaquete[1].direccion;
			childSelected.children[5].children[6].children[1].value =
				getPaquete[1].ciudad;
			childSelected.children[5].children[7].children[1].value =
				getPaquete[0].situacion;
			childSelected.children[5].children[8].children[0].value =
				getPaquete[0].cod_paquete;
			childSelected.children[5].children[8].children[1].value =
				getPaquete[1].id_destinatario;
			childSelected.children[5].children[8].children[2].value =
				getPaquete[2].cod_paque;
			break;
	}
};

export default singleCall;
