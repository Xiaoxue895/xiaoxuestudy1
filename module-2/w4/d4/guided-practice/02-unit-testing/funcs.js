function isFive(num) {
  // Your code here 
  if(num === 5){
    return true;
  }else{
    return false;
  }
}

function isOdd(number) {
  // Your code here 
  if(typeof number !== 'number'){
    throw new error(`i am a ${ typeof number}`)
  }

  return number % 2 !== 0;


}

function myRange(min, max, step = 1) {
  // Your code here 
  if (min > max || step <= 0) {
    return [];
  }

  let result = [];

  for(let i = min;i <=max; i+= step){
    result.push(i);
  }
  return result;
}


module.exports = { isFive, isOdd, myRange };
