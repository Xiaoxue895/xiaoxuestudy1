/*
Define a function wordsLongerThan5 that takes in an array of words. The
function should return a NEW array containing only the words that are longer
than 5 characters.
*/

// Your code here 

function wordsLongerThan5(arr){
    let result = [];

    for (let i= 0; i<arr.length; i++){
        if(arr[i].length >5){
            result.push(arr[i]);
        }
    }

    return result;
}


let words1 = ['bike', 'skateboard','scooter', 'moped'];
let longerWords1 = wordsLongerThan5(words1);
console.log(longerWords1);            //=> [ 'skateboard', 'scooter' ]
console.log(words1 === longerWords1); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = wordsLongerThan5;