import makeCall from '../controller/makeCall.js';

/* checks if any modal is open */
const contentRight = document.getElementById('contentRight');
const menuList = document.getElementById('menuList');
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
	menuList.addEventListener('click', e => {
		for (let i = 0; i < menuList.children.length; i++) {
			if (e.target.textContent === menuList.children[i].textContent) {
				resetModals();
				contentRight.children[i].classList.remove('hidden');
				makeCall(i);
				if (e.target.tagName === 'A') e.target.classList.toggle('active');
			}
		}
	});
};
export default initializeMenuListener;
