// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i;
  }
  return sum;

}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let sum2 = 0;
  for(let j = 1; j <= n; j++){
    sum2 += addNums(j)
  }
  return sum2;

}



module.exports = [addNums, addManyNums];