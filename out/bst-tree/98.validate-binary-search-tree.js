/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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
function isValidBST(root) {
    var min = Number.NEGATIVE_INFINITY;
    var max = Number.POSITIVE_INFINITY;
    function validate(root, min, max) {
        if (root == null) {
            return true;
        }
        if (root.val > min && root.val < max) {
            return validate(root.left, min, root.val) && validate(root.right, root.val, max);
        }
        return false;
    }
    return validate(root.left, min, root.val) && validate(root.right, root.val, max);
}
;
// @lc code=end
//# sourceMappingURL=98.validate-binary-search-tree.js.map