/* gets calls */
import CardPackage from '../../cards/CardPackage.js';
import CardSalaryCheck from '../../cards/CardSalaryCheck.js';
import CardSalaryEmployes from '../../cards/CardSalaryManager.js';
/**/
import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import ModalEnvioHandler from './modalEnvioHandler.js';
import getCamiones from '../get/getCamiones.js';
import getEmpleados from '../get/getEmpleados.js';
import getPaquete from '../get/getPaquete.js';
import getSalario from '../get/getSalario.js';
import getCamionesDisponibles from '../get/getCamionesDisponibles.js';
import CardEmploye from '../../cards/CardEmploye.js';
/* cards */
// import getEmployesSalaryTemplate from "../../cards/CardSalaryEmployes.js";
/* cards container */
const contentSalario = document.getElementById('formSalaryContent');
const contentPagosRealizar = document.getElementById('pagosRealizados');
const contentPaquete = document.getElementById('contentPaquete');
const contentCamionesDisponibles = document.getElementById('contentCamionesDisponibles');
/**/

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

export default makeCall;
