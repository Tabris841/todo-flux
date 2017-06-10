import styles from './Test.css';

import React from 'react';
import CSSModules from 'react-css-modules';

class Test extends React.Component {

    constructor(props) {
        super(props)
    }

    handleClick() {
        alert('clicked!!!')
    }

    render() {
        return (
            <div>
                <button onClick={::this.handleClick} styleName="custom-button">Click me</button>
            </div>
        );
    }
}

export default CSSModules(Test, styles);