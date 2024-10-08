/*
Write a function luckyNumbers(matrix) that takes in a 2-dimensional array
(matrix) and returns all lucky numbers in any order. A lucky number is the
minimum element in its row and the maximum in its column.
*/


// Your code here 
function luckyNumbers(matrix){
    let result =[];
    let jlength = matrix[0].length;

    for(let i = 0;i<matrix.length;i++){
        let j = 0;
        let middleresult = [matrix[i][0]];

        for(let j = 1; j <jlength;j++){
            if(matrix[i][j]<middleresult[0]){
                middleresult[0] = matrix[i][j];
            }
        }
        result.push(middleresult[0]);
    }

    let num1 = Math.max(...result);
    let srr = [num1];
    return srr;

}




matrix = [[ 5,  9, 21],
       [ 9, 19,  6],
          [12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[ 5, 10,  8,  6],
     [10,  2,  7,  9],
       [21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = luckyNumbers;
