/*
Write a function removeLastVowel(word) that takes in a word string and returns
the word without its last vowel.

Write a function hipsterfy(sentence) that takes in a sentence string and returns
the sentence where every word is missing its last vowel. Use the removeLastVowel
function as a helper function.
*/

// Your code here 

function removeLastVowel(word){
  let vowel = ['a','e','i','o','u'];
  let wordarr = word.split('');

  for(let i = word.length - 1; i >= 0;i--){
    if(vowel.includes(wordarr[i])){
      wordarr.splice(i,1);
      break;
    }
  }
  let Newstr = wordarr.join('');
  return Newstr;
}

function hipsterfy(arr){
  let result = [];
  let wordarr2 = arr.split(' ');

  for (let j = 0; j< wordarr2.length;j++){
    result.push(removeLastVowel(wordarr2[j]));
  }

  return result.join(' ');
}


console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'
console.log(hipsterfy("go big or go home")); // 'g bg r g hom'
console.log(hipsterfy("dont let your dreams be dreams")); // 'dnt lt yor drems b drems'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  removeLastVowel,
  hipsterfy,
};
