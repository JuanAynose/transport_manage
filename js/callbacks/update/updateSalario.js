export const updateSalario = data => {
	const {
		id_salario,
		id_empleado,
		cantidad_hora,
		monto_hora,
		sueldo_neto,
		fecha_pago
	} = data;

	const sendShit = () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			id_salario,
			id_empleado,
			cantidad_hora,
			monto_hora,
			sueldo_neto,
			fecha_pago
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/salario/update_salario.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	};

	sendShit();
};
