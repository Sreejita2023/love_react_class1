import React from 'react';
import ReactDOM from 'react-dom/client';
// this 2 are also importing
import './index.css';
// importing index css file in index .js file
import App from './App';
// importing App function from App.js file
// import formatname from './component/practice1';
import greeting from './component/practice2';


const root = ReactDOM.createRoot(document.getElementById('root'));
// we are getting the div element with class root from index.html file

const user={
    firstname:'sreejita',
    lastname:'sen'
};
// const element = (
//     <h1>
//       Hello, {formatname(user)}!
//     </h1>
//   );
const element=greeting();
root.render(
    // <div>
    //     <App />
    //     <h1>hello world</h1>
    //     {element}
    // </div>
    element
);
// here the div in html is replaced by App
