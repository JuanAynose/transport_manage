export const updateCiudad = data => {
	const { nombre_ciudad, codigo_provincia, codigo_postal, id_ciudad } = data;
	const sendShit = () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			nombre_ciudad,
			codigo_provincia,
			codigo_postal,
			id_ciudad
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/ciudades/update_ciudad.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	};

	sendShit();
};
