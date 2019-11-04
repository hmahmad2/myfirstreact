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

// class Header {
//     constructor() {
//         this.color = "Red";
//     }

//     // Regular function
//     changeColor = function () {
//         document.getElementById("demo")
//     }
// }

// Let's stick everything I want to render in an array,
// because doing them individually in the render() function
// does not work. At all.
let renderMe = [];
renderMe.push(myFirstElement, myModel, <br></br>, hello('World!'));

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>
}

function App() {
    return (
        <div>
            <Welcome name="Steve" />
            <Welcome name="Angelica" />
            <Welcome name="Gaylord" />
        </div>
    )
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className = "UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment.date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'Am I enjoying learning React... ? Sure.',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

ReactDOM.render(
    // (myFirstElement,
    // myModel,
    // // hello("world!"),
    // <p>Hello</p>),
    // renderMe,
    // <App />,
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    document.getElementById('root')
);