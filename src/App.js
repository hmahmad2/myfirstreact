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

// class Car extends Component {
//     constructor (props) {
//         super(props);
//     }
//     render() {
//         // Implies that brand is an object in and of itself
//         // return <h2>Hi, I am a {this.props.brand.model} Car!</h2>;
//         return <h2>Hi, I am a {this.props.model} Car!</h2>;
//     }
// }

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritecolor: "red"
        };
    }

    // This can allow us to set the state object based on the inital props
    // called right before rendering the elements in the DOM
    // static getDerivedStateFromProps(props, state) {
    //     return {favoritecolor: props.favcol};
    // }

    // called after the component is rendered.
    // run statements here that require the component already in DOM
    componentDidMount() {
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    render() {
        return (
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

// export default App;
// This component, we will use in another file. Hence the export
export default Header;
