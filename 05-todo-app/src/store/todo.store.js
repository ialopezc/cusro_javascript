import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
}


const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Pierda del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del realidad'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore();
}

const loadStore = () => {
    if (!localStorage.getItem('state')) return;

    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;

    setFliter(state.filter);
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid.`)
    }
}

const addTodo = (description) => {
    if (!description) throw new Error('description is required');
    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
}

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStateToLocalStorage();
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

const setFliter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFliter = () => {
    return state.filter;
}

const markFilterLabel = (buttons) => {
    console.log(buttons);
    buttons.forEach(element => element.classList.remove('selected'));
    buttons.forEach(element => {
        console.log(element);
        switch (element.text) {
            case 'Todos':
                if(state.filter === Filters.All) element.classList.add('selected');
                break;
            case 'Pendientes':
                if(state.filter === Filters.Pending) element.classList.add('selected');
                break;
            case 'Completados':
                if(state.filter === Filters.Completed) element.classList.add('selected');
                break;
        }
    });
}

export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFliter,
    getCurrentFliter,
    markFilterLabel,
}