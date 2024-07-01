/*
Write a function chooseyEndings that accepts an array of words and a suffix
string as arguments. The function should return a new array containing the words
that end in the given suffix. If the value passed in is not an array, return an
empty array.
*/

// Your code here 

function chooseyEndings(arr,str){
    let result = [];

    for (let i = 0 ;i < arr.length;i ++){
        if (arr[i].endsWith(str)){
            result.push(arr[i])
        }
    }

    return result;
}

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// //=> [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// //=> [ 'hound', 'bond' ]

console.log(chooseyEndings(17, 'ily'));
// //=> [ ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = chooseyEndings;