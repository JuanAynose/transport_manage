const getPaquete = () => {
  return fetch("http://localhost/api_project/api/paquete/leer_paquete.php")
    .then((res) => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch(console.log)
    .finally(console.log("a call has been done with a anasheeei exit"));
};

export default getPaquete;
