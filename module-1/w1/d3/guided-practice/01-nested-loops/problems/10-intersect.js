/*
Define a function called intersect that takes in two array parameters and
returns a new array containing the elements common to both arrays.
*/

// Your code here 

let intersect = function(arr1,arr2){
    let result = [];

    for (let i = 0; i< arr1.length;i ++){
        for(let j = 0;j< arr2.length;j++){
            if(arr1[i] === arr2[j]){
                result.push(arr1[i]);
            }
        }
    }

    return result;
}

console.log(intersect(["a", "b", "c", "d"], ["b", "d", "e"])); //=> [ 'b', 'd' ]
console.log(intersect(["a", "b", "c"], ["x", "y", "z"])); //=> []

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = intersect;
