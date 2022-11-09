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

// console.log(countSubstrings("abc"));

function isPlaindrome(s) {
  if (s.length == 0 || s.length == 1) return true;
  let reversedS = "";
  for (let i = 0; i < s.length; i++) {
    reversedS = s[i] + reversedS;
  }
  return reversedS === s;
}

var addBinary = function (a, b) {
  if (a.length == 1 && b.length == 1) {
    if (a == "0" && b == "0") return "0";
    if ((a == "1" && b == "0") || (a == "0" && b == "1")) return "1";
    if ((a == "1" && b == "1") || (a == "1" && b == "1")) return "10";
  }
  let decimalSum = binaryToDecimal(a) + binaryToDecimal(b);

  return decimalToBinary(decimalSum);
};

function binaryToDecimal(array) {
  let power = 0;
  let index = array.length - 1;
  let sum = 0;
  while (index >= 0) {
    if (array[index] == 0) {
      index--;
      power++;
    } else {
      sum += 2 ** power;
      power++;
      index--;
    }
  }
  return sum;
}

function decimalToBinary(num) {
  let result = "";
  while (num > 0) {
    if (num % 2 == 0) {
      result = "0" + result;
    } else {
      result = "1" + result;
    }
    num = Math.floor(num / 2);
  }
  return result;
}

// console.log(addBinary("1010", "1011"));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  nums3 = nums3.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (binarySearch(nums2, nums1[i]) || binarySearch(nums3, nums1[i]))
      result.push(nums1[i]);
    // result.push(nums1[i]);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (binarySearch(nums1, nums2[i]) || binarySearch(nums3, nums2[i]))
      result.push(nums2[i]);
  }

  return Array.from(new Set(result));
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

// console.log(
//   twoOutOfThree(
//     [2, 15, 10, 11, 14, 12, 14, 11, 9, 1],
//     [8, 9, 13, 2, 11, 8],
//     [13, 5, 15, 7, 12, 7, 8, 3, 13, 15]
//   )
// );

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  let map1 = {};
  items1 = [...items1, ...items2];

  for (let i in items1) {
    let currentEle = items1[i];
    if (map1[currentEle[0]] == undefined) {
      map1[currentEle[0]] = currentEle[1];
    } else {
      map1[currentEle[0]] = map1[currentEle[0]] + currentEle[1];
    }
  }

  return Object.entries(map1)
    .map((ele) => [+ele[0], ele[1]])
    .sort((a, b) => a[0] - b[0]);
};
// [[1,1],[3,2],[2,3],[2,1],[3,2],[1,3]]
let res = mergeSimilarItems(
  [
    [1, 1],
    [4, 5],
    [3, 8],
    [3, 1],
    [1, 5],
  ],
  [
    [3, 1],
    [1, 5],
  ]
);
// console.log(res);

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let map = {};
  for (let i in nums) {
    if (map[nums[i]] == undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] = map[nums[i]] + 1;
    }
  }
  let result = [];
  for (let key in map) {
    if (map[key] == 1) result.push(key);
  }
  return result;
};
// [1,1,2,2,3,5]
// singleNumber([1, 2, 1, 3, 2, 5]);

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let nums = [];
  for (let i = 0; i < n + 1; i++) {
    nums.push(i);
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(countOnes(decimalToBinary(nums[i])));
  }
  return result;
};

function decimalToBinary(num) {
  let result = "";
  while (num > 0) {
    if (num % 2 == 0) {
      result = "0" + result;
    } else {
      result = "1" + result;
    }
    num = Math.floor(num / 2);
  }
  return result;
}
function countOnes(str) {
  let length = str.split("").filter((ele) => ele !== "0").length;
  return length;
}

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const binaryNum = decimalToBinary(num);
  let res = [];
  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] == "0") res.push(1);
    if (binaryNum[i] == "1") res.push(0);
  }
  return binaryToDecimal(res);
};
function binaryToDecimal(array) {
  let power = 0;
  let index = array.length - 1;
  let sum = 0;
  while (index >= 0) {
    if (array[index] == 0) {
      index--;
      power++;
    } else {
      sum += 2 ** power;
      power++;
      index--;
    }
  }
  return sum;
}

