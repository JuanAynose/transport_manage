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
  } = data;
  const sendShit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      nombre_paquete,
      tipo_paquete,
      peso_paquete,
      nivel_prioridad,
      direccion_destinatario,
      nombre_destinatario,
      apellido_destinatario,
      numero_destinatario,
      dni_destinatario,
      ciudad_destinatario,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://localhost/transport_manage/api/paquete/ingresar_paquete.php",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  sendShit();
};
