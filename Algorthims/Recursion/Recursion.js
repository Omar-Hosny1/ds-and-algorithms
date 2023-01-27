/**
 * To Build A Recursive Function :
 * 1- Identify The Base Case
 * 2- Identify The Recursive Case
 * 3- Return When Needed. (USUALLY YOU HAVE TWO RETURNS)/
 */

let counter = 0;
function inception() {
  if (counter > 3) {
    return "done";
  }
  counter++;
  return inception();
}

// console.log(inception());

// THE MOST PROPLEMS THAT YOU CAN USE RECURSIVE TO SOLVE IT.

function factorialNumber(num) {
  if (num == 2) {
    return 2;
  }
  return num * factorialNumber(num - 1);
}

// console.log(factorialNumber(5));

function fibonacciNumber(n) {
  if (n < 2) return n;
  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

// console.log(fibonacciNumber(3));

function totalSum(n) {
  if (n < 1) {
    console.log(n);
    return;
  }
  totalSum(n) + totalSum(n - 1);
}

// totalSum(3);

function facR(x) {
  debugger;
  if (x <= 1) {
    return 1;
  }
  return x * facR(x - 1);
}

// facR(4);
// console.log(facR(4));

function facRTail(x, sumSoFar = 1) {
  if (x == 0) {
    return sumSoFar;
  }
  return facRTail(x - 1, sumSoFar * x);
}

// console.log(facRTail(4));

const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const getPartition = function (nums, left, right) {
  const pivotElement = nums[right];
  let partitionIdx = left;

  for (let j = left; j < right; j++) {
    if (nums[j] <= pivotElement) {
      swap(nums, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(nums, partitionIdx, right);

  return partitionIdx;
};

const quickSort = function (nums, left, right) {
  if (left < right) {
    const partitionIndex = getPartition(nums, left, right);

    quickSort(nums, left, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, right);
  }
};
