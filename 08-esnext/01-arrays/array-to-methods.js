const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
const copyHeroes = [...heroes];
// heroes.sort();
const toSortedHeroes = heroes.toSorted();
// heroes.reverse();
const toReversedHeroes = heroes.toReversed();
// Muestra los borrados
// const spliceHeroes = heroes.splice(0, 2, 'Green Lantern');
// Muestra los no borrados
const toSplicedHeroes = heroes.toSpliced(0, 2, 'Green Lantern');

console.table(heroes);
console.table(copyHeroes);
console.table(toSortedHeroes);
console.table(toReversedHeroes);
// console.table(spliceHeroes);
console.table(toSplicedHeroes);