export const postEmpleado = (data) => {
  console.log(data);
  
    const {apellido_empleado,
      ciudad_empleado,
      direccion_empleado,
      dni_empleado,
      telefono_empleado,
      fecha_ingreso_empleado,
      fecha_nacimiento_empleado} = data;

    
    const sendShit = () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        apellido_empleado: apellido_empleado,
        ciudad_empleado: ciudad_empleado,
        dni_empleado: dni_empleado,
        fecha_ingreso_empleado: fecha_ingreso_empleado,
        fecha_nacimiento_empleado: fecha_nacimiento_empleado,
        direccion_empleado: direccion_empleado,
        telefono_empleado: telefono_empleado
    });
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch(
        "http://localhost/api_project/api/paquete/ingresar_empleado.php",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    };
  
    sendShit();
    
  };
  