import { pedirCarta, valorCarta, crearImagenHTML } from './'

export const turnoJugador = (deck, puntosJugador, puntosHTML, imagenesHTML) => {
    const carta = pedirCarta(deck);

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML.innerText = puntosJugador;

    crearImagenHTML(imagenesHTML, carta);
    return puntosJugador;
}