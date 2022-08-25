export const postPaquete = (data) => {
  const {
    nombre_paquete,
    tipo_paquete,
    peso_paquete,
    nivel_prioridad,
    nombre_destinatario,
    apellido_destinatario,
    numero_destinatario,
    dni_destinatario,
    ciudad_destinatario,
    direccion_destinatario,
    fecha_entrega,
  } = data;
  console.log(data);
  const sendShit = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      nombre_paquete: nombre_paquete,
      tipo_paquete: tipo_paquete,
      peso_paquete: peso_paquete,
      nivel_prioridad: nivel_prioridad,
      direccion_destinatario: direccion_destinatario,
      fecha_entrega: fecha_entrega,
      nombre_destinatario: nombre_destinatario,
      apellido_destinatario: apellido_destinatario,
      numero_destinatario: numero_destinatario,
      dni_destinatario: dni_destinatario,
      ciudad_destinatario: ciudad_destinatario,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://localhost/api_project/api/paquete/ingresar_paquete.php",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  sendShit();
};
