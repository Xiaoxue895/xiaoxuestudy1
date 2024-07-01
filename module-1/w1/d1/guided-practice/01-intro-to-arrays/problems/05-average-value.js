/*
Define a function called avgVal that accepts an array of numbers as a parameter.
The function should return the average of all values in the array. If the array
is empty, it should return null.
*/

// Your code here 
function avgVal(arr){
    let arrLength = arr.length;
    let result = 0;

    if (arrLength === 0){
        return null;
    }

    for (let i = 0;i<arrLength;i++){
        result = result + arr[i];
    }

    return result/(arrLength);
}






console.log(avgVal([5, 10]));         // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([]));              // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgVal;