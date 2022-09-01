export const postEnvio = data => {
	const { id_destinatario, id_empleado, id_camion, fecha_entrega, id_paquete } =
		data;

	console.log(data);

	const sendShit = () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			id_destinatario: id_destinatario,
			id_empleado: id_empleado,
			id_camion: id_camion,
			fecha_entrega: fecha_entrega,
			id_paquete: id_paquete
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/paquete/ingresar_envio.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	};

	sendShit();
};
