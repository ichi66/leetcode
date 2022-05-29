/*
 * @lc app=leetcode id=494 lang=typescript
 *
 * [494] Target Sum
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {


  let memoMap = new Map<string, number>();

  const backtracking = (nums: number[], sum: number, i: number, target: number): number => {
    if (i == nums.length) {
      if (sum == target) {
        return 1;
      }
      return 0;
    }
    let key = `${i},${sum}`;
    if (memoMap.has(key)) {
      return memoMap.get(key);
    }

    let res = backtracking(nums, sum + nums[i], i + 1, target) + backtracking(nums, sum - nums[i], i + 1, target);
    memoMap.set(key, res);
    return res;

  }

  return backtracking(nums, 0, 0, target);
};


// @lc code=end

