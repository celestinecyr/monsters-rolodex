import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state={
      monsters: [
        {
          name: 'Frankenstein',
          id: 'mon1'
        },
        {
          name: 'Dracular',
          id: 'mon2'
        },
        {
          name: 'Zombie',
          id: 'mon3'
        }
      ]
    };
  }

  render() {                                                  
    return(                                                  
      <div className="App">                                  
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}> { monster.name } </h1>           //need unique key because react needs to know what element needs updating, if one of the element in the array has a value that is gna change
        ))}      
        
        {/* 
          Map returns us the return of whatever function we passed to it iterated over every element in this array
          Map takes the function where the first argument is going to be the actual element that this function is going to get called on
          usually its a new array when we call map but react is smart enough to know that if we end up rendering out a bunch of html blocks
          right in an array then it'll just display those elements.
        */}

        {/* Note:
          A good rule of thumb as to when to use the key attribute you saw in the previous video, is this: Anytime you use the map() function inside of render, 
          or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)

          Appendix 
         */}
      </div>
    )
  }

}

export default App;