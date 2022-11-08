import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';
const containerProvincia = document.getElementById('containerProvincia');

export const deleteProvincia = id => {
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
			'http://localhost/transport_manage/api/calls/ciudades/delete_provincia.php',
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
