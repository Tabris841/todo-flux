import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

import { App } from './views';

const app = document.createElement('div');
app.id = 'root';
document.body.appendChild(app);

const render = Component => {
    ReactDOM.render(
        <MuiThemeProvider>
            <AppContainer>
                <Component  />
            </AppContainer>
        </MuiThemeProvider>,
        app
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./views', () => render(App));
}

import TodoActions from './actions/TodoActions';

TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');