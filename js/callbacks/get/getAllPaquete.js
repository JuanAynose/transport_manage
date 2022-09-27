const getAllPaquete = () => {
	return fetch(
		'http://localhost/transport_manage/api/calls/paquetes/leer_paquete_todos.php'
	)
		.then(res => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
		.then(res => res.json())
		.then(res => {
			return res;
		})
		.catch(console.log);
};

export default getAllPaquete;
