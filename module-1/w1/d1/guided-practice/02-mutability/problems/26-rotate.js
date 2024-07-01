/*
Write a function rotate(array, num) that takes in an array and a number as args.
When the num is positive, the elements of the array should be rotated to the
right. When the num is negative, the elements of the array should be rotated to
the left. The function should mutate the original array.
*/

// Your code here 

function rotate(arr, num) {
    let result = [];

    if (num > 0) {
        for (let i = arr.length - num; i < arr.length; i++) {
            result.push(arr[i]);
        }
        return result.concat(arr.slice(0, arr.length - num));
    }

    if (num < 0) {
        for (let i = Math.abs(num); i > 0; i--) {
            result.push(arr[arr.length - i]);
        }
        return result.concat(arr.slice(0, arr.length + num));
    }

    return arr.slice(); 
}



let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(rotate(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(rotate(animals, -1)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = rotate;