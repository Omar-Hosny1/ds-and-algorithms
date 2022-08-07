// 10 --> 15 --> 20
// H             T
// Simple LinkedList

// let myLinkedList = {
//   Head: {
//     value: 10,
//     next: {
//       value: 15,
//       next: {
//         value: 20,
//         next: null,
//       },
//     },
//   },
// };

/*
**OPTIONAL**
class Node { 
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
*/

class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = { value: value, next: null };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(1);
console.log(myLinkedList.head);
