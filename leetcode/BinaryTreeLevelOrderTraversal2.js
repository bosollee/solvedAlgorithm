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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = [];
  callDFS(root, 0);
  return result.reverse();

  function callDFS(node, level) {
    if (!node) return;
    if (result[level] === undefined) result.push([node.val]);
    else result[level].push(node.val);

    callDFS(node.left, level + 1);
    callDFS(node.right, level + 1);
  }
};
