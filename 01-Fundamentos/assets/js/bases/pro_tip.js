function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}
const persona = crearPersona('Alejandro', 'López');
console.log(persona);


const crearPersona2 = (nombre, apellido) => {
    return {
        nombre,
        apellido
    }
}
const persona2 = crearPersona2('Alejandro', 'López');
console.log(persona2);


const crearPersona3 = (nombre, apellido) => ({
    nombre,
    apellido
})
const persona3 = crearPersona3('Alejandro', 'López');
console.log(persona3);


function imprimeArgumentos() {
    console.log(arguments)
}
imprimeArgumentos(10, true, false, 'Alejandro');


const imprimeArgumentos2 = (edad, ...args) => {
    // console.log(args);
    return args
}
// imprimeArgumentos2(10, true, false, 'Alejandro', 'hola');

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Alejandro', 'hola');
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona3('Isaac', 'herrera');
console.log({ nuevoApellido });



const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo);
    console.log(personaje.edad);
    console.log(personaje.trajes);
}
imprimePropiedades(tony);

const imprimePropiedades2 = ({ nombre, codeName, vivo, edad, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}
imprimePropiedades2(tony);