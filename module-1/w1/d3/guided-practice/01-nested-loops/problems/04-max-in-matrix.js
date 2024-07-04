/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array
(matrix) and returns the largest value in the matrix. The matrix contains at
least one value.
*/

function maxInMatrix(matrix) {
  // Your code here 
  if (matrix.length === 0 || matrix[0].length === 0) {
    return undefined; 
}

  let result = matrix[0][0];

  for (let i = 0; i <matrix.length; i++){
    for (let j = 0; j <matrix[i].length; j++){
      if (matrix[i][j]>result){
        result = matrix[i][j];
      }
    }
  }
  return result;
}

matrix = [
[11, 2, -99],
 [20, 19, 10],
[47, 72, 56],
];

console.log(maxInMatrix(matrix)); // 72

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxInMatrix;
