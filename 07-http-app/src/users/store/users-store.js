import { User } from "../models/user";
import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage = async () => {
    if (state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);

    state.currentPage -= 1;
    state.users = users;
}

//ToDo: implementar
/**
 * 
 * @param {User} updatedUser 
 */
const onUserChanged = (updatedUser) => {
    state.users = state.users.map((user) => {
        if (user.id === updatedUser.id) return updatedUser;
        return user;
    });

    if (state.users.length < 10) state.users.push(updatedUser);
}

//Fixme:
const reloadPage = async () => {
    const users = await loadUsersByPage(state.currentPage);

    state.users = users;
    if (users.length === 0) {
        await loadPreviousPage();
        return
    }
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    /**
     * @returns {Users[]} Users
     */
    getUsers: () => [...state.users],
    /**
     * @returns {Number} Pages
     */
    getCurrentPage: () => state.currentPage,
}