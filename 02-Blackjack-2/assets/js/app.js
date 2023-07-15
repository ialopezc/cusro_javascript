/** funcino anonima auto llamada */
const moduleGame = (() => {
    'use strict'

    /**
     * 2C = Tow of Clubs (Tréboles)
     * 2D = Tow of Diaminds (Diamantes)
     * 2H = Tow of Hearts (Corazónes)
     * 2S = Tow of Spades (Espadas)
     */


    let deck,
        playersPoints,
        smallPoints,
        divCards;
    const types = ['C', 'D', 'H', 'S'],
        specials = ['A', 'J', 'Q', 'K'],
        btnNewGame = document.querySelector('#btnNewGame'),
        btnRequestCard = document.querySelector('#btnRequestCard'),
        btnStop = document.querySelector('#btnStop'),
        divPlayers = document.querySelector("#divPlayers");

    btnRequestCard.disabled = true;
    btnStop.disabled = true;

    /**
     * Inicializacion del juego
     */
    const initGame = (numberOfPlayers = 1) => {
        btnRequestCard.disabled = false;
        divPlayers.innerHTML = "";
        console.clear();
        createDeck();

        //Crear jugadores
        playersPoints = [];
        for (let i = 0; i < numberOfPlayers; i++) {
            playersPoints.push(0);
            const divCol = document.createElement('div');
            divCol.classList.add('col-12');
            divCol.innerHTML = `<h1>Jugador ${i + 1} - <small>0</small></h1><div class="divCards"></div>`;
            divPlayers.append(divCol);
        }

        //Crear jugador computadora 
        playersPoints.push(0);
        const divCol2 = document.createElement('div');
        divCol2.classList.add('col-12');
        divCol2.innerHTML = `<h1>Computer - <small>0</small></h1><div class="divCards"></div>`;
        divPlayers.append(divCol2);

        //Obtener los contenedores html de los jugadores
        setTimeout(() => {
            smallPoints = document.querySelectorAll('small');
            divCards = document.querySelectorAll(".divCards");
        }, 500);
    }

    /**
    * Creacion de Deck
    * @returns Deck aleatorio
    */
    const createDeck = () => {
        deck = [];

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

        return deck = _.shuffle(deck);
    }

    /**
    * Solicita una carta de la baraja
    * @returns {solicita una carta de la baraja y la quita de la misma} card
    */
    const requestCard = () => {
        if (deck.length === 0) {
            throw 'Ya no hay cartas';
        }

        return deck.shift();
    }

    /**
    * Devuelve el valor de cada carta
    * @param {Numero y tipo de carta} card 
    * @returns valor en Puntos
    */
    const valueCard = (card) => {
        const value = card.substring(0, card.length - 1);

        return (isNaN(value)) ?
            (value === 'A') ? 11 : 10
            : Number(value);
    }

    /**
     * Suma actualiza en la vista el número de carta dependiendo del turno del jugador
     * @param {El turno equivale al jugador} turno 
     * @param {El número de carta} card 
     * @returns Regresa el acumulado del turno del jugador
     */
    const accumulatePoints = (turno, card) => {
        playersPoints[turno] = playersPoints[turno] + valueCard(card);
        smallPoints[turno].innerText = playersPoints[turno];
        return playersPoints[turno];
    }

    /**
     * Actualiza en la vista en la vista la imagen correspondiente a la carta por turno de jugador
     * @param {El turno equivale al jugador} turno 
     * @param {El número de carta} card 
     */
    const createCard = (turno, card) => {
        const img = document.createElement('img');
        img.src = `assets/img/cartas/${card}.png`;
        img.classList.add('img-fluid');
        img.classList.add('cartas');
        divCards[turno].append(img);
    }

    /**
     * verifica quien gano y lo devuelve;
     */
    const whoWon = () => {
        const [playerPoints, computerPoints] = playersPoints;
        setTimeout(() => {
            const msj = (computerPoints === playerPoints) ? 'Empate!!' :
                (playerPoints > 21 && playerPoints > computerPoints) ? 'La computadora gana' : 'Ganaste!';
            alert(msj);
        }, 500);
    }

    /**
    * Truno de la computadora
    * @param {*} playerPoints 
    */
    const computerShift = (playerPoints) => {
        let computerPoints;
        do {
            const card = requestCard();
            computerPoints = accumulatePoints(playersPoints.length - 1, card);

            createCard(playersPoints.length - 1, card);

            if (playerPoints > 21) {
                break;
            }
        } while ((computerPoints < playerPoints) && (playerPoints <= 21));

        whoWon();
    }

    /**
    * Click al boton solicitar carta
    */
    btnRequestCard.addEventListener('click', () => {
        btnStop.disabled = false;
        const card = requestCard();
        const playerPoints = accumulatePoints(0, card);

        createCard(0, card);

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
        computerShift(playersPoints[0]);
    });

    btnNewGame.addEventListener('click', () => {
        // let numberOfPlayers = prompt('Cunatas personas van a jugar?', 1);
        // numberOfPlayers = Number(numberOfPlayers);
        // initGame(numberOfPlayers);
        initGame();
    });

    return {
        initGame: initGame
    };
})();