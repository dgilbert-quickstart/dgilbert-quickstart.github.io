//----------------------------------
//-- global scope -- 
//----------------------------------

//javasript callback- javascipt calls function when button is clicked
//-or- ananymous function - function without a name
//-or- es5+ array (e) => {}
//functional programming/closure - access data from global scope or local scope

//
//functional programming - used in recursive programming ie: looping algorithems and other development
//- arrays, list, etc..
// often used in react 
// array.map - map - high order functional method including closure 
// data structures, data analysys, ai/ml
// ie: other: forEach, find, filter
//

//
// OOP - multi system re-useable components, ui/libraries 
//


//
//es5+ optional: asnc/await - promise - non blocking function
//es5+ array function  = (e) => {}
//
document.getElementById("btn-ds1").addEventListener("click", function(e){

    //function local scope 

    //functional testing / behaviorial testing - testing ui/ux 
    //ie: selinium - 

    const _output1 = document.getElementById("output1");
    const _function_name = "btn-ds1";

    try {
        
        //data structure example 1
        //class or code structure used to access/create-update/delete in-memory or database data
        //array, list, set, map, other 
        
        //hi-order functional progamming/closure - const/readonly array input and generate output
        //forEach, filter, find, indexOf, Other
        //map, reducr

        //-- Map, Set class - in-memory dataset 
        //- data can be from file or rest api 

        //data = dataset - json dataset
        
        //array = list 
        let _array1 = [1,2,5,7,10]
        const _array2 = ["one", "two", "three"]

        //object = {} - ie: class in javascript ies1-4 = class syntax
        //class - id, name = property/field/data 
        //function class - es1-4 syntax 
        const _object1 = {id:1, name:"item one"};

        //combine array and object 
        //- nested dataset 
        const _array3 = [
            {id:1, name:"item one", items:[1,34,8,10]},
            {id:2, name:"item two", items:["one", "two", "three"]},
        ]

        const _customers = [
            {id:1, name:"name one", email:"name1@email.com", phone:"832873"},
            {id:2, name:"name two", email:"name2@email.com"},
            {id:3, name:"name three", email:"name3@email.com", phone:"7943432"}
        ]
        
        //#demo# dataset ie: customers, products, orders

        //#demo-2# - data structure/class to access custmer, products. orders

        //#demo-3# - rest, spread, destructoring 
        
        //#demo-1# -data-structures 
        //- loops, crud - creates, update, delete, search
        //map, set, reduce, foreach, find, filter 

        //
        //array.map - returns same amount of items 
        //-- use in react  
        //-- looping throu all item and return the same number of item 
        //-- do not have to use existing array item
        //use map as forEach or for loop or while loop 
        //-- return a new array or does not update existing array 
        //-- return a new array with same number of items and or a different structure 
        //-- function = es5+ array function = ()=>{}
        //-- es5+ asyn/await = promise 
        let _map1 = _array1.map(function(item){
        //_array1.map(function(item){
            //any valid js function/expression             
            //return 1;
            return (item+1);
        });

        _output1.innerText = JSON.stringify(_array1);
        _output1.innerText += `| ${JSON.stringify(_map1)}`;

    } catch (error) {
        
        //es5+ : template literal ie: react 
        _output1.innerText = `${_function_name}::err - ${error}`;
    }

});


