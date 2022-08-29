import getEmpleados from '../get/getEmpleados.js';
import getPaquete from '../get/getPaquete.js';
import getCamionesDisponibles from '../get/getCamionesDisponibles.js';
import CardCamion from '../../cards/CardCamion.js';
import CardCamionManager from '../../cards/CardCamionManager.js';
/**/
const enviosCardCamion = document.getElementById('enviosCardCamion');
const makeCall = async ()=>{
    const getData = await getPaquete();
    const getEmployesSalaryTemplate = await getEmpleados();
    const getCamionesDispo = await getCamionesDisponibles();
    return CardCamionManager(getCamionesDispo,enviosCardCamion);
}

export default makeCall;