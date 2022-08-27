const normalizeDate = (str) => {
  const dateRest = [];
  let nomalizedTotalDays = 0;

  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  const yearEmploye = Number(str.slice(0, 4));
  const monthEmploye = Number(str.slice(5, 7));
  const dayEmploye = Number(str.slice(-2));

  let yearRest = year - yearEmploye;
  let monthRest = month - monthEmploye;
  let dayRest = day - dayEmploye;

  if (yearRest > 0) dateRest.push(365 * yearRest);
  if (monthRest > 0) dateRest.push(31 * monthRest);
  if (dayRest > 0) dateRest.push(dayRest);

  let totalDays = dateRest.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  if (totalDays < 31 || totalDays == 0) return `${totalDays} días`;
  else if (totalDays > 31 && totalDays < 365) {
    nomalizedTotalDays = Math.round((totalDays /= 31));
    if (nomalizedTotalDays == 1) return `${nomalizedTotalDays} mese`;
    return `${nomalizedTotalDays} meses`;
  }
  nomalizedTotalDays = Math.round((totalDays /= 365));
  if (nomalizedTotalDays == 1) return `${nomalizedTotalDays} año`;
  return `${nomalizedTotalDays} años`;
};

const getEmpleados = () => {
  return fetch("http://localhost/api_project/api/paquete/leer_empleado.php")
    .then((res) => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
    .then((res) => res.json())
    .then((res) => {
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
          ...restEmployeInfo,
        };
        employesData.push(employeObject);
      }
      return employesData;
    })
    .catch(console.log);
};

export default getEmpleados;
