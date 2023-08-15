const state = [
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

const index = 1;
const newName = 'Green Lantern';

// const newState = state.map((hero, i) => {
//     if (i === index) {
//         hero.name = newName;
//     }
//     return { ...hero };
// });

// const newState = structuredClone(state).with(index, {
//     id:1000,
//     name: newName,
// });

const newState = state.with(index, {
    // ...state[index],
    ...state.at(index),
    // id:1000,
    name: newName,
});

state[0].name = 'Volcan Negro';

console.table(state);
console.table(newState);

console.log('Ultimo dato de una arreglo: ', state[state.length - 1]);
console.log('Ultimo dato de una arreglo: ', state.at(-1));