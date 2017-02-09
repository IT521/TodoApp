import TodoDispatcher from './TodoDispatcher';

import {ReduceStore} from 'flux/utils';

import TodoActionTypes from './TodoActionTypes';

class TodoEditStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return '';
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.START_EDITING_TODO:
                return action.id;

            case TodoActionTypes.STOP_EDITING_TODO:
                return '';

            default:
                return state;
        }
    }
}

export default new TodoEditStore();
