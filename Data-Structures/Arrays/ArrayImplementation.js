class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length++] = item;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const deletedItem = this.data[index];
    this.shiftItems(index);
    delete this.data[this.length - 1];
    this.length = this.length - 1;
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const array = new MyArray();
array.push("omar");
array.push("hosny"); // d
array.push("mohamed");
// array.pop();
array.delete(1);
console.log(array.data);
console.log(array.length);
