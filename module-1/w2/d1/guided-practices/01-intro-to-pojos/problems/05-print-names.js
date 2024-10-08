/*
Write a function called printNames that takes in an array of objects. It should
loop through all of the objects and print the "name" key from each object.
*/

// Your code here 
// function printNames(arrayofobj){
//   for (let obj of arrayofobj){
//     if(obj.hasOwnProperty('name')){
//       console.log(obj.name);
//     }
//   }
// }

function printNames(names){
  for(let i = 0;i<names.length;i++){
    let nameonj = names[i];
    console.log(nameonj['name'])
  }
}

//Example:
printNames([
  { name: "Joey", likes: ["sandwiches"] },
  { hobby: "tells jokes", name: "Chandler" },
]); // prints 'Joey' then 'Chandler'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = printNames;
} catch {}
