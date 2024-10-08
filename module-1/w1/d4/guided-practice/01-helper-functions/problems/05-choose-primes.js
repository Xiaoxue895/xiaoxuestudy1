/*
Write a function isPrime(number) that returns true if the number is a prime
number. A prime number is a number that is only divisible by 1 and itself.

Write a function choosePrimes(numbers) that takes in an array of numbers as an
argument. The function should return a new array containing the prime numbers
from the original array. Use the isPrime function as a helper function.
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

function choosePrimes(arr){
  let result2 = [];

  for(let j = 0;j <arr.length; j++){
    if(isPrime(arr[j])){
      result2.push(arr[j]);
    }
  }
  return result2;
}



console.log(choosePrimes([36, 48, 9, 13, 19]));   // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017]));   // [ 5, 11, 2017 ]
console.log(choosePrimes([1, 2, 3, 5, 7, 9]));    // [ 2, 3, 5, 7 ]
 console.log(choosePrimes([4, 6, 8, 10, 12]));     // [ ]
console.log(choosePrimes([10, 25, 2023, 4, 41])); // [ 41 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  isPrime,
  choosePrimes
};
