import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    constructor() {
        super();
        // keep the properties of the component in the state
        this.state = {
            color: "red"
        };
    }
    
    render () {
        return <h2>Hi, I am a {this.state.color} Car!</h2>;
    }
}

// function Car() {
//     return <h2>Hi, I am also a Car!</h2>;
// }

ReactDOM.render(
    // {/* <h1>Hello, World!</h1>, */}
    <Car />,
    document.getElementById('root')
);