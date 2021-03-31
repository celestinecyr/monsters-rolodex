import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
    //console.log(props);                     //prints: Hey, im passing in a prop  [App.js line 28]
    
    return(
        <div className='card-list'>
            {props.monsters.map(monster => (
                //<h1 key={monster.id}> {monster.name}</h1>
                <Card key={monster.id} monster={monster} />             //passing monster into the Card Component
            ))}
        </div>
    )
}

/*
1) one of the main things of components is that they take in something called props.
props is gonna be the parameter that we get from our functional component

2) one of the main properties that exists on this props obj is one called children, and it'll always be there. Even if theres no children it'll be null 
What are children?
Children are actl what you pass in between the brackets of our component --> anything between the customised element tags - <> </>

e.g. <CardList name='im a prop'> HelloTesting </CardList> 

then props = name='im a prop' , and
children = HelloTesting

3) There are 2 ways to access props:
    1. passing in props as the parameter (Cardlist Example)
    2. Using the this keyword in our App Component. it gets attached to our actual class as a property called Props, eg if we want to access it we will use this.props 
*/