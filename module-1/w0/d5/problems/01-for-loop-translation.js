/*
The following function is named `aCounter(word)`. The function takes in a word
and returns the number of a's within that word. The function counts both
lowercase (a) and uppercase (A). Your job is to translate the following function
to use a `for` loop instead of the `while` loop it is currently using.
*/

function aCounter(str) {
  let count = 0;
  
  for(let index = 0;index < str.length;index++) {
    let char = str[index];
    if (char === "a" || char === "A") {
      count += 1;
    }
  }
  return count;
};

console.log(aCounter("apple"));      // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple"));    // => 3


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = aCounter;

