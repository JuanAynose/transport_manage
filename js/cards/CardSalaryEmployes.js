const CardSalaryTemplate = (data) => {
  const { antiguedad_empleado, apellido_empleado, dni_empleado, id_empleado } =
    data;

  return `
  <section  class="item__salario" >
  <label>
      <header class="item__salario--header">
          <div class="bg__header--header">
              <div class="item__salario--photo">
                  <img src="./assets/icons/icon_employe.svg" alt="icon employe" class="icon__profile">
              </div>
          </div>
      </header>
      <div class="item__salario--content">
          <p class="item__salario--name">
              <span class="name__employe">${apellido_empleado}</span>
          </p>
          <p class="item__salario--name">
              <span class="dni__employe">${dni_empleado}</span>
          </p>
      </div>
      <footer class="item__salario--footer">
          <p class="id__employe">
              Id empleado: ${id_empleado}
          </p>
          <p class="data__employe">
              Antigüedad: <span>${antiguedad_empleado}</span>
          </p>
      </footer>
      <div>
          <input class="input_radio" type="radio" value="${id_empleado}" name="radio">
      </div>
  </label>
</section> 
  `;
};

const CardSalaryEmployes = (data, containerSalario) => {
  console.log(containerSalario);
  for (const employeData of data) {
    containerSalario.innerHTML += CardSalaryTemplate(employeData);
  }
};

export default CardSalaryEmployes;
