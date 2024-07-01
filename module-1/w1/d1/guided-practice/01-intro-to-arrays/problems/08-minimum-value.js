/*
Define a function called minVal that takes in an array of numbers as a
parameter. The function should return the smallest number of the array. If the
array is empty, the function should return null.
*/

// Your code here 

function minVal(arr){
    if (arr.length ===0){
        return null;
    }

    let min = arr[0]
    for (let i = 1;i<arr.length; i++){
        if(arr[i]< min){
            min = arr[i];   
        } 
    }
    return min;  
}






console.log(minVal([4, 6, 3, 5, 2, 4])); // 2
console.log(minVal([-2, -3, -7, 3 ]));   // -7
console.log(minVal([])); //null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = minVal;