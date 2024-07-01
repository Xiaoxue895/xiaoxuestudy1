/*
Write a function alternatingWords that accepts an array of words as an argument.
The function should mutate the input array such that the words alternate between
fully uppercase or lowercase. The first word should be uppercase.
*/

// Your code here 

function alternatingWords(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 ===0){
            arr[i]=arr[i].toUpperCase();
        }else {
            arr[i]=arr[i].toLowerCase();
        }
    }

    return arr;
}



let words1 = [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
alternatingWords(words1);
console.log(alternatingWords(words1)); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
alternatingWords(words2);
console.log(alternatingWords(words2)); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = alternatingWords;