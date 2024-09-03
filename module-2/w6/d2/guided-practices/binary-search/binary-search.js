function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.findIndex(element => element === target)

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let lowindex = 0;
  let highindex = arr.length;

  // While high and low indices do not overlap...
  while(lowindex <= highindex){

    // Find the midpoint between high and low indices
    let midpoint = Math.floor((lowindex + highindex) / 2)

    // Compare the target value to the midpoint value

      if(arr[midpoint] === target){
        return midpoint;
      }else if(arr[midpoint] < target){
        lowindex = midpoint + 1;
      }else{
        highindex = midpoint - 1;
      }



      // If the target equals the midpoint...
      // Return the midpoint index
      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
  }

  // Return -1 if the loop exits with overlapping pointers
  return -1;


}


module.exports = [linearSearch, binarySearch]