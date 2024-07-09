//js es1..4

//index.js 

/*

multi line javascript 

*/
function ex1() {

  //DOM intro - document object model 
  //es5+
  const output1 = document.getElementById("output1")

  //es1..4
  console.log(' ex1 js into');
  
  //es5+
  console.log(`* ex1 js into `)
  
  //dynamic js development - updating html/ui without refreshing the browser: ie: SPA - React 

  //es1..4
  output1.innerText = "ex1 es1..es4 intro to js";
  
  //es5+
  output1.innerText = `ex1 es5 intro to js`;

}


function ex2() {

  const output1 = document.getElementById('output1');
  
  //es1..4
  console.log("* ex2 js into");
  //es5+
  console.log(`* ex2 js into`)

  //es1..4
  output1.innerText = "ex2 es1..es4 intro to js"
  //es5+
  output1.innerText = `ex2 es5 intro to js`;

}

function ex3() {

  const output1 = document.getElementById('output1');

  //es1..4
  console.log("* ex3 js into")
  //es5+
  console.log(`* ex3 js into`)

  //es1..4
  output1.innerText = "ex3 es1..es4 intro to js";
  
  //es5+
  output1.innerText = `ex3 es5 intro to js`

  //return nothing or void 
  return

  //return true; //allow click event to continue
  //return false; //stops the clieck event 
  //reutrn any valid javascipt data type 

}

function display_date_time1(){
  
  //using document DOM, select the date element - lbldate
  const eledate = document.getElementById('lbldate');

  //using document DOM, select the time element - lbltime
  const eletime = document.getElementById('lbltime');

  //create a date variable 
  
  //new - creates a new copy or instance in memory 
  const d1 = new Date();  //combines date and time

  //create a time variable 
  const t1 = new Date();  //combines date and time

  //update lbldate.innerText
  let _month = (d1.getMonth() + 1);  //math order of opertion (), *, +

  eledate.innerText = _month + "/" + d1.getDate() + "/" + d1.getFullYear();

  //update lbltime.innerText 
  //eletime.innerText = t1.getHours() + ":" + t1.getMinute();
  eletime.innerText = t1.toLocaleTimeString();

}