function decimalToBinary(num) {
  let result = "";
  while (num > 0) {
    if (num % 2 == 0) {
      result = "0" + result;
    } else {
      result = "1" + result;
    }
    num = Math.floor(num / 2);
  }
  return result;
}
// console.log(77 % 40);

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let map = {};
  for (let i in nums) {
    let ele = nums[i];
    if (map[ele] == undefined) {
      map[ele] = 1;
    } else {
      map[ele] = map[i] + 1;
    }
  }
  let result = 0;
  for (let i in map) {
    if (map[i] == 1) {
      result += +i;
    }
  }
  return result;
};
// console.log(sumOfUnique([1, 2, 3, 1]));

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let hashSet = new Set();
  let length = 0;
  while (true) {
    let sum = addPow2(n.toString());
    hashSet.add(sum);
    length++;
    if (hashSet.size !== length) return false;
    if (sum == 1) return true;
    n = sum;
  }
};

function addPow2(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let curr = +str[i];
    sum += curr ** 2;
  }
  return sum;
}
// console.log(isHappy(19));

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // let map = {};
  // for (let i in nums) {
  // map[i] = nums[i];
  // }
  // console.table(map);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let max = 0;
    if (nums[i] == 1) max++;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == 1) {
        if (nums[j] == 1) {
          max++;
        } else {
          break;
        }
      }
    }
    result.push(max);
    max = 0;
  }
  return Math.max(...result);
};
// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

function findMaxConsecutiveOnes2(nums) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else count = 0;
    max = Math.max(count, max);
  }
  return max;
}
// findMaxConsecutiveOnes2([1, 1, 0, 1, 1, 1]);

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  word = word.split("");
  let isOkUpperCase = word.every((ele) => ele == ele.toUpperCase());
  if (isOkUpperCase) return true;
  let isOkLowerCase = word.every((ele) => ele == ele.toLowerCase());
  if (isOkLowerCase) return true;
  if (word[0] == word[0].toUpperCase()) {
    let counter = 0;
    for (let i = 1; i < word.length; i++) {
      if (word[i] == word[i].toUpperCase()) {
        counter++;
      }
    }
    if (counter == word.length - 2) return true;
  } else {
    return false;
  }
  return false;
};
// console.log(detectCapitalUse("FFFFFFFFFFFFFFFFFFFFf"));

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  title = title.split(" ");
  for (let i = 0; i < title.length; i++) {
    if (title[i].length == 1 || title[i].length == 2) {
      title[i] = title[i].toLowerCase();
    } else {
      let str = title[i][0].toUpperCase();
      str += title[i].slice(1).toLowerCase();
      title[i] = str;
    }
  }
  return title.join(" ");
};

// console.log(capitalizeTitle("of"));

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let currentEle = image[i];
    currentEle = invertBinary(currentEle.reverse());
  }
  return image;
};

function invertBinary(arr) {
  let i = 0;
  let j = arr.length - 1;
  if (arr.length % 2 == 1) {
    arr[j] = arr[j] == 0 ? 1 : 0;
    j = arr.length - 2;
  }
  while (i < j) {
    arr[i] = arr[i] == 0 ? 1 : 0;
    arr[j] = arr[j] == 0 ? 1 : 0;
    i++;
    j--;
  }
  return arr;
}

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt() > target.charCodeAt()) {
      return letters[i];
    }
  }
  return letters[0];
};
// console.log(nextGreatestLetter(["c", "f", "j"], "j"));

// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  while (true) {
    if (!firstAndLastRemovel(s, part)) return s;
    let indecies = firstAndLastRemovel(s, part);
    s = s.substring(0, indecies[0]) + s.substring(indecies[1] + 1);
  }
};

function firstAndLastRemovel(s, p) {
  if (!s.includes(p)) return "";
  let lengthOfThePart = p.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == p[0]) {
      let subSuq = s.substring(i, i + lengthOfThePart);
      if (subSuq == p) return [i, i + lengthOfThePart - 1];
    }
  }
}
// console.log(removeOccurrences("daabcbaabcbc", "abc"));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return afterBackspace(s) == afterBackspace(t);
};
function afterBackspace(s) {
  s = s.split("");
  let stack = [];
  for (let char of s) {
    if (char !== "#") stack.push(char);
    else stack.pop();
  }
  return stack.join("");
}

