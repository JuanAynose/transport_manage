export const postRemito = data => {
	const {
		nombre_empleado,
		nombre_camion,
		fecha_entrega,
		id_paquete,
		nombre_destinatario,
		fecha_emision
	} = data;

	console.log(data);

	const sendShit = () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			nombre_empleado,
			nombre_camion,
			fecha_entrega,
			id_paquete,
			nombre_destinatario,
			fecha_emision
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/remitos/ingresar_remito.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	};

	sendShit();
};
