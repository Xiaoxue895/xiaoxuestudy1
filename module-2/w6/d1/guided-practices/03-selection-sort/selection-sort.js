

function selectionSort(arr) {

  // Copy the original array
  const copyselection = [...arr];

  // Create an array to store the sorted values
  const sorted = [];

  // While the array is not empty...
  while(copyselection.length > 0){


    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minindex = 0;

    for(let i = 0; i < copyselection.length; i++){
      if(copyselection[i] < copyselection[minindex]){
        minindex = i;
      }
    }


    // Save and remove the value at the min index
    let minvalue = copyselection.splice(minindex,1)[0];
    sorted.push(minvalue);
    

    // Add the min value to the end of the sorted array
  }
  console.log(sorted.join(","));
  return sorted;

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves


  // Repeat while the unsorted half is not empty:

    // Do not move this console.log
    // console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

        for (let i = 0; i < arr.length; i++) {
          console.log(arr.join(","));

  
          let minIndex = i;
          for (let j = i + 1; j < arr.length; j++) {
              if (arr[j] < arr[minIndex]) {
                  minIndex = j;
              }
          }

          if (minIndex !== i) {

            let minValue = arr[minIndex];
 
            for (let k = minIndex; k > i; k--) {
                arr[k] = arr[k - 1];
            }
            arr[i] = minValue;
        }
  

      }
      console.log(arr.join(","));
  
      return arr;

}





module.exports = [selectionSort, selectionSortInPlace];
