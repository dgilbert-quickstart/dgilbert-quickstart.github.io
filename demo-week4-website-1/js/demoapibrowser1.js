document.getElementById("btnsearch1").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const txtsearch = document.querySelector("#txtsearch");
    const searchmessage = document.querySelector(".searchmessage");

    const _function_name = "btnsearch1";

    //error handling - if an error occurs goto cath statement and print error 

    try 
    {
        
        e.preventDefault();

        if(txtsearch.value === ""){
            searchmessage.innerText = "* please enter search keyword(s)"
            return false;
        }
        else {
            searchmessage.innerText = `* searching for: ${txtsearch.value}`;
        }
    
        output1.innerText = _function_name;

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`;
    }

});

document.getElementById("btnsearch2").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const txtsearch = document.querySelector("#txtsearch");
    const searchmessage = document.querySelector(".searchmessage");

    const _function_name = "btnsearch2";

    //error handling - if an error occurs goto cath statement and print error 

    try 
    {
        
        e.preventDefault();

        
        if(txtsearch.value === ""){
            searchmessage.innerText = "* please enter search keyword(s)"
            return false;
        }
        else {
            searchmessage.innerText = `* searching for: ${txtsearch.value}`;
        }

        output1.innerText = _function_name;

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`;
    }

});

document.getElementById("btnclear").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const searchmessage = document.querySelector(".searchmessage");
    const _function_name = "btnclear";

    //error handling - if an error occurs goto cath statement and print error 
    
    try 
    {
        
        e.preventDefault();

        searchmessage.innerText = "";

        //output1.innerText = _function_name;

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`
    }

});



document.getElementById("btnjqueryex1").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const _function_name = "btnjqueryex1";

    //error handling - if an error occurs goto cath statement and print error 
    
    try 
    {
        
        e.preventDefault();

        output1.innerText = _function_name;

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`
    }

});


document.getElementById("btnjqueryex2").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const _function_name = "btnjqueryex2";

    //error handling - if an error occurs goto cath statement and print error 
    
    try 
    {
        
        e.preventDefault();

        output1.innerText = _function_name;

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`
    }

});

document.getElementById("btnfetchex1").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const _function_name = "btnfetchex1";

    //error handling - if an error occurs goto cath statement and print error 
    
    try 
    {
        
        e.preventDefault();

        output1.innerText = _function_name;

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`
    }

});



document.getElementById("btnfetchex2").addEventListener("click",function(e) {

    const output1 = document.getElementById("output1");
    const _function_name = "btnfetchex2";

    //error handling - if an error occurs goto cath statement and print error 
    
    try 
    {
        
        e.preventDefault();

        output1.innerText = _function_name;

    } catch (error) {
        output1.innerText = `${_function_name}::error ${error}`
    }

});
