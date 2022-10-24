/* cards */
import { deleteCamion } from '../../callbacks/delete/deleteCamion.js';
import { deleteCiudad } from '../../callbacks/delete/deleteCiudad.js';
import { deleteEmpleado } from '../../callbacks/delete/deleteEmpleado.js';
import { deletePaqueteAll } from '../../callbacks/delete/deletePaqueteAll.js';
import { deleteProvincia } from '../../callbacks/delete/deleteProvincia.js';
import { deleteRemito } from '../../callbacks/delete/deleteRemito.js';
import { deleteSalario } from '../../callbacks/delete/deleteSalario.js';
import { CALL_OPTION } from '../../constants/callsOptionsUpdate.js';
import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';
import singleCall from './callbacks/singleCall.js';
/*block body scroll*/
const body = document.getElementById('body');

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
const modalEditProvincia = document.getElementById('modalEditProvincia');
const modalDeleteProvincia = document.getElementById('modalDeleteProvincia');
const editarProvincia = document.getElementById('containerProvincia');
/* salario container */
const modalEditSalario = document.getElementById('modalEditSalario');
const modalDeleteSalario = document.getElementById('modalDeleteSalario');
const editarSalario = document.getElementById('pagosRealizados');
/**/
const formEmpleadoEdit = document.getElementById('formEmpleadoEdit');
const formCamionEdit = document.getElementById('formCamionEdit');
const formRemitoEdit = document.getElementById('formRemitoEdit');
const formProvinciaEdit = document.getElementById('formProvinciaEdit');
const formCiudadEdit = document.getElementById('formCiudadEdit');
const formSalarioEdit = document.getElementById('formSalarioEdit');

let getIdEmploye;
let getIdCamion;
let getIdPaqueteDetalle;
let getIdPaquete;
let getIdCiudad;
let getIdProvincia;
let getIdSalario;
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
		body.classList.add('block');
	} else if (ev.target.textContent === 'Borrar') {
		getIdEmploye = Number(
			ev.target.parentElement.previousElementSibling.children[0].children[1]
				.textContent
		);
		modalDeleteEmpleado.children[0].children[0].children[0].textContent =
			getIdEmploye;
		modalDeleteEmpleado.classList.remove('hidden');
		body.classList.add('block');
	}
});

modalDeleteEmpleado.addEventListener('click', ev => {
	if (ev.target.value === 'Si') {
		modalDeleteEmpleado.classList.add('hidden');
		body.classList.remove('block');
		deleteEmpleado(getIdEmploye);
		makeCall(MODAL_OPTIONS.EMPLEADOS);
	} else if (ev.target.value === 'No') {
		modalDeleteEmpleado.classList.add('hidden');
		body.classList.remove('block');
	}
});

modalEditEmpleado.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditEmpleado.classList.add('hidden');
		body.classList.remove('block');
	} else if (ev.target.value === 'Cancelar') {
		formEmpleadoEdit.reset();
		modalEditEmpleado.classList.add('hidden');
		body.classList.remove('block');
	}
});

/*camion modals*/

editarCamion.addEventListener('click', ev => {
	if (ev.target.textContent === 'Editar') {
		getIdCamion = Number(
			ev.target.parentElement.previousElementSibling.children[0].children[0]
				.textContent
		);
		singleCall(
			getIdCamion,
			modalEditCamion.children[0].children[1],
			CALL_OPTION.SINGLE_TRUCK
		);
		modalEditCamion.classList.remove('hidden');
		body.classList.add('block');
	} else if (ev.target.textContent === 'Borrar') {
		getIdCamion = Number(
			ev.target.parentElement.previousElementSibling.children[0].children[0]
				.textContent
		);
		modalDeleteCamion.children[0].children[0].children[0].textContent =
			getIdCamion;
		modalDeleteCamion.classList.remove('hidden');
		body.classList.add('block');
	}
});

modalDeleteCamion.addEventListener('click', ev => {
	if (ev.target.value === 'Si') {
		modalDeleteCamion.classList.add('hidden');
		body.classList.remove('block');
		deleteCamion(getIdCamion);
		window.location.reload();
	} else if (ev.target.value === 'No') {
		modalDeleteCamion.classList.add('hidden');
		body.classList.remove('block');
	}
});

modalEditCamion.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditCamion.classList.add('hidden');
	} else if (ev.target.value === 'Cancelar') {
		formCamionEdit.reset();
		modalEditCamion.classList.add('hidden');
		body.classList.remove('block');
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
		body.classList.add('block');
	}
});

modalDeleteRemito.addEventListener('click', ev => {
	if (ev.target.value === 'Si') {
		deleteRemito(getIdPaquete);
		deletePaqueteAll({
			id_destinatario: Number(formRemitoEdit[13].value),
			id_detalle_paquete: getIdPaqueteDetalle,
			id_paquete: getIdPaquete
		});
		makeCall(MODAL_OPTIONS.REMITOS);
		modalDeleteRemito.classList.add('hidden');
		body.classList.remove('block');
	} else if (ev.target.value === 'No') {
		modalDeleteRemito.classList.add('hidden');
		body.classList.remove('block');
	}
});

