// ----     Previous Concepts     ----
// Primitive data types(Size is fixed , stored in stack)-> Number, String, Boolean, Null, Undefined
// Non-Primitive data types (Also called Reference types, created in heap needed pointer which is in stack)-> Object, Array, Function, 

// Creation of Array: Array Literal

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Array Constructor
let arr = new Array(5, 'Hello', 10, true, null);
console.log(arr);

// Built-in Array methods
arr.push(6); // Add element at the end
arr.pop(); // Remove element at the end

arr.shift(); // Remove element at the start
arr.unshift(0); // Add element at the start

numbers.slice(1, 3); // Slice elements from start to end index
numbers.splice(1, 2, 7, 8); // output: [1, 7, 8, 4, 5]
//? Map method applies a function to each element of an array, and returns a new array with the results.
console.log(numbers.map(x => x * 2));//  Create new array with each element multiplied by 2 
// output: [2, 4, 6, 8, 10]

//? filter method is used to create a new array with all elements that pass the test implemented by the provided function.
let brr = [12, 13, 44, 15, 20, 30, 25];
let evenArray = brr.filter((brr) =>{
    if(brr % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
})
console.log(evenArray); // output: [12, 44, 20, 30, 25]

//? Reduce is used to apply a function against an accumulator and each element in the array (from left to right
let sum = brr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // output: 117

brr.forEach((brr) => {
    console.log(brr * 2); // output: 24, 88, 96, 40, 60, 50, 50
})

//? for-of loop is used to iterate over iterable objects (like arrays or strings)
let fullName = "Maryam";
for(let val of fullName){
    console.log(val); // output: M, a, r, y, a, m
}


