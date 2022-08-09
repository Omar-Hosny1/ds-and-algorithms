const reverse = (string) => {
  let reversedString = "";
  for (let i = 0; i < string.length; i++) {
    reversedString = string[i] + reversedString;
  }
  return reversedString;
};

const mergeSortedArray = (array1, array2) =>
  [...array1, ...array2].sort((a, b) => a - b);

// console.log(mergeSortedArray([1, 3, 5], [1, 2, 6]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let startPoint = 0;
  let endPoint = nums.length - 1;

  while (startPoint <= endPoint) {
    let currentSum = nums[startPoint] + nums[endPoint];
    console.log(currentSum);
    if (currentSum > target) --endPoint;
    else if (currentSum < target) ++startPoint;
    else if (currentSum == target) return [startPoint, endPoint];
  }
  return undefined;
};
// console.log(twoSum([3, 2, 4], 6));

const twoSum2 = (array1, array2) => {
  let lengthOfArray1 = array1.length;
  let lengthOfArray2 = array2.length;
  let result = [];
  let i = 0,
    j = 0,
    stop = false;
  while (!stop) {
    if (array1[i] == array2[j]) {
      result.push(array1[i]);
      result.push(array2[j]);
      i++;
      j++;
    }
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    }
    if (array1[i] > array2[j]) {
      result.push(array2[j]);
      j++;
    }
    if (i == lengthOfArray1) {
      for (let index = j; index < array2.length; index++) {
        result.push(array2[index]);
      }
      stop = true;
    }

    if (j == lengthOfArray2) {
      for (let index = i; index < array1.length; index++) {
        result.push(array1[index]);
      }
      stop = true;
    }
  }

  return result;
};

twoSum2([1, 3, 5], [1, 2, 6, 7]);

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      nums[index++] = nums[i];
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  let firstIndex = sortedNums[0];
  let res = false;
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i + 1] == sortedNums[i]) {
      res = true;
    }
  }
  return res;
};

// console.log(containsDuplicate([1, 3, 3]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const originalArray = [...nums];
  nums = nums.sort((a, b) => a - b);
  let a = 0,
    b = nums.length - 1;

  while (a <= b) {
    if (nums[a] + nums[b] > target) b--;
    if (nums[a] + nums[b] < target) a++;
    if (nums[a] + nums[b] == target) {
      return [
        originalArray.indexOf(nums[a]),
        originalArray.lastIndexOf(nums[b]),
      ];
    }
  }
  return -1;
};

console.log(twoSum([3, 3], 6));
