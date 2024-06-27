/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

function firstHalf(str) {
  // Your code here 
    let result = '';
    let endNum = Math.ceil(str.length / 2);

    for (let i = 0;i <endNum;i++){
      result += str[i];
    }
    return result;
}
console.log(firstHalf('happy'));
console.log(firstHalf('academy')); // 'acad'
console.log(firstHalf('planet'));  // 'pla'
console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
