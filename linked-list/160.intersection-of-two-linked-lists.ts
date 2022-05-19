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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let lengthA : number = 0;
  let lengthB : number = 0;
  let p1 = headA;
  let p2 =headB;
  while(p1 != null){
    p1 =p1.next;
    lengthA ++;
  }

  while(p2 != null){
    p2 =p2.next;
    lengthB ++;
  }

  let p3 = lengthA > lengthB ? headA : headB; // 先动的
  let p4 = lengthA > lengthB ? headB : headA; // 后动的
  let i = 0;
  while(p3 != null && i < Math.abs(lengthA - lengthB)){
    p3 =p3.next;
    i++;
  }
  while(p3 != null && p4 !=null){
    if(p3 === p4){
      return p3;
    }
    p3 = p3.next;
    p4 = p4.next;
  }

  return null;

};
// @lc code=end

