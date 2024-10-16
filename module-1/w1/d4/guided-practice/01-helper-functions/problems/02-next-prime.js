/*
Write a function isPrime(number) that returns true if the number is a prime
number. A prime number is a number that is only divisible by 1 and itself.

Write a function nextPrime(number) that accepts a number as an argument. The
function should return the nearest prime number that is greater than the given
number.
*/

// Your code here 
function isPrime(num1){
  let result = []

  for(let i = 1;i<= num1;i++){
      if(num1 % i === 0){
          result.push(i);
      }
  }

  if(result.length === 2){
      return true;
  }else{
      return false;
  }
}

function nextPrime(num2){
    let next = num2 + 1;
    while(!(isPrime(next))){
      next++;
    }
    return next;
}
console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  isPrime,
  nextPrime
};
