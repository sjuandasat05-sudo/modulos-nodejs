const fs = require('fs');

fs.writeFile('usuarios.txt', 'Juan\nAna\nLuis', (err) => {
    if (err) throw err;

    console.log('Archivo de usuarios creado');

    fs.readFile('usuarios.txt', 'utf8', (err, data) => {
        if (err) throw err;

        console.log('Contenido inicial:', data);

        fs.appendFile('usuarios.txt', '\nPedro', (err) => {
            if (err) throw err;

            console.log('Usuario agregado');

            fs.readFile('usuarios.txt', 'utf8', (err, newData) => {
                if (err) throw err;

                console.log('Contenido actualizado:', newData);

                fs.unlink('usuarios.txt', (err) => {
                    if (err) throw err;

                    console.log('Archivo usuarios.txt eliminado');
                });
            });
        });
    });
});
let segundos = 0;

const intervalId = setInterval(() => {
    segundos++;
    console.log(`Han pasado ${segundos} segundos`);

    if (segundos >= 10) {
        clearInterval(intervalId);
        console.log('¡Listo! Finalizó el temporizador');
    }
}, 1000);