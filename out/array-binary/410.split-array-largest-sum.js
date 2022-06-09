/*
 * @lc app=leetcode id=410 lang=typescript
 *
 * [410] Split Array Largest Sum
 */
// @lc code=start
/// 和1101一样 只是换了一种说法
function splitArray(nums, m) {
    var left = Math.max.apply(Math, nums);
    var right = nums.reduce(function (a, b) { return a + b; }, 0);
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (subArraynum(nums, mid) <= m) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}
;
function subArraynum(nums, sum) {
    var res = 0;
    var acc = 0;
    for (var i = 0; i < nums.length; i++) {
        acc = acc + nums[i];
        if (i == nums.length - 1) {
            if (acc > sum) {
                res = res + 2;
            }
            else {
                res = res + 1;
            }
            break;
        }
        if (acc > sum) {
            res = res + 1;
            acc = nums[i];
        }
    }
    return res;
}
// @lc code=end
//# sourceMappingURL=410.split-array-largest-sum.js.map