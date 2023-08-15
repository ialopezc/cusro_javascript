const superHeroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    },
    {
        id: 3,
        name: 'Flash',
    },
    {
        id: 4,
        name: 'Aquaman',
    },
];
// Solo para primitivos
// const superHeroesCopy = [...superHeroes.map(h => ({...h}))];
// Alternativa
// const superHeroesCopy = JSON.parse(JSON.stringify(superHeroes));
// Definitiva
const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = 'Green Lantern';

console.table(superHeroes);
console.table(superHeroesCopy);