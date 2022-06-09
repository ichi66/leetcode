/*
 * @lc app=leetcode id=237 lang=typescript
 *
 * [237] Delete Node in a Linked List
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root) {
    root.val = root.next.val;
    root.next = root.next.next;
}
;
// @lc code=end
//# sourceMappingURL=237.delete-node-in-a-linked-list.js.map