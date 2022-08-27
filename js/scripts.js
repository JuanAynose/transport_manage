import CardPackage from "./cards/CardPackage.js";
import CardSalaryEmployes from "./cards/CardSalaryEmployes.js";
import getEmpleados from "./formsCalls/get/getEmpleados.js";
import getPaquete from "./formsCalls/get/getPaquete.js";
import { postCamion } from "./formsCalls/post/postCamion.js";
import { postEmpleado } from "./formsCalls/post/postEmpleado.js";
import { postPaquete } from "./formsCalls/post/postPaquete.js";

/*form data*/
const formPaquete = document.getElementById("formPaquete");
const formEmpleado = document.getElementById("formEmpleado");
const formCamion = document.getElementById("formTransporte");
const formSalario = document.getElementById("formSalario");
/**/
/*cards*/
const contentPaquete = document.getElementById("contentPaquete");
const contentSalario = document.getElementById("formSalaryContent");
/**/
const modalProfile = document.getElementById("modal__profile");
const modalProfileButton = document.getElementById("modal__button");
const contentRight = document.getElementById("contentRight");
const menuList = document.getElementById("menuList");
/* buttons modals */
const paqueteButton = document.getElementById("paqueButton");
const transporteButton = document.getElementById("transButton");
const empleadoButton = document.getElementById("empleButton");
const salarioButton = document.getElementById("salarioButton");
/*modals*/
const modalPaqueteria = document.getElementById("modalPaqueteria");
const modalTransporte = document.getElementById("modalTransporte");
const modalEmpleados = document.getElementById("modalEmpleados");
const modalSalario = document.getElementById("modalSalario");

/*checks if any modal is open*/
const resetModals = () => {
  for (const childrens of contentRight.children) {
    childrens.classList.add("hidden");
  }
  for (const childrens of menuList.children) {
    childrens.children[0].classList.remove("active");
  }
};

const makeCall = async (indenfyNumber) => {
  const getData = await getPaquete();
  const getEmployesSalary = await getEmpleados();
  switch (indenfyNumber) {
    case 0:
      contentPaquete.innerHTML = "";
      CardPackage(getData, contentPaquete);
      break;
    case 3:
      contentSalario.innerHTML = "";
      CardSalaryEmployes(getEmployesSalary, contentSalario);
      break;
  }
};

/*open the current modal selected uwu*/
menuList.addEventListener("click", (e) => {
  for (let i = 0; i < menuList.children.length; i++) {
    if (e.target.textContent === menuList.children[i].textContent) {
      resetModals();
      contentRight.children[i].classList.remove("hidden");
      makeCall(i);
      if (e.target.tagName === "A") e.target.classList.toggle("active");
    }
  }
});

formSalario.addEventListener("submit", (e) => {
  e.preventDefault();
  let employeSelected;
  let formData = new FormData(formSalario);
  for (const employe of formData.entries()) {
    console.log(employe);
    //employeSelected = employe;
  }
  //console.log(employeSelected);
});

/*open the modal of "ingresar paquete" anashei*/
formPaquete.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(formPaquete);
  postPaquete({
    peso_paquete: formData.get("peso_paquete"),
    tipo_paquete: formData.get("tipo_paquete"),
    nombre_paquete: formData.get("desc_paquete"),
    nivel_prioridad: formData.get("prioridad"),
    nombre_destinatario: formData.get("nombre_destinatario"),
    apellido_destinatario: formData.get("apellido_destinatario"),
    numero_destinatario: formData.get("numero_destinatario"),
    dni_destinatario: formData.get("dni_destinatario"),
    ciudad_destinatario: formData.get("ciudad"),
    direccion_destinatario: formData.get("direccion_destinatario"),

    fecha_entrega: formData.get("fecha_entrega"),
  });
  formPaquete.reset();
});

/*open the modal of "ingresar empleado" uwu*/
formEmpleado.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(formEmpleado);
  postEmpleado({
    dni_empleado: formData.get("dni_empleado"),
    apellido_empleado: formData.get("apellido_empleado"),
    telefono_empleado: formData.get("telefono_empleado"),
    direccion_empleado: formData.get("direccion_empleado"),
    ciudad_empleado: formData.get("ciudad"),
    fecha_ingreso_empleado: formData.get("fecha_ingreso_empleado"),
    fecha_nacimiento_empleado: formData.get("fecha_nacimiento_empleado"),
  });
  formEmpleado.reset();
});

/* open the modal "ingresar camion" */
formCamion.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(formCamion);
  postCamion({
    capacidad_camion: formData.get("capacidad_camion"),
    marca_camion: formData.get("marca_camion"),
    disponibilidad_camion: formData.get("disponibilidad_camion"),
  });
  formCamion.reset();
});
