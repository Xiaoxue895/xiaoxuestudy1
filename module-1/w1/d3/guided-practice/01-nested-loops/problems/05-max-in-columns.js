/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.
*/

function maxColumn(matrix) {
  // Your code here 
  let result = [];
  let numColumns = matrix[0].length;
  
  
  
  for (let j = 0; j < numColumns;j++){
    let max = -Infinity;

    for(let i = 0;i < matrix.length;i++){
      if (matrix[i][j]> max){
        max = matrix[i][j];
      }
    }
   result.push(max);
  }
  return result;
}

 matrix = [
 [5, 9, 21],
 [9, 19, 6],
 [12, 14, 15],
];

console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;
