//js es1..4

//index.js 

function ex1() {

  //DOM intro - document object model 
  const output1 = document.getElementById('output1');

  //es1..4
  console.log("* ex1 js into");
  //es5+
  console.log(`* ex1 js into`);
  
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

  return
  //return true;
  //return false;
}
