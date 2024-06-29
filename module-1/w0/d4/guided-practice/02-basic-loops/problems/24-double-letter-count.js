/*
Write a function doubleLetterCount that takes in a string and returns the number
of times that the same letter repeats twice in a row.
*/

// Your code here 
function doubleLetterCount(str){
    let count = 0;
    for(let i = 0;i<str.length -1;i++){
       if(str[i]===str[i +1]){
          count ++
       }
    }
    return count;
}
 





console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubleLetterCount;
