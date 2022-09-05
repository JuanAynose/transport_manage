/* cards */
import initializeMenuListener from './modals/reset/initializeMenuListener.js';
/*empleados container*/
const editarEmpleado = document.getElementById('editarEmpleado');
const modalEditButtons = document.getElementById('modalEditButtons');
const modalEdit = document.getElementById('modalEdit');
/**/
window.addEventListener('load', e => {
	initializeMenuListener();
});

editarEmpleado.addEventListener("click",ev=>{
	if(ev.target.textContent === 'Editar'){
		let getIdEmploye = Number(ev.target.parentElement.previousElementSibling.children[0].children[1].textContent);
		console.log("edit",getIdEmploye)
	}else if(ev.target.textContent === 'Borrar'){
		let getIdEmploye = Number(ev.target.parentElement.previousElementSibling.children[0].children[1].textContent);
		console.log("delete",getIdEmploye)
		console.log(modalEdit.children)
		modalEdit.classList.remove('hidden');
	}
})

modalEditButtons.addEventListener("click", ev=>{
	if(ev.target.textContent === 'Si'){
		console.log("cagaste")
		modalEdit.classList.add('hidden');
	}else{
		console.log(":D");
		modalEdit.classList.add('hidden');
	}
})
