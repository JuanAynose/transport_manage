const getSingleCamion = id => {
	return fetch(
		`http://localhost/transport_manage/api/calls/camiones/leer_camion_solo.php?id_camion=${id}`
	)
		.then(res => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
		.then(res => res.json())
		.then(res => {
			return res;
		})
		.catch(console.log);
};

export default getSingleCamion;
