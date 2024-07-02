/*
Write a function mostVowels that takes in a sentence string and returns the
word of the sentence that contains the most vowels.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function mostVowels(str){

    if(str.length === 0){
        return '';
    }

    let strNew = str.split(' ');
    let vowels = [ "a", "e", "i", "o", "u"];
    let result = ' ';


    function countvowels(word){
        let count = 0;
        for (let i = 0;i < word.length;i ++){
            if(vowels.includes(word[i])){
                count ++;
            }
        }
        return count;
    }

    let countmax = 0;

    for (let j = 0;j < strNew.length;j++){
        if (countvowels(strNew[j])> countmax){
        result = strNew[j]; 
        countmax = countvowels(strNew[j]);
        }
    }
    return result;    
}






console.log(mostVowels("what a wonderful life")); // "wonderful"
console.log(mostVowels("the quick brown fox jumps")); // "quick"
console.log(mostVowels("")); // ""

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mostVowels;
