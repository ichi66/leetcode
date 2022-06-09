/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */
// @lc code=start
function maxSubArray(nums) {
    if (nums.length == 0) {
        return 0;
    }
    var dpArray = new Array(nums.length);
    dpArray[0] = nums[0];
    for (var i = 1; i < dpArray.length; i++) {
        dpArray[i] = Math.max(dpArray[i - 1] + nums[i], nums[i]);
    }
    return Math.max.apply(Math, dpArray);
}
;
// @lc code=end
//# sourceMappingURL=53.maximum-subarray.js.map