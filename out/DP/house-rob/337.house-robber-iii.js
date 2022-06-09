/*
 * @lc app=leetcode id=337 lang=typescript
 *
 * [337] House Robber III
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
function rob(root) {
    var dp = function (root) {
        if (!root) {
            return [0, 0];
        }
        var left = dp(root.left);
        var right = dp(root.right);
        var doIt = root.val + left[0] + right[0]; // 抢， 下家必须不抢
        var notDoIt = Math.max(left[0], left[1]) + Math.max(right[0], right[1]); // 不抢， 下家可抢可不抢
        return [notDoIt, doIt];
    };
    return Math.max.apply(Math, dp(root));
}
;
// function rob(root: TreeNode | null): number {
//   let memo = new Map<TreeNode, number>();
//   const dp = (root: TreeNode | null) => {
//     if (!root) {
//       return 0;
//     }
//     if (memo.has(root)) {
//       return memo.get(root);
//     }
//     let robIt = root.val + rob(root.right?.right) + rob(root.left?.left) + rob(root.right?.left) + rob(root.left?.right);
//     let notRob = rob(root.left) + rob(root.right);
//     let res = Math.max(robIt, notRob);
//     memo.set(root, res);
//     return res;
//   }
//   return dp(root);
// };
// @lc code=end
//# sourceMappingURL=337.house-robber-iii.js.map