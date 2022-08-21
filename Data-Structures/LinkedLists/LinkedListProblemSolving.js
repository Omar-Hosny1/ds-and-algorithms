/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;

    prev = head;
    head = next;
  }
  return prev;
};

var middleNode = function (head) {
  let currNode = head;
  let counter = 0;
  while (currNode) {
    counter++;
    currNode = currNode.next;
  }
  currNode = head;
  let middle = Math.ceil(counter / 2);
  if (length % 2 == 0) {
    middle = counter / 2 + 1;
  }
  let i = 1;
  while (currNode) {
    if (i == middle) {
      return currNode;
    }
    i++;
    currNode = currNode.next;
  }
  return undefined;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let currentNode = head;
  let result = [];
  while (currentNode) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return result.join("") == result.reverse().join("");
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head.next) return {};
  let length = 0;
  let currentNode = head;
  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }
  let numDeletedNode = length - n + 1;
  currentNode = head;
  let i = 1;
  while (currentNode) {
    if (i == numDeletedNode - 1) {
      currentNode.next = currentNode.next.next;
    }
    currentNode = currentNode.next;
    i++;
  }

  return head;
};

let linkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};
