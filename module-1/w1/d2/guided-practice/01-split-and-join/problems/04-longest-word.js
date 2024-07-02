/*
Write a function longestWord(sentence) that takes in a sentence string as an
argument. The function should return the longest word in the sentence. If there
is more than one "longest word", return the first of these instances.
*/

// Your code here 

function longestWord(sen){
    let result = '';
    let newSen = sen.split(' ');

    for (let i = 0; i <newSen.length;i++){
        if (newSen[i].length > result.length){
            result = newSen[i];
        }
    }

    return result;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''
console.log(typeof(longestWord('')));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = longestWord;
