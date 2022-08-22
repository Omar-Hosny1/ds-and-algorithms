// Time Complexity => o(n^2)
// Space Complexity => o(1)

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
console.log(selectionSort([4, 7, 8, 5, 1, 2, 3, 6]));
