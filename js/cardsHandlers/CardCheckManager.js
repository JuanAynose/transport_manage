import CardCheck from '../cards/CardCheck.js';

const CardCheckManager = (data, containerChecks) => {
	for (const checkData of data) {
		containerChecks.innerHTML += CardCheck(checkData);
	}
};

export default CardCheckManager;
