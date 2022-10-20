import CardEmploye from '../cards/CardEmploye.js';

const CardEmpleadoManager = (data, containerEmpleado) => {
	if (!data.length) return data;
	console.log(containerEmpleado);
	containerEmpleado.innerHTML = '';
	for (const employeData of data) {
		containerEmpleado.innerHTML += CardEmploye(employeData);
	}
};

export default CardEmpleadoManager;
