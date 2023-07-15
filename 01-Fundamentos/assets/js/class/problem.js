const fer = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}

// fer.imprimir();

// Forma antigua de clases
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}

const maria = new Persona('Maria', 18);
maria.imprimir();

const melissa = new Persona('Melissa', 18);
melissa.imprimir();

// const jano = Persona('Jano', 18);
// jano.imprimir();