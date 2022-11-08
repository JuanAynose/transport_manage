const getCamionesPeso = () => {
	return fetch(
		'http://localhost/transport_manage/api/calls/camiones/leer_camiones_peso.php'
	)
		.then(res => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
		.then(res => res.json())
		.then(res => {
			return res;
		})
		.catch(console.log);
};

export default getCamionesPeso;
