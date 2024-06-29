/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

function caesarCipher(string, num) {
    // Your code here 

    let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    let result = [];

    for (let i = 0;i <string.length;i++){
        result = result + alphabet[alphabet.indexOf(string[i])+num]
       
    }
    return result;



}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
