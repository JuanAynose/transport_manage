import { SITUACION_VALUE } from '../constants/situacionValueOption.js';

const CardRemito = data => {
	const {
		apellido,
		ciudad_nombre,
		cod_postal,
		descrip,
		dir_destino,
		destinatario_nombre,
		fecha,
		fecha_emision,
		id_envio,
		id_paquete,
		marca,
		provincia_nombre,
		situacion
	} = data;

	let barColor = '#94ee94';
  let situationName;
  if (SITUACION_VALUE[situacion][0]) situationName=SITUACION_VALUE[situacion][0];
  else situationName ="Error";
	if (Number(situacion) === 5 || Number(situacion) === 6) barColor = '#fa7e7e';
	else barColor = '#94ee94';

	return `
    <li class="remito-container">
    <div class="remito-container__header">
      <div class="remito-container__header__bg">
        <p class="remito-container__title">Remito</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
        width="40"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path  fill="#7c2f8a" d="M64 64C28.7 64 0 92.7 0 128v80c26.5 0 48 21.5 48 48s-21.5 48-48 48v80c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V304c-26.5 0-48-21.5-48-48s21.5-48 48-48V128c0-35.3-28.7-64-64-64H64zm64 96l0 192H448V160H128zm-32 0c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/>
        </svg>
        <p class="remito-container__item__text" >#<span>${id_envio}</span></p>
      </div>
    </div>
    <div class="remito-container__main">
      <ul class="remito-container__list">
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Id Paquete:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${id_paquete}</span
            >
          </p>
        </li>
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Paquete:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${descrip}</span
            >
          </p>
        </li>
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Destinatario:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${destinatario_nombre}</span
            >
          </p>
        </li>
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Direccion:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${dir_destino}</span
            >
          </p>
        </li>
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Ciudad:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${ciudad_nombre}</span
            >
          </p>
        </li>
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Provincia:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${provincia_nombre}</span
            >
          </p>
        </li>
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Codigo Postal:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${cod_postal}</span
            >
          </p>
        </li>
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Estado:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${situationName}</span
            >
          </p>
        </li>
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Empleado:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${apellido}</span
            >
          </p>
        </li>
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Camion:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${marca}</span
            >
          </p>
        </li>
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Fecha de emisión:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${fecha_emision}</span
            >
          </p>
        </li>
        <li class="remito-container__item">
          <p class="remito-container__item__text remito-container__item__text--violet">
            Fecha de entrega:<span
              class="remito-container__item__text remito-container__item__text--black"
              >${fecha}</span
            >
          </p>
        </li>
      </ul>
    </div>
    <div class="remito-container__footer">
      <div class="progress__bar__info">
        <p class="remito-container__item__text remito-container__item__text--violet">${situationName}</p>
        <p class="remito-container__item__text">${SITUACION_VALUE[situacion][1]}%</p>
      </div>
      <div class="remito-container__bar__progress">
        <span class="progress__bar" style="width:${SITUACION_VALUE[situacion][1]}%;background-color:${barColor};" ></span>
      </div>
    </div>
  </li>
    `;
};
export default CardRemito;
