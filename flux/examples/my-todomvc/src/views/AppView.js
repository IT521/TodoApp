import React from 'react';

function AppView(props) {
    return (
        <div>
            <Header {...props} />
            <Main {...props} />
            <Footer {...props} />
        </div>
    );
}

function Header(props) {
    return (
        <header id="header">
            <h1>Todos</h1>
            <h3>An Introduction to the React Flux Architecture</h3>
            <NewTodo {...props} />
        </header>
    );
}

function Main(props) {
    if (props.todos.size === 0) {
        return null;
    }
    const dataTip = props.areAllComplete ? 'Mark all as incomplete' : 'Mark all as complete';
    return (
        <section id="main">
            <div data-tip={dataTip}>
                <input
                    checked={props.areAllComplete ? 'checked' : ''}
                    id="toggle-all"
                    type="checkbox"
                    onChange={props.onToggleAllTodos}
                />
            </div>
            <ul id="todo-list">
                {[...props.todos.values()].reverse().map(todo => (
                    <li key={todo.id}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => props.onToggleTodo(todo.id)}
                            />
                            <label>{todo.text}</label>
                            <button
                                className="destroy"
                                onClick={() => props.onDeleteTodo(todo.id)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const ENTER_KEY_CODE = 13;
function NewTodo(props) {
    const addTodo = () => props.onAdd(props.draft);
    const onBlur = () => addTodo();
    const onChange = (event) => props.onUpdateDraft(event.target.value);
    const onKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            addTodo();
        }
    };
    return (
        <input
            autoFocus={true}
            id="new-todo"
            placeholder="What needs to be done?"
            value={props.draft}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
}

function Footer(props) {
    if (props.todos.size === 0) {
        return null;
    }

    const remaining = props.todos.filter(todo => !todo.complete).size;
    const completed = props.todos.size - remaining;
    const phrase = remaining === 1 ? ' item left' : ' items left';

    let clearCompletedButton = null;
    if (completed > 0) {
        clearCompletedButton =
            (<button
                id="clear-completed"
                onClick={props.onDeleteCompletedTodos}>
                Clear completed ({completed})
            </button>);
    }

    return (
        <footer id="footer">
          <span id="todo-count">
            <strong>
              {remaining}
            </strong>
              {phrase}
          </span>
            {clearCompletedButton}
        </footer>
    );
}

export default AppView;
