/*filterrs*/
const formFilterSalario = document.getElementById('formFilterSalario');
const formFilterRemitos = document.getElementById('formFilterRemitos');
/*form salario filter*/
formFilterSalario.addEventListener('click', ev => {
	const formData = new FormData(formFilterSalario);
	const desdeFecha = formData.get('desde_fecha');
	const hastaFecha = formData.get('hasta_fecha');

	const callAndFilter = () => {
		const childsSalary = [];
		for (const childPagos of pagosRealizados.children) {
			const dateChild =
				childPagos.children[0].children[1].children[1].textContent.slice(
					15,
					25
				);
			childsSalary.push({
				children_pago: childPagos,
				children_date: dateChild
			});
			/*check if any of the input:date are empty and let the sentence works correctly*/
			if (
				formFilterSalario.children[0].children[1].value === '' ||
				formFilterSalario.children[1].children[1].value === ''
			) {
				null;
			} else {
				if (dateChild >= desdeFecha && dateChild <= hastaFecha) {
					childPagos.classList.remove('hidden');
				} else {
					childPagos.classList.add('hidden');
				}
			}
		}
	};

	if (ev.target.value === 'Filtrar') {
		callAndFilter();
	} else if (ev.target.value === 'Limpiar') {
		/*clean all the input:date and remove the class "hidden" of all the childrens already filtered*/
		formFilterSalario.children[0].children[1].value = '';
		formFilterSalario.children[1].children[1].value = '';
		for (const childPagos of pagosRealizados.children) {
			childPagos.classList.remove('hidden');
		}
	}
});

/* remitos filters*/
formFilterRemitos.addEventListener('click', ev => {
	const formData = new FormData(formFilterRemitos);
	const desdeFecha = formData.get('desde_fecha');
	const hastaFecha = formData.get('hasta_fecha');

	const callAndFilter = () => {
		const childsSalary = [];
		for (const childRemitos of containerRemitos.children) {
			const dateChild =
				childRemitos.children[1].children[0].children[11].children[0]
					.children[0].textContent;
			childsSalary.push({
				children_pago: childRemitos,
				children_date: dateChild
			});

			/*check if any of the input:date are empty and let the sentence works correctly*/

			if (
				formFilterRemitos.children[0].children[1].value === '' ||
				formFilterRemitos.children[1].children[1].value === ''
			) {
				null;
			} else {
				if (dateChild >= desdeFecha && dateChild <= hastaFecha) {
					childRemitos.classList.remove('hidden');
				} else {
					childRemitos.classList.add('hidden');
				}
			}
		}
	};

	if (ev.target.value === 'Filtrar') {
		callAndFilter();
	} else if (ev.target.value === 'Limpiar') {
		/*clean all the input:date and remove the class "hidden" of all the childrens already filtered*/
		formFilterRemitos.children[0].children[1].value = '';
		formFilterRemitos.children[1].children[1].value = '';
		for (const childRemitos of containerRemitos.children) {
			childRemitos.classList.remove('hidden');
		}
	}
});
