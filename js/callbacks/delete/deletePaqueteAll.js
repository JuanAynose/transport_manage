import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';
const containerRemitos = document.getElementById('containerRemitos');

export const deletePaqueteAll = data => {
	const { id_destinatario, id_detalle_paquete, id_paquete } = data;
	const sendShit = () => {
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			id_destinatario,
			id_detalle_paquete,
			id_paquete
		});

		var requestOptions = {
			method: 'DELETE',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/paquetes/delete_paquete_all.php',
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
