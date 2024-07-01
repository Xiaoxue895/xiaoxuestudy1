/*
Define a function doubler that takes an array of numbers and returns the same
array but every element of the array is multiplied by 2.
*/

// Your code here 

function doubler(arr){ 
    for (let i = 0; i < arr.length;i++){
        arr[i]*=2;   
    }
    return arr;
}




let nums1 = [1, 2, 3, 4];
let doubled1 = doubler(nums1)
console.log(doubled1);          //=> [2, 4, 6, 8]
console.log(nums1 === doubled1) //=> true

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubler;