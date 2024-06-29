/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function abbreviate(str){
    let lowerstr = str.toLowerCase();
    let strsub =["a", "e", "i", "o", "u"];
    let result1 = [];
    let result2 = [];
    
    for (let i = 0;i <lowerstr.length;i++){
        if(strsub.includes(lowerstr[i])){
            result1 = result1 + lowerstr[i];
        }else{
            result2 = result2 + lowerstr[i];
        }
    }
    return result2;
}


console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
