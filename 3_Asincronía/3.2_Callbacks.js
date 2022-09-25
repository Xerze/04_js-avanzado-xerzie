console.log('============== BLOQUE 3 ==============');
/**
* BLOQUE 3 - Solución 1: Uso de callbacks.
* Un callback es una función que se para como parámetro a otra
* con el fin de ejecular en el momento que la necesitemos.
* NOTA: No es una buena práctica por el anidamiento que produce (callback hell)
*/
const showSuccessMessage = () => {
    console.log('3) Ver el mensaje de gracias por su compra joven');
}

const validatingPayment = (showSuccessMessage) => {
    setTimeout(() => {
        console.log('2) Validar la tarjeta de credito/debito y mostrar un loader');
        showSuccessMessage();
    }, 0);
}

console.log('1) Presionar el boton comprar');
validatingPayment(showSuccessMessage);