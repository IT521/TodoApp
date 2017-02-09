import {Container} from 'flux/utils';

// Views
import AppView from '../views/AppView';

// Stores
import TodoStore from '../data/TodoStore';
import TodoDraftStore from '../data/TodoDraftStore';
import TodoEditStore from '../data/TodoEditStore';

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
        TodoDraftStore,
        TodoEditStore,
        TodoStore,
        TodoDraftStore,
    ];
}

function getState() {
    return {
        draft: TodoDraftStore.getState(),
        editing: TodoEditStore.getState(),
        todos: TodoStore.getState(),

        onAdd: TodoActions.addTodo,
        onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
        onDeleteTodo: TodoActions.deleteTodo,
        onEditTodo: TodoActions.editTodo,
        onStartEditingTodo: TodoActions.startEditingTodo,
        onStopEditingTodo: TodoActions.stopEditingTodo,
        onToggleAllTodos: TodoActions.toggleAllTodos,
        onToggleTodo: TodoActions.toggleTodo,
        onUpdateDraft: TodoActions.updateDraft,

        areAllComplete: TodoStore.getState().every(todo => todo.complete),
    };
}

export default Container.createFunctional(AppView, getStores, getState);
