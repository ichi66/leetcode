/*
 * @lc app=leetcode id=654 lang=typescript
 *
 * [654] Maximum Binary Tree
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
function constructMaximumBinaryTree(nums) {
    if (nums.length == 0) {
        return null;
    }
    var index = findMaxIndex(nums);
    var leftList = nums.slice(0, index);
    var rightList = nums.slice(index + 1);
    var root = new TreeNode(nums[index]);
    var left = constructMaximumBinaryTree(leftList);
    var right = constructMaximumBinaryTree(rightList);
    root.left = left;
    root.right = right;
    return root;
}
;
function findMaxIndex(nums) {
    if (nums.length === 0) {
        return -1;
    }
    var maxIndex = 0;
    var maxNum = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxIndex = i;
            maxNum = nums[i];
        }
    }
    return maxIndex;
}
// @lc code=end
//# sourceMappingURL=654.maximum-binary-tree.js.map