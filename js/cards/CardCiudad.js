const CardCiudad = data => {
	const { cod_ciudad, cod_postal, cod_prov, nombre } = data;
	return `
    <li class="provincia-container__item">
      <div class="provincia-container__header">
        <p class="provincia-container__title provincia-container__text">
          Ciudad
        </p>
      </div>
      <div class="provincia-container__main">
        <ul class="provincia-container__information">
          <li class="provincia-container__information__item">
            <p
              class="provincia-container__text provincia-container__text--violet"
            >
              Ciudad :
              <span
                class="provincia-container__text provincia-container__text--black"
                >${nombre}</span
              >
            </p>
          </li>
          <li class="provincia-container__information__item">
            <p
              class="provincia-container__text provincia-container__text--violet"
            >
              Codigo postal :
              <span
                class="provincia-container__text provincia-container__text--black"
                >${cod_postal}</span
              >
            </p>
          </li>
          <li class="provincia-container__information__item">
            <p
              class="provincia-container__text provincia-container__text--violet"
            >
              Id Provincia:
              <span
                class="provincia-container__text provincia-container__text--black"
                >${cod_prov}</span
              >
            </p>
          </li>
          <li class="provincia-container__information__item">
            <p
              class="provincia-container__text provincia-container__text--violet"
            >
              Id Ciudad :
              <span
                class="provincia-container__text provincia-container__text--black"
                >${cod_ciudad}</span
              >
            </p>
          </li>
          <li class="provincia-container__information__item">
            <button class="provincia-container__button">Editar</button>
            <button class="provincia-container__button">Borrar</button>
          </li>
        </ul>
        <div class="provincia-container__logo">
          <svg
            width="100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              fill="#7c2f8a"
              d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"
            />
          </svg>
          <p class="company__name">Pacco Velocce</p>
        </div>
      </div>
    </li>
    `;
};
export default CardCiudad;