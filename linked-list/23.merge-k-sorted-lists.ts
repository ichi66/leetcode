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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let dummy = new ListNode(-1);
  let p = dummy;
  let priorityQueen : ListNode[] = [];
  for (let i of lists) {
    if(i !== null){
      priorityQueen.push(i);
    }
  }
  priorityQueen.sort((i, j) => i.val - j.val);

  while (priorityQueen.length != 0) {
    let temp : ListNode = priorityQueen.shift();
    p.next = temp;
    p = p.next;
    if (temp.next !== null && temp.next !== undefined) {
      priorityQueen.push(temp.next);
    }
    priorityQueen.sort((i, j) => i.val - j.val);
  }

  return dummy.next;
};
// @lc code=end

