import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../../modals/controller/makeCall.js';
const contentPagosRealizar = document.getElementById('pagosRealizados');

export const deleteSalario = id => {
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
			'http://localhost/transport_manage/api/calls/salario/delete_salario.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => {
				contentPagosRealizar.innerHTML = '';
				makeCall(MODAL_OPTIONS.SALARIO);
				console.log(result);
			})
			.catch(error => console.log('error', error));
	};
	sendShit();
};
