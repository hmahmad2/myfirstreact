import React from 'react';
import ReactDOM from 'react-dom';

const myFirstElement = <h1>Hello React!</h1>

class Car {
    constructor(name) {
        this.brand = name;
    }
    present() {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model('Ford', "Mustang");
let myModel = myCar.show();

const hello = (val) => 'Hello ' + val;

ReactDOM.render(
    // (myFirstElement,
    // myModel),
    hello("world!"),
    document.getElementById('root')
);