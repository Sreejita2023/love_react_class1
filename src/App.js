
import './App.css';
// importing css file
import Item  from './component/item';
// importing item from component folder item js file
// jo file use karna chahte hai usko import karte hai
import Itemdate from './component/itemdate';
const randomNum = require('random-num')
function App() {
  // const itemname2="jamini";
  const response=[
    {
      name:"nirma",
    },
    {
      name:"nirma1",
    },
    {
      name:"nirma2",
    }

  ]
  return (
    <div>
        {/* we have to send different sibling file through a common
        parent file */}
        
        <Item name={response[0].name}>
            but i love this thing so beautiful
        </Item>
        <Itemdate date="20" month="sept" year="2023"></Itemdate>
        <Item name={response[1].name}></Item>
        <Itemdate date="20" month="oct" year="1993"></Itemdate>
        <Item name={response[2].name}></Item>
        <Itemdate date="20" month="jan" year="2000"></Itemdate>
        <div className="App">
           {/* class name denotes the class of  html element present in js */}
         <header className="App-header">
            <h1>{(randomNum(1,100))}</h1>
         </header>
       </div>
    </div>
  );
}

export default App;
