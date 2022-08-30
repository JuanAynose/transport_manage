const CardPackage = (data) => {
	console.log(data);
    const {cod_paquete,id_destinatario,dir_destino,descrip} = data;
return `
                        <ul class="package-container">
                            <li class="package-container__item">
                                <div class="package-container__header">
                                    <div class="package-container__header__bg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="icon__package icon__package__postion--left icon__package__size--s" d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.07.11.39.39 0 0 0-.08.1.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></path></svg>
                                        <p class="package-container__title package-container__title_size-s">Paquete</p>
                                    </div>
                                </div>
                                <div class="package-container__main">
                                    <p class="package-container__title package-container__title__diplay--flex">
                                        <span class="package-container__text">Pacco</span>                    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="icon__package icon__package__color--blue" d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.07.11.39.39 0 0 0-.08.1.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></path></svg>
                                        <span class="package-container__text package-container__text__margin">Velocce</span>
                                    </p>
                                </div>
                                <ul class="package-container__footer">
                                    <li class="package-container__footer__item">
                                        <p class="package-container__text  package-container__text__color--var">Descrip</p>
                                        <p class="package-container__text package-container__text__height--auto">${descrip}</p>
                                    </li>
                                    <li class="package-container__footer__item">
                                        <p class="package-container__text package-container__text__color--var">Paquete</p>
                                        <p class="package-container__text">${cod_paquete}</p>
                                    </li>
                                    <li class="package-container__footer__item">
                                        <p class="package-container__text package-container__text__color--var">Destinario</p>
                                        <p class="package-container__text">${id_destinatario}</p>
                                    </li>
                                    <li class="package-container__footer__item">
                                        <p class="package-container__text package-container__text__color--var">Direccion</p>
                                        <p class="package-container__text package-container__text__height--auto">${dir_destino}</p>
                                    </li>                                    
                                </ul>
                                <div>
                                    <input class="input_package input__radio" type="radio" value="id_anashe" name="radio" required>
                                  </div>
                            </li>
                        </ul>                        
`;
}
export default CardPackage;
