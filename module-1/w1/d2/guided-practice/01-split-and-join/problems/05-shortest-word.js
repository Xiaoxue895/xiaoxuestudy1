/*
Write a function shortestWord that accepts a sentence as an argument. The
function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.
*/

// Your code here 

function shortestWord(sen){
    let newSen = sen.split(' ');
    let result = newSen[0];

    for(let i = 0;i<newSen.length;i++){
        if(newSen[i].length<= result.length){
            result = newSen[i];
        }
    }

    return result;
}






console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestWord;
