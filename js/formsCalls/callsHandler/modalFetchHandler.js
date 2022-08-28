/*gets calls*/
import CardPackage from "../../cards/CardPackage.js";
import CardSalaryCheck from "../../cards/CardSalaryCheck.js";
import CardSalaryEmployes from "../../cards/CardSalaryEmployes.js";
/**/
import { MODAL_OPTIONS } from "../../constants/modalOptions.js";
import getCamiones from "../get/getCamiones.js";
import getEmpleados from "../get/getEmpleados.js";
import getPaquete from "../get/getPaquete.js";
import getSalario from "../get/getSalario.js";
/*cards */
//import getEmployesSalaryTemplate from "../../cards/CardSalaryEmployes.js";
/*cards container*/
const contentSalario = document.getElementById("formSalaryContent");
const contentPagosRealizar = document.getElementById("pagosRealizados");
/**/

const makeCall = async (indenfyNumber) => {
  const getData = await getPaquete();
  const getEmployesSalaryTemplate = await getEmpleados();
  const getEmployesSalary = await getSalario();
  const getTrucks = await getCamiones();
  switch (indenfyNumber) {
    case MODAL_OPTIONS.PAQUETERIA:
      contentPaquete.innerHTML = "";
      CardPackage(getData, contentPaquete);
      break;
    case MODAL_OPTIONS.TRANSPORTE:
      console.log(getTrucks);
      break;
    case MODAL_OPTIONS.EMPLEADOS:
      console.log("soy 3");
      break;
    case MODAL_OPTIONS.SALARIO:
      contentSalario.innerHTML = "";
      contentPagosRealizar.innerHTML = "";
      CardSalaryEmployes(getEmployesSalaryTemplate, contentSalario);
      CardSalaryCheck(getEmployesSalary, contentPagosRealizar);
      break;
  }
};

export default makeCall;
