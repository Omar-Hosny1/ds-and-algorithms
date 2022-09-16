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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let queue = [],
    list = [],
    currentNode = root;
  queue.push(currentNode);
  while (queue.length > 0) {
    currentNode = queue.shift();
    if (currentNode.val == val) return currentNode;
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return null;
};

var getMinimumDifference = function (root) {
  let order = inOrder(root, []).sort((a, b) => a - b);
  let res = Infinity;
  for (let i = 0; i < order.length; i++) {
    if (Math.abs(order[i] - order[i + 1]) < res)
      res = Math.abs(order[i] - order[i + 1]);
  }
  return res;
};

const inOrder = (root, order) => {
  if (!root) return null;
  inOrder(root.left, order);
  order.push(root.val);
  inOrder(root.right, order);
  return order;
};

var findMode = function (root) {
  let list = BFS(root);
  let map = {};
  for (let ele of list) {
    if (map[ele] == undefined) map[ele] = 1;
    else map[ele] = map[ele] + 1;
  }
  let max = Math.max(...Object.values(map));
  let res = [];
  for (let key in map) {
    if (map[key] == max) {
      res.push(key);
    }
  }
  return res;
};

function BFS(root) {
  let queue = [],
    list = [],
    currentNode = root;
  queue.push(currentNode);
  while (queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.val);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return list;
}
