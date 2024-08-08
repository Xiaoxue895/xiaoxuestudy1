function getNeighbors(row, col, graph) {
  const neighbors = [];

  // Check Up
  if (row - 1 >= 0 && graph[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }

  // 检查下方
  if (row + 1 < graph.length && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }

  // 检查左方
  if (col - 1 >= 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }

  // 检查右方
  if (col + 1 < graph[row].length && graph[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  
  }
  
  return neighbors;

}

  // Your code here 

  // const neighbors = [];
  // const directions = [
  //     [-1, 0], // Up
  //     [1, 0],  // Down
  //     [0, -1], // Left
  //     [0, 1]   // Right
  // ];

  // for (const [dr, dc] of directions) {
  //     const newRow = row + dr;
  //     const newCol = col + dc;

  //     if (newRow >= 0 && newRow < graph.length && newCol >= 0 && newCol < graph[0].length && graph[newRow][newCol] === 1) {
  //         neighbors.push([newRow, newCol]);
  //     }
  // }

  // return neighbors;



function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here 
}

module.exports = [getNeighbors, islandSize];
