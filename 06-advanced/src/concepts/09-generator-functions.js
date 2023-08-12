/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {
    // const myGenerator = myFirstGeneratorFunction();
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());
    // console.log(myGenerator.next());

    const genId = idGenerator();
    //  console.log(genId.next());
    //  console.log(genId.next());
    //  console.log(genId.next());
    //  console.log(genId.next());
    //  console.log(genId.next());

    const button = document.createElement('button');
    button.innerHTML = 'Click me';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', (event) => renderButton());
}

function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return 'no hay valores';
    yield 'Ya no puedo hacer nada';
}