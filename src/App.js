import React from 'react';
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

class Car extends React.Component {
    render() {
        return <h2>Hi, I am a {this.props.brand} Car!</h2>;
    }
}

// export default App;
// This component, we will use in another file. Hence the export
export default Car;
