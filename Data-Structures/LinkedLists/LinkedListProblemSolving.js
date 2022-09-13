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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let currentNode = head;
  let binaryNums = [];
  while (currentNode) {
    binaryNums.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return binaryToDecimal(binaryNums);
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
let linkedList = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  },
};
// console.log(getDecimalValue(linkedList));

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let currentNode = head;

  while (currentNode) {
    if (currentNode.val == val) {
      head = currentNode.next;
    }
    if (currentNode.next.val == val && currentNode.next !== null) {
      currentNode.next = currentNode.next.next;
    } else if (currentNode.next.next == null && currentNode.next.val == val) {
      currentNode.next = null;
      return head;
    }
    currentNode = currentNode.next;
  }
  return head;
};

// removeElements(linkedList);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let currentNode = head;
  while (currentNode) {
    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next;
    }
    currentNode = currentNode.next;
  }
  return head;
};
// console.log(deleteDuplicates(linkedList));
// console.log(Array.from(new Set([1, 1, 1])));

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let listNodee = new ListNode();
  let list = listNodee;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      listNodee.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      listNodee.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    listNodee = listNodee.next;
  }
  !list1 ? (listNodee.next = list2) : (listNodee.next = list1);

  return list.next;
};