//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i]);
    res.push(nums[i + n]);
  }
  return res;
};

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let firstMax = score.indexOf(Math.max(...score));
  score[firstMax] = "Gold Medal";
  let secMax = score.indexOf(Math.max(...score.filter((ele) => Number(ele))));
  score[secMax] = "Silver Medal";
  let thirdMax = score.indexOf(Math.max(...score.filter((ele) => Number(ele))));
  score[thirdMax] = "Bronze Medal";
  return score;
};
findRelativeRanks([10, 3, 8, 9, 4]);

// console.log(findRelativeRanks([10, 3, 8, 9, 4]));
// [3, 8, 9, 4, 10]

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let theRev = "";
  for (let i = 0; i < word.length; i++) {
    if (!word[i] == ch) {
      theRev += word[i];
    }
    if (word[i] == ch) {
      word = word.substring(i);
    }
  }
  return theRev.split("").reverse().join("") + word;
};

/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  let result = 0;
  for (let i = 0; i < properties.length; i++) {
    let currentEle = properties[i];
    for (let j = i + 1; j < properties.length; j++) {
      if (currentEle[0] > properties[j][0] || currentEle[1] > properties[j][1])
        result++;
    }
  }
  return result;
};
var intersect = function (nums1, nums2) {
  let hash = {},
    result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (hash[nums1[i]]) {
      hash[nums1[i]]++;
    } else hash[nums1[i]] = 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (hash[nums2[i]]) {
      result.push(nums2[i]);
      hash[nums2[i]]--;
    }
  }
  return result;
};

// intersect([1, 2, 2, 1], [2, 2]);
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  if (k > 1000) s = Array.from(new Set(s)).join("");
  if (new Set(s).size == s.length) return s;
  let KDASH = k;
  let pointer = 0;
  while (pointer < s.length) {
    let curSubString = s.substring(pointer, k);
    if (new Set(curSubString).size == 1 && curSubString.length == KDASH) {
      s = s.substring(0, pointer) + s.substring(k);
      pointer = 0;
      k = KDASH;
    } else {
      pointer++;
      k++;
    }
  }
  return s;
};
// console.log(removeDuplicates("pbbcggttciiippooaais", 2));

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let map = {};
  for (let ele of nums) {
    if (ele % 2 == 0) {
      if (map[ele] == undefined) {
        map[ele] = 1;
      } else {
        map[ele] = map[ele] + 1;
      }
    }
  }

  let max = -1;
  let maxElement = -1;
  for (let key in map) {
    if (map[key] > max) {
      max = map[key];
      maxElement = key;
    }
  }
  return +maxElement;
};
// console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let answer = [];
  for (let i = 0; i < boxes.length; i++) {
    let steps = 0;
    for (let j = i + 1; j < boxes.length; j++) {
      if (boxes[j] == "1") {
        steps += Math.abs(i - j);
      }
    }
    answer.push(steps);
    // steps = 0;
  }
  return answer;
};
// console.log(minOperations("001011"));
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let result = [];
  let vowels = ["a", "e", "i", "o", "u"];
  let currentIndex = 0;
  for (let i = 0; i < n * 2; i++) {
    for (let ch = 0; ch < vowels.length; ch++) {
      let currChar = vowels[currentIndex];
      if (currChar.charCodeAt() <= vowels[ch].charCodeAt())
        result.push(currChar + vowels[ch]);
    }
    if (currentIndex == 4) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  }
  return result.length;
};

// console.log(countVowelStrings(1));

var lengthOfLongestSubstring = function (s) {
  let fast = 0,
    slow = 0,
    max = 0,
    set = new Set();

  while (fast < s.length) {
    const element = s[fast];
    if (!set.has(element)) {
      set.add(element);
      fast++;
    } else {
      set.delete(s[slow]);
      slow++;
    }
    max = Math.max(max, set.size);
  }
  return max;
};
// console.log(lengthOfLongestSubstring("abcabcbb"));

