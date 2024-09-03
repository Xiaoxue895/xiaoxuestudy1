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

  // Your code here 
  if (graph[row][col] !== 1) return 0; // If the starting cell is not 1, return 0

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add(`${row},${col}`);
  // Initialize size to 0
  let size = 0;

  // While the stack is not empty
  while (stack.length > 0) {
    // Pop the first node
    const [currentRow, currentCol] = stack.pop();
    // Increment size by 1
    size++;

    // Push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    for (const [neighborRow, neighborCol] of getNeighbors(currentRow, currentCol, graph)) {
      const key = `${neighborRow},${neighborCol}`;
      if (!visited.has(key)) {
        stack.push([neighborRow, neighborCol]);
        visited.add(key);
      }
    }
  }

  // Return size
  return size;
}

module.exports = [getNeighbors, islandSize];
