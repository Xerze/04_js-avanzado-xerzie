console.log('============== BLOQUE 5 ==============');
/**
 * BLOQUE 5 - Async await (ES8 - 2017)
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
        }, 2000);        
    });
};

/**
 * El await solo puede ir dentro de una función.
 * Para que el await funcione, debe estar dentro de una función async.
 * NOTA: Poner "async" a una función no la vuelve asíncrona.
 *      Sólo le permite contener funciones asíncronas dentro y manejar promesas en su interior.
 */

async function main () {
    console.log('1) Presionar el boton comprar');

    // Es un bloque de instrucciones a intentar.
    // El try especifica una respuesta.
    try {
        const response = await validatingPaymentPromise();
        console.log('3) Todo bien', response);
        console.log('4) Entregaremos en N fecha')
    } catch(error) {
        console.log('error: ', error);
    }

    console.log('============== FINAL')
}

main();
