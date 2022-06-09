/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
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
function mergeKLists(lists) {
    var dummy = new ListNode(-1);
    var p = dummy;
    var priorityQueen = [];
    for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
        var i = lists_1[_i];
        if (i !== null) {
            priorityQueen.push(i);
        }
    }
    priorityQueen.sort(function (i, j) { return i.val - j.val; });
    while (priorityQueen.length != 0) {
        var temp = priorityQueen.shift();
        p.next = temp;
        p = p.next;
        if (temp.next !== null && temp.next !== undefined) {
            priorityQueen.push(temp.next);
        }
        priorityQueen.sort(function (i, j) { return i.val - j.val; });
    }
    return dummy.next;
}
;
// @lc code=end
//# sourceMappingURL=23.merge-k-sorted-lists.js.map