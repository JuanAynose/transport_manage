import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';
const containerPackage = document.getElementById('enviosCardPackage');

export const postPaquete = data => {
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
		direccion_destinatario
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
			ciudad_destinatario
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/paquetes/ingresar_paquete.php',
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
