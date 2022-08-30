const getCamiones = () => {
  return fetch("http://localhost/transport_manage/api/paquete/leer_camiones.php")
    .then((res) => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch(console.log);
};

export default getCamiones;
