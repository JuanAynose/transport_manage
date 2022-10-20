const CardEmpleadosListManager = (data, containerEmpleados) => {
	if (!data.length) return data;
	containerEmpleados[0].innerHTML = '';

	for (const empleadoItem of data) {
		const { id_empleado, apellido_empleado } = empleadoItem;
		let option = `<option value="${id_empleado}">Id:${id_empleado} ${apellido_empleado}</option>`;
		containerEmpleados[0].innerHTML += option;
	}
};

export default CardEmpleadosListManager;
