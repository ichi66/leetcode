/*
 * @lc app=leetcode id=908 lang=typescript
 *
 * [876] Middle of the Linked List
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
function middleNode(head) {
    var slow = head;
    var fast = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
;
// @lc code=end
//# sourceMappingURL=876.hand-of-straights.js.map