/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if(preorder.length == 0 || inorder.length == 0){
    return null;
  }

  let root = new TreeNode(preorder[0]);
  let cindex = inorder.indexOf(preorder[0]); // left of cindex of inorder belones to left tree, right belong to right
  let leftNode = buildTree( preorder.slice(1, cindex + 1) , inorder.slice(0, cindex));
  let rightNode = buildTree(preorder.slice(cindex +1 ),  inorder.slice(cindex+1));
  root.left = leftNode;
  root.right = rightNode;
  return root;
};
// @lc code=end

