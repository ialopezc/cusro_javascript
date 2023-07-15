let hoy = new Date();
console.log(hoy);

let dia = hoy.getDay();
// let dia = 10;
console.log(dia);

const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}
console.log(diasLetras[dia] || 'Dia no valido');

const diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(diasLetras2[dia] || 'Dia no valido');

const diasLetras3 = {
    0: (dia) => 'Domingo ' + (dia - 1),
    1: (dia) => 'Lunes ' + (dia - 1),
    2: (dia) => 'Martes ' + (dia - 1),
    3: (dia) => 'Miércoles ' + (dia - 1),
    4: (dia) => 'Jueves ' + (dia - 1),
    5: (dia) => 'Viernes ' + (dia - 1),
    6: (dia) => 'Sabado ' + (dia - 1)
}
/**
 * [valor buscado en matriz]
 * (valor que pasa a la funcion)
 */
console.log(diasLetras3[dia](dia) || 'Dia no valido');


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalse || soyUndefined || true || 'Ya no soy falso de nuevo' || false;

console.table({ a1, a2, a3, a4, a5 });




