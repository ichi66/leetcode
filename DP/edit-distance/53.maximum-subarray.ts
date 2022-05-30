/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  if (nums.length == 0) {
    return 0;
  }
  const dpArray: number[] = new Array(nums.length);
  dpArray[0] = nums[0];

  for (let i = 1; i < dpArray.length; i++) {
    dpArray[i] = Math.max(dpArray[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dpArray);

};
// @lc code=end

