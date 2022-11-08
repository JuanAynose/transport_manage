import getPaqueteAllDetails from '../../../callbacks/get/getPaqueteAllDetails.js';
import getSingleCamion from '../../../callbacks/get/getSingleCamion.js';
import getSingleCiudad from '../../../callbacks/get/getSingleCiudad.js';
import getSingleEmpleados from '../../../callbacks/get/getSingleEmpleado.js';
import getSingleProvincia from '../../../callbacks/get/getSingleProvincia.js';
import getSingleSalario from '../../../callbacks/get/getSingleSalario.js';
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
	const getSingleCity = await getSingleCiudad(id_selected);
	const getSingleStates = await getSingleProvincia(id_selected);
	const getSalario = await getSingleSalario(id_selected);
	switch (call_name) {
		case CALL_OPTION.SINGLE_EMPLOYE:
			childSelected.children[0].children[0].value = id_selected;
			childSelected.children[1].children[0].value = getSingleEmploye.dni;
			childSelected.children[2].children[0].value = getSingleEmploye.apellido;
			childSelected.children[3].children[0].value = getSingleEmploye.telef;
			childSelected.children[4].children[0].value = getSingleEmploye.direc;
			getCity(
				childSelected.children[5].children[1].options,
				getSingleEmploye.cod_ciudad
			);
			childSelected.children[6].children[1].value =
				getSingleEmploye.fecha_ingreso;
			childSelected.children[7].children[1].value = getSingleEmploye.fecha_nac;
			break;
		case CALL_OPTION.SINGLE_TRUCK:
			childSelected.children[0].children[0].value = id_selected;
			childSelected.children[1].children[0].value = getSingleTruck.capacidad;
			childSelected.children[2].children[0].value = getSingleTruck.marca;
			childSelected.children[3].children[1].value =
				getSingleTruck.disponibilidad;
			break;
		case CALL_OPTION.SINGLE_PACKAGE:
			childSelected[0].value = id_selected;
			childSelected[1].value = getPaquete[2].descrip;
			childSelected[2].value = getPaquete[2].peso;
			childSelected[3].value = getPaquete[2].tipo_producto;
			childSelected[4].value = getPaquete[0].prioridad;
			childSelected[5].value = getPaquete[1].nombre;
			childSelected[6].value = getPaquete[1].apellido;
			childSelected[7].value = getPaquete[1].cel;
			childSelected[8].value = getPaquete[1].dni;
			childSelected[9].value = getPaquete[1].direccion;
			childSelected[10].value = getPaquete[1].ciudad;
			childSelected[11].value = getPaquete[0].situacion;
			childSelected[12].value = getPaquete[0].cod_paquete;
			childSelected[13].value = getPaquete[1].id_destinatario;
			childSelected[14].value = getPaquete[2].cod_paque;
			break;
		case CALL_OPTION.SINGLE_CITY:
			childSelected[0].value = getSingleCity.nombre_ciudad;
			childSelected[1].value = getSingleCity.cod_postal;
			childSelected[2].value = getSingleCity.id_prov;
			childSelected[3].value = getSingleCity.id_ciudad;
			break;
		case CALL_OPTION.SINGLE_STATE:
			childSelected[0].value = getSingleStates.nombre_provincia;
			childSelected[1].value = getSingleStates.id_prov;
			break;
		case CALL_OPTION.SINGLE_SALARY:
			childSelected[0].value = getSalario.cantidad_hora;
			childSelected[1].value = getSalario.precio_hora;
			childSelected[2].value = getSalario.fecha_pago;
			childSelected[3].value = getSalario.id_empleado;
			childSelected[4].value = getSalario.id_salario;
			break;
	}
};

export default singleCall;
