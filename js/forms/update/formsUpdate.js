/* cards */
import { deleteCamion } from '../../callbacks/delete/deleteCamion.js';
import { deleteCiudad } from '../../callbacks/delete/deleteCiudad.js';
import { deleteEmpleado } from '../../callbacks/delete/deleteEmpleado.js';
import { deletePaqueteAll } from '../../callbacks/delete/deletePaqueteAll.js';
import { deleteRemito } from '../../callbacks/delete/deleteRemito.js';

import { CALL_OPTION } from '../../constants/callsOptionsUpdate.js';
import singleCall from './callbacks/singleCall.js';
/*empleados container*/
const editarEmpleado = document.getElementById('editarEmpleado');
const modalDeleteEmpleado = document.getElementById('modalDeleteEmpleado');
const modalEditEmpleado = document.getElementById('modalEditEmpleado');

/*camiones container*/
const editarCamion = document.getElementById('editarCamion');
const modalDeleteCamion = document.getElementById('modalDeleteCamion');
const modalEditCamion = document.getElementById('modalEditCamion');
/*remito container*/
const editarRemito = document.getElementById('editarRemito');
const modalEditRemito = document.getElementById('modalEditRemito');
const modalDeleteRemito = document.getElementById('modalDeleteRemito');

/*ciudad container*/
const modalEditCiudad = document.getElementById('modalEditCiudad');
const modalDeleteCiudad = document.getElementById('modalDeleteCiudad');
const editarCiudad = document.getElementById('containerCiudad');

/*provincia container*/

/**/
const formEmpleadoEdit = document.getElementById('formEmpleadoEdit');
const formCamionEdit = document.getElementById('formCamionEdit');
const formRemitoEdit = document.getElementById('formRemitoEdit');

let getIdEmploye;
let getIdCamion;
let getIdPaqueteDetalle;
let getIdPaquete;
let getIdCiudad;

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
		getIdPaqueteDetalle = Number(
			ev.target.parentElement.parentElement.parentElement.children[2]
				.children[1].children[1].textContent
		);
		getIdPaquete = Number(
			ev.target.parentElement.parentElement.parentElement.children[3]
				.children[1].value
		);
		singleCall(getIdPaqueteDetalle, formRemitoEdit, CALL_OPTION.SINGLE_PACKAGE);
		modalEditRemito.classList.remove('hidden');
	}
});

modalDeleteRemito.addEventListener('click', ev => {
	if (ev.target.textContent === 'Si') {
		deleteRemito(getIdPaquete);
		deletePaqueteAll({
			id_destinatario: Number(
				formRemitoEdit.children[5].children[8].children[1].value
			),
			id_detalle_paquete: getIdPaqueteDetalle,
			id_paquete: getIdPaquete
		});
		modalDeleteRemito.classList.add('hidden');
	} else if (ev.target.textContent === 'No') {
		modalDeleteRemito.classList.add('hidden');
	}
});

modalEditRemito.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditRemito.classList.add('hidden');
	} else if (ev.target.value === 'Cancelar') {
		formRemitoEdit.reset();
		modalEditRemito.classList.add('hidden');
	} else if (ev.target.value === 'Borrar') {
		modalDeleteRemito.children[0].children[0].children[0].textContent =
			getIdPaqueteDetalle;
		modalDeleteRemito.classList.remove('hidden');
		modalEditRemito.classList.add('hidden');
	}
});

/* ciudad modals */
editarCiudad.addEventListener('click', ev => {
	if (ev.target.textContent === 'Editar') {
		console.log(ev.target.textContent);
		getIdCiudad = Number(
			ev.target.parentElement.parentElement.children[3].children[0].children[0]
				.textContent
		);
		singleCall(
			getIdCiudad,
			modalEditCiudad.children[0].children[1],
			CALL_OPTION.SINGLE_CITY
		);
		modalEditCiudad.classList.remove('hidden');
	} else if (ev.target.textContent === 'Borrar') {
		getIdCiudad = Number(
			ev.target.parentElement.parentElement.children[3].children[0].children[0]
				.textContent
		);
		modalDeleteCiudad.children[0].children[0].children[0].textContent =
			getIdCiudad;
		modalDeleteCiudad.classList.remove('hidden');
	}
});

modalDeleteCiudad.addEventListener('click', ev => {
	if (ev.target.textContent === 'Si') {
		modalDeleteCiudad.classList.add('hidden');
		deleteCiudad(getIdCiudad);
	} else if (ev.target.textContent === 'No') {
		modalDeleteCiudad.classList.add('hidden');
	}
});

modalEditCiudad.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditCiudad.classList.add('hidden');
	} else if (ev.target.value === 'Cancelar') {
		formEmpleadoEdit.reset();
		modalEditCiudad.classList.add('hidden');
	}
});

/* provincia modals */
editarCiudad.addEventListener('click', ev => {
	if (ev.target.textContent === 'Editar') {
		console.log(ev.target.textContent);
		getIdCiudad = Number(
			ev.target.parentElement.parentElement.children[3].children[0].children[0]
				.textContent
		);
		singleCall(
			getIdCiudad,
			modalEditCiudad.children[0].children[1],
			CALL_OPTION.SINGLE_CITY
		);
		modalEditCiudad.classList.remove('hidden');
	} else if (ev.target.textContent === 'Borrar') {
		getIdCiudad = Number(
			ev.target.parentElement.parentElement.children[3].children[0].children[0]
				.textContent
		);
		modalDeleteCiudad.children[0].children[0].children[0].textContent =
			getIdCiudad;
		modalDeleteCiudad.classList.remove('hidden');
	}
});

modalDeleteCiudad.addEventListener('click', ev => {
	if (ev.target.textContent === 'Si') {
		modalDeleteCiudad.classList.add('hidden');
		deleteCiudad(getIdCiudad);
	} else if (ev.target.textContent === 'No') {
		modalDeleteCiudad.classList.add('hidden');
	}
});

modalEditCiudad.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditCiudad.classList.add('hidden');
	} else if (ev.target.value === 'Cancelar') {
		formEmpleadoEdit.reset();
		modalEditCiudad.classList.add('hidden');
	}
});
