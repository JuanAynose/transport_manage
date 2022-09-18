/* post data */
import { postCamion } from '../callbacks/post/postCamion.js';
import { postEmpleado } from '../callbacks/post/postEmpleado.js';
import { postPaquete } from '../callbacks/post/postPaquete.js';
import { postRemito } from '../callbacks/post/postRemito.js';
import { postSalario } from '../callbacks/post/postSalario.js';
import { updateEmpleado } from '../callbacks/update/updateEmpleado.js';
import { FORM_OPTIONS } from '../constants/formOptions.js';
/**/
/* form data */
const formPaquete = document.getElementById('formPaquete');
const formEmpleado = document.getElementById('formEmpleado');
const formCamion = document.getElementById('formTransporte');
const formSalario = document.getElementById('formSalario');
const formRemito = document.getElementById('formRemito');
const formEmpleadoEdit = document.getElementById('formEmpleadoEdit');
/**/

formSalario.addEventListener('submit', e => {
	e.preventDefault();
	let employeSelectedId;
	const formData = new FormData(formSalario);
	for (const employe of formData.entries()) {
		employeSelectedId = employe[1];
	}
	postSalario({
		fecha_pago_salario: formData.get('fecha_pago_salario'),
		cantidad_horas_salario: Number(formData.get('cantidad_horas_salario')),
		precio_hora_salario: Number(formData.get('precio_hora_salario')),
		id_empleado: employeSelectedId
	});
	formSalario.reset();
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
});

/*open the model of "ingresar paquete"*/
formRemito.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(formRemito);
	const normalizeFormData = [];
	normalizeFormData.push(
		formData.getAll('id_destinatario')[FORM_OPTIONS.ID_PAQUETE],
		formData.getAll('id_destinatario')[FORM_OPTIONS.NOMBRE_PAQUETE],
		formData.getAll('id_destinatario')[FORM_OPTIONS.NOMBRE_DESTINARIO]
	);

	postRemito({
		id_paquete: normalizeFormData[FORM_OPTIONS.ID_PAQUETE],
		nombre_paquete: normalizeFormData[FORM_OPTIONS.NOMBRE_PAQUETE],
		nombre_destinatario: normalizeFormData[FORM_OPTIONS.NOMBRE_DESTINARIO],
		nombre_empleado: formData.get('nameEmploye'),
		nombre_camion: formData.get('nameCamion'),
		fecha_entrega: formData.get('envio_fecha_estimada')
	});
	formRemito.reset();
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
	modalEditEmpleado.classList.add('hidden');
});
