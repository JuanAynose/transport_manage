const formatToCurrency = amount => {
	return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
const CardCheck = data => {
	const { apellido, direc, mes_año, monto_hora, cantidad } = data;
	const giveFormat = formatToCurrency(monto_hora * cantidad);

	return `
    <div class="item__pagos--salario">
                            <div class="item__pagos--header">
                                <p class="item__pagos--text-1">Destinatario: ${apellido}</p>
                                <div class="item__pagos--info">
                                    <p class="item__pagos--text-1">Dirección: ${direc}</p>
                                    <p class="item__pagos--text-1">Fecha de pago: ${mes_año}</p>
                                </div>
                            </div>
                            <div class="item__pagos--content">
                                <div class="item__pagos--info">
                                    <p class="item__pagos--text-1">Banco : <span class="item__pagos--banco">UwU</span>
                                    </p>
                                    <p class="item__pagos--text-1">
                                        Cantidad: <span class="item__pagos--banco">${giveFormat}</span> Pesos
                                    </p>
                                    
                                    <img src="./assets/images/sol_argentina.png" class="icon" alt="">
                                </div>
                            </div>
                            <div class="item__pagos--footer">
                                <p class="item__pagos--text-1">
                                    Pago realizado por: <span class="item__pagos--banco">Pacco Veloce C.O</span>
                                </p>
                            </div>
                        </div>
    `;
};
export default CardCheck;
