const CardCamion = (data)=>{
    const {capacidad,
        disponibilidad,
        id_camion,
        marca} = data;
    let copyDisponibilidad = disponibilidad;
        if(copyDisponibilidad==1) copyDisponibilidad="Disponible"
        else  copyDisponibilidad="No disponible"
    return `
    <section  class="item__camion item__salario" >
                                <label>
                                    <header class="item__camion item__salario--header">
                                        <div class="bg__header--header">
                                            <div class="item__camion item__salario--photo">
                                                <img src="./assets/icons/box-truck.svg" alt="icon truck" class="icon__profile">
                                            </div>
                                        </div>
                                    </header>
                                    <div class="item__camion item__salario--content">
                                        <p class="item__camion item__salario--name">
                                            <span class="name__employe">${marca}</span>
                                        </p>
                                        <p class="item__camion item__salario--name">
                                            <span class="dni__employe">${capacidad}</span>
                                        </p>
                                    </div>
                                    <footer class="item__camion item__salario--footer">
                                        <p class="id__employe">
                                            Id empleado: ${id_camion}
                                        </p>
                                        <p class="data__employe">
                                            Disponibilidad: <span>${disponibilidad}</span>
                                        </p>
                                    </footer>
                                    <div>
                                        <input class="input_salary input__radio" type="radio" value="${id_camion}" name="radio" required>
                                    </div>
                                </label>
                              </section> 
    `
};

export default CardCamion;