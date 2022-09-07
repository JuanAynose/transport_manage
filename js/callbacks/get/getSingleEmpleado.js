const getSingleEmpleados = id => {
	return fetch(
		`http://localhost/transport_manage/api/paquete/leer_empleado_solo.php?id_empleado=${id}`
	)
		.then(res => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
		.then(res => res.json())
		.then(res => {
			return res;
		})
		.catch(console.log);
};

export default getSingleEmpleados;
