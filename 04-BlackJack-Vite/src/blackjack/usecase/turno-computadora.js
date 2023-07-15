import { pedirCarta, valorCarta, crearImagenHTML } from './';

/**
 * Esta funcion sirve para ejecutar el truno de la computadora despues del jugador
 * @param {Number} puntosMinimos - Son los puntos del jugador
 * @param {Array<String>} deck - Arreglo de cartas barajeado
 * @param {HTMLElement} puntosHTML - HTML para mostrar los puntos
 * @param {HTMLElement} imagenesHTML - HTML para mostrar las imagenes
 */
export const turnoComputadora = (puntosMinimos, puntosComputadora, deck, puntosHTML, imagenesHTML) => {
    if (!puntosMinimos) throw new Error('El parametro puntosMinimos es necesario');
    if (!deck) throw new Error('El parametro deck es necesario');
    if (!puntosHTML) throw new Error('El parametro puntosHTML es necesario');
    if (!imagenesHTML) throw new Error('El parametro imagenesHTML es necesario');

    do {
        let carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        crearImagenHTML(imagenesHTML, carta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);

    return puntosComputadora;
}