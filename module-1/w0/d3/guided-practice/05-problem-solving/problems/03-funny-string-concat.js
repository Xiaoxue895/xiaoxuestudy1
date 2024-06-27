/*
Pseudocode With Polya's

Write pseudocode for Step 1 and 2 of Polya's Problem Solving framework for the
given problem statement. Then execute Step 3 of Polya's Problem Solving
framework. Finally, test your code in Step 4 of Polya's Problem Solving
framework.
*/

/*
Problem Statement:
Write a `funnyStringConcat` function that receives two string parameters: 
`str1` and `str2`. The function should return a new string consisting of the 
first 3 letters of `str1` followed by the last 3 letters of `str2`.

(You can assume that the strings passed to `funnyStringConcat` will always have 
at least 3 letters.)

**Challenge:** Once you get `funnyStringConcat` working, refactor it so that it
uses the String `substring` method--look it up on MDN!--and consists of only one 
line inside the function block.
*/
function funnyStringConcat(str1,str2){
    if(str1.length <3 || str2.length <3){
    return 'ai';
    }else{
    return str1.substring(0,3) + str2.substring(str2.length - 3);
    }
    
}

// console.log(funnyStringConcat("abc", "def"));  //=> "abcdef"
// console.log(funnyStringConcat("number", "soldier"));  //=> "numier"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = funnyStringConcat;
