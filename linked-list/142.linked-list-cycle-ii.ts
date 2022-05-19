/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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
 function detectCycle(head: ListNode | null): ListNode | null {
  let slow : ListNode = head;
  let fast : ListNode = head;
  while(fast != null && fast.next !=null){
    slow = slow.next;
    fast = fast.next.next;
    if(slow == fast){
      break;
    }
  }
  if(fast == null || fast.next == null){
    return null;
  }


  slow = head;

  while(fast !=null){
    if(slow === fast){
      return slow;
    }
    slow = slow.next;
    fast = fast.next;
  }


  return null;


};


// function detectCycle(head: ListNode | null): ListNode | null {
//     let set = new Set<ListNode>();    
//     while(head != null){
//       if(set.has(head)){
//         return head;
//       }
//       set.add(head);
//       head = head.next;
//     }


//     return null;
// };
// @lc code=end

