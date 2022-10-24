/* gets calls */
import CardCamionManager from '../../cardsHandlers/CardCamionManager.js';
import CardCheckManager from '../../cardsHandlers/CardCheckManager.js';
import CardCiudadListManager from '../../cardsHandlers/CardCiudadListManager.js';
import CardCiudadManager from '../../cardsHandlers/CardCiudadManager.js';
import CardEmpleadoManager from '../../cardsHandlers/CardEmpleadoManager.js';
import CardPackageManager from '../../cardsHandlers/CardPackageManager.js';
import CardProvinciaManager from '../../cardsHandlers/CardProvinciaManager.js';
import CardRemitoManager from '../../cardsHandlers/CardRemitoManager.js';
import CardSalaryManager from '../../cardsHandlers/CardSalaryManager.js';
import CardEmpleadoEdit from '../../cardsHandlers/edit/CardEmpleadoEdit.js';
/**/
//import ModalEnvioHandler from '../../callbacks/callsHandler/modalEnvioHandler.js';
import getAllPaquete from '../../callbacks/get/getAllPaquete.js';
import getCamiones from '../../callbacks/get/getCamiones.js';
import getCamionesDisponibles from '../../callbacks/get/getCamionesDisponibles.js';
import getCiudades from '../../callbacks/get/getCiudades.js';
import getEmpleados from '../../callbacks/get/getEmpleados.js';
import getPaquete from '../../callbacks/get/getPaquete.js';
import getProvincias from '../../callbacks/get/getProvincias.js';
import getRemitos from '../../callbacks/get/getRemitos.js';
import getSalario from '../../callbacks/get/getSalario.js';
import CardEmpleadosListManager from '../../cardsHandlers/CardEmpleadosListManager.js';
import CardProvinciaListManager from '../../cardsHandlers/CardProvinciaListManager.js';
import CardCamionEdits from '../../cardsHandlers/edit/CardCamionEdits.js';
import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import modalRemitos from '../modalsHandlers/modalRemitos.js';
/* cards container */
const contentSalario = document.getElementById('formSalaryContent');
const contentPagosRealizar = document.getElementById('pagosRealizados');
const containerPackage = document.getElementById('enviosCardPackage');
const containerCamion = document.getElementById('enviosCardCamion');
const containerProvincia = document.getElementById('containerProvincia');
const containerCiudad = document.getElementById('containerCiudad');
const containerEmpleado = document.getElementById('enviosCardEmploye');
const contentCamionesDisponibles = document.getElementById(
	'contentCamionesDisponibles'
);
const containerRemitos = document.getElementById('containerRemitos');
const containerTranporte = document.getElementById('containerTranporte');
const editarCamion = document.getElementById('editarCamion');
const editarEmpleado = document.getElementById('editarEmpleado');
/*load ciudad*/
const ciudadList = document.querySelectorAll('.ciudad_form');
const provinciaList = document.querySelectorAll('.provincia_form');
const empleadoList = document.querySelectorAll('.empleado_select');
/*filters*/
/**/

const makeCall = async indenfyNumber => {
	const getData = await getPaquete();
	const getAllPackages = await getAllPaquete();
	const getEmployes = await getEmpleados();
	const getEmployesSalary = await getSalario();
	const getTrucks = await getCamiones();
	const getCamionesDispo = await getCamionesDisponibles();
	const getCiudad = await getCiudades();
	const getProvincia = await getProvincias();
	const getRemito = await getRemitos();

	CardCiudadListManager(getCiudad, ciudadList);
	CardProvinciaListManager(getProvincia, provinciaList);
	CardEmpleadosListManager(getEmployes, empleadoList);

	switch (indenfyNumber) {
		case MODAL_OPTIONS.PAQUETERIA:
			containerPackage.innerHTML = '';
			containerEmpleado.innerHTML = '';
			CardPackageManager(getData, containerPackage);
			CardCamionManager(getCamionesDispo, containerCamion);
			CardEmpleadoManager(getEmployes, containerEmpleado);
			break;
		case MODAL_OPTIONS.TRANSPORTE:
			console.log("transport call")
			CardCamionEdits(getTrucks, editarCamion);
			break;
		case MODAL_OPTIONS.EMPLEADOS:
			CardEmpleadoEdit(getEmployes, editarEmpleado);
			break;
		case MODAL_OPTIONS.SALARIO:
			contentSalario.innerHTML = '';
			contentPagosRealizar.innerHTML = '';
			CardSalaryManager(getEmployes, contentSalario);
			CardCheckManager(getEmployesSalary, contentPagosRealizar);
			break;
		case MODAL_OPTIONS.REMITOS:
			modalRemitos(getAllPackages);
			CardRemitoManager(getRemito, containerRemitos);
			break;
		case MODAL_OPTIONS.CIUDADES:
			CardCiudadManager(getCiudad, containerCiudad);
			CardProvinciaManager(getProvincia, containerProvincia);
			break;
	}
};
export default makeCall;
