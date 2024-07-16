/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // Your code here 
  if(arr.length === 0){
    return [];
  }
  
  const[first,...rest]= arr;

  if(Array.isArray(first)){
    return [...flatten(first),...(flatten(rest))];
  }else{
    return [first,...(flatten(rest))];
  }

}
 
console.log(flatten([])); // []
flatten([1, 2]); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  