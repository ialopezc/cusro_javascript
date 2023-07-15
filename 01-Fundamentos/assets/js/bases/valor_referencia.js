let a = 10;
let b = a;
console.table({ a, b });
a = 30;
console.table({ a, b });

let juan = { nombre: 'juan' };
let ana = { ...juan };
ana.nombre = 'Ana';

console.table({ juan, ana });

const cambiaNombre = (...persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.time('cambiar nombre');
console.table({ peter, tony });
console.timeEnd('cambiar nombre');