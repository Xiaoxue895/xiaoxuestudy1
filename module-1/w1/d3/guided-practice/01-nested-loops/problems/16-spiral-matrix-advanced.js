/*
Write a function spiralOrder(matrix) that takes in a 2-dimensional array
(matrix) and returns an array containing the elements in spiral order.
*/


// Your code here 

function spiralOrder(matrix){
    if(matrix.length ===0){
        return [];
    }

    let result = [];
    let top = 0;
    let botam = matrix.length-1;
    let left = 0;
    let right = matrix[0].length-1;

    while(top<=botam && left<=right){
        for(j=left;j<=right;j++){
            result.push(matrix[top][j]);
        }
        top ++;

        for(i=top;i<=botam;i++){
            result.push(matrix[i][right]);
        }
        right --;

        if(top<=botam){
            for(j = right;j>=left;j--){
                result.push(matrix[botam][j]);
            }
            botam--;
        }

        if(left<=right){
            for(i=botam;i>=top;i--){
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
}
 matrix = [[ 1, 2, 3],
           [ 4, 5, 6],
          [ 7, 8, 9]]

console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [[1, 2, 3, 4],
//           [5, 6, 7, 8],
//           [9,10,11,12]]


// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = spiralOrder;
