/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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


// recurtion
// function reverseList(head: ListNode | null): ListNode | null {
//   if (head == null || head.next == null) {
//     return head;
//   }
//   let last: ListNode = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return last;
// };


/// iteration
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let next = head;
  let cur = head;
  while(next != null){
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    
  }
  return prev;
};
// @lc code=end

