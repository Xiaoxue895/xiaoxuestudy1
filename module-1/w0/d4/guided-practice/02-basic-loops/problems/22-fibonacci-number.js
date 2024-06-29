/*
Write a function fib that accepts a number n as an argument. The function should
return the "n-th" number of the Fibonacci sequence. The first two numbers of the
Fibonacci sequence are 1; to generate subsequent numbers of the Fibonacci
sequence, we take the sum of the previous two numbers of the sequence.
*/


// Your code here 

function fib(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    }

    let prevPrev = 1;
    let prev = 1;
    let current = 0;

    for (let i = 3; i <= n; i++) {
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}


console.log(fib(1));    // 1
console.log(fib(2));    // 1
console.log(fib(3));    // 2
console.log(fib(4));    // 3
// console.log(fib(5));    // 5
// console.log(fib(6));    // 8
// console.log(fib(10));   // 55
// console.log(fib(11));   // 89
console.log(fib(12));   // 144

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fib;
