/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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



function diameterOfBinaryTree(root: TreeNode | null): number {
  let maximumDiameter = 0;
  traverse(root);
  return maximumDiameter;


  function traverse(root: TreeNode ): number{
    if(!root){
      return 0;
    }
    let left = traverse(root.left);
    let right =  traverse(root.right);
  
    let curDiameter = left + right;
    maximumDiameter = Math.max(curDiameter, maximumDiameter);
    return 1 + Math.max(left, right);
  }
};



// @lc code=end

