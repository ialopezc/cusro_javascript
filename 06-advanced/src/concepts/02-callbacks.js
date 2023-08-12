import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';
    findHeroe(id1, (error, cualqueirnombre1) => {
        if(error) element.innerHTML = error;
        
        findHeroe(id2, (error, cualqueirnombre2) => {
            if(error) element.innerHTML = error;
            element.innerHTML = `${cualqueirnombre1.name} | ${cualqueirnombre2.name}`;
        });
    });
}

/**
 * 
 * @param {String} id 
 * @param {(error: String|null, hero: object)=> void} callback 
 */
const findHeroe = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        callback(`hero with id ${id} not found.`);
        return;
    }
    callback(null, hero);
}