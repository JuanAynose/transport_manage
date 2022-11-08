import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';
const editarCamion = document.getElementById('editarCamion');

export const postCamion = data => {
	const { capacidad_camion, marca_camion, disponibilidad_camion } = data;

	const sendShit = () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			capacidad_camion,
			marca_camion,
			disponibilidad_camion
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/camiones/ingresar_camion.php',
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
