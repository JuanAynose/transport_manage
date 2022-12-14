import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';

const containerRemitos = document.getElementById('containerRemitos');

export const updatePaquete = data => {
	const {
		nombre_paquete,
		tipo_paquete,
		peso_paquete,
		nivel_prioridad,
		nombre_destinatario,
		apellido_destinatario,
		numero_destinatario,
		dni_destinatario,
		ciudad_destinatario,
		direccion_destinatario,
		id_destinatario,
		id_paquete,
		cod_paquete,
		situacion_paquete
	} = data;

	const sendShit = () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			nombre_paquete,
			tipo_paquete,
			peso_paquete,
			nivel_prioridad,
			direccion_destinatario,
			nombre_destinatario,
			apellido_destinatario,
			numero_destinatario,
			dni_destinatario,
			ciudad_destinatario,
			id_destinatario,
			id_paquete,
			cod_paquete,
			situacion_paquete
		});

		const requestOptions = {
			method: 'PATCH',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/paquetes/update_paquete.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => {
				containerRemitos.innerHTML = '';
				makeCall(MODAL_OPTIONS.REMITOS);
				console.log(result);
			})
			.catch(error => console.log('error', error));
	};
	sendShit();
};
