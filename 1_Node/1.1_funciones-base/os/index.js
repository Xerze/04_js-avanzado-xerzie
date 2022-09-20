// El módulo OS provee métodos y propiedades relacionados al sistema operativo.
// El módulo puede ser accedido a través de la linea en la que llamamos el módulo
    // y lo guardamos en la constante os para que podamos usarlo más adelante.
const os = require('os');

// Muestra el sistema operativo instalado en la computadora.
console.log('Versión detallada del sistema detallada: ', os.version());
// Muestra la versión del sistema.
console.log('Nombre de la versión del sistema: ', os.platform());
// Muestra  la versión del sistema operativo.
console.log('Numero de la versión del sistema:' + os.release());

// Muestra la arquitectura en bits que ocupa el sistema (x32, x64, x86).
console.log('Arquitectura: ',os.arch()); 
// // Nos muestra el número de procesadores virtuales.
console.log('Número de procesadores lógicos:' + os.cpus().length);
// Nos muestra la información del Procesador, un arreglo.
console.log('Información acerca de los cpus: ', os.cpus());
// Muestra la memoria libre en bytes.
console.log('Memoria libre en bytes', os.freemem());
// Muestra cuál es la carpeta del usuario.
console.log('Carpeta del usuario actual: ', os.homedir()); 
// Muestra cuál es la dirección IP.
console.log('Mi direccion ip o mi hostname (local): ', os.hostname()); 
