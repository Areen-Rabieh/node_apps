const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,output: process.stdout});


  //y=2x

  
rl.question("enter number to be doubled ", function (x) {
  console.log(`doubled number is ${2*x}`);
});