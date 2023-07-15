/**
 * Esta función me permite tomar una carta del deck y quitarla del mismo
 * @param {Array<String>} deck - Arreglo con cartas barajeadas Ejemplo: ['2D', '4H', 'AS', ...]
 * @returns {String} card - Numero de carta tomada del deck Ejemplo: '2D'
 */
export const pedirCarta = (deck) => {
    if (!deck) throw new Error('El parametro deck es necesario');

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}