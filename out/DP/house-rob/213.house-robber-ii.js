/*
 * @lc app=leetcode id=213 lang=typescript
 *
 * [213] House Robber II
 */
// @lc code=start
function rob(nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    return Math.max(originRob(nums.slice(0, -1)), originRob(nums.slice(1)));
}
;
function originRob(nums) {
    if (nums.length == 0) {
        return 0;
    }
    if (nums.length == 1) {
        return nums[0];
    }
    var pre = 0;
    var cur = nums[0];
    for (var i = 1; i < nums.length; i++) {
        var useCurrent = nums[i] + pre;
        var notUseCurrent = cur;
        pre = cur;
        cur = Math.max(useCurrent, notUseCurrent);
    }
    return cur;
}
;
// @lc code=end
//# sourceMappingURL=213.house-robber-ii.js.map