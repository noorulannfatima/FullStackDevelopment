// Objects -> just a collection of key-value pairs
let obj = {
  name: 'Jenny',
  "Father's Name": "john",
  age: 25,
  city: 'New York',
  greet: function(){
    console.log(`Hello, my name is ${this.name}!`); // 'this' keyword is used to refer to the current object
  }
}
console.log(obj);
obj.greet();

console.log(typeof(obj)); // object

// Shallow Copy -> create a new object with the same properties as the original object
let obj2 = obj; // no new object created in heap, it is just an another reference in a stack

//? Deep Copy -> create a new object with the same properties as the original object and all nested objects as

//? for-in loop  used to iterate over all enumerable properties of an object, including inherited properties.
for(let key in obj){
  console.log(key, " ", obj[key]);
}  // output: name Jenny, Father's Name john, age 25,...

