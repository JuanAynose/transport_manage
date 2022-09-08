/* gets calls */
import CardCamionManager from '../../cardsHandlers/CardCamionManager.js';
import CardCheckManager from '../../cardsHandlers/CardCheckManager.js';
import CardPackageManager from '../../cardsHandlers/CardPackageManager.js';
import CardSalaryManager from '../../cardsHandlers/CardSalaryManager.js';
/**/
//import ModalEnvioHandler from '../../callbacks/callsHandler/modalEnvioHandler.js';
import getCamiones from '../../callbacks/get/getCamiones.js';
import getCamionesDisponibles from '../../callbacks/get/getCamionesDisponibles.js';
import getEmpleados from '../../callbacks/get/getEmpleados.js';
import getPaquete from '../../callbacks/get/getPaquete.js';
import getSalario from '../../callbacks/get/getSalario.js';
import CardEmpleadoManager from '../../cardsHandlers/CardEmpleadoManager.js';
import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import CardEmpleadoEdit from '../../cardsHandlers/edit/CardEmpleadoEdit.js';
import getCiudades from '../../callbacks/get/getCiudades.js';
import CardCiudadListManager from '../../cardsHandlers/CardCiudadListManager.js';
/* cards container */
const contentSalario = document.getElementById('formSalaryContent');
const contentPagosRealizar = document.getElementById('pagosRealizados');
const containerPackage = document.getElementById('enviosCardPackage');
const containerCamion = document.getElementById('enviosCardCamion');
const containerEmpleado = document.getElementById('enviosCardEmploye');
const contentCamionesDisponibles = document.getElementById(
	'contentCamionesDisponibles'
);
const containerTranporte = document.getElementById('containerTranporte');
const editarEmpleado = document.getElementById('editarEmpleado');
/*load ciudad*/
const ciudadList = document.querySelectorAll('.ciudad_form');
/**/

const makeCall = async indenfyNumber => {
	const getData = await getPaquete();
	const getEmployes = await getEmpleados();
	const getEmployesSalary = await getSalario();
	const getTrucks = await getCamiones();
	const getCamionesDispo = await getCamionesDisponibles();
	const getCiudad = await getCiudades();
	CardCiudadListManager(getCiudad, ciudadList);

	switch (indenfyNumber) {
		case MODAL_OPTIONS.PAQUETERIA:
			CardPackageManager(getData, containerPackage);
			CardCamionManager(getCamionesDispo, containerCamion);
			CardEmpleadoManager(getEmployes, containerEmpleado);
			break;
		case MODAL_OPTIONS.TRANSPORTE:
			console.log(getTrucks);
			CardCamionManager(getTrucks, containerTranporte);
			break;
		case MODAL_OPTIONS.EMPLEADOS:
			console.log('soy 3');
			CardEmpleadoEdit(getEmployes, editarEmpleado);
			break;
		case MODAL_OPTIONS.SALARIO:
			contentSalario.innerHTML = '';
			contentPagosRealizar.innerHTML = '';
			CardSalaryManager(getEmployes, contentSalario);
			CardCheckManager(getEmployesSalary, contentPagosRealizar);
			break;
		case MODAL_OPTIONS.REMITOS:
			console.log("anashe");
		    break;
	}
};
/*
const makeCall = async indenfyNumber => {
	const getData = await getPaquete();
	const getEmployesSalaryTemplate = await getEmpleados();
	const getEmployesSalary = await getSalario();
	const getTrucks = await getCamiones();
	const getCamionesDispo = await getCamionesDisponibles();

	const envioCall = await ModalEnvioHandler();
	switch (indenfyNumber) {
		case MODAL_OPTIONS.PAQUETERIA:
			console.log('q paso');
			enviosCardPackage.innerHTML = '';
			CardPackage(getData, enviosCardPackage);
			console.log(getCamionesDispo);
			console.log(getData);
			console.log(getEmployesSalaryTemplate);
			envioCall;
			break;
		case MODAL_OPTIONS.TRANSPORTE:
			console.log(getTrucks);
			break;
		case MODAL_OPTIONS.EMPLEADOS:
			console.log('soy 3');
			break;
		case MODAL_OPTIONS.SALARIO:
			contentSalario.innerHTML = '';
			contentPagosRealizar.innerHTML = '';
			CardSalaryEmployes(getEmployesSalaryTemplate, contentSalario);
			CardSalaryCheck(getEmployesSalary, contentPagosRealizar);
			break;
	}
};
*/
export default makeCall;