/*
Define a function getFirstVowel that takes in a string parameter and returns the
first vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function getFirstVowel(str){
    let strsub =["a", "e", "i", "o", "u"];
    let wordsvowel =[];
    let count = 0;

    for (let i = 0;i < str.length;i ++){
        if (strsub.includes(str[i])){
        wordsvowel += str[i];
        count ++
        } 
    }
    
    if(count > 0){
        return wordsvowel[0];
    }else{
        return null;
    };
}



console.log(getFirstVowel('battery'));      // 'a'
// console.log(getFirstVowel('tunnel'));       // 'u'
// console.log(getFirstVowel('dog'));          // 'o'
console.log(getFirstVowel('conventional')); // 'o'
console.log(getFirstVowel('rhythm'));       // null
// console.log(getFirstVowel('try'));          // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getFirstVowel;
