/*
 * @lc app=leetcode id=300 lang=typescript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start

// dp table
function lengthOfLIS(nums: number[]): number {
  if(nums.length <= 1){
    return nums.length;
  }
  let res = new Array(nums.length).fill(1);
  for(let i = 1 ; i < nums.length ; i++){
    for(let j = i; j >= 0; j-- ){
      if(nums[i] > nums[j]){
        res[i] = Math.max(res[j] + 1, res[i]);
      }
    }
  }

  return Math.max(...res);
}; 
// @lc code=end

