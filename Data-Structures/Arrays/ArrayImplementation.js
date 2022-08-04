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

  display() {
    let DesplayedArray = "[";
    for (let i = 0; i < this.length; i++) {
      if (i == this.length - 1) {
        DesplayedArray += this.data[i];
      } else {
        DesplayedArray += this.data[i] + ", ";
      }
    }
    DesplayedArray += "]";
    return DesplayedArray;
  }
}
