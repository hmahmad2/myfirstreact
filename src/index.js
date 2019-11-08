import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

// class Car extends React.Component {
//     constructor(props) {
//         super(props);
//         // keep the properties of the component in the state
//         // this.state = {
//         //     color: "red"
//         // };
//     }
    
//     render () {
//         // return <h2>Hi, I am a {this.props.color} Car!</h2>;
//         return <h2>I am a Car!</h2>;
//     }
// }

// class Garage extends React.Component {
//     render() {
//         const carinfo = {
//             // name: "Ford",
//             model: "Mustang"
//         };
//         return (
//             <div>
//                 <h1>Who lives in my Garage?</h1>
//                 {/* Components in components */}
//                 <Car brand={carinfo} />
//             </div>
//         );
//     }
// }

// function Car() {
//     return <h2>Hi, I am also a Car!</h2>;
// }

// const myelement = <Car brand="Ford" />;

ReactDOM.render(
    // {/* <h1>Hello, World!</h1>, */}
    // Use props to send an atribute from here to the render() in Car
    <Car model="Mustang" />,
    // <Garage />,
    // <Car />,
    // myelement,
    document.getElementById('root')
);