/**
 * Lookup O(n)
 * Pop O(1)
 * Push O(1)
 * Peek O(1)
 *
 * STACK => LIFO (Last In First Out).
 * The Last Item That Comes In Is The Fitst One That Comes Out.
 * */

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    let lastEle = stack.length - 1;
    if (stack[lastEle] == s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};
removeDuplicates("abbaca");
console.log(removeDuplicates("azxxzy"));

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  s = s.split("");
  let stack = [];
  for (let char of s) {
    if (char !== "*") {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
};

console.log(removeStars("leet**cod*e"));