/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  for (let i = 0; i < s.length; i++) {
    let indexOfDistance = s[i].charCodeAt() - 97;
    if (searchByTwo(s, i + 1, s[i]) == undefined) continue;
    let theActualDistance = searchByTwo(s, i + 1, s[i]) - (i + 1);
    if (distance[indexOfDistance] !== theActualDistance) return false;
  }
  return true;
};

function searchByTwo(s, start, target) {
  let end = s.length - 1;
  while (start <= end) {
    if (s[start] == target) return start;
    else if (s[end] == target) return end;
    start++;
    end--;
  }
}

// let result = checkDistances(
//   "aa",
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// );
// console.log(result);

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let col = [];
  let maxCol = [];
  let length = matrix.length;
  let isEq = false;
  if (matrix.length == matrix[0].length) isEq = true;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!isEq) {
        if (j == matrix[i].length - 1) continue;
      }
      console.log(j, i);
      col.push(matrix[j][i]);
    }
    maxCol.push(Math.max(...col));
    col = [];
  }
  let row = [];
  let maxRow = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      row.push(matrix[i][j]);
    }
    maxRow.push(Math.min(...row));
    row = [];
  }
  console.log(maxCol, maxRow);
  let result = maxRow.filter((ele) => maxCol.includes(ele));
  return result;
};

// console.log(ewq);
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  if (sentence.length < 26) return false;
  let map = {};
  for (let i in sentence) {
    const element = sentence[i];
    if (map[element] == undefined) map[element] = 1;
    else map[element] = map[element] + 1;
  }
  return Object.entries(map).length == 26;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s.trim();
  if (s.length == 0) return 0;
  let list = [];
  if (s.split(" ").some((ele) => ele == "")) {
    return s.split(" ").filter((ele) => ele !== "");
  }
  return s.split(" ").filter((ele) => ele !== "");
};

// countSegments("Of all the gin joints in all the towns in all the world,   ");
// console.log(countSegments("Hello, my name is John"));

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let numOfRows = 0;
  for (let index = 1; index <= n; index++) {
    n -= index;
    numOfRows++;
  }
  return numOfRows;
};
// arrangeCoins(5);
// console.log(arrangeCoins(8));

let wqe = [4, 2, 6, 1, 3].sort((a, b) => a - b);

let resqew = Infinity;
for (let i = 0; i < wqe.length - 1; i++) {
  let abs = Math.abs(wqe[i] - wqe[i + 1]);
  if (abs < resqew) resqew = abs;
}
// console.log(resqew);

const MAP = {
  1: "Gold Medal",
  2: "Silver Medal",
  3: "Bronze Medal",
};
var findRelativeRanks = function (score) {
  const hashmap = {};
  const sortScore = [...score].sort((a, b) => b - a);
  let output = [];

  for (let i = 0; i < sortScore.length; i++) {
    console.log(MAP[`${i + 1}`] || `${i + 1}`);
    hashmap[sortScore[i]] = MAP[`${i + 1}`] || `${i + 1}`;
  }

  for (let i = 0; i < score.length; i++) {
    output.push(hashmap[score[i]]);
  }

  return output;
};
// findRelativeRanks([10, 3, 8, 9, 4]);
// console.log(findRelativeRanks([10, 3, 8, 9, 4]));
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  if (new Set(nums).size == 1) {
    if (nums[0] == 0) return 0;
    else return 1;
  }
  let op = 0;
  nums = nums.filter((ele) => ele !== 0).sort((a, b) => a - b);
  let i = 0;
  while (nums[nums.length - 1] !== 0) {
    let fele = nums[i];
    nums = nums.map((ele) => ele - fele);
    i++;
  }
  return i;
};

