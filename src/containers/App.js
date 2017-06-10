import styles from './App.css';

import React from 'react';
import {Button, Icon} from 'react-materialize'
import CSSModules from 'react-css-modules';

import Test from '../components/Test';

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    handleClick() {
        alert('clicked!!!')
    }

    render() {
        return (
            <div>
                <button className="pure-button pure-button-primary">A Primary Button</button>
            </div>
        );
    }
}

export default CSSModules(App, styles);