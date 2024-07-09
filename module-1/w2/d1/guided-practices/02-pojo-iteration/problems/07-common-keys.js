/*
Write a function called commonKeys(obj1, obj2) that returns an array of all the
common keys between the two input objects, obj1 and obj2.
*/

function commonKeys(obj1, obj2) {
  // Your code here 
  let result = [];
  for(let key1 in obj1){
    for(let key2 in obj2){
      if (key1 === key2){
        result.push(key1);
      }
    } 
  }
  return result;
}

console.log(commonKeys(
  { species: 'Dog', color: 'Brown',  numLegs: 4 },
  { numLegs: 8, species: 'Octopus', lifeSpan: '2 years' }
)); // => [ 'species', 'numLegs' ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = commonKeys;
} catch {}
