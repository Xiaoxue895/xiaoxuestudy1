/*
Write a function isPrime(number) that returns true if the number is a prime
number. A prime number is a number that is only divisible by 1 and itself.

Write a function primeFactors(number) that accepts a number as an argument. The
function should return an array containing all of the prime numbers that can
divide the given number evenly. Use the isPrime function as a helper function.
*/

// Your code here 
function isPrime(num){
  let result = []

  for(let i = 1;i<= num;i++){
      if(num % i === 0){
          result.push(i);
      }
  }

  if(result.length === 2){
      return true;
  }else{
      return false;
  }
}

function primeFactors(num2){
  let result2 = [];
  
  for(let j = 1; j <= num2; j++){
    if(num2 % j === 0 && isPrime(j)){
      result2.push(j)
    }
  }
  return result2;
}


console.log(primeFactors(12)); // [2, 3]
console.log(primeFactors(7)); // [7]
console.log(primeFactors(16)); // [2]
console.log(primeFactors(30)); // [2, 3, 5]
console.log(primeFactors(35)); // [5, 7]
console.log(primeFactors(49)); // [7]
console.log(primeFactors(128)); // [2]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  isPrime,
  primeFactors,
};
