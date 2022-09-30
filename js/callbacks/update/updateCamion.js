export const updateCamion = data => {
	const { id_camion, capacidad, marca, disponibilidad } = data;

	console.log(data);

	const sendShit = () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			id_camion,
			capacidad,
			marca,
			disponibilidad
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/camiones/update_camion.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	};

	sendShit();
};
