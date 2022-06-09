/*
 * @lc app=leetcode id=494 lang=typescript
 *
 * [494] Target Sum
 */
// @lc code=start
function findTargetSumWays(nums, target) {
    var memoMap = new Map();
    var backtracking = function (nums, sum, i, target) {
        if (i == nums.length) {
            if (sum == target) {
                return 1;
            }
            return 0;
        }
        var key = "".concat(i, ",").concat(sum);
        if (memoMap.has(key)) {
            return memoMap.get(key);
        }
        var res = backtracking(nums, sum + nums[i], i + 1, target) + backtracking(nums, sum - nums[i], i + 1, target);
        memoMap.set(key, res);
        return res;
    };
    return backtracking(nums, 0, 0, target);
}
;
// @lc code=end
//# sourceMappingURL=494.target-sum.js.map