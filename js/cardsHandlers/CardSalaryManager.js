import CardEmploye from '../cards/CardEmploye.js';

const CardSalaryManager = (data, containerSalario) => {
	if(!data.length) return data;

	for (const salarioData of data) {
		containerSalario.innerHTML += CardEmploye(salarioData);
	}
};

export default CardSalaryManager;
