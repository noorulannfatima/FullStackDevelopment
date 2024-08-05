// Function Declaration -> function call
function sayMyName(){
    console.log("My name is Noorulain Fatima");
}
console.log(sayMyName()); 

// Examples
function calculateAverage(num1, num2){
    let avg = (num1 + num2) / 2;
    console.log("Average is: ", avg);
}
calculateAverage(5, 10); 

// Using for loop
function printNumber(){
    for(let i = 0; i <= 10; i++){
        console.log(i);
    }
}
printNumber(); 

// return function
function getSum(a, b){
    let sum = a + b;
    return sum;
}
let result = getSum(5, 10);  //! when we use return func we have to store it in a variable
console.log(result);

// Function Expression -> Anonymous function
let totalSum = function(a, b){     // using function in variables
    return a + b;
}
let total = totalSum(20, 10); 
console.log(total);

// Arrow Function -> Function with shorter syntax
let getExponent = (x,y) => {
    return x ** y;
}
console.log(getExponent(2, 3));
