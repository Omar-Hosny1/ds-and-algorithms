// Time Complexity => o(n^2)
// Space Complexity => o(1)

function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(BubbleSort([7, 4, 9, 7, 3, 5, 9, 7, 5, 66, 7, 4, 456]));
