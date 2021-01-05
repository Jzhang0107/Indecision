// install -> import -> use

import React from 'react';
import ReactDOM, { render } from 'react-dom';

class HelloWorld extends React.Component
{
    render()
    {
        return(
            <p>Regina is cute!</p>
        );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));