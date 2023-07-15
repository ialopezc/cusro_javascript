import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tipos - Arreglo para cartas numeradas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} especiales - Arreglo para cartas con letras Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} deck - Retorna un nuevo arreglo del deck
 */
export const crearDeck = (tipos, especiales) => {
    if(!tipos) throw new Error('El parametro tipos es necesario');
    if(!especiales) throw new Error('El parametro especiales es necesario');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}