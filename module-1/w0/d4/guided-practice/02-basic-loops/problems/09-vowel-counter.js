/*
Define a function called countVowels, that takes in a lowercased word parameter
and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 

function countVowels(str){
    let strsub =["a", "e", "i", "o", "u"];
    let count = 0;

    for (let i = 0;i < str.length;i ++){
        if (strsub.includes(str[i])){
        count ++
        } 
    }
    return count;
}



console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple"));    // => 2
console.log(countVowels("pizza"));    // => 2
console.log(countVowels("try"));      // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = countVowels;
