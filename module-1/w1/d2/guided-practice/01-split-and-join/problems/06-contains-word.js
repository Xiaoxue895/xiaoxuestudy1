/*
Write a function containsWord(sentence, targetWord) that accepts two strings as
args. The function should return a boolean indicating whether the targetWord is
found inside of the sentence. Solve this without using String's indexOf() or
includes() methods.
*/

// Your code here 

function containsWord(sen,str){
    let senNew = sen.split(' ');
    let result = false;

    for (let i = 0; i <senNew.length;i++){
        if (senNew[i].toLowerCase() === str.toLowerCase()){
            result = true;
        }
    }

    return result;
}

console.log(containsWord('sounds like a plan', 'like')); // true
console.log(containsWord('They are great', 'they')); // true
console.log(containsWord('caterpillars are great animals', 'cat')); // false
console.log(containsWord('Cast the net', 'internet')); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = containsWord;
