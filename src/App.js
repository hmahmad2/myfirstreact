import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// // import logo from './logo.svg';
// // import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello, world!</h1>
//       </div>
//     );
//   }
// }

class Car extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        // Implies that brand is an object in and of itself
        // return <h2>Hi, I am a {this.props.brand.model} Car!</h2>;
        return <h2>Hi, I am a {this.props.model} Car!</h2>;
    }
}

// export default App;
// This component, we will use in another file. Hence the export
export default Car;
