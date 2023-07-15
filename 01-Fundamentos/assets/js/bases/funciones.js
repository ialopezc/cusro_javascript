/**
 * tradicional
 */
function saludar() {
    console.log("Hola mundo");
}
saludar();


const saludar2 = function () {
    console.log("Hola mundo 2");
}
saludar2();

/**
 * FUnciones de flecha
 */
const saludarFlecha = () => {
    console.log("Hola Flecha");
}
saludarFlecha();

const saludarFlecha2 = (nombre) => {
    console.log("Hola flecha 2 " + nombre)
}
saludarFlecha2('Isaac');

/**
 * Ejemplo de transformacion de funciones
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function sumar(a, b) {
    return a + b;
}
console.log(sumar(1, 2));

const sumar2 = (a, b) => {
    return a + b;
}
console.log(sumar2(1, 2));

const sumar3 = (a, b) => a + b;
console.log(sumar3(1, 2));

const getAleatorio = () => Math.random();
console.log(getAleatorio());