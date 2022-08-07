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
}

const myLinkedList = new LinkedList(10);
