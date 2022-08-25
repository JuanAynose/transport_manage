export const postCamion = (data) => {
    console.log(data);
    
      const {
        capacidad_camion,
        marca_camion,
        disponibilidad_camion
      } = data;
  
      
      const sendShit = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
            capacidad_camion : capacidad_camion,
            marca_camion :marca_camion,
            disponibilidad_camion : disponibilidad_camion
      });
    
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
    
        fetch(
          "http://localhost/api_project/api/paquete/ingresar_camion.php",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      };
    
      sendShit();
      
    };
    