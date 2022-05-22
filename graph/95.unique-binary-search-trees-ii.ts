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

function generateTrees(n: number): Array<TreeNode | null> {
  return buildTree(1,n);
};

// let tempMap = new Map<string, TreeNode[]>();
function buildTree(low:number, high: number): TreeNode[] | null{
  if(low > high){ // !important
    return [null];
  }  
  let key=  `${low},${high}`;
  // if(tempMap.has(key)){
  //   return tempMap.get(key);
  // }
  let res = [];
  for(let i= low; i<=high;i++ ){
    
    let leftNodes:TreeNode[]  =buildTree(low, i-1 );
    let rightNode: TreeNode[] = buildTree(i+1, high);
    for(let j = 0; j< leftNodes.length; j++){
      for(let k = 0; k< rightNode.length; k++){
        let root = new TreeNode(i);
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

