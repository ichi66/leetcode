/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
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

function kthSmallest(root: TreeNode | null, k: number): number {
  let times: number = 0;
  let res: number = 0;
  const traversal = (root: TreeNode | null) => {
    if (root == null) {
      return;
    }
    traversal(root.left);
    times++;
    if (times == k) {
      res = root.val;
      return;
    }
    traversal(root.right);
  }
  traversal(root);

  return res;
};
// @lc code=end