modalEditRemito.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditRemito.classList.add('hidden');
		body.classList.remove('block');
	} else if (ev.target.value === 'Cancelar') {
		formRemitoEdit.reset();
		modalEditRemito.classList.add('hidden');
		body.classList.remove('block');
	} else if (ev.target.value === 'Borrar') {
		modalDeleteRemito.children[0].children[0].children[0].textContent =
			getIdPaqueteDetalle;
		modalDeleteRemito.classList.remove('hidden');
		modalEditRemito.classList.add('hidden');
		body.classList.add('block');
	}
});

/* ciudad modals */
editarCiudad.addEventListener('click', ev => {
	if (ev.target.textContent === 'Editar') {
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
		body.classList.add('block');
	} else if (ev.target.textContent === 'Borrar') {
		getIdCiudad = Number(
			ev.target.parentElement.parentElement.children[3].children[0].children[0]
				.textContent
		);
		modalDeleteCiudad.children[0].children[0].children[0].textContent =
			getIdCiudad;
		modalDeleteCiudad.classList.remove('hidden');
		body.classList.add('block');
	}
});

modalDeleteCiudad.addEventListener('click', ev => {
	if (ev.target.value === 'Si') {
		modalDeleteCiudad.classList.add('hidden');
		body.classList.remove('block');
		deleteCiudad(getIdCiudad);
		makeCall(MODAL_OPTIONS.CIUDADES);
		window.location.reload();
	} else if (ev.target.value === 'No') {
		modalDeleteCiudad.classList.add('hidden');
		body.classList.remove('block');
	}
});

modalEditCiudad.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditCiudad.classList.add('hidden');
	} else if (ev.target.value === 'Cancelar') {
		formCiudadEdit.reset();
		modalEditCiudad.classList.add('hidden');
		body.classList.remove('block');
	}
});

/* provincia modals */
editarProvincia.addEventListener('click', ev => {
	if (ev.target.textContent === 'Editar') {
		getIdProvincia = Number(
			ev.target.parentElement.parentElement.children[1].children[0].children[0]
				.textContent
		);
		singleCall(
			getIdProvincia,
			modalEditProvincia.children[0].children[1],
			CALL_OPTION.SINGLE_STATE
		);
		modalEditProvincia.classList.remove('hidden');
		body.classList.add('block');
	} else if (ev.target.textContent === 'Borrar') {
		getIdProvincia = Number(
			ev.target.parentElement.parentElement.children[1].children[0].children[0]
				.textContent
		);
		modalDeleteProvincia.children[0].children[0].children[0].textContent =
			getIdProvincia;
		modalDeleteProvincia.classList.remove('hidden');
		body.classList.add('block');
	}
});

modalDeleteProvincia.addEventListener('click', ev => {
	if (ev.target.value === 'Si') {
		modalDeleteProvincia.classList.add('hidden');
		body.classList.remove('block');
		deleteProvincia(getIdProvincia);
		makeCall(MODAL_OPTIONS.CIUDADES);
		window.location.reload();
	} else if (ev.target.value === 'No') {
		modalDeleteProvincia.classList.add('hidden');
		body.classList.remove('block');
	}
});

modalEditProvincia.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditProvincia.classList.add('hidden');
	} else if (ev.target.value === 'Cancelar') {
		formProvinciaEdit.reset();
		modalEditProvincia.classList.add('hidden');
		body.classList.remove('block');
	}
});

/* salario modals */

editarSalario.addEventListener('click', ev => {
	if (ev.target.textContent === 'Editar') {
		getIdSalario = Number(
			ev.target.parentElement.parentElement.parentElement.parentElement
				.children[3].children[0].value
		);
		singleCall(
			getIdSalario,
			modalEditSalario.children[0].children[1],
			CALL_OPTION.SINGLE_SALARY
		);
		modalEditSalario.classList.remove('hidden');
		body.classList.add('block');
	} else if (ev.target.textContent === 'Borrar') {
		getIdSalario = Number(
			ev.target.parentElement.parentElement.parentElement.parentElement
				.children[3].children[0].value
		);
		modalDeleteSalario.children[0].children[0].children[0].textContent =
			getIdSalario;
		modalDeleteSalario.classList.remove('hidden');
		body.classList.add('block');
	}
});

modalDeleteSalario.addEventListener('click', ev => {
	if (ev.target.value === 'Si') {
		modalDeleteSalario.classList.add('hidden');
		deleteSalario(getIdSalario);
		makeCall(MODAL_OPTIONS.SALARIO);
		body.classList.remove('block');
	} else if (ev.target.value === 'No') {
		modalDeleteSalario.classList.add('hidden');
		body.classList.remove('block');
	}
});

modalEditSalario.addEventListener('click', ev => {
	if (ev.target.textContent === 'Guardar') {
		modalEditSalario.classList.add('hidden');
		body.classList.remove('block');
	} else if (ev.target.value === 'Cancelar') {
		formSalarioEdit.reset();
		modalEditSalario.classList.add('hidden');
		body.classList.remove('block');
	}
});
