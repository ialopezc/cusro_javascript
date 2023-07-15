/**
 * 2C = Tow of Clubs (Tréboles)
 * 2D = Tow of Diaminds (Diamantes)
 * 2H = Tow of Hearts (Corazónes)
 * 2S = Tow of Spades (Espadas)
 */

let deck = [],
    playerPoints = 0,
    computerPoints = 0;
const types = ['C', 'D', 'H', 'S'],
    specials = ['A', 'J', 'Q', 'K'],
    btnNewGame = document.querySelector('#btnNewGame'),
    btnRequestCard = document.querySelector('#btnRequestCard'),
    btnStop = document.querySelector('#btnStop'),
    smallPoints = document.querySelectorAll('small'),
    imgPlayerCard = document.querySelector('#playerCards'),
    imgComputerCard = document.querySelector('#computerCards');

/**
 * Creacion de Deck
 * @returns Deck aleatorio
 */
const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }

    for (let type of types) {
        for (let special of specials) {
            deck.push(special + type);
        }
    }

    deck = _.shuffle(deck);
    return deck;
}

createDeck();

/**
 * Solicita una carta de la baraja
 * @returns {solicita una carta de la baraja y la quita de la misma} card
 */
const requestCard = () => {
    if (deck.length === 0) {
        throw 'Ya no hay cartas';
    }
    const card = deck.shift();

    return card;
}

/**
 * Devuelve el valor de cada carta
 * @param {Numero y tipo de carta} card 
 * @returns valor en Puntos
 */
const valueCard = (card) => {
    const value = card.substring(0, card.length - 1);

    let puntos = isNaN(value) ?
        (value === 'A') ? 11 : 10
        : Number(value);

    return puntos
}

/**
 * Truno de la computadora
 * @param {*} minimumPoints 
 */
const computerShift = (minimumPoints) => {
    do {
        const card = requestCard();

        computerPoints = computerPoints + valueCard(card);
        smallPoints[1].innerText = computerPoints;

        const img = document.createElement('img');
        img.src = `assets/img/cartas/${card}.png`;
        img.classList.add('img-fluid');
        img.classList.add('cartas');
        imgComputerCard.append(img);

        if (minimumPoints > 21) {
            break;
        }
    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));

    setTimeout(() => {
        const msj = (computerPoints === minimumPoints) ? 'Empate!!' :
            (minimumPoints > 21 && minimumPoints > computerPoints) ? 'La computadora gana' :
                (computerPoints > 21 && computerPoints > minimumPoints) ? 'Ganaste!' : 'No se';
        alert(msj);
    }, 500);
}

/**
 * Click al boton solicitar carta
 */
btnRequestCard.addEventListener('click', () => {
    const card = requestCard();

    playerPoints = playerPoints + valueCard(card);
    smallPoints[0].innerText = playerPoints;

    const img = document.createElement('img');
    img.src = `assets/img/cartas/${card}.png`;
    img.classList.add('img-fluid');
    img.classList.add('cartas');
    imgPlayerCard.append(img);

    if (playerPoints > 21) {
        btnRequestCard.disabled = true;
        btnStop.disabled = true;
        computerShift(playerPoints);
        // alert('Lo siento, Perdiste!');
        // location.reload();
    } else if (playerPoints === 21) {
        btnRequestCard.disabled = true;
        btnStop.disabled = true;
        computerShift(playerPoints);
        // alert('Ganaste!');
    }
});

btnStop.addEventListener('click', () => {
    btnRequestCard.disabled = true;
    btnStop.disabled = true;
    computerShift(playerPoints);
});

btnNewGame.addEventListener('click', () => {
    // console.clear();

    //Crear nuevo deck
    deck = [];
    createDeck();

    //Reiniciar puntajes
    playerPoints = 0;
    computerPoints = 0;

    //Restablecer vista
    smallPoints[0].innerText = 0;
    smallPoints[1].innerText = 0;
    imgPlayerCard.innerHTML = "";
    imgComputerCard.innerHTML = "";
    btnRequestCard.disabled = false;
    btnStop.disabled = false;
});