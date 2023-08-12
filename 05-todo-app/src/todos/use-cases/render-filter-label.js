import todoStore from "../../store/todo.store";

export const renderFilterLabels = (buttons) => {
    todoStore.markFilterLabel(buttons);
}