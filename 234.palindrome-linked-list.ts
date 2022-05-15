/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

function isPalindrome(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while(fast !=null && fast.next!=null){
    slow = slow.next;
    fast = fast.next.next;
  }
  let rightHead = reverse(slow);
  let leftHead = head;
  while(rightHead !=null && leftHead != null){
    if(rightHead.val != leftHead.val){
      return false;
    }
    rightHead = rightHead.next;
    leftHead = leftHead.next;
  }
  return true;
};


function reverse(head){
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
}


/// 递归
// let left : ListNode = new ListNode(-1);

// function isPalindrome(head: ListNode | null): boolean {
//   left = head;
//   return checkIsTheSame(head);
// };

// function checkIsTheSame(right: ListNode | null) : boolean{
//   if(right == null){
//     return true;
//   }
//   let res:boolean = checkIsTheSame(right.next);
//   res = res && (left.val ==  right.val);
//   left = left.next;
//   return res;
// }
// @lc code=end

