import './App.css';
import './AppIndex.css';
import Header from './components/Header';
import {useEffect, useState} from "react";

function App() {

  //state/data/variable is initialized each time the parent functional/component is called
  //local/temp state is not saved on each call
  //non-closure 
  const a = 0;

  //functionsl component data/state - ie: closure - saving data inside a parent functional/component/function
  //state is saved each time the function is called
  //closure variables - saves state 
  //-- example of array destrucroring - creating variable(s) from an array
  //-- state variable, state variable-updater
  const [count, setCount] = useState(0);

  //diplay state {count}
  //update state to a new value and not maintaining previous value 
  //setCount(1)
  //setCount((prevcount)=>1) -- reccomended 

  //update state - mainiting previous value 
  //setCount(count + 1)  -- not reccomended: update state, react does not maintain state when screen refresh 
  //setCount((prevcount) => prevcount+1) -- reccomended: best practice: use callback/closure/arrow function - maintains state when ui is refreshed
  
  //-- useEffect - functional component lifecycle hook 
  //-- add useEffect in any react function/functional component 
  //## can create multiple useEffects ##

  useEffect(()=>{
    //-- 1. can be configured to run 1 time, when parent function starts, exit, ie: []
    //-- 2. runs when a specified state/data is updated, [count]
    //-- 3. can be configured to run continiously/recursivly whenever any state is updated.  ie: continous screen refresh  
  }); 

  return (
    <div className="container">
      <Header title="React Demo Website 1.0.4"/>
      <header>
        <p>
          Introduction to React 18+
        </p> 
      </header>
      <div>
        <span>display info: {count} - a: {a}</span>
      </div>
      <div className='output1'>
      </div>      
      <div className="action">
          <button>ex1</button>
          <button>ex2</button>
      </div>
    </div>
  );
}

export default App;
