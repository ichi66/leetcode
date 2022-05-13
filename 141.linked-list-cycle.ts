/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

/// extra space
function hasCycle(head: ListNode | null): boolean {
  let set = new Set();
  while (head != null) {
    if (set.has(head)) {
      return true;
    }
    set.add(head);
    head = head.next;
  }
  return false;
};


/// two pointer
// function hasCycle(head: ListNode | null): boolean {
//   let slow: ListNode = head;
//   let fast: ListNode = head;

//   while (fast != null && fast.next != null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow == fast) {
//       return true;
//     }
//   }


//   return false;
// };
// @lc code=end

