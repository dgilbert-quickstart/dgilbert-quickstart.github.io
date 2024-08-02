//
//ie: backend nodejs web server or web application 
//

/*
refactor: 
- add package.json
  npm init -y
- install packages
  npm i uuid 
  or
  npm i 
  ** if previously installed package 
- add .gitignore 
*/

//ie: javascript-module / react import syntax 
//import {uuid4} from "uuid";

//node import syntax 
const { v4: uuidv4 } = require("uuid");

//es1-6+
function main()
{
    const _uuid = uuidv4(); //generate a unique id 
    const _msg = `intro to node 20 - 1.0.4 - ${_uuid} `;
    console.log(_msg);
}


main();

//node demo1.js