// console.log(minimumOperations([1, 5, 0, 3, 5]));
// console.log([1, 3, 2, 2, 5, 2, 3, 7].sort((a, b) => a - b));
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  //     if(new Set(nums).size == 1 && nums[0] == 0) return true
  //     if(new Set(nums).size == 1 && k == 0) return true
  //     if(new Set(nums).size == 1) return false
  let map = {};
  for (let i in nums) {
    let ele = nums[i];
    if (ele == 1) {
      if (map[ele] == undefined) {
        map[ele] = [+i];
      } else {
        let arr = map[ele];
        // console.log(arr, i);
        if (i - arr[arr.length - 1] > k) {
          map[ele] = [...map[ele], +i];
        } else {
          return false;
        }
      }
    }
  }
  return true;
};

// console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let res = [];
  for (let i = 0; i < index.length; i++) {
    if (res[index[i]] == undefined) {
      res[index[i]] = nums[i];
    } else {
      res = shiftTheEle(res, index[i], nums[i]);
    }
  }
  return res;
};
// console.log(createTargetArray([0, 1, 0], [0, 1, 0]));

function shiftTheEle(arr, index, ele) {
  let half = [];
  half.push(ele);
  for (let i = index; i < arr.length; i++) {
    half.push(arr[i]);
  }
  return [...arr.slice(0, index), ...half];
}
// console.log(shiftTheEle([0, 1], 0, 0));
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 1) return [[1]];
  if (numRows == 2) return [[1], [1, 1]];
  let res = [];
  res.push([1]);
  for (let i = 1; i < numRows; i++) {
    let prev = res[res.length - 1];
    res.push(createNewPascal(prev));
  }
  return res;
};

function createNewPascal(prev) {
  let res = [];
  res.push(1);
  for (let i = 0; i < prev.length - 1; i++) {
    const element = prev[i];
    const element1 = prev[i + 1];
    res.push(element + element1);
  }
  res.push(1);
  return res;
}
// generate(5);
// console.log(generate(5));

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let eleLength = matrix[0].length;
  for (let i = 0; i < matrix.length - 1; i++) {
    let firstSlice = matrix[i].slice(0, eleLength - 1);
    let secSlice = matrix[i + 1].slice(1, eleLength);
    if (!theSameArr(firstSlice, secSlice)) return false;
  }
  return true;
};
function theSameArr(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// console.log(
//   isToeplitzMatrix([
//     [1, 2],
//     [2, 2],
//   ])
// );

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let sumOfTheArr = nums.reduce((ele, acc) => ele + acc);
  let rightSum = nums.reduce((ele, acc) => ele + acc);
  for (let i = 0; i < nums.length; i++) {
    rightSum = sumOfTheArr - nums[i] - leftSum; // 9 - 2 - 1
    if (leftSum == rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
};
// console.log(pivotIndex([1, 2, 3, 2, 1]));

var largestLocal = function (grid) {
  let result = [];

  for (let i = 1; i < grid.length - 1; i++) {
    let resultRow = [];
    for (let j = 1; j < grid[i].length - 1; j++) {
      let max = Math.max(
        grid[i - 1][j - 1],
        grid[i - 1][j],
        grid[i - 1][j + 1],

        grid[i][j - 1],
        grid[i][j],
        grid[i][j + 1],

        grid[i + 1][j - 1],
        grid[i + 1][j],
        grid[i + 1][j + 1]
      );
      resultRow.push(max);
    }
    result.push(resultRow);
  }

  return result;
};

// console.log(
//   largestLocal([
//     [9, 9, 8, 1],
//     [5, 6, 2, 6],
//     [8, 2, 6, 4],
//     [6, 2, 2, 2],
//   ])
// );

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let counter = 0;
  let sortedNums = [...nums].sort((a, b) => a - b);
  let i = 0,
    j = 1;
  while (j < sortedNums.length) {
    if (sortedNums[i] == sortedNums[j]) {
      if (sortedNums[j + 1] == undefined) {
        sortedNums = sortedNums.slice(0, i);
      } else {
        sortedNums = [...sortedNums.slice(0, i), ...sortedNums.slice(j + 1)];
      }
      i = 0;
      j = 1;
      counter++;
    } else {
      i++;
      j++;
    }
  }
  return [counter, sortedNums.length];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs2 = function (nums) {
  let counter = 0;
  let sortedNums = [...nums].sort((a, b) => a - b);
  let stack = [];
  for (let i = 0; i < sortedNums.length; i++) {
    let lstEle = stack[stack.length - 1];
    let ele = sortedNums[i];
    if (lstEle == ele) {
      stack.pop();
      counter++;
    } else {
      stack.push(ele);
    }
  }
  return [counter, stack.length];
};
// console.log(numberOfPairs2([1, 2, 2, 3, 4, 4, 5]));

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (isUpperCase(s[i])) res.push(s[i]);
  }
  let letterRes = "-";
  for (let i = 0; i < s.length; i++) {
    if (!isUpperCase(s[i])) {
      let upperCaseLetter = String.fromCharCode(s[i].charCodeAt() - 32);
      if (res.includes(upperCaseLetter)) {
        if (letterRes.charCodeAt() < s[i].charCodeAt()) {
          letterRes = s[i];
        }
      }
    }
  }
  return letterRes.toUpperCase();
};

