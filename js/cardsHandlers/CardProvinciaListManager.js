const CardProvinciaListManager = (data, containerProvincia) => {
	if (!data.length) return data;
	containerProvincia[0].innerHTML = '';
	containerProvincia[1].innerHTML = '';

	for (const provinciaItem of data) {
		const { cod_prov, nombre } = provinciaItem;
		let option = `<option value="${cod_prov}">${nombre}</option>`;
		containerProvincia[0].innerHTML += option;
		containerProvincia[1].innerHTML += option;
	}
};

export default CardProvinciaListManager;
