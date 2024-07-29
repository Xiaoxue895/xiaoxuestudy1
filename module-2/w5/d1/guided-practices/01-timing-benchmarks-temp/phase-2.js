const [addNums, addManyNums] = require("./phase-1");

function addNums10(increment) {
  let sums = [];
  
  for (let i = 1; i <= 10; i++) {
    let currentIncrement = increment * i;
    sums.push(addNums(currentIncrement));
  }

  return sums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let sums = [];
  
  for (let i = 1; i <= 10; i++) {
    let currentIncrement = increment * i;
    sums.push(addManyNums(currentIncrement));
  }

  return sums;
}


module.exports = [addNums10, addManyNums10];
