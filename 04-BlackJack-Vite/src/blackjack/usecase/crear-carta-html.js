/**
 * Esta funcion refleja en la vista la carta se se escogio ya sea para el jugador o la computadora
 * @param {HTMLElement} imagenesHTML - HTML para mostrar las imagenes
 * @param {String} carta - valor y tipo de carta Ejemplo: '2D'
 */
export const crearImagenHTML = (imagenesHTML, carta) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `/assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    imagenesHTML.append(imgCarta);
}