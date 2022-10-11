export const updateEmpleado = data => {
	const {
		id_empleado,
		apellido_empleado,
		ciudad_empleado,
		direccion_empleado,
		dni_empleado,
		telefono_empleado,
		fecha_ingreso_empleado,
		fecha_nacimiento_empleado
	} = data;

	const sendShit = () => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			id_empleado,
			apellido_empleado,
			ciudad_empleado,
			dni_empleado,
			fecha_ingreso_empleado,
			fecha_nacimiento_empleado,
			direccion_empleado,
			telefono_empleado
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch(
			'http://localhost/transport_manage/api/calls/empleados/update_empleado.php',
			requestOptions
		)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	};

	sendShit();
};
