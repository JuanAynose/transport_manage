export const postSalario = (data) => {
  const {
    fecha_pago_salario,
    cantidad_horas_salario,
    precio_hora_salario,
    id_empleado,
  } = data;
  console.log(data);
  const sendShit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      fecha_pago_salario,
      cantidad_horas_salario,
      precio_hora_salario,
      id_empleado,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://localhost/api_project/api/paquete/ingresar_salario.php",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  sendShit();
};
