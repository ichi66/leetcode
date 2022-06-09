/*
 * @lc app=leetcode id=538 lang=typescript
 *
 * [538] Convert BST to Greater Tree
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
function convertBST(root) {
    var sum = 0;
    var traversal = function (root) {
        if (root == null) {
            return;
        }
        traversal(root.right);
        sum = sum + root.val;
        root.val = sum;
        traversal(root.left);
    };
    traversal(root);
    return root;
}
;
// @lc code=end
//# sourceMappingURL=538.convert-bst-to-greater-tree.js.map