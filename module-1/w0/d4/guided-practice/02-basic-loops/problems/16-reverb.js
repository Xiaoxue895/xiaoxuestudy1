/*
Write a function reverb that accepts a word as an argument. The function should
return a new word where all letters that come after the last vowel (including
the vowel itself) are repeated at the end of the word. If the value passed in is
not a string, say someone passes in a number as an argument, then return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function reverb(word) {
    if (typeof word !== 'string') {
        return null;
    }

    const vowels = ["a", "e", "i", "o", "u"];
    let lastVowelIndex = -1;
    let lowercaseWord = word.toLowerCase();

    for (let i = lowercaseWord.length - 1; i >= 0; i--) {
        if (vowels.includes(lowercaseWord[i])) {
            lastVowelIndex = i;
            break;
        }
    }

    if (lastVowelIndex === -1) {
        return word;
    }

    let reverbSuffix = word.substring(lastVowelIndex);
    let reverbWord = word + reverbSuffix;

    return reverbWord;
}



console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb('197393'));  // 197393
console.log(reverb(197393));    // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverb;
