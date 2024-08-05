//! Hoisting is JavaScript's behavior where variables and functions declaration are shift to the top of their scope before the code is executed.

// Function Hoisting 
sayMyName("Laiba");

function sayMyName(name){
    console.log("Hello, my name is " + name);
}

// Variable Hoisting

console.log(myName); // Output: undefined

var myName = "Noorulain";

console.log(myName); // Output: Noorulain

// It also doesn't work on function expressions