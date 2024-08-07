import './App.css';
import './AppIndex.css';
import Header from './components/Header';
import {useEffect, useState, useRef} from "react";

//-- outside (App.js) appliction global/context - state/date 
//-- functional programming/closures can access inner and outer state/data 

function App() {

  //state/data/variable is initialized each time the parent functional/component is called
  //local/temp state is not saved on each call or app refresh
  //non-closure 
  let a = 0;

  //useRef -- track variaable without using useState
  //let b = useRef(0);

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
  //setCount(()=>1) -- reccomended 

  //update state - mainiting previous value 
  //setCount(count + 1)  -- not reccomended: update state, react does not maintain state when screen refresh 
  //count = count + 1
  //-- ----------------------------------------------------------
  //-- infinate loop - react re-renders / refresh screen when a useSate variable is updated / continuiously/recursivly
  //-- useEffect to update state/data - 1+ times 
  //-- ----------------------------------------------------------
  //setCount((prevcount) => prevcount+1); //-- reccomended: best practice: use callback/closure/arrow function - maintains state when ui is refreshed
  
  //-- useEffect - functional component lifecycle hook 
  //-- add useEffect in any react function/functional component 
  //## can create multiple useEffects ##

  //-- 1. can be configured to run 1 time, when parent function starts, exit, ie: []
  //-- 2. runs when a specified state/data is updated, [count]
  //-- 3. can be configured to run continiously/recursivly whenever any state is updated.  ie: continous screen refresh  

  useEffect(()=>{
    //-- 1. can be configured to run 1 time, when parent function starts, exit, ie: []    
    
    /*
      Line 49:10:  Assignments to the 'a' variable from inside React Hook useEffect 
      will be lost after each render. To preserve the value over time, store it in 
      a useRef Hook and keep the mutable value in the '.current' property. Otherwise, 
      you can move this variable directly inside useEffect  react-hooks/exhaustive-deps
    */
    a += 1;
    //setCount((prevcount) => prevcount+1);

    //run when component is removed from memory ie: when un-load component from screen
  },[]); 
    
  useEffect(()=>{
    //-- 2. runs when a specified state/data is updated, [count]    

    //-- ----------------------------------------------------------
    //-- infinate loop - react re-renders / refresh screen when a useSate variable is updated / continuiously/recursivly
    //-- useEffect to update state/data - 1+ times 
    //-- ----------------------------------------------------------
    //setCount((prevcount) => prevcount+1);

    //run when component is removed from memory ie: when un-load component from screen
    
  },[count]); //or multiple variables [count,other]
  
  useEffect(()=>{
    //-- 3. can be configured to run continiously/recursivly whenever any state is updated.  ie: continous screen refresh  
    //-- run code on every state/update or screen refresh 
    
    //-- ----------------------------------------------------------
    //-- infinate loop - react re-renders / refresh screen when a useSate variable is updated / continuiously/recursivly
    //-- useEffect to update state/data - 1+ times 
    //-- ----------------------------------------------------------
    //setCount((prevcount) => prevcount+1);
    
    //run when component is removed from memory ie: when un-load component from screen

  }); //default -- runs recursivly/infinetly

  function subtractCnt()
  {
    setCount((prevcount) => prevcount-1);
  }
  
  return (
    <div className="container">
      <Header title="React Demo Website 1.0.6"/>
      <header>
        <p>
          Introduction to React 18+
        </p> 
      </header>
      <div>
        <span>display info: {count} - a: {a} </span>
        <button onClick={()=>setCount((prevcnt)=>prevcnt+1)}>+</button>
        {" "}
        <button onClick={subtractCnt}>-</button>
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
