const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // Primero debemos obtener el url de la solicitud (request).
        // url.parse toma la cadena url y lo convierte en un objeto de url.
    const urlObject = url.parse(request.url);
    // Aquí guardamos el path del url.
    const path = urlObject.path;
    // En esta variable leemos el archivo.
    let fileSystemPath = '';

    if (path === '/') {
        fileSystemPath = 'static/index.html';
    } else {
        fileSystemPath = `static${path}`;
    }

    // Comprobamos que tenga el status correcto el archivo que vamos a leer.
        // El primer parámetro es el lugar donde se encuentra el archivo para saber que existe el archivo y la carpeta.
        // El segundo parámetro es una función para cachar el error.
    fs.stat(fileSystemPath, error => {
        // Si no hay error y el estatus está bien.
        if (!error) {
            // Comprobamos que el archivo se pueda leer.
            fs.readFile(fileSystemPath, (error, file) => {
                // Si no hay error y se puede leer.
                if(!error) {
                    const status = 200;
                    const mimeType = {'Content-Type' : 'text/html'};
                    response.writeHead(status, mimeType);
                    // Devolvemos el archivo.
                    response.write(file);
                    response.end();
                } else {
                    // 500 Internal Server Error.
                    const status = 500;
                    const mimeType = {'Content-Type' : 'text/plain'};
                    response.writeHead(status, mimeType);
                    // Devolvemos el error.
                    response.write('Error en el servidor');
                    response.end();
                }
            });
        } else {
            // 404 Not found.
            const status = 404;
                    const mimeType = {'Content-Type' : 'text/html'};
                    response.writeHead(status, mimeType);
                    // Devolvemos una página con el error.
                    response.write('<html><body>404 - Not found</body></html>');
                    response.end();
        }
    });
})

server.listen(8000);
console.log("Servidor");