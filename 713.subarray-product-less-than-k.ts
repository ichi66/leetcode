/*
 * @lc app=leetcode id=713 lang=typescript
 *
 * [713] Subarray Product Less Than K
 */

// @lc code=start
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let left = 0;
  let right = 0;
  let prod = 1;
  let ans = 0;
  if (k <= 1) {
    return 0;
  }
  while (right < nums.length) {
    prod = nums[right] * prod;
    while (prod >= k && left <= right) {
      prod = prod / nums[left];
      left++;
    }
    ans = ans + right - left + 1; // tricky part

    right++
  }

  return ans;
};
// @lc code=end

