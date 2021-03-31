import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state={
      monsters: []     //{name: 'Frankenstein', id: 'mon1'}, {name: 'Dracular',id: 'mon2'},{name: 'Zombie',id: 'mon3'}
    //empty array ^, we don't wanna hard code this anymore. Now, we're just going to wait for our component to mount and then fetch all the
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')                            //fetch returns us a promise
    //.then(response => console.log(response)                                      //that promise gives us some response of the actual body of our response but we dont know what that looks like at first, so we consolelog first to see whats in the 'database'
    .then(response => response.json())                                           //if we just type response, we wouldn't rly understand what's shown so we get the response back in json format which we want
    //then, this ^ will get returned to us as a new promise which we will now (v) have as the body, aka the user array
    //.then(users => console.log(users))
    .then(users => this.setState({ monsters: users }));                           //now we call setState as we did before; but now we set monsters to user array
    }


  render() {                                                  
    return(   
      <div className="App"> 
        <CardList monsters={this.state.monsters} />               {/* The prop is gg to be an obj of any properties that i write onto this component where it gets used*/}                                                                      
      </div>
    )
  }
}
export default App;

/* 
  Map returns us the return of whatever function we passed to it iterated over every element in this array
  Map takes the function where the first argument is going to be the actual element that this function is going to get called on
  usually its a new array when we call map but react is smart enough to know that if we end up rendering out a bunch of html blocks
  right in an array then it'll just display those elements.

Note:
  A good rule of thumb as to when to use the key attribute you saw in the previous video, is this: Anytime you use the map() function inside of render, 
  or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)
*/