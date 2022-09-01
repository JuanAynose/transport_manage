import CardEmploye from '../cards/CardEmploye.js';

const CardEmpleadoManager = (data, containerEmpleado) => {
	for (const employeData of data) {
		containerEmpleado.innerHTML += CardEmploye(employeData);
	}
};

export default CardEmpleadoManager;
