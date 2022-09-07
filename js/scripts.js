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

const callSingleEmploye = async (id_employe, childSelected) => {
	const getSingleEmploye = await getSingleEmpleados(id_employe);
	console.log(getSingleEmploye);
	childSelected.children[0].children[1].value = getSingleEmploye.dni;
	childSelected.children[1].children[1].value = getSingleEmploye.apellido;
	console.log(childSelected);
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
