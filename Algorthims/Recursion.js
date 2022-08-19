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

totalSum(3);
