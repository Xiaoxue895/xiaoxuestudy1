/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function vowelCipher(str){
    let Vowels =["a", "e", "i", "o", "u","a", "e", "i", "o", "u"];
    let result = [];

    for (let i = 0;i <str.length;i++){
        if(Vowels.includes(str[i])){
            result = result + Vowels[Vowels.indexOf(str[i])+1]
        }else{
            result = result + str[i]
        }
    }
    return result;
}



console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
