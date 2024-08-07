// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here 
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      // Your code here 
      this.root = null;
    }
  
    insert(val, currentNode=this.root) {
      // Your code here 
      const newNode = new TreeNode(val);
  
      if (this.root === null) {
        this.root = newNode;
      }else{
        if(val < currentNode.val){
          if(currentNode.left === null){
            currentNode.left = newNode;
          }else{
            this.insert(val,currentNode.left);
          }
        }else{
          if(currentNode.right === null){
            currentNode.right = newNode;
          }else{
            this.insert(val,currentNode.right);
          }
        }
  
      }
    
    }
  
    search(val) {
      // Your code here 
      // const searchNode = (currentNode, val) => {
      //   if (currentNode === null) {
      //     return false;
      //   } else if (currentNode.val === val) {
      //     return true;
      //   } else if (val < currentNode.val) {
      //     return searchNode(currentNode.left, val);
      //   } else {
      //     return searchNode(currentNode.right, val);
      //   }
      // };
  
      // return searchNode(this.root, val);
  
      let currentNode = this.root;
  
      while(currentNode){
        if(val < currentNode.val){
          currentNode = currentNode.left;
        }else if(val > currentNode.val){
          currentNode = currentNode.right;
        }else{
          return true;
        }
      }
      return false;
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      // Your code here 
      if(currentNode !== null){
        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right)
      }
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      // Your code here 
      if (currentNode !== null) {
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
      }
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      // Your code here 
      if (currentNode !== null) {
        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
      }
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // Your code here 
      if(this.root === null)return;
          // initialize a stack with the root node
          const queue = [this.root];
  
          while (queue.length > 0) {
            const node = queue.shift();
            console.log(node.val);
      
            if (node.left !== null) {
              queue.push(node.left);
            }
      
            if (node.right !== null) {
              queue.push(node.right);
            }
  
      }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // Your code here 
      if (this.root === null) return;
  
      const stack = [this.root];
    
      while (stack.length > 0) {
        const node = stack.pop();
        console.log(node.val);
    
        if (node.left) {
          stack.push(node.left);
        }
    
        if (node.right) {
          stack.push(node.right);
        }
      }
    }
  }
  
  module.exports = { BinarySearchTree, TreeNode };
