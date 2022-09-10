/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
const normalizeDate = str => {
	const dateRest = [];
	let nomalizedTotalDays = 0;

	const date = new Date();
	const [month, day, year] = [
		date.getMonth(),
		date.getDate(),
		date.getFullYear()
	];

	const yearEmploye = Number(str.slice(0, 4));
	const monthEmploye = Number(str.slice(5, 7));
	const dayEmploye = Number(str.slice(-3));
	const yearRest = Number(year - yearEmploye);
	const monthRest = Number(month - monthEmploye);
	const dayRest = Number(day - dayEmploye);

	if (yearRest > 0) dateRest.push(365 * yearRest);
	if (monthRest > 0) dateRest.push(31 * monthRest);
	if (dayRest > 0) dateRest.push(dayRest);
	const initialValue = 0;
	let totalDays = dateRest.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		initialValue
	);

	//console.log(totalDays);
	if (totalDays < 31 || totalDays == 0) {
		if (totalDays == 0 || totalDays == 1) return `${totalDays} día`;
		return `${totalDays} días`;
	} else if (totalDays > 31 && totalDays < 365) {
		nomalizedTotalDays = Math.ceil((totalDays /= 31));
		if (nomalizedTotalDays == 1) return `${nomalizedTotalDays} mese`;
		return `${nomalizedTotalDays} meses`;
	}
	nomalizedTotalDays = Math.ceil((totalDays /= 365));
	if (nomalizedTotalDays == 1) return `${nomalizedTotalDays} año`;
	return `${nomalizedTotalDays} años`;
};

const getEmpleados = () => {
	return fetch(
		'http://localhost/transport_manage/api/calls/empleados/leer_empleado.php'
	)
		.then(res => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
		.then(res => res.json())
		.then(res => {
			const employesData = [];
			for (const employeInfo of res) {
				const {
					fecha_ingreso,
					id_camionero,
					dni,
					apellido,
					...restEmployeInfo
				} = employeInfo;
				const getExperience = normalizeDate(fecha_ingreso);
				const employeObject = {
					antiguedad_empleado: getExperience,
					id_empleado: id_camionero,
					dni_empleado: dni,
					apellido_empleado: apellido,
					...restEmployeInfo
				};
				employesData.push(employeObject);
			}
			return employesData;
		})
		.catch(console.log);
};

export default getEmpleados;
