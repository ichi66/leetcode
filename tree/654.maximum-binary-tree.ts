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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if(nums.length == 0){
    return null;
  }
  let index = findMaxIndex(nums);
  let leftList = nums.slice(0,index);
  let rightList = nums.slice(index+1);


  let root = new TreeNode(nums[index]);
  const left = constructMaximumBinaryTree(leftList);
  const right = constructMaximumBinaryTree(rightList);
  root.left = left;
  root.right = right;
  return root;
};

function findMaxIndex(nums: number[]): number{
  if(nums.length === 0){
    return -1;
  }
  let maxIndex = 0;
  let maxNum = nums[0];
  for(let i = 0; i< nums.length; i++){
    if(nums[i] > maxNum){
      maxIndex = i;
      maxNum = nums[i];
    }
  }
  return maxIndex;
}

// @lc code=end

