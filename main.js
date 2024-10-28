//comments
// is used to make a one line comment
/* is used to make multiple line comments */
// you can comment a section using ctrl + /

/****************************************************************/
// note that what document is meant by is the html file
// prints a message in the console
console.log("Hello from JS file");

//sends an alert message to the window screen
//window.alert("Trust the process");

// writes changes to the html file eg. adding heading 1 element
document.write("<h1>Trust the process</h1>");
/*****************************************************************/

// Console Methods
/*
log
error
table
*/
// logs a message into the console
console.log("log method");
// logs an error message into the console
console.error("Error");
// logs an array as a table of index and value into the console
console.table(["Mohamed", "Reem", "Abdo"]);

//console is not a part of JS, it is a part of a web API that provides it to be used by JS

//Styling the message in the console
// using css and directive %c
console.log("Hello, my name is %cmohamed", "color: red; font-size: 20px");
/************************************************************************************************/
// What is ECMAScript?
/* ECMAScript is the standardized specification used to write consistent and cross-browser JavaScript code. */
var myName = "Sabry";

// Using string concatenation (older syntax)
console.log("Hello, " + myName);

// The modern, recommended way is:
console.log(`Hello, ${myName}`);

/* Data Types */
// Typeof is called an operator and it tells us the type of a variable

console.log(typeof "Mohamed"); //string
console.log(typeof 2024); // number
console.log(typeof [1, 2, 3]); // array => object
console.log(typeof ["ms", "la"]); // array => object
console.log(typeof { name: "mohamed", age: 23 }); // object
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object

arr = [1, "name"]; // array object can have different data types
