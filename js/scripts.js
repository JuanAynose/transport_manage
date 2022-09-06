/* cards */
import { deleteEmpleado } from './callbacks/delete/deleteEmpleado.js';
import initializeMenuListener from './modals/reset/initializeMenuListener.js';
/*empleados container*/
const editarEmpleado = document.getElementById('editarEmpleado');
const modalDeleteButtons = document.getElementById('modalDeleteButtons');
const modalDeleteEmpleado = document.getElementById('modalDeleteEmpleado');
const modalEditEmpleado = document.getElementById('modalEditEmpleado');

/**/
window.addEventListener('load', e => {
	initializeMenuListener();
});

let getIdEmploye;

editarEmpleado.addEventListener("click",ev=>{
	if(ev.target.textContent === 'Editar'){
		getIdEmploye = Number(ev.target.parentElement.previousElementSibling.children[0].children[1].textContent);
		modalEditEmpleado.classList.remove('hidden');
	}else if(ev.target.textContent === 'Borrar'){
		getIdEmploye = Number(ev.target.parentElement.previousElementSibling.children[0].children[1].textContent);
		modalDeleteEmpleado.classList.remove('hidden');
	}
})

modalDeleteButtons.addEventListener("click", ev=>{
	if(ev.target.textContent === 'Si'){
		modalDeleteEmpleado.classList.add('hidden');
		deleteEmpleado(getIdEmploye);
		window.location.reload();
	}else{
		modalDeleteEmpleado.classList.add('hidden');
	}
})

modalEditEmpleado.addEventListener("click", ev=>{
	if(ev.target.textContent === 'Guardar'){
		modalEditEmpleado.classList.add('hidden');
		deleteEmpleado(getIdEmploye);
		window.location.reload();
	}else if ((ev.target.textContent === 'Cancelar')){
		modalEditEmpleado.classList.add('hidden');
	}
})