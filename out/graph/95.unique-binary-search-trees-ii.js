/*
 * @lc app=leetcode id=95 lang=typescript
 *
 * [95] Unique Binary Search Trees II
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
function generateTrees(n) {
    return buildTree(1, n);
}
;
// let tempMap = new Map<string, TreeNode[]>();
function buildTree(low, high) {
    if (low > high) { // !important
        return [null];
    }
    var key = "".concat(low, ",").concat(high);
    // if(tempMap.has(key)){
    //   return tempMap.get(key);
    // }
    var res = [];
    for (var i = low; i <= high; i++) {
        var leftNodes = buildTree(low, i - 1);
        var rightNode = buildTree(i + 1, high);
        for (var j = 0; j < leftNodes.length; j++) {
            for (var k = 0; k < rightNode.length; k++) {
                var root = new TreeNode(i);
                root.left = leftNodes[j];
                root.right = rightNode[k];
                res.push(root);
            }
        }
    }
    // tempMap.set(key, res);
    return res;
}
// @lc code=end
//# sourceMappingURL=95.unique-binary-search-trees-ii.js.map