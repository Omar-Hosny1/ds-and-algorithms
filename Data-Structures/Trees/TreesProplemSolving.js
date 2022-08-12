/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  let rightNode = root.right;
  let leftNode = root.left;
  while (rightNode && leftNode) {
    let right = rightNode.right.val;
    rightNode.right.val = rightNode.left.val;
    right = rightNode.left.val;
    let left = leftNode.right.val;
    leftNode.right.val = leftNode.left.val;
    left = leftNode.left.val;
  }
};
