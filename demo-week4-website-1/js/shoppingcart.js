
/*

- javascript global space 

- funcitonal progamming - ie: R, MatLab, Python, Other 

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

document.getElementById("btnclose-addnew").addEventListener("click", function(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    const additemform = document.querySelector(".addnewitem");

    _msg = "btnclose-addnew"
    console.log(_msg)
    output1.innerText = _msg;

    additemform.style.display = "none";
});

document.getElementById("btnaddnew").addEventListener("click", function(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    const addnewmessage = document.getElementById("addnewitem-message");
    const txtaddname = document.getElementById("txtname-new");
    const txtaddprice = document.getElementById("txtprice-new");
    
    //-- javascript local scope, global scope 
    //-- Application Refactor
    //-- application global data store /state/ ie: cookies, localstorage, sessionstorage, indexdb, react/redux 
    //-- BrowserDev Tools to provew application date/state 
    // create shopping cart array 
    let _shoppingcart = [];

    //validate only add max 10 items 

    if(txtaddname.value === "")
    {
        const _msg = "* please enter a name";
        addnewmessage.innerText = _msg;
        return false;
    }
    else if(txtaddprice.value === "")
    {
        const _msg = "* please enter a price";
        addnewmessage.innerText = _msg;
        return false;
    }

    //convert string to number - parseFloat()
    const _price = parseFloat(txtaddprice.value);
    //format number to fixed to 2 decimal places, _price.toFixed(2)
    //validate number isNan() - ie: abc, 1ab
    //error handling 

    //create a new shoppingcart entry/object ie: {name, price}
    //javascript object = json document, NOSQL ie: mongodb and other systems 
    var _cartitem = {name:txtaddname, price:_price};

    //add shoppingcart entry/object to ul/list
    _shoppingcart.push(_cartitem);

    let _total = 0.0;
    //update ui/li with cart item 
    for(let i=0;i<_shoppingcart.length;i++)
    {
        //use Dom.CreateElement, appendChild 
        output1.innerHTML = output1.innerHTML + _shoppingcart[i] + "<br/>";
        _total = _total + _price;
    }

    //update total field 

    _msg = "btnaddnew"
    console.log(_msg)
    //output1.innerText = _msg;
});

document.getElementById("btnclear-addnew").addEventListener("click", function(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    _msg = "btnclear-addnew"
    console.log(_msg)
    output1.innerText = _msg;
});

document.getElementById("btnaddnewitem").addEventListener("click", function(e)
{
    e.preventDefault();
    const output1 = document.getElementById("output1");
    const additemform = document.querySelector(".addnewitem");

    _msg = "bntaddnewitem"
    console.log(_msg)
    output1.innerText = _msg;

    additemform.style.display = "block";

});
