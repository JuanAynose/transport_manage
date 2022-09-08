/* cards */
import { deleteEmpleado } from './callbacks/delete/deleteEmpleado.js';
import getSingleEmpleados from './callbacks/get/getSingleEmpleado.js';
import initializeMenuListener from './modals/reset/initializeMenuListener.js';
/*empleados container*/
const editarEmpleado = document.getElementById('editarEmpleado');
const modalDeleteButtons = document.getElementById('modalDeleteButtons');
const modalDeleteEmpleado = document.getElementById('modalDeleteEmpleado');
const modalEditEmpleado = document.getElementById('modalEditEmpleado');

/**/
window.addEventListener('load', e => {
	initializeMenuListener();
});

let getIdEmploye;

const getCity = (optionList,valueId)=>{
	for(const optionItem of optionList){
		if(optionItem.value === valueId) optionItem.selected = true;
	}
}

const callSingleEmploye = async (id_employe, childSelected) => {
	const getSingleEmploye = await getSingleEmpleados(id_employe);
	childSelected.children[0].children[1].value = getSingleEmploye.dni;
	childSelected.children[1].children[1].value = getSingleEmploye.apellido;
	childSelected.children[2].children[1].value = getSingleEmploye.telef;
	childSelected.children[3].children[1].value = getSingleEmploye.direc;
	getCity(childSelected.children[4].children[1].options,getSingleEmploye.cod_ciudad);
	childSelected.children[5].children[1].value = getSingleEmploye.fecha_ingreso;
	childSelected.children[6].children[1].value = getSingleEmploye.fecha_nac;

};

editarEmpleado.addEventListener('click', ev => {
	if (ev.target.textContent === 'Editar') {
		getIdEmploye = Number(
			ev.target.parentElement.previousElementSibling.children[0].children[1]
				.textContent
		);
		callSingleEmploye(getIdEmploye, modalEditEmpleado.children[0].children[1]);
		modalEditEmpleado.classList.remove('hidden');
	} else if (ev.target.textContent === 'Borrar') {
		getIdEmploye = Number(
			ev.target.parentElement.previousElementSibling.children[0].children[1]
				.textContent
		);
		modalDeleteEmpleado.classList.remove('hidden');
	}
});

modalDeleteButtons.addEventListener('click', ev => {
	if (ev.target.textContent === 'Si') {
		modalDeleteEmpleado.classList.add('hidden');
		deleteEmpleado(getIdEmploye);
		window.location.reload();
	} else {
		modalDeleteEmpleado.classList.add('hidden');
	}
});

modalEditEmpleado.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditEmpleado.classList.add('hidden');
		deleteEmpleado(getIdEmploye);
		window.location.reload();
	} else if (ev.target.textContent === 'Cancelar') {
		modalEditEmpleado.classList.add('hidden');
	}
});
