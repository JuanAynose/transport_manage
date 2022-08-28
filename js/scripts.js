import makeCall from "./formsCalls/callsHandler/modalFetchHandler.js";

/*cards*/
const contentPaquete = document.getElementById("contentPaquete");
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

const resetModals = () => {
  for (const childrens of contentRight.children) {
    childrens.classList.add("hidden");
  }
  for (const childrens of menuList.children) {
    childrens.children[0].classList.remove("active");
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
