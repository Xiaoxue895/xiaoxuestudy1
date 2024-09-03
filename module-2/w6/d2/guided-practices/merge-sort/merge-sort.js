// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  if(arr.length <= 1) return arr;

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));


  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let result = [];
  let arrAindex = 0;
  let arrBindex = 0;

  // Point to the first value of each array
  // While there are still values in each array...
  while(arrAindex < arrA.length && arrBindex < arrB.length){
    if(arrA[arrAindex] < arrB[arrBindex]){
      result.push(arrA[arrAindex]);
      arrAindex++;
    }else{
      result.push(arrB[arrBindex]);
      arrBindex++;
    }
  }
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array
  return result.concat(arrA.slice(arrAindex)).concat(arrB.slice(arrBindex));

}

module.exports = [merge, mergeSort];

