const firstRepeatedCharacter = (array) => {
  let MAP = new Map();
  for (let i = 0; i < array.length; i++) {
    if (MAP.get(array[i]) == undefined) {
      MAP.set(array[i], 1);
    } else if (MAP.get(array[i])) {
      const numOfRepeating = MAP.get(array[i]);
      MAP.set(array[i], numOfRepeating + 1);
    }
  }
  const GreatestRe = Math.max(...MAP.values());

  for (let item of MAP) {
    if (item[1] == GreatestRe) return item[0];
  }

  return GreatestRe;
};
// console.log(firstRepeatedCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));

const firstRepeatedCharacterTwo = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        return array[i];
      }
    }
  }
  return "No Repeated Characters!";
};
// console.log(firstRepeatedCharacterTwo([2, 5, 5, 2, 3, 5, 1, 2, 4]));

const firstRepeatedCharacterThree = (array) => {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] == undefined) {
      map[array[i]] = true;
    } else if (map[array[i]] == true) {
      return array[i];
    }
  }
  return undefined;
};
// console.log(firstRepeatedCharacterThree([2, 5, 5, 2, 3, 5, 1, 2, 4])); // DIFFRENT RESULT

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (nums.length == 1) {
    if (nums[0] > 1) {
      return 1;
    } else if (nums[0] == 0) {
      return nums[0] + 1;
    } else if (nums[0] < 0) {
      return 1;
    } else if (nums[0] == 1) return 2;
  }
  const sortedArray = nums.sort((a, b) => a - b);
  let smallestPositiveInteger = 1;
  let stop = false;
  while (stop == false) {
    let isHere = binarySearch(sortedArray, smallestPositiveInteger);
    if (isHere == -1) stop = true;
    else smallestPositiveInteger++;
  }
  return smallestPositiveInteger;
};

function binarySearch(array, target) {
  if (array.length == 1 || array.length == 0) {
    return array;
  }
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
      return middle;
    } //T
  }
  return -1;
}
// console.log(firstMissingPositive([2, 3, 4]));

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sumS = 0;
  let sumT = 0;
  for (let i = 0; i < t.length; i++) {
    sumT += t[i].charCodeAt();
    if (!(i == t.length - 1)) {
      sumS += s[i].charCodeAt();
    }
  }
  const chr = String.fromCharCode(sumT - sumS);
  return chr;
};

// console.log(findTheDifference(w, y));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in map) {
      console.log(target - nums[i] in map);
      return [map[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
      console.log(map);
    }
  }
};

// console.log(twoSum([3, 3, 5, 3], 6));

// console.log("a".charCodeAt(0));
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let mapS = {},
    mapT = {};
  for (let i in s) {
    if (mapS[s[i]] == undefined) {
      mapS[s[i]] = 1;
    } else {
      mapS[s[i]] = mapS[s[i]] + 1;
    }
    if (mapT[t[i]] == undefined) {
      mapT[t[i]] = 1;
    } else {
      mapT[t[i]] = mapT[t[i]] + 1;
    }
  }

  for (let i of s) {
    if (mapS[i] !== mapT[i]) return false;
  }
  return true;
};
// console.log(isAnagram("a", "ab"));
