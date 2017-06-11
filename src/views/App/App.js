import styles from './App.css';

import React from 'react';
import { Container } from 'flux/utils';
import CSSModules from 'react-css-modules';
import { Card, List, ListItem, FlatButton, Checkbox } from 'material-ui';

import TodoStore from '../../stores/TodoStore';
import TodoActions from '../../actions/TodoActions';
import Test from '../../components/Test';

class App extends React.Component {
    static getStores() {
        return [TodoStore];
    }

    static calculateState() {
        return {
            todos: TodoStore.getState(),
            onDeleteTodo: TodoActions.deleteTodo,
            onToggleTodo: TodoActions.toggleTodo,
        };
    }

    render() {
        return (
            <Card>
                <List>
                    {[...this.state.todos.values()].reverse().map(todo => (
                        <ListItem key={todo.id} className="pure-menu-item">
                            <div>
                                <Checkbox
                                    className="toggle"
                                    type="checkbox"
                                    checked={todo.complete}
                                    onChange={() => this.onToggleTodo(todo.id)}
                                />
                                <label>{todo.text}</label>
                                <FlatButton
                                    label="Delete"
                                    onClick={() => this.onDeleteTodo(todo.id)}
                                />
                            </div>
                        </ListItem>
                    ))}
                </List>
            </Card>
        );
    }
}

export default Container.create(CSSModules(App, styles));