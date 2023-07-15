const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.78
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10080',
        ubicacion: 'Malibu, California'
    }
};

console.table(personaje);
// console.log('nombre', personaje.nombre);
// console.log('nombre', personaje['nombre']);

// console.log('coords', personaje.coords);
// console.log('lat', personaje.coords.lat);

// console.log('# de trajes = ',personaje.trajes.length);

// personaje.trajes.forEach((value, key) => {
//     console.log(value, key);
// });

delete personaje.edad;
console.table(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 10000000;

personaje.casado = false;

console.table(personaje);

console.table(Object.getOwnPropertyNames(personaje));