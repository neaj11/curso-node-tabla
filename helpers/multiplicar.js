const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors')
const crearTabla = (base = 5, l, h) => {

    return new Promise((resolve, reject) => {

        let salida = ''
        let consola = ''

        let res = 1
        for (i = 1; i <= h; i += 1) {
            res = base * i
            salida += `${base} x ${i} es igual a ${res}\n `;
            consola += `${base} ${'x'.green} ${i} es igual a ${res}\n `;
        }
        if (base <= 10) {

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
            resolve(`tabla-${base}.txt creado`.rainbow)
            if (l === true) {
                console.log(consola);
            }
        } else {
            reject('Error pibe :/')
        }

    })
}
module.exports = {
    crearTabla
}