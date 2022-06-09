/*
 * @lc app=leetcode id=226 lang=typescript
 *
 * [226] Invert Binary Tree
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
// divide and conquer
function invertTree(root) {
    if (!root) {
        return root;
    }
    var left = invertTree(root.left);
    var right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}
;
// base  recursion
// function invertTree(root: TreeNode | null): TreeNode | null {
//   const invert = (node: TreeNode | null) => {
//     if(!node){
//       return;
//     }
//     const temp =  node.left;
//     node.left = node.right;
//     node.right = temp;
//     invert(node.left);
//     invert(node.right);
//   }
//   invert(root);
//   return root;
// };
// @lc code=end
//# sourceMappingURL=226.invert-binary-tree.js.map