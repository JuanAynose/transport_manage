const getRemitos = async () => {
	return fetch(
		`http://localhost/transport_manage/api/calls/remitos/leer_remito.php`
	)
		.then(res => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
		.then(res => res.json())
		.then(res => {
			return res;
		})
		.catch(console.log);
};

export default getRemitos;
