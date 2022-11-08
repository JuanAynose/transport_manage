import CardCheck from '../cards/CardCheck.js';

const CardCheckManager = (data, containerChecks) => {
	if (data.length < 0 || data === false) return data;

	for (const checkData of data) {
		containerChecks.innerHTML += CardCheck(checkData);
	}
};

export default CardCheckManager;
