/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
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
function getIntersectionNode(headA, headB) {
    var lengthA = 0;
    var lengthB = 0;
    var p1 = headA;
    var p2 = headB;
    while (p1 != null) {
        p1 = p1.next;
        lengthA++;
    }
    while (p2 != null) {
        p2 = p2.next;
        lengthB++;
    }
    var p3 = lengthA > lengthB ? headA : headB; // 先动的
    var p4 = lengthA > lengthB ? headB : headA; // 后动的
    var i = 0;
    while (p3 != null && i < Math.abs(lengthA - lengthB)) {
        p3 = p3.next;
        i++;
    }
    while (p3 != null && p4 != null) {
        if (p3 === p4) {
            return p3;
        }
        p3 = p3.next;
        p4 = p4.next;
    }
    return null;
}
;
// @lc code=end
//# sourceMappingURL=160.intersection-of-two-linked-lists.js.map