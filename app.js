const { crearTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

console.clear();
//console.log(process.argv);
//console.log(argv)

//console.log('base: yargs', argv.base)
//console.log(process.argv);
//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');
//console.log(base)

//const base = 5;
crearTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err))


//fs.writeFile(`tabla-${base}.txt`, salida, (hola) => {
// if (hola) throw Error;

//console.log(`tabla-${base}.txt creado`)