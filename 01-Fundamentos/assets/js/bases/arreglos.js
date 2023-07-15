// const arr = new Array(10);
// const arr = [];

// console.log(arr);

// let videojuegos = ['Mario Bros', ' Megaman', 'Street Figther'];
// console.log({videojuegos});
// console.table(videojuegos);

// console.log(videojuegos[1]);


let juegos = ['Mario Bros', ' Megaman', 'Street Figther'];
console.log('Largo', juegos.length);

juegos.forEach((value, index) => {
    console.log({ value, index });
});