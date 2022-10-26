import { MODAL_OPTIONS } from '../../constants/modalOptions.js';
import makeCall from '../controller/makeCall.js';

/* checks if any modal is open */
const contentRight = document.getElementById('contentRight');
const menuList = document.getElementById('menuList');
/**/
const ciudadButton = document.getElementById('ciudadButton');
const paqueButton = document.getElementById('paqueButton');
const transButton = document.getElementById('transButton');
const empleButton = document.getElementById('empleButton');
const salarioButton = document.getElementById('salarioButton');
const remitoButton = document.getElementById('remitoButton');

/* buttons modals */

const resetModals = () => {
	for (const childrens of contentRight.children) {
		childrens.classList.add('hidden');
	}
	for (const childrens of menuList.children) {
		childrens.children[0].classList.remove('active');
	}
};

const initializeMenuListener = () => {
	/* open the current modal selected uwu */
	paqueButton.addEventListener('click', () => {
		resetModals();
		paqueButton.classList.add('active');
		makeCall(MODAL_OPTIONS.PAQUETERIA);
		contentRight.children[MODAL_OPTIONS.PAQUETERIA].classList.remove('hidden');
	});
	transButton.addEventListener('click', () => {
		resetModals();
		transButton.classList.add('active');
		makeCall(MODAL_OPTIONS.TRANSPORTE);
		contentRight.children[MODAL_OPTIONS.TRANSPORTE].classList.remove('hidden');
	});
	empleButton.addEventListener('click', () => {
		resetModals();
		empleButton.classList.add('active');
		makeCall(MODAL_OPTIONS.EMPLEADOS);
		contentRight.children[MODAL_OPTIONS.EMPLEADOS].classList.remove('hidden');
	});
	salarioButton.addEventListener('click', () => {
		resetModals();
		salarioButton.classList.add('active');
		makeCall(MODAL_OPTIONS.SALARIO);
		contentRight.children[MODAL_OPTIONS.SALARIO].classList.remove('hidden');
	});
	remitoButton.addEventListener('click', () => {
		resetModals();
		remitoButton.classList.add('active');
		makeCall(MODAL_OPTIONS.REMITOS);
		contentRight.children[MODAL_OPTIONS.REMITOS].classList.remove('hidden');
	});
	ciudadButton.addEventListener('click', () => {
		resetModals();
		ciudadButton.classList.add('active');
		makeCall(MODAL_OPTIONS.CIUDADES);
		contentRight.children[MODAL_OPTIONS.CIUDADES].classList.remove('hidden');
	});
};

export default initializeMenuListener;