function isUpperCase(char) {
  if (char.toUpperCase() == char) return true;
}

// console.log(greatestLetter("arRAzFif"));

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  let lengthOfTheRow = grid[0].length;
  for (let i = 0; i < grid.length; i++) {
    if (i == 0 || i == grid.length - 1) {
      if (grid[i][0] == 0 || grid[i][lengthOfTheRow - 1] == 0) return false;
      for (let j = 1; j < lengthOfTheRow - 1; j++) {
        if (grid[i][j] !== 0) return false;
      }
    } else {
      if (grid[i][0] !== 0 || grid[i][lengthOfTheRow - 1] !== 0) return false;
      for (let j = 1; j < lengthOfTheRow - 1; j++) {
        if (grid[i][j] == 0) return false;
      }
    }
  }
  return true;
};

// console.log(
//   checkXMatrix([
//     [5, 7, 0],
//     [0, 3, 1],
//     [0, 5, 0],
//   ])
// );
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let map = {};
  for (let ele of matches) {
    let player1 = ele[0];
    let player2 = ele[1];
    if (map[player1] == undefined) {
      map[player1] = 2;
    }
    if (map[player2] == undefined) {
      map[player2] = 2;
    }
  }
  for (let i = 0; i < matches.length; i++) {
    const element = matches[i][1];
    if (map[element] !== undefined) {
      map[element] = map[element] - 1;
    }
  }
  let playersThatHaveNotLostAnyMatches = [];
  let playersThatLostOneMatche = [];
  for (const key in map) {
    if (map[key] == 2) playersThatHaveNotLostAnyMatches.push(+key);
    if (map[key] == 1) playersThatLostOneMatche.push(+key);
  }
  return [playersThatHaveNotLostAnyMatches, playersThatLostOneMatche];
};

findWinners([
  [2, 3],
  [1, 3],
  [5, 4],
  [6, 4],
]);

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  if (new Set(s).size == 1 && k == 1) return s.length;
  if (k == 0) {
    return characterReplacement2(s, k);
  }
  let kDash = k;
  let i = 0;
  let test = "",
    mainChar = "",
    returnPos = [];
  let lengths = [];
  while (i < s.length) {
    if (!mainChar) mainChar = s[i];
    if (mainChar == s[i]) {
      test += s[i];
    } else {
      if (kDash !== 0) {
        test += mainChar;
        returnPos.push(i);
        kDash--;
      } else {
        i = returnPos[0];
        returnPos.shift();
        lengths.push(test.length);
        mainChar = "";
        kDash = k;
        test = "";
      }
    }
    if (i == s.length - 1) lengths.push(test.length);
    i++;
  }
  if (lengths.length == 1) return lengths[0];
  return Math.max(...lengths);
};
// characterReplacement("ABAB", 2);
// console.log(characterReplacement("ABAB", (k = 2)));

