/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in 
milliseconds, and an amount. The function should set an interval with 
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/

function intervalCount(cb, delay, amount) {
  // Your code here 
  let count = 0;
  const timerObj = setInterval(() => {
    cb();
    count++;
    if (amount !== undefined && count === amount) {
      clearInterval(timerObj);
    }
  }, delay);

  return timerObj;
}

intervalCount(function() {
  console.log('hi');
}, 500, 3);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
