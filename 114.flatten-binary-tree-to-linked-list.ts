/*
 * @lc app=leetcode id=114 lang=typescript
 *
 * [114] Flatten Binary Tree to Linked List
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if(!root){
    return;
  }
  flatten(root.left);
  flatten(root.right);
  const left:  TreeNode = root.left;
  const right: TreeNode = root.right;

  root.left = null
  root.right = left;

  let p : TreeNode = root;
  while(p.right != null){
    p = p.right;
  }
  p.right = right;


};
// @lc code=end

