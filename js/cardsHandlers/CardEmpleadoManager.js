import CardEmploye from '../cards/CardEmploye.js';

const CardEmpleadoManager = (data, containerEmpleado) => {
	if (data.length < 0 || data === false) return data;
	containerEmpleado.innerHTML = '';

	if (data.length) {
		for (const employeData of data) {
			containerEmpleado.innerHTML += CardEmploye(employeData);
		}
	} else {
		containerEmpleado.innerHTML += CardEmploye(data);
	}
};

export default CardEmpleadoManager;
