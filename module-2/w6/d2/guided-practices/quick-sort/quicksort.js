function quicksort(arr) {

  // Check if the input is length 1 or less
  if(arr.length <= 1) return arr;
    // If so, it's already sorted: return

  // Pick the first value as the pivot
  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];

  // Orient the pivot so that...
  for(let i = 0; i < arr.length; i++){
    if(i === Math.floor(arr.length/2))continue;
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order
  return [...quicksort(left),pivot,...(quicksort(right))]

}


module.exports = [quicksort];
