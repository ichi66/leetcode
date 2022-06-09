/*
 * @lc app=leetcode id=300 lang=typescript
 *
 * [300] Longest Increasing Subsequence
 */
// @lc code=start
// dp table
function lengthOfLIS(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }
    var res = new Array(nums.length).fill(1);
    for (var i = 1; i < nums.length; i++) {
        for (var j = i; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                res[i] = Math.max(res[j] + 1, res[i]);
            }
        }
    }
    return Math.max.apply(Math, res);
}
;
// @lc code=end
//# sourceMappingURL=300.longest-increasing-subsequence.js.map