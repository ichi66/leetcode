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
function diameterOfBinaryTree(root) {
    var maximumDiameter = 0;
    traverse(root);
    return maximumDiameter;
    function traverse(root) {
        if (!root) {
            return 0;
        }
        var left = traverse(root.left);
        var right = traverse(root.right);
        var curDiameter = left + right;
        maximumDiameter = Math.max(curDiameter, maximumDiameter);
        return 1 + Math.max(left, right);
    }
}
;
// @lc code=end
//# sourceMappingURL=543.diameter-of-binary-tree.js.map