import './render-modal.css';
import modalHTML from './render-modal.html?raw';
import { User } from '../../models/user';
import { getUserById } from '../../use-cases/get-user-by-id';

let modal, form, loadedUser = {};

/**
 * 
 * @param {String|Number} id
 */
//ToDo cargar usuario por ID
export const showModal = async (id) => {
    modal?.classList.remove('hide-modal');
    loadedUser = {}
    if (!id) return;
    const user = await getUserById(id);
    setFormValues(user);
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    //ToDo Reset del Fomrulario
    form?.reset();
}

/**
 * 
 * @param {User} user
 */
const setFormValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user;
}

/**
 * @param {HTMLDivElement} element 
 * @param {(userLike) => promise<void>} callback
 */
export const renderModal = (element, callback) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.classList.add('modal-container');
    modal.classList.add('hide-modal');
    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        console.log(event.target.className);
        if (event.target.className === 'modal-container') hideModal();
    });

    form.addEventListener('submit', async (event) => {
        // console.log(event);
        event.preventDefault();
        // console.log('Formulario enviado');

        const formData = new FormData(form);
        const userLike = { ...loadedUser };

        for (const [key, value] of formData) {
            // console.log(key, value);
            if (key === 'balance') {
                userLike[key] = Number(value);
                continue;
            }
            if (key === 'isActive') {
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }

            userLike[key] = value;
        }
        // console.log(userLike);

        //ToDo guardar usuarios
        await callback(userLike);

        hideModal();
    });

    element.append(modal);
}