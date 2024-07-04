/*
Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and
returns the total sum of all numbers.
*/

// Your code here 

let twoDimensionalSum = function(arr){
    let result = 0;
    
    if (arr.length === 0){
        return result;
    }

    for (let i = 0; i < arr.length; i ++){
        for (let j = 0; j <arr[i].length;j++){
            result += arr[i][j];
        }
    }

    return result;
}

let arr1 = [[1, 3], [-4, 7, 10], [2]];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [[], [3, 1, 2]];
console.log(twoDimensionalSum(arr2)); // 6

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalSum;
