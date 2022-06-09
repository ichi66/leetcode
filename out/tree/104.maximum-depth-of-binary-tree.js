/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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
function maxDepth(root) {
    if (root == null) {
        return 0;
    }
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    return Math.max(left, right) + 1;
}
;
// @lc code=end
//# sourceMappingURL=104.maximum-depth-of-binary-tree.js.map