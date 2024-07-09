/*

validation reuirement
----------------------------------

- name 
    required fields not empty 
    text field max 30 chacters 

- phone optional 

- email 
    required fields not empty 
    text field max 100 chacters 

- comment 
    required fields not empty 
    text field max 150 chacters 

*/

//es1..4
//refactor es5+

function vlaidate_form()
{

    //es1..4 -- updatable variable 
    var elename = document.getElementById("txtname");

    //es5+ // updatable variable 
    let elephone = document.getElementById("txtphone");

    //es5+ // readonly variable 
    const eleemail = document.getElementById("txtemail");
    
    //es5+ // readonly variable 
    const elecomment = document.getElementById("txtcomment");

    if(elename.value == "") //evaluate left and right statement
    {
        //if true
        alert("* please enter a valid name");

        //cancel form submit 
        return false;    
    }

    //cancel form submit 
    //return false;

    //continue form submit 
    return true;
}