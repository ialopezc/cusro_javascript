const dia = 2;
const horaActual = 10;

let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia entre semana');
//     horaApertura = 11;
// }
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, abrimos a las ${horaApertura}`;
// }
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, abrimos a las ${horaApertura}`;

console.table({ horaApertura, mensaje });

const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log(elMayor(20, 15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArrr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')()
];

console.log(amigosArrr);