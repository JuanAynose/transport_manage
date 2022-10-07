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
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	};
	sendShit();
};
