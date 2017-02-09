import {Container} from 'flux/utils';

// Views
import AppView from '../views/AppView';

// Stores
import TodoStore from '../data/TodoStore';
import TodoDraftStore from '../data/TodoDraftStore';

// Actions
import TodoActions from '../data/TodoActions';

// Add a few initial todos
TodoActions.addTodo('Demo TodoApp 0.1');
TodoActions.addTodo('Add functionality... Demo TodoApp 0.2');
TodoActions.addTodo('Add functionality... Demo TodoApp 0.3');
TodoActions.addTodo('Add functionality... Demo TodoApp 0.4');
TodoActions.addTodo('Add functionality... Demo TodoApp 1.0');
TodoActions.addTodo('Complete demo');

function getStores() {
    return [
        TodoStore,
        TodoDraftStore,
    ];
}

function getState() {
    return {
        draft: TodoDraftStore.getState(),
        todos: TodoStore.getState(),

        onAdd: TodoActions.addTodo,
        onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
        onDeleteTodo: TodoActions.deleteTodo,
        onToggleTodo: TodoActions.toggleTodo,
        onUpdateDraft: TodoActions.updateDraft,
    };
}

export default Container.createFunctional(AppView, getStores, getState);
