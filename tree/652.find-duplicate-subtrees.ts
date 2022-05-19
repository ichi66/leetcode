/*
 * @lc app=leetcode id=652 lang=typescript
 *
 * [652] Find Duplicate Subtrees
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

 const SEP = ',';
 const NULL = '#';

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  let map = new Map<string ,number>();
  let res: Array<TreeNode | null>  = []
  const travel = (root): string =>{
    if(root == null){
      return NULL;
    }
    let left =  travel(root.left);
    let right =  travel(root.right);
    let serializeStr = left + SEP + right + SEP + root.val;  // 后序位置
    if(map.has(serializeStr)){
      if(map.get(serializeStr) == 1){
        res.push(root);
      }
      map.set(serializeStr, map.get(serializeStr) + 1);
    }else{
      map.set(serializeStr,1);
    }
    return serializeStr;
  }
  travel(root);
  return res;


};




// @lc code=end

