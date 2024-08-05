// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {

  // Copy the original array
  const originalarray = [...arr];
  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty:
  while(originalarray.length !== 0){
  // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  console.log(sorted.join(','));
  // - Pop a value from the array
  const value = originalarray.pop();
  // - Create a new spot at the end of the array with null to help with comparisons
  sorted.push(null);
  // - Walk through the sorted array in reverse order
  let i = sorted.length -2;
  // - Check if the value to the left is smaller than the new value
  while (i >= 0 && sorted[i] > value) {
  // - If so, you've reached the insertion point so exit the loop
  sorted[i + 1] = sorted[i];

  // - If not shift the value to the right by 1 and continue
  i--;
  // - Insert the unsorted value at the break point
}
  sorted[i + 1] = value;
}
  // Return the sorted array
    return sorted;
}



// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here 
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    console.log(arr.join(','));

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    
    arr[j + 1] = key;
}
return arr;
}


module.exports = [insertionSort, insertionSortInPlace];
