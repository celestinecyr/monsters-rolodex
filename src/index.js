import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* ReactDOM library calls render and then it renders App function in the form of what looks like  HTML tag,
 line 10: its looking on the document object for some elements with an id of root and 
 its replaced by App function that returns HTML

index.html is the entry point.
*/ 

