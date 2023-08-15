import { saludar } from './js/componentes';
import './styles.css';

// const saludar = (nombre) => {
//     console.log('creando etiqueta h1');
//     const h1 = document.createElement('h1');
//     h1.innerText = `Hola, ${nombre}`;
//     document.body.append(h1);
// }

const nombre = 'Isaac';

saludar(nombre);