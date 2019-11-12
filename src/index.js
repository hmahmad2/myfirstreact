import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './App.js';

// class Car extends Component {
//     constructor(props) {
//         super(props);
//         // keep the properties of the component in the state
//         this.state = {
//             brand: "Ford",
//             model: "Mustang",
//             color: "red",
//             year: 1964
//         };
//     }
    
//     // use setState() to change a value in the state object
//     changeColor = () => {
//         this.setState({color: "blue"});
//     }

//     render () {
//         // return <h2>Hi, I am a {this.props.color} Car!</h2>;
//         return  (
//             <div>
//                 <h1>My {this.state.brand}</h1>
//                 <p>
//                     It is a {this.state.color + " "} 
//                     {this.state.model + " "}
//                     from {this.state.year}.
//                 </p>
//                 <button
//                     type="button"
//                     onClick={this.changeColor}
//                 >Change color</button>
//             </div>
//         );
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
    // <Car />,
    // <Garage />,
    // <Car />,
    // myelement,
    <Header />,
    document.getElementById('root')
);