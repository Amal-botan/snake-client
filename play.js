const con = require("./client")
const setupInput = require("./input")
//con()


console.log("Connecting ...");
setupInput(con());






// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);

//   return stdin;
// };


// const handleUserInput = function (key) {
//   // your code here
//   if (key === '\u0003') {
//     process.exit();
//   }

// };


//setupInput();




