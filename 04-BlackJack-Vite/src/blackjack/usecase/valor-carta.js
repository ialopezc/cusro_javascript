/**
 * Esta funccion recibe el numero y tipo de carta y retorna solo valor numerico de la misma
 * @param {String} carta - valor y tipo de carta Ejemplo: '2D'
 * @returns {Number} valor de carta Ejemplo: A=11, K,Q,J=10, 2=2, etc.
 */
export const valorCarta = (carta) => {
    if (!carta) throw new Error('El parametro carta es necesario');

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : Number(valor);
}