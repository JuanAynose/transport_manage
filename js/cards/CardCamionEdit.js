const CardCamionEdit = data => {
	const { capacidad, disponibilidad, id_camion, marca } = data;
	let copyDisponibilidad = disponibilidad;
	if (copyDisponibilidad == 1) copyDisponibilidad = 'Si';
	else copyDisponibilidad = 'No';
	return `
    <li class="camion-container__item">
    <div class="camion-container__header">
        <p class="camion-container__header__title">Camión</p>
    </div>
    <div class="camion-container__content">                
        <ul class="camion-container__information">
            <li class="information__item">
                <p class="information__item__text">
                    Capacidad: <span class="information__item__text information__item__text__color--black">${capacidad} kg</span>
                    
                </p>
            </li>
            <li class="information__item">
                <p class="information__item__text">
                    Marca camión: <span class="information__item__text information__item__text__color--black">${marca}</span>                            
                </p>
            </li>
            <li class="information__item">
                <p class="information__item__text">
                    Disponible: <span class="information__item__text information__item__text__color--black">${copyDisponibilidad}</span>                            
                </p>
            </li>
            <li class="information__item">
                <p class="information__item__text information__item__text__color--blue">
                    Id camión: <span class="information__item__text information__item__text__color--black">${id_camion}</span>                            
                </p>
            </li>
            <li class="information__item container__buttons">
                <button class="camion-container__button input__package__button">Editar</button>
                <button class="camion-container__button input__package__button">Borrar</button>
            </li>
        </ul>        
        <div class="camion-container__logo">
            <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path  class="icon_truck" d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464z"/></svg>
            <p class="company__name">Pacco Velocce</p>
        </div>
    </div>
</li>
    `;
};

export default CardCamionEdit;
