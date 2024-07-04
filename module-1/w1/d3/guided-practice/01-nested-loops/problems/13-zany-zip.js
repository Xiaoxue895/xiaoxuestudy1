/*
Write a function zanyZip that accepts two arrays as arguments. The function
should return a two dimensional array with subarrays of length 2 that contain
elements at corresponding indices from the input arrays. If one of the arrays is
shorter than the other, then substitute null for the missing elements.
*/

// Your code here 
let zanyZip = function(arr1,arr2){
    let arr1length = arr1.length;
    let arr2length = arr2.length;
    let result = [];

    let maxlength = Math.max(arr1length,arr2length);

    for(let i = 0;i < maxlength;i ++){
        
        let middleResult = [];

        if(i<arr1length){
            middleResult.push(arr1[i]);
        }else{
            middleResult.push(null);
        }

        if(i<arr2length){
            middleResult.push(arr2[i]);
        }else{
            middleResult.push(null);
        }
        result.push(middleResult);
    }

   
    return result;
}



 console.log(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(["alef", "bet"], ["alpha", "beta"]));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = zanyZip;
