
function procesarPago(producto) {
  	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(producto.trim() !== "") {
				resolve(`Pago procesado correctamente para ${producto}`);
			}else {
				reject("No se puede procesar el pago sin producto");
			}
		}, 1500);
	});
}


function enviarPedido(direccion){
	return new Promise((resolve, reject) => {
		if (direccion.trim() === ""){
			reject("Dirección de envío no válida");
			return;
		}

		setTimeout(() => {
			let randomError = Math.random() < 0.2; 
			if (randomError){
				reject("Error durante el envío, intente de nuevo.");
			}else{
				resolve(`Pedido enviado correctamente a ${direccion}`);
			}
		}, 2000);
	});
}


document.getElementById("boton").addEventListener("click", (event) => {
  	event.preventDefault();
	let producto = document.getElementById("producto").value;
  	let envio = document.getElementById("envio").value;
  	let resul = document.getElementById("resul");

 	resul.textContent = ".......Espere......";

	procesarPago(producto)
		.then((pago) => {
			resul.textContent = pago;
			return enviarPedido(envio);
		})
		.then((envio) => {
			resul.textContent = envio;
		})
		.catch((error) => {
			resul.textContent = error;
		});
});
