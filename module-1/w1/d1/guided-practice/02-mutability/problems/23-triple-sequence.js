/*
Write a function tripleSequence that takes in two numbers, start and length. The
function should return an array representing a sequence that begins with start
and is length elements long. In the sequence, every element should be 3 times
the previous element. Assume that the length is at least 1.
*/

// Your code here 
function tripleSequence(num1,num2){
    let result = [];
    let newWord = num1;

    for (let i = 1;i <=num2;i++){
        result.push(newWord);
        newWord = newWord*3;
    }

    return result;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripleSequence;