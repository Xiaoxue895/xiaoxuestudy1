const findMinimum = arr => {

  // Your code here 
  let result = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < result){
      result = arr[i];
    }
  }
  return result;

};

const runningSum = arr => {

  // Your code here 
  let result = [];
  for(let i = 0; i <arr.length; i++){
    let jsum = 0;
    for(let j =0;j<= i; j++){
      jsum += arr[j];
    }
    result.push(jsum);
  }
  return result;
};

const evenNumOfChars = arr => {

  // Your code here 
  let newarr = [];
  for(let i = 0; i < arr.length; i++){
    newarr.push(arr[i].length)
  }

  let sum = 0;
  for(let j = 0;j < newarr.length; j++){
    if(newarr[j]% 2 ===0){
      sum++;
    }
  }
  return sum;
};

const smallerThanCurr = arr => {

  // Your code here 
  let newarr = [];
  for(let i = 0; i < arr.length; i++){
    
    let newnum = 0;
    for(let j = 0; j <arr.length; j++){
      if(i !== j && arr[i] > arr[j]){
        newnum++;
      }
    }
    newarr.push(newnum);

  }
  return newarr;

};

const twoSum = (arr, target) => {

  // Your code here 

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(i !== j && arr[i] + arr[j] === target){
        return true;
      }
    }
    return false;
  }


};

const secondLargest = arr => {

  // Your code here 
  if (arr.length < 2) {
    return undefined;
  }

  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }

  return second === -Infinity ? first : second;
};

const shuffle = (arr) => {

  // Your code here 


  
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
