const CardCiudadListManager = (data, containerCiudad)=>{
	if(!data.length) return data;

	containerCiudad[0].innerHTML = '';
	containerCiudad[1].innerHTML = '';
	containerCiudad[2].innerHTML = '';

    for(const ciudadItem of data){
        const {cod_ciudad, nombre} =ciudadItem;
        let option = `<option value="${cod_ciudad}">${nombre}</option>`;
        containerCiudad[0].innerHTML += option;
        containerCiudad[1].innerHTML += option;
        containerCiudad[2].innerHTML += option;
    }

}

export default CardCiudadListManager;