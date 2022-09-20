const fs = require('fs');

// Path ABSOLUTO: C:\Users\Xerze\Desktop\DevF17\04_JS-Avanzado\js-avanzado-xerzie\1_Node\1.2_crear-archivo\XerzieFile.txt
// Path RELATIVO: 04_JS-Avanzado\js-avanzado-xerzie\1_Node\1.2_crear-archivo\XerzieFile.txt

// Punto diagonal, significa "aquí"
//const path = './04_JS-Avanzado\js-avanzado-xerzie\1_Node\1.2_crear-archivo';
//const path = '../../1_Node';
const path = '04_JS-Avanzado\js-avanzado-xerzie\1_Node\1.2_crear-archivo';

const nameFile = 'XerzieFile.txt';
const contentForFile = 'Esto lo escribí desde Node';
const filePath = `${path}/${nameFile}`;

// Crear archivo, usa 3 parámetros:
    // 1) la ruta completa (ruta y nombre de archivo), el contenido.
    // 2) Contenido.
    // 3) Una función donde capturamos un error si llega a ocurrir
fs.writeFile(filePath, contentForFile, (error) => {
    if(error) {
        throw error;
    } else {
        console.log('Archivo creado exitosamente :)');
    }
});

