class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here 
    this.head = null;
    this.length = 0;

  }

  addToHead(val) {
    // Your code here 
    const newNode = new LinkedListNode(val,null)
    newNode.next = this.head; // the newnode have a next value => this.head 
    this.head = newNode; // the new head is new node
    this.length++;
  }

  addToTail(val) {
    // Your code here 
    const newNode = new LinkedListNode(val,null)
    if(!this.head){
      this.head = newNode;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
