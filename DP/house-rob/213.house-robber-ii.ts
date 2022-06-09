/*
 * @lc app=leetcode id=213 lang=typescript
 *
 * [213] House Robber II
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length == 1) {
    return nums[0];
  }
  return Math.max(originRob(nums.slice(0, -1)), originRob(nums.slice(1)));
};


function originRob(nums: number[]): number {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return nums[0];
  }
  let pre = 0;
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
      let useCurrent = nums[i] + pre;
      let notUseCurrent = cur;
      pre = cur;
      cur = Math.max(useCurrent, notUseCurrent);
  }
  return cur;
};

// @lc code=end

