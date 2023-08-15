/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    const min = Math.ceil(1);
    const max = Math.floor(1010);
    const num = Math.floor(Math.random() * (max - min + 1) + min);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await res.json();
    // console.log(data);
    return data;
}

/**
 * @param {HTMLDivElement} element 
 */
export const PokemonApp = async (element) => {
    document.querySelector('#app-tittle').innerHTML = 'Pokemon APP';
    element.innerHTML = 'loading ...';
    const quote = await fetchQuote();
    // console.log(quote);
    // console.log(quote.name);
    // console.log(quote.types[0].type.name);
    // console.log(quote.abilities[0].ability.name);
    // element.innerHTML = 'Tenemos data';

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (quote) => {
        quoteLabel.innerHTML = quote.name;
        authoLabel.innerHTML = quote.abilities[0].ability.name;
        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
    }

    // Añadir el listener
    nextQuoteButton.addEventListener('click', async () => {
        element.innerHTML = 'loading ...';

        const quote = await fetchQuote();
        renderQuote(quote);
    });

    fetchQuote()
        // .then((data) => renderQuote(data));
        .then(renderQuote);
}