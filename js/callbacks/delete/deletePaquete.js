import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';
const containerRemitos = document.getElementById('containerRemitos');

export const deletePaquete = id => {
	const sendShit = () => {
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			id
		});

		var requestOptions = {
			method: 'DELETE',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/paquetes/delete_paquete.php',
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
