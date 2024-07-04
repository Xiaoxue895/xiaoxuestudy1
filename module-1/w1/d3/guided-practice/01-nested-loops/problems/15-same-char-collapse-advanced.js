/*
Write a function sameCharCollapse that takes in a string and returns a collapsed
version of the string. To collapse the string, we repeatedly delete 2 adjacent
characters that are the same until there are no such adjacent characters. If
there are multiple pairs that can be collapsed, delete the leftmost pair.

For example, we take the following steps to collapse "zzzxaaxy":
zzzxaaxy -> zxaaxy -> zxxy -> zy
*/
// Your code here 
function sameCharCollapse(str){
    let result = [];

    for(let char of str){
        if(result.length > 0 && result[result.length-1] === char){
            result.pop();
        }else{
            result.push(char);
        }
    }

    return result.join('');
}


console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// // because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// // because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sameCharCollapse;
