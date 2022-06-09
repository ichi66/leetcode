/*
 * @lc app=leetcode id=297 lang=typescript
 *
 * [297] Serialize and Deserialize Binary Tree
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
/*
 * Encodes a tree to a single string.
 */
var SEP = ',';
var NULL = '#';
function serialize(root) {
    var strBuilder = '';
    var traversal = function (root) {
        if (root == null) {
            strBuilder = strBuilder + NULL + SEP;
            return;
        }
        strBuilder = strBuilder + root.val + SEP;
        traversal(root.left);
        traversal(root.right);
    };
    traversal(root);
    return strBuilder;
}
;
/*
 * Decodes your encoded data to tree.
 */
function deserialize(data) {
    var serializeStrList = data.split(SEP);
    var deserializeConstructor = function () {
        if (serializeStrList.length == 0) {
            return null;
        }
        var val = serializeStrList.shift();
        if (val == NULL) {
            return null;
        }
        var node = new TreeNode(parseInt(val));
        node.left = deserializeConstructor();
        node.right = deserializeConstructor();
        return node;
    };
    return deserializeConstructor();
}
;
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
//# sourceMappingURL=297.serialize-and-deserialize-binary-tree.js.map