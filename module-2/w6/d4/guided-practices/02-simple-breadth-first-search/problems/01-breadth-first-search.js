/*
Write a function called breadthFirstSearch that takes two nodes as arguments and
will traverse the given graph breadth-first, returning true if there is a path
from the first node to the second, and false if there is not.

For this exercise, try to write your code from scratch. It's good practice!
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
  // Your code here 
      // Create a queue and add the starting node to the queue
      let queue = [start];
      // Create a set to keep track of visited nodes
      let visited = new Set();
  
      while (queue.length > 0) {
          let node = queue.shift();

          if (node === end) {
              return true;
          }
  
          if (!visited.has(node)) {
              visited.add(node);
  

              for (let neighbor of adjList[node]) {

                  if (!visited.has(neighbor)) {
                      queue.push(neighbor);
                  }
              }
          }
      }

      return false;
}

// console.log(breadthFirstSearch(1, 3)); // -> true
// console.log(breadthFirstSearch(4, 1)); // -> true
// console.log(breadthFirstSearch(6, 1)); // -> false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstSearch;
