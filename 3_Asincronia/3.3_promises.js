console.log('============== BLOQUE 4 ==============');
/**
 * BLOQUE 4  - Promises (Pending, reject, resolve): 
 */

const validatingPaymentPromise = () => {
    // Regresamos la promesa (con sus dos estados, siempre primero el resolve y luego el reject)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2) Validar la tarjeta de credito/debito y mostrar un loader');

            const statusArray = [200, 500];
            const randomStatus = statusArray[Math.floor(Math.random() * statusArray.length)];


            if(randomStatus === 200) {
                resolve('Todo bien');
            } else if (randomStatus === 500) {
                reject('Tu tarjeta fue declinada');
            }
        }, 0);        
    });
};

console.log('1) Presionar el boton comprar');
validatingPaymentPromise()
    .then(response => {
        console.log('3) Todo bien', response);
        // more sentences code
        // Los then cachan una respuesta correcta.
    }).then(() => console.log('4) Entregaremos en N fecha'))
     // Los catch cachan un error.
    .catch(error => console.log('error: ', error))
    // Finally se ejecuta siempre al final sin importar cuál fue la respuesta.
    .finally(() => console.log('============== FINAL'));

