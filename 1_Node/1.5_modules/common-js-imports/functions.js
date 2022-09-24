function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

// Con exports.nombreFuncion o this.exports.nombreFuncion, exportamos una sola función.
// exports.sum = sum;
// this.exports.sum = sum;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

// Con module.exports podemos exportar varias funciones.
// Se pueden cambiar los nombres a las funciones.
// Cuando se quedan igual, simplemente se pone el nombre una vez.
// Cuando se cambia, se tiene que poner el nuevo nombre seguido de dos puntos y el nombre original.
// O se pueden poner ambos nombres.
module.exports = {
    sum: sum,
    substract, // substract : substract
    multiply, // multiply : multiply
    divideNumbers: divide,
};

//20:44