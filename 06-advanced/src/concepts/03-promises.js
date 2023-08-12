import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHero = (hero1, hero2) => {
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        `;
    }

    const renderError = (error) => {
        element.innerHTML = error;
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371fd55e2e2a30fe1ccb1';

    // // Forma 1
    // findHero(id1).then((superHero) => renderHero(superHero));

    // // Forma 2
    // findHero(id1)
    //     .then(renderHero)
    //     .catch(renderError);

    // // Forma 3
    // findHero(id1)
    //     .then((hero1) => {
    //         findHero(id2)
    //             .then((hero2) => {
    //                 renderTwoHero(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError);

    // // Forma 4
    // let hero1;
    // findHero(id1)
    //     .then((hero) => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     })
    //     .then((hero2) => {
    //         renderTwoHero(hero1, hero2);
    //     })
    //     .catch(renderError);

    // Forma 5
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
        .then(([hero1, hero2]) => renderTwoHero(hero1, hero2))
        .catch(renderError);
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);
        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${id} not found`);
    });
}