/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let i = 0;
  let j = 0;
  while(j < nums.length){
    if(nums[j] != nums[i]){
      i++
      nums[i] = nums[j]
    }
    j++
  }
  return i + 1;
};
// @lc code=end

