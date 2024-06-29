/*
Write a function tripletTrue that accepts a string as an argument. The function
should return a boolean indicating whether or not the the string contains three
of the same character consecutively.
*/

// Your code here 
function tripletTrue(str){
    if (typeof str !== 'string'){
        return null;
     }
     
    for(let i = 0;i<str.length -2;i++){
       if(str[i]===str[i +1]&& str[i]===str[i+2]){
          return true;
       }
    }
    return false;
}







console.log(tripletTrue('caaabb'));        // true
// console.log(tripletTrue('terrrrrible'));   // true
// console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
// console.log(tripletTrue('e'));             // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripletTrue;
