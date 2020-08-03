/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  while (head) {
    if (head.val === "checked") {
      return true;
    }
    head.val = "checked";
    head = head.next;
  }
  return false;
};
