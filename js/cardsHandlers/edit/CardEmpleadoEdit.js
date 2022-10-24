import CardEmployeEdit from '../../cards/CardEmployeEdit.js';

const CardEmpleadoEdit = (data, containerEmpleado) => {
	if (!data.length) return data;
	containerEmpleado.innerHTML = '';
	for (const employeData of data) {
		containerEmpleado.innerHTML += CardEmployeEdit(employeData);
	}
};

export default CardEmpleadoEdit;
