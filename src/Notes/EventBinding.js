import React, { Component } from 'react';

export class EventBinding extends Component {
    constructor(){
        super();
        this.handleClick2 = this.handleClick1.bind(this);
    }

    handleClick1() {
        console.log("button 1 clicked");
    }

    handleClick3 = () => console.log("button 3 clicked");

    render() {
        return(
            <div>
            {/* 4 DIFFERENT WAYS OF HANDLING THE HANDLE CLICK FUNCTIONS */}
                <button onClick={this.handleClick1()}>Click 1</button>                  {/* This one runs the function */}
                <button onClick={this.handleClick1}>Click 2</button>                    {/* this is inside the component, also logs button 1 clicked */}
                <button onClick={this.handleClick2}>Click 3</button>
                <button onClick={this.handleClick3}>Click 4</button>                   {/* handleClick3 is a function, but becos its part of a class component, we call it a method that's using arrow functions */}
            </div>
        )
    }
}

//export default EventBinding;

/* CONSOLE */
// button 1 clicked                                 Haven't clicked anything yet but this appears, because we are invoking the function whenever we render.
                                                    //So when react renders this ^, it runs the funcion. This is why we don't call a function when its an event handler, we assign it a function so that whne the evnt happens
// button 1 clicked

/*button 1 clicked                                 //when we click 2, we will be undefined ifwe try to 
                                                    handleClick1() {
                                                        console.log("this");                //this actually refers to the actual button..
                
                                                    } */
// button 1 clicked


// button 3 clicked