/*
Write a function unique that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.
*/

// Your code here 
let unique= function(arr){
    let result = [arr[0]];

    for (let i = 1;i < arr.length;i ++){
        if (!(result.includes(arr[i]))){
            result.push(arr[i])
        }
    }
    return result;
}


console.log(unique([1, 1, 2, 3, 3]));         // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(["a", "b", "c", "b"]));    // ['a', 'b', 'c']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = unique;
