import CardEmployeEdit from '../../cards/CardEmployeEdit.js';

const CardEmpleadoEdit = (data, containerEmpleado) => {
	if (data.length < 0 || data === false) return data;
	containerEmpleado.innerHTML = '';
	if (data.length) {
		for (const employeData of data) {
			containerEmpleado.innerHTML += CardEmployeEdit(employeData);
		}
	} else {
		containerEmpleado.innerHTML += CardEmployeEdit(data);
	}
};

export default CardEmpleadoEdit;
