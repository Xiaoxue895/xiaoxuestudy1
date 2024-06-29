/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function sillyString(str) {
    if (typeof str !== 'string') {
        return null;
    }
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) {
            result += char + 'b' + char.toLowerCase();
        } else {
            result += char;
        }
    }

    return result;
}
 console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
// console.log(sillyString('can'));        // caban
// console.log(sillyString('cats'));       // cabats
// console.log(sillyString('italy'));      // ibitabaly
// console.log(sillyString('scooter'));    // scobooboteber

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
