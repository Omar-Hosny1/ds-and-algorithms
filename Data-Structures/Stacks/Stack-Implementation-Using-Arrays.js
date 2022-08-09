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
// const myStack = new Stack(0);

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (s.length == 0) return 0;
  let counter = 0;
  let parentheses = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      parentheses.push("(");
      continue;
    }
    if (s[i] == ")" && parentheses[parentheses.length - 1] == "(") {
      parentheses.pop();
      counter += 2;
    }
  }
  return counter;
};
console.log(longestValidParentheses(")()())"));
//")(())())"
