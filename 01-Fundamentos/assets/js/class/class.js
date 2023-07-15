class Persona {
    // nombre = '';
    // codigo = '';
    // frase = '';
    // comida = '';
    static _conteo = 0;
    static get getConteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Soy un metodo estatico');
    }

    constructor(nombre, codigo, frase, comida) {
        // if (!nombre) throw Error('Necesitamos el nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        this.comida = comida;

        Persona._conteo++;
    }

    set setComida(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComida() {
        return this.comida;
    }

    quienSoy() {
        return `Soy ${this.nombre} y mi identidad es ${this.codigo}`;
    }

    miFrase() {
        return `${this.codigo} dice: ${this.frase}`;
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino, el hombre araña');
const ironman = new Persona('Tony Stark', 'Ironman', 'Soy tu Ironman');
console.log(spiderman);

console.log(spiderman.quienSoy());
console.log(spiderman.miFrase());

spiderman.setComida = 'Pie de tia May';
// spiderman.nemesis = 'Duende verde';
// spiderman.comida = 'Duende verde';

console.log(spiderman);
console.log(spiderman.getComida);

console.log(Persona._conteo);
console.log(Persona.getConteo);
Persona.mensaje();