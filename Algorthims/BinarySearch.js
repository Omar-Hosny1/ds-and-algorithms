/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 1;
  let r = n;
  while (true) {
    let middle = Math.floor((l + r) / 2);
    let res = guess(middle);
    if (res > middle) l = middle + 1;
    else if (res < middle) r = middle - 1;
    else return middle;
  }
};
// guessNumber(5);
// console.log(guessNumber(5));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  while (j < t.length) {
    let currentS = s[i];
    let currentT = t[j];
    if (currentS === currentT) {
      i++;
      j++;
    } else if (currentS !== currentT) {
      j++;
    }
  }
  return i == s.length;
};

// console.log(isSubsequence("abc", "ahbgdc"));

const reverse = (s) => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result = s[i] + result;
  }
  return result;
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split(" ");
  console.log(s);
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    let currentEle = reverse(s[i]);
    if (i == s.length - 1) {
      s[index] = currentEle;
    } else {
      s[index] = currentEle + " ";
    }
    index++;
  }
  return s.join("");
};
// console.log(reverseWords("Let's take LeetCode contest"));

const isPlaindrome = (s) => {
  const sDash = reverse(s);
  return sDash == s;
};

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    const currentEle = isPlaindrome(words[i]);
    if (currentEle) return words[i];
  }
  return undefined;
};

// console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// https://leetcode.com/problems/3sum-closest/
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  let k = 2;
  let arrayOf3Sums = [];
  while (k < nums.length) {
    let st = nums[i++];
    let sec = nums[j++];
    let thrd = nums[k++];

    arrayOf3Sums.push(st + sec + thrd);
  }
  for (let i = 0; i < arrayOf3Sums.length; i++) {
    let prevClosestNum = target - 1;
    let nextClosestNum = target + 1;
    if (
      arrayOf3Sums[i] == prevClosestNum++ ||
      arrayOf3Sums[i] == nextClosestNum++
    )
      return arrayOf3Sums[i];
  }
};
console.log(threeSumClosest([0, 0, 0], 1));
// console.log([1, 2, 3].indexOf(0));
