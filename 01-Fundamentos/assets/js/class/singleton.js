class Singleton {
    static instancia;
    nombre = '';
    constructor(nombre = 'SN') {
        const a = undefined;
        console.log(a);
        console.log(!a);
        console.log(!!a);

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
        // return this;
    }
}

const instancia = new Singleton('Ironman');
console.log(instancia);

const instancia2 = new Singleton('Spiderman');
console.log(instancia2);