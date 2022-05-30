/*
 * @lc app=leetcode id=747 lang=typescript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start

function dominantIndex(nums: number[]): number {
  let largest = 0;
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      if (nums[i] >= 2 * largest) {
        index = i;
      } else {
        index = -1;
      }
      largest = nums[i];
    } else {
      if (largest >= 2 * nums[i]) {
        continue;
      } else {
        index = -1;
      }
    }
  }
  return index;
};
// @lc code=end

