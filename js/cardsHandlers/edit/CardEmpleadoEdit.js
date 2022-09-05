import CardEmployeEdit from '../../cards/CardEmployeEdit.js';

const CardEmpleadoEdit = (data, containerEmpleado) => {
	containerEmpleado.innerHTML = '';
	for (const employeData of data) {
		containerEmpleado.innerHTML += CardEmployeEdit(employeData);
	}
};

export default CardEmpleadoEdit;
