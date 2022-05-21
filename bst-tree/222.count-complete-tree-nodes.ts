/*
 * @lc app=leetcode id=222 lang=typescript
 *
 * [222] Count Complete Tree Nodes
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function countNodes(root: TreeNode | null): number {
  if(root == null){
    return 0;
  }
  let h1 = 0;
  let h2 = 0;
  let p = root;
  let q = root;
  while(p){
    p = p.left;
    h1++
  }

  while(q){
    q = q.right;
    h2++;
  }

  if(h1 == h2){
    return Math.pow(2, h1) -1;
  }

  let left = countNodes(root.left);
  let right = countNodes(root.right);
  return 1 + left+ right;
};
// @lc code=end

