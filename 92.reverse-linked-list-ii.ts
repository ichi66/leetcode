/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
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



function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let dummy: ListNode = new ListNode(-1);
  dummy.next = head;
  let i = 0;
  let p = dummy;
  while (i < left - 1) {
    p = p.next;
    i++;
  }
  if (p.next == null) {
    return head;
  }
  let slow = p.next;
  let temp = slow;
  let fast = p.next.next;
  let j = 0;
  while (j < right - left && fast != null) {
    let temp = fast.next;
    fast.next = slow;
    slow = fast;
    fast = temp;
    j++;
  }
  p.next = slow;
  temp.next = fast;

  return dummy.next;


};

/// 递归
// let successor = null;

// function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
//   let dummy : ListNode = new ListNode(-1);
//   dummy.next = head;
//   let i = 0;
//   let p = dummy;
//   while (i < left -1) {
//     p = p.next;
//     i++;
//   }
//   p.next = reverseLinkedList(p.next, right - left +1);
//   return dummy.next;
// };


// function reverseLinkedList(head, n: number): ListNode {
//   if(head == null){
//     return head;
//   }
//   if (n == 1) {
//     successor = head.next;
//     return head;
//   }
//   let last: ListNode = reverseLinkedList(head.next, n - 1);
//   head.next.next = head;
//   head.next = successor;
//   return last;
// }
// @lc code=end

