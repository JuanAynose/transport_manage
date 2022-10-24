import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';
const containerPackage = document.getElementById('enviosCardPackage');

export const postRemito = data => {
	const {
		nombre_empleado,
		nombre_camion,
		fecha_entrega,
		id_paquete,
		nombre_destinatario,
		fecha_emision
	} = data;

	console.log(data);

	const sendShit = () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			nombre_empleado,
			nombre_camion,
			fecha_entrega,
			id_paquete,
			nombre_destinatario,
			fecha_emision
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/remitos/ingresar_remito.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => {
				containerPackage.innerHTML = '';
				makeCall(MODAL_OPTIONS.PAQUETERIA);
				console.log(result);
			})
			.catch(error => console.log('error', error));
	};

	sendShit();
};
