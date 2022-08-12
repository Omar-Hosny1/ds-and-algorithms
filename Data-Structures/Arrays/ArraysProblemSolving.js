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

// console.log(twoSum([3, 3], 6));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("");
};

// console.log(isAnagram("a", "a"));

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s == "") return true;
  const reversedS = reverse(s)
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLocaleLowerCase();
  return reversedS == s.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let a = 0,
    b = numbers.length - 1;
  while (a <= b) {
    if (numbers[a] + numbers[b] > target) b--;
    if (numbers[a] + numbers[b] < target) a++;
    if (numbers[a] + numbers[b] == target) {
      return [a + 1, b + 1];
    }
  }
  return undefined;
};

// console.log(twoSum([2, 7, 11, 15], 9));

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let currentIndex = s[i];
    if (currentIndex == "[" || currentIndex == "(" || currentIndex == "{") {
      result.push(currentIndex);
    } else {
      if (
        (currentIndex == ")" &&
          result[result.length - 1] == "(" &&
          result.length > 0) ||
        (currentIndex == "]" &&
          result[result.length - 1] == "[" &&
          result.length > 0) ||
        (currentIndex == "}" &&
          result[result.length - 1] == "{" &&
          result.length > 0)
      )
        result.pop();
      else {
        return false;
      }
    }
  }
  return result.length == 0;
};
// console.log(isValid("]"));
