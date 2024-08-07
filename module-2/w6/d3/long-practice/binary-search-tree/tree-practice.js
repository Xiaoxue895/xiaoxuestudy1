const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here 
  if (!rootNode) return null;
  let current = rootNode;
  while (current.left) {
    current = current.left;
  }
  return current.val;
}

function findMaxBST (rootNode) {
  // Your code here 
  if (!rootNode) return null;
  let current = rootNode;
  while (current.right) {
    current = current.right;
  }
  return current.val;
}

function findMinBT (rootNode) {
  // Your code here 
  if (!rootNode) return null;
  let min = rootNode.val;
  const queue = [rootNode];
  while (queue.length) {
    const node = queue.shift();
    if (node.val < min) min = node.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return min;
}

function findMaxBT (rootNode) {
  // Your code here 
  if (!rootNode) return null;
  let max = rootNode.val;
  const queue = [rootNode];
  while (queue.length) {
    const node = queue.shift();
    if (node.val > max) max = node.val;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return max;
}

function getHeight (rootNode) {
  // Your code here 
  if (!rootNode) return -1;
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

function balancedTree (rootNode) {
  // Your code here
  // function checkBalance(node) {
  //   if (!node) return 0; // 

  //   const leftHeight = getHeight(node.left); 
  //   const rightHeight = getHeight(node.right); 

  //   if (Math.abs(leftHeight - rightHeight) > 1) return -1; 

  //   return Math.max(leftHeight, rightHeight) + 1; 
  // }

  // return checkBalance(rootNode) !== -1; 
  function checkBalance(node) {
    if (!node) return 0; 

    const leftHeight = checkBalance(node.left); 
    if (leftHeight === -1) return -1; 

    const rightHeight = checkBalance(node.right); 
    if (rightHeight === -1) return -1; 

    if (Math.abs(leftHeight - rightHeight) > 1) return -1; 

    return Math.max(leftHeight, rightHeight) + 1; 
  }

  return checkBalance(rootNode) !== -1; 

}

function countNodes (rootNode) {
  // Your code here

  if (!rootNode) return 0; 

  const leftCount = countNodes(rootNode.left); 
  const rightCount = countNodes(rootNode.right); 

  return 1 + leftCount + rightCount; 
  
}

function getParentNode (rootNode, target) {
  // Your code here 
  if (!rootNode) return undefined;

  if (rootNode.val === target) return null;

  const queue = [rootNode];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.left && node.left.val === target) {
      return node;
    }
    if (node.right && node.right.val === target) {
      return node;
    }

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return undefined;
}

function inOrderPredecessor (rootNode, target) {
  // Your code here 
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
