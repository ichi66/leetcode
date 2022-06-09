/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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
function removeNthFromEnd(head, n) {
    var dummy = new ListNode(-1);
    dummy.next = head;
    var fast = dummy;
    var slow = dummy;
    var i = 0;
    while (i < n + 1 && fast != null) {
        fast = fast.next;
        i++;
    }
    while (fast != null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}
;
// @lc code=end
//# sourceMappingURL=19.remove-nth-node-from-end-of-list.js.map