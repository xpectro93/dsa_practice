t//NOT MINE, just want reference on methods to add to mine later on
class Node {
  constructor(value) {
    // We want to initialize a Node with a value
    this.value = value;
    // An independent node shouldn't point to anything by default
    this.next = null;
  }
}
​
class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
​
  push(value) {
      const node = new Node(value);
​
      // Check if the LL is empty
      if (this.head === null) {
          this.head = node;
          this.tail = node;
      } else {
          node.next = this.head
          this.head = node;
      }
      this.length++;
  }
​
  append(value) {
      // Instantiate a new node
      const node = new Node(value);
​
      if (this.head === null) {   // Check if the LL is empty
          this.head = node;
          this.tail = node;
      } else {                    // Non-empty LL
          this.tail.next = node;
          this.tail = node;
      }
​
      // Increment length property
      this.length++;
  }
​
  print() {
      let str = "->";
​
      let curr = this.head;
      while (curr) {
          str += ` ${curr.value} -> `;
          curr = curr.next;
      }
      str += "null";
​
      console.log(str);
  }
​
  nodeAt(index) {
      // Error checking, make sure the index < the length of our linked list
      if (index >= this.length) {
          throw Error("Invalid index");
      }
​
      let counter = index; // makes sure we move to the right index
      let pointer = this.head; // start at head
      while (counter > 0) {
          counter--;
          pointer = pointer.next;
      }
      return pointer.value;
  }
​
  pop() {
      // Make sure the LL is not empty
      if (this.head === null) {
          return null;
      }
​
      // save reference to the last item to return value
      const tail = this.tail;
​
      if (this.head === this.tail) {              // Single element, make them all null
          this.head = null;
          this.tail = null;
      } else {                                    // Find the penultimate node
          const pointer = this.head;
          while (pointer.next !== this.tail) {
              pointer = pointer.next;
          }
          this.tail = pointer;                    // Update tail to the previous node
          pointer.next = null;                    // Removing the previous tail from the LL
      }
​
      return tail.value;                          // return value
  }
​
  shift() {
      // Error checking
      if (!this.head) {
          return null;
      }
​
      const head = this.head;
​
      if (this.head === this.tail) {  // Single element LL
          this.head = null;
          this.tail = null;
      } else {                        // Multiple element, make head the second node
          this.head = this.head.next;
      }
​
      this.length--;
      return head.value;
  }
​
  removeAt(index) {
      // Error checking, make sure the index < the length of our linked list
      if (index >= this.length) {
          throw Error("Invalid index");
      }
​
      if (index === 0) {
          return this.shift();
      }
​
      let counter = index - 1;    // makes sure we move to the index -1
      let pointer = this.head;    // start at head
      while (counter > 0) {
          counter--;
          pointer = pointer.next;
      }
​
      // Remove index (i.e., pointer.next)
      pointer.next = pointer.next.next;
​
      this.length--;
      return pointer.value;
  }
​
  find(value) {
      let pointer = this.head;
      let counter = 0;
​
      while (pointer) {
          if (pointer.value === value) {
              return counter;
          }
          pointer = pointer.next;
          counter++;
      }
​
      return -1;
  }
​
  toArray() {
      let arr = [];
      let pointer = this.head;
​
      while (pointer) {
          arr.push(pointer.value);
          pointer = pointer.next;
      }
​
      return arr;
  }
}
//TODO: Turn this into a recursive;