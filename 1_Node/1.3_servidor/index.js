const http = require('http');

// La función createServer obtiene una función-
const server = http.createServer((request, response) => {
    // Datos de respuesta:
        // Estatus es un cpodigo que el servidor devuelve al cliente para saber qué pasó.
    const status = 200; // 200 significa OK.
        // mimeType indica la naturaleza y formato de los archivos que son transmitidos en la respuesta de una solicitud web.
    const mimeType = {'Content-Type' : 'text/html'}
    response.writeHead(status, mimeType);
    response.write('<html><body>Esto está escrito en html de nodeJS.</body></html>');
    response.end();

});

// Inicializar un servidor.
// Se puede acceder desde un navegador localhost:8000 o http://127.0.0.1:8000/
server.listen(8000);
console.log('El servidor fue iniciado.');