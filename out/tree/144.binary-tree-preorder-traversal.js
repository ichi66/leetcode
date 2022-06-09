/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
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
function preorderTraversal(root) {
    var res = [];
    var traversal = function (root) {
        if (root == null) {
            return;
        }
        res.push(root.val);
        traversal(root.left);
        traversal(root.right);
    };
    traversal(root);
    return res;
}
;
// @lc code=end
//# sourceMappingURL=144.binary-tree-preorder-traversal.js.map