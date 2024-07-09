/*
Write a function called objectToArray(obj) that iterates through all key-value
pairs of the object and returns an array of nested array where each nested array
is formatted such that the first element is the key and the second element is
the value.
*/

// Your code here 
function objectToArray(obj){
  let result = [];

  for(let key in obj){
    let value = obj[key];
    result.push([key,value]);
  }

  return result;
}

let bootcamp = {
  name: "App Academy",
  color: "Red",
  population: 120
};
console.log(objectToArray(bootcamp));
//=> [['name', 'App Academy'], ['color', 'Red'], ['population', 120]]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = objectToArray;
} catch {}
