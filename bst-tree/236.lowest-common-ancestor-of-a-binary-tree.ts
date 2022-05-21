/*
 * @lc app=leetcode id=236 lang=typescript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if(root == null){
    return null;     
  }
  if(root == p || root == q){
    return root;
  }
  let left = lowestCommonAncestor(root.left, p,q);
  let right = lowestCommonAncestor(root.right, p,q);
  if(left !=null && right !=null){
    return root;
  }

  return left !=null ? left : right;
};


// @lc code=end

