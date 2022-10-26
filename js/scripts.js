/*cards*/
import initializeMenuListener from './modals/reset/initializeMenuListener.js';
/*accordion ids salary*/
const bttnSalaryAccordion = document.getElementById(
	'formSalaryContent__button'
);
const contentSalaryAccordion = document.getElementById(
	'formSalaryContent__container'
);

/*theme container*/
const themeMenu = document.getElementById('theme_color');
const themeContainer = document.getElementById('theme_container');
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

/*theme picker color*/
themeMenu.addEventListener('click', ev => {
	const getColorName = ev.target.innerText;
	if (ev.target.textContent === 'Temas') {
		themeContainer.classList.toggle('active');
	}

	const clearBodyClass = () => {
		body.classList.remove(...body.classList);
		themeContainer.classList.toggle('active');
	};

	switch (getColorName) {
		case 'Default':
			clearBodyClass();
			body.classList.add('default');
			break;
		case 'Rosa':
			clearBodyClass();
			body.classList.add('pink');
			break;
		case 'Naranja':
			clearBodyClass();
			body.classList.add('orange');
			break;
		case 'Verde':
			clearBodyClass();
			body.classList.add('green');
			break;
		case 'Gris':
			clearBodyClass();
			body.classList.add('gray');
			break;
	}
});
