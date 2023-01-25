/*
The Main Deffrence Between The Single Linked List And The Double Linked List Is That
Double Linked List Has A 2 Pointers One For The Prev Element And One For The Next Element
*/

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return head;
  let currNode = head;
  while (currNode) {
    if (currNode.child) {
      let childNode = currNode.child;
      let tail = childNode;
      let next = currNode.next;
      while (tail.next) {
        tail = tail.next;
      }
      if (currNode.next) {
        currNode.next = childNode;
        childNode.prev = currNode;
        tail.next = next;
        next.prev = tail;
        currNode.child = null;
        currNode = currNode.next;
      } else {
        currNode.next = childNode;
        childNode.prev = currNode;
        currNode.child = null;
      }
    } else {
      currNode = currNode.next;
    }
  }
  return head;
};
