const CardEmploye = data => {
	const { antiguedad_empleado, apellido_empleado, dni_empleado, id_empleado } =
		data;

	return `
    <label>
    <li  class="empleado-container__item" >
        <div class="empleado-container__header">
            <div class="empleado-container__header__bg">
                <div class="empleado-container__item__photo">
                    <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve" width="50" height="50">
<path class="icon__profile" d="M60,30.017c0-16.542-13.458-30-30-30s-30,13.458-30,30c0,6.142,1.858,11.857,5.038,16.618l-0.002,0.018
	c0.005,0,0.01,0.001,0.014,0.001c2.338,3.495,5.393,6.469,8.949,8.721c9.524,6.149,22.473,6.138,32,0
	c2.599-1.646,4.928-3.677,6.907-6.017c0.001,0.001,0.002,0.002,0.002,0.003c0.023-0.027,0.045-0.057,0.068-0.084
	c0.177-0.211,0.349-0.427,0.521-0.644c0.168-0.209,0.334-0.418,0.497-0.632c0.048-0.063,0.093-0.128,0.14-0.192
	c0.21-0.281,0.422-0.56,0.621-0.851l0.207-0.303l-0.002-0.021C58.142,41.874,60,36.159,60,30.017z M58,30.017
	c0,4.972-1.309,9.642-3.591,13.694c-1.647-5.46-6.563-9.373-12.409-9.662v-0.032h-0.689H36h-0.635c-0.201,0-0.365-0.164-0.365-0.365
	v-0.645c0-0.183,0.149-0.303,0.276-0.352c6.439-2.421,10.455-12.464,9.613-19.488c-0.439-3.658-2.25-6.927-4.883-9.295
	C50.517,7.909,58,18.103,58,30.017z M25.491,30.808C20.709,29.04,17,20.867,17,15.017c0-0.128,0.016-0.253,0.019-0.38l0.732-0.902
	c1.651-1.964,4.47-2.526,7.012-1.4c1.022,0.453,2.111,0.683,3.237,0.683c2.971,0,5.64-1.615,7.028-4.184
	c3.182,1.045,6.022,3.015,7.943,5.498c0.293,6.1-3.294,14.533-8.398,16.452C33.617,31.143,33,32.016,33,33.007v0.645
	c0,1.304,1.062,2.365,2.365,2.365H36v6H24v-6h0.635c1.304,0,2.365-1.062,2.365-2.365v-0.635C27,32.031,26.395,31.143,25.491,30.808z
	 M19.999,3.87C16.939,6.618,15,10.591,15,15.017c0,6.629,4.19,15.593,9.797,17.666C24.916,32.728,25,32.865,25,33.017v0.635
	c0,0.201-0.164,0.365-0.365,0.365H24h-5.311H18v0.032c-5.846,0.289-10.762,4.202-12.409,9.662C3.309,39.659,2,34.989,2,30.017
	C2,18.101,9.486,7.905,19.999,3.87z M7.544,46.724c0.003,0,0.006,0,0.009,0.001c-0.046-0.06-0.091-0.122-0.137-0.181
	c-0.104-0.142-0.205-0.287-0.307-0.431C7.862,40.558,12.426,36.372,18,36.049v5.969h-4v10.958
	C11.529,51.248,9.345,49.138,7.544,46.724z M46,52.976V42.017h-4v-5.969c5.574,0.323,10.138,4.51,10.891,10.064
	c-0.073,0.104-0.146,0.207-0.221,0.31c-0.382,0.522-0.775,1.035-1.187,1.528C49.888,49.858,48.042,51.548,46,52.976z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

                </div>
            </div>
        </div>
        <div class="empleado-container__content">
            <p class="empleado-container__item__text">
                ${apellido_empleado}
            </p>
            <p class="empleado-container__item__text">
            <span class="empleado-container__item__text empleado-container__item__text__color--violet">DNI:</span> ${dni_empleado}
            </p>
        </div>
        <div class="empleado-container_footer">
            <p class="empleado-container__item__text">
                <span class="empleado-container__item__text empleado-container__item__text__color--violet">Id empleado:</span> ${id_empleado}
            </p>
            <p class="empleado-container__item__text">
                <span class="empleado-container__item__text empleado-container__item__text__color--violet">Antigüedad:</span> ${antiguedad_empleado}
            </p>
        </div>
        <div>
            <input class="input_empleado input__radio" type="radio" value="${id_empleado}" name="containerEmploye" required>
            <input class="input_empleado hidden input__radio" type="text" value="${apellido_empleado}" name="nameEmploye">
        </div>
        </li> 
    </label>
    `;
};
export default CardEmploye;
