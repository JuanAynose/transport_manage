const getSingleProvincia = id => {
	return fetch(
		`http://localhost/transport_manage/api/calls/ciudades/leer_provincia_sola.php?id_provincia=${id}`
	)
		.then(res => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
		.then(res => res.json())
		.then(res => {
			return res;
		})
		.catch(console.log);
};

export default getSingleProvincia;
