console.log(this); // El this es Objeto vacío({}) o module.exports
console.log("Ruta donde está mi archivo: ", __dirname);
console.log("Ruta + nombre de mi archivo: ", __filename);

// module: Referencia al módulo actual. 
// exports: Para exportar módulos (archivos)
// require(): Importa un archivo js como módulo. Ej; require("index.js");