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
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
console.log(myLinkedList);
