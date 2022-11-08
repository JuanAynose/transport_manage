import getCamionesDisponibles from '../../callbacks/get/getCamionesDisponibles.js';
import getEmpleados from '../../callbacks/get/getEmpleados.js';
import getPaquete from '../../callbacks/get/getPaquete.js';
import CardCamionManager from '../../cardsHandlers/CardCamionManager.js';
/**/
const enviosCardCamion = document.getElementById('enviosCardCamion');
const makeCall = async () => {
	const getData = await getPaquete();
	const getEmployesSalaryTemplate = await getEmpleados();
	const getCamionesDispo = await getCamionesDisponibles();
	return CardCamionManager(getCamionesDispo, enviosCardCamion);
};

export default makeCall;
