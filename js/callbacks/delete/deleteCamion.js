import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';
const editarCamion = document.getElementById('editarCamion');

export const deleteCamion = id => {
	const sendShit = () => {
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		var raw = JSON.stringify({
			id: id
		});

		var requestOptions = {
			method: 'DELETE',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/camiones/delete_camion.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => {
				editarCamion.innerHTML = '';
				makeCall(MODAL_OPTIONS.TRANSPORTE);
				console.log(result);
			})
			.catch(error => console.log('error', error));
	};
	sendShit();
};
