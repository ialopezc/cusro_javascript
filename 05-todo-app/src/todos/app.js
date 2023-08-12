import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos, renderPending, renderFilterLabels } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompletedButton: '.clear-completed',
    FiltersButton: '.filtro',
    PendingCount: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {
    const updateFiltersButtons = () => {
        const todosFiltersButton = document.querySelectorAll(ElementIDs.FiltersButton);
        renderFilterLabels(todosFiltersButton);
    }

    const updatePendingCount = () => {
        renderPending(ElementIDs.PendingCount);
    }

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFliter());
        renderTodos(ElementIDs.TodoList, todos);
        updatePendingCount();
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
        updateFiltersButtons();
    })();

    //Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value.trim());
        displayTodos();
        event.target.value = "";
    });

    const todoToggle = document.querySelector(ElementIDs.TodoList);
    todoToggle.addEventListener('click', (event) => {
        if (event.target.className !== 'toggle') return;
        const dataId = event.target.closest('[data-id]');
        todoStore.toggleTodo(dataId.getAttribute('data-id'));
        displayTodos();
    });

    const todoDestroy = document.querySelector(ElementIDs.TodoList);
    todoDestroy.addEventListener('click', (event) => {
        if (event.target.className !== 'destroy') return;
        const dataId = event.target.closest('[data-id]');
        todoStore.deleteTodo(dataId.getAttribute('data-id'));
        displayTodos();
    });

    // const todoEdit = document.querySelector(ElementIDs.TodoList);
    // todoEdit.addEventListener('dblclick', (event) => {
    //     // console.log(event.target);
    //     // const dataId = event.target.closest('[data-id]');
    //     // console.log(dataId)
    //     // displayTodos();
    // });

    const todosClearCompletedButton = document.querySelector(ElementIDs.ClearCompletedButton);
    todosClearCompletedButton.addEventListener('click', (event) => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    const todosFiltersButton = document.querySelectorAll(ElementIDs.FiltersButton);
    todosFiltersButton.forEach(element => {
        element.addEventListener('click', (element0) => {
            todosFiltersButton.forEach(element1 => element1.classList.remove('selected'));
            element0.target.classList.add('selected');
            switch (element0.target.text) {
                case 'Todos':
                    todoStore.setFliter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFliter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFliter(Filters.Completed);
                    break;
                default:
                    todoStore.setFliter(Filters.All);
            }

            displayTodos();
        });
    });
}