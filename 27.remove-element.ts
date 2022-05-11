/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let i =0;
  let j = 0;
  while(j < nums.length){

    if(nums[j] != val){
      nums[i] = nums[j];
      i++
    }
    j++

  }
  return i;
};
// @lc code=end

