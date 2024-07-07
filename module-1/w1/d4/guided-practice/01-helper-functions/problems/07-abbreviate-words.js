/*
Write a function called removeVowels(word) that removes all the vowels in a
word.

Write a function abbreviateWords(sentence) that takes in a sentence string. The
function should return a new sentence where words that are longer than 4
characters have their vowels removed. Use the removeVowels helper function
to remove the vowels of the words.
*/

// Your code here 

function removeVowels(word){
  let vowels = ['a','e','i','o','u'];
  let newWord = word.split('');
  let result = [];
  for(let i = 0; i < newWord.length; i++){
    if(!(vowels.includes(newWord[i]))){
      result.push(newWord[i])
    }
  }
  return result.join('');
}

function abbreviateWords(str){
  let result1 = [];
  let newstr = str.split(' ');

  for (let j = 0; j < newstr.length; j++){
    if(newstr[j].length > 4){
      let middlewords = removeVowels(newstr[j]);
      result1.push(middlewords);
    }else{
      result1.push(newstr[j]);
    }
  }

  return result1.join(' ');
}


console.log(removeVowels("hello")); // hll
console.log(removeVowels("what"));  // wht
console.log(removeVowels("stop"));  // stp

console.log(abbreviateWords("what a wonderful place to live")); // what a wndrfl plc to live
console.log(abbreviateWords("she sends an excellent message")); // she snds an xcllnt mssg
console.log(abbreviateWords("keep going youre doing great"));   // keep gng yr dng grt
console.log(abbreviateWords("dont stop wont stop"));            // dont stop wont stop
console.log(abbreviateWords("youre getting good at this"));     // yr gttng good at this

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  removeVowels,
  abbreviateWords
};
