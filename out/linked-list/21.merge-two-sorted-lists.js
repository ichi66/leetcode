/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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
/// 递归
function mergeTwoLists(l1, l2) {
    if (!l1 || !l2)
        return (l1 ? l1 : l2);
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
;
/// 双指针 
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//   let dummy = new ListNode(-1);
//   let p = dummy;
//   let p1 = list1;
//   let p2 = list2;
//   while (p1 != null && p2 != null) {
//     if (p1.val < p2.val) {
//       p.next = p1;
//       p1 = p1.next;
//     } else {
//       p.next = p2;
//       p2 = p2.next;
//     }
//     p = p.next;
//   }
//   if (p1 != null) {
//     p.next = p1;
//   }
//   if (p2 != null) {
//     p.next = p2;
//   }
//   return dummy.next;
// };
// @lc code=end
//# sourceMappingURL=21.merge-two-sorted-lists.js.map