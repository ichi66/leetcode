/*
 * @lc app=leetcode id=800 lang=typescript
 *
 * [784] Letter Case Permutation
 */

// @lc code=start
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {

  const traversal = (root: TreeNode | null): TreeNode | null => {
    if (!root) {
      return new TreeNode(val);
    }

    if (root.val > val) {
      root.right = traversal(root.right);
    } 
    if (root.val < val) {
      root.left = traversal(root.left);
    }
    return root;
  }
  traversal(root);
  return root;
};
// @lc code=end

