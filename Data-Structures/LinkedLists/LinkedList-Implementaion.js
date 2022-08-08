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

  printList() {
    let LinkedList = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      LinkedList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return LinkedList;
  }

  traverseToIndex(index) {
    let conter = 0;
    let replacedNode = this.head;
    while (index !== conter) {
      replacedNode = replacedNode.next;
      conter++;
    }
    return replacedNode;
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

  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }
    if (index == 0) {
      return this.prepend(value);
    }
    const newNode = { value, next: null };
    // let conter = 0;
    // let replacedNode = this.head;
    // while (index !== conter) {
    //   replacedNode = replacedNode.next;
    //   conter++;
    // }
    let replacedNode = this.traverseToIndex(index);
    newNode.next = replacedNode;
    let count = 0;
    let mainLinked = this.head;
    while (count <= index) {
      count++;
      if (count == index) {
        mainLinked.next = newNode;
      }
      mainLinked = mainLinked.next;
    }
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(4);
myLinkedList.insert(2, 3);
myLinkedList.insert(1, 1.5);

console.log(myLinkedList.printList());
