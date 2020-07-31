/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true; // 둘 다 빈 노드인 경우
  if (!p || !q || p.val !== q.val) return false; // 둘 중 하나가 존재하지 않을 경우, 값이 다를 경우

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// test
isSameTree([1, 2, 3], [1, 2, 3]);
