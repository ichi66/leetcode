/*
 * @lc app=leetcode id=222 lang=typescript
 *
 * [222] Count Complete Tree Nodes
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
function countNodes(root) {
    if (root == null) {
        return 0;
    }
    var h1 = 0;
    var h2 = 0;
    var p = root;
    var q = root;
    while (p) {
        p = p.left;
        h1++;
    }
    while (q) {
        q = q.right;
        h2++;
    }
    if (h1 == h2) {
        return Math.pow(2, h1) - 1;
    }
    var left = countNodes(root.left);
    var right = countNodes(root.right);
    return 1 + left + right;
}
;
// @lc code=end
//# sourceMappingURL=222.count-complete-tree-nodes.js.map