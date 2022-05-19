/*
 * @lc app=leetcode id=106 lang=typescript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length == 0 || postorder.length == 0) {
    return null;
  }

  let rootVal = postorder[postorder.length-1];
  let iIndex = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);
  root.left = buildTree(inorder.slice(0, iIndex), postorder.slice(0, iIndex));
  root.right = buildTree(inorder.slice(iIndex + 1), postorder.slice(iIndex, postorder.length - 1));
  return root;
}
// @lc code=end

