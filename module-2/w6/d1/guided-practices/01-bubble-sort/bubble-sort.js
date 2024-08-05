
function bubbleSort(arr) {

    // Iterate through the array
    for(let j = 0; j <arr.length; j++ ){
      let swapped = false;

      for(let i = 0; i < arr.length -j -1; i++){
        if(arr[i] > arr [i + 1]){
          let res2 = arr[i]
          arr[i] = arr[i + 1];
          arr[i + 1] = res2; 
          swapped = true;
          console.log(arr.join(","));
        }
      }
      if(!swapped){
        break;
      }
    }

    return arr;

      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
        // console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;