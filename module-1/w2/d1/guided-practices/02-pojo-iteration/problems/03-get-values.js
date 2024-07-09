/*
Write a function called getKeys(obj) that iterates through the object and
returns an array of the object's keys only.
*/

// Your code here 
function getValues(obj){
  let result = [];

  for(let key in obj){
    let value = obj[key];
    result.push(value);

  }
  return result;
}

const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2011
}
console.log(getValues(car)); // ['Toyota', 'Corolla', 2011]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = getValues;
} catch {}
