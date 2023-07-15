import { Todo } from "../todos/models/todo.model";

const filter = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}


const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Pierda del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: filter.All,
}

const initStore = () => {
    console.log(state);
    console.log('Init Store');
}

const loadStore = () => {
    throw new Error('Not implemented');
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
    state.todos.push(new Todo(descriptionn));
}

const toggleTodo = (todoId) => {
    throw new Error('Not implemented');
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
}

const setFliter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const setCurrentFliter = () => {
    return state.filter;
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
    setCurrentFliter
}