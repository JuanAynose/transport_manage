const CardPackage = (data, contentPaquete) => {
  // console.log(data);
  const fragment = new DocumentFragment();

  for (const packageItems of data) {
    const { cod_paquete, descrip, dir_destino } = packageItems;
    const divPaquete = document.createElement("DIV");
    const divCode = document.createElement("DIV");
    const pDescrip = document.createElement("P");
    const pDestino = document.createElement("P");
    const pCod = document.createElement("P");

    divPaquete.classList.add("package__item--container");
    divCode.classList.add("package__content--code");
    pDescrip.classList.add("package__text--descrip");
    pDestino.classList.add("package__text--destino");
    pCod.classList.add("package__text--codigo");

    pDescrip.textContent = descrip;
    pDestino.textContent = dir_destino;
    pCod.textContent = cod_paquete;

    divCode.append(pCod);
    divPaquete.append(divCode);
    divPaquete.append(pDescrip);
    divPaquete.append(pDestino);

    fragment.appendChild(divPaquete);
  }
  contentPaquete.append(fragment);
};

export default CardPackage;
