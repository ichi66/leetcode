/*
 * @lc app=leetcode id=354 lang=typescript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
function maxEnvelopes(envelopes: number[][]): number {
  const sortedEnvelops = envelopes.sort((a, b) => a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);
  const listTocheck = sortedEnvelops.map((record) => record[1]);

  const lengthOfLIS = (nums: number[]): number => {
    if (nums.length <= 1) {
      return nums.length;
    }
    let res = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
      for (let j = i; j >= 0; j--) {
        if (nums[i] > nums[j]) {
          res[i] = Math.max(res[j] + 1, res[i]);
        }
      }
    }

    return Math.max(...res);
  };
  return lengthOfLIS(listTocheck);

};
// @lc code=end

