import 'babel-polyfill';
import 'purecss';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App';

const app = document.createElement('div');
app.id = 'root';
document.body.appendChild(app);

const render = Component  => {
  ReactDOM.render(
    <AppContainer>
      <Component  />
    </AppContainer>,
    app
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App));
}