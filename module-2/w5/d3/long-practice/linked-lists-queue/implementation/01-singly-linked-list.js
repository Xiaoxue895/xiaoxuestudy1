// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        // Your code here
        let newNode = new SinglyLinkedNode(val) 

        newNode.next = this.head;

        this.head = newNode;

        this.length++;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (this.length === 0) {
            this.head = newNode;
        }else{
            let curr = this.head;

            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }

        this.length++;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here 
        if(!this.head){
            return undefined;
        }

        let result = this.head;

        if(this.length === 1){
            this.head = null;
        }else{
            this.head = this.head.next;
        }

        this.length--;
        
        return result;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here 
        if(this.length === 0){
            return undefined;
        }

        if(this.length === 1){

            const result = this.head;

            this.head = null;

            this.length--;

            return result;
        }

        let curr = this.head;
        let prev = null;

        while(curr.next){
            prev = curr;
            curr = curr.next
        }

        const result1 = curr;
        prev.next = null;
        this.length--;

        return result1;


        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here 
        if(!this.head){
            return undefined;
        }else{
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here 
        let curr = this.head;

        while(curr){
            console.log(curr.value);
            curr = curr.next;    
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
