class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) return null;
    if (!this.length) this.bottom = null;
    this.top = this.top.next;
    this.length--;
    return this;
  }

  isEmtpy() {
    return this.length == 0;
  }
}

const myStack = new Stack();
