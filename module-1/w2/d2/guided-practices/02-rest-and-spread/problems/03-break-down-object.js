/*
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!
*/

// Your code here 
let breakDownObj = function(obj){
  let key1 = [];
  let value1 = [];

  for(let key in obj){
    key1.push(key);
    value1.push(obj[key]);
  }

  let result = [...key1,...value1];
  return result;

}



console.log(breakDownObj(
  { name: 'Rupert', age: 5, speak: 'Meow' }
)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
console.log(breakDownObj(
  { location: 'NY', borough: 'Brooklyn' }
)); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = breakDownObj;
} catch {}
