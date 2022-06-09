/*
 * @lc app=leetcode id=450 lang=typescript
 *
 * [450] Delete Node in a BST
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
function deleteNode(root, key) {
    if (root == null) {
        return null;
    }
    if (root.val == key) {
        if (root.left == null) {
            return root.right;
        }
        if (root.right == null) {
            return root.left;
        }
        var rightMin = findRightMin(root.right);
        root.right = deleteNode(root.right, rightMin.val);
        rightMin.left = root.left;
        rightMin.right = root.right;
        root = rightMin;
    }
    else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    }
    else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    }
    return root;
}
;
function findRightMin(root) {
    var p = root;
    while (p.left != null) {
        p = p.left;
    }
    return p;
}
// @lc code=end
//# sourceMappingURL=450.delete-node-in-a-bst.js.map