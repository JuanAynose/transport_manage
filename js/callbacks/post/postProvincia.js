import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';

const containerProvincia = document.getElementById('containerProvincia');

export const postProvincia = data => {
	const { nombre_provincia } = data;

	console.log(data);

	const sendShit = () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			nombre_provincia
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/ciudades/ingresar_provincia.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => {
				containerProvincia.innerHTML = '';
				makeCall(MODAL_OPTIONS.CIUDADES);
				console.log(result);
			})
			.catch(error => console.log('error', error));
	};

	sendShit();
};
