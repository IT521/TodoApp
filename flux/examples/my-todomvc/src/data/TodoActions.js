import TodoDispatcher from './TodoDispatcher';

// Action Types
import TodoActionTypes from './TodoActionTypes';

const Actions = {
    addTodo(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text,
        });
    },

    deleteTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DELETE_TODO,
            id,
        });
    },

    toggleTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id,
        });
    },
};

export default Actions;
