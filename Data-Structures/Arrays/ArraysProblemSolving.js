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

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) result.push(nums[i]);
  }
  return result;
};
// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (nums.length == 1) return [[], nums];
  let set = new Set(nums);
  nums = Array.from(set);
  let result = [[], nums];
  for (let i = 0; i < nums.length; i++) {
    result.push([nums[i]]);
    for (let j = i + 1; j < nums.length; j++) {
      result.push([nums[i], nums[j]]);
    }
  }
  return result;
};

// console.log(subsets([0]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let i = 1;
  let result = [];
  nums = nums.sort((a, b) => a - b);
  while (i <= nums.length) {
    if (!binarySearch(nums, i)) result.push(i);
    i++;
  }
  return result;
};

function binarySearch(array, target) {
  let start = 0,
    end = array.length - 1;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] > target) {
      end = middle - 1;
    }
    if (array[middle] < target) {
      start = middle + 1;
    }
    if (array[middle] == target) {
      return true;
    } //T
  }
  return false;
}

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let length = nums.length;
  nums = Array.from(new Set(nums)).sort((a, b) => a - b);
  let i = 1;
  let result = [];
  while (i <= length) {
    if (nums[i - 1] !== i) {
      if (i <= nums.length) {
        result.push(i);
      }
    }
    i++;
  }
  return result;
};
// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        counter++;
      }
    }
  }
  return counter;
};

// console.log(numIdenticalPairs([1, 1, 1, 1]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let smallerNumbersThanCurrent = function (nums) {
  let newArray = [];
  nums.forEach((ele, index) => {
    newArray[index] = 0;
    for (let i = 0; i < nums.length; i++) {
      if (ele > nums[i]) {
        newArray[index]++;
      }
    }
  });
  return newArray;
};

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let row1 = ["e", "i", "o", "p", "q", "r", "t", "u", "w", "y"];
  let row2 = ["a", "d", "f", "g", "h", "j", "k", "l", "s"];
  let row3 = ["b", "c", "m", "n", "v", "x", "z"];
  let result = [];
  for (let i = 0; i < words.length; i++) {
    const sortedWord = words[i].toLowerCase().split("").sort().join("");
    if (row1.includes(sortedWord[0])) {
      for (let j = 0; j < sortedWord.length; j++) {
        if (!binarySearch(row1, sortedWord[j])) {
          break;
        } else {
          if (j == sortedWord.length - 1) {
            result.push(words[i]);
          }
        }
      }
    } else if (row2.includes(sortedWord[0])) {
      for (let j = 0; j < sortedWord.length; j++) {
        if (!binarySearch(row2, sortedWord[j])) {
          break;
        } else {
          if (j == sortedWord.length - 1) {
            result.push(words[i]);
          }
        }
      }
    } else {
      for (let j = 0; j < sortedWord.length; j++) {
        if (!binarySearch(row3, sortedWord[j])) {
          break;
        } else {
          if (j == sortedWord.length - 1) {
            result.push(words[i]);
          }
        }
      }
    }
  }
  return result;
};

// console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

function binarySearch(array, target) {
  let start = 0,
    end = array.length - 1;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] > target) {
      end = middle - 1;
    }
    if (array[middle] < target) {
      start = middle + 1;
    }
    if (array[middle] == target) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  return binarySearch(nums, target);
};

function binarySearch(array, target) {
  let start = 0,
    end = array.length - 1;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] > target) {
      end = middle - 1;
    }
    if (array[middle] < target) {
      start = middle + 1;
    }
    if (array[middle] == target) {
      return true;
    } //T
  }
  return false;
}

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (hasCommonChars(words[i], words[j])) {
        continue;
      } else {
        result.push(words[i].length * words[j].length);
      }
    }
  }
  return result.length ? Math.max(...result) : 0;
};

function hasCommonChars(word1, word2) {
  let result = [];
  word1 = word1.split("").sort().join("");
  word2 = word2.split("").sort().join("");
  for (let i = 0; i < word1.length; i++) {
    if (!binarySearch(word2, word1[i])) {
      result.push();
    }
  }
  return false;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};
  let length = 0;
  nums = nums.sort((a, b) => a - b);
  let result = [];

  for (let i in nums) {
    let currentEle = nums[i];
    if (map[currentEle] == undefined) {
      map[currentEle] = 1;
      length++;
    } else {
      map[currentEle] = map[currentEle] + 1;
    }
  }
  console.log(nums);
  console.log(map);
  // const entries = Object.entries(map)
  //   .map((ele) => ele[1])
  //   .sort((a, b) => a - b)
  //   .reverse();
  // let index = 0;
  // for (let i = 0; i < length; i++) {
  //   if (map[i] == entries[index]) {
  //     result.push(+i);
  //     index++;
  //   }

  // }
  // for (let i in map) {
  //   if (map[i] == entries[index]) {
  //     result.push(+i);
  //     index++;
  //   }
  // }
  // console.log(map);
  // console.log(entries);
  // return result.slice(0, k);
};
// console.log(
//   topKFrequent([
//     3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
//     5, 6,
//   ])
// );

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  words = words.map((ele) => ele.split("").sort().join(""));
};

// console.log(commonChars(["bella", "label", "roller"]));

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let temp = arr[i + 1];
      arr[i] = 0;
      arr[i + 1] = 0;
      arr[i + 2] = temp;
      i += 3;
      // break;
    }
  }
  console.log(arr);
};

// duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);

function sum0(n) {
  let result = [];
  //if n is odd, we wont fill the last cell of the result array. It will be 0 by default.
  for (let i = 0; i < n - 1; i += 2) {
    result[i] = -(i + 1);
    result[i + 1] = i + 1;
  }
  if (n % 2 == 1) result.push(0);
  return result;
}

// console.log(sum0(5));

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  let steps = 0;
  while (num1 > 0 && num2 > 0) {
    if (num1 >= num2) {
      num1 = num1 - num2;
      steps++;
    } else if (num1 <= num2) {
      num2 = num2 - num1;
      steps++;
    }
  }
  return steps;
};

// console.log(countOperations(2, 3));

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  if (s.length == new Set(s).size) return s.length;
  if (new Set(s).size == 1) return 1;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s.slice(i, j + 1).length == new Set(s.slice(i, j + 1)).size) {
        if (result < s.slice(i, j + 1).length) {
          result = s.slice(i, j + 1).length;
        }
      }
    }
  }
  return result;
};

// console.log(lengthOfLongestSubstring("pwwkew"));

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPlaindrome(s.slice(i, j + 1))) {
        result++;
      }
    }
  }
  return result;
};

console.log(countSubstrings("abc"));
function isPlaindrome(s) {
  if (s.length == 0 || s.length == 1) return true;
  let reversedS = "";
  for (let i = 0; i < s.length; i++) {
    reversedS = s[i] + reversedS;
  }
  return reversedS === s;
}
