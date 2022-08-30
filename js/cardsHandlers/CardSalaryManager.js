import CardEmploye from '../cards/CardEmploye.js';

const CardSalaryManager = (data, containerSalario) => {
	for (const salarioData of data) {
		containerSalario.innerHTML += CardEmploye(salarioData);
	}
};

export default CardSalaryManager;
