/*
Write a function moreDotLessDash that accepts a string as an argument. The
function should return a boolean indicating whether or not the string contains
more dots (.) than dashes (-).
*/

// Your code here 

function moreDotLessDash(str){
    let countDots = 0;
    let countDashes = 0;

    for (let i = 0; i < str.length;i++){
        if (str[i] ==='.'){
            countDots++;
        }else if(str[i]==='-'){
            countDashes++;
        }
    }

    if(countDots>countDashes){
        return true;
    }else{
        return false;
    }
}






console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
// console.log(moreDotLessDash('Morse code is great.'));                   // true
// console.log(moreDotLessDash('.... . -.--'));                            // true
// console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = moreDotLessDash;
