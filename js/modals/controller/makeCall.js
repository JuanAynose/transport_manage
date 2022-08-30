/* gets calls */
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
import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
/* cards */
// import getEmployesSalaryTemplate from "../../cards/CardSalaryEmployes.js";
/* cards container */
const contentSalario = document.getElementById('formSalaryContent');
const contentPagosRealizar = document.getElementById('pagosRealizados');
const contentPaquete = document.getElementById('contentPaquete');
const contentCamionesDisponibles = document.getElementById(
	'contentCamionesDisponibles'
);
/**/

const makeCall = async indenfyNumber => {
	const getData = await getPaquete();
	const getEmployesSalaryTemplate = await getEmpleados();
	const getEmployesSalary = await getSalario();
	const getTrucks = await getCamiones();
	const getCamionesDispo = await getCamionesDisponibles();

	//const envioCall = await ModalEnvioHandler();
	switch (indenfyNumber) {
		case MODAL_OPTIONS.PAQUETERIA:
			contentPaquete.innerHTML = '';
			CardPackageManager(getData, contentPaquete);
			//envioCall;
			/*
			console.log(getCamionesDispo);
			console.log(getData);
			console.log(getEmployesSalaryTemplate);
			*/
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
			CardSalaryManager(getEmployesSalaryTemplate, contentSalario);
			CardCheckManager(getEmployesSalary, contentPagosRealizar);
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
			contentPaquete.innerHTML = '';
			CardPackage(getData, contentPaquete);
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
