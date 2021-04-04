import React from 'react';              //imrc

import './search-box.styles.css';

export const SearchBox = ( {placeholder, handleChange} ) => (
    <input 
    className="search"
    type='search' 
    placeholder={placeholder}                                                           //we wanna keep this dynamic because not all search boxes are for monsters. so we destructure
    // onChange={ event => console.log(event.target.value) }
    // onChange={ e => this.setState({ searchField: e.target.value }) }                 //Destructure this as well:
    onChange={handleChange}
  />  
)

//export default SearchBox;


/*
FUNTIONAL COMPONENT
1. Don't have access to (internal) state bc no access to constructor, which comes from the class method on our { Component } imported from react 
2. No access to lifecycle methods, bc we dont always need to use lifecycle methods. Sometimes, all we wanna do is to render some HTML and that is what a func compo is for
3. Unlike a class compo, a functional compo is just a compo that gets some props and returns some HTML.
*/

/*
Why do we not add state in searchbox??

*/