import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state={
    stringDisplay: 'Hello Celestine'
  }
}

  render() {                                                  //render method; we have access to the render method in a class component
    return(                                                   //html goes in here
      <div className="App">                                   {/* JSX uses the syntax of className to distinguish between a HTML class, vs a class in JS (line 5)  */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />    {/* Whatever that's inside the {} is a javascript expression - logo is a variable which we imported */}
        
        {/* <p>Hello Celest</p> */}
        <p>{this.state.stringDisplay}</p>                     {/* this.state.stringDisplay is also a variable which is referring to a particular state.It's a js expression, something that produces a value */}
        <button onClick={() => this.setState({ stringDisplay: 'Hello Chris' })}>Change Text</button>
      </header>
    </div>
    )
  }
}

export default App;


/* older versions of c-r-a started with class components instead of function components 
function App() {          //function component; function called App that returns a block of html 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
