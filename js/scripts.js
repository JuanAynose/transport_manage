/*cards*/
import initializeMenuListener from './modals/reset/initializeMenuListener.js';
/*accordion ids salary*/
const bttnSalaryAccordion = document.getElementById(
	'formSalaryContent__button'
);
const contentSalaryAccordion = document.getElementById(
	'formSalaryContent__container'
);

/**/

window.addEventListener('load', e => {
	initializeMenuListener();
});

/*accoordion salary*/
bttnSalaryAccordion.addEventListener('click', () => {
	if (contentSalaryAccordion.classList[1] === 'active') {
		contentSalaryAccordion.classList.remove('active');
		bttnSalaryAccordion.textContent = 'Ver más';
	} else {
		contentSalaryAccordion.classList.add('active');
		bttnSalaryAccordion.textContent = 'Ver menos';
	}
});
