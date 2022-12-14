import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';

const containerCiudad = document.getElementById('containerCiudad');

export const postCiudad = data => {
	const { nombre_ciudad, cod_prov, cod_postal } = data;

	const sendShit = () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			nombre_ciudad,
			cod_prov,
			cod_postal
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/ciudades/ingresar_ciudad.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => {
				containerCiudad.innerHTML = '';
				makeCall(MODAL_OPTIONS.CIUDADES);
				console.log(result);
			})
			.catch(error => console.log('error', error));
	};

	sendShit();
};
