
/*

- javascript global space 

- funcitons progamming 

- functions
    - function parameters , passing functions into a function as parameter 
    - ananymous functions - functions without a name 
    - callback functions 
    - functional programming - defiing functions within another function
    - javascript closure 
    - promise functions
    - async/await functions 
    - es5/es6+ - arrow function - refacror function to anynamous in-line funciotns    

*/

//bind to click event using dom.addEventListener
/*
    - function parameters , passing functions into a function as parameter 
    - ananymous functions - functions without a name 
    - callback functions 
    - functional programming - defiing functions within another function
    - javascript closure     
*/
document.getElementById("btnsearch").addEventListener("click", function(e)
{
    //can cancel or resume button click 
    //continue button click 
    e.preventDefault();
    const output1 = document.getElementById("output1");
    console.log("* btnsearch")
    output1.innerText = "* btnsearch ";
});

document.getElementById("btnclear").addEventListener("click", clearButton);

function clearButton(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    let = _msg = "btnclear";   
    console.log(_msg)
    output1.innerText = _msg;
}