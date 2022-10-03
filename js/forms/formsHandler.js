/* post data */
import { postCamion } from '../callbacks/post/postCamion.js';
import { postEmpleado } from '../callbacks/post/postEmpleado.js';
import { postPaquete } from '../callbacks/post/postPaquete.js';
import { postRemito } from '../callbacks/post/postRemito.js';
import { postSalario } from '../callbacks/post/postSalario.js';
import { updateCamion } from '../callbacks/update/updateCamion.js';
import { updateEmpleado } from '../callbacks/update/updateEmpleado.js';
import { MODAL_OPTIONS } from '../constants/modalOptions.js';
import makeCall from '../modals/controller/makeCall.js';
/**/
/* form data */
const formPaquete = document.getElementById('formPaquete');
const formEmpleado = document.getElementById('formEmpleado');
const formCamion = document.getElementById('formTransporte');
const formSalario = document.getElementById('formSalario');
const formRemito = document.getElementById('formRemito');
const formEmpleadoEdit = document.getElementById('formEmpleadoEdit');
const formCamionEdit = document.getElementById('formCamionEdit');
const formRemitoEdit = document.getElementById('formRemitoEdit');

const enviosCardPackage = document.getElementById('enviosCardPackage');
/**/

formSalario.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(formSalario);
	postSalario({
		fecha_pago_salario: formData.get('fecha_pago_salario'),
		cantidad_horas_salario: Number(formData.get('cantidad_horas_salario')),
		precio_hora_salario: Number(formData.get('precio_hora_salario')),
		id_empleado: formData.get('containerEmploye')
	});
	formSalario.reset();
	makeCall(MODAL_OPTIONS.SALARIO);
});

/* open the modal of "ingresar paquete" anashei */
formPaquete.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(formPaquete);
	postPaquete({
		peso_paquete: formData.get('peso_paquete'),
		tipo_paquete: formData.get('tipo_paquete'),
		nombre_paquete: formData.get('desc_paquete'),
		nivel_prioridad: formData.get('prioridad'),
		nombre_destinatario: formData.get('nombre_destinatario'),
		apellido_destinatario: formData.get('apellido_destinatario'),
		numero_destinatario: formData.get('numero_destinatario'),
		dni_destinatario: formData.get('dni_destinatario'),
		ciudad_destinatario: formData.get('ciudad'),
		direccion_destinatario: formData.get('direccion_destinatario')
	});
	formPaquete.reset();
	makeCall(MODAL_OPTIONS.PAQUETERIA);
});

/*open the model of "ingresar paquete"*/
formRemito.addEventListener('submit', e => {
	e.preventDefault();

	const dateObj = new Date();
	let month = dateObj.getUTCMonth() + 1;
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear();
	if (month < 10) month = '0' + month; // si el mes es menor a 10, se agrega un "0" adelante de la fecha

	const margeDate = year + '-' + month + '-' + day;

	const formData = new FormData(formRemito);
	const normalizeFormData = [];
	let cont = 0;
	//console.log(enviosCardPackage.children.length);

	for (let i = 0; i < enviosCardPackage.children.length; i++) {
		const childSelected = enviosCardPackage.children[i].children[0].children[4];

		normalizeFormData.push({
			id: i,
			id_paquete: childSelected.children[1].value,
			nombre_paquete: childSelected.children[2].value,
			nombre_destinatario: childSelected.children[3].value
		});
	}

	const getIdData = formData.get('containerPackage');

	const packageLenght = Number(formData.getAll('containerPackage').length);
	console.log(formData.getAll('containerPackage'));
	console.log(normalizeFormData);

	if (packageLenght <= 1) {
		postRemito({
			fecha_emision: margeDate,
			id_paquete: normalizeFormData[getIdData].id_paquete,
			nombre_paquete: normalizeFormData[getIdData].nombre_paquete,
			nombre_empleado: formData.get('nameEmploye'),
			nombre_destinatario: normalizeFormData[getIdData].nombre_destinatario,
			nombre_camion: formData.get('containerCamion'),
			fecha_entrega: formData.get('envio_fecha_estimada')
		});
	} else {
		const very = [...formData.getAll('containerPackage')];
		const normalizeArray = very.map(itemA => Number(itemA));
		console.log(normalizeArray);
		for (const itemTest of normalizeArray) {
			postRemito({
				fecha_emision: margeDate,
				id_paquete: normalizeFormData[itemTest].id_paquete,
				nombre_paquete: normalizeFormData[itemTest].nombre_paquete,
				nombre_empleado: formData.get('nameEmploye'),
				nombre_destinatario: normalizeFormData[itemTest].nombre_destinatario,
				nombre_camion: formData.get('containerCamion'),
				fecha_entrega: formData.get('envio_fecha_estimada')
			});
		}
	}
	formRemito.reset();
	makeCall(MODAL_OPTIONS.PAQUETERIA);
});

/* open the modal of "ingresar empleado" uwu */
formEmpleado.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(formEmpleado);
	postEmpleado({
		dni_empleado: formData.get('dni_empleado'),
		apellido_empleado: formData.get('apellido_empleado'),
		telefono_empleado: formData.get('telefono_empleado'),
		direccion_empleado: formData.get('direccion_empleado'),
		ciudad_empleado: formData.get('ciudad'),
		fecha_ingreso_empleado: formData.get('fecha_ingreso_empleado'),
		fecha_nacimiento_empleado: formData.get('fecha_nacimiento_empleado')
	});
	formEmpleado.reset();
	makeCall(MODAL_OPTIONS.EMPLEADOS);
});

/* open the modal "ingresar camion" */
formCamion.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(formCamion);
	postCamion({
		capacidad_camion: formData.get('capacidad_camion'),
		marca_camion: formData.get('marca_camion'),
		disponibilidad_camion: formData.get('disponibilidad_camion')
	});
	formCamion.reset();
	makeCall(MODAL_OPTIONS.TRANSPORTE);
});

formEmpleadoEdit.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(formEmpleadoEdit);
	updateEmpleado({
		id_empleado: formData.get('id_empleado'),
		dni_empleado: formData.get('dni_empleado'),
		apellido_empleado: formData.get('apellido_empleado'),
		telefono_empleado: formData.get('telefono_empleado'),
		direccion_empleado: formData.get('direccion_empleado'),
		ciudad_empleado: formData.get('ciudad'),
		fecha_ingreso_empleado: formData.get('fecha_ingreso_empleado'),
		fecha_nacimiento_empleado: formData.get('fecha_nacimiento_empleado')
	});
	makeCall(MODAL_OPTIONS.EMPLEADOS);
	modalEditEmpleado.classList.add('hidden');
});

formCamionEdit.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(formCamionEdit);
	updateCamion({
		id_camion: formData.get('id_camion'),
		capacidad: formData.get('capacidad_camion'),
		marca: formData.get('marca_camion'),
		disponibilidad: formData.get('disponibilidad_camion')
	});
	makeCall(MODAL_OPTIONS.TRANSPORTE);
	modalEditCamion.classList.add('hidden');
});

formRemitoEdit.addEventListener('submit', e => {
	e.preventDefault();
	console.log(formRemitoEdit)
	const formData = new FormData(formRemitoEdit);
	console.log({
		nombre_paquete : formData.get('desc_paquete'),
		peso_paquete : formData.get('peso_paquete'),
		tipo_paquete : formData.get('tipo_paquete'),
		prioridad : formData.get('prioridad'),
	});
	//makeCall(MODAL_OPTIONS.TRANSPORTE);
	//modalEditRemito.classList.add('hidden');
});