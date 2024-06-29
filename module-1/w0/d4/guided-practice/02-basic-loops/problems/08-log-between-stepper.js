/*
Define a function logBetweenStepper that takes in 3 numbers as parameters. The
function should print out numbers between a minimum number and a maximum number
at defined intervals. The first parameter should represent the minimum number.
The second parameter should represent the maximum number. The third parameter
should represent the interval.

HINT: This function only needs to print using console.log it does not need to
return anything.
*/

// Your code here 
function logBetweenStepper(lowernum,uppernum,step){
    for(let i = lowernum;i <= uppernum;i = i + step){
        console.log(i);
    }
}






logBetweenStepper(5, 9, 1);
logBetweenStepper(5,20,5);
/* prints out:
5
6
7
8
9
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = logBetweenStepper;