var characterReplacement2 = function (s, k) {
  const charCount = {};
  let l = 0,
    res = 0,
    maxF = 0;
  for (let r = 0; r < s.length; r++) {
    charCount[s[r]] = charCount[s[r]] + 1 || 1;
    maxF = Math.max(maxF, charCount[s[r]]);
    while (r - l + 1 - maxF > k) {
      charCount[s[l]]--;
      l++;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length == 1 && magazine.length == 1) {
    return ransomNote == magazine;
  }
  let map1 = {};
  for (let ele of magazine) {
    if (!map1[ele]) {
      map1[ele] = 1;
    } else {
      map1[ele] = map1[ele] + 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const element = ransomNote[i];
    if (map1[element] == undefined) return false;
    if (map1[element] > 0) {
      map1[element] = map1[element] - 1;
    } else {
      return false;
    }
  }
  return true;
};
// console.log(canConstruct("aa", "ab"));

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  if (nums.length == 1) return 0;
  let sortedNums = [...nums].sort((a, b) => a - b);
  if (isEqualArr(nums, sortedNums)) return 0;
  let start = 0,
    end = nums.length - 1;
  while (true) {
    if (sortedNums[start] !== nums[start] && sortedNums[end] !== nums[end])
      break;
    if (sortedNums[start] == nums[start]) start++;
    if (sortedNums[end] == nums[end]) end--;
  }
  return nums.slice(start, end + 1).length;
};
// console.log(findUnsortedSubarray([1, 2, 3]));
// if ([1, 2, 3] == [1, 2, 3]) console.log("ads");
function isEqualArr(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let mapT = {};
  for (let i in t) {
    let ele = t[i];
    mapT[ele] == undefined ? (mapT[ele] = 1) : (mapT[ele] += 1);
  }
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    let ele = s[i];
    if (mapT[ele] > 0) {
      mapT[ele] -= 1;
    } else {
      counter++;
    }
  }
  return counter;
};
// console.log(minSteps("leetcode", "practice"));

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  let sortedH = [...heights].sort((a, b) => a - b).reverse();
  let res = [];
  for (let i = 0; i < names.length; i++) {
    res[sortedH.indexOf(heights[i])] = names[i];
  }
  return res;
};
// console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let i = 1,
    subStr = s[0];
  while (subStr.length <= Math.floor(s.length / 2)) {
    if (!isRepeatedPattern(subStr, s)) {
      subStr += s[i++];
    } else {
      return true;
    }
  }
  return false;
};
function isRepeatedPattern(pattern, s) {
  let str = "";
  for (let i = 0; i < s.length; i += pattern.length) {
    str = s[i];
    if (pattern !== s.slice(i, i + pattern.length)) {
      return false;
    }
  }
  return true;
}
// console.log(repeatedSubstringPattern("ababababab"));

/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  let map = {},
    currentNum = "";
  function addToMap(currentNum) {
    map[currentNum] == undefined
      ? (map[currentNum] = 1)
      : (map[currentNum] += 1);
  }
  for (let i = 0; i < word.length; i++) {
    if (Number(word[i]) || word[i] == "0") {
      currentNum += word[i];
    } else {
      if (currentNum !== "") {
        if (currentNum.includes("0")) {
          currentNum = removeZeros(currentNum);
        }
        addToMap(currentNum);
      }
      currentNum = "";
    }
  }
  if (currentNum !== "") {
    if (currentNum.includes("0")) {
      currentNum = removeZeros(currentNum);
    }
    addToMap(currentNum);
  }
  return Object.keys(map).length;
};
function removeZeros(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") return str.slice(i);
  }
  return res;
}

// console.log(numDifferentIntegers("a1b01c001"));
// console.log(removeZeros("10"));

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let isOk = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      s1[i] = s2[i];
      console.log(s1);
      isOk++;
      if (isOk == 2) {
        return s1 == s2;
      }
    }
  }
};
function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    return false;
  }
}

let emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];
for (let i = 0; i < emails.length; i++) {
  const element = emails[i];
  if (ValidateEmail(element[i])) console.log("ok");
}

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let res = [];
  let lenOfRow = matrix[0].length;
  for (let i = 0; i < lenOfRow; i++) {
    res.push(getCol(matrix, i));
  }
  return res;
};

function getCol(matrix, k) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    let col = [];
    for (let j = k; j < matrix[i].length; j++) {
      col.push(matrix[i][j]);
      break;
    }
    res.push(...col);
    col = [];
  }
  return res;
}

transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
