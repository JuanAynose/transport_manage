import CardEmploye from '../cards/CardEmploye.js';

const CardSalaryManager = (data, containerSalario) => {
	if (data.length < 0 || data === false) return data;

	if (data.length) {
		for (const salarioData of data) {
			containerSalario.innerHTML += CardEmploye(salarioData);
		}
	} else {
		containerSalario.innerHTML += CardEmploye(data);
	}
};

export default CardSalaryManager;
