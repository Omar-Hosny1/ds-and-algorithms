class Stack {
  constructor() {
    this.Stack = [];
    this.length = this.Stack.length;
  }
  push(value) {
    if (this.length === 0) this.Stack[0] = value;
    else {
      this.Stack.unshift(value);
    }
    this.length++;
    return this.Stack;
  }
  pop() {
    if (!this.length) return null;
    this.Stack.shift();
    this.length = this.length - 1;
    return this.Stack;
  }

  printStack() {
    console.log(this.Stack);
  }
  peek() {
    return this.Stack[0];
  }
}
const myStack = new Stack(0);
