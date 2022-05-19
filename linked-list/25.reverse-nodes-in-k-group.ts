/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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


 function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
   // base case
   if(head == null){
     return head;
   }
   let right =  head;
   let left = head;
   for(let i = 0; i < k; i++){
     if(right == null){
      return left; // termination condition
     }
     right = right.next;
   }
  let newHead = reverseN(left,k);
  left.next = reverseKGroup(right, k);
  return newHead;

};

function reverseN(head: ListNode , n:number ) : ListNode{
  if(n == 1 || head == null || head.next == null){
    return head;
  }
  // recursion relation
  let lastNode = reverseN(head.next,n-1)
  head.next.next = head;
  head.next = null;
  return lastNode;
} 























// function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
//   if (head == null) {
//     return head;
//   }
//   let i = 0;
//   let left = head;
//   let right = head;
//   while (i < k) {
//     if(right == null){
//       return left;
//     }
//     right = right.next;
//     i++;
//   }

//   let newNode = reverseK(left, right);
//   left.next = reverseKGroup(right, k);
//   return newNode;

// };


// function reverseK(left: ListNode, right: ListNode) {
//   let prev = null;
//   let cur = left;
//   let next = left;
//   while (cur !== right) {
//     next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }
//   return prev;
// }
// @lc code=end

