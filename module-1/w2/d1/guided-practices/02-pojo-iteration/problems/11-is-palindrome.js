/*
Given a sentence, write a function called isPalindrome that returns true if the
sentence can be rearranged into a palindrome and false if not. Ignore whitespace
and assume all characters are lowercase.

Note: A palindrome is a sequence that reads the same backwards as is does
forward.
*/

const isPalindrome = sentence => {
  // Your code here 
  let newStr = sentence.split(' ').join('')
  let result = {};

  for (let char of newStr){
    result[char]=(result[char] || 0) + 1;
  }

  let count = 0;
  for (let key in result){
    let value = result[key];
    if(value % 2 !== 0){
      count ++;
    }
  }

  if(count === 0 || count === 1){
    return true;
  }else{
    return false;
  }
 
}
console.log(isPalindrome('pop'));               // true;
console.log(isPalindrome('kayak'));             // true
console.log(isPalindrome('yo banana boy'));     // true
console.log(isPalindrome('this is the truth')); // false
console.log(isPalindrome('abab'));              // true
// // because 'abab' can be rearranged into a palindrome, 'abba'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = isPalindrome;
} catch {}
