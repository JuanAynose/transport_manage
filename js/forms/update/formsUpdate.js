/* cards */
import { deleteCamion } from '../../callbacks/delete/deleteCamion.js';
import { deleteEmpleado } from '../../callbacks/delete/deleteEmpleado.js';
import { CALL_OPTION } from '../../constants/callsOptionsUpdate.js';
import singleCall from './callbacks/singleCall.js';
/*empleados container*/
const editarEmpleado = document.getElementById('editarEmpleado');
const modalDeleteEmpleado = document.getElementById('modalDeleteEmpleado');
const modalEditEmpleado = document.getElementById('modalEditEmpleado');
const modalEditRemito = document.getElementById('modalEditRemito');

/*camiones container*/
const editarCamion = document.getElementById('editarCamion');
const modalDeleteCamion = document.getElementById('modalDeleteCamion');
const modalEditCamion = document.getElementById('modalEditCamion');
/*remito container*/
const editarRemito = document.getElementById('editarRemito');



const formEmpleadoEdit = document.getElementById('formEmpleadoEdit');
const formCamionEdit = document.getElementById('formCamionEdit');
const formRemitoEdit = document.getElementById('formRemitoEdit');

let getIdEmploye;
let getIdCamion;
let getIdPaquete;

/*empleado modals*/

editarEmpleado.addEventListener('click', ev => {
	if (ev.target.textContent === 'Editar') {
		getIdEmploye = Number(
			ev.target.parentElement.previousElementSibling.children[0].children[1]
				.textContent
		);
		singleCall(
			getIdEmploye,
			modalEditEmpleado.children[0].children[1],
			CALL_OPTION.SINGLE_EMPLOYE
		);
		modalEditEmpleado.classList.remove('hidden');
	} else if (ev.target.textContent === 'Borrar') {
		getIdEmploye = Number(
			ev.target.parentElement.previousElementSibling.children[0].children[1]
				.textContent
		);
		modalDeleteEmpleado.children[0].children[0].children[0].textContent =
			getIdEmploye;
		console.log(ev.target);
		modalDeleteEmpleado.classList.remove('hidden');
	}
});

modalDeleteEmpleado.addEventListener('click', ev => {
	if (ev.target.textContent === 'Si') {
		modalDeleteEmpleado.classList.add('hidden');
		deleteEmpleado(getIdEmploye);
	} else if (ev.target.textContent === 'No') {
		modalDeleteEmpleado.classList.add('hidden');
	}
});

modalEditEmpleado.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditEmpleado.classList.add('hidden');
	} else if (ev.target.value === 'Cancelar') {
		formEmpleadoEdit.reset();
		modalEditEmpleado.classList.add('hidden');
	}
});

/*camion modals*/

editarCamion.addEventListener('click', ev => {
	console.log(modalEditCamion.children[0].children[1]);
	if (ev.target.textContent === 'Editar') {
		getIdCamion = Number(
			ev.target.parentElement.previousElementSibling.children[0].children[0]
				.textContent
		);
		console.log(modalEditCamion.children[0].children[1]);
		singleCall(
			getIdCamion,
			modalEditCamion.children[0].children[1],
			CALL_OPTION.SINGLE_TRUCK
		);
		modalEditCamion.classList.remove('hidden');
	} else if (ev.target.textContent === 'Borrar') {
		getIdCamion = Number(
			ev.target.parentElement.previousElementSibling.children[0].children[0]
				.textContent
		);
		modalDeleteCamion.children[0].children[0].children[0].textContent =
			getIdCamion;
		modalDeleteCamion.classList.remove('hidden');
	}
});

modalDeleteCamion.addEventListener('click', ev => {
	if (ev.target.textContent === 'Si') {
		modalDeleteCamion.classList.add('hidden');
		deleteCamion(getIdCamion);
	} else if (ev.target.textContent === 'No') {
		modalDeleteCamion.classList.add('hidden');
	}
});

modalEditCamion.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditCamion.classList.add('hidden');
	} else if (ev.target.value === 'Cancelar') {
		formCamionEdit.reset();
		modalEditCamion.classList.add('hidden');
	}
});

/* paquete modals */
editarRemito.addEventListener('click', ev => {
	if (ev.target.textContent === 'Editar') {
		getIdPaquete = Number(ev.target.parentElement.parentElement.parentElement.children[2].children[1].children[1].textContent);
		singleCall(getIdPaquete,
			formRemitoEdit,
			CALL_OPTION.SINGLE_PACKAGE);
		modalEditRemito.classList.remove('hidden');
	} else if (ev.target.textContent === 'Borrar') {
		/*
		getIdEmploye = Number(
			ev.target.parentElement.previousElementSibling.children[0].children[1]
				.textContent
		);
		modalDeleteEmpleado.children[0].children[0].children[0].textContent =
			getIdEmploye;
		console.log(ev.target);
		modalDeleteEmpleado.classList.remove('hidden');
		*/
	}
});
/*

modalDeleteEmpleado.addEventListener('click', ev => {
	if (ev.target.textContent === 'Si') {
		modalDeleteEmpleado.classList.add('hidden');
		deleteEmpleado(getIdEmploye);
	} else if (ev.target.textContent === 'No') {
		modalDeleteEmpleado.classList.add('hidden');
	}
});

*/
modalEditRemito.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditRemito.classList.add('hidden');
	} else if (ev.target.value === 'Cancelar') {
		formRemitoEdit.reset();
		modalEditRemito.classList.add('hidden');
	}
});
